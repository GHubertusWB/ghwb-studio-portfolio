'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { ArrowRight, ArrowLeft, Camera, User, Heart, Sparkles, Eye } from 'lucide-react'
import ContactFormPhotography from './ContactFormPhotography'
import Footer from '@/components/Footer'
import { photographyImages } from '@/data/gallery'
import { Button } from '@/components/ui/Button'

// TypeScript Interfaces
interface Service {
  id: number;
  title: string;
  category: string;
  description: string;
  approach: string;
  image: string;
  gridSpan: string;
}

interface PortfolioWork {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  gridSpan: string;
}

/**
 * PhotographyPageDark Component (Page)
 * 
 * Dark mode photography portfolio page with HUD design elements.
 * Focuses on portrait and pet photography services.
 * 
 * @returns {JSX.Element} The complete dark photography page component
 */

export default function PhotographyPageDark(): React.JSX.Element {
  const [currentTime, setCurrentTime] = useState('')
  const [galleryImages, setGalleryImages] = useState<string[]>([])
  
  // Refs for scroll animations
  const servicesRef = useRef<HTMLElement>(null)
  const portfolioRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  // Real-time clock for HUD
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
    const sections = [servicesRef, portfolioRef, contactRef]
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

  const scrollToContactForm = (): void => {
    const contactElement = document.getElementById('contact-form')
    if (contactElement) {
      contactElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  // Statische Galerie-Bilder laden
  useEffect(() => {
    setGalleryImages(photographyImages)
  }, [])

  // Photography Services Data
  const services: Service[] = [
    {
      id: 1,
      title: "Porträtfotografie",
      category: "Portrait",
      description: "Individuelle Porträts, die Persönlichkeit und Charakter zum Ausdruck bringen",
      approach: "Natürliche Beleuchtung, authentische Momente",
      image: "/api/placeholder/600/400",
      gridSpan: "col-span-1 row-span-1"
    },
    {
      id: 2,
      title: "Haustierfotografie", 
      category: "Pets",
      description: "Liebevolle Aufnahmen Ihrer vierbeinigen Familienmitglieder",
      approach: "Geduldiger Umgang, natürliche Umgebung",
      image: "/api/placeholder/600/400",
      gridSpan: "col-span-1 row-span-1"
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

              {/* Additional Photography-specific elements */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ duration: 1, delay: 4.5 }}
              >
                {/* Photography focus indicators */}
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
          {/* Back Button - Styled like homepage buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ scale: 1.05, y: -2 }}
            className="mb-12"
          >
            <Button
              variant="tertiary"
              size="xs"
              onClick={() => window.history.back()}
              className="text-white/70 hover:text-white font-mono hover:bg-white/5"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
              icon={<ArrowLeft className="w-4 h-4" />}
            >
              SYSTEM.EXIT
            </Button>
          </motion.div>

          {/* Main Content - Simplified frame to match homepage aesthetic */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-8xl font-light tracking-tight mb-8 relative text-white"
              style={{ 
                textShadow: '0 0 30px rgba(255, 255, 255, 0.4)'
              }}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <span className="text-cyan-400/80 text-lg block mb-2 tracking-widest font-mono">GHWB.PHOTOGRAPHY.SYSTEM:</span>
              FOTOGRAFIE
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed max-w-3xl mx-auto relative"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              Authentische Momente eingefangen. Spezialisiert auf Porträt- und Haustierfotografie, die Emotionen und Persönlichkeiten zum Leben erweckt.
            </motion.p>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center relative"
            >
              <Button
                variant="tertiary"
                size="base"
                className="font-mono"
                icon={<Sparkles className="w-4 h-4" />}
              >
                SERVICES.EXPLORE
              </Button>
              <Button
                variant="secondary"
                size="base"
                onClick={scrollToContactForm}
                className="font-mono"
              >
                BOOKING.START
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* 2. SERVICES SECTION */}
      <section ref={servicesRef} className="py-32 px-6 relative z-10">
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
              PHOTOGRAPHY.SERVICES
            </div>
            <h2 className="text-4xl font-semibold text-white leading-tight tracking-tight md:text-3xl mb-6">
              Spezialisierte Fotografie
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Fokus auf Porträt- und Haustierfotografie mit authentischem Ansatz
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl border border-white/20 hover:border-cyan-400/40 transition-all duration-300"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-400/20 mb-6">
                  {service.category === 'Portrait' ? (
                    <User className="w-6 h-6 text-cyan-400" />
                  ) : (
                    <Heart className="w-6 h-6 text-cyan-400" />
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
                <p className="text-white/70 leading-relaxed mb-4">{service.description}</p>
                <p className="text-cyan-400 text-sm font-mono">{service.approach}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PORTFOLIO GRID */}
      <section ref={portfolioRef} className="py-20 relative z-10">
        <div className="max-w-none mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 px-6"
          >
            <div className="inline-flex items-center text-cyan-400 font-mono text-sm tracking-wider mb-4">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
              PORTFOLIO.SHOWCASE
            </div>
            <h2 className="text-4xl font-semibold text-white leading-tight tracking-tight md:text-3xl mb-6">
              Ausgewählte Arbeiten
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Eine Auswahl authentischer Fotografie-Projekte
            </p>
          </motion.div>

          {/* Portfolio Grid - Vollbreite bis zum Rand */}
          <div className="grid grid-cols-3 auto-rows-[33.333vw] gap-4">
            {galleryImages.length === 0 && (
              <div className="col-span-3 text-center text-white/40 py-20">Noch keine Bilder im Galerie-Ordner.</div>
            )}
            {galleryImages.map((src, index) => (
              <motion.div
                key={src}
                className={`cursor-pointer group relative overflow-hidden col-span-1 row-span-1`}
                style={{  }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-full h-full bg-white/5 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-cyan-400/20 relative overflow-hidden backdrop-blur-sm">
                  {/* Bild aus Galerie */}
                  <img src={src} alt="Galeriebild" className="object-cover w-full h-full" />
                  {/* Overlay mit Dateiname als Platzhalter für Metadaten */}
                  <div className="absolute inset-0 bg-black/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                    <div className="text-center px-4">
                      <div className="font-mono text-xs text-cyan-400 mb-2 tracking-wider uppercase">
                        {src.split('/').pop()?.split('.')[0]}
                      </div>
                      <div className="text-white font-bold text-lg mb-2">
                        Foto {index + 1}
                      </div>
                      <div className="text-white/70 text-sm">
                        {/* Hier könnten weitere Metadaten stehen */}
                      </div>
                    </div>
                  </div>
                  {/* HUD corner elements */}
                  <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                  <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                  <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. APPROACH SECTION */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center text-cyan-400 font-mono text-sm tracking-wider mb-4">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
              APPROACH.PHILOSOPHY
            </div>
            <h2 className="text-4xl font-semibold text-white leading-tight tracking-tight md:text-3xl mb-6">
              Mein fotografischer Ansatz
            </h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Authentizität steht im Mittelpunkt. Jede Aufnahme soll die wahre Persönlichkeit 
              und natürliche Emotionen einfangen – ohne Künstlichkeit, mit viel Geduld und Verständnis.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {[
                { icon: Eye, title: "Authentische Momente", desc: "Echte Emotionen statt gestellte Posen" },
                { icon: Heart, title: "Persönlicher Ansatz", desc: "Individuell auf Sie abgestimmt" },
                { icon: Camera, title: "Technische Perfektion", desc: "Modernste Ausrüstung, jahrelange Erfahrung" }
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-white/20 mb-6" style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)'
                    }}>
                      <Icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-white">{item.title}</h3>
                    <p className="text-white/70 leading-relaxed">{item.desc}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. CONTACT SECTION */}
      <section ref={contactRef} id="contact-form" className="py-20 px-6 relative z-10">
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
              CONTACT.BOOKING
            </div>
            <h2 className="text-4xl font-semibold text-white leading-tight tracking-tight md:text-3xl mb-6">
              Lassen Sie uns Ihre Geschichte erzählen
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Bereit für ein authentisches Foto-Shooting? Kontaktieren Sie mich für 
              Porträt- oder Haustierfotografie.
            </p>
          </motion.div>

          <ContactFormPhotography />
        </div>
      </section>

      <Footer />
    </div>
  )
}
