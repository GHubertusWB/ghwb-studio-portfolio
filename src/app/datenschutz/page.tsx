'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Back Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link 
            href="/"
            className="inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Zurück zur Startseite</span>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-semibold text-foreground leading-tight tracking-tight mb-6 md:text-3xl">
            Datenschutzerklärung
          </h1>
          <div className="w-12 h-px bg-border" />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-neutral dark:prose-invert max-w-none"
        >
          <div className="bg-background/60 backdrop-blur-sm rounded-lg border border-border/30 p-8 space-y-8">
            
            {/* Allgemeine Hinweise */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                1. Datenschutz auf einen Blick
              </h2>
              
              <h3 className="text-xl font-medium text-foreground mb-3 mt-6">
                Allgemeine Hinweise
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
                personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene 
                Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>

              <h3 className="text-xl font-medium text-foreground mb-3 mt-6">
                Datenerfassung auf dieser Website
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                <strong className="text-foreground">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. 
                Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
              </p>
            </section>

            {/* Verantwortlicher */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                2. Verantwortliche Stelle
              </h2>
              <div className="space-y-2 text-muted-foreground">
                <p><strong className="text-foreground">Gerd-Hubertus Weidenbrücher-Britze</strong></p>
                <p>Südstraße 5<br />83607 Holzkirchen</p>
                <p><strong className="text-foreground">Telefon:</strong> 017687306551</p>
                <p><strong className="text-foreground">E-Mail:</strong> office@ghwbstudio.de</p>
              </div>
            </section>

            {/* Datenerfassung */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                3. Datenerfassung auf dieser Website
              </h2>
              
              <h3 className="text-xl font-medium text-foreground mb-3">
                Kontaktformular
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus 
                dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks 
                Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-3">
                <strong className="text-foreground">Zweck der Datenverarbeitung:</strong> Bearbeitung Ihrer Kontaktanfrage
              </p>
              <p className="text-muted-foreground leading-relaxed mb-3">
                <strong className="text-foreground">Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)
              </p>
              <p className="text-muted-foreground leading-relaxed mb-3">
                <strong className="text-foreground">Speicherdauer:</strong> Die Daten werden nur solange gespeichert, 
                bis Ihre Anfrage vollständig beantwortet wurde.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Empfänger:</strong> Die E-Mails werden ausschließlich 
                an office@ghwbstudio.de weitergeleitet.
              </p>

              <h3 className="text-xl font-medium text-foreground mb-3 mt-6">
                Server-Log-Dateien
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Der Provider der Seiten erhebt und speichert automatisch Informationen in 
                so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt:
              </p>
              <ul className="text-muted-foreground leading-relaxed list-disc pl-6 space-y-1">
                <li>Browsertyp und Browserversion</li>
                <li>verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Diese Daten werden nicht mit anderen Datenquellen zusammengeführt und dienen 
                ausschließlich der Sicherstellung eines störungsfreien Betriebs der Website.
              </p>
            </section>

            {/* Ihre Rechte */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                4. Ihre Rechte
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Sie haben jederzeit das Recht:
              </p>
              <ul className="text-muted-foreground leading-relaxed list-disc pl-6 space-y-2">
                <li><strong className="text-foreground">Auskunft</strong> über Ihre bei uns gespeicherten personenbezogenen Daten und deren Verarbeitung (Art. 15 DSGVO)</li>
                <li><strong className="text-foreground">Berichtigung</strong> unrichtiger personenbezogener Daten (Art. 16 DSGVO)</li>
                <li><strong className="text-foreground">Löschung</strong> Ihrer bei uns gespeicherten personenbezogenen Daten (Art. 17 DSGVO)</li>
                <li><strong className="text-foreground">Einschränkung der Verarbeitung</strong> Ihrer personenbezogenen Daten (Art. 18 DSGVO)</li>
                <li><strong className="text-foreground">Datenübertragbarkeit</strong> (Art. 20 DSGVO)</li>
                <li><strong className="text-foreground">Widerspruch</strong> gegen die Verarbeitung Ihrer personenbezogenen Daten (Art. 21 DSGVO)</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Zur Ausübung dieser Rechte können Sie sich jederzeit unter der im Impressum 
                angegebenen Adresse an uns wenden.
              </p>
            </section>

            {/* SSL-Verschlüsselung */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                5. SSL- bzw. TLS-Verschlüsselung
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher 
                Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie 
                daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt und an 
                dem Schloss-Symbol in Ihrer Browserzeile.
              </p>
            </section>

            {/* Externe Dienste */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                6. Externe Dienste
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Diese Website verwendet externe Bildressourcen von Unsplash (images.unsplash.com) 
                für Illustrationszwecke. Beim Laden dieser Bilder wird Ihre IP-Adresse an Unsplash 
                übertragen. Weitere Informationen finden Sie in der 
                <a href="https://unsplash.com/privacy" target="_blank" rel="noopener noreferrer" 
                   className="text-foreground underline hover:no-underline">
                  Datenschutzerklärung von Unsplash
                </a>.
              </p>
            </section>

          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="w-12 h-px bg-border mx-auto mb-6" />
          <p className="text-sm text-muted-foreground">
            Stand: {new Date().toLocaleDateString('de-DE')}
          </p>
        </motion.div>

      </div>
    </div>
  )
}
