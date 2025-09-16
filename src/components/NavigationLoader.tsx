'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { useTheme } from '@/contexts/ThemeContext'

export default function NavigationLoader() {
  const [isLoading, setIsLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const pathname = usePathname()
  const { theme } = useTheme()

  useEffect(() => {
    // Navigation Loading State für Route Changes
    const handleStart = () => {
      setIsLoading(true)
      setProgress(0)
      
      // Progress Animation über 800ms
      let currentProgress = 0
      const progressInterval = setInterval(() => {
        currentProgress += Math.random() * 15 + 5
        if (currentProgress > 90) {
          currentProgress = 90
        }
        setProgress(currentProgress)
        
        if (currentProgress >= 90) {
          clearInterval(progressInterval)
        }
      }, 50)
      
      // Fallback: Loader nach 2 Sekunden verstecken
      setTimeout(() => {
        setProgress(100)
        setTimeout(() => {
          setIsLoading(false)
          setProgress(0)
        }, 200)
      }, 2000)
    }

    const handleComplete = () => {
      setProgress(100)
      setTimeout(() => {
        setIsLoading(false)
        setProgress(0)
      }, 300)
    }

    // Event Listeners für Navigation
    window.addEventListener('beforeunload', handleStart)
    
    // Custom Events für Link Navigation
    window.addEventListener('navigationStart', handleStart)
    window.addEventListener('navigationComplete', handleComplete)

    return () => {
      window.removeEventListener('beforeunload', handleStart)
      window.removeEventListener('navigationStart', handleStart)
      window.removeEventListener('navigationComplete', handleComplete)
    }
  }, [])

  // Route Change Detection
  useEffect(() => {
    // Trigger navigation complete when pathname changes
    if (isLoading) {
      const timer = setTimeout(() => {
        setProgress(100)
        setTimeout(() => {
          setIsLoading(false)
          setProgress(0)
        }, 300)
      }, 100)
      
      return () => clearTimeout(timer)
    }
  }, [pathname, isLoading])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed top-0 left-0 right-0 z-[9999] h-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Progress Bar */}
          <motion.div
            className={`h-full origin-left ${
              theme === 'dark' 
                ? 'bg-gradient-to-r from-cyan-400 to-blue-500' 
                : 'bg-gradient-to-r from-blue-500 to-cyan-400'
            }`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: progress / 100 }}
            transition={{ 
              duration: 0.3, 
              ease: "easeOut",
              type: "tween"
            }}
          />
          
          {/* Glow Effect */}
          <motion.div
            className={`absolute top-0 right-0 h-full w-20 ${
              theme === 'dark'
                ? 'bg-gradient-to-l from-cyan-400/40 to-transparent'
                : 'bg-gradient-to-l from-blue-500/40 to-transparent'
            } blur-sm`}
            animate={{ 
              opacity: progress > 0 ? [0.5, 1, 0.5] : 0,
              scaleX: progress > 90 ? 1.2 : 1
            }}
            transition={{ 
              duration: 1.5, 
              repeat: progress < 100 ? Infinity : 0,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
