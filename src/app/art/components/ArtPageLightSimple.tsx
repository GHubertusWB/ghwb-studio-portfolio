'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ArrowRight, Palette, Layers, Heart } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export default function ArtPageLightSimple() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedSubjectTag, setSelectedSubjectTag] = useState<string | undefined>(undefined)

  const scrollToContactForm = () => {
    const contactElement = document.getElementById('contact-form')
    if (contactElement) {
      contactElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const handleCardClick = (subject: string) => {
    setSelectedSubjectTag(subject)
    scrollToContactForm()
  }

  const artwork = {
    title: "Synthetic Horizon",
    medium: "AI-Generated Visuals, Digital Installation",
    year: "2024",
    description: "Eine Exploration der Grenze zwischen menschlicher Kreativität und maschineller Intelligenz.",
    dimensions: "Variable Dimensions"
  }

  const processSteps = [
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

  const portfolioWorks = [
    {
      id: 1,
      title: "Digital Echoes",
      category: "Installation",
      medium: "Interactive Media",
      year: "2024",
      image: "/images/art1.jpg",
      gridSize: "large"
    },
    {
      id: 2,
      title: "Neon Dreams", 
      category: "Photography",
      medium: "Digital Photography",
      year: "2023", 
      image: "/images/art2.jpg",
      gridSize: "medium"
    },
    {
      id: 3,
      title: "Abstract Geometries",
      category: "Digital Art", 
      medium: "Generative Art",
      year: "2024",
      image: "/images/art3.jpg",
      gridSize: "small"
    },
    {
      id: 4,
      title: "Urban Landscapes",
      category: "Photography",
      medium: "Street Photography", 
      year: "2023",
      image: "/images/art4.jpg", 
      gridSize: "medium"
    },
    {
      id: 5,
      title: "Synthetic Nature",
      category: "Digital Art",
      medium: "AI-Generated",
      year: "2024",
      image: "/images/art5.jpg",
      gridSize: "large"
    },
    {
      id: 6,
      title: "Color Studies",
      category: "Painting",
      medium: "Acrylic on Canvas", 
      year: "2023",
      image: "/images/art6.jpg",
      gridSize: "small"
    }
  ]

  const getGridClass = (size: string) => {
    switch(size) {
      case 'large': return 'md:col-span-2 md:row-span-2 h-80 md:h-auto'
      case 'medium': return 'md:col-span-2 h-48'
      case 'small': return 'md:col-span-1 h-48'
      default: return 'md:col-span-1 h-48'
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* NOTE: CursorFollower and CustomCursor removed due to import issues */}

      {/* 1. HERO SECTION - BAUHAUS MINIMAL */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-gray-100 relative overflow-hidden"
      >
        {/* Bauhaus geometric background elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-20 left-20 w-32 h-32 border-4 border-blue-500 rotate-45"></div>
          <div className="absolute bottom-32 right-32 w-24 h-24 bg-red-500 rounded-full"></div>
          <div className="absolute top-1/2 left-10 w-0 h-0 border-l-16 border-r-16 border-b-28 border-l-transparent border-r-transparent border-b-yellow-500"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-8"
          >
            <motion.h1 
              className="text-4xl md:text-7xl font-light tracking-tight mb-6"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Kunst & Kreativität
            </motion.h1>
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: '100px', opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="h-1 bg-blue-500 mx-auto mb-8"
            />
          </motion.div>

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
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-32 px-6 bg-white relative"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left - Image */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative group">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-red-500/20 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <img 
                  src="/images/featured-art.jpg"
                  alt={artwork.title}
                  className="relative z-10 w-full h-96 object-cover rounded-lg shadow-2xl"
                />
              </div>
            </motion.div>

            {/* Right - Details */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4"
                >
                  Featured Work
                </motion.div>

                <motion.h2 
                  className="text-3xl md:text-5xl font-light tracking-tight mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  {artwork.title}
                </motion.h2>

                <motion.p 
                  className="text-lg text-muted-foreground mb-8 leading-relaxed"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  viewport={{ once: true }}
                >
                  {artwork.description}
                </motion.p>
              </div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-6 text-sm"
              >
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
              </motion.div>

              <motion.button
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                viewport={{ once: true }}
                className="inline-flex items-center px-6 py-3 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-colors"
              >
                Mehr Details
                <ArrowRight className="w-4 h-4 ml-2" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 3. PROCESS - ENHANCED WITH ADVANCED ANIMATIONS */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-32 px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
      >
        {/* Floating background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-500/20 rounded-full"
              style={{
                left: `${20 + i * 10}%`,
                top: `${30 + i * 8}%`
              }}
              animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                opacity: [0.2, 0.6, 0.2]
              }}
              transition={{
                duration: 6 + i,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto relative">
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
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '80px' }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-1 bg-red-500 mx-auto mb-8"
            />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Von der ersten Idee bis zur finalen Installation – ein Einblick in meinen strukturierten Arbeitsprozess.
            </p>
          </motion.div>

          <div className="relative">
            {/* Process timeline line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute left-8 md:left-1/2 top-0 w-px h-full bg-gradient-to-b from-blue-500 via-red-500 to-yellow-500 transform -translate-x-1/2"
            />

            <div className="space-y-16">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16`}
                >
                  {/* Step Number - Enhanced */}
                  <motion.div
                    className="relative flex-shrink-0"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className="w-16 h-16 rounded-full bg-white border-4 border-blue-500 flex items-center justify-center shadow-lg relative z-10"
                      animate={{
                        boxShadow: [
                          "0 4px 15px rgba(59, 130, 246, 0.2)",
                          "0 8px 25px rgba(59, 130, 246, 0.4)",
                          "0 4px 15px rgba(59, 130, 246, 0.2)"
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <motion.span
                        className="text-lg font-bold text-blue-600"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {step.step}
                      </motion.span>
                    </motion.div>
                    
                    {/* Floating dots around number */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400 rounded-full"
                        style={{
                          top: `${20 + i * 15}px`,
                          right: `-${10 + i * 5}px`
                        }}
                        animate={{
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0]
                        }}
                        transition={{
                          duration: 2,
                          delay: i * 0.3,
                          repeat: Infinity
                        }}
                      />
                    ))}
                  </motion.div>

                  {/* Content - Enhanced */}
                  <motion.div
                    className="flex-1 p-8 bg-white rounded-xl shadow-lg border border-gray-100"
                    whileHover={{ 
                      y: -5,
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.h3
                      className="text-xl md:text-2xl font-semibold mb-4 text-gray-900"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                      viewport={{ once: true }}
                    >
                      {step.title}
                    </motion.h3>
                    <motion.p
                      className="text-muted-foreground leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                      viewport={{ once: true }}
                    >
                      {step.description}
                    </motion.p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* 4. PORTFOLIO GRID - MINIMAL BAUHAUS (NO SCALING) */}
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
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '60px' }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-1 bg-yellow-500 mx-auto"
            />
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div className="grid md:grid-cols-4 gap-6 auto-rows-fr">
              {portfolioWorks.map((work, index) => 
                <motion.div
                  key={work.id}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`group relative overflow-hidden transition-all duration-500 ${getGridClass(work.gridSize)}`}
                  whileHover={{ 
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Bauhaus Color Overlay on Hover - NO IMAGE SCALING */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-br from-red-500/80 via-blue-600/80 to-yellow-500/80 flex items-center justify-center p-6"
                  >
                    <div className="text-center space-y-3 text-white">
                      <h3 className="text-xl font-bold">{work.title}</h3>
                      <div className="text-sm space-y-1">
                        <p className="font-medium">{work.category}</p>
                        <p>{work.medium}</p>
                        <p className="font-bold">{work.year}</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* 5. ANFRAGEN - MINIMALIST STYLE (NO CARD SCALING) */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-32 px-6 bg-white relative overflow-hidden z-10"
      >
        <div className="max-w-6xl mx-auto relative z-20">
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
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '80px' }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-1 bg-blue-500 mx-auto mb-8"
            />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Interesse an einer kreativen Zusammenarbeit? Lassen Sie uns über Ihr Projekt sprechen.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Auftragsarbeiten - NO SCALING */}
            <motion.div
              className="relative p-8 rounded-2xl bg-background border border-border/50 hover:border-border duration-300 h-full group cursor-pointer"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              onClick={() => handleCardClick('Auftragsarbeiten')}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/20 to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Palette className="w-8 h-8 text-foreground" />
                </motion.div>

                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  Auftragsarbeiten
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Individuelle Kunstwerke und digitale Installationen nach Ihren spezifischen Wünschen
                </p>

                <motion.div
                  className="inline-flex items-center text-foreground font-medium"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Mehr erfahren
                  <ArrowRight className="w-4 h-4 ml-2" />
                </motion.div>
              </div>
            </motion.div>

            {/* Kollaborationen - NO SCALING */}
            <motion.div
              className="relative p-8 rounded-2xl bg-background border border-border/50 hover:border-border duration-300 h-full group cursor-pointer"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              onClick={() => handleCardClick('Kollaborationen')}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Layers className="w-8 h-8 text-foreground" />
                </motion.div>

                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  Kollaborationen
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Strategische Partnerschaften für innovative Projekte und gemeinsame Ausstellungen
                </p>

                <motion.div
                  className="inline-flex items-center text-foreground font-medium"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Mehr erfahren
                  <ArrowRight className="w-4 h-4 ml-2" />
                </motion.div>
              </div>
            </motion.div>

            {/* Workshops - NO SCALING */}
            <motion.div
              className="relative p-8 rounded-2xl bg-background border border-border/50 hover:border-border duration-300 h-full group cursor-pointer"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              onClick={() => handleCardClick('Workshops')}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Heart className="w-8 h-8 text-foreground" />
                </motion.div>

                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  Workshops
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Kreative Workshops zu digitaler Kunst, AI-Tools und experimentellen Techniken
                </p>

                <motion.div
                  className="inline-flex items-center text-foreground font-medium"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Mehr erfahren
                  <ArrowRight className="w-4 h-4 ml-2" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 6. CONTACT FORM INTEGRATION */}
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
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100px' }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-1 bg-blue-500 mx-auto mb-8"
            />
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
