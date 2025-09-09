'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Award, Coffee, Heart, Lightbulb, Users, Zap, Clock } from 'lucide-react'
import Link from 'next/link'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'
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
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <CustomCursor />
      
      {/* Animated HUD Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <svg className="w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="cyan" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
        
        {/* Corner brackets */}
        <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-cyan-400 opacity-30" />
        <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-cyan-400 opacity-30" />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-cyan-400 opacity-30" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-cyan-400 opacity-30" />
      </div>

      {/* Status Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-cyan-400/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-xs font-mono text-cyan-400 tracking-wider">GHWB STUDIO</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-xs font-mono text-cyan-400">{currentTime}</span>
            <Clock className="w-4 h-4 text-cyan-400" />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Link 
              href="/"
              className="inline-flex items-center text-cyan-400 hover:text-white transition-colors mb-8 font-mono text-sm tracking-wider"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              ZURÜCK ZUR STARTSEITE
            </Link>

            <motion.h1 
              className="text-6xl font-bold tracking-tighter mb-6 bg-gradient-to-r from-white via-cyan-400 to-white bg-clip-text text-transparent"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              ÜBER MICH
            </motion.h1>
            
            <motion.div
              className="relative mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent h-px" />
              <p className="text-lg text-gray-300 leading-7 max-w-3xl mx-auto pt-8">
                Ein leidenschaftlicher Kreativer, der die Grenzen zwischen 
                traditioneller Kunst, moderner Technologie und menschenzentriertem Design verwischt.
              </p>
            </motion.div>
          </motion.div>

          {/* Profile Section with HUD styling */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center mb-16"
          >
            <div className="relative">
              <div className="w-64 h-64 relative">
                {/* HUD frame */}
                <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-full" />
                <div className="absolute inset-2 border border-cyan-400/20 rounded-full" />
                
                {/* Profile placeholder */}
                <div className="absolute inset-4 bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-full flex items-center justify-center border border-cyan-400/10">
                  <Coffee className="w-16 h-16 text-cyan-400/50" />
                </div>
                
                {/* Corner elements */}
                <div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-cyan-400" />
                <div className="absolute -top-2 -right-2 w-8 h-8 border-r-2 border-t-2 border-cyan-400" />
                <div className="absolute -bottom-2 -left-2 w-8 h-8 border-l-2 border-b-2 border-cyan-400" />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-cyan-400" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-cyan-400 mr-4" />
              <h2 className="text-3xl font-bold tracking-tighter text-cyan-400 font-mono">
                MEINE GESCHICHTE
              </h2>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-cyan-400 ml-4" />
            </div>
            
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Schon früh entdeckte ich meine Leidenschaft für visuelle Kommunikation. 
                Was als Hobby mit Pinsel und Farbe begann, entwickelte sich zu einer 
                tiefen Faszination für die Art, wie Design und Kunst Menschen berühren können.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Während meines Studiums lernte ich, dass gutes Design mehr ist als nur schöne Oberflächen – 
                es geht um echte menschliche Bedürfnisse, um Funktionalität und um Emotionen. 
                Diese Erkenntnis prägt bis heute meine Arbeit als UX/UI Designer.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Parallel dazu blieb meine Liebe zur Fotografie bestehen. Das Einfangen authentischer 
                Momente, sei es in Porträts oder Produktaufnahmen, gibt mir die Möglichkeit, 
                Geschichten zu erzählen und Emotionen festzuhalten.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Der spannendste Teil meiner kreativen Reise begann, als ich entdeckte, wie sich 
                traditionelle Kunstformen mit moderner AR-Technologie verbinden lassen. 
                Plötzlich konnten meine Gemälde zum Leben erwachen und Betrachter in völlig 
                neue Welten entführen.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-8">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-cyan-400 mr-4" />
              <h2 className="text-3xl font-bold tracking-tighter text-cyan-400 font-mono">
                MEINE WERTE
              </h2>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-cyan-400 ml-4" />
            </div>
            <p className="text-gray-400 font-mono text-sm tracking-wider">
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
                  className="relative group"
                >
                  <div className="relative p-6 bg-gradient-to-b from-gray-900/50 to-black/50 border border-cyan-400/20 backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-300">
                    {/* Corner brackets */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-400/10 border border-cyan-400/20 mb-6 group-hover:bg-cyan-400/20 transition-colors">
                        <Icon className="w-8 h-8 text-cyan-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4 font-mono tracking-wider">{value.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center mb-8">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-cyan-400 mr-4" />
              <h2 className="text-3xl font-bold tracking-tighter text-cyan-400 font-mono">
                FERTIGKEITEN
              </h2>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-cyan-400 ml-4" />
            </div>
            <p className="text-gray-400 font-mono text-sm tracking-wider">
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
                className="px-6 py-3 bg-gradient-to-r from-gray-900/50 to-black/50 border border-cyan-400/20 text-sm font-mono tracking-wider hover:border-cyan-400/40 hover:bg-cyan-400/5 transition-all duration-300 cursor-default text-gray-300"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-8">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-cyan-400 mr-4" />
              <h2 className="text-3xl font-bold tracking-tighter text-cyan-400 font-mono">
                MEINE REISE
              </h2>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-cyan-400 ml-4" />
            </div>
            <p className="text-gray-400 font-mono text-sm tracking-wider">
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
                <div className="flex-1">
                  <div className="relative p-6 bg-gradient-to-b from-gray-900/50 to-black/50 border border-cyan-400/20 backdrop-blur-sm">
                    {/* Year badge */}
                    <div className="inline-block px-4 py-2 bg-cyan-400 text-black font-bold text-sm mb-4 font-mono tracking-wider">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 font-mono tracking-wider">{milestone.title}</h3>
                    <p className="text-gray-400 text-sm">{milestone.description}</p>
                    
                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-cyan-400/50" />
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-cyan-400/50" />
                  </div>
                </div>
                
                {/* Central connector */}
                <div className="hidden md:block w-6 h-6 rounded-full bg-cyan-400 border-4 border-black flex-shrink-0 relative">
                  <div className="absolute inset-0 rounded-full bg-cyan-400 animate-pulse" />
                </div>
                
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative p-8 bg-gradient-to-b from-gray-900/30 to-black/30 border border-cyan-400/30 backdrop-blur-sm">
              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-cyan-400" />
              <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-cyan-400" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-cyan-400" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-cyan-400" />
              
              <h2 className="text-3xl font-bold text-cyan-400 font-mono tracking-tighter mb-6">
                LASSEN SIE UNS ZUSAMMENARBEITEN
              </h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Haben Sie ein spannendes Projekt im Kopf? Ich freue mich darauf, 
                mit Ihnen kreative Lösungen zu entwickeln, die begeistern und bewegen.
              </p>
              <motion.a
                href="mailto:hello@ghwb.studio"
                className="inline-flex items-center px-8 py-4 bg-cyan-400 text-black font-mono font-bold tracking-wider hover:bg-cyan-300 transition-colors"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                KONTAKT AUFNEHMEN
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
