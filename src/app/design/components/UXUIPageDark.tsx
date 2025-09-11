'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { ArrowLeft, Monitor, Smartphone, Palette, Users, Zap, Layers, Sparkles, Eye, CheckCircle } from 'lucide-react'
import CustomCursor from '@/components/CustomCursor'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import SkillsRadarChartDark from './SkillsRadarChartDark'

export default function UXUIPageDark() {
  const [currentTime, setCurrentTime] = useState('')
  
  // UX/UI Services Data - inspired by photography page structure
  const services = [
    {
      id: 1,
      title: "Website Design",
      category: "Web Design",
      description: "Moderne, benutzerfreundliche Websites die Ihre Marke zum Leben erwecken",
      approach: "Responsive Design, Performance-Optimierung",
      icon: Monitor
    },
    {
      id: 2,
      title: "Barrierefreiheits-Beratung", 
      category: "Accessibility",
      description: "WCAG-konforme Lösungen für inklusive digitale Erfahrungen",
      approach: "Audit, Testing, Implementation",
      icon: Users
    },
    {
      id: 3,
      title: "Branding & Design Systems",
      category: "Branding",
      description: "Konsistente visuelle Identitäten und skalierbare Designsysteme",
      approach: "Corporate Identity, Style Guides",
      icon: Palette
    }
  ]
  
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
      description: '21 Mio. Euro Großprojekt: Neue Branchensoftware für 15 Medizinische Dienste mit komplexen Beratungs- und Gutachterdiensten.',
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
      <CustomCursor />
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
          <motion.button onClick={() => window.history.back()} className="cursor-button inline-flex items-center text-white/70 hover:text-white transition-colors mb-12 relative font-mono px-6 py-3 rounded-full hover:bg-white/5" style={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.2)', cursor: 'none' }} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }} whileHover={{ scale: 1.05, y: -2 }}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            SYSTEM.EXIT
          </motion.button>
          <motion.div className="relative" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: 0.8 }}>
            <motion.h1 className="text-5xl md:text-8xl font-light tracking-tight mb-8 relative text-white" style={{ textShadow: '0 0 30px rgba(255, 255, 255, 0.4)' }} initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 1.2 }}>
              <span className="text-cyan-400/80 text-lg block mb-2 tracking-widest font-mono">GHWB.UXUI.SYSTEM:</span>
              UX/UI DESIGN
            </motion.h1>
            <motion.p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed max-w-3xl mx-auto relative" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 1.4 }}>
              Digitale Erlebnisse, die begeistern. Von Research bis Prototyping – nutzerzentriert, modern, wirkungsvoll.
            </motion.p>
            <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 1.6 }} className="flex flex-col sm:flex-row gap-4 justify-center relative">
              <motion.button className="cursor-button group relative inline-flex items-center px-8 py-3 rounded-full font-medium transition-all duration-300 font-mono" style={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.2)', cursor: 'none' }} whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}                 onClick={() => { const services = document.getElementById('services-section'); if (services) services.scrollIntoView({ behavior: 'smooth', block: 'start' }) }}>
                <Sparkles className="w-4 h-4 mr-2" />
                Meine Skills
              </motion.button>
              <motion.button className="inline-flex items-center px-8 py-3 rounded-full font-medium transition-all duration-300 font-mono" style={{ background: 'rgba(6, 182, 212, 0.25)', backdropFilter: 'blur(10px)', border: '1px solid rgba(6, 182, 212, 0.4)', boxShadow: '0 0 15px rgba(6, 182, 212, 0.3), 0 0 30px rgba(6, 182, 212, 0.15), 0 0 45px rgba(6, 182, 212, 0.05)', cursor: 'none' }} whileHover={{ scale: 1.05, y: -2, boxShadow: '0 0 30px rgba(6, 182, 212, 0.6), 0 0 60px rgba(6, 182, 212, 0.4), 0 0 90px rgba(6, 182, 212, 0.2)' }} whileTap={{ scale: 0.95 }} onClick={() => { const contact = document.getElementById('contact-section'); if (contact) contact.scrollIntoView({ behavior: 'smooth', block: 'start' }) }}>
                Kontakt
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* SERVICES SECTION - SAME STYLE AS PHOTOGRAPHY PAGE */}
      <section id="services-section" className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }} 
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-semibold text-white leading-tight tracking-tight md:text-3xl mb-6">
              Spezialisierte UX/UI Services
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Fokus auf benutzerfreundliche Designs, Barrierefreiheit und starke Markenidentitäten
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-2xl border border-white/20 hover:border-cyan-400/40 transition-all duration-300"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-400/20 mb-6">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
                  <p className="text-white/70 leading-relaxed mb-4">{service.description}</p>
                  <p className="text-cyan-400 text-sm font-mono">{service.approach}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SKILLS SECTION - RADAR CHART */}
      <section id="skills-section" className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-white leading-tight tracking-tight md:text-3xl mb-6">
              Meine UX/UI Expertise
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Kompetenzprofil im UX/UI Design – von Research bis Rollout
            </p>
          </motion.div>

          {/* Skills Radar Chart */}
          <SkillsRadarChartDark />

          {/* Skills Description Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { title: 'Accessibility', desc: 'WCAG-konforme Barrierefreiheit mit 3+ Jahren Spezialisierung', level: '9/10' },
              { title: 'Product Owner', desc: 'Scrum Product Owner Erfahrung in 21 Mio. Euro Großprojekten', level: '8/10' },
              { title: 'Requirements Engineering', desc: 'User Research, Workshops und stakeholder-orientierte Analyse', level: '9/10' },
              { title: 'Wireframing', desc: 'Strukturierung und erste visuelle Konzepte für komplexe Systeme', level: '10/10' },
              { title: 'Prototyping', desc: 'Interaktive Prototypen und User Testing für optimale UX', level: '10/10' },
              { title: 'Design Systems', desc: 'Skalierbare Komponenten-Bibliotheken und Style Guides', level: '9/10' },
              { title: 'Development', desc: 'Frontend-Kenntnisse für bessere Designer-Developer Zusammenarbeit', level: '7/10' },
              { title: 'Rollout Planung', desc: 'Strategische Einführung und Change Management für neue Systeme', level: '8/10' }
            ].map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl border border-white/20 hover:border-cyan-400/40 transition-all duration-300 text-center"
                style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)' }}
              >
                <h3 className="font-semibold text-white mb-2">{skill.title}</h3>
                <div className="text-sm text-cyan-400 font-semibold mb-3">{skill.level}</div>
                <p className="text-sm text-white/70 leading-relaxed">{skill.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WORKFLOW SECTION */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-semibold text-white leading-tight tracking-tight md:text-3xl mb-6">
              Workflow
            </h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Kreativ, flexibel, interdisziplinär: so begleite ich den agilen Weg zu Produkten mit Sinn und Wirkung.
            </p>

            {/* Dark Mode SVG */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex justify-center mt-16"
            >
              {/* Desktop SVG - hidden on mobile */}
              <img
                src="/images/Dark.svg"
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
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PROJEKTE SECTION */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-white leading-tight tracking-tight md:text-3xl mb-6">
              Beispielprojekte
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Ein Einblick in meine UX/UI Design Arbeiten
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projekte.map((project, index) => (
              <motion.div key={project.title} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.2 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="group cursor-pointer">
                <div className="overflow-hidden rounded-2xl bg-white/5 mb-6 aspect-[4/3]">
                  <div className="w-full h-full bg-gradient-to-br from-white/10 via-white/5 to-transparent flex items-center justify-center">
                    <Layers className="w-12 h-12 text-white/30" />
                  </div>
                </div>
                <div className="space-y-3">
                  <span className="text-sm font-medium text-cyan-400 font-mono">{project.category}</span>
                  <h3 className="text-xl font-semibold group-hover:text-white/80 transition-colors text-white">{project.title}</h3>
                  <p className="text-white/70 leading-relaxed">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION - HUD SPACESHIP DESIGN WITH FORM */}
      <section id="contact-section" className="py-32 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header Section - HUD style */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-semibold text-white leading-tight tracking-tight md:text-3xl mb-6">
              Ready for UX/UI Mission?
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Initiating communication protocol for extraordinary user experience development. 
              Target: Exceptional interfaces that captivate your user base.
            </p>
          </motion.div>

          {/* Contact Form Section - same as Photography Dark Mode */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <ContactForm variant="uxui" />
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
