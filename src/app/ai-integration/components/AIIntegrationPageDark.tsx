'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Zap, Users, TrendingUp, CheckCircle, Brain, Target, Code, BookOpen } from 'lucide-react'
import { useState, useEffect } from 'react'
import Footer from '@/components/Footer'
import FloatingClouds from '@/components/FloatingClouds'
import FloatingContactButton from '@/components/FloatingContactButton'
import WorkshopScrollytelling from '@/components/WorkshopScrollytelling'
import { Button } from '@/components/ui/Button'
import { SpecialButton } from '@/components/ui/SpecialButton'
import Link from 'next/link'

export default function AIIntegrationPageDark() {
  const [currentTime, setCurrentTime] = useState('')
  const [hoveredService, setHoveredService] = useState<number | null>(null)
  
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString('de-DE', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

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
    { title: 'Effizienzsteigerung', description: 'Automatisierung repetitiver Aufgaben spart Zeit und Kosten' },
    { title: 'Bessere Entscheidungen', description: 'Datengestützte Insights und Prognosen für strategische Entscheidungen' },
    { title: 'Innovation & Wettbewerb', description: 'Neue Geschäftsmöglichkeiten durch KI-gestützte Features' },
    { title: 'Mitarbeiter-Empowerment', description: 'Ihr Team fokussiert auf strategische, kreative Aufgaben' },
    { title: 'Skalierbarkeit', description: 'Wachstum ohne proportionalen Anstieg der Kosten' },
    { title: 'Kundenerlebnis', description: 'Personalisierte, schnellere und bessere Services' }
  ]

  return (
    <div className="min-h-screen text-gray-50 relative overflow-hidden bg-gray-950">
      
      {/* HERO SECTION */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{ zIndex: 20 }}
      >
        <FloatingClouds />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-950 to-black" />

        {/* Subtle geometric background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 5 }}>
          <motion.div
            className="relative w-full h-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.08, scale: 1 }}
            transition={{ duration: 3, delay: 1 }}
          >
            <motion.div 
              className="absolute top-20 left-20 w-32 h-32 border-2 border-gray-700"
              style={{ transform: 'rotate(45deg)' }}
              initial={{ rotate: 0, scale: 0 }}
              animate={{ rotate: 45, scale: 1 }}
              transition={{ duration: 2, delay: 1.5 }}
            />
            <motion.div 
              className="absolute bottom-32 right-32 w-24 h-24 bg-gray-800 rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, delay: 2 }}
            />
            <motion.div 
              className="absolute top-32 right-20 w-40 h-1 bg-gray-800"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 1.8 }}
            />
            <motion.div 
              className="absolute bottom-40 left-32 w-1 h-40 bg-gray-800"
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
              className="text-base text-gray-400 leading-7 mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              suppressHydrationWarning
            >
              KI-Integration • Workshops • Prozessoptimierung
            </motion.p>

            <motion.h1 
              className="text-6xl font-extrabold text-white leading-tight tracking-tight mb-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
            >
              <span className="block">AI</span>
              <span className="block">INTEGRATION</span>
            </motion.h1>

            <motion.p 
              className="text-base text-gray-400 leading-7 max-w-2xl mx-auto mb-16"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              KI in Ihre Geschäftsprozesse integrieren, Effizienz steigern und neue Möglichkeiten schaffen.<br/>
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
      <section id="services-section" className="relative py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4 text-white">Unsere Leistungen</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Von der Analyse über Workshops bis zur praktischen Implementierung
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  className="p-6 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-blue-500 transition-all cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                  whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.2)' }}
                >
                  <motion.div
                    className="p-3 bg-blue-900/30 rounded-lg w-fit mb-4 border border-blue-700/50"
                    animate={{ 
                      scale: hoveredService === index ? 1.1 : 1,
                      rotate: hoveredService === index ? 5 : 0
                    }}
                  >
                    <Icon className="w-6 h-6 text-blue-400" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="relative py-20 px-4 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4 text-white">Was Sie erreichen</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Die konkreten Vorteile von strukturierter KI-Integration
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-lg bg-gray-900 border border-gray-700 hover:border-blue-500 transition-all"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="flex items-center gap-3 mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                  <h3 className="text-lg font-bold text-white">{benefit.title}</h3>
                </motion.div>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKSHOP SCROLLYTELLING SECTION */}
      <section id="workshop-section" className="relative py-20 px-4 bg-gray-900">
        <WorkshopScrollytelling />
      </section>

      {/* WHY ME SECTION */}
      <section className="relative py-20 px-4 bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4 text-white">Warum mit mir?</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Brain,
                title: 'Technical Expertise',
                description: 'Tiefes Verständnis von AI, Machine Learning und praktischer Integration in bestehende Systeme'
              },
              {
                icon: Users,
                title: 'Change Leadership',
                description: 'Erfahrung in der Führung von Transformationsprozessen und Change Management in großen Organisationen'
              },
              {
                icon: BookOpen,
                title: 'Workshop-Profi',
                description: 'Strukturierte, ergebnisorientierte Workshops mit bewährten Methoden und praktischen Outcomes'
              },
              {
                icon: Target,
                title: 'Business Focus',
                description: 'Alles mit Fokus auf ROI und messbare Business-Impact, nicht nur Tech für Tech'
              }
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={idx}
                  className="p-6 bg-gray-900 rounded-lg border border-gray-700 hover:border-blue-500 transition-all"
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ boxShadow: '0 20px 40px rgba(59, 130, 246, 0.15)' }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-900/30 rounded-lg flex-shrink-0 border border-blue-700/50">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="relative py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold mb-6 text-white">Bereit für KI-Integration?</h2>
            <p className="text-xl text-gray-400 mb-8">
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
