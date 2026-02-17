'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Zap, Users, TrendingUp, CheckCircle, Brain, Target, Code, BookOpen, Sparkles, Clock, BarChart3, Rocket, Smile, ArrowUpRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import Footer from '@/components/Footer'
import FloatingContactButton from '@/components/FloatingContactButton'
import WorkshopScrollytelling from '@/components/WorkshopScrollytelling'
import { SpecialButtonDark } from '@/components/ui/SpecialButtonDark'

export default function AIIntegrationPageDark() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)
  const [currentTime, setCurrentTime] = useState('')

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
    { icon: Clock, title: 'Effizienzsteigerung', description: 'Automatisierung repetitiver Aufgaben spart Zeit und Kosten', color: '#3b82f6' },
    { icon: BarChart3, title: 'Bessere Entscheidungen', description: 'Datengestützte Insights und Prognosen für strategische Entscheidungen', color: '#8b5cf6' },
    { icon: Rocket, title: 'Innovation & Wettbewerb', description: 'Neue Geschäftsmöglichkeiten durch KI-gestützte Features', color: '#ec4899' },
    { icon: Sparkles, title: 'Mitarbeiter-Empowerment', description: 'Ihr Team fokussiert auf strategische, kreative Aufgaben', color: '#14b8a6' },
    { icon: ArrowUpRight, title: 'Skalierbarkeit', description: 'Wachstum ohne proportionalen Anstieg der Kosten', color: '#f59e0b' },
    { icon: Smile, title: 'Kundenerlebnis', description: 'Personalisierte, schnellere und bessere Services', color: '#10b981' }
  ]

  return (
    <div className="min-h-screen text-white relative overflow-hidden" style={{ background: 'linear-gradient(to bottom right, var(--background), var(--background), rgba(42, 47, 54, 0.2))' }}>
      {/* HERO HUD */}
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} className="min-h-screen flex items-center justify-center relative" style={{ zIndex: 20 }}>
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 15 }}>
          {/* HUD SVG */}
          <motion.div className="relative w-full h-full" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 0.4, scale: 1 }} transition={{ duration: 2, delay: 1 }}>
            <svg width="100vw" height="100vh" viewBox="0 0 1920 1080" className="drop-shadow-lg" style={{ filter: `drop-shadow(0 0 20px white)` }}>
              <motion.path d="M 520 540 A 440 440 0 1 1 1400 540" fill="none" stroke="white" strokeWidth="1.5" strokeDasharray="5,10" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, delay: 1.5 }} />
              <motion.path d="M 560 540 A 400 400 0 1 1 1360 540" fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.6" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.5, delay: 2 }} />
            </svg>
          </motion.div>
        </div>
        <div className="relative text-center px-6 max-w-6xl" style={{ zIndex: 25 }}>
          <motion.div className="relative" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: 0.8 }}>
            <motion.h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 relative text-white" style={{ textShadow: '0 0 30px rgba(255, 255, 255, 0.4)' }} initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 1.2 }}>
              <span className="text-cyan-400/80 text-lg block mb-2 tracking-widest font-mono">GHWB.AI.SYSTEM:</span>
              AI INTEGRATION
            </motion.h1>
            <motion.p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed max-w-3xl mx-auto relative" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 1.4 }}>
              KI in Ihre Geschäftsprozesse integrieren, Effizienz steigern und neue Möglichkeiten schaffen. Mit strukturierten Workshops und bewährten Methoden.
            </motion.p>
            <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 1.6 }} className="flex flex-col sm:flex-row gap-4 justify-center">
              <SpecialButtonDark
                variant="secondary"
                size="base"
                icon="left"
                iconElement={<Sparkles className="w-4 h-4" />}
                onClick={() => { 
                  const section = document.getElementById('services-section'); 
                  if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' }) 
                }}
              >
                Leistungen
              </SpecialButtonDark>
              <SpecialButtonDark
                variant="primary"
                size="base"
                onClick={() => { 
                  const section = document.getElementById('workshop-section'); 
                  if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' }) 
                }}
              >
                Workshop-Prozess
              </SpecialButtonDark>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* SERVICES SECTION */}
      <section id="services-section" className="relative py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 text-white">Meine Leistungen</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
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
                      <h3 className="text-lg font-bold mb-2 text-white">{service.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="relative py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 text-white">Was Sie erreichen</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Die konkreten Vorteile von strukturierter KI-Integration
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  style={{
                    background: 'rgba(20, 25, 35, 0.6)',
                    backdropFilter: 'blur(20px) saturate(150%)',
                    WebkitBackdropFilter: 'blur(20px) saturate(150%)',
                    border: '1px solid rgba(100, 150, 200, 0.3)',
                    borderRadius: '0',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3), 0 1px 4px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                  }}
                  className="p-6"
                >
                  <div className="flex items-start gap-4">
                    <Icon className="w-6 h-6 flex-shrink-0" style={{ color: benefit.color }} />
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* WORKSHOP SCROLLYTELLING SECTION */}
      <section id="workshop-section" className="relative py-32 px-4">
        <WorkshopScrollytelling />
      </section>

      {/* CONTACT SECTION */}
      <section className="relative py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold mb-8 text-white">Bereit für KI-Integration?</h2>
            <p className="text-xl text-gray-400 mb-8">
              Lassen Sie uns einen kostenlosen Ersttermin vereinbaren und Ihre KI-Potenziale erkunden.
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <SpecialButtonDark
                variant="primary"
                size="base"
                onClick={() => { 
                  const event = new CustomEvent('openContactModal');
                  window.dispatchEvent(event);
                }}
              >
                Termin vereinbaren
              </SpecialButtonDark>
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
