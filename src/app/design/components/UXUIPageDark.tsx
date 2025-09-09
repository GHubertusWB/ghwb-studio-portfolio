'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { ArrowLeft, Monitor, Smartphone, Palette, Users, Zap, Layers, Sparkles, Eye, CheckCircle } from 'lucide-react'
import CustomCursor from '@/components/CustomCursor'
import Footer from '@/components/Footer'

export default function UXUIPageDark() {
  const [currentTime, setCurrentTime] = useState('')
  const skills = [
    { icon: Monitor, title: 'Webdesign', description: 'Responsive und benutzerfreundliche Websites, die auf allen Geräten perfekt funktionieren.' },
    { icon: Smartphone, title: 'Mobile Apps', description: 'Intuitive App-Designs für iOS und Android mit Fokus auf User Experience.' },
    { icon: Palette, title: 'Brand Design', description: 'Einheitliche visuelle Identitäten, die Ihre Marke zum Leben erwecken.' },
    { icon: Users, title: 'User Research', description: 'Datenbasierte Erkenntnisse für nutzerorientierte Designentscheidungen.' },
    { icon: Zap, title: 'Prototyping', description: 'Interaktive Prototypen für bessere Kommunikation und Testing.' },
    { icon: Layers, title: 'Design Systems', description: 'Skalierbare Designsysteme für konsistente Nutzererfahrungen.' }
  ]
  const prozess = [
    { icon: Eye, title: 'Research & Analyse', desc: 'Nutzerbedürfnisse und Ziele verstehen' },
    { icon: Palette, title: 'Konzept & Wireframes', desc: 'Struktur und erste visuelle Ideen' },
    { icon: Sparkles, title: 'UI Design', desc: 'Visuelle Ausarbeitung und Prototyping' },
    { icon: CheckCircle, title: 'Testing & Launch', desc: 'Usability-Tests und Go-Live' }
  ]
  const projekte = [
    {
      title: 'E-Commerce Redesign',
      category: 'Web Application',
      image: '/placeholder-project-1.jpg',
      description: 'UX/UI Überarbeitung eines Shops mit Fokus auf Conversion und Mobile Experience.'
    },
    {
      title: 'Fitness App',
      category: 'Mobile App',
      image: '/placeholder-project-2.jpg',
      description: 'Design einer Fitness-App mit personalisierten Workouts und Social Features.'
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
              <motion.button className="cursor-button group relative inline-flex items-center px-8 py-3 rounded-full font-medium transition-all duration-300 font-mono" style={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.2)', cursor: 'none' }} whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} onClick={() => { const skills = document.getElementById('skills-section'); if (skills) skills.scrollIntoView({ behavior: 'smooth', block: 'start' }) }}>
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

      {/* SKILLS SECTION */}
      <section id="skills-section" className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center text-cyan-400 font-mono text-sm tracking-wider mb-4">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
              UXUI.SKILLS
            </div>
            <h2 className="text-4xl font-semibold text-white leading-tight tracking-tight md:text-3xl mb-6">
              Meine UX/UI Expertise
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Von Research bis Prototyping – umfassende UX/UI Services
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <motion.div key={skill.title} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.1 }} viewport={{ once: true }} whileHover={{ y: -5 }} className="p-8 rounded-2xl border border-white/20 hover:border-cyan-400/40 transition-all duration-300" style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)' }}>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-400/20 mb-6">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{skill.title}</h3>
                  <p className="text-white/70 leading-relaxed">{skill.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* PROZESS SECTION */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <div className="inline-flex items-center text-cyan-400 font-mono text-sm tracking-wider mb-4">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
              UXUI.PROCESS
            </div>
            <h2 className="text-4xl font-semibold text-white leading-tight tracking-tight md:text-3xl mb-6">
              Mein UX/UI Prozess
            </h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Schritt für Schritt zu nutzerzentrierten digitalen Lösungen
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
              {prozess.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div key={item.title} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.2 }} viewport={{ once: true }} className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-white/20 mb-6" style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)' }}>
                      <Icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-white">{item.title}</h3>
                    <p className="text-white/70 leading-relaxed">{item.desc}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROJEKTE SECTION */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center text-cyan-400 font-mono text-sm tracking-wider mb-4">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
              UXUI.PROJECTS
            </div>
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

      {/* CONTACT SECTION */}
      <section id="contact-section" className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center text-cyan-400 font-mono text-sm tracking-wider mb-4">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
              UXUI.KONTAKT
            </div>
            <h2 className="text-4xl font-semibold text-white leading-tight tracking-tight md:text-3xl mb-6">
              Bereit für Ihr UX/UI Projekt?
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam eine außergewöhnliche Nutzererfahrung schaffen, die Ihre Zielgruppe begeistert.
            </p>
          </motion.div>
          <a href="mailto:hello@ghwb.studio" className="inline-flex items-center px-8 py-4 bg-cyan-400 text-black rounded-full font-medium hover:bg-cyan-300 transition-colors text-lg">
            Projekt besprechen
          </a>
        </div>
      </section>
      <Footer />
    </div>
  )
}
