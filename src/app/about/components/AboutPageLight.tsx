'use client'

import { motion, useInView } from 'framer-motion'
import { ArrowLeft, Award, Users, Sparkles } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '@/components/Footer'
import FloatingContactButton from '@/components/FloatingContactButton'
import FloatingClouds from '@/components/FloatingClouds'
import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/Button'

// Timeline Item Component
const TimelineItem = ({ item, index }: { item: any, index: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  return (
    <motion.div 
      ref={ref}
      className="mb-12 last:mb-0"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Content Card - ohne Rundungen, Schatten und Hover */}
      <div className="bg-white border border-gray-200 p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
            <p className="text-gray-600 font-medium">{item.company}</p>
          </div>
          <span className="text-gray-600 text-sm bg-gray-100 px-3 py-1">{item.year}</span>
        </div>
        
        <p className="text-gray-700 mb-4 leading-relaxed">{item.description}</p>
        
        {/* Achievements */}
        {item.achievements && (
          <div className="mb-4">
            <h4 className="text-gray-900 font-semibold mb-2 flex items-center">
              <Award className="w-4 h-4 mr-2 text-gray-600" />
              Highlights
            </h4>
            <ul className="space-y-1">
              {item.achievements.map((achievement: string, idx: number) => (
                <li key={idx} className="text-gray-700 text-sm flex items-start">
                  <span className="text-gray-600 mr-2">▸</span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Technologies */}
        {item.tech && (
          <div className="flex flex-wrap gap-2">
            {item.tech.map((tech: string, idx: number) => (
              <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 border border-gray-300">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}

// About Section Component
const AboutSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  return (
    <motion.section 
      ref={ref}
      className="py-20 about-section"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative overflow-hidden shadow-xl">
              <Image
                src="/images/hubertus-portrait.jpg"
                alt="Hubertus Weidenbrücher"
                width={400}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Floating Elements */}
            <motion.div 
              className="absolute -top-4 -right-4 w-8 h-8 bg-gray-400 rounded-full shadow-lg shadow-gray-400/50"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div 
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-gray-500 rounded-full shadow-lg shadow-gray-500/50"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
          </motion.div>
          
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Gerd-Hubertus Weidenbrücher-Britze
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Hallo! Ich bin <span className="text-gray-900 font-semibold">Hubertus Weidenbrücher</span>, 
                ein leidenschaftlicher UX/UI Designer mit vielseitiger Erfahrung von der Landschaftsarchitektur 
                bis hin zur digitalen Produktentwicklung.
              </p>
              <p>
                Meine berufliche Reise begann in der Landschaftsarchitektur, wo ich analytisches Denken und 
                systematische Planungsansätze entwickelte. Bei adabay GmbH und adesso SE habe ich diese 
                Fähigkeiten in die digitale Welt übertragen und moderne UX/UI-Lösungen für Enterprise-Anwendungen entwickelt.
              </p>
              <p>
                Wenn ich nicht gerade an der nächsten innovativen Software-Lösung arbeite, 
                beschäftige ich mich mit <span className="text-gray-900">Fotografie</span>, 
                <span className="text-gray-900"> klassischer Malerei</span> und 
                <span className="text-gray-900"> digitaler Kunst</span>.
              </p>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">5+</div>
                <div className="text-sm text-gray-600">Jahre UX/UI</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">8</div>
                <div className="text-sm text-gray-600">Unternehmen</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">10+</div>
                <div className="text-sm text-gray-600">Jahre Erfahrung</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

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

  const timelineData = [
    {
      year: '2022',
      title: 'Senior UX UI Designer',
      company: 'adesso SE',
      description: 'Vollzeit Position in München, Bayern. Spezialisierung auf moderne UX/UI-Lösungen mit Focus auf Design Systems und User Experience für Enterprise-Anwendungen.',
      achievements: ['Design Systems Development', 'User Journey Mapping', 'Workshop-Leitung', 'Projektmanagement'],
      tech: ['PowerPoint', 'Adobe Illustrator', 'Mediengestaltung', 'SketchUp', 'Figma', 'Adobe Photoshop', 'Prototyp']
    },
    {
      year: '2020',
      title: 'Senior UI/UX Designer',
      company: 'adabay GmbH',
      description: 'Vollzeit Position (Nov. 2020 - Sept. 2022) mit 1 Jahr 11 Monaten Erfahrung. Entwicklung von Benutzeroberflächen und User Experience Konzepten für digitale Produkte.',
      achievements: ['Mediengestaltung & Prototyping', 'Design System Entwicklung', 'User Journey Optimierung', 'Workshop-Koordination'],
      tech: ['Mediengestaltung', 'Prototyp', 'Design Systeme', 'Analytische Fähigkeiten', 'User Journeys']
    },
    {
      year: '2020',
      title: 'Junior UI/UX Designer',
      company: 'adabay GmbH',
      description: 'Einstieg in die professionelle UX/UI-Welt (März 2020 - Nov. 2020) in München. Erste Erfahrungen in der Gestaltung digitaler Benutzeroberflächen und User Experience Design.',
      achievements: ['Mediengestaltung Grundlagen', 'Prototyping Methoden', 'User Research Basics', 'Teamwork & Kollaboration'],
      tech: ['Mediengestaltung', 'Prototyp', 'Analytische Fähigkeiten', 'User Journeys', 'Kreative Ideenfindung']
    },
    {
      year: '2019',
      title: 'Mitarbeiter Landschaftsarchitektur',
      company: 'HinnenthalSchaar Landschaftsarchitekten',
      description: 'Tätigkeit in München (Jan. 2019 - Feb. 2020) mit Fokus auf analytische Planungsprozesse. Entwicklung von Fertigkeiten in der systematischen Analyse und visuellen Kommunikation.',
      achievements: ['Analytische Projektbearbeitung', 'Visuelle Kommunikation', 'Planungsmethodik', 'Teamkoordination'],
      tech: ['Analytische Fähigkeiten', 'Planungssoftware', 'Projektkoordination']
    },
    {
      year: '2018',
      title: 'Mitarbeiter Landschaftsarchitektur',
      company: 'Studio Vulkan Landschaftsarchitektur',
      description: 'Projektmitarbeit (Juli 2018 - Dez. 2018) mit 6 Monaten intensiver Erfahrung in der konzeptionellen Planung und systematischen Herangehensweise an komplexe Projekte.',
      achievements: ['Konzeptentwicklung', 'Systematisches Arbeiten', 'Projektplanung', 'Kreative Problemlösung'],
      tech: ['Planungssoftware', 'Konzeptentwicklung', 'Projektmanagement']
    },
    {
      year: '2017',
      title: 'Mitarbeiter Landschaftsarchitektur',
      company: 'Green4Cities GmbH',
      description: 'Projektarbeit in Wien (Okt. 2017 - Juni 2018) mit 9 Monaten Erfahrung in der internationalen Zusammenarbeit und nachhaltigen Stadtplanung.',
      achievements: ['Internationale Projekte', 'Nachhaltige Planung', 'Teamwork', 'Analytische Projektbearbeitung'],
      tech: ['CAD-Software', 'Planungstools', 'Präsentationstechniken']
    },
    {
      year: '2016',
      title: 'Studentischer Mitarbeiter',
      company: '3zu0 Landschaftsarchitektur',
      description: 'Studienbegleitende Tätigkeit in Wien (Aug. 2016 - Jan. 2017) als Grundstein für die berufliche Entwicklung. Erste praktische Erfahrungen in der Branche.',
      achievements: ['Studium & Praxis kombiniert', 'Grundlagen CAD', 'Teamintegration', 'Lernbereitschaft'],
      tech: ['CAD-Grundlagen', 'Planungssoftware', 'Office-Anwendungen']
    },
    {
      year: '2013',
      title: 'Zeichentutor',
      company: 'Technische Universität München',
      description: 'Studentische Hilfskraft (Apr. 2013 - Aug. 2013) in München. Unterstützung von Studenten beim architektonischen Zeichnen und erste Lehrerfahrungen.',
      achievements: ['Unterrichtserfahrung', 'Architektonisches Zeichnen', 'Studentenbetreuung', 'Wissensvermittlung'],
      tech: ['Zeichentechnik', 'Architektonische Darstellung', 'Präsentation']
    }
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900 relative overflow-hidden">
      {/* 1. HERO SECTION - STARTSEITE LIGHT MODE STYLING */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{ zIndex: 20 }}
      >
        {/* Background gradient - matching startpage */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-200 to-white" />
        
        {/* Floating Clouds */}
        <FloatingClouds />

        {/* Subtle geometric background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 15 }}>
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

        <div className="relative text-center px-6 max-w-4xl mx-auto" style={{ zIndex: 30 }}>
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
              UX/UI-Design • Fotografie • Kunst
            </motion.p>

            {/* Main Title - startpage style */}
            <motion.h1 
              className="text-6xl font-semibold text-foreground leading-tight tracking-tight mb-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
            >
              <span className="block">GERD-HUBERTUS</span>
              <span className="block">WEIDENBRÜCHER-BRITZE</span>
            </motion.h1>

            {/* Description - startpage style */}
            <motion.p 
              className="text-base text-muted-foreground leading-7 max-w-2xl mx-auto mb-16"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              Entdecke meine Reise als UX/UI Designer und die Erfahrungen,<br/>
              die mich zu dem gemacht haben, was ich heute bin.
            </motion.p>

            {/* CTA Buttons - globale Button Components */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button 
                variant="secondary"
                size="base"
                icon="left"
                iconElement={<Sparkles className="w-4 h-4" />}
                onClick={() => {
                  const aboutSection = document.querySelector('.about-section');
                  if (aboutSection) aboutSection.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Meine Geschichte
              </Button>
              
              <Button 
                variant="primary"
                size="base"
                onClick={() => { 
                  const event = new CustomEvent('openContactModal');
                  window.dispatchEvent(event);
                }}
              >
                Kontakt aufnehmen
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <AboutSection />

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meine Reise
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Von den ersten Schritten im Design bis hin zu komplexen Enterprise-Projekten
            </p>
          </motion.div>

          {/* Timeline Items */}
          <div className="space-y-8">
            {timelineData.map((item, index) => (
              <TimelineItem 
                key={`${item.year}-${index}`} 
                item={item} 
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-200 rounded-2xl p-12 shadow-xl bg-white/50 backdrop-blur-sm"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Lass uns zusammenarbeiten
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Hast du ein spannendes Projekt oder möchtest mehr über meine Arbeit erfahren? 
              Ich freue mich auf deine Nachricht!
            </p>
            <Button 
              variant="primary" 
              size="base"
              icon="left"
              iconElement={<Users className="w-4 h-4" />}
              onClick={() => { 
                const event = new CustomEvent('openContactModal');
                window.dispatchEvent(event);
              }}
            >
              Kontakt aufnehmen
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingContactButton />
    </div>
  )
}