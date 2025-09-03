'use client'

import { useTheme } from '@/contexts/ThemeContext'
import PhilosophyDark from './PhilosophyDark'
import PhilosophyLight from './PhilosophyLight'

const Philosophy = () => {
  const { theme } = useTheme()
  
  return theme === 'dark' ? <PhilosophyDark /> : <PhilosophyLight />
}

export default Philosophy
