'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '@/contexts/ThemeContext'

interface DividerProps {
    className?: string
}

const Divider: React.FC<DividerProps> = ({ 
  className = '' 
}) => {
  const { theme } = useTheme()

  return (
    <div className={`w-full max-h-40 ${className}`}>
      <div className="relative w-full h-40 overflow-hidden flex items-center justify-center">
        {theme === 'dark' ? (
          <motion.div
            className="absolute"
            initial={{ x: '-400px' }}
            animate={{ x: 'calc(100vw + 400px)' }}
            transition={{
              duration: 8,
              ease: "linear",
              repeat: Infinity,
              repeatDelay: 2
            }}
          >
            <img
              src="/images/Comet.svg"
              alt="Comet"
              className="w-auto h-16 opacity-90"
              style={{
                filter: 'drop-shadow(0 0 10px rgba(116, 223, 255, 0.5))'
              }}
            />
          </motion.div>
        ) : null}
      </div>
    </div>
  )
}

export default Divider
