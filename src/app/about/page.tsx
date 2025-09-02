'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Award, Coffee, Heart, Lightbulb, Users, Zap } from 'lucide-react'
import Link from 'next/link'
import Footer from '@/components/Footer'

const AboutPage = () => {
  const skills = [
    'UX/UI Design',
    'Fotografie',
    'Klassische Malerei',
    'Digitale Kunst',
    'AR-Entwicklung',
    'Prototyping',
    'User Research',
    'Produktfotografie',
    'Porträtfotografie',
    'Mixed Media'
  ]

  const values = [
    {
      icon: Heart,
      title: 'Leidenschaft',
      description: 'Jedes Projekt wird mit vollster Hingabe und Liebe zum Detail umgesetzt.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Ich verbinde traditionelle Methoden mit modernster Technologie für einzigartige Lösungen.'
    },
    {
      icon: Users,
      title: 'Zusammenarbeit',
      description: 'Enger Dialog mit Kunden für maßgeschneiderte Ergebnisse, die begeistern.'
    },
    {
      icon: Zap,
      title: 'Präzision',
      description: 'Höchste Qualitätsansprüche in jedem Aspekt meiner kreativen Arbeit.'
    }
  ]

  const journey = [
    {
      year: '2018',
      title: 'Studium Design',
      description: 'Beginn des Studiums in visueller Kommunikation und UX Design'
    },
    {
      year: '2020',
      title: 'Erste Ausstellung',
      description: 'Lokale Kunstausstellung mit traditionellen Malereien'
    },
    {
      year: '2021',
      title: 'Digitale Evolution',
      description: 'Entdeckung der Möglichkeiten digitaler Kunst und AR-Technologie'
    },
    {
      year: '2022',
      title: 'GHWB Studio',
      description: 'Gründung des Studios und Fokus auf interdisziplinäre Projekte'
    },
    {
      year: '2023',
      title: 'AR Integration',
      description: 'Erste erfolgreiche Projekte mit erweiteter Realität in der Kunst'
    },
    {
      year: '2024',
      title: 'Heute',
      description: 'Vollzeit kreativ tätig mit Fokus auf innovative Lösungen'
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

            <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6">
              Über mich
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Hallo, ich bin ein leidenschaftlicher Kreativer, der die Grenzen zwischen 
              traditioneller Kunst, moderner Technologie und menschenzentriertem Design verwischt.
            </p>
          </motion.div>

          {/* Profile Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center mb-16"
          >
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-muted via-muted/70 to-background border-4 border-border/20 flex items-center justify-center">
              <Coffee className="w-16 h-16 text-muted-foreground/50" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-8 text-center">
              Meine Geschichte
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed text-center">
              <p>
                Schon früh entdeckte ich meine Leidenschaft für visuelle Kommunikation. 
                Was als Hobby mit Pinsel und Farbe begann, entwickelte sich zu einer 
                tiefen Faszination für die Art, wie Design und Kunst Menschen berühren können.
              </p>
              
              <p>
                Während meines Studiums lernte ich, dass gutes Design mehr ist als nur schöne Oberflächen – 
                es geht um echte menschliche Bedürfnisse, um Funktionalität und um Emotionen. 
                Diese Erkenntnis prägt bis heute meine Arbeit als UX/UI Designer.
              </p>
              
              <p>
                Parallel dazu blieb meine Liebe zur Fotografie bestehen. Das Einfangen authentischer 
                Momente, sei es in Porträts oder Produktaufnahmen, gibt mir die Möglichkeit, 
                Geschichten zu erzählen und Emotionen festzuhalten.
              </p>
              
              <p>
                Der spannendste Teil meiner kreativen Reise begann, als ich entdeckte, wie sich 
                traditionelle Kunstformen mit moderner AR-Technologie verbinden lassen. 
                Plötzlich konnten meine Gemälde zum Leben erwachen und Betrachter in völlig 
                neue Welten entführen.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
              Meine Werte
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Was meine Arbeit und mein Denken prägt
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-6">
                    <Icon className="w-8 h-8 text-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
              Fertigkeiten
            </h2>
            <p className="text-lg text-muted-foreground">
              Eine Übersicht meiner kreativen und technischen Kompetenzen
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-background border border-border/50 rounded-full text-sm font-medium hover:border-border transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
              Meine Reise
            </h2>
            <p className="text-lg text-muted-foreground">
              Die wichtigsten Meilensteine meiner kreativen Entwicklung
            </p>
          </motion.div>

          <div className="space-y-12">
            {journey.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-block px-4 py-2 bg-foreground text-background rounded-full text-sm font-bold mb-4">
                    {milestone.year}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
                <div className="hidden md:block w-4 h-4 rounded-full bg-foreground flex-shrink-0" />
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
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
              Lassen Sie uns zusammenarbeiten
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Haben Sie ein spannendes Projekt im Kopf? Ich freue mich darauf, 
              mit Ihnen kreative Lösungen zu entwickeln, die begeistern und bewegen.
            </p>
            <motion.a
              href="mailto:hello@ghwb.studio"
              className="inline-flex items-center px-8 py-4 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Kontakt aufnehmen
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AboutPage
