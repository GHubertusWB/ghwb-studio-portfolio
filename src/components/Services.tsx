'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Palette, Camera, Layers, ArrowRight, Brain } from 'lucide-react'
import Link from 'next/link'
import { useTheme } from '@/contexts/ThemeContext'

const Services = () => {
  const { theme } = useTheme()
  
  const services = [
    {
      icon: Layers,
      title: 'UX/UI Design',
      description: 'Intuitive und benutzerfreundliche digitale Erlebnisse, die Ihre Zielgruppe begeistern.',
      href: '/design',
    },
    {
      icon: Camera,
      title: 'Fotografie',
      description: 'Porträts, Produkt- und Ambientfotos, die Geschichten erzählen und Emotionen wecken.',
      href: '/photography',
    },
    {
      icon: Palette,
      title: 'Kunst',
      description: 'Innovative Kunstwerke, die klassische Malerei mit modernen AR-Technologien verbinden.',
      href: '/art',
    },
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'KI-Strategien und -Lösungen, die Ihre Geschäftsprozesse optimieren und Innovation treiben.',
      href: '/ai-integration',
    }
  ]

  return (
    <section id="services" className="py-20 bg-muted/30 relative overflow-visible min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col justify-center min-h-[calc(80vh-10rem)]">
        <div className="flex flex-col justify-center">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-semibold text-foreground leading-tight tracking-tight mb-6 md:text-3xl">
              Meine Services
            </h2>
            <p className="text-xl text-muted-foreground leading-7 max-w-prose mx-auto">
              Vier kreative Disziplinen, unendliche Möglichkeiten
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:items-stretch"
            style={{ gap: 'calc(var(--spacing) * 4)' }}
          >
            {services.map((service) => {
              const Icon = service.icon
              const [isHovered, setIsHovered] = useState(false)
              
              if (theme === 'dark') {
                return (
                  <div
                    key={service.title}
                    className="group relative"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <Link href={service.href}>
                      <motion.div
                        className="relative p-8 h-full border border-white/20 backdrop-blur-md flex flex-col overflow-visible"
                        style={{
                          borderRadius: '0px',
                        }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 180, 
                          damping: 28,
                          mass: 1.3
                        }}
                      >
                        {/* Hover Background für Dark Mode */}
                        <motion.div
                          className="absolute inset-0 -z-10"
                          style={{
                            background: 'linear-gradient(135deg, rgba(156, 163, 175, 0.1) 0%, rgba(107, 114, 128, 0.1) 100%)',
                          }}
                          initial={{ opacity: 0 }}
                          animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        />

                        {/* Top-Left Corner */}
                        <motion.div
                          className="absolute pointer-events-none"
                          style={{
                            top: '-2px',
                            left: '-2px',
                            borderTop: '2px solid #ffffff',
                            borderLeft: '2px solid #ffffff',
                            filter: 'drop-shadow(0 0 6px rgba(63, 223, 255, 0.63))',
                          }}
                          initial={{ width: '8px', height: '8px' }}
                          animate={isHovered ? {
                            width: '50%',
                            height: '50%'
                          } : {
                            width: '8px',
                            height: '8px'
                          }}
                          transition={{ duration: 1, ease: "easeInOut" }}
                        />

                        {/* Top-Right Corner */}
                        <motion.div
                          className="absolute pointer-events-none"
                          style={{
                            top: '-2px',
                            right: '-2px',
                            borderTop: '2px solid #ffffff',
                            borderRight: '2px solid #ffffff',
                            filter: 'drop-shadow(0 0 6px rgba(63, 223, 255, 0.63))',
                          }}
                          initial={{ width: '8px', height: '8px' }}
                          animate={isHovered ? {
                            width: '50%',
                            height: '50%'
                          } : {
                            width: '8px',
                            height: '8px'
                          }}
                          transition={{ duration: 1, ease: "easeInOut" }}
                        />

                        {/* Bottom-Left Corner */}
                        <motion.div
                          className="absolute pointer-events-none"
                          style={{
                            bottom: '-2px',
                            left: '-2px',
                            borderBottom: '2px solid #ffffff',
                            borderLeft: '2px solid #ffffff',
                            filter: 'drop-shadow(0 0 6px rgba(63, 223, 255, 0.63))',
                          }}
                          initial={{ width: '8px', height: '8px' }}
                          animate={isHovered ? {
                            width: '50%',
                            height: '50%'
                          } : {
                            width: '8px',
                            height: '8px'
                          }}
                          transition={{ duration: 1, ease: "easeInOut" }}
                        />

                        {/* Bottom-Right Corner */}
                        <motion.div
                          className="absolute pointer-events-none"
                          style={{
                            bottom: '-2px',
                            right: '-2px',
                            borderBottom: '2px solid #ffffff',
                            borderRight: '2px solid #ffffff',
                            filter: 'drop-shadow(0 0 6px rgba(63, 223, 255, 0.63))',
                          }}
                          initial={{ width: '8px', height: '8px' }}
                          animate={isHovered ? {
                            width: '50%',
                            height: '50%'
                          } : {
                            width: '8px',
                            height: '8px'
                          }}
                          transition={{ duration: 1, ease: "easeInOut" }}
                        />

                        {/* Content */}
                        <div className="relative z-10 flex flex-col flex-1">
                          <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-gray-700/30 mb-6">
                            <Icon className="w-8 h-8 text-white group-hover:text-orange-500 transition-colors" />
                          </div>

                          <h3 className="text-xl font-semibold text-white group-hover:text-orange-500 transition-colors mb-3">
                            {service.title}
                          </h3>

                          <p className="text-gray-300 text-sm leading-relaxed flex-1">
                            {service.description}
                          </p>
                        </div>

                        {/* Arrow */}
                        <motion.div
                          className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity"
                          animate={isHovered ? { x: 6 } : { x: 0 }}
                        >
                          <ArrowRight className="w-5 h-5 text-white" />
                        </motion.div>
                      </motion.div>
                    </Link>
                  </div>
                )
              }

              // Light Mode - einfach
              return (
                <Link href={service.href} key={service.title}>
                  <div className="group relative bg-white border border-gray-200 rounded-lg p-8 h-full hover:shadow-sm hover:-translate-y-1 transition-all duration-200 cursor-pointer">
                    {/* Icon */}
                    <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-6">
                      <Icon className="w-8 h-8 text-gray-700" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </p>

                    {/* Arrow */}
                    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight className="w-5 h-5 text-gray-700" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
