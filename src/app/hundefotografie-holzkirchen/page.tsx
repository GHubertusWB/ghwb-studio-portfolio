'use client'

import { useTheme } from '@/contexts/ThemeContext'
import HundefotografieHolzkirchenLight from './components/HundefotografieHolzkirchenLight'
import HundefotografieHolzkirchenDark from './components/HundefotografieHolzkirchenDark'

const HundefotografieHolzkirchenPage = () => {
  const { theme } = useTheme()
  if (theme === 'dark') {
    return <HundefotografieHolzkirchenDark />
  }
  return <HundefotografieHolzkirchenLight />
}

export default HundefotografieHolzkirchenPage
