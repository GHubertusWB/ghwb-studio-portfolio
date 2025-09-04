'use client'

import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { principles } from './shared/data'

const PhilosophyLight = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Auto cycle through principles
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % principles.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  // Bauhaus-Farbpalette - ultra minimalistisch
  const bauhausColors = {
    primary: '#0F0F0F',      // Tiefstes Schwarz
    accent: '#2563EB',       // Ein einziger blauer Akzent
    text: '#525252',         // Mittleres Grau für Text
    light: '#F5F5F5',        // Sehr helles Grau
    lines: '#E5E5E5'         // Subtile Linien
  }

  // Bauhaus-Prinzipien mit geometrischen Formen
  const bauhausPrinciples = principles.map((principle, index) => ({
    ...principle,
    // Nur das erste Prinzip bekommt den blauen Akzent
    color: index === 0 ? bauhausColors.accent : bauhausColors.primary,
    geometry: index === 0 ? 'triangle' : 
              index === 1 ? 'rectangle' : 
              'circle'
  }))

  const currentBauhausPrinciple = bauhausPrinciples[activeIndex]

  return (
    <section 
      ref={containerRef}
      className="min-h-screen py-20 bg-white relative overflow-hidden flex items-center"
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header exakt wie Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-semibold text-foreground leading-tight tracking-tight md:text-3xl mb-6">
            Design Philosophie
          </h2>
          <motion.p 
            className="text-xl text-muted-foreground leading-7 max-w-prose mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Ich gestalte nicht für mich, sondern für die Menschen, die es nutzen. Mein Anspruch sind klare, reduzierte Interfaces, die überraschen – und trotzdem sofort verständlich, nutzbar und barrierefrei sind.
          </motion.p>
        </motion.div>

        {/* Bauhaus Grid System */}
        <motion.div 
          className="grid lg:grid-cols-12 gap-12 items-start"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          
          {/* Left - Bauhaus Navigation mit geometrischen Elementen */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="space-y-8">
              {bauhausPrinciples.map((principle, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className="w-full text-left block group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  whileHover={{ x: 4 }}
                >
                  <div className="flex flex-col gap-3">
                    
                    {/* Geometric Icon - Bauhaus Style */}
                    <motion.div
                      className="relative mb-2"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {principle.geometry === 'triangle' && (
                        <div className="relative">
                          <svg width="32" height="32" viewBox="0 0 32 32">
                            <motion.path
                              d="M16 4 L28 26 L4 26 Z"
                              stroke={activeIndex === index ? principle.color : bauhausColors.text}
                              strokeWidth={activeIndex === index ? "3" : "2"}
                              fill={activeIndex === index ? `${principle.color}20` : 'transparent'}
                              animate={{
                                stroke: activeIndex === index ? principle.color : bauhausColors.text,
                                strokeWidth: activeIndex === index ? "3" : "2",
                                fill: activeIndex === index ? `${principle.color}20` : 'transparent'
                              }}
                              transition={{ duration: 0.3 }}
                            />
                          </svg>
                        </div>
                      )}
                      
                      {principle.geometry === 'rectangle' && (
                        <motion.div
                          className="w-8 h-6 border-2"
                          style={{
                            borderColor: activeIndex === index ? principle.color : bauhausColors.text,
                            backgroundColor: activeIndex === index ? `${principle.color}20` : 'transparent'
                          }}
                          animate={{
                            borderColor: activeIndex === index ? principle.color : bauhausColors.text,
                            backgroundColor: activeIndex === index ? `${principle.color}20` : 'transparent',
                            borderWidth: activeIndex === index ? '3px' : '2px'
                          }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                      
                      {principle.geometry === 'circle' && (
                        <motion.div
                          className="w-8 h-8 rounded-full border-2"
                          style={{
                            borderColor: activeIndex === index ? principle.color : bauhausColors.text,
                            backgroundColor: activeIndex === index ? `${principle.color}20` : 'transparent'
                          }}
                          animate={{
                            borderColor: activeIndex === index ? principle.color : bauhausColors.text,
                            backgroundColor: activeIndex === index ? `${principle.color}20` : 'transparent',
                            borderWidth: activeIndex === index ? '3px' : '2px'
                          }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </motion.div>
                    
                    {/* Number - Bauhaus Typography */}
                    <motion.div 
                      className="text-meta text-secondary"
                      style={{
                        color: activeIndex === index ? principle.color : bauhausColors.text
                      }}
                      animate={{
                        color: activeIndex === index ? principle.color : bauhausColors.text
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {principle.number}
                    </motion.div>
                    
                    {/* Title */}
                    <motion.div 
                      className="text-meta text-secondary leading-tight"
                      style={{
                        color: activeIndex === index ? bauhausColors.primary : bauhausColors.text,
                        fontWeight: activeIndex === index ? '700' : '600'
                      }}
                      animate={{
                        color: activeIndex === index ? bauhausColors.primary : bauhausColors.text
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {principle.title}
                    </motion.div>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Bauhaus Decoration - Vertikale Linie */}
            <motion.div 
              className="mt-12 h-32 w-px ml-4"
              style={{ backgroundColor: bauhausColors.lines }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1, delay: 1.6 }}
              viewport={{ once: true, amount: 0.5 }}
            />
          </motion.div>

          {/* Center - Main Content Area */}
          <motion.div 
            className="lg:col-span-8 text-center py-12"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8 }}
                className="min-h-[500px] flex flex-col justify-center relative"
              >
                
                {/* Große Bauhaus geometrische Form */}
                <div className="relative mb-12 flex justify-center">
                  <motion.div
                    initial={{ scale: 0, rotate: 0 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      duration: 1, 
                      delay: 0.2,
                      type: "spring",
                      stiffness: 100
                    }}
                  >
                    
                    {currentBauhausPrinciple.geometry === 'triangle' && (
                      <motion.div className="relative">
                        <svg width="180" height="180" viewBox="0 0 180 180">
                          <motion.path
                            d="M90 20 L160 140 L20 140 Z"
                            stroke={currentBauhausPrinciple.color}
                            strokeWidth="4"
                            fill={`${currentBauhausPrinciple.color}15`}
                            animate={{ 
                              strokeWidth: [4, 6, 4],
                              scale: [1, 1.02, 1]
                            }}
                            transition={{ 
                              duration: 5, 
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                        </svg>
                        
                        {/* Bauhaus Accent Lines */}
                        <motion.div
                          className="absolute -top-4 -right-4 w-8 h-1"
                          style={{ backgroundColor: currentBauhausPrinciple.color }}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ delay: 0.8, duration: 0.5 }}
                        />
                      </motion.div>
                    )}
                    
                    {currentBauhausPrinciple.geometry === 'rectangle' && (
                      <motion.div className="relative">
                        <motion.div 
                          className="w-48 h-32 border-4"
                          style={{ 
                            borderColor: currentBauhausPrinciple.color,
                            backgroundColor: `${currentBauhausPrinciple.color}15`
                          }}
                          animate={{ 
                            borderWidth: [4, 6, 4],
                            scale: [1, 1.01, 1]
                          }}
                          transition={{ 
                            duration: 6, 
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                        
                        {/* Bauhaus Corner Elements */}
                        <motion.div
                          className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2"
                          style={{ borderColor: currentBauhausPrinciple.color }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.8 }}
                        />
                      </motion.div>
                    )}
                    
                    {currentBauhausPrinciple.geometry === 'circle' && (
                      <motion.div className="relative">
                        <motion.div 
                          className="w-40 h-40 rounded-full border-4"
                          style={{ 
                            borderColor: currentBauhausPrinciple.color,
                            backgroundColor: `${currentBauhausPrinciple.color}15`
                          }}
                          animate={{ 
                            scale: [1, 1.03, 1],
                            borderWidth: [4, 6, 4]
                          }}
                          transition={{ 
                            duration: 4, 
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                        
                        {/* Bauhaus Decorative Line */}
                        <motion.div
                          className="absolute top-1/2 -right-8 w-6 h-px"
                          style={{ backgroundColor: currentBauhausPrinciple.color }}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ delay: 0.8, duration: 0.5 }}
                        />
                      </motion.div>
                    )}
                    
                  </motion.div>
                </div>
                
                {/* Title - Bauhaus Typography */}
                <motion.h1 
                  className="text-3xl font-semibold text-foreground leading-snug tracking-tight md:text-2xl mb-8 uppercase"
                  style={{
                    color: bauhausColors.primary,
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    letterSpacing: '0.05em'
                  }}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {currentBauhausPrinciple.title}
                </motion.h1>

                {/* Description */}
                <motion.div
                  className="max-w-2xl mx-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <p 
                    className="text-base leading-relaxed"
                    style={{ color: bauhausColors.text }}
                  >
                    {currentBauhausPrinciple.description}
                  </p>
                </motion.div>

                {/* Bauhaus Decorative Elements */}
                <motion.div 
                  className="absolute bottom-0 left-1/4 w-12 h-px"
                  style={{ backgroundColor: currentBauhausPrinciple.color }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                />

              </motion.div>
            </AnimatePresence>
            
          </motion.div>

          {/* Right - Keywords & Bauhaus Elements */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            
            {/* Bauhaus Header */}
            <motion.div 
              className="text-meta text-secondary mb-8"
              style={{ color: bauhausColors.text }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              EIGENSCHAFTEN
            </motion.div>
            
            {/* Keywords */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {currentBauhausPrinciple.keywords.map((keyword, i) => (
                  <motion.div
                    key={keyword}
                    className="relative"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {/* Bauhaus Marker */}
                    <motion.div
                      className="flex items-center gap-3"
                      whileHover={{ x: 2 }}
                    >
                      <motion.div 
                        className="w-3 h-3 border-2"
                        style={{ borderColor: currentBauhausPrinciple.color }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.15, duration: 0.3 }}
                      />
                      <span 
                        className="text-label text-primary-small"
                        style={{ color: bauhausColors.primary }}
                      >
                        {keyword}
                      </span>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Bauhaus Decorative Element */}
            <motion.div 
              className="mt-12 space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.8 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <motion.div 
                className="w-8 h-8 border-2"
                style={{ borderColor: bauhausColors.lines }}
                animate={{
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <div 
                className="w-12 h-px"
                style={{ backgroundColor: bauhausColors.lines }}
              />
            </motion.div>
            
          </motion.div>

        </motion.div>

        {/* Bottom Progress Indicator - Bauhaus Style */}
        <motion.div 
          className="flex justify-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="flex items-center gap-8">
            {bauhausPrinciples.map((principle, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                className="relative group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  className="w-16 h-1"
                  style={{
                    backgroundColor: activeIndex === index ? principle.color : bauhausColors.light
                  }}
                  animate={{
                    backgroundColor: activeIndex === index ? principle.color : bauhausColors.light,
                    height: activeIndex === index ? '4px' : '1px'
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Bauhaus Number Indicator */}
                <motion.div 
                  className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-meta text-secondary"
                  style={{
                    color: activeIndex === index ? principle.color : bauhausColors.text,
                    opacity: activeIndex === index ? 1 : 0.5
                  }}
                  animate={{
                    color: activeIndex === index ? principle.color : bauhausColors.text,
                    opacity: activeIndex === index ? 1 : 0.5
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {principle.number}
                </motion.div>
              </motion.button>
            ))}
          </div>
        </motion.div>

      </div>

    </section>
  )
}

export default PhilosophyLight
