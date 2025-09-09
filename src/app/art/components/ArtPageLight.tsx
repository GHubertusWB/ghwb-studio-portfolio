'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { ArrowRight, ArrowLeft, Layers, Heart, Sparkles } from 'lucide-react'
import ContactFormLight from './ContactFormLight'
import CustomCursor from '@/components/CustomCursor'
import FloatingCloudsArt from './FloatingCloudsArt'
import Footer from '@/components/Footer'

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

  const scrollToContactForm = (): void => {
    const contactElement = document.getElementById('contact-form')
    if (contactElement) {
      contactElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
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

  const portfolioWorks: PortfolioWork[] = [
    {
      id: 1,
      title: "AR Canvas - Gesellschaftskritik",
      category: "Augmented Reality",
      medium: "Mixed Media & AR",
      year: "2024",
      image: "https://www.sirhub.online/wp-content/uploads/go-x/u/5afb8e8c-63bb-49a1-84a3-3409e85b788e/l382,t0,w981,h1107/image-768x867.jpg",
      gridSpan: "col-span-1 row-span-1", // Portrait format (768x867)
      description: "",
      tags: []
    },
    {
      id: 2,
      title: "Teilen - Dualität", 
      category: "Interactive Art",
      medium: "Canvas & Digital",
      year: "2024", 
      image: "https://www.sirhub.online/wp-content/uploads/go-x/u/6d78959b-2167-421b-b3cd-a9dc2264d797/l392,t111,w972,h1097/image-768x867.jpg",
      gridSpan: "col-span-1 row-span-1", // Portrait format (768x867)
      description: "",
      tags: []
    },
    {
      id: 3,
      title: "Bewusste Betrachtung",
      category: "Augmented Reality", 
      medium: "AR Installation",
      year: "2024",
      image: "https://www.sirhub.online/wp-content/uploads/go-x/u/75ee7181-f11c-4cf4-951f-075fdbb2b83a/l665,t99,w641,h723/image.jpg",
      gridSpan: "col-span-1 row-span-1", // Square-ish format
      description: "",
      tags: []
    },
    {
      id: 4,
      title: "Gesellschaftliche Harmonie",
      category: "Mixed Media",
      medium: "Canvas & Technology", 
      year: "2024",
      image: "https://www.sirhub.online/wp-content/uploads/go-x/u/9ae24fe6-98c2-4252-9261-70559e2ddb41/l32,t0,w1935,h1014/image-768x402.png", 
      gridSpan: "col-span-2 row-span-1", // Wide landscape format (768x402)
      description: "",
      tags: []
    },
    {
      id: 5,
      title: "Diskurs und Dialog",
      category: "Contemporary Art",
      medium: "Interactive Installation",
      year: "2024",
      image: "https://www.sirhub.online/wp-content/uploads/go-x/u/413fcc5d-2b47-49d6-932d-fb7a1f442c71/l495,t0,w1009,h1083/image-768x824.jpg",
      gridSpan: "col-span-1 row-span-1", // Square-ish format (768x824)
      description: "",
      tags: []
    },
    {
      id: 6,
      title: "Komplexität der Wahrheit",
      category: "Digital Art",
      medium: "AR & Canvas", 
      year: "2024",
      image: "https://www.sirhub.online/wp-content/uploads/go-x/u/9ab5a29e-e2cb-4d26-b746-1e8b380ae787/l0,t2,w1040,h648/image-768x479.jpg",
      gridSpan: "col-span-2 row-span-1", // Wide landscape format (768x479)
      description: "",
      tags: []
    },
    {
      id: 7,
      title: "Perspektive und Verstehen",
      category: "Mixed Media",
      medium: "Contemporary Art", 
      year: "2024",
      image: "https://www.sirhub.online/wp-content/uploads/go-x/u/c943e5f8-e370-4061-ac57-f565b2689ecd/l195,t0,w1313,h2000/image-768x1170.jpg",
      gridSpan: "col-span-1 row-span-2", // Tall portrait format (768x1170)
      description: "",
      tags: []
    },
    {
      id: 8,
      title: "Soziale Reflexion",
      category: "Installation",
      medium: "Mixed Media", 
      year: "2024",
      image: "https://www.sirhub.online/wp-content/uploads/go-x/u/1c360936-fc13-45c0-8b21-30d9ef81d799/l0,t214,w1465,h1573/image-768x825.jpg",
      gridSpan: "col-span-1 row-span-1", // Square-ish format (768x825)
      description: "",
      tags: []
    },
    {
      id: 9,
      title: "Erweiterte Realität",
      category: "Augmented Reality",
      medium: "AR Installation", 
      year: "2024",
      image: "https://www.sirhub.online/wp-content/uploads/go-x/u/55a22e21-a366-490a-aaef-2a3d124add8c/l552,t235,w657,h705/image.jpg",
      gridSpan: "col-span-1 row-span-1", // Square-ish format
      description: "",
      tags: []
    },
    {
      id: 10,
      title: "Digitale Transformation",
      category: "Digital Art",
      medium: "Mixed Media", 
      year: "2024",
      image: "https://www.sirhub.online/wp-content/uploads/go-x/u/9f368468-250f-41cb-b774-ad530786e264/l322,t678,w929,h788/image-768x651.jpg",
      gridSpan: "col-span-1 row-span-1", // Landscape format (768x651)
      description: "",
      tags: []
    },
    {
      id: 11,
      title: "Zukunftsvision",
      category: "Contemporary Art",
      medium: "Installation", 
      year: "2024",
      image: "https://www.sirhub.online/wp-content/uploads/go-x/u/5ae47c9c-420a-4e5f-a29e-6dd4a2534f6c/l69,t0,w1863,h2000/image-768x824.jpg",
      gridSpan: "col-span-1 row-span-1", // Square-ish format (768x824)
      description: "",
      tags: []
    },
    {
      id: 12,
      title: "Technologie & Mensch",
      category: "Mixed Media",
      medium: "AR & Canvas", 
      year: "2024",
      image: "https://www.sirhub.online/wp-content/uploads/go-x/u/75833409-63c1-48b4-846b-ec85fc772b14/l0,t379,w1436,h1542/image-768x825.jpg",
      gridSpan: "col-span-1 row-span-1", // Square-ish format (768x825)
      description: "",
      tags: []
    },
    {
      id: 13,
      title: "Virtuelle Welten",
      category: "Digital Art",
      medium: "VR Installation", 
      year: "2024",
      image: "https://www.sirhub.online/wp-content/uploads/go-x/u/c99a89a5-5199-44ac-862d-a2c8af5552ee/l0,t195,w1500,h1610/image-768x824.jpg",
      gridSpan: "col-span-1 row-span-1", // Square-ish format (768x824)
      description: "",
      tags: []
    },
    {
      id: 14,
      title: "Grenzen überwinden",
      category: "Interactive Art",
      medium: "Mixed Reality", 
      year: "2024",
      image: "https://www.sirhub.online/wp-content/uploads/go-x/u/bb6c044e-bcfc-415a-84dd-0808484c51a2/l0,t195,w2000,h1697/image-768x652.jpg",
      gridSpan: "col-span-2 row-span-1", // Wide landscape format (768x652)
      description: "",
      tags: []
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
      <CustomCursor />
      
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
              UX/UI Design • Fotografie • Kunst
            </motion.p>

            {/* Main Title - startpage style */}
            <motion.h1 
              className="text-6xl font-semibold text-foreground leading-tight tracking-tight mb-4"
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
                <Sparkles className="w-4 h-4 mr-2" />
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
                Zusammenarbeiten
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* 2. FEATURED ARTWORK - STARTSEITE LIGHT MODE STYLING */}
      <section className="py-32 px-6 relative z-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            {/* Left Side - Minimalist Image Display */}
            <div className="relative">
              {/* Category Tag - subtil wie auf der Startseite */}
              <motion.div 
                className="flex items-center mb-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 bg-muted-foreground rounded-full mr-3" />
                <span className="text-muted-foreground text-sm">Ausgewählte Arbeit</span>
              </motion.div>

              {/* Clean Image Display - startseite style */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="relative border border-border p-6 bg-white shadow-lg rounded-lg">
                  {/* Main Artwork Display */}
                  <div className="relative w-full aspect-[4/5] bg-muted/30 overflow-hidden rounded">
                    <img 
                      src="https://www.sirhub.online/wp-content/uploads/go-x/u/5afb8e8c-63bb-49a1-84a3-3409e85b788e/l382,t0,w981,h1107/image-768x867.jpg"
                      alt={artwork.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Subtle overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Side - Clean Content */}
            <div className="space-y-8">
              {/* Title Section - startseite typography */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-semibold text-foreground leading-tight tracking-tight mb-4 md:text-3xl">
                  {artwork.title}
                </h2>
              </motion.div>

              {/* Description - startseite style */}
              <motion.p 
                className="text-xl text-muted-foreground leading-7"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                {artwork.description}
              </motion.p>

              {/* Technical Specifications - clean grid */}
              <motion.div 
                className="grid grid-cols-2 gap-6 pt-6 border-t border-border"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                viewport={{ once: true }}
              >
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
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. PORTFOLIO GRID - MINIMAL MASONRY LAYOUT */}
      <section 
        ref={portfolioRef}
        className="py-32 px-6 relative z-10 bg-white"
      >
        <div className="max-w-none mx-auto"> {/* Full width container */}
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
              Eine Auswahl meiner aktuellen Kunstwerke und Projekte.
            </p>
          </motion.div>

          {/* Masonry Grid Layout */}
          <div className="grid grid-cols-3 auto-rows-[33.333vw] gap-4 px-6">
            {portfolioWorks.map((work, index) => (
              <motion.div
                key={work.id}
                className={`card cursor-button group relative overflow-hidden ${work.gridSpan}`}
                style={{ cursor: 'none' }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-full h-full bg-white border border-gray-300 hover:border-gray-900 transition-all duration-300 group-hover:shadow-lg relative overflow-hidden">
                  {/* Image with title overlay */}
                  <div className="w-full h-full flex items-center justify-center relative">
                    <img 
                      src={work.image} 
                      alt={work.title}
                      className="w-full h-full object-cover absolute inset-0"
                      style={{ filter: 'brightness(0.9) contrast(1.1)' }}
                    />
                    
                    {/* Overlay with title - shows on hover */}
                    <div className="absolute inset-0 bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                      <span className="text-gray-900 font-mono text-center px-4">
                        {work.title}
                      </span>
                    </div>
                    
                    {/* Corner elements */}
                    <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-gray-600 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                    <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-gray-600 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                    <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-gray-600 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                    <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-gray-600 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CONTACT FORM - STARTSEITE LIGHT MODE STYLING */}
      <section
        id="contact-form"
        ref={contactRef}
        className="py-32 px-6 relative z-10 bg-white"
      >
        <div className="max-w-4xl mx-auto">
          {/* Header Section - startseite style */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-semibold text-foreground leading-tight tracking-tight mb-6 md:text-3xl">
              Kontakt
            </h2>
            <p className="text-xl text-muted-foreground leading-7 max-w-prose mx-auto">
              Lassen Sie uns über Ihre Ideen und Projekte sprechen
            </p>
          </motion.div>

          {/* Contact Form Section - clean style */}
          <motion.div 
            className="relative"
            style={{ cursor: 'none' }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Main form container - Bauhaus style */}
            <div className="relative">
              <ContactFormLight />
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
