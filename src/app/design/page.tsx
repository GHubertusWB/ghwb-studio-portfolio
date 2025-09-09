'use client'

import { useTheme } from '@/contexts/ThemeContext'
import UXUIPageDark from './components/UXUIPageDark'
import UXUIPageLight from './components/UXUIPageLight'

const DesignPage = () => {
  const { theme } = useTheme()
  if (theme === 'dark') {
    return <UXUIPageDark />
  }
  return <UXUIPageLight />
}

export default DesignPage
