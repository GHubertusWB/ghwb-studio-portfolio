'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { ArrowRight, ArrowLeft, Camera, User, Heart, Sparkles, Eye } from 'lucide-react'
import ContactFormPhotography from './ContactFormPhotography'
import CustomCursor from '@/components/CustomCursor'
import Footer from '@/components/Footer'
import FloatingCloudsArt from '@/app/art/components/FloatingCloudsArt'
import { photographyImages } from '@/data/gallery'

// TypeScript Interfaces (same as dark version)
interface Service {
  id: number;
  title: string;
  category: string;
  description: string;
  approach: string;
  image: string;
  gridSpan: string;
}

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
  
  // Refs for scroll animations
  const servicesRef = useRef<HTMLElement>(null)
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
    const sections = [servicesRef, portfolioRef, contactRef]
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

  // Photography services data (same as dark version)
  const services: Service[] = [
    {
      id: 1,
      title: "Porträtfotografie",
      category: "PORTRAIT",
      description: "Individuelle Porträts, die die Persönlichkeit und Ausstrahlung jedes Menschen einfangen. Von Business-Portraits bis hin zu kreativen Kunstporträts.",
      approach: "Natürliches Licht • Authentische Momente • Professionelle Nachbearbeitung",
      image: "/api/placeholder/400/500",
      gridSpan: "col-span-1 row-span-1"
    },
    {
      id: 2,
      title: "Haustierfotografie",
      category: "PETS",
      description: "Liebevolle Aufnahmen Ihrer vierbeinigen Familienmitglieder in natürlicher Umgebung. Einzigartige Persönlichkeiten festgehalten.",
      approach: "Geduldiger Ansatz • Natürliche Umgebung • Emotionale Verbindung",
      image: "/api/placeholder/500/400",
      gridSpan: "col-span-1 row-span-1"
    }
  ]

  return (
    <div className="min-h-screen text-gray-900 relative overflow-hidden bg-gray-50">
      <CustomCursor />
      
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
          {/* Back Button - Startseite Button Styling */}
          <motion.button
            onClick={() => window.history.back()}
            className="cursor-button group relative inline-flex items-center px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-lg mb-16"
            style={{
              background: 'rgba(0, 0, 0, 0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(0, 0, 0, 0.1)',
              cursor: 'none'
            }}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span className="tracking-wide">Zurück</span>
          </motion.button>

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
              className="text-6xl font-semibold text-foreground leading-tight tracking-tight mb-4"
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
              <motion.button 
                className="cursor-button group relative inline-flex items-center px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-lg"
                style={{
                  background: 'rgba(0, 0, 0, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(0, 0, 0, 0.1)',
                  cursor: 'none'
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Camera className="w-4 h-4 mr-2" />
                Portfolio entdecken
              </motion.button>
              
              <motion.button 
                onClick={scrollToContactForm} 
                className="cursor-button inline-flex items-center px-8 py-3 rounded-full text-label text-primary transition-all duration-300"
                style={{
                  background: 'rgba(6, 182, 212, 0.15)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(6, 182, 212, 0.3)',
                  boxShadow: '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                  cursor: 'none'
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  boxShadow: '0 15px 30px -5px rgba(0, 0, 0, 0.15), 0 8px 12px -4px rgba(0, 0, 0, 0.1)'
                }}
                whileTap={{ 
                  scale: 0.95,
                  boxShadow: '0 5px 15px -2px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.05)',
                  transition: { duration: 0.1, repeat: 2, repeatType: "reverse" }
                }}
              >
                Shooting buchen
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* 2. SERVICES SECTION - BAUHAUS STYLING */}
      <section 
        ref={servicesRef}
        className="py-32 px-6 relative z-10 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-semibold text-foreground leading-tight tracking-tight mb-6 md:text-3xl">
              Meine Services
            </h2>
            <p className="text-xl text-muted-foreground leading-7 max-w-prose mx-auto">
              Spezialisiert auf authentische Porträts und liebevolle Haustieraufnahmen
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-2 gap-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                {/* Service Image - Bauhaus style */}
                <div className="relative mb-8 aspect-[4/3] bg-gray-100 border-2 border-gray-900 group-hover:shadow-lg transition-all duration-300">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                    {service.category === 'PORTRAIT' ? (
                      <User className="w-16 h-16 text-gray-600" />
                    ) : (
                      <Heart className="w-16 h-16 text-gray-600" />
                    )}
                  </div>
                  
                  {/* Bauhaus corner elements */}
                  <div className="absolute top-2 left-2 w-4 h-4 bg-gray-900" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 bg-gray-900" />
                  
                  {/* Category label */}
                  <div className="absolute top-4 left-4 font-bold text-xs text-gray-900 tracking-wider">
                    {service.category}
                  </div>
                </div>

                {/* Service Content - Bauhaus typography */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="font-mono text-sm text-gray-800 tracking-wide">
                    {service.approach}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PORTFOLIO GRID - MINIMAL MASONRY LAYOUT */}
      <section 
        ref={portfolioRef}
        className="py-32 px-6 relative z-10 bg-white"
      >
        <div className="max-w-none mx-auto">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-semibold text-foreground leading-tight tracking-tight mb-6 md:text-3xl">
              Portfolio Arbeiten
            </h2>
            <p className="text-xl text-muted-foreground leading-7 max-w-prose mx-auto">
              Eine Auswahl meiner fotografischen Arbeiten
            </p>
          </motion.div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-3 auto-rows-[33.333vw] gap-4 px-6">
            {galleryImages.length === 0 && (
              <div className="col-span-3 text-center text-gray-400 py-20">Noch keine Bilder im Galerie-Ordner.</div>
            )}
            {galleryImages.map((src, index) => (
              <motion.div
                key={src}
                className={`card cursor-button group relative overflow-hidden col-span-1 row-span-1`}
                style={{ cursor: 'none' }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-full h-full bg-white border border-gray-300 hover:border-gray-900 transition-all duration-300 group-hover:shadow-lg relative overflow-hidden">
                  {/* Bild aus Galerie */}
                  <img src={src} alt="Galeriebild" className="object-cover w-full h-full" />
                  {/* Overlay mit Dateiname als Platzhalter für Metadaten */}
                  <div className="absolute inset-0 bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                    <div className="text-center px-4">
                      <div className="font-mono text-xs text-gray-600 mb-2 tracking-wider uppercase">
                        {src.split('/').pop()?.split('.')[0]}
                      </div>
                      <div className="text-gray-900 font-bold text-lg mb-2">
                        Foto {index + 1}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {/* Hier könnten weitere Metadaten stehen */}
                      </div>
                    </div>
                  </div>
                  {/* Bauhaus corner elements */}
                  <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-gray-600 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                  <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-gray-600 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                  <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-gray-600 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-gray-600 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CONTACT FORM - BAUHAUS LIGHT MODE STYLING */}
      <section
        id="contact-form"
        ref={contactRef}
        className="py-32 px-6 relative z-10 bg-white"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-semibold text-foreground leading-tight tracking-tight mb-6 md:text-3xl">
              Shooting Anfrage
            </h2>
            <p className="text-xl text-muted-foreground leading-7 max-w-prose mx-auto">
              Lassen Sie uns Ihre Geschichte in Bildern erzählen
            </p>
          </motion.div>

          <motion.div 
            className="relative"
            style={{ cursor: 'none' }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ContactFormPhotography />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
