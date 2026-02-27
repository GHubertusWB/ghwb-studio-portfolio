'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function AGB() {
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
            Allgemeine Geschäftsbedingungen
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

            {/* § 1 Geltungsbereich */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                § 1 Geltungsbereich
              </h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  (1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend &quot;AGB&quot;) gelten für alle Verträge, die zwischen 
                  Gerd-Hubertus Weidenbrücher-Britze, Südstraße 5, 83607 Holzkirchen (nachfolgend &quot;GHWB Studio&quot;) 
                  und dem Auftraggeber (nachfolgend &quot;Kunde&quot;) geschlossen werden.
                </p>
                <p>
                  (2) Die AGB gelten für Leistungen im Bereich UX/UI-Design, Webdesign, Branding, Beratung, 
                  Workshops, Schulungen und verwandte kreative Dienstleistungen.
                </p>
                <p>
                  (3) Abweichende Bedingungen des Kunden werden nicht anerkannt, es sei denn, GHWB Studio 
                  stimmt ihrer Geltung ausdrücklich schriftlich zu.
                </p>
              </div>
            </section>

            {/* § 2 Vertragsschluss */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                § 2 Vertragsschluss & Angebote
              </h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  (1) Angebote von GHWB Studio sind freibleibend und unverbindlich, sofern sie nicht ausdrücklich 
                  als verbindlich gekennzeichnet sind.
                </p>
                <p>
                  (2) Ein Vertrag kommt zustande, wenn der Kunde ein Angebot annimmt – schriftlich, per E-Mail 
                  oder über das digitale Angebotssystem auf dieser Website – und GHWB Studio die Annahme bestätigt.
                </p>
                <p>
                  (3) Die Beauftragung über das digitale Angebotssystem (Eingabe des vollständigen Namens und 
                  Bestätigung der AGB) gilt als verbindliche Willenserklärung im Sinne des § 145 BGB.
                </p>
                <p>
                  (4) Angebote sind zeitlich befristet. Das Gültigkeitsdatum ist im jeweiligen Angebot angegeben. 
                  Nach Ablauf der Frist erlischt das Angebot automatisch.
                </p>
              </div>
            </section>

            {/* § 3 Leistungsumfang */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                § 3 Leistungsumfang
              </h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  (1) Der Umfang der Leistungen ergibt sich aus dem jeweiligen Angebot bzw. der individuellen 
                  Vereinbarung.
                </p>
                <p>
                  (2) Änderungen oder Erweiterungen des Leistungsumfangs bedürfen der schriftlichen Vereinbarung 
                  und können zu einer Anpassung der Vergütung und/oder der Lieferfrist führen.
                </p>
                <p>
                  (3) GHWB Studio erbringt die Leistungen nach bestem Wissen und Gewissen unter Berücksichtigung 
                  des aktuellen Stands der Technik.
                </p>
              </div>
            </section>

            {/* § 4 Mitwirkungspflichten */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                § 4 Mitwirkungspflichten des Kunden
              </h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  (1) Der Kunde stellt alle für die Durchführung des Auftrags notwendigen Informationen, 
                  Materialien und Zugänge rechtzeitig und kostenfrei zur Verfügung.
                </p>
                <p>
                  (2) Verzögerungen, die durch mangelnde Mitwirkung des Kunden entstehen, gehen nicht 
                  zulasten von GHWB Studio. Vereinbarte Fristen verlängern sich entsprechend.
                </p>
                <p>
                  (3) Der Kunde benennt eine Ansprechperson, die für Rückfragen und Freigaben zuständig ist.
                </p>
              </div>
            </section>

            {/* § 5 Vergütung & Zahlung */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                § 5 Vergütung & Zahlungsbedingungen
              </h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  (1) Die Vergütung ergibt sich aus dem jeweiligen Angebot. Alle Preise verstehen sich in Euro 
                  und als Nettobeträge zuzüglich der gesetzlichen Umsatzsteuer, sofern nicht anders angegeben.
                </p>
                <p>
                  (2) Rechnungen sind innerhalb von 14 Tagen nach Rechnungsstellung ohne Abzug zahlbar, 
                  sofern nicht anders vereinbart.
                </p>
                <p>
                  (3) Bei größeren Projekten kann eine Anzahlung von bis zu 50 % des Gesamtbetrags vor 
                  Projektbeginn vereinbart werden.
                </p>
                <p>
                  (4) Bei Zahlungsverzug ist GHWB Studio berechtigt, Verzugszinsen in gesetzlicher Höhe 
                  zu berechnen und die weitere Leistungserbringung bis zum Zahlungseingang einzustellen.
                </p>
              </div>
            </section>

            {/* § 6 Urheberrecht & Nutzungsrechte */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                § 6 Urheberrecht & Nutzungsrechte
              </h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  (1) Alle im Rahmen des Auftrags erstellten Werke (Designs, Konzepte, Texte, Code etc.) 
                  unterliegen dem Urheberrecht. Das Urheberrecht verbleibt bei GHWB Studio.
                </p>
                <p>
                  (2) Mit vollständiger Zahlung der vereinbarten Vergütung erhält der Kunde das einfache 
                  Nutzungsrecht an den Arbeitsergebnissen für den vereinbarten Zweck.
                </p>
                <p>
                  (3) Eine Weitergabe an Dritte oder eine über den vereinbarten Zweck hinausgehende Nutzung 
                  bedarf der vorherigen schriftlichen Zustimmung von GHWB Studio.
                </p>
                <p>
                  (4) GHWB Studio ist berechtigt, die erstellten Arbeiten als Referenz in eigenen 
                  Kommunikationsmedien (Website, Portfolio, Social Media) zu verwenden, sofern nicht 
                  ausdrücklich anders vereinbart.
                </p>
              </div>
            </section>

            {/* § 7 Gewährleistung */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                § 7 Gewährleistung & Haftung
              </h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  (1) GHWB Studio gewährleistet die ordnungsgemäße Erbringung der vereinbarten Leistungen.
                </p>
                <p>
                  (2) Mängel sind unverzüglich nach Entdeckung schriftlich anzuzeigen. GHWB Studio wird 
                  berechtigte Mängel in angemessener Frist nachbessern.
                </p>
                <p>
                  (3) Die Haftung von GHWB Studio ist auf Vorsatz und grobe Fahrlässigkeit beschränkt. 
                  Die Haftung für mittelbare Schäden und entgangenen Gewinn ist ausgeschlossen, soweit 
                  gesetzlich zulässig.
                </p>
                <p>
                  (4) Die Haftungshöhe ist auf die Höhe der vereinbarten Vergütung des jeweiligen 
                  Einzelauftrags begrenzt.
                </p>
              </div>
            </section>

            {/* § 8 Vertraulichkeit */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                § 8 Vertraulichkeit & Datenschutz
              </h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  (1) Beide Parteien verpflichten sich, alle im Rahmen der Zusammenarbeit erlangten 
                  vertraulichen Informationen vertraulich zu behandeln und nicht an Dritte weiterzugeben.
                </p>
                <p>
                  (2) Die Verarbeitung personenbezogener Daten erfolgt gemäß der geltenden 
                  Datenschutzgesetze (DSGVO). Weitere Informationen finden Sie in unserer{' '}
                  <Link href="/datenschutz" className="text-foreground underline hover:no-underline">
                    Datenschutzerklärung
                  </Link>.
                </p>
              </div>
            </section>

            {/* § 9 Kündigung & Stornierung */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                § 9 Kündigung & Stornierung
              </h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  (1) Beide Parteien können den Vertrag aus wichtigem Grund fristlos kündigen.
                </p>
                <p>
                  (2) Bei Stornierung durch den Kunden nach Auftragserteilung sind bereits erbrachte 
                  Leistungen vollständig zu vergüten. Darüber hinaus kann GHWB Studio eine 
                  Stornierungspauschale von bis zu 25 % der noch ausstehenden Vergütung berechnen.
                </p>
                <p>
                  (3) Bereits gezahlte Anzahlungen werden bei Stornierung anteilig nach erbrachtem 
                  Leistungsstand verrechnet.
                </p>
              </div>
            </section>

            {/* § 10 Schlussbestimmungen */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                § 10 Schlussbestimmungen
              </h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  (1) Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des 
                  UN-Kaufrechts.
                </p>
                <p>
                  (2) Gerichtsstand ist, soweit gesetzlich zulässig, der Sitz von GHWB Studio 
                  (Holzkirchen).
                </p>
                <p>
                  (3) Sollten einzelne Bestimmungen dieser AGB unwirksam oder undurchführbar sein, 
                  bleibt die Wirksamkeit der übrigen Bestimmungen hiervon unberührt. Anstelle der 
                  unwirksamen Bestimmung tritt eine wirksame Regelung, die dem wirtschaftlichen Zweck 
                  der unwirksamen Bestimmung am nächsten kommt.
                </p>
                <p>
                  (4) Änderungen und Ergänzungen dieser AGB bedürfen der Schriftform.
                </p>
              </div>
            </section>

            {/* Hinweis */}
            <section className="border-t border-border/30 pt-6">
              <p className="text-sm text-muted-foreground/70 italic">
                Hinweis: Diese AGB dienen als Grundlage für die Geschäftsbeziehung. 
                Für spezifische Projekte können individuelle Vereinbarungen getroffen werden, 
                die diesen AGB vorgehen.
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
            Stand: Februar 2026
          </p>
        </motion.div>

      </div>
    </div>
  )
}
