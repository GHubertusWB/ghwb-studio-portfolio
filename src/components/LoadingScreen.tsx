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
  const [loadedAssets, setLoadedAssets] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const { theme } = useTheme()

  // Asset URLs zum Vorladen
  const assetsToPreload = [
    '/icons/logo/logo.svg',
    '/icons/logo/logo-blue.svg',
    // API-Endpunkte für Galerie-Bilder
    '/api/gallery/photography',
    '/api/gallery/art',
    // Weitere wichtige Assets hier hinzufügen
  ]

  useEffect(() => {
    let mounted = true
    const totalAssets = 10 // Realistische Anzahl für bessere UX
    let loaded = 0

    // Preload-Funktion
    const preloadAsset = (src: string): Promise<void> => {
      return new Promise((resolve) => {
        if (src.includes('/api/')) {
          // API-Aufruf für Galerie-Bilder
          fetch(src)
            .then(res => res.json())
            .then(data => {
              if (data.images && data.images.length > 0) {
                // Lade die ersten 3 Bilder vor (für bessere Performance)
                const imagePromises = data.images.slice(0, 3).map((imgSrc: string) => {
                  return new Promise<void>((imgResolve) => {
                    const img = new window.Image()
                    img.onload = () => imgResolve()
                    img.onerror = () => imgResolve() // Auch bei Fehlern fortfahren
                    img.src = imgSrc
                  })
                })
                Promise.all(imagePromises).then(() => resolve())
              } else {
                resolve()
              }
            })
            .catch(() => resolve()) // Bei Fehlern einfach fortfahren
        } else {
          // Normale Bildressourcen
          const img = new window.Image()
          img.onload = () => resolve()
          img.onerror = () => resolve() // Auch bei Fehlern fortfahren
          img.src = src
        }
      })
    }

    // Simuliere Loading-Prozess mit realistischen Schritten
    const simulateLoading = async () => {
      // Schritt 1: Logo-Assets laden
      await preloadAsset('/icons/logo/logo.svg')
      if (mounted) {
        loaded++
        setLoadedAssets(loaded)
        // Smooth progress animation
        let currentProgress = 0
        const targetProgress = (loaded / totalAssets) * 100
        const progressInterval = setInterval(() => {
          currentProgress += 1
          if (currentProgress >= targetProgress) {
            currentProgress = targetProgress
            clearInterval(progressInterval)
          }
          setProgress(currentProgress)
        }, 30)
      }

      await preloadAsset('/icons/logo/logo-blue.svg')
      if (mounted) {
        loaded++
        setLoadedAssets(loaded)
        // Smooth progress animation
        const targetProgress = (loaded / totalAssets) * 100
        let currentProgress = progress
        const progressInterval = setInterval(() => {
          currentProgress += 1
          if (currentProgress >= targetProgress) {
            currentProgress = targetProgress
            clearInterval(progressInterval)
          }
          setProgress(currentProgress)
        }, 30)
      }

      // Schritt 2: API-Endpunkte prüfen
      for (const apiUrl of ['/api/gallery/photography', '/api/gallery/art']) {
        await preloadAsset(apiUrl)
        if (mounted) {
          loaded += 2 // Zähle als 2 Assets (API + Bilder)
          setLoadedAssets(loaded)
          // Smooth progress animation
          const targetProgress = (loaded / totalAssets) * 100
          let currentProgress = progress
          const progressInterval = setInterval(() => {
            currentProgress += 1.5
            if (currentProgress >= targetProgress) {
              currentProgress = targetProgress
              clearInterval(progressInterval)
            }
            setProgress(currentProgress)
          }, 25)
        }
      }

      // Schritt 3: Weitere wichtige Ressourcen simulieren
      const additionalSteps = ['Fonts', 'Styles', 'Scripts', 'Components']
      for (let i = 0; i < additionalSteps.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 300 + Math.random() * 300))
        if (mounted) {
          loaded++
          setLoadedAssets(loaded)
          // Smooth progress update
          const targetProgress = (loaded / totalAssets) * 100
          let currentProgress = progress
          const progressAnimation = setInterval(() => {
            currentProgress += 2
            if (currentProgress >= targetProgress) {
              currentProgress = targetProgress
              clearInterval(progressAnimation)
            }
            setProgress(currentProgress)
          }, 20)
        }
      }

      // Mindest-Ladezeit für UX (damit der Loader sichtbar ist)
      setTimeout(() => {
        if (mounted) {
          setProgress(100)
          setTimeout(() => {
            setIsVisible(false)
            setTimeout(() => {
              onLoadingComplete()
            }, 500) // Warten auf Fade-out Animation
          }, 300)
        }
      }, 500)
    }

    simulateLoading()

    return () => {
      mounted = false
    }
  }, [onLoadingComplete])

  const circumference = 2 * Math.PI * 85 // Radius von 85px (größerer Kreis)
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{
            background: theme === 'dark' 
              ? 'rgba(0, 0, 0, 0.95)' 
              : 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <div className="relative flex flex-col items-center">
            {/* Logo mit Loader-Ring - Perfekt zentriert */}
            <div className="relative flex items-center justify-center" style={{ width: 200, height: 200 }}>
              {/* Äußerer Loader-Ring */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
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
                transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 200 }}
              >
                {theme === 'dark' ? (
                  <motion.div
                    animate={{ 
                      filter: [
                        'brightness(0) invert drop-shadow(0 0 8px rgba(255,255,255,0.4))',
                        'brightness(0) invert drop-shadow(0 0 12px rgba(255,255,255,0.6))',
                        'brightness(0) invert drop-shadow(0 0 8px rgba(255,255,255,0.4))'
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Image
                      src="/icons/logo/logo.svg"
                      alt="GHWB Studio"
                      width={80}
                      height={100}
                      priority
                    />
                  </motion.div>
                ) : (
                  <Image
                    src="/icons/logo/logo-blue.svg"
                    alt="GHWB Studio"
                    width={80}
                    height={100}
                    priority
                  />
                )}
              </motion.div>


            </div>

          </div>

          {/* Hintergrund-Partikel für zusätzliche Atmosphäre */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[
              { left: 10, top: 15, delay: 0 },
              { left: 85, top: 25, delay: 1 },
              { left: 30, top: 70, delay: 2 },
              { left: 75, top: 85, delay: 0.5 },
              { left: 15, top: 45, delay: 1.5 },
              { left: 90, top: 60, delay: 2.5 },
              { left: 45, top: 20, delay: 0.8 },
              { left: 60, top: 90, delay: 1.8 },
              { left: 5, top: 80, delay: 2.2 },
              { left: 95, top: 35, delay: 0.3 },
              { left: 25, top: 55, delay: 1.3 },
              { left: 70, top: 10, delay: 2.8 },
              { left: 35, top: 95, delay: 0.7 },
              { left: 80, top: 50, delay: 1.7 },
              { left: 55, top: 30, delay: 2.3 },
              { left: 20, top: 75, delay: 0.9 },
              { left: 65, top: 65, delay: 1.9 },
              { left: 40, top: 40, delay: 2.7 },
              { left: 85, top: 15, delay: 1.1 },
              { left: 12, top: 88, delay: 2.1 }
            ].map((particle, i) => (
              <motion.div
                key={i}
                className="absolute w-px h-px rounded-full"
                style={{
                  background: theme === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.1)',
                  left: `${particle.left}%`,
                  top: `${particle.top}%`
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: 3 + (i % 3),
                  repeat: Infinity,
                  delay: particle.delay,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
