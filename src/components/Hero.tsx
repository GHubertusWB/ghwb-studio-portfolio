'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Sparkles, Mouse } from 'lucide-react'
import MainLogo from './MainLogo'
import { useTheme } from '@/contexts/ThemeContext'
import SpaceshipHUD from './SpaceshipHUD'
import { Button } from './ui/Button'

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
          <h1 className="text-6xl font-semibold text-foreground leading-tight tracking-tight mb-4 sr-only md:text-4xl">
            GHWB Studio - UX/UI Design, Fotografie und Kunst
          </h1>
          <p className="text-base text-muted-foreground leading-7 max-w-2xl mx-auto theme-transition">
            UX/UI Design • Fotografie • Kunst
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4"
        >
          <Button
            variant="secondary"
            size="base"
            onClick={() => {
              const services = document.getElementById('services');
              if (services) services.scrollIntoView({ behavior: 'smooth' });
            }}
            icon="left"
            iconElement={<Sparkles className="w-4 h-4" />}
          >
            Meine Services
          </Button>
          
          <Button
            variant="tertiary"
            size="base"
            onClick={() => {
              const contact = document.getElementById('contact');
              if (contact) contact.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Kontakt
          </Button>
        </motion.div>

        {/* Scroll indicator - positioned at the bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          whileHover={{ scale: 1.1 }}
          className="mt-16"
        >
          <Button
            variant="tertiary"
            size="base"
            onClick={scrollToNext}
            className="p-4"
          >
            <motion.div
              className="flex flex-col items-center text-xs text-muted-foreground hover:text-base hover:text-muted-foreground theme-transition"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Mouse className="w-5 h-5 mb-1" />
              <ArrowDown className="w-3 h-3" />
            </motion.div>
          </Button>
        </motion.div>
      </div>
    </section>
    </>
  )
}

export default Hero
