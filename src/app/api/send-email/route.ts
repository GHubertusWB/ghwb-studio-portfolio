import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    console.log('📧 API: E-Mail-Anfrage empfangen')
    const { name, email, message, selectedSubjects, variant } = await request.json()

    // Validierung der erforderlichen Felder
    if (!name || !email || !message) {
      console.log('❌ Validierung fehlgeschlagen:', { name: !!name, email: !!email, message: !!message })
      return NextResponse.json(
        { error: 'Name, E-Mail und Nachricht sind erforderlich' },
        { status: 400 }
      )
    }

    console.log('✅ Validierung erfolgreich:', { variant, selectedSubjects })

    // E-Mail-Transporter konfigurieren
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER || '',
        pass: process.env.SMTP_PASSWORD || '',
      },
      debug: true, // Aktiviere Debug-Modus
      logger: true
    })

    console.log('🔧 SMTP konfiguriert:', {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER ? '***konfiguriert***' : 'FEHLT',
      pass: process.env.SMTP_PASSWORD ? '***konfiguriert***' : 'FEHLT'
    })

    // Verbindung testen
    try {
      await transporter.verify()
      console.log('✅ SMTP-Verbindung erfolgreich')
    } catch (verifyError) {
      console.error('❌ SMTP-Verbindung fehlgeschlagen:', verifyError)
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

    // E-Mail senden
    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: 'office@ghwbstudio.de',
      subject: subject,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #06b6d4; padding-bottom: 10px;">
            Neue Kontaktanfrage über das Portfolio
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 15px; margin: 20px 0; border-left: 4px solid #06b6d4;">
            <strong>Variante:</strong> ${subjectPrefix}<br>
            ${selectedSubjects && selectedSubjects.length > 0 
              ? `<strong>Ausgewählte Themen:</strong> ${selectedSubjects.join(', ')}<br>` 
              : ''
            }
          </div>

          <div style="margin: 20px 0;">
            <strong>Name:</strong> ${name}<br>
            <strong>E-Mail:</strong> <a href="mailto:${email}">${email}</a>
          </div>

          <div style="margin: 20px 0;">
            <strong>Nachricht:</strong>
            <div style="background-color: #f8f9fa; padding: 15px; margin-top: 10px; border-radius: 5px;">
              ${message.replace(/\n/g, '<br>')}
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
    console.log('✅ E-Mail erfolgreich gesendet')

    return NextResponse.json(
      { message: 'E-Mail erfolgreich gesendet' },
      { status: 200 }
    )

  } catch (error) {
    console.error('❌ Fehler beim Senden der E-Mail:', error)
    
    // Detaillierte Fehlerausgabe
    if (error instanceof Error) {
      console.error('Fehler-Details:', {
        name: error.name,
        message: error.message,
        stack: error.stack
      })
    }
    
    return NextResponse.json(
      { 
        error: 'Fehler beim Senden der E-Mail',
        details: error instanceof Error ? error.message : 'Unbekannter Fehler'
      },
      { status: 500 }
    )
  }
}
