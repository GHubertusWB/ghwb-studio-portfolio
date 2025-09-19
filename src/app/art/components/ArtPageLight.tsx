'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { ArrowRight, ArrowLeft, Layers, Heart, Sparkles } from 'lucide-react'
import FloatingContactButton from '@/components/FloatingContactButton'
import FloatingCloudsArt from './FloatingCloudsArt'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/Button'
import { artGroups, type GalleryGroup } from '@/data/gallery'
import { SpecialButton } from '@/components/ui/SpecialButton'


// TypeScript Interfaces (same as dark version)
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
 * ArtPageLight Component (Page)
 * 
 * Light mode art portfolio page with minimalist Bauhaus design.
 * Uses the same content as the dark version but with clean, geometric styling.
 * 
 * @returns {JSX.Element} The complete light art page component
 */

export default function ArtPageLight(): React.JSX.Element {
  const [currentTime, setCurrentTime] = useState('')
  const [activeGroupIndex, setActiveGroupIndex] = useState(0)
  const [galleryImages, setGalleryImages] = useState<string[]>([])
  
  // Refs for scroll animations
  const portfolioRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

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
    const sections = [portfolioRef, contactRef]
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

  // Vordefiniertes Raster-Muster - gleich wie Photography-Seite
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

  // Load gallery images for active group
  useEffect(() => {
    if (artGroups && artGroups[activeGroupIndex]) {
      setGalleryImages(artGroups[activeGroupIndex].images)
    }
  }, [activeGroupIndex])

  // Group navigation functions
  const handlePreviousGroup = () => {
    setActiveGroupIndex(prev => prev > 0 ? prev - 1 : artGroups.length - 1)
  }

  const handleNextGroup = () => {
    setActiveGroupIndex(prev => prev < artGroups.length - 1 ? prev + 1 : 0)
  }

  // Same content as dark version
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
    <div className="min-h-screen text-gray-900 relative overflow-hidden bg-gray-50">
      
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

        {/* Floating Clouds - spezielle Konfiguration für Art Page */}
        <FloatingCloudsArt />

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
              UX/UI Design • Fotografie • Kunst
            </motion.p>

            {/* Main Title - startpage style */}
            <motion.h1 
              className="text-6xl font-extrabold text-foreground leading-tight tracking-tight mb-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
            >
              <span className="block">KUNST &</span>
              <span className="block">KREATIVITÄT</span>
            </motion.h1>

            {/* Description - startpage style */}
            <motion.p 
              className="text-base text-muted-foreground leading-7 max-w-2xl mx-auto mb-16"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              Digitale Kunst trifft auf traditionelle Ästhetik.<br/>
              Eine Exploration der Grenzen zwischen Technologie und menschlicher Kreativität.
            </motion.p>

            {/* CTA Buttons - globale Button Components */}
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
                <Sparkles className="w-4 h-4 mr-2" />
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
                Zusammenarbeiten
              </SpecialButton>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* 2. FEATURED ARTWORK - STARTSEITE LIGHT MODE STYLING */}
      <section className="py-32 px-6 relative z-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Minimalist Image Display */}
                        {/* Left Side - Minimalist Image Display */}
            <div className="relative">
              {/* Clean Image Display - startseite style */}
              <div className="relative h-full">
                <div className="relative w-full h-full overflow-hidden">
                  <img 
                    src="/gallery/art/0C0FF1CB-BB55-4087-B418-A7D493B5EC7F_1_105_c.jpeg"
                    alt={artwork.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Clean Content */}
            <div className="space-y-8">
              {/* Title Section - startseite typography */}
              <div>
                <h2 className="text-4xl font-semibold text-foreground leading-tight tracking-tight mb-4 md:text-3xl">
                  {artwork.title}
                </h2>
              </div>

              {/* Description - startseite style */}
              <p className="text-xl text-muted-foreground leading-7">
                {artwork.description}
              </p>

              {/* Technical Specifications - clean grid */}
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border">
                <div>
                  <div className="text-muted-foreground mb-2 text-sm">Medium</div>
                  <div className="font-medium text-foreground text-sm">{artwork.medium}</div>
                </div>
                <div>
                  <div className="text-muted-foreground mb-2 text-sm">Jahr</div>
                  <div className="font-medium text-foreground text-sm">{artwork.year}</div>
                </div>
                <div>
                  <div className="text-muted-foreground mb-2 text-sm">Dimensionen</div>
                  <div className="font-medium text-foreground text-sm">{artwork.dimensions}</div>
                </div>
                <div>
                  <div className="text-muted-foreground mb-2 text-sm">Status</div>
                  <div className="font-medium text-foreground text-sm flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Verfügbar
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PORTFOLIO GRID - MINIMAL MASONRY LAYOUT */}
      <section 
        ref={portfolioRef}
        className="py-32 px-6 relative z-10 bg-white"
      >
        <div className="max-w-none mx-auto"> {/* Full width container */}
          <div className="text-center mb-20">
            <h2 className="text-4xl font-semibold text-foreground leading-tight tracking-tight mb-6 md:text-3xl">
              {artGroups[activeGroupIndex]?.title || 'Portfolio Arbeiten'}
            </h2>
            <p className="text-xl text-muted-foreground leading-7 max-w-prose mx-auto mb-8">
              {artGroups[activeGroupIndex]?.description || 'Eine Auswahl meiner aktuellen Kunstwerke und Projekte.'}
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
                {artGroups[(activeGroupIndex - 1 + artGroups.length) % artGroups.length]?.title}
              </SpecialButton>
              
              {/* Center Dot Indicators */}
              <div className="flex items-center gap-2 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {artGroups.map((_, index) => (
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
                {artGroups[(activeGroupIndex + 1) % artGroups.length]?.title}
                <ArrowRight className="w-4 h-4 ml-2" />
              </SpecialButton>
            </div>

            {/* Group Navigation - Mobile */}
            <div className="sm:hidden mb-8 px-4">
              {/* Current Group Title */}
              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {artGroups[activeGroupIndex]?.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {activeGroupIndex + 1} von {artGroups.length}
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
                {artGroups.map((_, index) => (
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
          </div>

          {/* Portfolio Grid - Photography Seite Style mit Variierenden Größen */}
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
                <div
                  key={`${activeGroupIndex}-${src}`}
                  className={`relative overflow-hidden ${layout.className}`}
                >
                  <div className="w-full h-full bg-white border border-gray-200 relative overflow-hidden shadow-sm">
                    {/* Bild aus Galerie */}
                    <img 
                      src={src} 
                      alt={`Kunstwerk ${index + 1}`} 
                      className="object-cover w-full h-full" 
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FLOATING CONTACT BUTTON */}
      <FloatingContactButton />

      <Footer />
    </div>
  )
}
