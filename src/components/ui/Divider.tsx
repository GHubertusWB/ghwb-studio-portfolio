'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '@/contexts/ThemeContext'

interface DividerProps {
  variant?: 'comet' | 'default'
  paddingY?: string
  className?: string
}

const Divider: React.FC<DividerProps> = ({ 
  variant = 'default', 
  paddingY = 'py-8',
  className = '' 
}) => {
  const { theme } = useTheme()

  const CometAnimation = () => (
    <div className="relative w-full h-full overflow-hidden bg-transparent">
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 z-10"
        initial={{ x: '-200px' }}
        animate={{ x: 'calc(100vw + 1000px)' }}
        transition={{
          duration: 14,
          ease: "linear",
          repeat: Infinity,
          repeatDelay: 0
        }}
      >
        {/* Komet basierend auf dem realen Bild */}
        <div className="relative">
          {/* Sehr heller weißer Kern - wie im Bild */}
          <motion.div
            className="w-2 h-2 rounded-full bg-white relative z-30"
            style={{
              filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 1)) drop-shadow(0 0 8px rgba(255, 255, 255, 0.8))',
              boxShadow: '0 0 6px rgba(255, 255, 255, 1), 0 0 12px rgba(255, 255, 255, 0.6)'
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.95, 1, 0.95]
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity
            }}
          />

          {/* Türkis-grüner Halo um den Kern - wie im Bild */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, rgba(34, 211, 238, 0.4) 30%, rgba(16, 185, 129, 0.3) 60%, transparent 85%)',
              filter: 'blur(3px)'
            }}
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.6, 0.8, 0.6]
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity
            }}
          />

          {/* Äußerer größerer grün-türkiser Halo */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full"
            style={{
              background: 'radial-gradient(circle, transparent 0%, rgba(34, 211, 238, 0.15) 40%, rgba(16, 185, 129, 0.2) 70%, transparent 90%)',
              filter: 'blur(8px)'
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.6, 0.4]
            }}
            transition={{
              duration: 4,
              ease: "easeInOut",
              repeat: Infinity
            }}
          />
          
          {/* Dreieckiger Schweif - langes dünnes Dreieck nach hinten mit Verlauf */}
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 right-1"
            style={{
              width: '0',
              height: '0',
              borderTop: '16px solid transparent',
              borderBottom: '16px solid transparent',
              borderLeft: '150px solid rgba(0, 221, 255, 0.8)',
              filter: 'blur(20px)',
              boxShadow: '0 0 8px rgba(0, 221, 255, 0.6), 0 0 16px rgba(0, 221, 255, 0.4)'
            }}
            animate={{
              opacity: [0.4, 0.7, 0.4],
              scaleX: [1, 1.1, 1]
            }}
            transition={{
              duration: 4,
              ease: "easeInOut",
              repeat: Infinity
            }}
          />

          {/* Zweiter Dreieck-Schweif für Tiefe mit Gradient-Effekt */}
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 right-1"
            style={{
              width: '0',
              height: '0',
              borderTop: '4px solid transparent',
              borderBottom: '4px solid transparent',
              borderRight: '800px solid rgba(104, 223, 183, 0.55)',
              filter: 'blur(8px)',
            }}
            animate={{
              opacity: [0.3, 0.5, 0.3],
              scaleY: [1, 1.2, 1]
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity
            }}
          />

          {/* Dritter Dreieck-Schweif - Duplikat mit weniger Blur */}
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 right-1"
            style={{
              width: '0',
              height: '0',
              borderTop: '4px solid transparent',
              borderBottom: '4px solid transparent',
              borderRight: '400px solid rgba(104, 223, 183, 0.55)',
              filter: 'blur(2px)',
            }}
            animate={{
              opacity: [0.3, 0.5, 0.3],
              scaleY: [1, 1.2, 1]
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity
            }}
          />

          {/* Verglühende Partikel */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-white"
              style={{
                filter: 'blur(1px)',
                boxShadow: '0 0 2px rgba(0, 221, 255, 0.8)'
              }}
              initial={{
                x: Math.random() * 8 - 4,
                y: Math.random() * 8 - 4,
                opacity: 0.8,
                scale: 1
              }}
              animate={{
                x: [
                  Math.random() * 8 - 4,
                  -(Math.random() * 40 + 20),
                  -(Math.random() * 80 + 40)
                ],
                y: [
                  Math.random() * 8 - 4,
                  Math.random() * 20 - 10,
                  Math.random() * 30 - 15
                ],
                opacity: [0.8, 0.4, 0],
                scale: [1, 0.6, 0.2]
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                ease: "easeOut",
                repeat: Infinity,
                repeatDelay: Math.random() * 3,
                delay: Math.random() * 2
              }}
            />
          ))}

          {/* Zusätzliche kleinere Partikel */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`small-${i}`}
              className="absolute w-0.5 h-0.5 rounded-full bg-emerald-300"
              style={{
                filter: 'blur(0.5px)',
                boxShadow: '0 0 1px rgba(16, 185, 129, 0.6)'
              }}
              initial={{
                x: Math.random() * 6 - 3,
                y: Math.random() * 6 - 3,
                opacity: 0.6,
                scale: 1
              }}
              animate={{
                x: [
                  Math.random() * 6 - 3,
                  -(Math.random() * 25 + 15),
                  -(Math.random() * 50 + 30)
                ],
                y: [
                  Math.random() * 6 - 3,
                  Math.random() * 15 - 7,
                  Math.random() * 25 - 12
                ],
                opacity: [0.6, 0.2, 0],
                scale: [1, 0.4, 0.1]
              }}
              transition={{
                duration: 1.5 + Math.random() * 1.5,
                ease: "easeOut",
                repeat: Infinity,
                repeatDelay: Math.random() * 4,
                delay: Math.random() * 3
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )

  const DefaultAnimation = () => (
    <div className="w-full h-full flex items-center justify-center">
      {theme === 'dark' ? (
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      ) : (
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
      )}
    </div>
  )

  return (
    <div className={`w-full max-h-[160px] ${paddingY} ${className}`}>
      <div className="relative h-[160px] min-h-[160px]">
        {variant === 'comet' && theme === 'dark' ? (
          <CometAnimation />
        ) : (
          <DefaultAnimation />
        )}
      </div>
    </div>
  )
}

export default Divider
