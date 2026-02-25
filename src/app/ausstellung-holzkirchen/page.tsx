'use client'

import { useTheme } from '@/contexts/ThemeContext'
import AusstellungLight from './components/AusstellungLight'
import AusstellungDark from './components/AusstellungDark'

const AusstellungHolzkirchenPage = () => {
  const { theme } = useTheme()
  if (theme === 'dark') {
    return <AusstellungDark />
  }
  return <AusstellungLight />
}

export default AusstellungHolzkirchenPage
