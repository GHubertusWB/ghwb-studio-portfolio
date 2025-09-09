'use client'

import { useTheme } from '@/contexts/ThemeContext'
import PhotographyPageDark from './components/PhotographyPageDark'
import PhotographyPageLight from './components/PhotographyPageLight'

export default function PhotographyPage() {
  const { theme } = useTheme()

  // Conditional rendering based on theme for optimal performance
  if (theme === 'dark') {
    return <PhotographyPageDark />
  } else {
    return <PhotographyPageLight />
  }
}
