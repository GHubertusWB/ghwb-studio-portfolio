'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
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
    <div className="min-h-screen text-gray-900 relative overflow-hidden bg-gray-50">
      
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

      {/* 2. PORTFOLIO GRID - MINIMAL MASONRY LAYOUT */}
      <section 
        ref={portfolioRef}
        className="py-32 px-6 relative z-10 bg-white"
      >
        <div className="max-w-none mx-auto">
          <motion.div 
            className="text-center mb-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-semibold text-foreground leading-tight tracking-tight mb-6 md:text-3xl">
              {photographyGroups[activeGroupIndex]?.title || 'Ausgewählte Arbeiten'}
            </h2>
            <p className="text-xl text-muted-foreground leading-7 max-w-prose mx-auto mb-8">
              {photographyGroups[activeGroupIndex]?.description || 'Ein kleiner Einblick in meine fotografische Welt – authentische Momente, liebevoll festgehalten'}
            </p>
            
            {/* Group Navigation Buttons - Desktop */}
            <div className="relative hidden sm:flex items-center justify-between mb-8 px-8">
              {/* Left Button */}
              <SpecialButton
                variant="secondary"
                size="sm"
                onClick={handlePreviousGroup}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {photographyGroups[(activeGroupIndex - 1 + photographyGroups.length) % photographyGroups.length]?.title}
              </SpecialButton>
              
              {/* Center Dot Indicators */}
              <div className="flex items-center gap-2 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {photographyGroups.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveGroupIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeGroupIndex 
                        ? 'bg-orange-500 w-8' 
                        : 'bg-gray-400 hover:bg-gray-600'
                    }`}
                  />
                ))}
              </div>
              
              {/* Right Button */}
              <SpecialButton
                variant="secondary"
                size="sm"
                onClick={handleNextGroup}
              >
                {photographyGroups[(activeGroupIndex + 1) % photographyGroups.length]?.title}
                <ArrowRight className="w-4 h-4 ml-2" />
              </SpecialButton>
            </div>

            {/* Group Navigation - Mobile */}
            <div className="sm:hidden mb-8 px-4">
              {/* Current Group Title */}
              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {photographyGroups[activeGroupIndex]?.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {activeGroupIndex + 1} von {photographyGroups.length}
                </p>
              </div>
              
              {/* Navigation Arrows */}
              <div className="flex items-center justify-center gap-4 mb-4">
                <button
                  onClick={handlePreviousGroup}
                  className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  aria-label="Vorherige Gruppe"
                >
                  <ArrowLeft className="w-5 h-5 text-gray-700" />
                </button>
                
                <button
                  onClick={handleNextGroup}
                  className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  aria-label="Nächste Gruppe"
                >
                  <ArrowRight className="w-5 h-5 text-gray-700" />
                </button>
              </div>
              
              {/* Dot Indicators */}
              <div className="flex items-center justify-center gap-2">
                {photographyGroups.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveGroupIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeGroupIndex 
                        ? 'bg-orange-500 scale-125' 
                        : 'bg-gray-400 hover:bg-gray-600'
                    }`}
                    aria-label={`Gruppe ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Portfolio Grid - Varierende Größen mit mehr Weißraum */}
          <div className="grid grid-cols-3 gap-8 px-6" style={{ gridAutoRows: '33.33vw' }}>
            {galleryImages.length === 0 && (
              <div className="col-span-3 text-center text-gray-400 py-20">Noch keine Bilder im Galerie-Ordner.</div>
            )}
{galleryImages.map((src, index) => {
              // Layout-Definitionen - statisch definiert
              const layouts = [
                { colSpan: 1, rowSpan: 1, className: 'col-span-1 row-span-1' }, // 1x1 - Quadrat klein
                { colSpan: 2, rowSpan: 1, className: 'col-span-2 row-span-1' }, // 2x1 - Querformat
                { colSpan: 3, rowSpan: 1, className: 'col-span-3 row-span-1' }, // 3x1 - Panorama
                { colSpan: 1, rowSpan: 2, className: 'col-span-1 row-span-2' }, // 1x2 - Hochformat
                { colSpan: 2, rowSpan: 2, className: 'col-span-2 row-span-2' }  // 2x2 - Quadrat groß
              ];

              // Verwendung des vordefinierten Raster-Musters
              const layout = layouts[predefinedGridPattern[index % predefinedGridPattern.length]];
              
              return (
                <motion.div
                  key={`${activeGroupIndex}-${src}`}
                  className={`relative overflow-hidden ${layout.className}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full h-full bg-white border border-gray-200 relative overflow-hidden shadow-sm">
                    {/* Bild aus Galerie */}
                    <img 
                      src={src} 
                      alt={`Fotografische Arbeit ${index + 1}`} 
                      className="object-cover w-full h-full" 
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />

      {/* FLOATING CONTACT BUTTON */}
      <FloatingContactButton />
    </div>
  )
}
