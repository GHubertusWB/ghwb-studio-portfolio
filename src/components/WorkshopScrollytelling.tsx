'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle, Brain, Lightbulb, Zap, Users, TrendingUp, Target, BarChart3, Rocket, RefreshCw } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'

export default function WorkshopScrollytelling() {
  const { theme } = useTheme()
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
          <h2 className={`text-5xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Der Workshop-Prozess</h2>
          <p className={`text-xl max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            So bringen wir KI-Integration strukturiert in Ihre Organisation
          </p>
        </motion.div>

        {/* Workshop Steps with Modern Stepper Design */}
        <div className="max-w-3xl mx-auto">
          {workflowSteps.map((step, index) => {
            const Icon = step.icon
            const isLast = index === workflowSteps.length - 1

            return (
              <div key={step.id} className="relative">
                <motion.div
                  className="flex gap-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: false, margin: '-100px' }}
                >
                  {/* Left Side: Number and Connector */}
                  <div className="flex flex-col items-center">
                    {/* Phase Circle */}
                    <div
                      className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full flex-shrink-0"
                      style={{
                        background: `linear-gradient(135deg, ${step.color}40 0%, ${step.color}20 100%)`,
                        border: `3px solid ${step.color}`,
                        boxShadow: `0 0 20px ${step.color}30, inset 0 2px 4px rgba(255,255,255,0.1)`
                      }}
                    >
                      <span className="text-lg font-bold" style={{ color: step.color }}>
                        {step.id}
                      </span>
                    </div>

                    {/* Connecting Line */}
                    {!isLast && (
                      <motion.div
                        className="w-0.5 flex-1 my-2"
                        style={{
                          background: `linear-gradient(180deg, ${step.color}60 0%, ${workflowSteps[index + 1].color}60 100%)`,
                          minHeight: '80px',
                          originY: 0
                        }}
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                        viewport={{ once: false }}
                      />
                    )}
                  </div>

                  {/* Right Side: Card Content */}
                  <div className="flex-1 pb-12">
                    <div
                      style={theme === 'dark' ? {
                        background: 'rgba(20, 25, 35, 0.6)',
                        backdropFilter: 'blur(20px) saturate(150%)',
                        WebkitBackdropFilter: 'blur(20px) saturate(150%)',
                        border: '1px solid rgba(100, 150, 200, 0.3)',
                        borderRadius: '0',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3), 0 1px 4px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                      } : {
                        background: 'rgba(255, 255, 255, 0.15)',
                        backdropFilter: 'blur(20px) saturate(180%)',
                        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                        border: '1px solid rgba(255, 255, 255, 1)',
                        borderRadius: '24px',
                        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08), 0 1px 4px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
                        filter: 'drop-shadow(0 12px 90px rgba(60, 60, 60, 0.45))'
                      }}
                      className="p-6"
                    >
                      {/* Header */}
                      <div className="flex items-center gap-3 mb-3">
                        <Icon className="w-6 h-6 flex-shrink-0" style={{ color: step.color }} />
                        <h3 className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{step.title}</h3>
                      </div>

                      <p className={`text-sm leading-relaxed mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{step.description}</p>
                      
                      {/* Details Tags */}
                      <div className="flex flex-wrap gap-2">
                        {step.details.map((detail, idx) => (
                          <span
                            key={idx}
                            className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-full ${
                              theme === 'dark' ? 'bg-gray-700/50 text-gray-300' : 'bg-gray-100 text-gray-600'
                            }`}
                          >
                            <CheckCircle className="w-3 h-3" style={{ color: step.color }} />
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            )
          })}
        </div>

        {/* Summary - Results Grid */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className={`text-2xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Ergebnis des Workshops</h3>
          <p className={`text-sm mb-10 max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Nach dem strukturierten 5-Phasen-Prozess erhalten Sie:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Klare KI-Integrationsstrategie', icon: Target, color: '#3b82f6' },
              { title: 'Priorisierte Use Cases mit ROI', icon: BarChart3, color: '#8b5cf6' },
              { title: 'Funktionierender Proof of Concept', icon: Zap, color: '#ec4899' },
              { title: 'Geschultes Team mit Change-Readiness', icon: Users, color: '#14b8a6' },
              { title: 'Roadmap für Skalierung', icon: Rocket, color: '#f59e0b' },
              { title: 'Continuous Improvement Plan', icon: RefreshCw, color: '#10b981' }
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={idx}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className="flex justify-center mb-3">
                    <Icon className="w-8 h-8" style={{ color: item.color }} />
                  </div>
                  <p className={`text-sm font-medium leading-snug ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{item.title}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
