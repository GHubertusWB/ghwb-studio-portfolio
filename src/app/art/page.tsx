'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Palette, Brush, Smartphone, Layers, Sparkles, Eye } from 'lucide-react'
import Link from 'next/link'
import Footer from '@/components/Footer'

const ArtPage = () => {
  const artforms = [
    {
      icon: Brush,
      title: 'Klassische Malerei',
      description: 'Traditionelle Techniken mit Öl, Acryl und Aquarell auf Leinwand und Papier.'
    },
    {
      icon: Smartphone,
      title: 'Digitale Kunst',
      description: 'Moderne digitale Kreationen mit innovativen Tools und Technologien.'
    },
    {
      icon: Layers,
      title: 'Mixed Media',
      description: 'Kombinationen verschiedener Materialien und Techniken für einzigartige Werke.'
    },
    {
      icon: Sparkles,
      title: 'AR-Integration',
      description: 'Erweiterte Realität verleiht klassischen Kunstwerken neue Dimensionen.'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Konzeption',
      description: 'Entwicklung der künstlerischen Vision und Planung der Umsetzung.'
    },
    {
      step: '02',
      title: 'Klassische Basis',
      description: 'Erstellung des Grundwerks mit traditionellen Maltechniken.'
    },
    {
      step: '03',
      title: 'Digitale Erweiterung',
      description: 'Integration moderner digitaler Elemente und Effekte.'
    },
    {
      step: '04',
      title: 'AR-Implementation',
      description: 'Programmierung interaktiver AR-Funktionen für das finale Werk.'
    }
  ]

  const gallery = [
    {
      title: 'Urbane Träume',
      medium: 'Öl auf Leinwand + AR',
      description: 'Eine Stadtlandschaft, die durch AR zum Leben erwacht'
    },
    {
      title: 'Naturverbindung',
      medium: 'Acryl + Digital',
      description: 'Organische Formen treffen auf digitale Präzision'
    },
    {
      title: 'Emotionale Tiefe',
      medium: 'Mixed Media + AR',
      description: 'Abstrakte Gefühle in interaktiver Form'
    },
    {
      title: 'Zeitreise',
      medium: 'Aquarell + Digital',
      description: 'Vergangenheit und Zukunft in einem Bild vereint'
    },
    {
      title: 'Digitale Renaissance',
      medium: 'Öl + AR',
      description: 'Klassische Porträtmalerei mit AR-Animation'
    },
    {
      title: 'Kosmos',
      medium: 'Mixed Media + AR',
      description: 'Universum zum Greifen nah durch erweiterte Realität'
    }
  ]

  return (
    <div className="pt-16 overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Link 
              href="/"
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zur Startseite
            </Link>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-muted mb-8"
            >
              <Palette className="w-10 h-10 text-foreground" />
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6">
              Kunst
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ich verbinde die Schönheit klassischer Malerei mit den unendlichen 
              Möglichkeiten moderner Technologie. Meine Werke entstehen an der 
              Schnittstelle von Tradition und Innovation – erweitert durch AR-Technologie.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Art Forms Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6">
              Kunstformen
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Verschiedene Medien und Techniken für einzigartige Kreationen
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {artforms.map((form, index) => {
              const Icon = form.icon
              return (
                <motion.div
                  key={form.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-2xl bg-background border border-border/50 hover:border-border transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-6">
                    <Icon className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{form.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{form.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6">
              Galerie
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Eine Auswahl meiner Kunstwerke – von traditionell bis digital
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gallery.map((artwork, index) => (
              <motion.div
                key={artwork.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-muted via-muted/70 to-background mb-6 aspect-square relative">
                  <div className="w-full h-full flex items-center justify-center">
                    <Palette className="w-16 h-16 text-muted-foreground/30" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="flex items-center text-sm text-foreground">
                      <Eye className="w-4 h-4 mr-2" />
                      AR ansehen
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <span className="text-sm font-medium text-muted-foreground">{artwork.medium}</span>
                  <h3 className="text-xl font-semibold group-hover:text-foreground/80 transition-colors">
                    {artwork.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{artwork.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6">
              Mein Prozess
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Von der Idee zum interaktiven Kunstwerk
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-foreground text-background text-xl font-bold mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AR Feature Highlight */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-br from-muted/50 to-background rounded-3xl p-12"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-foreground text-background mb-8"
            >
              <Sparkles className="w-10 h-10" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
              Erweiterte Realität
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Durch AR-Technologie erwachen meine Kunstwerke zum Leben. 
              Betrachter können mit dem Smartphone zusätzliche Ebenen, 
              Animationen und interaktive Elemente entdecken, die das 
              traditionelle Kunstwerk in eine neue Dimension führen.
            </p>
            <motion.a
              href="mailto:hello@ghwb.studio?subject=AR-Kunstwerk Anfrage"
              className="inline-flex items-center px-8 py-4 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              AR-Kunstwerk anfragen
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
              Gemeinsam Kunst neu definieren
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Lassen Sie uns ein einzigartiges Kunstwerk schaffen, das die 
              Grenzen zwischen traditioneller Malerei und moderner Technologie sprengt.
            </p>
            <motion.a
              href="mailto:hello@ghwb.studio"
              className="inline-flex items-center px-8 py-4 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Projekt besprechen
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ArtPage
