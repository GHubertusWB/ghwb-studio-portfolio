'use client'

import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { Sparkles } from 'lucide-react'
import Link from 'next/link'
import FloatingContactButton from '@/components/FloatingContactButton'
import FloatingCloudsArt from './FloatingCloudsArt'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/Button'
import { artGroups } from '@/data/gallery'
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

      {/* AKTUELLE AUSSTELLUNG BANNER */}
      <section className="py-16 px-6 relative z-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl border border-orange-200 bg-gradient-to-r from-orange-50 via-amber-50 to-sky-50 p-8 md:p-10 shadow-sm"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-200/30 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-sky-200/30 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-block w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-orange-600 uppercase tracking-wider">Aktuelle Ausstellung</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
                Kunst im Schaufenster &amp; Entenjagd
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl leading-relaxed">
                Noch bis 5. April 2026 in Holzkirchen: Fünf großformatige Acrylgemälde in der Raiffeisenbank 
                und acht kleine Entenbüsten-Miniaturgemälde im Atrium Gesundheitszentrum — eine interaktive 
                Entenjagd durch die Marktgemeinde.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/ausstellung-holzkirchen">
                  <SpecialButton size="sm">
                    Zur Ausstellung →
                  </SpecialButton>
                </Link>
                <a
                  href="https://www.holzkirchen.de/kunst-im-schaufenster"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-gray-700 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
                >
                  holzkirchen.de ↗
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

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

      {/* 3. PORTFOLIO SECTIONS - DUX, BEDROHTE TIERE, AUGMENTED & DIGITAL ART */}
      
      {/* Section 1: Dux - Text Links, Bilder Rechts */}
      <ParallaxSection 
        textPosition="left"
        title="DUX"
        description="Die Dux-Serie vereint digitale Ästhetik mit klassischer Formensprache. 
          Jedes Werk interpretiert das Motiv der Ente als kulturelles Symbol neu — 
          zwischen Pop Art, Street Art und zeitgenössischer Malerei."
        images={[
          artGroups.find(g => g.id === 'digiducks')?.images[0] || '/gallery/art/0C0FF1CB-BB55-4087-B418-A7D493B5EC7F_1_105_c.jpeg',
          artGroups.find(g => g.id === 'digiducks')?.images[1] || '/gallery/art/0E4EC7D6-556E-4732-B9BB-6C2861557E36_1_105_c.jpeg',
          artGroups.find(g => g.id === 'digiducks')?.images[2] || '/gallery/art/1A01DAE4-D2AA-4133-B425-238B102646DA_1_105_c.jpeg',
        ]}
        bgColor="bg-white"
      />

      {/* Section 2: Bedrohte Tiere - Text Rechts, Bilder Links */}
      <ParallaxSection 
        textPosition="right"
        title="BEDROHTE TIERE"
        description="Großformatige Acrylgemälde, die bedrohte Tierarten in expressiver 
          Farbgebung porträtieren. Die Serie schafft Bewusstsein für den Artenschutz 
          und verbindet emotionale Kraft mit künstlerischer Ausdrucksstärke."
        images={[
          artGroups.find(g => g.id === 'leinwaende')?.images[0] || '/gallery/art/276978157_2151325001689082_4554386259994847710_n.jpg',
          artGroups.find(g => g.id === 'leinwaende')?.images[1] || '/gallery/art/277112623_365261895528667_8618673296825249071_n.jpg',
          artGroups.find(g => g.id === 'leinwaende')?.images[2] || '/gallery/art/277115346_365186875527721_6944956018215836686_n.jpg',
        ]}
        bgColor="bg-white"
        imageLayout="landscape"
      />

      {/* Section 3: Augmented & Digital Art - Text Links, Bilder Rechts */}
      <ParallaxSection 
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
        bgColor="bg-white"
      />

      {/* FLOATING CONTACT BUTTON */}
      <FloatingContactButton />

      <Footer />
    </div>
  )
}

/**
 * ParallaxSection Component
 * Creates a section with parallax scroll effects for light mode
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
