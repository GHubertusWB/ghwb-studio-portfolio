'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Sparkles, Mouse } from 'lucide-react'
import MainLogo from './MainLogo'
import { useTheme } from '@/contexts/ThemeContext'
import CursorFollower from './CursorFollower'
import CustomCursor from './CustomCursor'
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
      <CustomCursor />
      <CursorFollower />
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient - theme aware */}
      <div className={`absolute inset-0 ${
        theme === 'light' 
          ? 'bg-gradient-to-b from-sky-200 to-white' 
          : 'bg-gradient-to-br from-background via-background to-muted/20'
      }`} />

      {/* Spaceship HUD - behind the logo */}
      <SpaceshipHUD />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 w-full">
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
          className="mt-16"
        >
          <p className="text-base md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed theme-transition mt-24">
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
            className="group relative inline-flex items-center px-8 py-3 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Meine Services
          </motion.a>
          
          <motion.a
            href="#contact"
            className="inline-flex items-center px-8 py-3 border border-foreground/20 rounded-full font-medium hover:bg-foreground/5 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
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
