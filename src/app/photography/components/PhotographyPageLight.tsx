'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import React from 'react'
import { ArrowRight, ArrowLeft, Camera, User, Heart, Sparkles, Eye } from 'lucide-react'
import Footer from '@/components/Footer'
import FloatingCloudsArt from '@/app/art/components/FloatingCloudsArt'
import FloatingContactButton from '@/components/FloatingContactButton'
import { photographyGroups } from '@/data/gallery'
import { Button } from '@/components/ui/Button'
import { SpecialButton } from '@/components/ui/SpecialButton'




/**
 * PhotographyPageLight Component (Page)
 * 
 * Light mode photography portfolio page with minimalist Bauhaus design.
 * Focuses on portrait and pet photography services.
 * 
 * @returns {JSX.Element} The complete light photography page component
 */

export default function PhotographyPageLight(): React.JSX.Element {
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

  // Vordefiniertes Raster-Muster - zufällig aber ausgewogen, jede Zeile summiert sich zu 3 Spalten
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

  // Real-time clock for consistency
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
        const children = ref.current.querySelectorAll('.bauhaus-animate, .bauhaus-portfolio-item')
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
    <div className="min-h-screen text-gray-900 relative overflow-hidden bg-white">
      
      {/* 1. HERO SECTION - BAUHAUS LIGHT MODE STYLING */}
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
              Porträtfotografie • Haustierfotografie • Emotionen
            </motion.p>

            {/* Main Title - startpage style */}
            <motion.h1 
              className="text-6xl font-extrabold text-foreground leading-tight tracking-tight mb-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
            >
              <span className="block">FOTOGRAFIE &</span>
              <span className="block">EMOTIONEN</span>
            </motion.h1>

            {/* Description - startpage style */}
            <motion.p 
              className="text-base text-muted-foreground leading-7 max-w-2xl mx-auto mb-16"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              Authentische Momente festhalten.<br/>
              Von charakterstarken Porträts bis hin zu liebevollen Haustieraufnahmen.
            </motion.p>

            {/* CTA Buttons - exakt wie auf der Startseite */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <SpecialButton 
                variant="secondary"
                size="sm"
              >
                <Camera className="w-4 h-4 mr-2" />
                Portfolio entdecken
              </SpecialButton>

              <SpecialButton 
                variant="primary"
                size="sm"
                onClick={() => { 
                  const event = new CustomEvent('openContactModal');
                  window.dispatchEvent(event);
                }}
              >
                Shooting anfragen
              </SpecialButton>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* 2. PORTFOLIO SECTIONS - HAUSTIERE, LANDSCHAFT, MENSCHEN */}
      
      {/* Section 1: Haustiere - Text Links, Bilder Rechts */}
      <ParallaxSection 
        textPosition="left"
        title="Haustiere"
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
      <ParallaxSection 
        textPosition="right"
        title="Landschaft"
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
      <ParallaxSection 
        textPosition="left"
        title="Menschen"
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
 * ParallaxSection Component
 * Creates a section with parallax scroll effects
 */
interface ParallaxSectionProps {
  textPosition: 'left' | 'right'
  title: string
  description: string
  images: string[]
  bgColor: string
  imageLayout?: 'default' | 'landscape'
}

const ParallaxSection: React.FC<ParallaxSectionProps> = 
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
              <h2 className="text-4xl font-semibold text-foreground leading-tight tracking-tight md:text-3xl">
                {title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
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
                  <div className="col-span-2 aspect-video bg-gray-200 overflow-hidden">
                    <motion.img 
                      src={images[0]} 
                      alt={`${title} 1`} 
                      className="w-full h-full object-cover"
                      style={{ y: imageY1, scale: 1.2 }}
                    />
                  </div>
                  <div className="aspect-square bg-gray-200 overflow-hidden">
                    <motion.img 
                      src={images[1]} 
                      alt={`${title} 2`} 
                      className="w-full h-full object-cover"
                      style={{ y: imageY2, scale: 1.2 }}
                    />
                  </div>
                  <div className="aspect-square bg-gray-200 overflow-hidden">
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
                  <div className="aspect-square bg-gray-200 overflow-hidden">
                    <motion.img 
                      src={images[0]} 
                      alt={`${title} 1`} 
                      className="w-full h-full object-cover"
                      style={{ y: imageY1, scale: 1.2 }}
                    />
                  </div>
                  <div className="aspect-square bg-gray-200 overflow-hidden">
                    <motion.img 
                      src={images[1]} 
                      alt={`${title} 2`} 
                      className="w-full h-full object-cover"
                      style={{ y: imageY2, scale: 1.2 }}
                    />
                  </div>
                  <div className="col-span-2 aspect-video bg-gray-200 overflow-hidden">
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

