'use client'

import { motion } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'

const StarField = () => {
  const { theme } = useTheme()

  // Only render in dark mode
  if (theme !== 'dark') return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {[...Array(150)].map((_, i) => {
        // Completely random distribution with seeded randomness for consistency
        const seed1 = Math.sin(i * 12.9898) * 43758.5453
        const seed2 = Math.sin(i * 78.233) * 37.5419
        const seed3 = Math.sin(i * 23.14159) * 50.1234
        const seed4 = Math.sin(i * 65.789) * 28.3456
        
        // Extract decimal part for pseudo-random values between 0-1
        const random1 = seed1 - Math.floor(seed1)
        const random2 = seed2 - Math.floor(seed2)
        const random3 = seed3 - Math.floor(seed3)
        const random4 = seed4 - Math.floor(seed4)
        
        // Completely random positions (0-100%)
        const leftPos = Math.abs(random1) * 100
        const topPos = Math.abs(random2) * 100
        
        // Random size variation (0.8px to 2px)
        const size = 0.8 + (Math.abs(random3) * 1.2)
        
        const duration = 5 + (Math.abs(random4) * 7) // 5-12 seconds
        const delay = (Math.abs(random1) * 15) // 0-15 seconds delay
        
        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              left: `${leftPos}%`,
              top: `${topPos}%`,
              width: `${size}px`,
              height: `${size}px`,
              boxShadow: `0 0 ${size * 2}px rgba(255,255,255,0.8), 0 0 ${size * 4}px rgba(255,255,255,0.4)`,
              filter: 'brightness(1.2)'
            }}
            animate={{
              opacity: [0.5, 1, 0.7, 1, 0.6],
              scale: [1, 1.3, 1.1, 1.4, 1],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              delay: delay,
              ease: "easeInOut"
            }}
          />
        )
      })}
    </div>
  )
}

export default StarField
