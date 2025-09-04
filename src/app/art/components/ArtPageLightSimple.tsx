'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import { ArrowRight, Palette, Layers, Heart } from 'lucide-react'
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
}

interface CollaborationCard {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  gradient: string;
  subject: string;
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
      gridSpan: "col-span-1 row-span-1"
    },
    {
      id: 2,
      title: "Teilen - Dualität", 
      category: "Interactive Art",
      medium: "Canvas & Digital",
      year: "2024", 
      image: "/images/art2.jpg",
      gridSpan: "col-span-2 row-span-1"
    },
    {
      id: 3,
      title: "Bewusste Betrachtung",
      category: "Augmented Reality", 
      medium: "AR Installation",
      year: "2024",
      image: "/images/art3.jpg",
      gridSpan: "col-span-1 row-span-2"
    },
    {
      id: 4,
      title: "Gesellschaftliche Harmonie",
      category: "Mixed Media",
      medium: "Canvas & Technology", 
      year: "2024",
      image: "/images/art4.jpg", 
      gridSpan: "col-span-1 row-span-1"
    },
    {
      id: 5,
      title: "Diskurs und Dialog",
      category: "Contemporary Art",
      medium: "Interactive Installation",
      year: "2024",
      image: "/images/art5.jpg",
      gridSpan: "col-span-2 row-span-2"
    },
    {
      id: 6,
      title: "Komplexität der Wahrheit",
      category: "Digital Art",
      medium: "AR & Canvas", 
      year: "2024",
      image: "/images/art6.jpg",
      gridSpan: "col-span-1 row-span-1"
    },
    {
      id: 7,
      title: "Perspektive und Verstehen",
      category: "Mixed Media",
      medium: "Contemporary Art", 
      year: "2024",
      image: "/images/art7.jpg",
      gridSpan: "col-span-2 row-span-1"
    },
    {
      id: 8,
      title: "Soziale Reflexion",
      category: "Installation",
      medium: "Mixed Media", 
      year: "2024",
      image: "/images/art8.jpg",
      gridSpan: "col-span-1 row-span-1"
    },
    {
      id: 9,
      title: "Erweiterte Realität",
      category: "Augmented Reality",
      medium: "AR Installation", 
      year: "2024",
      image: "/images/art9.jpg",
      gridSpan: "col-span-1 row-span-1"
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

      {/* 3. PROCESS */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-32 px-6 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6">
              Kreativer Prozess
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Von der ersten Idee bis zur finalen Installation – ein strukturierter Arbeitsablauf.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
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
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 4. PORTFOLIO GRID */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-32 px-6 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6">
              Portfolio
            </h2>
            <p className="text-lg text-muted-foreground">
              Eine kleine Auswahl meiner Werke
            </p>
          </motion.div>

          <div className="grid grid-cols-4 gap-4 auto-rows-[200px]">
            {portfolioWorks.map((work, index) => 
              <motion.div
                key={work.id}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className={`group relative overflow-hidden transition-all duration-500 hover:shadow-xl ${work.gridSpan}`}
              >
                <Image
                  src={work.image}
                  alt={work.title}
                  width={600}
                  height={800}
                  className="w-full h-full object-cover"
                />
                
                <div className="absolute inset-0 bg-gradient-to-br from-accent/80 via-primary/80 to-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                  <div className="text-center space-y-3 text-white">
                    <h3 className="text-xl font-bold">{work.title}</h3>
                    <div className="text-sm space-y-1">
                      <p className="font-medium">{work.category}</p>
                      <p>{work.medium}</p>
                      <p className="font-bold">{work.year}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </motion.section>

      {/* 5. ZUSAMMENARBEIT */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-32 px-6 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6">
              Zusammenarbeit
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Interesse an einer kreativen Zusammenarbeit? Lassen Sie uns über Ihr Projekt sprechen.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {([
              {
                icon: Palette,
                title: "Auftragsarbeiten",
                description: "Individuelle Kunstwerke und digitale Installationen nach Ihren spezifischen Wünschen",
                gradient: "from-accent/20 to-secondary/20",
                subject: "Auftragsarbeiten"
              },
              {
                icon: Layers,
                title: "Kollaborationen",
                description: "Strategische Partnerschaften für innovative Projekte und gemeinsame Ausstellungen",
                gradient: "from-primary/20 to-accent/20",
                subject: "Kollaborationen"
              },
              {
                icon: Heart,
                title: "Workshops",
                description: "Kreative Workshops zu digitaler Kunst, AI-Tools und experimentellen Techniken",
                gradient: "from-secondary/20 to-primary/20",
                subject: "Workshops"
              }
            ] as CollaborationCard[]).map((card, index) => (
              <motion.div
                key={card.title}
                className="relative p-8 rounded-2xl bg-background border border-border/50 hover:border-border duration-300 h-full group cursor-pointer"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                onClick={() => handleCardClick(card.subject)}
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-6 group-hover:scale-110 group-hover:rotate-5 transition-transform">
                    <card.icon className="w-8 h-8 text-foreground" />
                  </div>

                  <h3 className="text-2xl font-semibold mb-4 text-foreground">
                    {card.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {card.description}
                  </p>

                  <div className="inline-flex items-center text-foreground font-medium group-hover:translate-x-1 transition-transform">
                    Mehr erfahren
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 6. CONTACT FORM */}
      <motion.section
        id="contact-form"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-32 px-6 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6">
              Lassen Sie uns sprechen
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Bereit für ein neues kreatives Projekt? Kontaktieren Sie mich für eine unverbindliche Beratung.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <ContactForm initialSubjectTag={selectedSubjectTag} />
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
