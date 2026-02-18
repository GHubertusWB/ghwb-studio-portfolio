'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Monitor, Smartphone, Palette, Users, Zap, Layers, Sparkles, Eye, CheckCircle } from 'lucide-react'
import { useState, useEffect } from 'react'
import Footer from '@/components/Footer'
import FloatingClouds from '@/components/FloatingClouds'
import FloatingContactButton from '@/components/FloatingContactButton'
import SkillsCircleChart from './SkillsCircleChart'
import MobileSkills from './MobileSkills'
import TechStackSection from './TechStackSection'
import { Button } from '@/components/ui/Button'
import { SpecialButton } from '@/components/ui/SpecialButton'


export default function UXUIPageLight() {
  const [currentTime, setCurrentTime] = useState('')
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null)
  
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString('de-DE', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const skills = [
    { icon: Monitor, title: 'Enterprise UX/UI', description: 'Komplexe Softwarelösungen für Großunternehmen wie Infineon, Bundesdruckerei und Medizinische Dienste.' },
    { icon: Smartphone, title: 'Management Apps', description: 'KPI-Dashboards und Mobile Apps für Führungskräfte mit fokussiertem User Experience Design.' },
    { icon: Palette, title: 'Design Systems', description: 'Skalierbare Komponenten-Bibliotheken und Corporate Design für nachhaltige Markenführung.' },
    { icon: Users, title: 'Accessibility Expert', description: 'WCAG-konforme Barrierefreiheit mit 3+ Jahren Spezialisierung in diesem Bereich.' },
    { icon: Zap, title: 'Agile Methoden', description: 'Scrum Product Owner & Master Erfahrung in 21 Mio. Euro Großprojekten.' },
    { icon: Layers, title: 'Requirements Engineering', description: 'User Research, Workshops und stakeholder-orientierte Anforderungsanalyse.' }
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
      category: 'Enterprise Software',
      image: '/placeholder-project-1.jpg',
      description: 'Im Rahmen dieses Projekts wurde eine neue, bundesweit einsetzbare Branchensoftware für die Medizinischen Dienste konzipiert und gestaltet. Ziel war die Unterstützung komplexer Beratungs- und Gutachterprozesse durch eine moderne, konsistente und nutzerfreundliche Anwendung. Kernbestandteile des Projekts waren die Einführung eines zentralen Designsystems sowie die Überführung umfangreicher fachlicher Richtlinien in klar strukturierte, barrierearme Formulare und digitale Prozesse. Dabei lag der Fokus auf hoher Usability, Konsistenz über verschiedene Anwendungsfälle hinweg und der Entlastung der Anwender:innen im täglichen Arbeitsablauf.',
      details: 'UX/UI Design, Usability Testing, Design System, Scrum Product Owner'
    },
    {
      title: 'Württembergische Versicherung',
      category: 'Accessibility Design',
      image: '/placeholder-project-2.jpg',
      description: 'Barrierefreiheits-Optimierung der Versicherungsplattform nach WCAG-Richtlinien.',
      details: 'Accessibility Audit, UX Research, Dokumentation, Frontend-Beratung'
    },
    {
      title: 'Infineon - Management Dashboard',
      category: 'Mobile App',
      image: '/placeholder-project-3.jpg',
      description: 'KPI-Management App für Führungskräfte zur schnellen Überprüfung wichtiger Unternehmensdaten.',
      details: 'Requirements Engineering, Wireframing, UI Design, Usability Testing'
    },
    {
      title: 'KION Group - Component Library',
      category: 'Design System',
      image: '/placeholder-project-4.jpg',
      description: 'Entwicklung neuer UI-Komponenten für die Website der KION Group.',
      details: 'Component Design, Style Guide, Frontend-Integration'
    },
    {
      title: 'Bundesdruckerei - Accessibility',
      category: 'Consulting',
      image: '/placeholder-project-5.jpg',
      description: 'Beratung und Unterstützung für digitale Barrierefreiheit im UX/UI Team.',
      details: 'Knowledge Management, Workshop-Leitung, Marketing-Konzeption'
    },
    {
      title: 'Charly Group - Hotel Website',
      category: 'Web Design',
      image: '/placeholder-project-6.jpg',
      description: 'Komplette CI und Webauftritt für neugegründete Hotelgruppe mit Atomic Design Prinzip.',
      details: 'Corporate Identity, Design System, Projektleitung, Scrum Master'
    }
  ]

  return (
    <div className="min-h-screen text-gray-900 relative overflow-hidden bg-gray-50">
      
      {/* HERO SECTION - EXACTLY LIKE ART PAGE LIGHT */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{ zIndex: 20 }}
      >
        {/* Floating Clouds - mit korrektem z-index */}
        <FloatingClouds />
        {/* Background gradient - matching startpage */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-200 to-white" />

        {/* Subtle geometric background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 5 }}>
          <motion.div
            className="relative w-full h-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.06, scale: 1 }}
            transition={{ duration: 3, delay: 1 }}
          >
            {/* Minimale geometrische Formen */}
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
          {/* Main Content - Startseite Typography */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {/* Subtitle - matching startpage */}
            <motion.p 
              className="text-base text-muted-foreground leading-7 mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              suppressHydrationWarning
            >
              UX/UI Design • Research • Prototyping
            </motion.p>

            {/* Main Title - startpage style */}
            <motion.h1 
              className="text-6xl font-extrabold text-foreground leading-tight tracking-tight mb-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
            >
              <span className="block">UX/UI &</span>
              <span className="block">DESIGN</span>
            </motion.h1>

            {/* Description - startpage style */}
            <motion.p 
              className="text-base text-muted-foreground leading-7 max-w-2xl mx-auto mb-16"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              Digitale Erlebnisse, die begeistern.<br/>
              Von Research bis Prototyping – nutzerzentriert, modern, wirkungsvoll.
            </motion.p>

            {/* CTA Buttons - exakt wie auf der Startseite */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <SpecialButton 
                variant="secondary"
                size="sm"
                onClick={() => { const skills = document.getElementById('skills-section'); if (skills) skills.scrollIntoView({ behavior: 'smooth', block: 'start' }) }}
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Meine Skills
              </SpecialButton>

              <SpecialButton 
                variant="primary"
                size="sm"
                onClick={() => { 
                  const event = new CustomEvent('openContactModal');
                  window.dispatchEvent(event);
                }}
              >
                Kontakt
              </SpecialButton>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* SKILLS SECTION - RESPONSIVE */}
      <section id="skills-section" className="relative z-10 bg-white">
        {/* Desktop Version */}
        <div className="hidden md:block py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-semibold text-foreground leading-tight tracking-tight mb-6 md:text-3xl">
                Meine Skills
              </h2>
              <p className="text-xl text-muted-foreground leading-7 max-w-prose mx-auto">
                Kompetenzprofil im UX/UI Design – von Research bis Rollout
              </p>
            </div>

            {/* Skills Circle Chart */}
            <SkillsCircleChart 
              onSegmentHover={setHoveredSkill}
              hoveredSkill={hoveredSkill}
            />
          </div>
        </div>

        {/* Mobile Version */}
        <div className="block md:hidden">
          <MobileSkills isDark={false} />
        </div>
      </section>

      {/* WORKFLOW SECTION - NEUE WORKFLOW DARSTELLUNG */}
      <section className="py-32 px-6 relative z-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-semibold text-foreground leading-tight tracking-tight mb-6 md:text-3xl">
              Workflow
            </h2>
            <p className="text-xl text-muted-foreground leading-7 max-w-prose mx-auto">
              Kreativ, flexibel, interdisziplinär: so begleite ich den agilen Weg zu Produkten mit Sinn und Wirkung.
            </p>
          </div>

          {/* Light Mode SVG - Desktop and Mobile versions */}
          <div className="flex flex-col items-center">
            {/* Desktop SVG - hidden on mobile */}
            <img
              src="/images/Light-workflow.svg"
              alt="UX Design Workflow"
              className="hidden md:block w-full h-auto max-w-5xl"
              style={{ maxHeight: '400px' }}
            />
            {/* Mobile SVG - shown only on mobile */}
            <img
              src="/images/Light-mobile.svg"
              alt="UX Design Workflow Mobile"
              className="block md:hidden w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* TOOLS & TECHNOLOGIEN SECTION */}
      <TechStackSection />

      {/* PROJEKTE SECTION - MINIMAL GRID LAYOUT */}
      <section className="py-32 px-6 relative z-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-semibold text-foreground leading-tight tracking-tight mb-6 md:text-3xl">
              Ausgewählte Arbeiten
            </h2>
            <p className="text-xl text-muted-foreground leading-7 max-w-prose mx-auto">
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
                  background: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(20px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                  border: '1px solid rgba(255, 255, 255, 1)',
                  borderRadius: '24px',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08), 0 1px 4px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
                  filter: 'drop-shadow(0 2px 4px rgba(60, 60, 60, 0.05))'
                }}
              >
                <div className="p-6 space-y-4">
                  <span className="text-sm font-medium text-muted-foreground">{project.category}</span>
                  <h3 className="text-lg font-semibold group-hover:text-muted-foreground transition-colors text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{project.description}</p>
                  {project.details && (
                    <div className="pt-3 border-t border-border/30">
                      <h4 className="text-sm font-semibold text-foreground mb-3">Meine Aufgaben:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.details.split(', ').map((task, taskIndex) => (
                          <span 
                            key={taskIndex}
                            className="px-3 py-1.5 text-xs font-medium"
                            style={{
                              background: 'rgba(191, 219, 254, 0.4)',
                              color: '#475569',
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

      <Footer />

      {/* Floating Contact Button System */}
      <FloatingContactButton
        title="Bereit für Ihr UX/UI Projekt?"
        subtitle="Lassen Sie uns gemeinsam eine außergewöhnliche Nutzererfahrung schaffen, die Ihre Zielgruppe begeistert."
      />
    </div>
  )
}
