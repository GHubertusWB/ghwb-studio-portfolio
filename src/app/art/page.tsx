'use client'

import { useTheme } from '@/contexts/ThemeContext'
import ArtPageLightSimpleNew from '@/components/art/ArtPageLightSimpleNew'
// import ArtPageDark from './components/ArtPageDark'

// Temporary simple component for dark mode
const ArtPageDark = () => <div>Art Page Dark Works!</div>

export default function ArtPage() {
  const { theme } = useTheme()

  // Conditional rendering based on theme for optimal performance
  if (theme === 'dark') {
    return <ArtPageDark />
  } else {
    return <ArtPageLightSimpleNew />
  }
}
