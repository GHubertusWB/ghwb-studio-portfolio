'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Award, Coffee, Heart, Lightbulb, Users, Zap } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '@/components/Footer'
import FloatingCloudsArt from '@/app/art/components/FloatingCloudsArt'
import ContactSection from '@/components/ContactSection'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/Button'

export default function AboutPageLight() {
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString('de-DE', { 
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

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
      year: '2012',
      title: 'TU München - Wissenschaftlicher Mitarbeiter',
      description: 'EU-Forschungsprojekt: Zählen und Bestimmen von Insekten aus Fallen'
    },
    {
      year: '2013', 
      title: 'TU München - Studentischer Mitarbeiter',
      description: 'Zeichentutor für architektonisches Zeichnen in der Lehre'
    },
    {
      year: '2014-2017',
      title: 'Landschaftsarchitektur',
      description: 'Praktika bei renommierten Architekturbüros in München, Wien und Zürich'
    },
    {
      year: '2018-2020',
      title: 'Freelance Landschaftsplanung',
      description: 'Selbstständige Projekte und Mitarbeit bei verschiedenen Planungsbüros'
    },
    {
      year: '2020-2022',
      title: 'UI/UX Designer - adabay GmbH',
      description: 'Junior bis Senior Designer: Von ersten digitalen Projekten zur Projektleitung'
    },
    {
      year: '2022-2025',
      title: 'Senior UX UI Designer - adesso SE',
      description: 'Führung komplexer Designprojekte und Mentoring von Junior Designern'
    },
    {
      year: '2025',
      title: 'Creative Director - GHWB Studio',
      description: 'Gründung des eigenen Studios mit Fokus auf innovative digitale Lösungen'
    }
  ]

  return (
    <div className="min-h-screen text-gray-900 relative overflow-hidden bg-gray-50">
      
      {/* HERO SECTION - BAUHAUS LIGHT MODE STYLING */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{ zIndex: 20 }}
      >
        {/* Floating Clouds - mit korrektem z-index */}
        <FloatingCloudsArt />
        
        {/* Background gradient - matching startpage */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-200 to-white" />

        {/* Subtle geometric background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 5 }}>
          <motion.div
            className="relative w-full h-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.06, scale: 1 }}
            transition={{ duration: 3, delay: 1 }}
          >
            {/* Minimale geometrische Formen */}
            <motion.div 
              className="absolute top-20 left-20 w-32 h-32 border-2 border-gray-300"
              style={{ transform: 'rotate(45deg)' }}
              initial={{ rotate: 0, scale: 0 }}
              animate={{ rotate: 45, scale: 1 }}
              transition={{ duration: 2, delay: 1.5 }}
            />
            
            <motion.div 
              className="absolute bottom-32 right-32 w-24 h-24 bg-gray-200 rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, delay: 2 }}
            />
            
            <motion.div 
              className="absolute top-32 right-20 w-40 h-1 bg-gray-200"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 1.8 }}
            />
            <motion.div 
              className="absolute bottom-40 left-32 w-1 h-40 bg-gray-200"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.5, delay: 2.2 }}
            />
          </motion.div>
        </div>

        <div className="relative text-center px-6 max-w-4xl mx-auto" style={{ zIndex: 40 }}>
          {/* Back Button - Startseite Button Styling */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            whileHover={{ scale: 1.05, y: -2 }}
            className="mb-16"
          >
            <Button
              variant="tertiary"
              size="xs"
              onClick={() => window.history.back()}
              className="shadow-lg tracking-wide"
              style={{
                background: 'rgba(0, 0, 0, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(0, 0, 0, 0.1)'
              }}
              icon="left"
              iconElement={<ArrowLeft className="w-4 h-4" />}
            >
              Zurück
            </Button>
          </motion.div>

          {/* Main Content - Startseite Typography */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {/* Subtitle - matching startpage */}
            <motion.p 
              className="text-base text-muted-foreground leading-7 mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              Kreativer • Designer • Fotograf • Künstler
            </motion.p>

            {/* Main Title - startpage style */}
            <motion.h1 
              className="text-6xl font-semibold text-foreground leading-tight tracking-tight mb-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
            >
              <span className="block">ÜBER</span>
              <span className="block">MICH</span>
            </motion.h1>

            {/* Description - startpage style */}
            <motion.p 
              className="text-base text-muted-foreground leading-7 max-w-2xl mx-auto mb-16"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              Ein leidenschaftlicher Kreativer, der die Grenzen zwischen<br/>
              traditioneller Kunst, moderner Technologie und menschenzentriertem Design verwischt.
            </motion.p>

            {/* Portrait Image - Original Proportions */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="flex justify-center mb-16"
            >
              <div className="relative">
                <div className="w-80 h-96 overflow-hidden rounded-lg border-4 border-border/20 shadow-xl bg-muted/10">
                  <Image
                    src="/images/hubertus-portrait.jpg"
                    alt="Hubertus Weidenbrücher - Portrait"
                    width={320}
                    height={384}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                
                {/* Decorative corner elements */}
                <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-foreground/20" />
                <div className="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 border-foreground/20" />
                <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2 border-foreground/20" />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-foreground/20" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* STORY SECTION - STARTSEITE LIGHT MODE STYLING */}
      <section className="py-32 px-6 relative z-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            {/* Category Tag - subtil wie auf der Startseite */}
            <motion.div 
              className="flex items-center justify-center mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-2 h-2 bg-muted-foreground rounded-full mr-3" />
              <span className="text-muted-foreground text-sm">Meine Geschichte</span>
            </motion.div>

            <h2 className="text-4xl font-semibold text-foreground leading-tight tracking-tight mb-6 md:text-3xl">
              Der kreative Weg
            </h2>
            <p className="text-xl text-muted-foreground leading-7 max-w-prose mx-auto">
              Von den ersten Pinselstrichen bis zur digitalen Innovation
            </p>
          </motion.div>
          
          <div className="space-y-8 text-foreground/70 leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg"
            >
              Mein Weg begann in der Wissenschaft an der TU München, wo ich in EU-Forschungsprojekten 
              analytisches Denken und präzises Arbeiten lernte. Diese Grundlagen prägen bis heute 
              meine systematische Herangehensweise an komplexe Designherausforderungen.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg"
            >
              Der Übergang von der Landschaftsarchitektur zum digitalen Design war fließend – 
              in beiden Bereichen geht es um die Gestaltung von Räumen und Erfahrungen. 
              Nur dass meine &ldquo;Landschaften&rdquo; heute digital sind und auf Bildschirmen zum Leben erwachen.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-lg"
            >
              Bei adesso SE konnte ich meine Fähigkeiten in groß angelegten Enterprise-Projekten 
              verfeinern und lernte, wie Design in komplexen Organisationsstrukturen funktioniert. 
              Diese Erfahrung ist unbezahlbar für strategisches Designdenken.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg"
            >
              Heute verbinde ich bei GHWB Studio all diese Erfahrungen: die analytische Präzision 
              aus der Wissenschaft, das räumliche Denken der Architektur und die nutzerzentrierte 
              Gestaltung digitaler Produkte zu ganzheitlichen Lösungen.
            </motion.p>
          </div>
        </div>
      </section>

      {/* VALUES SECTION - STARTSEITE LIGHT MODE STYLING */}
      <section className="py-32 px-6 relative z-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            {/* Category Tag - subtil wie auf der Startseite */}
            <motion.div 
              className="flex items-center justify-center mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-2 h-2 bg-muted-foreground rounded-full mr-3" />
              <span className="text-muted-foreground text-sm">Meine Werte</span>
            </motion.div>

            <h2 className="text-4xl font-semibold text-foreground leading-tight tracking-tight mb-6 md:text-3xl">
              Was mich antreibt
            </h2>
            <p className="text-xl text-muted-foreground leading-7 max-w-prose mx-auto">
              Die Prinzipien, die meine Arbeit und mein Denken prägen
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
                  whileHover={{ y: -5 }}
                  className="relative border border-border p-8 bg-white shadow-lg rounded-lg hover:border-foreground/20 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-6">
                    <Icon className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SKILLS SECTION - STARTSEITE LIGHT MODE STYLING */}
      <section className="py-32 px-6 relative z-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            {/* Category Tag - subtil wie auf der Startseite */}
            <motion.div 
              className="flex items-center justify-center mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-2 h-2 bg-muted-foreground rounded-full mr-3" />
              <span className="text-muted-foreground text-sm">Fertigkeiten</span>
            </motion.div>

            <h2 className="text-4xl font-semibold text-foreground leading-tight tracking-tight mb-6 md:text-3xl">
              Meine Kompetenzen
            </h2>
            <p className="text-xl text-muted-foreground leading-7 max-w-prose mx-auto">
              Eine Übersicht meiner kreativen und technischen Fertigkeiten
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
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-6 py-3 bg-background border border-border/50 rounded-full text-sm font-medium hover:border-border hover:shadow-md transition-all duration-300 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* JOURNEY TIMELINE - STARTSEITE LIGHT MODE STYLING */}
      <section className="py-32 px-6 relative z-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            {/* Category Tag - subtil wie auf der Startseite */}
            <motion.div 
              className="flex items-center justify-center mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-2 h-2 bg-muted-foreground rounded-full mr-3" />
              <span className="text-muted-foreground text-sm">Meine Reise</span>
            </motion.div>

            <h2 className="text-4xl font-semibold text-foreground leading-tight tracking-tight mb-6 md:text-3xl">
              Kreative Entwicklung
            </h2>
            <p className="text-xl text-muted-foreground leading-7 max-w-prose mx-auto">
              Die wichtigsten Meilensteine auf meinem kreativen Weg
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
                } md:flex-row`}
              >
                <div className="flex-1">
                  <motion.div 
                    className="relative p-6 bg-white border border-border shadow-lg rounded-lg hover:border-foreground/20 transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <div className="inline-block px-4 py-2 bg-foreground text-background rounded-full text-sm font-bold mb-4">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </motion.div>
                </div>
                
                <div className="hidden md:block w-4 h-4 rounded-full bg-foreground flex-shrink-0 relative">
                  <div className="absolute inset-0 rounded-full bg-foreground animate-pulse opacity-50" />
                </div>
                
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION - STARTSEITE LIGHT MODE STYLING */}
      <section className="py-32 px-6 relative z-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            {/* Category Tag - subtil wie auf der Startseite */}
            <motion.div 
              className="flex items-center justify-center mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-2 h-2 bg-muted-foreground rounded-full mr-3" />
              <span className="text-muted-foreground text-sm">Kontakt</span>
            </motion.div>

            <h2 className="text-4xl font-semibold text-foreground leading-tight tracking-tight mb-6 md:text-3xl">
              Lassen Sie uns zusammenarbeiten
            </h2>
            <p className="text-xl text-muted-foreground leading-7 max-w-2xl mx-auto mb-16">
              Haben Sie ein spannendes Projekt im Kopf? Ich freue mich darauf, 
              mit Ihnen kreative Lösungen zu entwickeln, die begeistern und bewegen.
            </p>
            
            <motion.a
              href="mailto:office@ghwbstudio.de"
              className="inline-flex items-center px-8 py-3 rounded-full text-label text-primary transition-all duration-300"
              style={{
                background: 'rgba(6, 182, 212, 0.15)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(6, 182, 212, 0.3)',
                boxShadow: '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                boxShadow: '0 15px 30px -5px rgba(0, 0, 0, 0.15), 0 8px 12px -4px rgba(0, 0, 0, 0.1)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              Kontakt aufnehmen
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      <Footer />
    </div>
  )
}
