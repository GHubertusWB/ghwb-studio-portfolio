'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Monitor, Smartphone, Palette, Users, Zap, Layers, Sparkles, Eye, CheckCircle } from 'lucide-react'
import { useState, useEffect } from 'react'
import CustomCursor from '@/components/CustomCursor'
import Footer from '@/components/Footer'
import FloatingCloudsArt from '@/app/art/components/FloatingCloudsArt'
import ContactFormUXUI from './ContactFormUXUI'

export default function UXUIPageLight() {
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

  return (
    <div className="min-h-screen text-gray-900 relative overflow-hidden bg-gray-50">
      <CustomCursor />
      
      {/* HERO SECTION - EXACTLY LIKE ART PAGE LIGHT */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{ zIndex: 20 }}
      >
        {/* Floating Clouds - mit korrektem z-index */}
        <FloatingCloudsArt />
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
          {/* Back Button - Startseite Button Styling */}
          <motion.button
            onClick={() => window.history.back()}
            className="group relative inline-flex items-center px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-lg mb-16"
            style={{
              background: 'rgba(0, 0, 0, 0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(0, 0, 0, 0.1)'
            }}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span className="tracking-wide">Zurück</span>
          </motion.button>

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
            >
              UX/UI Design • Research • Prototyping
            </motion.p>

            {/* Main Title - startpage style */}
            <motion.h1 
              className="text-6xl font-semibold text-foreground leading-tight tracking-tight mb-4"
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
              <motion.button 
                onClick={() => { const skills = document.getElementById('skills-section'); if (skills) skills.scrollIntoView({ behavior: 'smooth', block: 'start' }) }}
                className="group relative inline-flex items-center px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-lg"
                style={{
                  background: 'rgba(0, 0, 0, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(0, 0, 0, 0.1)'
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Meine Skills
              </motion.button>
              
              <motion.button 
                onClick={() => { const contact = document.getElementById('contact-section'); if (contact) contact.scrollIntoView({ behavior: 'smooth', block: 'start' }) }}
                className="inline-flex items-center px-8 py-3 rounded-full text-label text-primary transition-all duration-300"
                style={{
                  background: 'rgba(6, 182, 212, 0.15)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(6, 182, 212, 0.3)',
                  boxShadow: '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  boxShadow: '0 15px 30px -5px rgba(0, 0, 0, 0.15), 0 8px 12px -4px rgba(0, 0, 0, 0.1)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                Kontakt
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* SKILLS SECTION - STARTSEITE LIGHT MODE STYLING */}
      <section className="py-32 px-6 relative z-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            {/* Category Tag - subtil wie auf der Startseite */}
            <motion.div 
              className="flex items-center justify-center mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-2 h-2 bg-muted-foreground rounded-full mr-3" />
              <span className="text-muted-foreground text-sm">UX/UI Expertise</span>
            </motion.div>

            <h2 className="text-4xl font-semibold text-foreground leading-tight tracking-tight mb-6 md:text-3xl">
              Meine Skills
            </h2>
            <p className="text-xl text-muted-foreground leading-7 max-w-prose mx-auto">
              Von Research bis Prototyping – umfassende UX/UI Services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <motion.div 
                  key={skill.title} 
                  initial={{ opacity: 0, y: 50 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.8, delay: index * 0.1 }} 
                  viewport={{ once: true }} 
                  whileHover={{ y: -5 }} 
                  className="relative border border-border p-8 bg-white shadow-lg rounded-lg hover:border-foreground/20 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-6">
                    <Icon className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">{skill.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* PROZESS SECTION - STARTSEITE LIGHT MODE STYLING */}
      <section className="py-32 px-6 relative z-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            {/* Category Tag - subtil wie auf der Startseite */}
            <motion.div 
              className="flex items-center justify-center mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-2 h-2 bg-muted-foreground rounded-full mr-3" />
              <span className="text-muted-foreground text-sm">UX/UI Prozess</span>
            </motion.div>

            <h2 className="text-4xl font-semibold text-foreground leading-tight tracking-tight mb-6 md:text-3xl">
              Mein Arbeitsprozess
            </h2>
            <p className="text-xl text-muted-foreground leading-7 max-w-prose mx-auto">
              Schritt für Schritt zu nutzerzentrierten digitalen Lösungen
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {prozess.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div 
                  key={item.title} 
                  initial={{ opacity: 0, y: 50 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.8, delay: index * 0.2 }} 
                  viewport={{ once: true }} 
                  className="text-center relative border border-border p-8 bg-white shadow-lg rounded-lg"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-border mb-6 bg-muted">
                    <Icon className="w-8 h-8 text-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* PROJEKTE SECTION - MINIMAL GRID LAYOUT */}
      <section className="py-32 px-6 relative z-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            {/* Category Tag - subtil wie auf der Startseite */}
            <motion.div 
              className="flex items-center justify-center mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-2 h-2 bg-muted-foreground rounded-full mr-3" />
              <span className="text-muted-foreground text-sm">Beispielprojekte</span>
            </motion.div>

            <h2 className="text-4xl font-semibold text-foreground leading-tight tracking-tight mb-6 md:text-3xl">
              Ausgewählte Arbeiten
            </h2>
            <p className="text-xl text-muted-foreground leading-7 max-w-prose mx-auto">
              Ein Einblick in meine UX/UI Design Arbeiten
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projekte.map((project, index) => (
              <motion.div 
                key={project.title} 
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, delay: index * 0.2 }} 
                viewport={{ once: true }} 
                whileHover={{ y: -10 }} 
                className="group cursor-pointer relative border border-border bg-white shadow-lg rounded-lg overflow-hidden hover:border-foreground/20 transition-all duration-300"
              >
                <div className="aspect-[4/3] bg-muted/30 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-muted via-background to-transparent flex items-center justify-center">
                    <Layers className="w-12 h-12 text-muted-foreground/30" />
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <span className="text-sm font-medium text-muted-foreground">{project.category}</span>
                  <h3 className="text-xl font-semibold group-hover:text-muted-foreground transition-colors text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION - STARTSEITE LIGHT MODE STYLING */}
      <section id="contact-section" className="py-32 px-6 relative z-10 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Header Section - startseite style */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Category Tag - subtil wie auf der Startseite */}
            <motion.div 
              className="flex items-center justify-center mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-2 h-2 bg-muted-foreground rounded-full mr-3" />
              <span className="text-muted-foreground text-sm">Kontakt</span>
            </motion.div>

            <h2 className="text-4xl font-semibold text-foreground leading-tight tracking-tight mb-6 md:text-3xl">
              Bereit für Ihr UX/UI Projekt?
            </h2>
            <p className="text-xl text-muted-foreground leading-7 max-w-prose mx-auto">
              Lassen Sie uns gemeinsam eine außergewöhnliche Nutzererfahrung schaffen, die Ihre Zielgruppe begeistert.
            </p>
          </motion.div>

          {/* Contact Form Section - clean style */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <ContactFormUXUI />
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
