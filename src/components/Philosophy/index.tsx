'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/contexts/ThemeContext'
import { Layers, Minus, Heart, Users } from 'lucide-react'

const Philosophy = () => {
  const { theme } = useTheme()
  
  const philosophyPoints = [
    {
      number: "01",
      title: "Form & Funktion",
      subtitle: "Schönheit mit Zweck",
      description: "Design muss nicht nur ästhetisch ansprechend sein, sondern auch funktional. Jedes Element hat einen Grund und trägt zur Gesamterfahrung bei.",
      icon: Layers
    },
    {
      number: "02", 
      title: "Reduktion",
      subtitle: "Das Wesentliche",
      description: "Weniger ist mehr. Durch bewusste Reduktion entsteht Klarheit und Fokus auf das Wichtige, ohne unnötige Ablenkungen.",
      icon: Minus
    },
    {
      number: "03",
      title: "Emotion",
      subtitle: "Geschichten erzählen", 
      description: "Gutes Design berührt Menschen auf emotionaler Ebene. Es erzählt Geschichten und schafft bedeutungsvolle Verbindungen.",
      icon: Heart
    },
    {
      number: "04",
      title: "Barrierefreiheit",
      subtitle: "Zugänglich für alle",
      description: "Inklusives Design ermöglicht es allen Menschen, unabhängig von ihren Fähigkeiten, digitale Erlebnisse vollständig zu nutzen und zu verstehen.",
      icon: Users
    }
  ]

  return (
    <section className="pt-20 pb-20 lg:pb-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Standard Website Header */}
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
            Die Grundprinzipien meiner kreativen Arbeit
          </p>
        </motion.div>

        {/* Minimalistisches Icon-basiertes Design */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.1, delayChildren: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {philosophyPoints.map((point, index) => {
            const IconComponent = point.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: index * 0.1 
                }}
                viewport={{ once: true }}
                className="group p-8 rounded-lg border border-border/30 bg-background/60 backdrop-blur-sm transition-all duration-300"
              >
                {/* Icon Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-foreground" />
                    </div>
                    <span className="text-xs font-mono tracking-widest text-muted-foreground">
                      {point.number}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-foreground">
                    {point.title}
                  </h3>
                  
                  <p className="text-lg text-muted-foreground font-light">
                    {point.subtitle}
                  </p>
                  
                  <div className="pt-3 border-t border-border/20">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Minimalistisches Footer Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
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
