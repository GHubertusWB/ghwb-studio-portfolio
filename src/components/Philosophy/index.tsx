'use client'

import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useTheme } from '@/contexts/ThemeContext'
import { useState } from 'react'

const Philosophy = () => {
  const { theme } = useTheme()
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  
  const philosophyPoints = [
    {
      number: "01",
      title: "Form & Funktion",
      subtitle: "Schönheit mit Zweck",
      description: "Design muss nicht nur ästhetisch ansprechend sein, sondern auch funktional. Jedes Element hat einen Grund."
    },
    {
      number: "02", 
      title: "Reduktion",
      subtitle: "Das Wesentliche",
      description: "Weniger ist mehr. Durch bewusste Reduktion entsteht Klarheit und Fokus auf das Wichtige."
    },
    {
      number: "03",
      title: "Emotion",
      subtitle: "Geschichten erzählen", 
      description: "Gutes Design berührt Menschen. Es erzählt Geschichten und schafft emotionale Verbindungen."
    }
  ]

  return (
    <section className={`min-h-screen flex items-center justify-center px-6 py-20 transition-all duration-700 ${
      theme === 'dark' 
        ? 'bg-black text-white' 
        : 'bg-white text-gray-900'
    }`}>
      <div className="max-w-5xl w-full">
        
        {/* Minimal Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className={`font-light text-5xl md:text-7xl tracking-tight mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Philosophie
          </h2>
          <div className={`w-16 h-px mx-auto ${
            theme === 'dark' ? 'bg-white/30' : 'bg-gray-900/30'
          }`} />
        </motion.div>

        {/* Interactive Cards */}
        <div className="space-y-8 md:space-y-12">
          {philosophyPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              onHoverStart={() => setActiveIndex(index)}
              onHoverEnd={() => setActiveIndex(null)}
              className={`group cursor-pointer border-l-2 pl-8 md:pl-12 py-8 transition-all duration-500 ${
                activeIndex === index 
                  ? theme === 'dark' 
                    ? 'border-white bg-white/5' 
                    : 'border-gray-900 bg-gray-900/5'
                  : theme === 'dark'
                    ? 'border-white/20 hover:border-white/40'
                    : 'border-gray-300 hover:border-gray-600'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                
                {/* Left Content */}
                <div className="flex-1">
                  <div className="flex items-baseline space-x-4 mb-2">
                    <motion.span 
                      className={`font-mono text-sm tracking-wider transition-colors duration-300 ${
                        activeIndex === index
                          ? theme === 'dark' ? 'text-white' : 'text-gray-900'
                          : theme === 'dark' ? 'text-white/50' : 'text-gray-400'
                      }`}
                      animate={{ 
                        scale: activeIndex === index ? 1.1 : 1,
                        opacity: activeIndex === index ? 1 : 0.7
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {point.number}
                    </motion.span>
                    
                    <motion.h3 
                      className={`text-3xl md:text-4xl font-light tracking-tight transition-colors duration-300 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}
                      animate={{ 
                        x: activeIndex === index ? 8 : 0
                      }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      {point.title}
                    </motion.h3>
                  </div>
                  
                  <motion.p 
                    className={`text-lg md:text-xl font-light mb-3 transition-colors duration-300 ${
                      theme === 'dark' ? 'text-white/70' : 'text-gray-600'
                    }`}
                    animate={{ 
                      opacity: activeIndex === index ? 1 : 0.8
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {point.subtitle}
                  </motion.p>
                  
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: activeIndex === index ? 'auto' : 0,
                      opacity: activeIndex === index ? 1 : 0
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className={`text-base leading-relaxed pt-2 ${
                      theme === 'dark' ? 'text-white/60' : 'text-gray-500'
                    }`}>
                      {point.description}
                    </p>
                  </motion.div>
                </div>

                {/* Right Indicator */}
                <motion.div 
                  className={`hidden md:block w-12 h-12 rounded-full border transition-all duration-300 ${
                    activeIndex === index
                      ? theme === 'dark'
                        ? 'border-white bg-white/10 scale-110'
                        : 'border-gray-900 bg-gray-900/10 scale-110'
                      : theme === 'dark'
                        ? 'border-white/20'
                        : 'border-gray-300'
                  }`}
                  animate={{ 
                    rotate: activeIndex === index ? 90 : 0,
                    scale: activeIndex === index ? 1.1 : 1
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`w-full h-full flex items-center justify-center transition-colors duration-300 ${
                    activeIndex === index
                      ? theme === 'dark' ? 'text-white' : 'text-gray-900'
                      : theme === 'dark' ? 'text-white/40' : 'text-gray-400'
                  }`}>
                    →
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Minimal Footer Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <blockquote className={`font-light text-xl md:text-2xl italic tracking-wide ${
            theme === 'dark' ? 'text-white/60' : 'text-gray-500'
          }`}>
            "Simplicity is the ultimate sophistication"
          </blockquote>
        </motion.div>

      </div>
    </section>
  )
}

export default Philosophy
