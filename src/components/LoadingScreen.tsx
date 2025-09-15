'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useTheme } from '@/contexts/ThemeContext'

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const { theme } = useTheme()

  useEffect(() => {
    let mounted = true
    
    // Visueller Progress läuft unabhängig (für UX)
    const startTime = Date.now()
    const progressInterval = setInterval(() => {
      if (!mounted) {
        clearInterval(progressInterval)
        return
      }
      
      const elapsed = Date.now() - startTime
      // Langsamer Progress bis 90%, dann warten auf onLoadingComplete
      const newProgress = Math.min((elapsed / 6000) * 90, 90)
      setProgress(newProgress)
    }, 50)

    return () => {
      mounted = false
      clearInterval(progressInterval)
    }
  }, [])

  // Wird von HomeWithLoader aufgerufen wenn Ressourcen fertig sind
  useEffect(() => {
    if (onLoadingComplete) {
      // Fortschritt auf 100% setzen und dann verschwinden
      setProgress(100)
      setTimeout(() => {
        setIsVisible(false)
        setTimeout(onLoadingComplete, 500)
      }, 800) // Kurz bei 100% bleiben
    }
  }, [onLoadingComplete])

  const circumference = 2 * Math.PI * 85 // Radius von 85px (größerer Kreis)
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        >
          <div className="relative flex flex-col items-center">
            {/* Logo mit Loader-Ring - Perfekt zentriert */}
            <div className="relative flex items-center justify-center" style={{ width: 200, height: 200 }}>
              {/* Äußerer Loader-Ring */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0 }}
              >
                <svg width="200" height="200" className="transform -rotate-90">
                  {/* Hintergrund-Ring */}
                  <circle
                    cx="100"
                    cy="100"
                    r="85"
                    stroke={theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}
                    strokeWidth="2"
                    fill="none"
                  />
                  {/* Fortschritts-Ring mit verstärktem Glow-Effekt */}
                  <motion.circle
                    cx="100"
                    cy="100"
                    r="85"
                    stroke={theme === 'dark' ? '#06b6d4' : '#0ea5e9'}
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    className="transition-all duration-1000 ease-out"
                    style={{
                      filter: theme === 'dark' 
                        ? 'drop-shadow(0 0 15px rgba(6, 182, 212, 0.8)) drop-shadow(0 0 30px rgba(6, 182, 212, 0.5)) drop-shadow(0 0 45px rgba(6, 182, 212, 0.3))'
                        : 'drop-shadow(0 0 12px rgba(14, 165, 233, 0.6)) drop-shadow(0 0 24px rgba(14, 165, 233, 0.4))'
                    }}
                    animate={progress > 0 ? {
                      filter: theme === 'dark' 
                        ? [
                            'drop-shadow(0 0 15px rgba(6, 182, 212, 0.8)) drop-shadow(0 0 30px rgba(6, 182, 212, 0.5)) drop-shadow(0 0 45px rgba(6, 182, 212, 0.3))',
                            'drop-shadow(0 0 25px rgba(6, 182, 212, 1)) drop-shadow(0 0 50px rgba(6, 182, 212, 0.7)) drop-shadow(0 0 75px rgba(6, 182, 212, 0.4))',
                            'drop-shadow(0 0 15px rgba(6, 182, 212, 0.8)) drop-shadow(0 0 30px rgba(6, 182, 212, 0.5)) drop-shadow(0 0 45px rgba(6, 182, 212, 0.3))'
                          ]
                        : [
                            'drop-shadow(0 0 12px rgba(14, 165, 233, 0.6)) drop-shadow(0 0 24px rgba(14, 165, 233, 0.4))',
                            'drop-shadow(0 0 20px rgba(14, 165, 233, 0.8)) drop-shadow(0 0 40px rgba(14, 165, 233, 0.6))',
                            'drop-shadow(0 0 12px rgba(14, 165, 233, 0.6)) drop-shadow(0 0 24px rgba(14, 165, 233, 0.4))'
                          ]
                    } : {}}
                    transition={{
                      filter: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                    }}
                  />
                </svg>
              </motion.div>

              {/* Logo in der Mitte - Perfekt zentriert */}
              <motion.div
                className="relative z-10 flex items-center justify-center"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 200 }}
              >
                {theme === 'dark' ? (
                  <motion.div
                    animate={{ 
                      filter: [
                        'brightness(0) invert drop-shadow(0 0 6px rgba(255,255,255,0.4))',
                        'brightness(0) invert drop-shadow(0 0 10px rgba(255,255,255,0.6))',
                        'brightness(0) invert drop-shadow(0 0 6px rgba(255,255,255,0.4))'
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Image
                      src="/icons/logo/logo.svg"
                      alt="GHWB Studio"
                      width={50}
                      height={60}
                      priority
                      style={{ width: '48px', height: 'auto' }}
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    animate={{ 
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Image
                      src="/icons/logo/logo-blue.svg"
                      alt="GHWB Studio"
                      width={50}
                      height={60}
                      priority
                      style={{ width: '48px', height: 'auto' }}
                    />
                  </motion.div>
                )}
              </motion.div>


            </div>

          </div>

          {/* Hintergrund-Partikel */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 20 }, (_, i) => {
              const positions = [
                { left: 10, top: 15 }, { left: 85, top: 25 }, { left: 30, top: 70 }, { left: 75, top: 85 },
                { left: 15, top: 45 }, { left: 90, top: 60 }, { left: 45, top: 20 }, { left: 60, top: 90 },
                { left: 5, top: 80 }, { left: 95, top: 35 }, { left: 25, top: 55 }, { left: 70, top: 10 },
                { left: 35, top: 95 }, { left: 80, top: 50 }, { left: 55, top: 30 }, { left: 20, top: 75 },
                { left: 65, top: 65 }, { left: 40, top: 40 }, { left: 85, top: 15 }, { left: 12, top: 88 }
              ]
              const pos = positions[i]
              return (
                <motion.div
                  key={i}
                  className="absolute w-px h-px rounded-full"
                  style={{
                    background: theme === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.1)',
                    left: `${pos.left}%`,
                    top: `${pos.top}%`
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0]
                  }}
                  transition={{
                    duration: 3 + (i % 3),
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: "easeInOut"
                  }}
                />
              )
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
