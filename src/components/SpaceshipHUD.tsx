'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/contexts/ThemeContext'
import { useEffect, useState } from 'react'

const SpaceshipHUD = () => {
  const { theme } = useTheme()
  const [currentTime, setCurrentTime] = useState('')
  const [animationKey, setAnimationKey] = useState(0)

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString('de-DE', { 
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }))
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  // Trigger animation on theme change
  useEffect(() => {
    setAnimationKey(prev => prev + 1)
  }, [theme])
  
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
      <motion.div
        key={animationKey}
        className="relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: theme === 'dark' ? 0.4 : 0, scale: 1 }}
        transition={{ duration: 2, delay: animationKey === 0 ? 1 : 0 }}
      >
        <svg
          width="100vw"
          height="100vh"
          viewBox="0 0 1920 1080"
          className="drop-shadow-lg"
          style={{
            filter: `drop-shadow(0 0 20px white)`,
          }}
        >
          {/* Main circular HUD */}
          <motion.path
            key={`main-${animationKey}`}
            d="M 520 540 A 440 440 0 1 1 1400 540"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            strokeDasharray="5,10"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, delay: animationKey === 0 ? 1.5 : 0.5 }}
          />
          
          {/* Inner circle */}
          <motion.path
            key={`inner-${animationKey}`}
            d="M 560 540 A 400 400 0 1 1 1360 540"
            fill="none"
            stroke="white"
            strokeWidth="1"
            strokeOpacity="0.6"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, delay: animationKey === 0 ? 2 : 0.8 }}
          />
          
          {/* Corner brackets */}
          <motion.g
            key={`brackets-${animationKey}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: animationKey === 0 ? 2.5 : 1.2 }}
          >
            {/* Top left */}
            <path
              d="M50 50 L50 20 L80 20"
              fill="none"
              stroke="white"
              strokeWidth="2"
            />
            {/* Top right */}
            <path
              d="M1870 50 L1870 20 L1840 20"
              fill="none"
              stroke="white"
              strokeWidth="2"
            />
            {/* Bottom left */}
            <path
              d="M50 1030 L50 1060 L80 1060"
              fill="none"
              stroke="white"
              strokeWidth="2"
            />
            {/* Bottom right */}
            <path
              d="M1870 1030 L1870 1060 L1840 1060"
              fill="none"
              stroke="white"
              strokeWidth="2"
            />
          </motion.g>
          
          {/* Crosshairs */}
          <motion.g
            key={`crosshairs-${animationKey}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 1, delay: animationKey === 0 ? 3 : 1.5 }}
          >
            <line
              x1="960"
              y1="440"
              x2="960"
              y2="410"
              stroke="white"
              strokeWidth="1"
            />
            <line
              x1="960"
              y1="640"
              x2="960"
              y2="670"
              stroke="white"
              strokeWidth="1"
            />
            <line
              x1="660"
              y1="540"
              x2="630"
              y2="540"
              stroke="white"
              strokeWidth="1"
            />
            <line
              x1="1260"
              y1="540"
              x2="1290"
              y2="540"
              stroke="white"
              strokeWidth="1"
            />
          </motion.g>
          
          {/* Side lines */}
          <motion.g
            key={`sidelines-${animationKey}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 1, delay: animationKey === 0 ? 3 : 1.5 }}
          >
            <line
              x1="540"
              y1="540"
              x2="400"
              y2="540"
              stroke="white"
              strokeWidth="2"
            />
            <line
              x1="1380"
              y1="540"
              x2="1520"
              y2="540"
              stroke="white"
              strokeWidth="2"
            />
          </motion.g>
          
          {/* Side panels */}
          <motion.g
            key={`sidepanels-${animationKey}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 0.6, x: 0 }}
            transition={{ duration: 1, delay: animationKey === 0 ? 3.5 : 2 }}
          >
            {/* Left side data */}
            <rect
              x="150"
              y="500"
              width="180"
              height="80"
              fill="none"
              stroke="white"
              strokeWidth="1"
              strokeOpacity="0.5"
            />
            <text
              x="170"
              y="520"
              fill="white"
              fontSize="14"
              fontFamily="monospace"
              opacity="0.8"
            >
              STATUS
            </text>
            <text
              x="170"
              y="545"
              fill="white"
              fontSize="20"
              fontFamily="monospace"
              fontWeight="bold"
            >
              ONLINE
            </text>
            <text
              x="170"
              y="565"
              fill="white"
              fontSize="12"
              fontFamily="monospace"
              opacity="0.6"
            >
              {currentTime}
            </text>
          </motion.g>
          
          <motion.g
            key={`rightpanel-${animationKey}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 0.6, x: 0 }}
            transition={{ duration: 1, delay: animationKey === 0 ? 3.5 : 2 }}
          >
            {/* Right side data */}
            <rect
              x="1590"
              y="500"
              width="180"
              height="80"
              fill="none"
              stroke="white"
              strokeWidth="1"
              strokeOpacity="0.5"
            />
            <text
              x="1610"
              y="520"
              fill="white"
              fontSize="14"
              fontFamily="monospace"
              opacity="0.8"
            >
              SYSTEMS
            </text>
            <text
              x="1610"
              y="545"
              fill="white"
              fontSize="20"
              fontFamily="monospace"
              fontWeight="bold"
            >
              100%
            </text>
            <text
              x="1610"
              y="565"
              fill="white"
              fontSize="12"
              fontFamily="monospace"
              opacity="0.6"
            >
              ALL NOMINAL
            </text>
          </motion.g>
          

          
          {/* Rotating outer ring */}
          <motion.circle
            cx="960"
            cy="540"
            r="480"
            fill="none"
            stroke="white"
            strokeWidth="1"
            strokeDasharray="2,20"
            strokeOpacity="0.7"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "960px 540px" }}
          />
          
          {/* Scan lines */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 1, delay: 4 }}
          >
            <line
              x1="0"
              y1="200"
              x2="1920"
              y2="200"
              stroke="white"
              strokeWidth="0.5"
              strokeOpacity="0.2"
            />
            <line
              x1="0"
              y1="880"
              x2="1920"
              y2="880"
              stroke="white"
              strokeWidth="0.5"
              strokeOpacity="0.2"
            />
          </motion.g>
        </svg>
      </motion.div>
    </div>
  )
}

export default SpaceshipHUD
