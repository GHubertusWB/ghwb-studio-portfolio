'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { ArrowRight, ArrowLeft, Layers, Heart, Sparkles } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

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
  
  // Refs for scroll animations
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

  const scrollToContactForm = (): void => {
    const contactElement = document.getElementById('contact-form')
    if (contactElement) {
      contactElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

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
          {/* Back Button - Styled like homepage buttons */}
          <motion.button
            onClick={() => window.history.back()}
            className="inline-flex items-center text-white/70 hover:text-white transition-colors mb-12 relative font-mono px-6 py-3 rounded-full hover:bg-white/5"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            SYSTEM.EXIT
          </motion.button>

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
              <motion.button 
                className="group relative inline-flex items-center px-8 py-3 rounded-full font-medium transition-all duration-300 font-mono"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Sparkles className="w-4 h-4 mr-2" />
                PORTFOLIO.EXPLORE
              </motion.button>
              <motion.button 
                onClick={scrollToContactForm} 
                className="inline-flex items-center px-8 py-3 rounded-full transition-all duration-300 font-mono"
                style={{
                  background: 'rgba(6, 182, 212, 0.25)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(6, 182, 212, 0.4)',
                  boxShadow: '0 0 15px rgba(6, 182, 212, 0.3), 0 0 30px rgba(6, 182, 212, 0.15), 0 0 45px rgba(6, 182, 212, 0.05)'
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  boxShadow: '0 0 30px rgba(6, 182, 212, 0.6), 0 0 60px rgba(6, 182, 212, 0.4), 0 0 90px rgba(6, 182, 212, 0.2)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                COLLABORATE.START
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

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
            {/* Left Side - Enhanced Image Display */}
            <div className="relative">
              {/* Status Header */}
              <motion.div 
                className="flex items-center mb-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
                <span className="text-cyan-400 font-mono text-sm tracking-wider">FEATURED.ARTWORK</span>
              </motion.div>

              {/* Minimalist Image Display */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="relative border border-white/20 p-6">
                  {/* Main Artwork Display */}
                  <div className="relative w-full h-96 bg-gradient-to-br from-white/5 to-white/2 flex items-center justify-center">
                    <span className="text-white/80 font-mono text-xl">[{artwork.title}]</span>
                  </div>
                  
                  {/* Simple Corner Elements */}
                  <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-cyan-400/40" />
                  <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-cyan-400/40" />
                  <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-cyan-400/40" />
                  <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-cyan-400/40" />
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

      {/* 3. PORTFOLIO GRID - MASONRY LAYOUT */}
      <section 
        ref={portfolioRef}
        className="py-32 px-6 relative z-10"
      >
        <div className="max-w-none mx-auto"> {/* Full width container */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6 text-white" style={{ fontFamily: 'monospace', textShadow: '0 0 20px rgba(255, 255, 255, 0.3)' }}>
              PORTFOLIO ARBEITEN
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Eine Auswahl meiner aktuellen Kunstwerke und Projekte.
            </p>
          </motion.div>

          {/* Masonry Grid Layout */}
          <div className="grid grid-cols-3 auto-rows-[33.333vw] gap-4 px-6">
            {portfolioWorks.map((work, index) => (
              <motion.div
                key={work.id}
                className={`group relative overflow-hidden ${work.gridSpan}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-full h-full bg-gradient-to-br from-white/5 to-white/2 border border-white/20 hover:border-cyan-400/40 transition-all duration-300 group-hover:bg-white/10 relative overflow-hidden">
                  {/* Image placeholder with title overlay */}
                  <div className="w-full h-full flex items-center justify-center relative">
                    <img 
                      src={work.image} 
                      alt={work.title}
                      className="w-full h-full object-cover absolute inset-0"
                      style={{ filter: 'brightness(0.8) contrast(1.1)' }}
                    />
                    
                    {/* Overlay with title - shows on hover */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                      <span className="text-white font-mono text-center px-4">
                        {work.title}
                      </span>
                    </div>
                    
                    {/* Subtle background pattern */}
                    <div 
                      className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity z-5"
                      style={{
                        backgroundImage: 'linear-gradient(45deg, transparent 40%, rgba(6, 182, 212, 0.3) 50%, transparent 60%)',
                        backgroundSize: '20px 20px'
                      }}
                    />
                    
                    {/* Corner elements */}
                    <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-cyan-400/40 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                    <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-cyan-400/40 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                    <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-cyan-400/40 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                    <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-cyan-400/40 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CONTACT FORM - CLEAN STYLE */}
      <section
        id="contact-form"
        ref={contactRef}
        className="py-32 px-6 relative z-10"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6 text-white" style={{ fontFamily: 'monospace', textShadow: '0 0 20px rgba(255, 255, 255, 0.3)' }}>
              KONTAKT
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Lassen Sie uns über Ihre Ideen und Projekte sprechen
            </p>
          </motion.div>

          {/* Contact Type Cards */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </div>
  )
}
