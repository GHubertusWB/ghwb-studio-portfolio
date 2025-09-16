'use client'

import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { ArrowLeft, Award, Users, Sparkles } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '@/components/Footer'
import FloatingContactButton from '@/components/FloatingContactButton'
import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/Button'

// Timeline Item Component - Clean Design with Mobile Optimization
const TimelineItem = ({ item, index }: { item: any, index: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  
  return (
    <motion.div 
      ref={ref}
      className="relative mb-8 md:mb-16 last:mb-0"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
    >
      {/* Connecting Line to Next Card - Hidden on mobile */}
      {index < 7 && (
        <div className="hidden md:block absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-white/30 to-transparent z-0"></div>
      )}
      
      {/* Content Card */}
      <motion.div 
        className="relative bg-gray-900/40 backdrop-blur-sm border border-white/10 rounded-lg p-4 md:p-6 hover:border-white/30 transition-all duration-300"
        whileHover={{ 
          scale: [1, 1.01, 1], 
          y: [0, -2, 0],
          boxShadow: "0 5px 20px rgba(255, 255, 255, 0.05)"
        }}
        whileTap={{ scale: 0.98 }}
      >
        
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 relative">
          <div className="flex-1 mb-2 md:mb-0">
            <h3 className="text-lg md:text-xl font-bold text-white mb-1 leading-tight">{item.title}</h3>
            <p className="text-white/70 font-medium text-sm md:text-base">{item.company}</p>
          </div>
          <div className="bg-gray-800/50 border border-white/20 px-2 md:px-3 py-1 rounded text-white/80 text-xs md:text-sm self-start md:self-auto">
            {item.year}
          </div>
        </div>
        
        <p className="text-gray-300 mb-4 leading-relaxed text-sm md:text-base">{item.description}</p>
        
        {/* Achievements Section */}
        {item.achievements && (
          <div className="mb-4 relative">
            <div className="flex items-center mb-3">
              <div className="w-4 h-4 border border-white/40 rounded mr-2 flex items-center justify-center">
                <Award className="w-2.5 h-2.5 text-white/70" />
              </div>
              <h4 className="text-white font-semibold text-sm">Highlights</h4>
              <div className="flex-1 h-px bg-gradient-to-r from-white/30 to-transparent ml-4"></div>
            </div>
            <ul className="space-y-2 pl-6">
              {item.achievements.map((achievement: string, idx: number) => (
                <motion.li 
                  key={idx} 
                  className="text-gray-300 text-sm flex items-start"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ duration: 0.3, delay: (index * 0.1) + (idx * 0.05) }}
                >
                  <span className="text-white/60 mr-2">•</span>
                  {achievement}
                </motion.li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Technologies Section */}
        {item.tech && (
          <div className="relative">
            <div className="flex items-center mb-3">
              <div className="w-4 h-4 border border-white/40 rounded mr-2 flex items-center justify-center">
                <Sparkles className="w-2.5 h-2.5 text-white/70" />
              </div>
              <h4 className="text-white font-semibold text-sm">Technologien</h4>
              <div className="flex-1 h-px bg-gradient-to-r from-white/30 to-transparent ml-4"></div>
            </div>
            <div className="flex flex-wrap gap-1.5 md:gap-2 pl-4 md:pl-6">
              {item.tech.map((tech: string, idx: number) => (
                <motion.span 
                  key={idx} 
                  className="bg-gray-800/60 border border-white/20 text-white/80 text-xs px-2 md:px-3 py-1 rounded hover:border-white/40 hover:bg-gray-700/60 transition-all duration-200"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2, delay: (index * 0.05) + (idx * 0.02) }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        )}
        
        {/* Varied Animation Effects - Mobile Optimized with CSS-based responsiveness */}
        {index % 4 === 0 && index < 6 && (
          // Scanning Line from Left - Limited on mobile
          <motion.div
            className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/20 md:via-white/40 to-transparent"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              delay: index * 0.5, 
              ease: "easeInOut" 
            }}
          />
        )}
        
        {index % 4 === 1 && index < 6 && (
          // Vertical Scanning Line - Limited on mobile
          <motion.div
            className="absolute top-0 left-0 h-full w-0.5 bg-gradient-to-b from-transparent via-white/20 md:via-white/40 to-transparent"
            animate={{ y: ['-100%', '100%'] }}
            transition={{ 
              duration: 4.5, 
              repeat: Infinity, 
              delay: index * 0.5, 
              ease: "easeInOut" 
            }}
          />
        )}
        
        {index % 4 === 2 && index < 6 && (
          // Border Glow Effect - Subtle on mobile
          <motion.div
            className="absolute inset-0 border border-white/20 rounded-lg"
            animate={{ 
              borderColor: [
                'rgba(255,255,255,0.1)', 
                'rgba(255,255,255,0.3)', 
                'rgba(255,255,255,0.1)'
              ],
              boxShadow: [
                '0 0 0px rgba(255,255,255,0)', 
                '0 0 15px rgba(255,255,255,0.05)', 
                '0 0 0px rgba(255,255,255,0)'
              ]
            }}
            transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
          />
        )}
        
        {index % 4 === 3 && index < 6 && (
          // Corner Sweep Animation - Responsive sizing
          <>
            <motion.div
              className="absolute top-0 left-0 w-6 md:w-8 h-0.5 bg-white/40 md:bg-white/60"
              animate={{ 
                width: ['0px', '24px', '0px'],
                opacity: [0, 1, 0]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
            />
            <motion.div
              className="absolute top-0 left-0 w-0.5 h-6 md:h-8 bg-white/40 md:bg-white/60"
              animate={{ 
                height: ['0px', '24px', '0px'],
                opacity: [0, 1, 0]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 + 0.3 }}
            />
            <motion.div
              className="absolute bottom-0 right-0 w-6 md:w-8 h-0.5 bg-white/40 md:bg-white/60"
              animate={{ 
                width: ['0px', '24px', '0px'],
                opacity: [0, 1, 0]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 + 0.6 }}
            />
            <motion.div
              className="absolute bottom-0 right-0 w-0.5 h-6 md:h-8 bg-white/40 md:bg-white/60"
              animate={{ 
                height: ['0px', '24px', '0px'],
                opacity: [0, 1, 0]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 + 0.9 }}
            />
          </>
        )}
      </motion.div>
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
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Profile Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative overflow-hidden">
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
              className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-500 rounded-full shadow-lg shadow-cyan-500/50"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div 
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50"
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
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
              Gerd-Hubertus Weidenbrücher-Britze
            </h2>
            <div className="space-y-3 md:space-y-4 text-gray-300 leading-relaxed text-sm md:text-base">
              <p>
                Hallo! Ich bin <span className="text-cyan-400 font-semibold">Hubertus Weidenbrücher</span>, 
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
                beschäftige ich mich mit <span className="text-cyan-400">Fotografie</span>, 
                <span className="text-cyan-400"> klassischer Malerei</span> und 
                <span className="text-cyan-400"> digitaler Kunst</span>.
              </p>
            </div>
            
            {/* Quick Stats - Mobile Optimized */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 mt-6 md:mt-8">
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-cyan-400">5+</div>
                <div className="text-xs md:text-sm text-gray-400">Jahre UX/UI</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-cyan-400">8</div>
                <div className="text-xs md:text-sm text-gray-400">Unternehmen</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-cyan-400">10+</div>
                <div className="text-xs md:text-sm text-gray-400">Jahre Erfahrung</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default function AboutPageDark() {
  const [currentTime, setCurrentTime] = useState('')
  const timelineRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"]
  })
  
  const progressLine = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

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
    <div className="min-h-screen text-white relative overflow-hidden" style={{ 
      background: 'linear-gradient(to bottom right, var(--background), var(--background), rgba(42, 47, 54, 0.2))'
    }}>
      {/* 1. HERO SECTION - WITH REDESIGNED HUD SYSTEM */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="min-h-screen flex items-center justify-center relative"
        style={{ zIndex: 20 }} // Ensure it's above stars and HUD
      >
        {/* Mobile HUD Elements - Simplified */}
        <div className="absolute inset-0 pointer-events-none md:hidden" style={{ zIndex: 15 }}>
          <motion.div
            className="relative w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 1.5, delay: 1 }}
          >
            <svg
              width="100vw"
              height="100vh"
              viewBox="0 0 375 667"
              className="drop-shadow-sm"
            >
              {/* Simple corner brackets for mobile */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 1, delay: 2 }}
              >
                <path d="M20 20 L20 10 L30 10" fill="none" stroke="white" strokeWidth="1"/>
                <path d="M355 20 L355 10 L345 10" fill="none" stroke="white" strokeWidth="1"/>
                <path d="M20 647 L20 657 L30 657" fill="none" stroke="white" strokeWidth="1"/>
                <path d="M355 647 L355 657 L345 657" fill="none" stroke="white" strokeWidth="1"/>
              </motion.g>
              
              {/* Minimal scanning line */}
              <motion.line
                x1="0" y1="100" x2="375" y2="100"
                stroke="white" strokeWidth="0.5" strokeOpacity="0.3"
                animate={{ y: [100, 567, 100] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
            </svg>
          </motion.div>
        </div>

        {/* Desktop HUD Design */}
        <div className="absolute inset-0 pointer-events-none hidden md:block" style={{ zIndex: 15 }}>
          <motion.div
            className="relative w-full h-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ duration: 2, delay: 1 }}
          >
            <svg
              width="100vw"
              height="100vh"
              viewBox="0 0 1920 1080"
              className="drop-shadow-lg"
              style={{
                filter: `drop-shadow(0 0 20px white)`,
              }}
            >
              {/* Main circular HUD */}
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
              
              {/* Inner circle */}
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
              
              {/* Corner brackets */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2.5 }}
              >
                {/* Top left */}
                <path
                  d="M50 50 L50 20 L80 20"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                />
                {/* Top right */}
                <path
                  d="M1870 50 L1870 20 L1840 20"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                />
                {/* Bottom left */}
                <path
                  d="M50 1030 L50 1060 L80 1060"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                />
                {/* Bottom right */}
                <path
                  d="M1870 1030 L1870 1060 L1840 1060"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                />
              </motion.g>
              
              {/* Crosshairs */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ duration: 1, delay: 3 }}
              >
                <line
                  x1={960}
                  y1={440}
                  x2={960}
                  y2={410}
                  stroke="white"
                  strokeWidth="1"
                />
                <line
                  x1={960}
                  y1={640}
                  x2={960}
                  y2={670}
                  stroke="white"
                  strokeWidth="1"
                />
                <line
                  x1={660}
                  y1={540}
                  x2={630}
                  y2={540}
                  stroke="white"
                  strokeWidth="1"
                />
                <line
                  x1={1260}
                  y1={540}
                  x2={1290}
                  y2={540}
                  stroke="white"
                  strokeWidth="1"
                />
              </motion.g>
              
              {/* Side lines */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ duration: 1, delay: 3 }}
              >
                <line
                  x1={540}
                  y1={540}
                  x2={400}
                  y2={540}
                  stroke="white"
                  strokeWidth="2"
                />
                <line
                  x1={1380}
                  y1={540}
                  x2={1520}
                  y2={540}
                  stroke="white"
                  strokeWidth="2"
                />
              </motion.g>
              
              {/* Moving Elements */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 1, delay: 3.5 }}
              >
                {/* Moving dots on circles */}
                <motion.circle
                  cx="960"
                  cy="540"
                  r="3"
                  fill="cyan"
                  animate={{ 
                    x: [0, 400, 0, -400, 0],
                    y: [0, 200, 0, -200, 0]
                  }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                {/* Moving lines */}
                <motion.line
                  x1={100}
                  y1={100}
                  x2={150}
                  y2={100}
                  stroke="white"
                  strokeWidth="1"
                  strokeOpacity="0.6"
                  animate={{ 
                    x1: [100, 1770, 100],
                    x2: [150, 1820, 150]
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                <motion.line
                  x1={1820}
                  y1={980}
                  x2={1770}
                  y2={980}
                  stroke="white"
                  strokeWidth="1"
                  strokeOpacity="0.6"
                  animate={{ 
                    x1: [1820, 100, 1820],
                    x2: [1770, 150, 1770]
                  }}
                  transition={{ 
                    duration: 7,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                {/* Pulsing corner dots */}
                <motion.circle
                  cx="100"
                  cy="100"
                  r="2"
                  fill="cyan"
                  animate={{ 
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.5, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <motion.circle
                  cx="1820"
                  cy="100"
                  r="2"
                  fill="cyan"
                  animate={{ 
                    opacity: [1, 0.3, 1],
                    scale: [1.5, 1, 1.5]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <motion.circle
                  cx="100"
                  cy="980"
                  r="2"
                  fill="cyan"
                  animate={{ 
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.5, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
                
                <motion.circle
                  cx="1820"
                  cy="980"
                  r="2"
                  fill="cyan"
                  animate={{ 
                    opacity: [1, 0.3, 1],
                    scale: [1.5, 1, 1.5]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
              </motion.g>
              
              {/* Rotating outer ring */}
              <motion.circle
                cx="960"
                cy="540"
                r="480"
                fill="none"
                stroke="white"
                strokeWidth="1"
                strokeDasharray="2,20"
                strokeOpacity="0.7"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "960px 540px" }}
              />
              
              {/* Scan lines */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{ duration: 1, delay: 4 }}
              >
                <line
                  x1="0"
                  y1="200"
                  x2="1920"
                  y2="200"
                  stroke="white"
                  strokeWidth="0.5"
                  strokeOpacity="0.2"
                />
                <line
                  x1="0"
                  y1="880"
                  x2="1920"
                  y2="880"
                  stroke="white"
                  strokeWidth="0.5"
                  strokeOpacity="0.2"
                />
              </motion.g>

              {/* Additional About-specific elements */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ duration: 1, delay: 4.5 }}
              >
                {/* About portfolio indicators */}
                <circle cx="200" cy="300" r="3" fill="cyan" opacity="0.6">
                  <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite"/>
                </circle>
                <circle cx="1720" cy="300" r="3" fill="cyan" opacity="0.6">
                  <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite"/>
                </circle>
                <circle cx="200" cy="780" r="3" fill="cyan" opacity="0.6">
                  <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite"/>
                </circle>
                <circle cx="1720" cy="780" r="3" fill="cyan" opacity="0.6">
                  <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite"/>
                </circle>
              </motion.g>
            </svg>
          </motion.div>
        </div>

        <div className="relative text-center px-4 md:px-6 max-w-6xl" style={{ zIndex: 25 }}>
          {/* Main Content - Simplified frame to match homepage aesthetic */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-8xl font-extrabold tracking-tight mb-6 md:mb-8 relative text-white"
              style={{ 
                textShadow: '0 0 30px rgba(255, 255, 255, 0.4)'
              }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <span className="text-cyan-400/80 text-sm md:text-lg block mb-2 tracking-widest font-mono">GHWB.ABOUT.SYSTEM:</span>
              GERD-HUBERTUS WEIDENBRÜCHER-BRITZE
            </motion.h1>

            <motion.p 
              className="text-lg md:text-xl lg:text-2xl text-white/80 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto relative px-4 md:px-0"
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              Entdecke meine Reise als UX/UI Designer und die Erfahrungen, 
              die mich zu dem gemacht haben, was ich heute bin.
            </motion.p>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center relative px-4 md:px-0"
            >
              <Button 
                variant="secondary"
                size="base"
                icon="left"
                iconElement={<Users className="w-4 h-4" />}
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

      {/* Timeline Section - HUD Design */}
      <section ref={timelineRef} className="py-20 relative">
        {/* Enhanced HUD Background Elements - Simplified for Mobile */}
        <div className="absolute inset-0 pointer-events-none">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1920 1080"
            className="opacity-10 md:opacity-15"
          >
            {/* Grid Lines */}
            <defs>
              <pattern id="timelineGrid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.3" opacity="0.2"/>
              </pattern>
              <linearGradient id="scanGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="white" stopOpacity="0"/>
                <stop offset="50%" stopColor="white" stopOpacity="0.4"/>
                <stop offset="100%" stopColor="white" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#timelineGrid)" />
            
            {/* Floating HUD Elements */}
            <motion.g
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.3 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
            >
              {/* Left Side HUD Panel */}
              <rect x="50" y="200" width="120" height="80" fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.3"/>
              <line x1="60" y1="220" x2="160" y2="220" stroke="white" strokeWidth="0.5" strokeOpacity="0.4"/>
              <line x1="60" y1="240" x2="140" y2="240" stroke="white" strokeWidth="0.5" strokeOpacity="0.3"/>
              <line x1="60" y1="260" x2="150" y2="260" stroke="white" strokeWidth="0.5" strokeOpacity="0.3"/>
              <circle cx="65" cy="220" r="2" fill="white" opacity="0.4">
                <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2s" repeatCount="indefinite"/>
              </circle>
              
              {/* Right Side HUD Panel */}
              <rect x="1750" y="300" width="120" height="100" fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.3"/>
              <line x1="1760" y1="320" x2="1860" y2="320" stroke="white" strokeWidth="0.5" strokeOpacity="0.4"/>
              <line x1="1760" y1="340" x2="1840" y2="340" stroke="white" strokeWidth="0.5" strokeOpacity="0.3"/>
              <line x1="1760" y1="360" x2="1850" y2="360" stroke="white" strokeWidth="0.5" strokeOpacity="0.3"/>
              <line x1="1760" y1="380" x2="1830" y2="380" stroke="white" strokeWidth="0.5" strokeOpacity="0.3"/>
              <circle cx="1865" cy="320" r="2" fill="white" opacity="0.4">
                <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2.5s" repeatCount="indefinite"/>
              </circle>
              
              {/* Center Top HUD Elements */}
              <rect x="860" y="50" width="200" height="60" fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.2"/>
              <line x1="870" y1="70" x2="1050" y2="70" stroke="white" strokeWidth="0.5" strokeOpacity="0.3"/>
              <line x1="870" y1="85" x2="1030" y2="85" stroke="white" strokeWidth="0.5" strokeOpacity="0.3"/>
              <line x1="870" y1="100" x2="1040" y2="100" stroke="white" strokeWidth="0.5" strokeOpacity="0.3"/>
              
              {/* Bottom Center Elements */}
              <rect x="760" y="950" width="400" height="80" fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.2"/>
              <line x1="770" y1="970" x2="1150" y2="970" stroke="white" strokeWidth="0.5" strokeOpacity="0.3"/>
              <line x1="770" y1="990" x2="1100" y2="990" stroke="white" strokeWidth="0.5" strokeOpacity="0.3"/>
              <line x1="770" y1="1010" x2="1120" y2="1010" stroke="white" strokeWidth="0.5" strokeOpacity="0.3"/>
              
              {/* Crosshair Elements */}
              <g opacity="0.2">
                <line x1="400" y1="400" x2="420" y2="400" stroke="white" strokeWidth="1"/>
                <line x1="410" y1="390" x2="410" y2="410" stroke="white" strokeWidth="1"/>
              </g>
              <g opacity="0.2">
                <line x1="1500" y1="600" x2="1520" y2="600" stroke="white" strokeWidth="1"/>
                <line x1="1510" y1="590" x2="1510" y2="610" stroke="white" strokeWidth="1"/>
              </g>
              
              {/* Diagnostic Brackets */}
              <path d="M200 500 L200 480 L220 480" fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.3"/>
              <path d="M1700 500 L1700 480 L1680 480" fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.3"/>
              <path d="M200 600 L200 620 L220 620" fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.3"/>
              <path d="M1700 600 L1700 620 L1680 620" fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.3"/>
            </motion.g>
            
            {/* Scanning Effects */}
            <motion.line
              x1={0}
              y1={250}
              x2={1920}
              y2={250}
              stroke="url(#scanGradient)"
              strokeWidth="2"
              animate={{ y: [200, 900, 200] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <motion.line
              x1={0}
              y1={800}
              x2={1920}
              y2={800}
              stroke="url(#scanGradient)"
              strokeWidth="2"
              animate={{ y: [750, 300, 750] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4 }}
            />
            
            {/* Floating Indicators */}
            <motion.g animate={{ opacity: [0.2, 0.6, 0.2] }} transition={{ duration: 3, repeat: Infinity }}>
              <circle cx="300" cy="200" r="3" fill="white" opacity="0.4"/>
              <circle cx="1620" cy="800" r="3" fill="white" opacity="0.4"/>
              <circle cx="960" cy="150" r="2" fill="white" opacity="0.3"/>
              <circle cx="150" cy="900" r="2" fill="white" opacity="0.3"/>
              <circle cx="1770" cy="150" r="2" fill="white" opacity="0.3"/>
            </motion.g>
            
            {/* Data Streams */}
            <motion.g opacity="0.1">
              <line x1={100} y1={300} x2={300} y2={450} stroke="white" strokeWidth="0.5"/>
              <line x1={1820} y1={300} x2={1620} y2={450} stroke="white" strokeWidth="0.5"/>
              <line x1={960} y1={100} x2={960} y2={200} stroke="white" strokeWidth="0.5"/>
            </motion.g>
          </svg>
        </div>

        <div className="max-w-5xl mx-auto px-4 relative">
          {/* Standard Header - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-16 px-4 md:px-0"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4">
              Meine Reise
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Von den ersten Schritten im Design bis hin zu komplexen Enterprise-Projekten
            </p>
          </motion.div>

          {/* Timeline Items */}
          <div className="relative">
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

      {/* Contact CTA - Mobile Optimized */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl md:rounded-2xl p-6 md:p-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
              Lass uns zusammenarbeiten
            </h2>
            <p className="text-base md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
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