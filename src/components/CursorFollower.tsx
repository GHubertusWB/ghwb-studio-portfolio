'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'
import Lottie from 'lottie-react'
import { useTheme } from '@/contexts/ThemeContext'

const CursorFollower = () => {
  const { theme } = useTheme()
  const [lightAnimationData, setLightAnimationData] = useState(null)
  const [isInHero, setIsInHero] = useState(false)
  const heroRef = useRef<HTMLElement | null>(null)

  // Mouse position tracking
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  // Smooth following with spring physics - träger für sanfte Bewegungen
  const springX = useSpring(mouseX, { damping: 30, stiffness: 150 })
  const springY = useSpring(mouseY, { damping: 30, stiffness: 150 })

  // Load Lottie animation
  useEffect(() => {
    const loadAnimations = async () => {
      try {
        // Load light mode animation
        const lightResponse = await fetch('/cursor-follow.json')
        const lightAnimData = await lightResponse.json()
        setLightAnimationData(lightAnimData)
      } catch (error) {
        // Lottie animation loading failed - continue without animation
      }
    }

    loadAnimations()
  }, [])

  // Track mouse movement and hero section bounds
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)

      // Check if mouse is over hero section
      if (!heroRef.current) {
        heroRef.current = document.querySelector('section') as HTMLElement
      }

      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        const isOver = (
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom
        )
        setIsInHero(isOver)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <>
      {/* Light Mode Animation only */}
      {theme === 'light' && lightAnimationData && (
        <motion.div
          className="fixed pointer-events-none z-40"
          style={{
            x: springX,
            y: springY,
            translateX: '-50%',
            translateY: '-50%',
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: isInHero ? 1 : 0,
            opacity: isInHero ? 1 : 0
          }}
          transition={{ 
            scale: { 
              duration: 0.6,
              ease: "easeOut"
            },
            opacity: { 
              duration: 0.4,
              ease: "easeOut"
            }
          }}
        >
          <div className="w-160 h-160">
            <Lottie
              animationData={lightAnimationData}
              loop={true}
              autoplay={true}
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          </div>
        </motion.div>
      )}
    </>
  )
}

export default CursorFollower
