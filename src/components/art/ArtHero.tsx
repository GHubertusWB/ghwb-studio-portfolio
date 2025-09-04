'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Palette, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { useTheme } from '@/contexts/ThemeContext'

interface ArtHeroProps {
  onCollaborationClick: () => void
}

export default function ArtHero({ onCollaborationClick }: ArtHeroProps) {
  const { theme } = useTheme()

  return (
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

          <h1 className="text-6xl font-semibold text-foreground leading-tight tracking-tight mb-6 md:text-4xl">
            Kunst & Kreativität
          </h1>
          <p className="text-xl text-muted-foreground leading-7 max-w-3xl mx-auto">
            Digitale Kunst trifft auf traditionelle Ästhetik. Eine Exploration der Grenzen 
            zwischen Technologie und menschlicher Kreativität, die neue Perspektiven auf 
            gesellschaftliche Themen eröffnet.
          </p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
          >
            <motion.button
              onClick={() => {
                const portfolioElement = document.querySelector('#portfolio-section')
                if (portfolioElement) {
                  portfolioElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
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
              Portfolio entdecken
            </motion.button>
            
            <motion.button 
              onClick={onCollaborationClick}
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
              Zusammenarbeiten
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
