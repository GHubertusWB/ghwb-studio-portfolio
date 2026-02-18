'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { ArrowLeft, Monitor, Smartphone, Palette, Users, Zap, Layers, Sparkles, Eye, CheckCircle } from 'lucide-react'
import Footer from '@/components/Footer'
import FloatingContactButton from '@/components/FloatingContactButton'
import SkillsCircleChartDark from './SkillsCircleChartDark'
import MobileSkills from './MobileSkills'
import TechStackSectionDark from './TechStackSectionDark'
import UXServicesGrid from './UXServicesGrid'
import { Button } from '@/components/ui/Button'
import { SpecialButtonDark } from '@/components/ui/SpecialButtonDark'
import Divider from '@/components/ui/Divider'

export default function UXUIPageDark() {
  const [currentTime, setCurrentTime] = useState('')
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null)
  
  const skills = [
    { icon: Monitor, title: 'Enterprise Interface-Systeme', description: 'Komplexe Softwarelösungen für Großunternehmen wie Infineon, Bundesdruckerei und Medizinische Dienste.' },
    { icon: Smartphone, title: 'Command Dashboard Apps', description: 'KPI-Management-Terminals und Mobile Interfaces für Führungskräfte mit fokussiertem UX Design.' },
    { icon: Palette, title: 'Corporate Design Systems', description: 'Skalierbare Komponenten-Bibliotheken und Corporate Interface-Protokolle für nachhaltige Markenführung.' },
    { icon: Users, title: 'Accessibility Command Center', description: 'WCAG-konforme Barrierefreiheits-Integration mit 3+ Jahren Spezialisierung in diesem Sektor.' },
    { icon: Zap, title: 'Agile Mission Control', description: 'Scrum Product Owner & Master Operations in 21 Mio. Euro Enterprise-Projekten.' },
    { icon: Layers, title: 'Requirements Engineering', description: 'User Research Terminals, Workshop-Koordination und stakeholder-orientierte Anforderungsanalyse.' }
  ]
  const prozess = [
    { icon: Eye, title: 'Research & Analyse', desc: 'Nutzerbedürfnisse und Ziele verstehen' },
    { icon: Palette, title: 'Konzept & Wireframes', desc: 'Struktur und erste visuelle Ideen' },
    { icon: Sparkles, title: 'UI Design', desc: 'Visuelle Ausarbeitung und Prototyping' },
    { icon: CheckCircle, title: 'Testing & Launch', desc: 'Usability-Tests und Go-Live' }
  ]
  const projekte = [
    {
      title: 'MD-IT GmbH - Medizinische Dienste',
      category: 'Enterprise Mission',
      image: '/placeholder-project-1.jpg',
      description: 'Im Rahmen dieses Projekts wurde eine neue, bundesweit einsetzbare Branchensoftware für die Medizinischen Dienste konzipiert und gestaltet. Ziel war die Unterstützung komplexer Beratungs- und Gutachterprozesse durch eine moderne, konsistente und nutzerfreundliche Anwendung. Kernbestandteile des Projekts waren die Einführung eines zentralen Designsystems sowie die Überführung umfangreicher fachlicher Richtlinien in klar strukturierte, barrierearme Formulare und digitale Prozesse. Dabei lag der Fokus auf hoher Usability, Konsistenz über verschiedene Anwendungsfälle hinweg und der Entlastung der Anwender:innen im täglichen Arbeitsablauf.',
      details: 'UX/UI Design, Usability Testing, Design System, Scrum Product Owner'
    },
    {
      title: 'Württembergische Versicherung',
      category: 'Accessibility Protocol',
      image: '/placeholder-project-2.jpg',
      description: 'Barrierefreiheits-Optimierung der Versicherungsplattform nach WCAG-Richtlinien.',
      details: 'Accessibility Audit, UX Research, Dokumentation, Frontend-Beratung'
    },
    {
      title: 'Infineon - Management Terminal',
      category: 'Command Interface',
      image: '/placeholder-project-3.jpg',
      description: 'KPI-Management App für Führungskräfte zur schnellen Überprüfung wichtiger Unternehmensdaten.',
      details: 'Requirements Engineering, Wireframing, UI Design, Usability Testing'
    },
    {
      title: 'KION Group - Component Matrix',
      category: 'Design System',
      image: '/placeholder-project-4.jpg',
      description: 'Entwicklung neuer UI-Komponenten für die Website der KION Group.',
      details: 'Component Design, Style Guide, Frontend-Integration'
    },
    {
      title: 'Bundesdruckerei - Accessibility Hub',
      category: 'Consulting Mission',
      image: '/placeholder-project-5.jpg',
      description: 'Beratung und Unterstützung für digitale Barrierefreiheit im UX/UI Team.',
      details: 'Knowledge Management, Workshop-Leitung, Marketing-Konzeption'
    },
    {
      title: 'Charly Group - Corporate Interface',
      category: 'Brand System',
      image: '/placeholder-project-6.jpg',
      description: 'Komplette CI und Webauftritt für neugegründete Hotelgruppe mit Atomic Design Prinzip.',
      details: 'Corporate Identity, Design System, Projektleitung, Scrum Master'
    }
  ]

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString('de-DE', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen text-white relative overflow-hidden" style={{ background: 'linear-gradient(to bottom right, var(--background), var(--background), rgba(42, 47, 54, 0.2))' }}>
      {/* HERO HUD */}
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} className="min-h-screen flex items-center justify-center relative" style={{ zIndex: 20 }}>
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 15 }}>
          {/* HUD SVG wie Art/Photography */}
          <motion.div className="relative w-full h-full" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 0.4, scale: 1 }} transition={{ duration: 2, delay: 1 }}>
            <svg width="100vw" height="100vh" viewBox="0 0 1920 1080" className="drop-shadow-lg" style={{ filter: `drop-shadow(0 0 20px white)` }}>
              <motion.path d="M 520 540 A 440 440 0 1 1 1400 540" fill="none" stroke="white" strokeWidth="1.5" strokeDasharray="5,10" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, delay: 1.5 }} />
              <motion.path d="M 560 540 A 400 400 0 1 1 1360 540" fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.6" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.5, delay: 2 }} />
              {/* ...weitere HUD-Elemente analog Art/Photography... */}
            </svg>
          </motion.div>
        </div>
        <div className="relative text-center px-6 max-w-6xl" style={{ zIndex: 25 }}>
          <motion.div className="relative" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: 0.8 }}>
            <motion.h1 className="text-5xl md:text-8xl font-extrabold tracking-tight mb-8 relative text-white" style={{ textShadow: '0 0 30px rgba(255, 255, 255, 0.4)' }} initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 1.2 }}>
              <span className="text-cyan-400/80 text-lg block mb-2 tracking-widest font-mono">GHWB.UXUI.SYSTEM:</span>
              UX/UI DESIGN
            </motion.h1>
            <motion.p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed max-w-3xl mx-auto relative" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 1.4 }}>
              Digitale Erlebnisse, die begeistern. Von Research bis Prototyping – nutzerzentriert, modern, wirkungsvoll.
            </motion.p>
            <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 1.6 }} className="flex flex-col sm:flex-row gap-4 justify-center">
              <SpecialButtonDark
                variant="secondary"
                size="base"
                icon="left"
                iconElement={<Sparkles className="w-4 h-4" />}
                onClick={() => { 
                  const skills = document.getElementById('skills-section'); 
                  if (skills) skills.scrollIntoView({ behavior: 'smooth', block: 'start' }) 
                }}
              >
                Meine Skills
              </SpecialButtonDark>
              <SpecialButtonDark
                variant="primary"
                size="base"
                onClick={() => { 
                  const event = new CustomEvent('openContactModal');
                  window.dispatchEvent(event);
                }}
              >
                Kontakt
              </SpecialButtonDark>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* SKILLS SECTION - RESPONSIVE */}
      <section id="skills-section" className="relative z-10">
        {/* Desktop Version */}
        <div className="hidden md:block py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-semibold text-white leading-tight tracking-tight md:text-3xl mb-6">
                Meine UX/UI Expertise
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                Kompetenzprofil im UX/UI Design – von Research bis Rollout
              </p>
            </div>



            {/* Skills Circle Chart */}
            <SkillsCircleChartDark 
              onSegmentHover={setHoveredSkill}
              hoveredSkill={hoveredSkill}
            />


          </div>
        </div>

        {/* Mobile Version */}
        <div className="block md:hidden">
          <MobileSkills isDark={true} />
        </div>
      </section>

      {/* WORKFLOW SECTION */}
      <section className="py-40 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <h2 className="text-4xl font-semibold text-white leading-tight tracking-tight md:text-3xl mb-6">
              Workflow
            </h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Kreativ, flexibel, interdisziplinär: so begleite ich den agilen Weg zu Produkten mit Sinn und Wirkung.
            </p>

            {/* Dark Mode SVG */}
            <div className="flex justify-center mt-16">
              {/* Desktop SVG - hidden on mobile */}
              <img
                src="/images/Dark-workflow.svg"
                alt="UX Design Workflow"
                className="hidden md:block w-full h-auto max-w-5xl"
                style={{ maxHeight: '400px' }}
              />
              {/* Mobile SVG - shown only on mobile */}
              <img
                src="/images/Dark-mobile.svg"
                alt="UX Design Workflow Mobile"
                className="block md:hidden w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <UXServicesGrid variant="dark" />

      {/* TECH STACK SECTION */}
      <TechStackSectionDark />

      {/* DIVIDER */}
      <Divider />

      {/* PROJEKTE SECTION */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-white leading-tight tracking-tight md:text-3xl mb-6">
              Beispielprojekte
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Ein Einblick in meine UX/UI Design Arbeiten
            </p>
          </div>
          <div className="columns-1 md:columns-3 lg:columns-3 gap-8">
            {projekte.map((project, index) => (
              <motion.div 
                key={project.title} 
                className="group relative overflow-hidden mb-8 break-inside-avoid"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{
                  background: 'rgba(20, 25, 35, 0.6)',
                  backdropFilter: 'blur(20px) saturate(150%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(150%)',
                  border: '1px solid rgba(100, 150, 200, 0.3)',
                  borderRadius: '0',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3), 0 1px 4px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  filter: 'drop-shadow(0 12px 60px rgba(0, 150, 255, 0.15))'
                }}
              >
                <div className="p-6 space-y-4">
                  <span className="text-sm font-medium text-cyan-400 font-mono">{project.category}</span>
                  <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                  <p className="text-white/70 leading-relaxed text-sm">{project.description}</p>
                  {project.details && (
                    <div className="pt-3 border-t border-white/10">
                      <h4 className="text-sm font-semibold text-white mb-3">Meine Aufgaben:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.details.split(', ').map((task, taskIndex) => (
                          <span 
                            key={taskIndex}
                            className="px-3 py-1.5 text-xs font-medium"
                            style={{
                              background: 'rgba(30, 58, 138, 0.4)',
                              color: '#93c5fd',
                              border: 'none',
                              borderRadius: '9999px',
                              backdropFilter: 'blur(10px)'
                            }}
                          >
                            {task}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FLOATING CONTACT BUTTON */}
      <FloatingContactButton />
      <Footer />
    </div>
  )
}
