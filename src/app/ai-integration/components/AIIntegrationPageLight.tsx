'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Zap, Users, TrendingUp, CheckCircle, Brain, Target, Code, BookOpen, Sparkles, Clock, BarChart3, Rocket, Smile, ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import Footer from '@/components/Footer'
import FloatingClouds from '@/components/FloatingClouds'
import FloatingContactButton from '@/components/FloatingContactButton'
import WorkshopScrollytelling from '@/components/WorkshopScrollytelling'
import { SpecialButton } from '@/components/ui/SpecialButton'

export default function AIIntegrationPageLight() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  const services = [
    { 
      icon: Brain, 
      title: 'Prozess-Analyse & Strategy', 
      description: 'Tiefgreifende Analyse Ihrer Geschäftsprozesse zur Identifikation von KI-Potentialen und Optimierungsmöglichkeiten.' 
    },
    { 
      icon: Lightbulb, 
      title: 'AI-Workshop & Ideation', 
      description: 'Strukturierte Workshops mit Ihrem Team zu KI-Use Cases, mit praktischen Beispielen und brauchbaren Insights.' 
    },
    { 
      icon: Code, 
      title: 'Proof of Concept', 
      description: 'Schnelle Umsetzung eines MVP oder PoC für Ihren wertvollsten Use Case zur Validierung von Ideen.' 
    },
    { 
      icon: Users, 
      title: 'Team Training & Change Mgmt', 
      description: 'Umfassendes Training Ihres Teams in KI-Grundlagen und Handhabung der neuen Tools sowie Change-Management-Support.' 
    },
    { 
      icon: TrendingUp, 
      title: 'Implementierung & Scaling', 
      description: 'Begleitung bei der schrittweisen Implementierung und Skalierung der KI-Lösungen in Ihren Prozessen.' 
    },
    { 
      icon: Target, 
      title: 'Optimierung & Monitoring', 
      description: 'Kontinuierliche Überwachung von Performance-Metriken und iterative Optimierung der KI-Systeme.' 
    }
  ]

  const benefits = [
    { icon: Clock, title: 'Effizienzsteigerung', description: 'Automatisierung repetitiver Aufgaben spart Zeit und Kosten', color: '#3b82f6' },
    { icon: BarChart3, title: 'Bessere Entscheidungen', description: 'Datengestützte Insights und Prognosen für strategische Entscheidungen', color: '#8b5cf6' },
    { icon: Rocket, title: 'Innovation & Wettbewerb', description: 'Neue Geschäftsmöglichkeiten durch KI-gestützte Features', color: '#ec4899' },
    { icon: Sparkles, title: 'Mitarbeiter-Empowerment', description: 'Ihr Team fokussiert auf strategische, kreative Aufgaben', color: '#14b8a6' },
    { icon: ArrowUpRight, title: 'Skalierbarkeit', description: 'Wachstum ohne proportionalen Anstieg der Kosten', color: '#f59e0b' },
    { icon: Smile, title: 'Kundenerlebnis', description: 'Personalisierte, schnellere und bessere Services', color: '#10b981' }
  ]

  return (
    <div className="min-h-screen text-gray-900 relative overflow-hidden bg-gray-50">
      
      {/* HERO SECTION */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{ zIndex: 20 }}
      >
        <FloatingClouds />
        <div className="absolute inset-0 bg-gradient-to-b from-sky-200 to-white" />

        {/* Subtle geometric background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 5 }}>
          <motion.div
            className="relative w-full h-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.06, scale: 1 }}
            transition={{ duration: 3, delay: 1 }}
          >
            <motion.div 
              className="absolute top-20 left-20 w-32 h-32 border-2 border-gray-300"
              style={{ transform: 'rotate(45deg)' }}
              initial={{ rotate: 0, scale: 0 }}
              animate={{ rotate: 45, scale: 1 }}
              transition={{ duration: 2, delay: 1.5 }}
            />
            <motion.div 
              className="absolute bottom-32 right-32 w-24 h-24 bg-gray-200 rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, delay: 2 }}
            />
            <motion.div 
              className="absolute top-32 right-20 w-40 h-1 bg-gray-200"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 1.8 }}
            />
            <motion.div 
              className="absolute bottom-40 left-32 w-1 h-40 bg-gray-200"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.5, delay: 2.2 }}
            />
          </motion.div>
        </div>

        <div className="relative text-center px-6 max-w-4xl mx-auto" style={{ zIndex: 40 }}>
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.p 
              className="text-base text-muted-foreground leading-7 mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              suppressHydrationWarning
            >
              KI-Integration • Workshops • Prozessoptimierung
            </motion.p>

            <motion.h1 
              className="text-6xl font-extrabold text-foreground leading-tight tracking-tight mb-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
            >
              <span className="block">AI</span>
              <span className="block">INTEGRATION</span>
            </motion.h1>

            <motion.p 
              className="text-base text-muted-foreground leading-7 max-w-2xl mx-auto mb-16"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              KI in Ihre Geschätsprozesse integrieren, Effizienz steigern und neue Möglichkeiten schaffen.<br/>
              Mit strukturierten Workshops und bewährten Methoden.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <SpecialButton 
                variant="secondary"
                size="sm"
                onClick={() => { const section = document.getElementById('services-section'); if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' }) }}
              >
                <Lightbulb className="w-4 h-4 mr-2" />
                Leistungen
              </SpecialButton>

              <SpecialButton 
                variant="secondary"
                size="sm"
                onClick={() => { const section = document.getElementById('workshop-section'); if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' }) }}
              >
                <TrendingUp className="w-4 h-4 mr-2" />
                Workshop-Prozess
              </SpecialButton>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* SERVICES SECTION */}
      <section id="services-section" className="relative py-32 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">Meine Leistungen</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Von der Analyse über Workshops bis zur praktischen Implementierung
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex flex-col items-center text-center gap-4">
                    <Icon className="w-10 h-10" style={{ color: '#3b82f6' }} />
                    <div>
                      <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="relative py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4">Was Sie erreichen</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Die konkreten Vorteile von strukturierter KI-Integration
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={index}
                  className="p-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  style={{
                    background: 'rgba(255, 255, 255, 0.15)',
                    backdropFilter: 'blur(20px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                    border: '1px solid rgba(255, 255, 255, 1)',
                    borderRadius: '24px',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08), 0 1px 4px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
                    filter: 'drop-shadow(0 12px 90px rgba(60, 60, 60, 0.45))'
                  }}
                >
                  <div className="flex items-start gap-4">
                    <Icon className="w-6 h-6 flex-shrink-0" style={{ color: benefit.color }} />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* WORKSHOP SCROLLYTELLING SECTION */}
      <section id="workshop-section" className="relative py-32 px-4 bg-white">
        <WorkshopScrollytelling />
      </section>

      {/* CONTACT SECTION */}
      <section className="relative py-32 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold mb-6">Bereit für KI-Integration?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Lassen Sie uns einen kostenlosen Ersttermin vereinbaren und Ihre KI-Potenziale erkunden.
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <SpecialButton 
                variant="primary"
                size="sm"
                onClick={() => { 
                  const button = document.querySelector('[data-contact-trigger]') as HTMLElement
                  button?.click()
                }}
              >
                <Zap className="w-4 h-4 mr-2" />
                Termin vereinbaren
              </SpecialButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FLOATING ELEMENTS */}
      <FloatingContactButton />
      <Footer />
    </div>
  )
}
