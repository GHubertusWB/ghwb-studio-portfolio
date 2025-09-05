'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { ArrowRight, ArrowLeft, Palette, Layers, Heart } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

// TypeScript Interfaces
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
 * ArtPageLightSimple Component (Page)
 * 
 * Main art portfolio page featuring artwork showcase, creative process,
 * portfolio grid, and collaboration sections. Uses motion animations
 * and responsive design patterns.
 * 
 * @example
 * <ArtPageLightSimple />
 * 
 * @returns {JSX.Element} The complete art page component
 */

export default function ArtPageLightSimple(): React.JSX.Element {
  const [selectedSubjectTag, setSelectedSubjectTag] = useState<string | undefined>(undefined)
  
  // Refs for scroll animations
  const processRef = useRef<HTMLElement>(null)
  const portfolioRef = useRef<HTMLElement>(null)
  const collaborationRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

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
    const sections = [processRef, portfolioRef, collaborationRef, contactRef]
    sections.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current)
        
        // Also observe child elements
        const children = ref.current.querySelectorAll('.scroll-animate, .process-step, .portfolio-item, .collaboration-card')
        children.forEach(child => observer.observe(child))
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

  const handleCardClick = (subject: string): void => {
    setSelectedSubjectTag(subject)
    scrollToContactForm()
  }

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
      image: "/images/art1.jpg",
      gridSpan: "col-span-1 row-span-1",
      description: "Eine kritische Auseinandersetzung mit gesellschaftlichen Normen durch erweiterte Realität.",
      tags: ["AR", "Gesellschaftskritik", "Mixed Media"]
    },
    {
      id: 2,
      title: "Teilen - Dualität", 
      category: "Interactive Art",
      medium: "Canvas & Digital",
      year: "2024", 
      image: "/images/art2.jpg",
      gridSpan: "col-span-2 row-span-1",
      description: "Interaktive Installation über die Dualität des Teilens in der modernen Gesellschaft.",
      tags: ["Interaktiv", "Dualität", "Digital"]
    },
    {
      id: 3,
      title: "Bewusste Betrachtung",
      category: "Augmented Reality", 
      medium: "AR Installation",
      year: "2024",
      image: "/images/art3.jpg",
      gridSpan: "col-span-1 row-span-2",
      description: "AR-Installation die zur bewussten Wahrnehmung unserer Umgebung einlädt.",
      tags: ["AR", "Bewusstsein", "Installation"]
    },
    {
      id: 4,
      title: "Gesellschaftliche Harmonie",
      category: "Mixed Media",
      medium: "Canvas & Technology", 
      year: "2024",
      image: "/images/art4.jpg", 
      gridSpan: "col-span-1 row-span-1",
      description: "Technologie und traditionelle Medien im Dialog über gesellschaftliche Harmonie.",
      tags: ["Harmonie", "Technologie", "Canvas"]
    },
    {
      id: 5,
      title: "Diskurs und Dialog",
      category: "Contemporary Art",
      medium: "Interactive Installation",
      year: "2024",
      image: "/images/art5.jpg",
      gridSpan: "col-span-2 row-span-2",
      description: "Interaktive Installation die den Dialog zwischen Betrachter und Werk ermöglicht.",
      tags: ["Dialog", "Interaktiv", "Contemporary"]
    },
    {
      id: 6,
      title: "Komplexität der Wahrheit",
      category: "Digital Art",
      medium: "AR & Canvas", 
      year: "2024",
      image: "/images/art6.jpg",
      gridSpan: "col-span-1 row-span-1",
      description: "Eine vielschichtige Betrachtung der Wahrheit in unserer digitalen Zeit.",
      tags: ["Wahrheit", "Komplexität", "Digital"]
    },
    {
      id: 7,
      title: "Perspektive und Verstehen",
      category: "Mixed Media",
      medium: "Contemporary Art", 
      year: "2024",
      image: "/images/art7.jpg",
      gridSpan: "col-span-2 row-span-1",
      description: "Verschiedene Perspektiven auf ein Thema durch zeitgenössische Kunst.",
      tags: ["Perspektive", "Verstehen", "Contemporary"]
    },
    {
      id: 8,
      title: "Soziale Reflexion",
      category: "Installation",
      medium: "Mixed Media", 
      year: "2024",
      image: "/images/art8.jpg",
      gridSpan: "col-span-1 row-span-1",
      description: "Installation die zur Reflexion über soziale Strukturen anregt.",
      tags: ["Sozial", "Reflexion", "Installation"]
    },
    {
      id: 9,
      title: "Erweiterte Realität",
      category: "Augmented Reality",
      medium: "AR Installation", 
      year: "2024",
      image: "/images/art9.jpg",
      gridSpan: "col-span-1 row-span-1",
      description: "AR-Erlebnis das die Grenzen zwischen real und digital verwischt.",
      tags: ["AR", "Realität", "Immersiv"]
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
    <div className="min-h-screen bg-background text-foreground relative">
      {/* 1. HERO SECTION - BAUHAUS MINIMAL */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-gray-100 relative overflow-hidden"
      >
        {/* Bauhaus geometric background elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-20 left-20 w-32 h-32 border-4 border-primary rotate-45"></div>
          <div className="absolute bottom-32 right-32 w-24 h-24 bg-accent rounded-full"></div>
          <div className="absolute top-1/2 left-10 w-0 h-0 border-l-16 border-r-16 border-b-28 border-l-transparent border-r-transparent border-b-secondary"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          {/* Back Button */}
          <motion.button
            onClick={() => window.history.back()}
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück
          </motion.button>

          <motion.h1 
            className="text-4xl md:text-7xl font-light tracking-tight mb-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Kunst & Kreativität
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Digitale Kunst trifft auf traditionelle Ästhetik. Eine Exploration der Grenzen zwischen Technologie und menschlicher Kreativität.
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-3 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-colors">
              Portfolio entdecken
            </button>
            <button onClick={() => handleCardClick('Zusammenarbeit')} className="px-8 py-3 border-2 border-foreground text-foreground rounded-full font-medium hover:bg-foreground hover:text-background transition-all">
              Zusammenarbeiten
            </button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-foreground rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-foreground rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* 2. FEATURED ARTWORK */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Image 
                src="/images/featured-art.jpg"
                alt={artwork.title}
                width={800}
                height={600}
                className="relative z-10 w-full h-96 object-cover rounded-lg shadow-2xl"
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHBsf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </div>

            <div className="space-y-8">
              <div>
                <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  Featured Work
                </div>

                <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6">
                  {artwork.title}
                </h2>

                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {artwork.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 text-sm">
                <div>
                  <div className="text-muted-foreground mb-1">Medium</div>
                  <div className="font-medium">{artwork.medium}</div>
                </div>
                <div>
                  <div className="text-muted-foreground mb-1">Jahr</div>
                  <div className="font-medium">{artwork.year}</div>
                </div>
                <div>
                  <div className="text-muted-foreground mb-1">Dimensionen</div>
                  <div className="font-medium">{artwork.dimensions}</div>
                </div>
              </div>

              <button className="inline-flex items-center px-6 py-3 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-colors">
                Mehr Details
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROCESS - CSS OPTIMIZED */}
      <section 
        ref={processRef}
        className="py-32 px-6 bg-white scroll-animate"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 scroll-animate delay-1">
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6">
              Kreativer Prozess
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Von der ersten Idee bis zur finalen Installation – ein strukturierter Arbeitsablauf.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="text-center process-step"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center text-2xl font-bold text-muted-foreground hover:bg-accent transition-colors">
                  {step.step}
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PORTFOLIO GRID - CSS OPTIMIZED */}
      <section 
        ref={portfolioRef}
        className="py-32 px-6 bg-muted/20 scroll-animate"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 scroll-animate delay-1">
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6">
              Portfolio Arbeiten
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Eine Auswahl meiner aktuellen Kunstwerke und Projekte.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioWorks.map((work, index) => (
              <div
                key={index}
                className="group portfolio-item"
              >
                <div className="aspect-square bg-muted rounded-lg overflow-hidden mb-6 hover:shadow-xl transition-all duration-500">
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <span className="text-sm text-muted-foreground">[{work.title}]</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {work.title}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {work.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {work.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. COLLABORATIONS - CSS OPTIMIZED */}
      <section 
        ref={collaborationRef}
        className="py-32 px-6 bg-white scroll-animate"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 scroll-animate delay-1">
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6">
              Kollaborationen
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Gemeinsame Projekte mit anderen Künstlern und Institutionen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collaborations.map((collab, index) => (
              <div
                key={index}
                className="collaboration-card group"
              >
                <div className="p-6 rounded-lg border border-border hover:border-primary transition-all duration-300 hover:shadow-lg bg-background">
                  <div className="w-12 h-12 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-xl">
                      {collab.partner.charAt(0)}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {collab.title}
                  </h3>
                  
                  <p className="text-sm text-accent mb-3">
                    {collab.partner}
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {collab.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CONTACT FORM - CSS OPTIMIZED */}
      <section
        id="contact-form"
        ref={contactRef}
        className="py-32 px-6 bg-gradient-to-b from-white to-gray-50 scroll-animate"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 scroll-animate delay-1">
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6">
              Lassen Sie uns sprechen
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Bereit für ein neues kreatives Projekt? Kontaktieren Sie mich für eine unverbindliche Beratung.
            </p>
          </div>

          <div className="scroll-animate delay-2">
            <ContactForm initialSubjectTag={selectedSubjectTag} />
          </div>
        </div>
      </section>
    </div>
  )
}
