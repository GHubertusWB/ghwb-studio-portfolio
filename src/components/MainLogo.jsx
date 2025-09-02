'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/contexts/ThemeContext'
import Image from 'next/image'
import StarField from './StarField'
import FloatingClouds from './FloatingClouds'

const MainLogo = () => {
  const { theme } = useTheme()

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative flex flex-col items-center justify-center h-96 w-full px-12"
    >
      {/* Starfield only in dark mode */}
      {theme === 'dark' && <StarField />}
      
      {/* Floating clouds in light mode */}
      {theme === 'light' && <FloatingClouds />}
      {/* Main Logo Image */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative mb-16 z-30"
      >
        {theme === 'dark' ? (
          <div className="relative">
            <motion.div
              animate={{ 
                filter: [
                  'brightness(0) invert drop-shadow(0 0 8px rgba(255,255,255,0.4))',
                  'brightness(0) invert drop-shadow(0 0 12px rgba(255,255,255,0.5)) drop-shadow(0 0 18px rgba(255,255,255,0.2))',
                  'brightness(0) invert drop-shadow(0 0 6px rgba(255,255,255,0.6)) drop-shadow(0 0 10px rgba(255,255,255,0.3))',
                  'brightness(0) invert drop-shadow(0 0 14px rgba(255,255,255,0.3)) drop-shadow(0 0 20px rgba(255,255,255,0.15))',
                  'brightness(0) invert drop-shadow(0 0 9px rgba(255,255,255,0.45))'
                ]
              }}
              transition={{
                duration: 8.5, // Much slower
                repeat: Infinity,
                ease: [0.4, 0, 0.6, 1] // custom bezier curve for organic feel
              }}
            >
              <Image
                src="/icons/logo/logo.svg"
                alt="GHWB Studio Logo"
                width={160}
                height={200}
                priority
              />
            </motion.div>
            {/* Enhanced pulsing glow layers */}
            <motion.div 
              className="absolute inset-0 filter blur-md opacity-20"
              animate={{ 
                opacity: [0.15, 0.3, 0.2, 0.35, 0.18],
                scale: [0.98, 1.04, 1.01, 1.06, 0.99]
              }}
              transition={{
                duration: 7.2, // Much slower
                repeat: Infinity,
                ease: [0.25, 0.46, 0.45, 0.94] // organic easing
              }}
            >
              <Image
                src="/icons/logo/logo.svg"
                alt="GHWB Studio Logo"
                width={160}
                height={200}
                className="filter brightness-0 invert"
                priority
              />
            </motion.div>
            <motion.div 
              className="absolute inset-0 filter blur-lg opacity-10"
              animate={{ 
                opacity: [0.06, 0.15, 0.1, 0.18, 0.08],
                scale: [1, 1.08, 1.03, 1.12, 1.01]
              }}
              transition={{
                duration: 9.8, // Very slow
                repeat: Infinity,
                ease: [0.68, -0.55, 0.265, 1.55], // bouncy organic feel
                delay: 1.2 // Longer delay
              }}
            >
              <Image
                src="/icons/logo/logo.svg"
                alt="GHWB Studio Logo"
                width={160}
                height={200}
                className="filter brightness-0 invert"
                priority
              />
            </motion.div>
          </div>
        ) : (
          <Image
            src="/icons/logo/logo-blue.svg"
            alt="GHWB Studio Logo" 
            width={160}
            height={200}
            priority
          />
        )}
        
        {/* Floating particles for added visual interest */}
        <motion.div className="absolute inset-0">
          {[...Array(8)].map((_, i) => {
            // Fixed positions to avoid hydration mismatch
            const topPositions = [87, 92, 89, 94, 88, 91, 90, 93];
            return (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-foreground/30 rounded-full"
                style={{
                  left: `${10 + i * 10}%`,
                  top: `${topPositions[i]}%`,
                }}
                animate={{ 
                  opacity: [0, 0.6, 0],
                  y: [-15, -35, -55]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeOut"
                }}
              />
            )
          })}
        </motion.div>
      </motion.div>
      
      {/* Studio Text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="text-center space-y-4 relative z-30"
      >
        <h1 className="text-5xl font-poppins font-bold text-foreground text-center" style={{letterSpacing: '0.45em'}}>
          GHWB
        </h1>
        <h1 className="text-5xl font-poppins font-thin text-foreground text-center" style={{letterSpacing: '0.3em'}}>
          STUDIO
        </h1>
      </motion.div>

      {/* Enhanced glow effect for dark mode */}
      {theme === 'dark' && (
        <motion.div
          className="absolute inset-0 rounded-full opacity-0 pointer-events-none"
          animate={{ 
            opacity: [0, 0.12, 0.05, 0.15, 0.03, 0.14, 0],
            scale: [0.8, 1.15, 0.95, 1.25, 0.85, 1.18, 0.82]
          }}
          transition={{
            duration: 11.5, // Very slow background glow
            repeat: Infinity,
            ease: [0.42, 0, 0.58, 1] // smooth organic curve
          }}
          style={{
            background: `radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 40%, transparent 70%)`
          }}
        />
      )}
    </motion.div>
  )
}

export default MainLogo
