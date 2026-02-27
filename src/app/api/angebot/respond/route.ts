import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { angebote } from '@/data/angebote.config'

// --- Rate Limiting ---
const rateLimitMap = new Map<string, { count: number; firstRequest: number }>()
const RATE_LIMIT_WINDOW = 15 * 60 * 1000
const RATE_LIMIT_MAX = 5

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)
  if (!entry || now - entry.firstRequest > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { count: 1, firstRequest: now })
    return false
  }
  entry.count++
  return entry.count > RATE_LIMIT_MAX
}

// --- HTML Escaping ---
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function POST(request: NextRequest) {
  try {
    // Rate Limiting
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Zu viele Anfragen. Bitte versuchen Sie es später erneut.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    const { angebotId, action, message, signaturName } = body

    // Validierung
    if (!angebotId || !action || typeof angebotId !== 'string' || typeof action !== 'string') {
      return NextResponse.json({ error: 'Ungültige Anfrage.' }, { status: 400 })
    }

    if (!['accept', 'revision'].includes(action)) {
      return NextResponse.json({ error: 'Ungültige Aktion.' }, { status: 400 })
    }

    if (action === 'accept') {
      if (!signaturName || typeof signaturName !== 'string' || signaturName.trim().length < 2) {
        return NextResponse.json({ error: 'Bitte geben Sie Ihren vollständigen Namen ein.' }, { status: 400 })
      }
      if (signaturName.length > 200) {
        return NextResponse.json({ error: 'Name zu lang.' }, { status: 400 })
      }
    }

    if (action === 'revision') {
      if (!message || typeof message !== 'string' || message.trim().length === 0) {
        return NextResponse.json({ error: 'Bitte geben Sie Ihre Änderungswünsche ein.' }, { status: 400 })
      }
      if (message.length > 5000) {
        return NextResponse.json({ error: 'Nachricht zu lang (max. 5000 Zeichen).' }, { status: 400 })
      }
    }

    // Angebot verifizieren (existiert und nicht abgelaufen)
    const angebot = angebote.find(a => a.id === angebotId)
    if (!angebot) {
      return NextResponse.json({ error: 'Angebot nicht gefunden.' }, { status: 404 })
    }

    if (new Date() > new Date(angebot.expiresAt)) {
      return NextResponse.json({ error: 'Dieses Angebot ist abgelaufen.' }, { status: 410 })
    }

    // E-Mail-Transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER || '',
        pass: process.env.SMTP_PASSWORD || '',
      },
    })

    try {
      await transporter.verify()
    } catch {
      return NextResponse.json({ error: 'E-Mail-Versand derzeit nicht möglich.' }, { status: 500 })
    }

    const timestamp = new Date().toLocaleString('de-DE', {
      timeZone: 'Europe/Berlin',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })

    // IP & User-Agent für Protokollierung
    const userAgent = escapeHtml(request.headers.get('user-agent') || 'Unbekannt')

    const safeKunde = escapeHtml(angebot.kunde)
    const safeId = escapeHtml(angebot.id)

    let subject: string
    let htmlBody: string

    if (action === 'accept') {
      const safeName = escapeHtml(signaturName.trim())
      subject = `✅ Angebot beauftragt – ${angebot.kunde}`
      htmlBody = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f8f9fa; border-radius: 12px;">
          <div style="background: #065f46; color: white; padding: 20px 24px; border-radius: 8px; margin-bottom: 24px;">
            <h1 style="margin: 0; font-size: 20px;">✅ Angebot beauftragt</h1>
          </div>
          <div style="background: white; padding: 24px; border-radius: 8px; border: 1px solid #e5e7eb;">
            <p style="margin: 0 0 12px; color: #374151;"><strong>Kunde:</strong> ${safeKunde}</p>
            <p style="margin: 0 0 12px; color: #374151;"><strong>Angebots-ID:</strong> <code style="background: #f3f4f6; padding: 2px 6px; border-radius: 4px; font-size: 13px;">${safeId}</code></p>
            <p style="margin: 0 0 12px; color: #374151;"><strong>Zeitpunkt:</strong> ${escapeHtml(timestamp)}</p>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
            <p style="margin: 0 0 8px; color: #374151; font-weight: 600;">Digitale Signatur:</p>
            <div style="background: #f0fdf4; border: 1px solid #86efac; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
              <p style="margin: 0 0 4px; color: #065f46; font-size: 18px; font-weight: 600;">${safeName}</p>
              <p style="margin: 0; color: #6b7280; font-size: 12px;">AGB akzeptiert: Ja</p>
            </div>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
            <p style="margin: 0 0 4px; color: #6b7280; font-size: 12px;"><strong>IP-Adresse:</strong> ${escapeHtml(ip)}</p>
            <p style="margin: 0 0 4px; color: #6b7280; font-size: 12px;"><strong>User-Agent:</strong> ${userAgent}</p>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
            <p style="margin: 0; color: #059669; font-weight: 600;">Das Angebot wurde vom Kunden verbindlich beauftragt.</p>
          </div>
          <p style="margin: 16px 0 0; color: #9ca3af; font-size: 12px; text-align: center;">GHWB Studio · Automatische Benachrichtigung</p>
        </div>
      `
    } else {
      const safeMessage = escapeHtml(message.trim())
      subject = `✏️ Änderungswünsche – ${angebot.kunde}`
      htmlBody = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f8f9fa; border-radius: 12px;">
          <div style="background: #92400e; color: white; padding: 20px 24px; border-radius: 8px; margin-bottom: 24px;">
            <h1 style="margin: 0; font-size: 20px;">✏️ Änderungswünsche zum Angebot</h1>
          </div>
          <div style="background: white; padding: 24px; border-radius: 8px; border: 1px solid #e5e7eb;">
            <p style="margin: 0 0 12px; color: #374151;"><strong>Kunde:</strong> ${safeKunde}</p>
            <p style="margin: 0 0 12px; color: #374151;"><strong>Angebots-ID:</strong> <code style="background: #f3f4f6; padding: 2px 6px; border-radius: 4px; font-size: 13px;">${safeId}</code></p>
            <p style="margin: 0 0 12px; color: #374151;"><strong>Zeitpunkt:</strong> ${escapeHtml(timestamp)}</p>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
            <p style="margin: 0 0 8px; color: #374151; font-weight: 600;">Änderungswünsche:</p>
            <div style="background: #fffbeb; border: 1px solid #fde68a; border-radius: 8px; padding: 16px; white-space: pre-wrap; color: #92400e; font-size: 14px; line-height: 1.6;">${safeMessage}</div>
          </div>
          <p style="margin: 16px 0 0; color: #9ca3af; font-size: 12px; text-align: center;">GHWB Studio · Automatische Benachrichtigung</p>
        </div>
      `
    }

    await transporter.sendMail({
      from: `"Angebotssystem" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER || 'office@ghwbstudio.de',
      subject,
      html: htmlBody,
    })

    // Bestätigungs-E-Mail an Kunden
    if (action === 'accept' && angebot.kundeEmail) {
      const safeName = escapeHtml(signaturName.trim())
      const confirmationHtml = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f8f9fa; border-radius: 12px;">
          <div style="background: #1a1a2e; color: white; padding: 20px 24px; border-radius: 8px; margin-bottom: 24px;">
            <h1 style="margin: 0; font-size: 20px;">Auftragsbestätigung</h1>
          </div>
          <div style="background: white; padding: 24px; border-radius: 8px; border: 1px solid #e5e7eb;">
            <p style="margin: 0 0 16px; color: #374151;">Hallo ${safeKunde},</p>
            <p style="margin: 0 0 16px; color: #374151; line-height: 1.6;">vielen Dank für Ihre Beauftragung! Hiermit bestätigen wir den Eingang Ihres Auftrags.</p>
            <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
              <p style="margin: 0 0 8px; color: #374151;"><strong>Angebots-ID:</strong> <code style="background: #e5e7eb; padding: 2px 6px; border-radius: 4px; font-size: 13px;">${safeId}</code></p>
              <p style="margin: 0 0 8px; color: #374151;"><strong>Digitale Signatur:</strong> ${safeName}</p>
              <p style="margin: 0 0 8px; color: #374151;"><strong>Zeitpunkt:</strong> ${escapeHtml(timestamp)}</p>
              <p style="margin: 0; color: #374151;"><strong>AGB akzeptiert:</strong> Ja</p>
            </div>
            <p style="margin: 0 0 16px; color: #374151; line-height: 1.6;">Wir werden uns in Kürze bei Ihnen melden, um die nächsten Schritte zu besprechen.</p>
            <p style="margin: 0 0 4px; color: #374151;">Mit freundlichen Grüßen,</p>
            <p style="margin: 0; color: #374151; font-weight: 600;">GHWB Studio</p>
          </div>
          <p style="margin: 16px 0 0; color: #9ca3af; font-size: 12px; text-align: center;">Diese E-Mail wurde automatisch generiert. Bei Fragen antworten Sie einfach auf diese E-Mail.</p>
        </div>
      `

      try {
        await transporter.sendMail({
          from: `"GHWB Studio" <${process.env.SMTP_USER}>`,
          to: angebot.kundeEmail,
          replyTo: process.env.SMTP_USER || 'office@ghwbstudio.de',
          subject: `Auftragsbestätigung – GHWB Studio`,
          html: confirmationHtml,
        })
      } catch {
        // Bestätigungsmail fehlgeschlagen – kein Abbruch, Studio wurde bereits benachrichtigt
        console.error('Bestätigungs-E-Mail an Kunden fehlgeschlagen')
      }
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Ein Fehler ist aufgetreten.' }, { status: 500 })
  }
}
