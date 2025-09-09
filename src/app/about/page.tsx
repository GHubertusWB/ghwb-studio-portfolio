'use client'

import { useTheme } from '@/contexts/ThemeContext'
import AboutPageDark from './components/AboutPageDark'
import AboutPageLight from './components/AboutPageLight'

const AboutPage = () => {
  const { theme } = useTheme()
  
  if (theme === 'dark') {
    return <AboutPageDark />
  }
  return <AboutPageLight />
}

export default AboutPage
