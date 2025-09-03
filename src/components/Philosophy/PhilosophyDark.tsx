'use client'

import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { principles } from './shared/data'

const PhilosophyDark = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const currentPrinciple = principles[activeIndex]

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Auto cycle through principles
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % principles.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 360])

  return (
    <section 
      ref={containerRef}
      className="min-h-screen relative overflow-hidden text-white flex items-center py-20"
      style={{
        background: 'transparent'
      }}
    >

      {/* HUD Elements Background */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        
        {/* Top HUD Lines mit Glow */}
        <motion.div 
          className="absolute top-32 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent"
          style={{ filter: 'drop-shadow(0 0 8px white)' }}
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        />
        <motion.div 
          className="absolute top-40 left-1/4 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-white/16 to-transparent"
          style={{ filter: 'drop-shadow(0 0 8px white)' }}
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.3 }}
          viewport={{ once: true, amount: 0.5 }}
        />
        
        {/* Bottom HUD Lines mit Glow */}
        <motion.div 
          className="absolute bottom-32 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent"
          style={{ filter: 'drop-shadow(0 0 8px white)' }}
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.6 }}
          viewport={{ once: true, amount: 0.5 }}
        />
        <motion.div 
          className="absolute bottom-24 right-1/4 w-1/3 h-[2px] bg-gradient-to-l from-transparent via-white/16 to-transparent"
          style={{ filter: 'drop-shadow(0 0 8px white)' }}
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.9 }}
          viewport={{ once: true, amount: 0.5 }}
        />
        
        {/* Vertikale HUD-Linien mit Glow */}
        <motion.div 
          className="absolute left-1/6 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-white/16 via-transparent to-white/16"
          style={{ filter: 'drop-shadow(0 0 8px white)' }}
          initial={{ scaleY: 0, opacity: 0 }}
          whileInView={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 2.2 }}
          viewport={{ once: true, amount: 0.5 }}
        />
        <motion.div 
          className="absolute right-1/6 top-0 h-full w-[2px] bg-gradient-to-b from-white/16 via-transparent to-white/16"
          style={{ filter: 'drop-shadow(0 0 8px white)' }}
          initial={{ scaleY: 0, opacity: 0 }}
          whileInView={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 2.5 }}
          viewport={{ once: true, amount: 0.5 }}
        />
        
        {/* Corner HUD Elements */}
        <motion.div 
          className="absolute top-20 left-20"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="w-8 h-8 border-t border-l border-white/15 relative">
            <div className="absolute -top-[1px] -left-[1px] w-2 h-2 border-t-2 border-l-2 border-white/30"></div>
          </div>
        </motion.div>
        
        <motion.div 
          className="absolute top-20 right-20"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 3 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="w-8 h-8 border-t border-r border-white/15 relative">
            <div className="absolute -top-[1px] -right-[1px] w-2 h-2 border-t-2 border-r-2 border-white/30"></div>
          </div>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-20 left-20"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 3.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="w-8 h-8 border-b border-l border-white/15 relative">
            <div className="absolute -bottom-[1px] -left-[1px] w-2 h-2 border-b-2 border-l-2 border-white/30"></div>
          </div>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-20 right-20"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 3.4 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="w-8 h-8 border-b border-r border-white/15 relative">
            <div className="absolute -bottom-[1px] -right-[1px] w-2 h-2 border-b-2 border-r-2 border-white/30"></div>
          </div>
        </motion.div>
        
        {/* Small HUD Indicators */}
        <motion.div 
          className="absolute top-1/3 left-12"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 3.6 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="flex items-center gap-1">
            <div className="w-1 h-1 bg-white/20 rounded-full"></div>
            <div className="w-6 h-[1px] bg-white/15"></div>
          </div>
        </motion.div>
        
        <motion.div 
          className="absolute top-2/3 right-12"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 3.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="flex items-center gap-1">
            <div className="w-6 h-[1px] bg-white/15"></div>
            <div className="w-1 h-1 bg-white/20 rounded-full"></div>
          </div>
        </motion.div>
        
        {/* Scanning Line */}
        <motion.div
          className="absolute left-1/3 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent"
          initial={{ opacity: 0, scaleY: 0 }}
          whileInView={{ opacity: 0.6, scaleY: 1 }}
          transition={{ duration: 1.5, delay: 4 }}
          viewport={{ once: true, amount: 0.5 }}
          animate={{
            opacity: [0.2, 0.6, 0.2],
            scaleY: [0.8, 1, 0.8]
          }}
        />
        
        {/* Subtle Frame */}
        <motion.div 
          className="absolute inset-8 border border-white/5 pointer-events-none"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 4.2 }}
          viewport={{ once: true, amount: 0.5 }}
        />
        
      </motion.div>

      {/* Header Section */}
      <motion.div 
        className="absolute top-1/5 left-0 right-0 pt-8 pb-4"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-3xl md:text-5xl font-light tracking-tight mb-6" 
              style={{
                transition: 'color 0.3s ease-in-out'
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              Design Philosophie
            </motion.h2>
            <motion.p 
              className="text-lg text-white max-w-2xl mx-auto" 
              style={{
                transition: 'color 0.3s ease-in-out'
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              Ich gestalte nicht für mich, sondern für die Menschen, die es nutzen. Mein Anspruch sind klare, reduzierte Interfaces, die überraschen – und trotzdem sofort verständlich, nutzbar und barrierefrei sind.
              </motion.p>
          </motion.div>
        </div>
      </motion.div>

      {/* Minimal Corner Indicators */}
      <motion.div 
        className="absolute top-1/5 left-8"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="text-xs font-medium text-white/20">
          PHILOSOPHY
        </div>
      </motion.div>
      
      <motion.div 
        className="absolute top-1/5 right-8"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="text-xs font-medium text-white/20">
          0{activeIndex + 1}/03
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div 
        className="w-full max-w-6xl mx-auto px-8 pt-20"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3.2, delay: 1.4 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left - Simple Navigation */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="space-y-4">
              {principles.map((principle, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-full text-left font-medium text-sm transition-all duration-500 ${
                    activeIndex === index 
                      ? 'text-white' 
                      : 'text-white/40 hover:text-white/70'
                  }`}
                  whileHover={{ x: 4 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <div className="flex items-center gap-4">
                    <motion.span 
                      className="text-xs"
                      animate={{
                        color: activeIndex === index ? 'white' : 'rgba(255,255,255,0.4)',
                        textShadow: activeIndex === index 
                          ? ['0 0 0px rgba(255,255,255,0)', '0 0 8px rgba(255,255,255,0.8)', '0 0 0px rgba(255,255,255,0)']
                          : '0 0 0px rgba(255,255,255,0)'
                      }}
                      transition={{ 
                        duration: activeIndex === index ? 2 : 0.3,
                        repeat: activeIndex === index ? Infinity : 0
                      }}
                    >
                      {principle.number}
                    </motion.span>
                    <motion.div
                      className="h-[1px] w-12"
                      animate={{
                        backgroundColor: activeIndex === index ? 'white' : 'rgba(255,255,255,0.2)',
                        width: activeIndex === index ? '48px' : '24px',
                        boxShadow: activeIndex === index 
                          ? '0 0 8px rgba(255,255,255,0.6)' 
                          : 'none'
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.span
                      animate={{
                        color: activeIndex === index ? 'white' : 'rgba(255,255,255,0.4)',
                        textShadow: activeIndex === index 
                          ? '0 0 4px rgba(255,255,255,0.4)' 
                          : '0 0 0px rgba(255,255,255,0)'
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {principle.title}
                    </motion.span>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Center - Main Display */}
          <motion.div 
            className="lg:col-span-6 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 2.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
              >
                
                {/* Large Number */}
                <div className="relative mb-8">
                  <motion.div 
                    className="text-[6rem] md:text-[9rem] font-light leading-none opacity-8 select-none text-white"
                    animate={{ 
                      opacity: [0.08, 0.12, 0.08]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 0.08 }}
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    {currentPrinciple.number}
                  </motion.div>
                  
                  {/* Title Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.h1 
                      className="text-2xl md:text-4xl font-semibold tracking-tight text-white"
                      animate={{
                        textShadow: [
                          '0 0 0px rgba(255,255,255,0)',
                          `0 0 20px ${currentPrinciple.color}60`,
                          '0 0 0px rgba(255,255,255,0)'
                        ]
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      {currentPrinciple.title}
                    </motion.h1>
                  </div>
                </div>

                {/* Description */}
                <motion.div
                  className="max-w-md mx-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <p 
                    className="text-base leading-relaxed whitespace-pre-line text-white/80"
                  >
                    {currentPrinciple.description}
                  </p>
                </motion.div>

              </motion.div>
            </AnimatePresence>
            
          </motion.div>

          {/* Right - Keywords */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 2.4 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            
            <div className="space-y-4">
              <motion.div 
                className="text-xs font-medium text-white/40 mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 2.6 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                TAGS
              </motion.div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  className="space-y-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {currentPrinciple.keywords.map((keyword, i) => (
                    <motion.div
                      key={keyword}
                      className="text-sm font-medium text-white/60 flex items-center gap-3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <motion.div 
                        className="w-1 h-1 rounded-full"
                        style={{ backgroundColor: currentPrinciple.color }}
                        animate={{
                          scale: [1, 1.5, 1]
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                      />
                      {keyword}
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
            
          </motion.div>

        </div>

        {/* Minimal Bottom Navigation */}
        <motion.div 
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="flex gap-6">
            {principles.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                className="w-2 h-2 transition-all duration-300"
                style={{
                  backgroundColor: activeIndex === index ? 'white' : 'rgba(255,255,255,0.2)'
                }}
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.8 }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 3 + index * 0.1 }}
                viewport={{ once: true, amount: 0.5 }}
              />
            ))}
          </div>
        </motion.div>

      </motion.div>

    </section>
  )
}

export default PhilosophyDark
