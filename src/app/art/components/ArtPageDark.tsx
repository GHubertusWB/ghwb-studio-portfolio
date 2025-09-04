'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function ArtPageDark() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const latestWork = {
    title: "Synthetic Horizon",
    year: "2024",
    medium: "Digital Collage, AI-Generated Elements",
    dimensions: "3840x2160px",
    description: "A meditation on the boundary between natural and artificial landscapes, exploring how technology reshapes our perception of the world around us.",
    image: "https://picsum.photos/1200/800?random=latest",
    process: "Created using a combination of traditional photography, digital manipulation, and AI-assisted generation to create otherworldly landscapes."
  }

  const processSteps = [
    {
      step: "01",
      title: "Konzeption",
      description: "Entwicklung der ursprünglichen Idee durch Skizzen, Recherche und visuelle Referenzen"
    },
    {
      step: "02", 
      title: "Experimentieren",
      description: "Testing verschiedener Medien und Techniken, um die beste Ausdrucksform zu finden"
    },
    {
      step: "03",
      title: "Ausführung",
      description: "Präzise Umsetzung mit Fokus auf Details und technische Perfektion"
    },
    {
      step: "04",
      title: "Reflexion",
      description: "Bewertung des Ergebnisses und Dokumentation der Learnings für zukünftige Projekte"
    }
  ]

  const galleryWorks = [
    {
      id: 1,
      title: "Digital Landscape",
      category: "Digital Art",
      medium: "Procreate, Photoshop",
      year: "2024",
      image: "https://picsum.photos/600/800?random=1",
      gridSize: "normal" // 1x1
    },
    {
      id: 2,
      title: "Geometric Abstractions", 
      category: "Abstract",
      medium: "Mixed Media",
      year: "2023",
      image: "https://picsum.photos/800/600?random=2",
      gridSize: "wide" // 2x1
    },
    {
      id: 3,
      title: "Urban Fragments",
      category: "Photography", 
      medium: "Digital Photography",
      year: "2024",
      image: "https://picsum.photos/700/900?random=3",
      gridSize: "tall" // 1x2
    },
    {
      id: 4,
      title: "Algorithmic Patterns",
      category: "Generative",
      medium: "Code, Processing",
      year: "2024", 
      image: "https://picsum.photos/900/600?random=4",
      gridSize: "normal"
    },
    {
      id: 5,
      title: "Material Studies",
      category: "Sculpture",
      medium: "Steel, Glass",
      year: "2023",
      image: "https://picsum.photos/600/700?random=5",
      gridSize: "wide"
    },
    {
      id: 6,
      title: "Motion Studies",
      category: "Animation",
      medium: "After Effects, Cinema 4D",
      year: "2024",
      image: "https://picsum.photos/800/800?random=6",
      gridSize: "normal"
    },
    {
      id: 7,
      title: "Abstract Composition",
      category: "Abstract",
      medium: "Oil on Canvas",
      year: "2023",
      image: "https://picsum.photos/600/900?random=7",
      gridSize: "tall"
    },
    {
      id: 8,
      title: "Light Studies",
      category: "Photography",
      medium: "Digital Photography",
      year: "2024",
      image: "https://picsum.photos/700/500?random=8",
      gridSize: "normal"
    }
  ]

  const filteredWorks = galleryWorks

  return (
    <div className="min-h-screen bg-background transition-colors duration-300 relative">
      {/* Spaceship HUD Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
        {/* Diagonal Scan Lines */}
        <div className="absolute inset-0">
          <div 
            className="w-full h-full opacity-10"
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 2px,
                rgba(0, 255, 224, 0.1) 2px,
                rgba(0, 255, 224, 0.1) 4px
              )`,
              backgroundSize: '20px 20px'
            }}
          />
        </div>
        
        {/* Corner HUD Frames */}
        <div className="absolute top-4 left-4 w-20 h-20 border-t-2 border-l-2 border-cyan-400/30"></div>
        <div className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-cyan-400/30"></div>
        <div className="absolute bottom-4 left-4 w-20 h-20 border-b-2 border-l-2 border-cyan-400/30"></div>
        <div className="absolute bottom-4 right-4 w-20 h-20 border-b-2 border-r-2 border-cyan-400/30"></div>
        
        {/* Side Status Bars */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 h-40 w-1 bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent"></div>
        <div className="absolute right-8 top-1/3 h-32 w-1 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent"></div>
        
        {/* Floating Data Points */}
        <div className="absolute top-1/4 left-1/4">
          <div className="w-2 h-2 bg-cyan-400/50 rounded-full animate-pulse"></div>
        </div>
        <div className="absolute top-2/3 right-1/3">
          <div className="w-1 h-1 bg-cyan-400/70 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
        <div className="absolute bottom-1/3 left-2/3">
          <div className="w-1.5 h-1.5 bg-cyan-400/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        {/* Circuit Lines */}
        <div className="absolute top-1/2 left-0 w-24 h-px bg-gradient-to-r from-transparent to-cyan-400/30"></div>
        <div className="absolute top-1/3 right-0 w-32 h-px bg-gradient-to-l from-transparent to-cyan-400/25"></div>
        <div className="absolute bottom-1/4 left-1/2 w-px h-16 bg-gradient-to-b from-cyan-400/30 to-transparent"></div>
      </div>

      {/* 1. INTRO */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="pt-32 pb-32 px-6 relative z-10"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <h1 className="text-[clamp(4rem,10vw,12rem)] font-light tracking-tight leading-[0.8] text-white">
                <span className="block">VISUAL</span>
                <motion.span 
                  className="block bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  style={{
                    textShadow: '0 0 30px rgba(0, 255, 224, 0.3)'
                  }}
                >
                  KUNST
                </motion.span>
              </h1>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="max-w-3xl space-y-6"
              >
                <p className="text-2xl font-light leading-relaxed text-gray-300">
                  Interdisziplinäre Arbeiten an der Schnittstelle zwischen traditionellen und digitalen Medien
                </p>
                <p className="text-lg leading-relaxed text-gray-400">
                  Meine künstlerische Praxis erforscht die Grenzen zwischen physischen und virtuellen Räumen, 
                  analog und digital, Konzept und Ausführung.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* 2. PROZESS */}
      <motion.section 
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-32 px-6 bg-muted/30 relative z-10"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div className="text-center space-y-6">
              <h2 className="text-6xl font-light text-white" style={{ textShadow: '0 0 30px rgba(0, 255, 224, 0.3)' }}>PROZESS</h2>
              <p className="text-xl max-w-3xl mx-auto text-gray-400">
                Jedes Werk entsteht durch einen systematischen, aber experimentellen Ansatz
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="space-y-4 group relative"
                >
                  {/* HUD Status Indicator */}
                  <div className="absolute -left-4 top-2 w-1 h-8 bg-cyan-400/60 shadow-lg shadow-cyan-400/30"></div>
                  
                  <div className="text-8xl font-light text-gray-700 group-hover:text-white transition-colors duration-500" style={{ textShadow: '0 0 20px rgba(0, 255, 224, 0.5)' }}>
                    {step.step}
                  </div>
                  <h3 className="text-2xl font-light text-white">{step.title}</h3>
                  <p className="leading-relaxed text-gray-400">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* 3. NEUESTES WERK */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-32 px-6 bg-background relative z-10"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div className="text-center space-y-6">
              <h2 className="text-6xl font-light text-white" style={{ textShadow: '0 0 30px rgba(0, 255, 224, 0.3)' }}>NEUESTES WERK</h2>
              <p className="text-xl text-gray-400">Aktuell in Arbeit</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ x: -60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <h3 className="text-4xl font-light text-white">{latestWork.title}</h3>
                  <div className="flex gap-6 text-sm text-gray-500">
                    <span>{latestWork.year}</span>
                    <span>{latestWork.dimensions}</span>
                  </div>
                  <p className="text-gray-400">{latestWork.medium}</p>
                </div>
                
                <p className="text-lg leading-relaxed text-gray-300">
                  {latestWork.description}
                </p>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-medium text-white">Entstehungsprozess</h4>
                  <p className="leading-relaxed text-gray-400">
                    {latestWork.process}
                  </p>
                </div>

                <motion.button
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-3 font-medium group text-white border-b border-cyan-400/50 pb-1 hover:border-cyan-400 transition-colors"
                >
                  Mehr erfahren
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ x: 60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <motion.div
                  className="relative border border-cyan-400/30 p-2 shadow-lg shadow-cyan-400/20"
                  whileHover={{ 
                    borderColor: 'rgba(6, 182, 212, 0.6)',
                    boxShadow: '0 0 30px rgba(6, 182, 212, 0.4)'
                  }}
                >
                  <motion.img
                    src={latestWork.image}
                    alt={latestWork.title}
                    className="w-full aspect-[4/5] object-cover"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  {/* HUD Corner Elements */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-cyan-400"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-cyan-400"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-cyan-400"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-cyan-400"></div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* 4. GALERIE */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-32 px-6 relative overflow-hidden z-10 bg-transparent"
      >
        {/* HUD Grid Background */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <motion.div 
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 255, 224, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 255, 224, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div className="text-center space-y-6">
              <motion.h2 
                className="text-6xl font-light text-white"
                style={{ textShadow: '0 0 30px rgba(0, 255, 224, 0.3)' }}
              >
                GALERIE
              </motion.h2>
              <p className="text-xl text-cyan-200/80">Auswahl meiner Arbeiten</p>
            </div>

            <motion.div
              className="grid grid-cols-4 gap-4 auto-rows-[200px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              viewport={{ once: true }}
            >
              {filteredWorks.map((work, index) => {
                const getGridClass = (size: string) => {
                  switch(size) {
                    case 'wide': return 'col-span-2 row-span-1'
                    case 'tall': return 'col-span-1 row-span-2'
                    default: return 'col-span-1 row-span-1'
                  }
                }

                return (
                  <motion.div
                    key={work.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className={`group relative overflow-hidden transition-all duration-500 ${getGridClass(work.gridSize)}`}
                    style={{
                      background: 'rgba(6, 182, 212, 0.05)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(6, 182, 212, 0.2)'
                    }}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: '0 10px 30px rgba(6, 182, 212, 0.3)',
                      borderColor: 'rgba(6, 182, 212, 0.5)'
                    }}
                  >
                    <motion.img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                    
                    {/* Scan Line Effect */}
                    <motion.div
                      className="absolute left-0 top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100"
                      animate={{
                        y: ['0%', '100%', '0%']
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />

                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 backdrop-blur-sm flex items-center justify-center p-6 bg-black/80"
                    >
                      <div className="text-center space-y-3">
                        <h3 className="text-xl font-light text-white">{work.title}</h3>
                        <div className="text-sm space-y-1 text-cyan-200/80">
                          <p>{work.category}</p>
                          <p>{work.medium}</p>
                          <p className="font-mono text-cyan-400/60">{work.year}</p>
                        </div>
                        
                        <div className="flex items-center justify-center gap-2 pt-2">
                          <div className="w-1 h-1 rounded-full animate-pulse bg-cyan-400"></div>
                          <span className="text-xs font-mono text-cyan-400/60">ACTIVE</span>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* 5. ANFRAGEN - SPACESHIP HUD STYLE */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-32 px-6 relative overflow-hidden z-10"
        style={{
          background: 'linear-gradient(135deg, rgba(10, 10, 20, 0.95) 0%, rgba(20, 20, 40, 0.9) 100%)'
        }}
      >
        {/* Advanced HUD Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 20% 80%, rgba(6, 182, 212, 0.03) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.05) 0%, transparent 50%)',
                'radial-gradient(circle at 40% 40%, rgba(6, 182, 212, 0.03) 0%, transparent 50%)'
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Floating Particles */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-cyan-400/20"
              initial={{
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
                opacity: 0
              }}
              animate={{
                y: [0, -100],
                opacity: [0, 0.5, 0]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-20"
          >
            {/* Header */}
            <div className="text-center space-y-8">
              <motion.h2 
                className="text-7xl font-light text-white"
                style={{ textShadow: '0 0 30px rgba(0, 255, 224, 0.3)' }}
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
              >
                SYSTEM INTERFACE
              </motion.h2>
              <motion.p 
                className="text-2xl font-light max-w-3xl mx-auto text-cyan-200/80"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
              >
                Initialisiere Kommunikationsprotokoll für kreative Kollaboration
              </motion.p>
            </div>

            {/* HUD Interface Cards */}
            <motion.div
              className="grid lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              viewport={{ once: true }}
            >
              {/* Mission 01 */}
              <motion.div
                className="group relative p-8 border border-cyan-400/30 backdrop-blur-sm transition-all duration-700 cursor-pointer overflow-hidden"
                style={{
                  background: 'rgba(6, 182, 212, 0.05)',
                  boxShadow: '0 0 20px rgba(6, 182, 212, 0.1)'
                }}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  boxShadow: '0 20px 40px rgba(6, 182, 212, 0.2)',
                  borderColor: 'rgba(6, 182, 212, 0.6)'
                }}
              >
                {/* HUD Corner Elements */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-cyan-400/40"></div>
                <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-cyan-400/40"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-cyan-400/40"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-cyan-400/40"></div>
                
                <div className="space-y-6">
                  {/* Status Header */}
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    <span className="text-xs font-mono text-cyan-400/60">MISSION 01</span>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-2xl font-light text-white">AUFTRAGSWERKE</h3>
                    <p className="text-lg leading-relaxed text-gray-300">
                      Individuelle Kunstwerke nach Ihren Spezifikationen und Parametern
                    </p>
                    
                    <div className="space-y-3 pt-4">
                      {['Persönliche Konzeptentwicklung', 'Verschiedene Medien & Techniken', 'Individuelle Größen & Formate'].map((feature, idx) => (
                        <motion.div
                          key={feature}
                          className="flex items-center gap-3 text-sm text-cyan-200/80"
                          initial={{ x: -10, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ delay: 1 + idx * 0.1, duration: 0.5 }}
                          viewport={{ once: true }}
                        >
                          <motion.div 
                            className="w-1.5 h-1.5 rounded-full bg-cyan-400"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
                          />
                          <span className="font-mono text-xs">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Interface Button */}
                <motion.div
                  className="absolute bottom-4 right-4 w-8 h-8 bg-cyan-400/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-all duration-300"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.2 }}
                >
                  <ArrowRight size={14} />
                </motion.div>
              </motion.div>

              {/* Mission 02 */}
              <motion.div
                className="group relative p-8 border border-cyan-400/30 backdrop-blur-sm transition-all duration-700 cursor-pointer overflow-hidden"
                style={{
                  background: 'rgba(6, 182, 212, 0.05)',
                  boxShadow: '0 0 20px rgba(6, 182, 212, 0.1)'
                }}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  boxShadow: '0 20px 40px rgba(6, 182, 212, 0.2)',
                  borderColor: 'rgba(6, 182, 212, 0.6)'
                }}
              >
                <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-cyan-400/40"></div>
                <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-cyan-400/40"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-cyan-400/40"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-cyan-400/40"></div>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    <span className="text-xs font-mono text-cyan-400/60">MISSION 02</span>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-2xl font-light text-white">KOLLABORATIONEN</h3>
                    <p className="text-lg leading-relaxed text-gray-300">
                      Interdisziplinäre Partnerships für innovative Projekte und Expeditionen
                    </p>
                    
                    <div className="space-y-3 pt-4">
                      {['Interdisziplinäre Projekte', 'Galerie-Kooperationen', 'Gemeinsame Ausstellungen'].map((feature, idx) => (
                        <motion.div
                          key={feature}
                          className="flex items-center gap-3 text-sm text-cyan-200/80"
                          initial={{ x: -10, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ delay: 1.2 + idx * 0.1, duration: 0.5 }}
                          viewport={{ once: true }}
                        >
                          <motion.div 
                            className="w-1.5 h-1.5 rounded-full bg-cyan-400"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 + 0.5 }}
                          />
                          <span className="font-mono text-xs">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                <motion.div
                  className="absolute bottom-4 right-4 w-8 h-8 bg-cyan-400/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-all duration-300"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.2 }}
                >
                  <ArrowRight size={14} />
                </motion.div>
              </motion.div>

              {/* Mission 03 */}
              <motion.div
                className="group relative p-8 border border-cyan-400/30 backdrop-blur-sm transition-all duration-700 cursor-pointer overflow-hidden"
                style={{
                  background: 'rgba(6, 182, 212, 0.05)',
                  boxShadow: '0 0 20px rgba(6, 182, 212, 0.1)'
                }}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  boxShadow: '0 20px 40px rgba(6, 182, 212, 0.2)',
                  borderColor: 'rgba(6, 182, 212, 0.6)'
                }}
              >
                <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-cyan-400/40"></div>
                <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-cyan-400/40"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-cyan-400/40"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-cyan-400/40"></div>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    <span className="text-xs font-mono text-cyan-400/60">MISSION 03</span>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-2xl font-light text-white">BERATUNG & TRAINING</h3>
                    <p className="text-lg leading-relaxed text-gray-300">
                      Expertise-Transfer und Wissens-Upload für Ihre kreativen Systeme
                    </p>
                    
                    <div className="space-y-3 pt-4">
                      {['Künstlerische Beratung', 'Technik-Workshops', 'Kreative Prozesse'].map((feature, idx) => (
                        <motion.div
                          key={feature}
                          className="flex items-center gap-3 text-sm text-cyan-200/80"
                          initial={{ x: -10, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ delay: 1.4 + idx * 0.1, duration: 0.5 }}
                          viewport={{ once: true }}
                        >
                          <motion.div 
                            className="w-1.5 h-1.5 rounded-full bg-cyan-400"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 + 1 }}
                          />
                          <span className="font-mono text-xs">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                <motion.div
                  className="absolute bottom-4 right-4 w-8 h-8 bg-cyan-400/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-all duration-300"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 1.6, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.2 }}
                >
                  <ArrowRight size={14} />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Communication Terminal */}
            <motion.div
              className="text-center p-12 border border-cyan-400/30 relative overflow-hidden backdrop-blur-sm"
              style={{
                background: 'rgba(6, 182, 212, 0.05)',
                boxShadow: '0 0 30px rgba(6, 182, 212, 0.2)'
              }}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
            >
              {/* Terminal Frame */}
              <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-cyan-400/40"></div>
              <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-cyan-400/40"></div>
              <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-cyan-400/40"></div>
              <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-cyan-400/40"></div>
              
              {/* Scanning Line */}
              <motion.div
                className="absolute left-0 top-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                animate={{ y: [0, 200, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <div className="relative z-10 space-y-6">
                <motion.h3
                  className="text-3xl font-light text-white"
                  style={{ textShadow: '0 0 20px rgba(0, 255, 224, 0.5)' }}
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  KOMMUNIKATIONSKANAL AKTIVIEREN
                </motion.h3>
                <p className="text-xl text-cyan-200/80 font-mono">
                  Bereit für Datenübertragung - Verbindung herstellen
                </p>
                <motion.div
                  className="inline-flex items-center gap-4 px-8 py-4 bg-cyan-400/10 border-2 border-cyan-400/30 text-cyan-400 font-mono cursor-pointer hover:bg-cyan-400 hover:text-black hover:border-cyan-400 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <motion.div
                    className="w-3 h-3 bg-current animate-pulse"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <span className="text-xl">hello@ghwb.studio</span>
                  <ArrowRight size={20} />
                </motion.div>
                
                {/* Status Line */}
                <div className="text-xs font-mono text-cyan-400/60 pt-2">
                  STATUS: READY FOR TRANSMISSION
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
