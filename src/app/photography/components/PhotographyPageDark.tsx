'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import React from 'react'
import { ArrowRight, ArrowLeft, Camera, User, Heart, Sparkles, Eye } from 'lucide-react'
import Footer from '@/components/Footer'
import FloatingContactButton from '@/components/FloatingContactButton'
import { photographyGroups } from '@/data/gallery'
import { Button } from '@/components/ui/Button'
import { SpecialButtonDark } from '@/components/ui/SpecialButtonDark'

// TypeScript Interfaces
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
  const [activeGroupIndex, setActiveGroupIndex] = useState(0)
  
  // Refs for scroll animations
  const servicesRef = useRef<HTMLElement>(null)
  const portfolioRef = useRef<HTMLElement>(null)

  // Group navigation functions
  const handlePreviousGroup = () => {
    setActiveGroupIndex((prevIndex) => 
      prevIndex === 0 ? photographyGroups.length - 1 : prevIndex - 1
    )
  }

  const handleNextGroup = () => {
    setActiveGroupIndex((prevIndex) => 
      (prevIndex + 1) % photographyGroups.length
    )
  }

  // Vordefiniertes Raster-Muster - identisch zum Light Mode
  const predefinedGridPattern = [
    0, // 1x1 - Quadrat klein
    1, // 2x1 - Querformat
    1, // 2x1 - Querformat 
    0, // 1x1 - Quadrat klein
    3, // 1x2 - Hochformat
    0, // 1x1 - Quadrat klein
    0, // 1x1 - Quadrat klein
    1, // 2x1 - Querformat
    4, // 2x2 - Quadrat groß
    0, // 1x1 - Quadrat klein
    3, // 1x2 - Hochformat
    1, // 2x1 - Querformat
    0, // 1x1 - Quadrat klein
    0, // 1x1 - Quadrat klein
    0, // 1x1 - Quadrat klein
    2, // 3x1 - Panorama (komplette Zeile)
    0, // 1x1 - Quadrat klein
    0, // 1x1 - Quadrat klein
    0, // 1x1 - Quadrat klein
    1, // 2x1 - Querformat
    0, // 1x1 - Quadrat klein
    3, // 1x2 - Hochformat
    1, // 2x1 - Querformat
    4, // 2x2 - Quadrat groß
    0  // 1x1 - Quadrat klein
  ]

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
    const sections = [servicesRef, portfolioRef]
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



  // Load images from current group
  useEffect(() => {
    if (photographyGroups[activeGroupIndex]) {
      setGalleryImages(photographyGroups[activeGroupIndex].images)
    }
  }, [activeGroupIndex])



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
              <SpecialButtonDark
                variant="secondary"
                size="base"
                className="font-mono"
                icon="left"
                iconElement={<Sparkles className="w-4 h-4" />}
              >
                SERVICES.EXPLORE
              </SpecialButtonDark>
              <SpecialButtonDark
                variant="primary"
                size="base"
                onClick={() => { 
                  const event = new CustomEvent('openContactModal');
                  window.dispatchEvent(event);
                }}
                className="font-mono"
              >
                BOOKING.REQUEST
              </SpecialButtonDark>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>



      {/* 2. PORTFOLIO SECTIONS - HAUSTIERE, LANDSCHAFT, MENSCHEN */}
      
      {/* Section 1: Haustiere - Text Links, Bilder Rechts */}
      <ParallaxSectionDark 
        textPosition="left"
        title="HAUSTIERE"
        description="Treue Begleiter mit einzigartiger Persönlichkeit – ich fange die besonderen Momente 
          mit Ihren geliebten Haustieren ein. Von verspielten Welpen bis zu majestätischen 
          Katzen, jedes Tier hat seine eigene Geschichte zu erzählen."
        images={[
          "/gallery/photography/Haustier1.jpeg",
          "/gallery/photography/Haustier2.jpeg",
          "/gallery/photography/Haustier3.jpeg"
        ]}
        bgColor=""
      />

      {/* Section 2: Landschaft - Text Rechts, Bilder Links */}
      <ParallaxSectionDark 
        textPosition="right"
        title="LANDSCHAFT"
        description="Die Schönheit der Natur in all ihren Facetten – von atemberaubenden Panoramen 
          bis zu intimen Naturaufnahmen. Jede Landschaft erzählt ihre eigene Geschichte 
          von Licht, Schatten und natürlicher Harmonie."
        images={[
          "/gallery/photography/Landschaft1.jpeg",
          "/gallery/photography/Landschaft2.jpeg",
          "/gallery/photography/Landschaft3.jpeg"
        ]}
        bgColor=""
        imageLayout="landscape"
      />

      {/* Section 3: Menschen - Text Links, Bilder Rechts */}
      <ParallaxSectionDark 
        textPosition="left"
        title="MENSCHEN"
        description="Authentische Porträts, die Persönlichkeit und Charakter einfangen. Ob professionelle 
          Business-Aufnahmen oder emotionale Familienporträts – ich schaffe Bilder, die 
          die Essenz jedes Menschen zum Ausdruck bringen."
        images={[
          "/gallery/photography/Menschen1.jpeg",
          "/gallery/photography/Menschen2.jpeg",
          "/gallery/photography/Menschen3.jpeg"
        ]}
        bgColor=""
      />

      <Footer />

      {/* FLOATING CONTACT BUTTON */}
      <FloatingContactButton />
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
  imageLayout?: 'default' | 'landscape'
}

const ParallaxSectionDark: React.FC<ParallaxSectionDarkProps> = 
  ({ textPosition, title, description, images, bgColor, imageLayout = 'default' }) => {
    const sectionRef = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({
      target: sectionRef,
      offset: ["start end", "end start"]
    })

    // Parallax transforms für Bilder - vergrößert und smooth
    const imageY1 = useTransform(scrollYProgress, [0, 1], ['10%', '-10%'])
    const imageY2 = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])
    const imageY3 = useTransform(scrollYProgress, [0, 1], ['12%', '-12%'])

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
              className={`grid grid-cols-2 gap-4 ${textPosition === 'right' ? 'order-2 lg:order-1' : ''}`}
            >
              {imageLayout === 'landscape' ? (
                <>
                  {/* Landscape Layout: Wide image first */}
                  <div className="col-span-2 aspect-video bg-white/5 border border-white/10 rounded-lg overflow-hidden">
                    <motion.img 
                      src={images[0]} 
                      alt={`${title} 1`} 
                      className="w-full h-full object-cover"
                      style={{ y: imageY1, scale: 1.2 }}
                    />
                  </div>
                  <div className="aspect-square bg-white/5 border border-white/10 rounded-lg overflow-hidden">
                    <motion.img 
                      src={images[1]} 
                      alt={`${title} 2`} 
                      className="w-full h-full object-cover"
                      style={{ y: imageY2, scale: 1.2 }}
                    />
                  </div>
                  <div className="aspect-square bg-white/5 border border-white/10 rounded-lg overflow-hidden">
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
                  {/* Default Layout: Two squares, then wide */}
                  <div className="aspect-square bg-white/5 border border-white/10 rounded-lg overflow-hidden">
                    <motion.img 
                      src={images[0]} 
                      alt={`${title} 1`} 
                      className="w-full h-full object-cover"
                      style={{ y: imageY1, scale: 1.2 }}
                    />
                  </div>
                  <div className="aspect-square bg-white/5 border border-white/10 rounded-lg overflow-hidden">
                    <motion.img 
                      src={images[1]} 
                      alt={`${title} 2`} 
                      className="w-full h-full object-cover"
                      style={{ y: imageY2, scale: 1.2 }}
                    />
                  </div>
                  <div className="col-span-2 aspect-video bg-white/5 border border-white/10 rounded-lg overflow-hidden">
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
