'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Award, Coffee, Heart, Lightbulb, Users, Zap } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'
import ContactSection from '@/components/ContactSection'
import { useState, useEffect } from 'react'

export default function AboutPageDark() {
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
    <div className="min-h-screen text-white relative overflow-hidden" style={{ background: 'linear-gradient(to bottom right, var(--background), var(--background), rgba(42, 47, 54, 0.2))' }}>
      <CustomCursor />
      
      {/* HERO HUD - identisch wie andere Dark Pages */}
      <motion.section 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 2 }} 
        className="min-h-screen flex items-center justify-center relative" 
        style={{ zIndex: 20 }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 15 }}>
          {/* HUD SVG wie Art/Photography/UX */}
          <motion.div 
            className="relative w-full h-full" 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 0.4, scale: 1 }} 
            transition={{ duration: 2, delay: 1 }}
          >
            <svg width="100vw" height="100vh" viewBox="0 0 1920 1080" className="drop-shadow-lg" style={{ filter: `drop-shadow(0 0 20px white)` }}>
              <motion.path 
                d="M 520 540 A 440 440 0 1 1 1400 540" 
                fill="none" 
                stroke="white" 
                strokeWidth="1.5" 
                strokeDasharray="5,10" 
                initial={{ pathLength: 0 }} 
                animate={{ pathLength: 1 }} 
                transition={{ duration: 3, delay: 1.5 }} 
              />
              <motion.path 
                d="M 560 540 A 400 400 0 1 1 1360 540" 
                fill="none" 
                stroke="white" 
                strokeWidth="1" 
                strokeOpacity="0.6" 
                initial={{ pathLength: 0 }} 
                animate={{ pathLength: 1 }} 
                transition={{ duration: 2.5, delay: 2 }} 
              />
              <motion.circle 
                cx="480" 
                cy="540" 
                r="3" 
                fill="white" 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 2.5 }} 
              />
              <motion.circle 
                cx="1440" 
                cy="540" 
                r="3" 
                fill="white" 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 3 }} 
              />
              <motion.line 
                x1="50" 
                y1="50" 
                x2="250" 
                y2="50" 
                stroke="white" 
                strokeWidth="1" 
                strokeOpacity="0.7" 
                initial={{ pathLength: 0 }} 
                animate={{ pathLength: 1 }} 
                transition={{ duration: 2, delay: 2.2 }} 
              />
              <motion.line 
                x1="1670" 
                y1="1030" 
                x2="1870" 
                y2="1030" 
                stroke="white" 
                strokeWidth="1" 
                strokeOpacity="0.7" 
                initial={{ pathLength: 0 }} 
                animate={{ pathLength: 1 }} 
                transition={{ duration: 2, delay: 2.5 }} 
              />
            </svg>
          </motion.div>
        </div>

        <div className="relative text-center px-6 max-w-6xl" style={{ zIndex: 25 }}>
          {/* Back Button - exakt wie andere Dark Pages */}
          <motion.button
            onClick={() => window.history.back()}
            className="cursor-button inline-flex items-center text-white/70 hover:text-white transition-colors mb-12 relative font-mono px-6 py-3 rounded-full hover:bg-white/5"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              cursor: 'none'
            }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            SYSTEM.EXIT
          </motion.button>

          {/* Main Content - exakt wie andere Dark Pages */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-8xl font-light tracking-tight mb-8 relative text-white" 
              style={{ textShadow: '0 0 30px rgba(255, 255, 255, 0.4)' }}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <span className="text-cyan-400/80 text-lg block mb-2 tracking-widest font-mono">GHWB.ABOUT.SYSTEM:</span>
              ÜBER MICH
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed max-w-3xl mx-auto relative"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              Ein leidenschaftlicher Kreativer, der die Grenzen zwischen traditioneller Kunst, moderner Technologie und menschenzentriertem Design verwischt.
            </motion.p>

            {/* Portrait Image - Original Proportions HUD Style */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="flex justify-center mb-12"
            >
              <div className="relative">
                <div className="w-80 h-96 relative">
                  {/* HUD frame */}
                  <div className="absolute inset-0 border-2 border-white/30 rounded-lg" />
                  <div className="absolute inset-2 border border-white/20 rounded-lg" />
                  
                  {/* Portrait Image */}
                  <div className="absolute inset-4 rounded-lg overflow-hidden border border-white/10">
                    <Image
                      src="/images/hubertus-portrait.jpg"
                      alt="Hubertus Weidenbrücher - Portrait"
                      width={320}
                      height={384}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                  
                  {/* Corner elements - HUD Style */}
                  <div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-white" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 border-r-2 border-t-2 border-white" />
                  <div className="absolute -bottom-2 -left-2 w-8 h-8 border-l-2 border-b-2 border-white" />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-white" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* STORY SECTION - exakt wie andere Dark Pages */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center text-cyan-400 font-mono text-sm tracking-wider mb-4">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
              ABOUT.STORY
            </div>
            <h2 className="text-4xl font-semibold text-white leading-tight tracking-tight md:text-3xl mb-6">
              Meine Geschichte
            </h2>
            <p className="text-xl text-white/70 leading-7 max-w-prose mx-auto">
              Von den ersten Pinselstrichen bis zur digitalen Innovation
            </p>
          </motion.div>
            
                    <div className="space-y-6 text-gray-400 leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg"
            >
              System-Genesis: Karrierestart in wissenschaftlichen Forschungseinheiten der TU München. 
              EU-Missionen zur Datenanalyse und Klassifizierung biologischer Entitäten bildeten 
              das Fundament für systematische Problemlösung in komplexen Designsystemen.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg"
            >
              Übergangsprotokoll: Migration von physischen Landschaftsarchitektur-Systemen zu 
              digitalen Interface-Landschaften. Räumliches Denken wurde zu User Journey Mapping, 
              Baupläne zu Wireframes und Prototypen.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-lg"
            >
              Enterprise-Level Operations: Bei adesso SE Koordination großskaliger Design-Systeme 
              in komplexen Unternehmensstrukturen. Strategische Designführung durch 
              multidisziplinäre Entwicklungseinheiten.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg"
            >
              GHWB Studio Command Center: Integration aller Systemerfahrungen in ein 
              hocheffizientes kreatives Interface. Wissenschaftliche Präzision meets 
              architektonisches Raumverständnis meets Enterprise-Design-Strategie.
            </motion.p>
          </div>
        </div>
      </section>      {/* VALUES SECTION - exakt wie andere Dark Pages */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center text-cyan-400 font-mono text-sm tracking-wider mb-4">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
              ABOUT.VALUES
            </div>
            <h2 className="text-4xl font-semibold text-white leading-tight tracking-tight md:text-3xl mb-6">
              Meine Werte
            </h2>
            <p className="text-xl text-white/70 leading-7 max-w-prose mx-auto">
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
                  className="group cursor-button relative"
                  style={{ cursor: 'none' }}
                >
                  <div className="relative p-6 bg-white/5 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300 hover:bg-white/10">
                    {/* Corner brackets - wie andere Dark Pages */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 border border-white/20 mb-6 group-hover:bg-white/20 transition-colors">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SKILLS SECTION - exakt wie andere Dark Pages */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center text-cyan-400 font-mono text-sm tracking-wider mb-4">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
              ABOUT.SKILLS
            </div>
            <h2 className="text-4xl font-semibold text-white leading-tight tracking-tight md:text-3xl mb-6">
              Fertigkeiten
            </h2>
            <p className="text-xl text-white/70 leading-7 max-w-prose mx-auto">
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
                whileHover={{ scale: 1.05, y: -2 }}
                className="cursor-button px-6 py-3 bg-white/5 border border-white/10 text-sm font-medium hover:border-white/20 hover:bg-white/10 transition-all duration-300 text-gray-300"
                style={{ cursor: 'none' }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* JOURNEY TIMELINE - exakt wie andere Dark Pages */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center text-cyan-400 font-mono text-sm tracking-wider mb-4">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
              ABOUT.JOURNEY
            </div>
            <h2 className="text-4xl font-semibold text-white leading-tight tracking-tight md:text-3xl mb-6">
              Meine Reise
            </h2>
            <p className="text-xl text-white/70 leading-7 max-w-prose mx-auto">
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
                } md:flex-row`}
              >
                <div className="flex-1">
                  <motion.div 
                    className="relative p-6 bg-white/5 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    {/* Year badge - wie andere Dark Pages */}
                    <div className="inline-block px-4 py-2 bg-cyan-400 text-black font-bold text-sm mb-4">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                    <p className="text-gray-400 text-sm">{milestone.description}</p>
                    
                    {/* Corner accents - wie andere Dark Pages */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-white/50" />
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-white/50" />
                  </motion.div>
                </div>
                
                {/* Central connector - wie andere Dark Pages */}
                <div className="hidden md:block w-6 h-6 rounded-full bg-cyan-400 border-4 border-black flex-shrink-0 relative">
                  <div className="absolute inset-0 rounded-full bg-cyan-400 animate-pulse" />
                </div>
                
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION - exakt wie andere Dark Pages */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center text-cyan-400 font-mono text-sm tracking-wider mb-4">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
              ABOUT.CONTACT
            </div>
            <h2 className="text-4xl font-semibold text-white leading-tight tracking-tight md:text-3xl mb-6">
              Lassen Sie uns zusammenarbeiten
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Haben Sie ein spannendes Projekt im Kopf? Ich freue mich darauf, 
              mit Ihnen kreative Lösungen zu entwickeln, die begeistern und bewegen.
            </p>
            
            <motion.a
              href="mailto:office@ghwbstudio.de"
              className="cursor-button inline-flex items-center px-8 py-3 rounded-full font-medium transition-all duration-300 font-mono"
              style={{
                background: 'rgba(6, 182, 212, 0.25)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(6, 182, 212, 0.4)',
                boxShadow: '0 0 15px rgba(6, 182, 212, 0.3), 0 0 30px rgba(6, 182, 212, 0.15), 0 0 45px rgba(6, 182, 212, 0.05)',
                cursor: 'none'
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                boxShadow: '0 0 30px rgba(6, 182, 212, 0.6), 0 0 60px rgba(6, 182, 212, 0.4), 0 0 90px rgba(6, 182, 212, 0.2)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              KONTAKT AUFNEHMEN
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
