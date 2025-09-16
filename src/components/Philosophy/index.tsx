'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Target, Minimize2, Heart, Users, Leaf, ArrowLeft, ArrowRight } from 'lucide-react'
import { SpecialButton } from '@/components/ui/SpecialButton'

const Philosophy = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  
  // Kreis-Radius für gleichmäßige Verteilung
  const circleRadius = 200
  
  const principles = [
    {
      id: "function",
      title: "Funktion",
      subtitle: "Zweck vor Form", 
      description: "Jedes Element hat einen klaren Grund und trägt zum Gesamterlebnis bei. Design folgt der Funktion.",
      icon: Target,
      position: { 
        x: Math.cos(-Math.PI / 2) * circleRadius, // Oben (90°)
        y: Math.sin(-Math.PI / 2) * circleRadius 
      },
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: "reduction",
      title: "Reduktion",
      subtitle: "Fokus auf das Wesentliche",
      description: "Komplexe Prozesse werden einfach und klar gestaltet, ohne Ablenkungen – immer mit Blick auf Fokus und Klarheit.",
      icon: Minimize2,
      position: { 
        x: Math.cos(-Math.PI / 2 + (2 * Math.PI / 5)) * circleRadius, // 72° weiter
        y: Math.sin(-Math.PI / 2 + (2 * Math.PI / 5)) * circleRadius 
      },
      color: "from-purple-500 to-pink-500"
    },
    {
      id: "emotion",
      title: "Emotion",
      subtitle: "Geschichten erzählen", 
      description: "Design verbindet sich auf emotionaler Ebene mit Nutzern und erzählt bedeutungsvolle Geschichten.",
      icon: Heart,
      position: { 
        x: Math.cos(-Math.PI / 2 + (4 * Math.PI / 5)) * circleRadius, // 144° weiter
        y: Math.sin(-Math.PI / 2 + (4 * Math.PI / 5)) * circleRadius 
      },
      color: "from-red-500 to-orange-500"
    },
    {
      id: "accessibility",
      title: "Barrierefreiheit",
      subtitle: "Zugänglich für alle",
      description: "Inklusives Design ermöglicht es allen Menschen, digitale Erlebnisse vollständig zu nutzen und zu verstehen.",
      icon: Users,
      position: { 
        x: Math.cos(-Math.PI / 2 + (6 * Math.PI / 5)) * circleRadius, // 216° weiter
        y: Math.sin(-Math.PI / 2 + (6 * Math.PI / 5)) * circleRadius 
      },
      color: "from-green-500 to-emerald-500"
    },
    {
      id: "sustainability",
      title: "Nachhaltigkeit",
      subtitle: "Umweltbewusstsein",
      description: "In einer digitaleren Welt mit wachsendem Energieverbrauch spielt nachhaltige Gestaltung eine wichtige Rolle.",
      icon: Leaf,
      position: { 
        x: Math.cos(-Math.PI / 2 + (8 * Math.PI / 5)) * circleRadius, // 288° weiter
        y: Math.sin(-Math.PI / 2 + (8 * Math.PI / 5)) * circleRadius 
      },
      color: "from-emerald-500 to-teal-500"
    }
  ]

  const nextPrinciple = () => {
    setActiveIndex((prev) => (prev + 1) % principles.length)
  }

  const prevPrinciple = () => {
    setActiveIndex((prev) => (prev - 1 + principles.length) % principles.length)
  }

  return (
    <section className="pt-20 pb-20 lg:pb-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-semibold text-foreground leading-tight tracking-tight mb-6 md:text-3xl">
            Design Philosophie
          </h2>
          <p className="text-xl text-muted-foreground leading-7 max-w-prose mx-auto">
            Wie sich mein Verständnis von gutem Design zusammensetzt
          </p>
        </motion.div>

        {/* Icon Navigation - horizontale Reihe */}
        <div className="flex justify-center items-center space-x-8 mb-16 h-16">
          {principles.map((principle, index) => {
            const Icon = principle.icon
            const isActive = index === activeIndex
            
            return (
              <motion.button
                key={principle.id}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.2 + index * 0.1 
                }}
                viewport={{ once: true }}
                onClick={() => setActiveIndex(index)}
                className="cursor-pointer flex items-center justify-center transition-all duration-300"
              >
                <motion.div
                  animate={{
                    scale: isActive ? 1.2 : 1,
                    opacity: isActive ? 1 : 0.6
                  }}
                  transition={{ duration: 0.3 }}
                  className={`flex items-center justify-center ${
                    isActive ? 'drop-shadow-lg' : ''
                  }`}
                >
                  <Icon className={`transition-all duration-300 ${
                    isActive 
                      ? 'w-10 h-10 text-foreground drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]' 
                      : 'w-8 h-8 text-muted-foreground hover:text-foreground'
                  }`} />
                </motion.div>
              </motion.button>
            )
          })}
        </div>

        {/* Container für Details */}
        <div className="max-w-4xl mx-auto">

          {/* Active Principle Details */}
          <div className="relative">
            {/* Navigation Buttons - SpecialButton Secondary - hidden on mobile */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden md:block">
              <SpecialButton
                variant="secondary"
                size="sm"
                icon="only"
                iconElement={<ArrowLeft className="w-4 h-4" />}
                onClick={prevPrinciple}
              />
            </div>
            
            <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden md:block">
              <SpecialButton
                variant="secondary"
                size="sm"
                icon="only"
                iconElement={<ArrowRight className="w-4 h-4" />}
                onClick={nextPrinciple}
              />
            </div>

            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-center mb-16"
            >
              <div className="max-w-2xl mx-auto px-4 md:px-16 min-h-[200px] flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {principles[activeIndex].title}
                </h3>
                
                <p className="text-lg text-muted-foreground mb-6">
                  {principles[activeIndex].subtitle}
                </p>
                <p className="text-base text-foreground leading-relaxed">
                  {principles[activeIndex].description}
                </p>
              </div>

              {/* Mobile Navigation Buttons - SpecialButton Secondary - visible only on mobile */}
              <div className="flex justify-center space-x-4 mb-8 md:hidden">
                <SpecialButton
                  variant="secondary"
                  size="sm"
                  icon="only"
                  iconElement={<ArrowLeft className="w-4 h-4" />}
                  onClick={prevPrinciple}
                />
                
                <SpecialButton
                  variant="secondary"
                  size="sm"
                  icon="only"
                  iconElement={<ArrowRight className="w-4 h-4" />}
                  onClick={nextPrinciple}
                />
              </div>
            
              {/* Progress Indicator */}
              <div className="flex justify-center mt-8 space-x-2">
                {principles.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === activeIndex 
                        ? 'bg-foreground' 
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
          
        </div>



      </div>
    </section>
  )
}

export default Philosophy
