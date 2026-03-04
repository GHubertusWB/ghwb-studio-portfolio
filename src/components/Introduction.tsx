'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useTheme } from '@/contexts/ThemeContext'
import { SpecialButton } from '@/components/ui/SpecialButton'
import { SpecialButtonDark } from '@/components/ui/SpecialButtonDark'
import { ArrowRight } from 'lucide-react'

const Introduction = () => {
  const { theme } = useTheme()
  const router = useRouter()

  return (
    <section className="py-24 md:py-32 lg:py-40 transition-colors duration-300">
      <div className="mx-auto px-16 max-w-full">
        {/* Subheadline */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-2xl md:text-3xl lg:text-4xl ${
              theme === 'light' ? 'text-muted-foreground' : 'text-muted-foreground'
            } transition-colors duration-300`}
          >
            Ich bin
          </motion.p>
        </div>

        {/* Name - Full Width, Dynamic Size, Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 text-center"
        >
          <h2 
            className={`font-bold leading-tight whitespace-normal ${
              theme === 'light' ? 'text-foreground' : 'text-foreground'
            } transition-colors duration-300`}
            style={{ fontSize: 'clamp(1.875rem, 3.5vw, 4rem)' }}
          >
            Gerd-Hubertus Weidenbrücher-Britze
          </h2>
        </motion.div>

        {/* Text Content and Button */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-2 space-y-6"
            >
              <p className={`text-lg md:text-xl leading-relaxed ${
                theme === 'light' ? 'text-gray-700' : 'text-gray-300'
              } transition-colors duration-300`}>
                Als Designer, Fotograf und Künstler vereinige ich Kreativität mit technischer Präzision. 
                Meine Leidenschaft liegt darin, digitale Erlebnisse zu schaffen, die nicht nur funktional 
                sind, sondern Menschen inspirieren und berühren.
              </p>
              <p className={`text-lg md:text-xl leading-relaxed ${
                theme === 'light' ? 'text-gray-700' : 'text-gray-300'
              } transition-colors duration-300`}>
                Was mich antreibt? Die Überzeugung, dass großartiges Design die perfekte Symbiose aus 
                Ästhetik, Usability und Innovation ist. Jedes Projekt ist eine neue Gelegenheit, 
                Grenzen zu verschieben und etwas Außergewöhnliches zu erschaffen.
              </p>
            </motion.div>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-start lg:justify-end"
            >
              {theme === 'dark' ? (
                <SpecialButtonDark
                  variant="secondary"
                  size="base"
                  onClick={() => router.push('/about')}
                >
                  Erfahre mehr über mich
                  <ArrowRight className="w-4 h-4" />
                </SpecialButtonDark>
              ) : (
                <SpecialButton
                  variant="secondary"
                  size="medium"
                  onClick={() => router.push('/about')}
                >
                  Erfahre mehr über mich
                  <ArrowRight className="w-4 h-4" />
                </SpecialButton>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Introduction
