'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Layers, Monitor, Smartphone, Palette, Users, Zap, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { useTheme } from '@/contexts/ThemeContext'
import Footer from '@/components/Footer'

const DesignPage = () => {
  const { theme } = useTheme()
  const skills = [
    {
      icon: Monitor,
      title: 'Webdesign',
      description: 'Responsive und benutzerfreundliche Websites, die auf allen Geräten perfekt funktionieren.'
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Intuitive App-Designs für iOS und Android mit Fokus auf User Experience.'
    },
    {
      icon: Palette,
      title: 'Brand Design',
      description: 'Einheitliche visuelle Identitäten, die Ihre Marke zum Leben erwecken.'
    },
    {
      icon: Users,
      title: 'User Research',
      description: 'Datenbasierte Erkenntnisse für nutzerorientierte Designentscheidungen.'
    },
    {
      icon: Zap,
      title: 'Prototyping',
      description: 'Interaktive Prototypen für bessere Kommunikation und Testing.'
    },
    {
      icon: Layers,
      title: 'Design Systems',
      description: 'Skalierbare Designsysteme für konsistente Nutzererfahrungen.'
    }
  ]

  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Application',
      image: '/placeholder-project-1.jpg',
      description: 'Komplette UX/UI Überarbeitung einer E-Commerce Plattform mit 40% Steigerung der Conversion Rate.'
    },
    {
      title: 'Fitness App',
      category: 'Mobile App',
      image: '/placeholder-project-2.jpg',
      description: 'Design einer Fitness-App mit personalisierten Workouts und Social Features.'
    },
    {
      title: 'SaaS Dashboard',
      category: 'Web Application',
      image: '/placeholder-project-3.jpg',
      description: 'Benutzerfreundliches Dashboard für eine B2B SaaS Lösung mit komplexen Datenvisualisierungen.'
    }
  ]

  return (
    <div className="pt-16 overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Link 
              href="/"
              className="inline-flex items-center text-foreground/70 hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zur Startseite
            </Link>

            <h1 className="text-6xl font-semibold text-foreground leading-tight tracking-tight md:text-4xl mb-6">
              UX/UI Design
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              Ich erschaffe digitale Erlebnisse, die nicht nur schön aussehen, 
              sondern auch funktional sind und Ihre Nutzer begeistern. Von der ersten 
              Idee bis zum finalen Produkt – mit Fokus auf Usability und Ästhetik.
            </p>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
            >
              <motion.button
                onClick={() => {
                  const skillsElement = document.querySelector('#skills-section')
                  if (skillsElement) {
                    skillsElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
                className="group relative inline-flex items-center px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: theme === 'dark' 
                    ? 'rgba(255, 255, 255, 0.1)' 
                    : 'rgba(0, 0, 0, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: theme === 'dark' 
                    ? '1px solid rgba(255, 255, 255, 0.2)' 
                    : '1px solid rgba(0, 0, 0, 0.1)'
                }}
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Meine Skills
              </motion.button>
              
              <motion.button 
                onClick={() => {
                  const contactElement = document.querySelector('#contact')
                  if (contactElement) {
                    contactElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
                className="inline-flex items-center px-8 py-3 rounded-full font-medium transition-all duration-300"
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  boxShadow: theme === 'dark'
                    ? '0 0 30px rgba(6, 182, 212, 0.6), 0 0 60px rgba(6, 182, 212, 0.4), 0 0 90px rgba(6, 182, 212, 0.2)'
                    : '0 15px 30px -5px rgba(0, 0, 0, 0.15), 0 8px 12px -4px rgba(0, 0, 0, 0.1)'
                }}
                whileTap={{ 
                  scale: 0.95,
                  boxShadow: theme === 'dark'
                    ? ['0 0 40px rgba(6, 182, 212, 0.8), 0 0 80px rgba(6, 182, 212, 0.5), 0 0 120px rgba(6, 182, 212, 0.3)',
                       '0 0 10px rgba(6, 182, 212, 0.3), 0 0 20px rgba(6, 182, 212, 0.2), 0 0 30px rgba(6, 182, 212, 0.1)',
                       '0 0 40px rgba(6, 182, 212, 0.8), 0 0 80px rgba(6, 182, 212, 0.5), 0 0 120px rgba(6, 182, 212, 0.3)']
                    : '0 5px 15px -2px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.05)',
                  transition: { duration: 0.1, repeat: 2, repeatType: "reverse" }
                }}
                style={{
                  background: theme === 'dark' 
                    ? 'rgba(6, 182, 212, 0.25)' 
                    : 'rgba(6, 182, 212, 0.15)',
                  backdropFilter: 'blur(10px)',
                  border: theme === 'dark' 
                    ? '1px solid rgba(6, 182, 212, 0.4)' 
                    : '1px solid rgba(6, 182, 212, 0.3)',
                  boxShadow: theme === 'dark'
                    ? '0 0 15px rgba(6, 182, 212, 0.3), 0 0 30px rgba(6, 182, 212, 0.15), 0 0 45px rgba(6, 182, 212, 0.05)'
                    : '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                }}
              >
                Kontakt
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills-section" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-semibold text-foreground leading-tight tracking-tight md:text-3xl mb-6">
              Meine Expertise
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Von Konzeption bis Implementierung – umfassende UX/UI Services
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
                  className="p-8 rounded-2xl bg-background border border-border/50 hover:border-border transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-6">
                    <Icon className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{skill.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{skill.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-semibold text-foreground leading-tight tracking-tight md:text-3xl mb-6">
              Ausgewählte Projekte
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Ein Einblick in meine neuesten UX/UI Design Arbeiten
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden rounded-2xl bg-muted mb-6 aspect-[4/3]">
                  <div className="w-full h-full bg-gradient-to-br from-muted via-muted/50 to-background flex items-center justify-center">
                    <Layers className="w-12 h-12 text-foreground/30" />
                  </div>
                </div>
                <div className="space-y-3">
                  <span className="text-sm font-medium text-foreground/70">{project.category}</span>
                  <h3 className="text-xl font-semibold group-hover:text-foreground/80 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-semibold text-foreground leading-tight tracking-tight md:text-3xl mb-6">
              Bereit für Ihr nächstes Projekt?
            </h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam eine außergewöhnliche Nutzererfahrung schaffen, 
              die Ihre Zielgruppe begeistert und Ihre Geschäftsziele erreicht.
            </p>
            <motion.a
              href="mailto:hello@ghwb.studio"
              className="inline-flex items-center px-8 py-4 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Projekt besprechen
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default DesignPage
