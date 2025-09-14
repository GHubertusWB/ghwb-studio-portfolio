'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Palette, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { useTheme } from '@/contexts/ThemeContext'
import { Button } from '@/components/ui/Button'

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
            <Button
              variant="ghost"
              size="lg"
              onClick={() => {
                const portfolioElement = document.querySelector('#portfolio-section')
                if (portfolioElement) {
                  portfolioElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
              icon={<Sparkles className="w-4 h-4" />}
            >
              Portfolio entdecken
            </Button>
            
            <Button
              variant="secondary"
              size="lg"
              onClick={onCollaborationClick}
            >
              Zusammenarbeiten
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
