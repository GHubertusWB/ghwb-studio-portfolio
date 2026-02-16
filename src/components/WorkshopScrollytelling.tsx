'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle, Brain, Lightbulb, Zap, Users, TrendingUp } from 'lucide-react'

export default function WorkshopScrollytelling() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center']
  })

  const workflowSteps = [
    {
      id: 1,
      title: 'Analyse & Discovery',
      description: 'Wir analysieren Ihre aktuellen Geschäts- und Projektprozesse, identifizieren Schmerzpunkte und unrealisierte Potenziale für KI-Einsätze.',
      icon: Brain,
      color: '#4A90E2',
      details: [
        'Workshop mit Stakeholdern',
        'Prozess-Mapping',
        'Chance-Identifikation'
      ]
    },
    {
      id: 2,
      title: 'Strategie & Roadmap',
      description: 'Basierend auf den Erkenntnissen erstellen wir eine priorisierte KI-Integrationsstrategie mit konkreten Use Cases und Implementierungs-Roadmap.',
      icon: Lightbulb,
      color: '#FF8C42',
      details: [
        'Use-Case Priorisierung',
        'ROI-Berechnung',
        'Implementierungs-Roadmap'
      ]
    },
    {
      id: 3,
      title: 'Proof of Concept',
      description: 'Wir entwickeln einen PoC für den wertvollsten Use Case, um Machbarkeit und Impact zu demonstrieren und Learning zu generieren.',
      icon: Zap,
      color: '#7C3AED',
      details: [
        'Rapid Prototyping',
        'Technologie-Bewertung',
        'MVP Development'
      ]
    },
    {
      id: 4,
      title: 'Training & Change Management',
      description: 'Umfassende Schulungen für Ihr Team und eine Change-Management-Strategie für erfolgreiche Adoption der neuen KI-gestützten Prozesse.',
      icon: Users,
      color: '#10B981',
      details: [
        'Hands-on Trainings',
        'Dokumentation',
        'Adoption-Support'
      ]
    },
    {
      id: 5,
      title: 'Roll-out & Optimierung',
      description: 'Schrittweise Skalierung auf weitere Prozesse, kontinuierliches Monitoring und Optimierung der KI-Modelle basierend auf realen Daten.',
      icon: TrendingUp,
      color: '#EC4899',
      details: [
        'Phased Roll-out',
        'Performance Tracking',
        'Continuous Improvement'
      ]
    }
  ]

  return (
    <div ref={containerRef} className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-4">Der Workshop-Prozess</h2>
          <p className="text-xl text-muted-foreground">
            So bringen wir KI-Integration strukturiert in Ihre Organisation
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform -translate-x-1/2"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            style={{ originY: 0 }}
          />

          {/* Steps */}
          <div className="space-y-16">
            {workflowSteps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={step.id}
                  className={`flex items-center gap-8 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: false, margin: '-100px' }}
                >
                  {/* Content */}
                  <div className="flex-1">
                    <motion.div
                      className="bg-gradient-to-br from-background to-muted p-6 rounded-lg border border-border hover:border-primary/50 transition-all"
                      whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <motion.div
                          className="p-2 rounded-lg"
                          style={{ backgroundColor: `${step.color}20` }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Icon 
                            className="w-5 h-5" 
                            style={{ color: step.color }}
                          />
                        </motion.div>
                        <h3 className="text-2xl font-bold">{step.title}</h3>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">{step.description}</p>
                      
                      <div className="grid grid-cols-1 gap-2">
                        {step.details.map((detail, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-center gap-2 text-sm"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 + 0.3 }}
                          >
                            <CheckCircle className="w-4 h-4" style={{ color: step.color }} />
                            <span>{detail}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Timeline Circle */}
                  <motion.div
                    className="w-16 h-16 rounded-full border-4 flex items-center justify-center flex-shrink-0 bg-background relative z-10"
                    style={{ borderColor: step.color }}
                    whileHover={{ scale: 1.2, boxShadow: `0 0 30px ${step.color}` }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 100 }}
                    viewport={{ once: false }}
                  >
                    <motion.div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${step.color}20` }}
                    >
                      <span className="font-bold text-sm" style={{ color: step.color }}>
                        {step.id}
                      </span>
                    </motion.div>
                  </motion.div>

                  {/* Empty Space */}
                  <div className="flex-1" />
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Summary */}
        <motion.div
          className="mt-20 p-8 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-lg border border-border"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-4">Ergebnis des Workshops</h3>
          <p className="text-muted-foreground mb-4">
            Nach dem strukturierten 5-Phasen-Prozess erhalten Sie:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              'Klare KI-Integrationsstrategie',
              'Priorisierte Use Cases mit ROI',
              'Funktionierender Proof of Concept',
              'Geschultes Team mit Change-Readiness',
              'Roadmap für Skalierung',
              'Continuous Improvement Plan'
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>{item}</span>
              </motion.div>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  )
}
