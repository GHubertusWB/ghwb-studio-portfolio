'use client'

import { motion } from 'framer-motion'
import { Palette, Camera, Layers, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const Services = () => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20
      }
    }
  }

  return (
    <section id="services" className="pt-0 pb-20 lg:pb-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6" style={{
            transition: 'color 0.3s ease-in-out'
          }}>
            Meine Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" style={{
            transition: 'color 0.3s ease-in-out'
          }}>
            Drei kreative Disziplinen, unendliche Möglichkeiten
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="group"
              >
                <Link href={service.href}>
                  <motion.div
                    className="relative p-8 rounded-2xl bg-background border border-border/50 hover:border-border duration-300 h-full"
                    style={{
                      transition: 'background-color 0.3s ease-in-out, border-color 0.3s ease-in-out'
                    }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {/* Gradient background */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <motion.div
                        className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-6"
                        style={{
                          transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out'
                        }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Icon className="w-8 h-8 text-foreground" style={{
                          transition: 'color 0.3s ease-in-out'
                        }} />
                      </motion.div>

                      <h3 className="text-2xl font-semibold mb-4 group-hover:text-foreground" style={{
                        transition: 'color 0.3s ease-in-out'
                      }}>
                        {service.title}
                      </h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed" style={{
                        transition: 'color 0.3s ease-in-out'
                      }}>
                        {service.description}
                      </p>

                      <motion.div
                        className="inline-flex items-center text-foreground font-medium"
                        style={{
                          transition: 'color 0.3s ease-in-out'
                        }}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        Mehr erfahren
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </motion.div>
                    </div>

                    {/* Floating elements */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-foreground rounded-full"
                          style={{
                            top: i * 10,
                            right: i * 8,
                            transition: 'background-color 0.3s ease-in-out'
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
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link href="/about">
            <motion.button
              className="inline-flex items-center px-8 py-4 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90"
              style={{
                transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Über mich erfahren
              <ArrowRight className="w-4 h-4 ml-2" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
