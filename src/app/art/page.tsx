'use client'

import { useTheme } from '@/contexts/ThemeContext'
import ArtPageDark from './components/ArtPageDark'
import ArtPageLight from './components/ArtPageLight'

export default function ArtPage() {
  const { theme } = useTheme()

  // Conditional rendering based on theme for optimal performance
  if (theme === 'dark') {
    return <ArtPageDark />
  } else {
    return <ArtPageLight />
  }
}
