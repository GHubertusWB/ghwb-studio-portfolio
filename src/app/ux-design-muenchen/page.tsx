'use client'

import { useTheme } from '@/contexts/ThemeContext'
import UXDesignMuenchenLight from './components/UXDesignMuenchenLight'
import UXDesignMuenchenDark from './components/UXDesignMuenchenDark'

const UXDesignMuenchenPage = () => {
  const { theme } = useTheme()
  if (theme === 'dark') {
    return <UXDesignMuenchenDark />
  }
  return <UXDesignMuenchenLight />
}

export default UXDesignMuenchenPage
