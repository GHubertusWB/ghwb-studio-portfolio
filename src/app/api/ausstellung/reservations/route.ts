import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// In-Memory Store für Reservierungen (wird bei Server-Neustart zurückgesetzt)
// Für Produktion: Datenbank verwenden (z.B. Vercel KV, Supabase, etc.)
const reservedArtworkIds = new Set<string>()

export async function GET() {
  return NextResponse.json({
    reservedIds: Array.from(reservedArtworkIds),
  })
}

export async function POST(request: NextRequest) {
  try {
    const {
      artworkId,
      artworkTitle,
      name,
      email,
      phone,
      address,
      priceOffer,
      message,
    } = await request.json()

    // Validierung
    if (!artworkId || !name?.trim() || !email?.trim()) {
      return NextResponse.json(
        { error: 'Bitte geben Sie mindestens Name und E-Mail-Adresse an.' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.' },
        { status: 400 }
      )
    }

    // Prüfen ob bereits reserviert
    if (reservedArtworkIds.has(artworkId)) {
      return NextResponse.json(
        { error: 'Dieses Werk ist bereits reserviert.' },
        { status: 409 }
      )
    }

    // E-Mail senden
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER || '',
        pass: process.env.SMTP_PASSWORD || '',
      },
    })

    // Verbindung testen
    try {
      await transporter.verify()
    } catch {
      // SMTP nicht konfiguriert – Reservierung trotzdem speichern
      console.warn('SMTP nicht verfügbar – Reservierung wird ohne E-Mail-Versand gespeichert.')
    }

    const subject = `Reservierung: „${artworkTitle}" – ${name}`

    const emailContent = `
Neue Reservierungsanfrage – Kunst im Schaufenster

Werk: ${artworkTitle}
Werk-ID: ${artworkId}

Name: ${name}
E-Mail: ${email}
${phone ? `Telefon: ${phone}` : ''}
${address ? `Adresse: ${address}` : ''}
${priceOffer ? `Preisvorschlag: ${priceOffer} €` : ''}
${message ? `Nachricht: ${message}` : ''}

---
Diese Reservierung wurde über ghwbstudio.de/ausstellung-holzkirchen gesendet.
    `.trim()

    const mailOptions = {
      from: `"Reservierung – ${name}" <${process.env.SMTP_USER}>`,
      to: 'office@ghwbstudio.de',
      replyTo: email,
      subject,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #f59e0b; padding-bottom: 10px;">
            Neue Reservierungsanfrage
          </h2>
          
          <div style="background-color: #fef3c7; padding: 15px; margin: 20px 0; border-left: 4px solid #f59e0b; border-radius: 4px;">
            <strong>Werk:</strong> „${artworkTitle}"<br>
            <strong>Werk-ID:</strong> ${artworkId}
          </div>

          <div style="margin: 20px 0;">
            <strong>Name:</strong> ${name}<br>
            <strong>E-Mail:</strong> <a href="mailto:${email}">${email}</a><br>
            ${phone ? `<strong>Telefon:</strong> ${phone}<br>` : ''}
            ${address ? `<strong>Adresse:</strong> ${address}<br>` : ''}
            ${priceOffer ? `<strong>Preisvorschlag:</strong> ${priceOffer} €<br>` : ''}
          </div>

          ${message ? `
          <div style="margin: 20px 0;">
            <strong>Nachricht:</strong>
            <div style="background-color: #f8f9fa; padding: 15px; margin-top: 10px; border-radius: 5px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          ` : ''}

          <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
          <p style="color: #666; font-size: 12px;">
            Diese Reservierung wurde über ghwbstudio.de/ausstellung-holzkirchen gesendet.
          </p>
        </div>
      `,
    }

    try {
      await transporter.sendMail(mailOptions)
    } catch (mailError) {
      console.error('E-Mail-Versand fehlgeschlagen:', mailError)
      // Reservierung trotzdem speichern
    }

    // Reservierung speichern
    reservedArtworkIds.add(artworkId)

    return NextResponse.json(
      { message: 'Reservierung erfolgreich eingegangen.', artworkId },
      { status: 200 }
    )
  } catch (error) {
    console.error('Reservierungsfehler:', error)
    return NextResponse.json(
      {
        error: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.',
        details: error instanceof Error ? error.message : 'Unbekannter Fehler',
      },
      { status: 500 }
    )
  }
}
