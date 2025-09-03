'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Sparkles, Mouse } from 'lucide-react'
import MainLogo from './MainLogo'
import { useTheme } from '@/contexts/ThemeContext'
import SpaceshipHUD from './SpaceshipHUD'

const Hero = () => {
  const { theme } = useTheme()
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient - theme aware */}
      <div className={`absolute inset-0 ${
        theme === 'light' 
          ? 'bg-gradient-to-b from-sky-200 to-white' 
          : 'bg-gradient-to-br from-background via-background to-muted/20'
      }`} />

      {/* Spaceship HUD - behind the logo */}
      <div className="absolute inset-0 z-0">
        <SpaceshipHUD />
      </div>

      <div className="relative z-30 text-center max-w-4xl mx-auto px-4 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center"
        >
          <MainLogo />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-[8vh] md:mt-[10vh] lg:mt-[12vh]"
        >
          <p className="text-base md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed theme-transition">
            UX/UI Design • Fotografie • Kunst
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4"
        >
          <motion.a
            href="#services"
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
            Meine Services
          </motion.a>
          
          <motion.a
            href="#contact"
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
          </motion.a>
        </motion.div>

        {/* Scroll indicator - positioned at the bottom */}
        <motion.button
          onClick={scrollToNext}
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          whileHover={{ scale: 1.1 }}
        >
          <motion.div
            className="flex flex-col items-center text-muted-foreground hover:text-foreground theme-transition"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Mouse className="w-5 h-5 mb-1" />
            <ArrowDown className="w-3 h-3" />
          </motion.div>
        </motion.button>
      </div>
    </section>
    </>
  )
}

export default Hero
