'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Sparkles, Mouse } from 'lucide-react'
import MainLogo from './MainLogo'
import { useTheme } from '@/contexts/ThemeContext'

const Hero = () => {
  const { theme } = useTheme()
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient - theme aware */}
      <div className={`absolute inset-0 ${
        theme === 'light' 
          ? 'bg-gradient-to-b from-sky-200 to-white' 
          : 'bg-gradient-to-br from-background via-background to-muted/20'
      }`} />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => {
          // Fixed positions and delays to avoid hydration mismatch
          const positions = [
            { left: 15, top: 25 }, { left: 85, top: 15 }, { left: 45, top: 75 }, { left: 70, top: 45 },
            { left: 25, top: 85 }, { left: 90, top: 65 }, { left: 10, top: 55 }, { left: 55, top: 20 },
            { left: 75, top: 80 }, { left: 30, top: 35 }, { left: 65, top: 90 }, { left: 20, top: 10 },
            { left: 80, top: 30 }, { left: 40, top: 60 }, { left: 95, top: 50 }, { left: 5, top: 70 },
            { left: 50, top: 40 }, { left: 35, top: 95 }, { left: 85, top: 5 }, { left: 60, top: 85 }
          ];
          const durations = [3, 4, 3.5, 4.5, 3.2, 3.8, 4.2, 3.6, 4.8, 3.4, 4.1, 3.9, 3.3, 4.3, 3.7, 4.6, 3.1, 4.4, 3.8, 4.2];
          const delays = [0, 0.2, 0.4, 0.6, 0.8, 1.0, 1.2, 1.4, 1.6, 1.8, 0.1, 0.3, 0.5, 0.7, 0.9, 1.1, 1.3, 1.5, 1.7, 1.9];
          
          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-foreground/20 rounded-full"
              style={{
                left: `${positions[i].left}%`,
                top: `${positions[i].top}%`,
              }}
              animate={{
                opacity: [0, 0.5, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: durations[i],
                repeat: Infinity,
                delay: delays[i],
              }}
            />
          )
        })}
      </div>

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
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed theme-transition">
            UX/UI Design • Fotografie • Kunst
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
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
  )
}

export default Hero
