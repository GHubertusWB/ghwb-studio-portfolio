'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/contexts/ThemeContext'
import Image from 'next/image'
import FloatingClouds from './FloatingClouds'

const MainLogo = () => {
  const { theme } = useTheme()

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative flex flex-col items-center justify-center w-full h-full px-4 z-40"
    >
      {/* Floating clouds background in light mode */}
      {theme === 'light' && <FloatingClouds />}
      
      {/* Logo Container - Auto-sizing */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="relative z-30 flex flex-col items-center gap-8 w-full max-w-2xl"
      >
        {/* Logo Image with smooth opacity transition */}
        <div className="relative">
          {/* Light Mode Logo (Blue) */}
          <motion.div
            animate={{ opacity: theme === 'light' ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative"
          >
            <Image
              src="/icons/logo/logo-blue.svg"
              alt="GHWB Studio Logo"
              width={200}
              height={200}
              priority
              className="w-auto h-auto max-w-[30vw] max-h-[30vh] min-w-[120px] min-h-[150px]"
              style={{ width: 'auto !important', height: 'auto !important' }}
            />
          </motion.div>
          
          {/* Dark Mode Logo (White) - Positioned absolutely on top */}
          <motion.div
            animate={{ opacity: theme === 'dark' ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src="/icons/logo/logo.svg"
              alt="GHWB Studio Logo"
              width={200}
              height={200}
              priority
              className="w-auto h-auto max-w-[30vw] max-h-[30vh] min-w-[120px] min-h-[150px]"
              style={{ width: 'auto !important', height: 'auto !important' }}
            />
          </motion.div>
        </div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          {/* GHWB - Ultra Bold */}
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-poppins font-black text-foreground tracking-[0.2em] mb-2"
            style={{ fontWeight: 900, marginRight: '-0.2em' }}
          >
            GHWB
          </motion.h1>
          
          {/* STUDIO - Weight 200 */}
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-poppins text-foreground tracking-[0.5em]"
            style={{ fontWeight: 200, marginRight: '-0.5em' }}
          >
            STUDIO
          </motion.h2>
        </motion.div>
      </motion.div>


    </motion.div>
  )
}

export default MainLogo
