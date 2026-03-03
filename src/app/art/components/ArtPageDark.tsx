'use client'

import React from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { Sparkles } from 'lucide-react'
import Link from 'next/link'
import FloatingContactButton from '@/components/FloatingContactButton'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/Button'
import { SpecialButtonDark } from '@/components/ui/SpecialButtonDark'
import { artGroups } from '@/data/gallery'

// TypeScript Interfaces (same as light version)
interface Artwork {
  title: string;
  medium: string;
  year: string;
  description: string;
  dimensions: string;
}

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

interface PortfolioWork {
  id: number;
  title: string;
  category: string;
  medium: string;
  year: string;
  image: string;
  gridSpan: string;
  description: string;
  tags: string[];
}

interface CollaborationCard {
  title: string;
  description: string;
  partner: string;
}

/**
 * ArtPageDark Component (Page)
 * 
 * Dark mode art portfolio page with HUD design elements.
 * Uses the same content as the light version but with spaceship HUD aesthetic.
 * 
 * @returns {JSX.Element} The complete dark art page component
 */

export default function ArtPageDark(): React.JSX.Element {
  const [currentTime, setCurrentTime] = useState('')
  const [teilenIndex, setTeilenIndex] = useState(0)

  const teilenImages = [
    '/gallery/art/Teilen-Fischfang.jpeg',
    '/gallery/art/Teilen-Depressionen.jpeg',
    '/gallery/art/Teilen-Religionen.jpeg',
  ]
  const portfolioRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  // Real-time clock for HUD elements
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

  // Intersection Observer for performance-optimized animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    // Observe sections
    const sections = [portfolioRef, contactRef]
    sections.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current)
        
        // Also observe child elements
        const children = ref.current.querySelectorAll('.hud-animate, .hud-portfolio-item')
        children.forEach((child: Element) => observer.observe(child))
      }
    })

    return () => observer.disconnect()
  }, [])

  // Same content as light version
  const artwork: Artwork = {
    title: "Teilen - AR Canvas Serie",
    medium: "Augmented Reality & Canvas",
    year: "2024",
    description: "Harmonie in der Gesellschaft wird schnell verdrängt, wenn es um stark diskutierte Themen geht. Die Serie 'Teilen' kritisiert dieses Verhalten und zeigt auf, dass eine bewusste Betrachtung beider Seiten erst das Gesamtbild erkennen gibt.",
    dimensions: "Variable Dimensionen"
  }



  const processSteps: ProcessStep[] = [
    {
      step: "01",
      title: "Konzeption & Vision",
      description: "Entwicklung der kreativen Vision und technischen Machbarkeitsstudie"
    },
    {
      step: "02", 
      title: "Iteration & Verfeinerung",
      description: "Experimentelle Phase mit verschiedenen Ansätzen und Techniken"
    },
    {
      step: "03",
      title: "Umsetzung & Realisierung", 
      description: "Finale Ausarbeitung und technische Implementierung"
    },
    {
      step: "04",
      title: "Präsentation & Installation",
      description: "Aufbau und kuratorische Betreuung der finalen Installation"
    }
  ]

  const collaborations: CollaborationCard[] = [
    {
      title: "Digital Art Festival",
      partner: "Kunstmuseum Dresden",
      description: "Kollaborative Installation zum Thema digitale Transformation in der zeitgenössischen Kunst."
    },
    {
      title: "AR Workshop Series",
      partner: "Goethe Institut",
      description: "Bildungsprogramm zur Einführung von Augmented Reality in kreative Prozesse."
    },
    {
      title: "Sustainable Art Initiative",
      partner: "Greenpeace Deutschland",
      description: "Gemeinsame Projekte zu Umweltbewusstsein und nachhaltiger Kunstproduktion."
    },
    {
      title: "Tech Meets Art",
      partner: "Berlin Art Week",
      description: "Interdisziplinäre Ausstellung zwischen Technologie und traditioneller Kunst."
    },
    {
      title: "Community Canvas",
      partner: "Lokale Kunstvereine",
      description: "Partizipative Kunstprojekte mit Bürgerbeteiligung in verschiedenen Stadtteilen."
    },
    {
      title: "Future Visions",
      partner: "TU Berlin",
      description: "Forschungskooperation zu neuen Technologien in der Kunstpraxis."
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
        {/* SPACESHIP HUD Design - Only for Hero Section (Based on Homepage) */}
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 15 }}>
          <motion.div
            className="relative w-full h-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.4, scale: 1 }}
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
                  x1="960"
                  y1="440"
                  x2="960"
                  y2="410"
                  stroke="white"
                  strokeWidth="1"
                />
                <line
                  x1="960"
                  y1="640"
                  x2="960"
                  y2="670"
                  stroke="white"
                  strokeWidth="1"
                />
                <line
                  x1="660"
                  y1="540"
                  x2="630"
                  y2="540"
                  stroke="white"
                  strokeWidth="1"
                />
                <line
                  x1="1260"
                  y1="540"
                  x2="1290"
                  y2="540"
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
                  x1="540"
                  y1="540"
                  x2="400"
                  y2="540"
                  stroke="white"
                  strokeWidth="2"
                />
                <line
                  x1="1380"
                  y1="540"
                  x2="1520"
                  y2="540"
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
                  x1="100"
                  y1="100"
                  x2="150"
                  y2="100"
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
                  x1="1820"
                  y1="980"
                  x2="1770"
                  y2="980"
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

              {/* Additional Art-specific elements */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ duration: 1, delay: 4.5 }}
              >
                {/* Art portfolio indicators */}
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

        <div className="relative text-center px-6 max-w-6xl" style={{ zIndex: 25 }}>
          {/* Main Content - Simplified frame to match homepage aesthetic */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-8xl font-extrabold tracking-tight mb-8 relative text-white"
              style={{ 
                textShadow: '0 0 30px rgba(255, 255, 255, 0.4)'
              }}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <span className="text-cyan-400/80 text-lg block mb-2 tracking-widest font-mono">GHWB.ART.SYSTEM:</span>
              KUNST & KREATIVITÄT
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed max-w-3xl mx-auto relative"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              Digitale Kunst trifft auf traditionelle Ästhetik. Eine Exploration der Grenzen zwischen Technologie und menschlicher Kreativität.
            </motion.p>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center relative"
            >
              <SpecialButtonDark 
                variant="secondary"
                size="base"
                icon="left"
                iconElement={<Sparkles className="w-4 h-4" />}
              >
                Portfolio entdecken
              </SpecialButtonDark>
              
              <SpecialButtonDark 
                variant="primary"
                size="base"
                onClick={() => { 
                  const event = new CustomEvent('openContactModal');
                  window.dispatchEvent(event);
                }}
              >
                Zusammenarbeiten
              </SpecialButtonDark>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* AKTUELLE AUSSTELLUNG BANNER */}
      <section className="py-16 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl border border-orange-500/30 p-8 md:p-10"
            style={{ background: 'linear-gradient(135deg, rgba(234, 88, 12, 0.08), rgba(245, 158, 11, 0.06), rgba(56, 189, 248, 0.06))' }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-sky-500/10 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-block w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-orange-400 uppercase tracking-wider">Aktuelle Ausstellung</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">
                Kunst im Schaufenster &amp; Entenjagd
              </h3>
              <p className="text-white/70 mb-6 max-w-2xl leading-relaxed">
                Noch bis 5. April 2026 in Holzkirchen: Fünf großformatige Acrylgemälde in der Raiffeisenbank 
                und acht kleine Entenbüsten-Miniaturgemälde im Atrium Gesundheitszentrum — eine interaktive 
                Entenjagd durch die Marktgemeinde.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/ausstellung-holzkirchen">
                  <SpecialButtonDark size="sm">
                    Zur Ausstellung →
                  </SpecialButtonDark>
                </Link>
                <a
                  href="https://www.holzkirchen.de/kunst-im-schaufenster"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white/80 border border-white/20 rounded-full hover:bg-white/10 transition-colors"
                >
                  holzkirchen.de ↗
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. FEATURED ARTWORK - ADVANCED INTERACTIVE STYLE */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            {/* Left Side - Teilen Carousel */}
            <div className="relative">
              <motion.div 
                className="relative h-full"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="relative w-full aspect-[3/4] overflow-hidden">
                  <AnimatePresence initial={false} mode="wait">
                    <motion.img
                      key={teilenIndex}
                      src={teilenImages[teilenIndex]}
                      alt={`${artwork.title} ${teilenIndex + 1}`}
                      className="absolute inset-0 w-full h-full object-cover"
                      initial={{ opacity: 0, x: 80 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -80 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                    />
                  </AnimatePresence>
                  {/* Chevrons */}
                  <button
                    onClick={() => setTeilenIndex(prev => (prev - 1 + teilenImages.length) % teilenImages.length)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-sm border border-white/20 text-white hover:bg-black/60 transition-colors"
                    aria-label="Vorheriges Bild"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                  </button>
                  <button
                    onClick={() => setTeilenIndex(prev => (prev + 1) % teilenImages.length)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-sm border border-white/20 text-white hover:bg-black/60 transition-colors"
                    aria-label="Nächstes Bild"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                  </button>
                </div>
                {/* Dots */}
                <div className="flex justify-center gap-2 mt-4">
                  {teilenImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setTeilenIndex(i)}
                      className={`w-2 h-2 rounded-full transition-colors ${i === teilenIndex ? 'bg-white' : 'bg-white/40'}`}
                      aria-label={`Bild ${i + 1}`}
                    />
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Side - Enhanced Content */}
            <div className="space-y-8">
              {/* Title Section */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-4 leading-tight">
                  <span className="text-cyan-400/80 text-lg block mb-2 tracking-widest font-mono">AUSGEWÄHLTE.ARBEIT:</span>
                  {artwork.title}
                </h2>
              </motion.div>

              {/* Description */}
              <motion.p 
                className="text-lg text-white/80 leading-relaxed"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                {artwork.description}
              </motion.p>

              {/* Technical Specifications */}
              <motion.div 
                className="grid grid-cols-2 gap-6 border border-white/10 p-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                viewport={{ once: true }}
              >
                <div>
                  <div className="text-cyan-400/80 mb-2 font-mono text-xs tracking-wider">MEDIUM.TYPE</div>
                  <div className="font-medium text-white text-sm">{artwork.medium}</div>
                </div>
                <div>
                  <div className="text-cyan-400/80 mb-2 font-mono text-xs tracking-wider">CREATION.YEAR</div>
                  <div className="font-medium text-white text-sm">{artwork.year}</div>
                </div>
                <div>
                  <div className="text-cyan-400/80 mb-2 font-mono text-xs tracking-wider">DIMENSIONS</div>
                  <div className="font-medium text-white text-sm">{artwork.dimensions}</div>
                </div>
                <div>
                  <div className="text-cyan-400/80 mb-2 font-mono text-xs tracking-wider">STATUS</div>
                  <div className="font-medium text-white text-sm flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    ACTIVE
                  </div>
                </div>
              </motion.div>


            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. PORTFOLIO SECTIONS - DUX, BEDROHTE TIERE, AUGMENTED & DIGITAL ART */}
      
      {/* Section 1: Dux - Text Links, Bilder Rechts */}
      <ParallaxSectionDark 
        textPosition="left"
        title="DUX"
        description="Die Dux-Serie vereint digitale Ästhetik mit klassischer Formensprache. 
          Jedes Werk interpretiert das Motiv der Ente als kulturelles Symbol neu — 
          zwischen Pop Art, Street Art und zeitgenössischer Malerei."
        images={[
          '/gallery/art/Dux1.jpg',
          '/gallery/art/Dux2.jpg',
          '/gallery/art/Dux3.jpg',
          '/gallery/art/Dux4.jpg',
          '/gallery/art/Dux5.jpg',
          '/gallery/art/Dux6.jpg',
          '/gallery/art/Dux7.jpg',
          '/gallery/art/Dux8.jpg',
          '/gallery/art/Dux9.jpg',
          '/gallery/art/Dux10.jpg',
          '/gallery/art/Dux11.jpg',
          '/gallery/art/Dux13.jpg',
          '/gallery/art/Dux14.jpg',
          '/gallery/art/Dux-Red.jpg',
        ]}
        bgColor=""
        imageLayout="grid-carousel"
      />

      {/* Section 2: Bedrohte Tiere - Text Rechts, Bilder Links */}
      <ParallaxSectionDark 
        textPosition="right"
        title="BEDROHTE TIERE"
        description="Großformatige Acrylgemälde, die bedrohte Tierarten in expressiver 
          Farbgebung porträtieren. Die Serie schafft Bewusstsein für den Artenschutz 
          und verbindet emotionale Kraft mit künstlerischer Ausdrucksstärke."
        images={[
          '/gallery/art/Kraniche%20im%20D%C3%A4mmerlicht%20am%20Wasser.png',
          '/gallery/art/purpurkranich.jpg',
          '/gallery/art/uferschnepfe.jpg',
        ]}
        bgColor=""
        imageLayout="carousel"
      />

      {/* Section 3: Augmented & Digital Art - Text Links, Bilder Rechts */}
      <ParallaxSectionDark 
        textPosition="left"
        title="AUGMENTED & DIGITAL ART"
        description="An der Schnittstelle von Technologie und Kunst entstehen immersive 
          Erlebnisse. Augmented Reality, generative Algorithmen und digitale Medien 
          verschmelzen zu einer neuen Form der kreativen Expression."
        images={[
          artGroups.find(g => g.id === 'semantic-ducks')?.images[0] || '/gallery/art/76825CEC-4305-466A-B431-EFD7F61DA8AC_1_105_c.jpeg',
          artGroups.find(g => g.id === 'semantic-ducks')?.images[1] || '/gallery/art/881F527F-9EB2-4F86-988A-CB7C0F2A2BB7_1_105_c.jpeg',
          artGroups.find(g => g.id === 'semantic-ducks')?.images[2] || '/gallery/art/881F7165-B85A-474D-B816-AE4E2ED1222A_1_105_c.jpeg',
        ]}
        bgColor=""
      />

      {/* FLOATING CONTACT BUTTON */}
      <FloatingContactButton />

      <Footer />
    </div>
  )
}

/**
 * ParallaxSectionDark Component
 * Creates a section with parallax scroll effects for dark mode
 */
interface ParallaxSectionDarkProps {
  textPosition: 'left' | 'right'
  title: string
  description: string
  images: string[]
  bgColor: string
  imageLayout?: 'default' | 'landscape' | 'carousel' | 'grid-carousel'
}

const ParallaxSectionDark: React.FC<ParallaxSectionDarkProps> = 
  ({ textPosition, title, description, images, bgColor, imageLayout = 'default' }) => {
    const sectionRef = useRef<HTMLElement>(null)
    const [carouselIndex, setCarouselIndex] = useState(0)
    const [direction, setDirection] = useState(0)
    const pageSize = 2
    const totalPages = Math.ceil(images.length / pageSize)
    const [gridPage, setGridPage] = useState(0)
    const { scrollYProgress } = useScroll({
      target: sectionRef,
      offset: ["start end", "end start"]
    })

    const imageY1 = useTransform(scrollYProgress, [0, 1], ['10%', '-10%'])
    const imageY2 = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])
    const imageY3 = useTransform(scrollYProgress, [0, 1], ['12%', '-12%'])

    const handlePrev = () => {
      setDirection(-1)
      setCarouselIndex(prev => (prev - 1 + images.length) % images.length)
    }
    const handleNext = () => {
      setDirection(1)
      setCarouselIndex(prev => (prev + 1) % images.length)
    }

    const slideVariants = {
      enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
      center: { x: 0, opacity: 1 },
      exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
    }

    return (
      <section 
        ref={sectionRef}
        className={`py-32 px-6 relative z-10 overflow-hidden ${bgColor}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: textPosition === 'left' ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className={`space-y-6 ${textPosition === 'right' ? 'order-1 lg:order-2' : ''}`}
            >
              <div className="inline-flex items-center text-cyan-400 font-mono text-sm tracking-wider mb-4">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
                PORTFOLIO.SHOWCASE
              </div>
              <h2 className="text-4xl font-semibold text-white leading-tight tracking-tight md:text-3xl">
                {title}
              </h2>
              <p className="text-lg text-white/70 leading-relaxed">
                {description}
              </p>
            </motion.div>

            {/* Image Grid with Parallax */}
            <motion.div
              initial={{ opacity: 0, x: textPosition === 'left' ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className={`${imageLayout === 'carousel' || imageLayout === 'grid-carousel' ? 'relative' : 'grid gap-4 grid-cols-2'} ${textPosition === 'right' ? 'order-2 lg:order-1' : ''}`}
            >
              {imageLayout === 'grid-carousel' ? (
                <div className="relative">
                  <div className="grid grid-cols-2 gap-3">
                    <AnimatePresence initial={false} mode="wait">
                      {images.slice(gridPage * pageSize, gridPage * pageSize + pageSize).map((src, i) => (
                        <motion.div
                          key={`${gridPage}-${i}`}
                          className="aspect-[3/4] bg-white/5 border border-white/10 overflow-hidden"
                          initial={{ opacity: 0, x: 80 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -80 }}
                          transition={{ duration: 0.4, delay: i * 0.3, ease: 'easeOut' }}
                        >
                          <img
                            src={src}
                            alt={`${title} ${gridPage * pageSize + i + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                  {/* Chevrons */}
                  <button
                    onClick={() => { setDirection(-1); setGridPage(prev => (prev - 1 + totalPages) % totalPages) }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-sm border border-white/20 text-white hover:bg-black/60 transition-colors"
                    aria-label="Vorherige Seite"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                  </button>
                  <button
                    onClick={() => { setDirection(1); setGridPage(prev => (prev + 1) % totalPages) }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-sm border border-white/20 text-white hover:bg-black/60 transition-colors"
                    aria-label="Nächste Seite"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                  </button>
                  {/* Page dots */}
                  <div className="flex justify-center gap-2 mt-4">
                    {Array.from({ length: totalPages }).map((_, i) => (
                      <button
                        key={i}
                        onClick={() => { setDirection(i > gridPage ? 1 : -1); setGridPage(i) }}
                        className={`w-2 h-2 rounded-full transition-colors ${i === gridPage ? 'bg-white' : 'bg-white/40'}`}
                        aria-label={`Seite ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              ) : imageLayout === 'carousel' ? (
                <div className="relative aspect-[3/4] bg-white/5 border border-white/10 overflow-hidden">
                  <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.img
                      key={carouselIndex}
                      src={images[carouselIndex]}
                      alt={`${title} ${carouselIndex + 1}`}
                      className="absolute inset-0 w-full h-full object-cover"
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                    />
                  </AnimatePresence>
                  {/* Chevrons */}
                  <button
                    onClick={handlePrev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-sm border border-white/20 text-white hover:bg-black/60 transition-colors"
                    aria-label="Vorheriges Bild"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-sm border border-white/20 text-white hover:bg-black/60 transition-colors"
                    aria-label="Nächstes Bild"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                  </button>
                  {/* Dots */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => { setDirection(i > carouselIndex ? 1 : -1); setCarouselIndex(i) }}
                        className={`w-2 h-2 rounded-full transition-colors ${i === carouselIndex ? 'bg-white' : 'bg-white/40'}`}
                        aria-label={`Bild ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              ) : imageLayout === 'landscape' ? (
                <>
                  <div className="col-span-2 aspect-video bg-white/5 border border-white/10 overflow-hidden">
                    <motion.img 
                      src={images[0]} 
                      alt={`${title} 1`} 
                      className="w-full h-full object-cover"
                      style={{ y: imageY1, scale: 1.2 }}
                    />
                  </div>
                  <div className="aspect-square bg-white/5 border border-white/10 overflow-hidden">
                    <motion.img 
                      src={images[1]} 
                      alt={`${title} 2`} 
                      className="w-full h-full object-cover"
                      style={{ y: imageY2, scale: 1.2 }}
                    />
                  </div>
                  <div className="aspect-square bg-white/5 border border-white/10 overflow-hidden">
                    <motion.img 
                      src={images[2]} 
                      alt={`${title} 3`} 
                      className="w-full h-full object-cover"
                      style={{ y: imageY3, scale: 1.2 }}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="aspect-square bg-white/5 border border-white/10 overflow-hidden">
                    <motion.img 
                      src={images[0]} 
                      alt={`${title} 1`} 
                      className="w-full h-full object-cover"
                      style={{ y: imageY1, scale: 1.2 }}
                    />
                  </div>
                  <div className="aspect-square bg-white/5 border border-white/10 overflow-hidden">
                    <motion.img 
                      src={images[1]} 
                      alt={`${title} 2`} 
                      className="w-full h-full object-cover"
                      style={{ y: imageY2, scale: 1.2 }}
                    />
                  </div>
                  <div className="col-span-2 aspect-video bg-white/5 border border-white/10 overflow-hidden">
                    <motion.img 
                      src={images[2]} 
                      alt={`${title} 3`} 
                      className="w-full h-full object-cover"
                      style={{ y: imageY3, scale: 1.2 }}
                    />
                  </div>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    )
  }
