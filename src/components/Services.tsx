'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Palette, Camera, Layers, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { SpecialButton } from '@/components/ui/SpecialButton'
import { SpecialButtonDark } from '@/components/ui/SpecialButtonDark'
import { useTheme } from '@/contexts/ThemeContext'

const Services = () => {
  const { theme } = useTheme()
  
  const services = [
    {
      icon: Layers,
      title: 'UX/UI Design',
      description: 'Intuitive und benutzerfreundliche digitale Erlebnisse, die Ihre Zielgruppe begeistern.',
      href: '/design',
      color: 'from-blue-500/20 to-purple-500/20'
    },
    {
      icon: Camera,
      title: 'Fotografie',
      description: 'Porträts, Produkt- und Ambientfotos, die Geschichten erzählen und Emotionen wecken.',
      href: '/photography',
      color: 'from-green-500/20 to-teal-500/20'
    },
    {
      icon: Palette,
      title: 'Kunst',
      description: 'Innovative Kunstwerke, die klassische Malerei mit modernen AR-Technologien verbinden.',
      href: '/art',
      color: 'from-orange-500/20 to-red-500/20'
    }
  ]



  return (
    <section id="services" className="py-20 bg-muted/30 relative overflow-visible" style={{ height: '80vh' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col">
        <div className="flex-1 flex flex-col justify-center">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-semibold text-foreground leading-tight tracking-tight mb-6 md:text-3xl">
              Meine Services
            </h2>
            <p className="text-xl text-muted-foreground leading-7 max-w-prose mx-auto">
              Drei kreative Disziplinen, unendliche Möglichkeiten
            </p>
          </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 md:items-stretch"
          style={{ gap: 'calc(var(--spacing) * 4)' }}
        >
          {services.map((service, index) => {
            const Icon = service.icon
            const [isHovered, setIsHovered] = useState(false)
            
            return (
              <div
                key={service.title}
                className="group h-full"
              >
                <Link href={service.href}>
                  <div className="relative">
                    {/* Light Mode: Fester Schatten-Container (bleibt immer an der gleichen Position) */}
                    {theme === 'light' && (
                      <div 
                        className="absolute inset-0 bg-black"
                        style={{
                          transform: 'translate(0px, -3px)',
                          zIndex: 1
                        }}
                      />
                    )}
                    
                    {/* Eckige Border für Dark Mode */}
                    {theme === 'dark' && (
                      <div className="absolute inset-0 border border-white/20 pointer-events-none z-10" />
                    )}
                    
                    <motion.div
                      className={`relative p-8 h-full cursor-pointer transform-gpu flex flex-col overflow-visible backdrop-blur-md ${
                        theme === 'dark' ? 'border border-white/20' : 'backdrop-blur-3xl'
                      }`}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      style={{
                        background: 'rgba(255, 255, 255, 0)',
                        backdropFilter: theme === 'dark' ? 'blur(8px)' : 'blur(30px)',
                        WebkitBackdropFilter: theme === 'dark' ? 'blur(8px)' : 'blur(30px)',
                        borderRadius: '0px',
                        border: theme === 'dark' 
                          ? '1px solid rgba(255, 255, 255, 0.2)' 
                          : '1px solid #000000',
                        transform: theme === 'dark' 
                          ? 'none'
                          : isHovered 
                            ? 'translateY(-8px)'
                            : 'translateY(-3px)',
                        transition: 'transform 0.3s ease',
                        zIndex: 2
                      }}
                    whileHover={theme === 'dark' ? {} : {}}
                    whileTap={{
                      scale: 0.98,
                      y: 0
                    }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 180, 
                      damping: 28,
                      mass: 1.3
                    }}
                  >
                    {/* Glow overlay on hover - only for light mode */}
                    {theme === 'light' && (
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                           style={{
                             background: `radial-gradient(circle at center, rgba(255, 165, 0, 0.15), transparent 70%)`
                           }} />
                    )}

                    {/* Dark Mode: SpecialButtonDark Corner Border Animation */}
                    {theme === 'dark' && (
                      <>
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


                      </>
                    )}
                    
                    {/* Arrow on the right side - same height as icon */}
                    <motion.div
                      className="absolute top-8 right-8 flex items-center justify-center w-8 h-8 opacity-0 group-hover:opacity-100 transition-all duration-300"
                      style={{
                        filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.1))',
                        transition: 'filter 0.3s ease'
                      }}
                      animate={{
                        x: [0, 6, 0]
                      }}
                      transition={{
                        x: {
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }
                      }}
                    >
                      <ArrowRight className="w-5 h-5 text-foreground group-hover:drop-shadow-[0_0_16px_rgba(135,206,235,1)] group-hover:animate-pulse" />
                    </motion.div>
                    
                    {/* Content */}
                    <div className="relative z-10 flex flex-col flex-1">
                      <motion.div
                        className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-6 transition-all duration-300"
                        whileHover={theme === 'dark' ? {} : {}}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Icon className={`w-8 h-8 transition-colors duration-300 ${
                          theme === 'dark' 
                            ? 'group-hover:text-orange-500' 
                            : ''
                        }`} />
                      </motion.div>

                      <h3 
                        className={`text-2xl font-semibold text-foreground leading-tight mb-4 md:text-xl opacity-85 transition-all duration-300 ${
                          theme === 'dark' 
                            ? 'group-hover:text-orange-500' 
                            : ''
                        }`}
                        style={{
                          textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                        }}
                      >
                        <span>
                          {service.title}
                        </span>
                      </h3>

                      <p className="text-base text-muted-foreground leading-7 flex-1">
                        {service.description}
                      </p>
                    </div>

                    {/* Floating elements */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 rounded-full bg-foreground"
                          style={{
                            top: i * 10,
                            right: i * 8,
                          }}
                          animate={{
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.3,
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>

          {/* Call to Action */}
          <div
            className="w-full"
            style={{ 
              marginTop: 'calc(var(--spacing) * 4)'
            }}
          >
            <Link href="/about" className="block w-full">
              {theme === 'dark' ? (
                <SpecialButtonDark
                  variant="secondary"
                  size="base"
                  className="flex items-center justify-center"
                >
                  Mehr über mich erfahren
                  <ArrowRight className="w-4 h-4" />
                </SpecialButtonDark>
              ) : (
                <SpecialButton
                  variant="secondary"
                  size="medium"
                  className="flex items-center justify-center"
                >
                  <span className="flex items-center gap-3">
                    Mehr über mich erfahren
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </SpecialButton>
              )}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
