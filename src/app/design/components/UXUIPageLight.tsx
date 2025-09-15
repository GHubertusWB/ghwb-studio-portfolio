'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Monitor, Smartphone, Palette, Users, Zap, Layers, Sparkles, Eye, CheckCircle } from 'lucide-react'
import { useState, useEffect } from 'react'
import Footer from '@/components/Footer'
import FloatingClouds from '@/components/FloatingClouds'
import FloatingContactButton from '@/components/FloatingContactButton'
import SkillsCircleChart from './SkillsCircleChart'
import MobileSkills from './MobileSkills'
import { Button } from '@/components/ui/Button'

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
      description: '21 Mio. Euro Großprojekt: Neue Branchensoftware für 15 Medizinische Dienste mit komplexen Beratungs- und Gutachterdiensten.',
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
              <Button 
                variant="secondary"
                size="base"
                onClick={() => { const skills = document.getElementById('skills-section'); if (skills) skills.scrollIntoView({ behavior: 'smooth', block: 'start' }) }}
                icon="left"
              iconElement={<Sparkles className="w-4 h-4" />}
              >
                Meine Skills
              </Button>
              
              <Button 
                variant="primary"
                size="base"
                onClick={() => { 
                  const event = new CustomEvent('openContactModal');
                  window.dispatchEvent(event);
                }}
              >
                Kontakt
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* SKILLS SECTION - RESPONSIVE */}
      <section id="skills-section" className="relative z-10 bg-white">
        {/* Desktop Version */}
        <div className="hidden md:block py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl font-semibold text-foreground leading-tight tracking-tight mb-6 md:text-3xl">
                Meine Skills
              </h2>
              <p className="text-xl text-muted-foreground leading-7 max-w-prose mx-auto">
                Kompetenzprofil im UX/UI Design – von Research bis Rollout
              </p>
            </motion.div>

            {/* Permanent Label über dem Diagramm */}
            <motion.div 
              className="text-center mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-sm text-muted-foreground/70 font-medium">
                Bewegen Sie die Maus über ein Segment für Details
              </p>
            </motion.div>

            {/* Skills Circle Chart */}
            <SkillsCircleChart 
              onSegmentHover={setHoveredSkill}
              hoveredSkill={hoveredSkill}
            />

            {/* Skill Details Display - erscheint langsam bei Hover */}
            <div 
              className="flex justify-center items-start"
              style={{ marginTop: '24px' }}
            >
              <AnimatePresence mode="wait">
                {hoveredSkill !== null && (
                  <motion.div
                    key={hoveredSkill} // Key für Re-Animation bei Skill-Wechsel
                    initial={{ opacity: 0, y: 20, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                    exit={{ opacity: 0, y: -15, height: 0 }}
                    transition={{ 
                      duration: 0.5,
                      ease: [0.23, 1, 0.32, 1], // Smooth easing für langsames Erscheinen
                      height: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } // Separate height transition
                    }}
                    className="max-w-3xl text-center px-6"
                  >
                  <motion.h3 
                    className="text-2xl font-medium text-foreground mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    {[
                      'Accessibility',
                      'Product Owner', 
                      'Requirements Engineering',
                      'Wireframing',
                      'Prototyping',
                      'Design Systems',
                      'Development',
                      'Rollout Planning',
                      'Workshops',
                      'UI Design'
                    ][hoveredSkill]}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-sm text-primary font-medium mb-4 tracking-wide"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    Erfahrungslevel: {[
                      '8/10',
                      '6/10',
                      '8/10', 
                      '10/10',
                      '9/10',
                      '10/10',
                      '4/10',
                      '7/10',
                      '9/10',
                      '9/10'
                    ][hoveredSkill]}
                  </motion.p>
                  
                  <motion.p 
                    className="text-base text-muted-foreground leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    {[
                      'WCAG-konforme Barrierefreiheit mit 3+ Jahren Spezialisierung',
                      'Scrum Product Owner Erfahrung in 21 Mio. Euro Großprojekten',
                      'User Research, Workshops und stakeholder-orientierte Analyse',
                      'Strukturierung und erste visuelle Konzepte für komplexe Systeme',
                      'Interaktive Prototypen und User Testing für optimale UX',
                      'Skalierbare Komponenten-Bibliotheken und Style Guides',
                      'Frontend-Kenntnisse für bessere Designer-Developer Zusammenarbeit',
                      'Strategische Einführung und Change Management für neue Systeme',
                      'Moderation und Durchführung von Design Thinking Workshops',
                      'Visuelle Gestaltung und Interface Design für digitale Produkte'
                    ][hoveredSkill]}
                  </motion.p>
                </motion.div>
                )}
              </AnimatePresence>
            </div>
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-semibold text-foreground leading-tight tracking-tight mb-6 md:text-3xl">
              Workflow
            </h2>
            <p className="text-xl text-muted-foreground leading-7 max-w-prose mx-auto">
              Kreativ, flexibel, interdisziplinär: so begleite ich den agilen Weg zu Produkten mit Sinn und Wirkung.
            </p>
          </motion.div>

          {/* Light Mode SVG - Desktop and Mobile versions */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            {/* Desktop SVG - hidden on mobile */}
            <img
              src="/images/Light.svg"
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
          </motion.div>
        </div>
      </section>

      {/* TOOLS & TECHNOLOGIEN SECTION */}
      <section className="py-32 px-6 relative z-10 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-semibold text-foreground leading-tight tracking-tight mb-6 md:text-3xl">
              Mein Tech-Stack
            </h2>
            <p className="text-xl text-muted-foreground leading-7 max-w-prose mx-auto">
              Über 5 Jahre Erfahrung mit professionellen Design- und Development-Tools
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'Figma', category: 'Design', experience: '5+ Jahre' },
              { name: 'Adobe Illustrator', category: 'Design', experience: '5+ Jahre' },
              { name: 'Sketch', category: 'Design', experience: '4+ Jahre' },
              { name: 'Adobe XD', category: 'Prototyping', experience: '3+ Jahre' },
              { name: 'Adobe Photoshop', category: 'Design', experience: '5+ Jahre' },
              { name: 'Miro', category: 'Workshop', experience: '4+ Jahre' },
              { name: 'Jira', category: 'Projektmanagement', experience: '4+ Jahre' },
              { name: 'Confluence', category: 'Dokumentation', experience: '4+ Jahre' },
              { name: 'Zeplin', category: 'Handoff', experience: '3+ Jahre' },
              { name: 'PowerPoint', category: 'Präsentation', experience: '5+ Jahre' },
              { name: 'WAVE', category: 'Accessibility', experience: '3+ Jahre' },
              { name: 'Frontend Dev', category: 'Development', experience: '2+ Jahre' }
            ].map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white border border-border rounded-lg p-4 text-center hover:border-foreground/20 transition-all duration-300"
              >
                <h3 className="font-semibold text-foreground text-sm mb-1">{tool.name}</h3>
                <p className="text-xs text-muted-foreground mb-1">{tool.category}</p>
                <p className="text-xs text-muted-foreground/70">{tool.experience}</p>
              </motion.div>
            ))}
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
            <h2 className="text-4xl font-semibold text-foreground leading-tight tracking-tight mb-6 md:text-3xl">
              Ausgewählte Arbeiten
            </h2>
            <p className="text-xl text-muted-foreground leading-7 max-w-prose mx-auto">
              Ein Einblick in meine UX/UI Design Arbeiten
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projekte.map((project, index) => (
              <motion.div 
                key={project.title} 
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, delay: index * 0.1 }} 
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
                  <h3 className="text-lg font-semibold group-hover:text-muted-foreground transition-colors text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{project.description}</p>
                  {project.details && (
                    <div className="pt-2 border-t border-border">
                      <p className="text-xs text-muted-foreground/80 font-medium">{project.details}</p>
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
        theme="light"
        title="Bereit für Ihr UX/UI Projekt?"
        subtitle="Lassen Sie uns gemeinsam eine außergewöhnliche Nutzererfahrung schaffen, die Ihre Zielgruppe begeistert."
      />
    </div>
  )
}
