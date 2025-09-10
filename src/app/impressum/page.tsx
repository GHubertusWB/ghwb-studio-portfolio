'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function Impressum() {
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
            Impressum
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
            
            {/* Angaben gemäß § 5 TMG */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Angaben gemäß § 5 TMG
              </h2>
              <div className="space-y-2 text-muted-foreground">
                <p><strong className="text-foreground">Gerd-Hubertus Weidenbrücher-Britze</strong></p>
                <p>Südstraße 5<br />83607 Holzkirchen</p>
              </div>
            </section>

            {/* Kontakt */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Kontakt
              </h2>
              <div className="space-y-2 text-muted-foreground">
                <p><strong className="text-foreground">Telefon:</strong> 017687306551</p>
                <p><strong className="text-foreground">E-Mail:</strong> office@ghwbstudio.de</p>
              </div>
            </section>

            {/* Berufsbezeichnung */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Berufsbezeichnung und Tätigkeit
              </h2>
              <p className="text-muted-foreground">
                Unternehmensberatung im Bereich User Experience und Interface, Workshops, 
                Beratung zu digitaler Barrierefreiheit, Branding Workshops, Schulungen
              </p>
            </section>

            {/* Haftung für Inhalte */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Haftung für Inhalte
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
                Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte 
                fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine 
                rechtswidrige Tätigkeit hinweisen.
              </p>
            </section>

            {/* Haftung für Links */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Haftung für Links
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
                Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
                Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der 
                Seiten verantwortlich.
              </p>
            </section>

            {/* Urheberrecht */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Urheberrecht
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
                dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
                der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
                Zustimmung des jeweiligen Autors bzw. Erstellers.
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
