'use client'

import { useTheme } from '@/contexts/ThemeContext'
import WebdesignHolzkirchenLight from './components/WebdesignHolzkirchenLight'
import WebdesignHolzkirchenDark from './components/WebdesignHolzkirchenDark'

const WebdesignHolzkirchenPage = () => {
  const { theme } = useTheme()
  if (theme === 'dark') {
    return <WebdesignHolzkirchenDark />
  }
  return <WebdesignHolzkirchenLight />
}

export default WebdesignHolzkirchenPage
