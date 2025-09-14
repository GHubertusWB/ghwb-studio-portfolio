'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Target, Minimize2, Heart, Users, Leaf } from 'lucide-react'

const Philosophy = () => {
  const principles = [
    {
      id: "function",
      title: "Funktion",
      subtitle: "Zweck vor Form", 
      description: "Jedes Element hat einen klaren Grund und trägt zum Gesamterlebnis bei. Design folgt der Funktion.",
      icon: Target,
      position: { x: 0, y: -120 },
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: "reduction",
      title: "Reduktion",
      subtitle: "Fokus auf das Wesentliche",
      description: "Komplexe Prozesse werden einfach und klar gestaltet, ohne Ablenkungen – immer mit Blick auf Fokus und Klarheit.",
      icon: Minimize2,
      position: { x: 104, y: -37 },
      color: "from-purple-500 to-pink-500"
    },
    {
      id: "emotion",
      title: "Emotion",
      subtitle: "Geschichten erzählen", 
      description: "Design verbindet sich auf emotionaler Ebene mit Nutzern und erzählt bedeutungsvolle Geschichten.",
      icon: Heart,
      position: { x: 64, y: 97 },
      color: "from-red-500 to-orange-500"
    },
    {
      id: "accessibility",
      title: "Barrierefreiheit",
      subtitle: "Zugänglich für alle",
      description: "Inklusives Design ermöglicht es allen Menschen, digitale Erlebnisse vollständig zu nutzen und zu verstehen.",
      icon: Users,
      position: { x: -64, y: 97 },
      color: "from-green-500 to-emerald-500"
    },
    {
      id: "sustainability",
      title: "Nachhaltigkeit",
      subtitle: "Umweltbewusstsein",
      description: "In einer digitaleren Welt mit wachsendem Energieverbrauch spielt nachhaltige Gestaltung eine wichtige Rolle.",
      icon: Leaf,
      position: { x: -104, y: -37 },
      color: "from-emerald-500 to-teal-500"
    }
  ]

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

        {/* Central Infographic */}
        <div className="relative flex items-center justify-center min-h-[600px] mb-16">
          
          {/* Central Core */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute z-10 w-32 h-32 rounded-full bg-background border-2 border-foreground flex items-center justify-center"
          >
            <span className="text-sm font-bold text-foreground">DESIGN</span>
          </motion.div>

          {/* Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
            {principles.map((principle, index) => (
              <motion.line
                key={`line-${principle.id}`}
                x1="200"
                y1="200"
                x2={200 + principle.position.x}
                y2={200 + principle.position.y}
                stroke="currentColor"
                strokeWidth="1"
                className="text-foreground opacity-20"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
              />
            ))}
          </svg>

          {/* Principle Nodes */}
          {principles.map((principle, index) => {
            const Icon = principle.icon
            const isLeftSide = principle.position.x < 0
            
            return (
              <motion.div
                key={principle.id}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.8 + index * 0.1 
                }}
                viewport={{ once: true }}
                className="absolute group cursor-pointer"
                style={{
                  left: `calc(50% + ${principle.position.x}px - 3rem)`,
                  top: `calc(50% + ${principle.position.y}px - 3rem)`
                }}
              >
                {/* Node Circle */}
                <div className="w-24 h-24 rounded-full bg-background border-2 border-foreground flex items-center justify-center group-hover:bg-muted/10 transition-colors">
                  <Icon className="w-8 h-8 text-foreground" />
                </div>

                {/* Label positioned next to circle */}
                <div className={`absolute top-1/2 transform -translate-y-1/2 ${
                  isLeftSide ? 'left-full ml-4' : 'right-full mr-4'
                } text-${isLeftSide ? 'left' : 'right'}`}>
                  <h3 className="text-sm font-semibold text-foreground mb-1 whitespace-nowrap">
                    {principle.title}
                  </h3>
                  <p className="text-xs text-muted-foreground whitespace-nowrap">
                    {principle.subtitle}
                  </p>
                </div>

                {/* Side Info Panel */}
                <div className={`absolute top-1/2 transform -translate-y-1/2 ${
                  isLeftSide ? 'left-full ml-8' : 'right-full mr-8'
                } opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none`}>
                  <div className="bg-background border border-foreground p-4 max-w-xs">
                    <p className="text-sm text-foreground leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="w-12 h-px bg-border mx-auto mb-6" />
          <blockquote className="text-lg italic text-muted-foreground">
            "Gutes Design ist so wenig Design wie möglich"
          </blockquote>
          <cite className="block text-sm mt-2 text-muted-foreground/60">
            — Dieter Rams
          </cite>
        </motion.div>

      </div>
    </section>
  )
}

export default Philosophy
