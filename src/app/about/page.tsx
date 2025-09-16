'use client'

import { useTheme } from '@/contexts/ThemeContext'
import AboutPageDark from './components/AboutPageDark'
import AboutPageLight from './components/AboutPageLight'
import { useState, useEffect } from 'react'

const AboutPage = () => {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent hydration mismatch by rendering nothing until mounted
  if (!mounted) {
    return <div className="min-h-screen bg-gray-50" />
  }
  
  if (theme === 'dark') {
    return <AboutPageDark />
  }
  return <AboutPageLight />
}

export default AboutPage
