'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Palette, Layers, Heart } from 'lucide-react'

interface CollaborationSectionProps {
  onCardClick: (subject: string) => void
}

export default function CollaborationSection({ onCardClick }: CollaborationSectionProps) {
  const collaborationTypes = [
    {
      id: 'Auftragsarbeiten',
      icon: Palette,
      title: 'Auftragsarbeiten',
      description: 'Individuelle Kunstwerke und digitale Installationen nach Ihren spezifischen Wünschen',
      gradient: 'from-red-500/20 to-yellow-500/20'
    },
    {
      id: 'Kollaborationen',
      icon: Layers,
      title: 'Kollaborationen',
      description: 'Strategische Partnerschaften für innovative Projekte und gemeinsame Ausstellungen',
      gradient: 'from-blue-500/20 to-purple-500/20'
    },
    {
      id: 'Workshops',
      icon: Heart,
      title: 'Workshops',
      description: 'Kreative Workshops zu digitaler Kunst, AI-Tools und experimentellen Techniken',
      gradient: 'from-green-500/20 to-blue-500/20'
    }
  ]

  return (
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
          <h2 className="text-4xl font-semibold text-foreground leading-tight tracking-tight md:text-3xl mb-6">
            Zusammenarbeit
          </h2>
          <p className="text-base text-muted-foreground leading-7 max-w-2xl mx-auto">
            Interesse an einer kreativen Zusammenarbeit? Lassen Sie uns über Ihr Projekt sprechen.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {collaborationTypes.map((type, index) => {
            const Icon = type.icon
            return (
              <motion.div
                key={type.id}
                className="relative p-8 rounded-2xl bg-background border border-border/50 hover:border-border duration-300 h-full group cursor-pointer"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                onClick={() => onCardClick(type.id)}
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${type.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Icon className="w-8 h-8 text-foreground" />
                  </motion.div>

                  <h3 className="text-3xl font-semibold text-foreground leading-snug tracking-tight md:text-2xl mb-4">
                    {type.title}
                  </h3>

                  <p className="text-base text-muted-foreground leading-7 mb-6">
                    {type.description}
                  </p>

                  <motion.div
                    className="text-primary hover:text-secondary transition-colors underline underline-offset-2 font-medium"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    Mehr erfahren
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}
