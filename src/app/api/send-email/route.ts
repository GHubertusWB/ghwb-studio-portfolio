import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// --- Rate Limiting ---
const rateLimitMap = new Map<string, { count: number; firstRequest: number }>()
const RATE_LIMIT_WINDOW = 15 * 60 * 1000 // 15 Minuten
const RATE_LIMIT_MAX = 5 // max 5 Anfragen pro IP pro Fenster

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

    const { name, email, message, selectedSubjects, variant } = await request.json()

    // Validierung der erforderlichen Felder
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, E-Mail und Nachricht sind erforderlich' },
        { status: 400 }
      )
    }

    // E-Mail-Validierung
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.' },
        { status: 400 }
      )
    }

    // Eingabelängen begrenzen
    if (name.length > 200 || email.length > 320 || message.length > 5000) {
      return NextResponse.json(
        { error: 'Eingabe zu lang.' },
        { status: 400 }
      )
    }

        // E-Mail-Transporter konfigurieren
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER || '',
        pass: process.env.SMTP_PASSWORD || '',
      }
    })

    // Verbindung testen
    try {
      await transporter.verify()
    } catch (verifyError) {
      return NextResponse.json(
        { error: 'SMTP-Verbindung fehlgeschlagen. Bitte prüfen Sie die Konfiguration.' },
        { status: 500 }
      )
    }

    // Betreff basierend auf Variante und ausgewählten Themen erstellen
    let subjectPrefix = ''
    switch (variant) {
      case 'uxui':
        subjectPrefix = 'UX/UI'
        break
      case 'photography':
        subjectPrefix = 'Fotografie'
        break
      default:
        subjectPrefix = 'Kunst'
        break
    }

    const selectedSubjectsText = selectedSubjects && selectedSubjects.length > 0
      ? ` - ${selectedSubjects.join(', ')}`
      : ''

    const subject = `${subjectPrefix} Anfrage${selectedSubjectsText} - ${name}`

    // E-Mail-Inhalt erstellen
    const emailContent = `
Neue Kontaktanfrage über das Portfolio

Variante: ${subjectPrefix}
${selectedSubjects && selectedSubjects.length > 0 ? `Ausgewählte Themen: ${selectedSubjects.join(', ')}` : ''}

Name: ${name}
E-Mail: ${email}

Nachricht:
${message}

---
Diese E-Mail wurde automatisch über das Kontaktformular auf ghwbstudio.de gesendet.
    `.trim()

    // HTML-escaped Werte für sichere E-Mail
    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br>')
    const safeSubjects = selectedSubjects?.map((s: string) => escapeHtml(s))

    // E-Mail senden
    const mailOptions = {
      from: `"Kontaktformular" <${process.env.SMTP_USER}>`,
      to: 'office@ghwbstudio.de',
      replyTo: email,
      subject: subject,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #06b6d4; padding-bottom: 10px;">
            Neue Kontaktanfrage über das Portfolio
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 15px; margin: 20px 0; border-left: 4px solid #06b6d4;">
            <strong>Variante:</strong> ${escapeHtml(subjectPrefix)}<br>
            ${safeSubjects && safeSubjects.length > 0 
              ? `<strong>Ausgewählte Themen:</strong> ${safeSubjects.join(', ')}<br>` 
              : ''
            }
          </div>

          <div style="margin: 20px 0;">
            <strong>Name:</strong> ${safeName}<br>
            <strong>E-Mail:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a>
          </div>

          <div style="margin: 20px 0;">
            <strong>Nachricht:</strong>
            <div style="background-color: #f8f9fa; padding: 15px; margin-top: 10px; border-radius: 5px;">
              ${safeMessage}
            </div>
          </div>

          <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
          <p style="color: #666; font-size: 12px;">
            Diese E-Mail wurde automatisch über das Kontaktformular auf ghwbstudio.de gesendet.
          </p>
        </div>
      `
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'E-Mail erfolgreich gesendet' },
      { status: 200 }
    )

  } catch (error) {
    console.error('E-Mail-Fehler:', error)
    return NextResponse.json(
      { error: 'Fehler beim Senden der E-Mail. Bitte versuchen Sie es später erneut.' },
      { status: 500 }
    )
  }
}
