'use client'

import { useTheme } from '@/contexts/ThemeContext'
import AIIntegrationPageDark from './components/AIIntegrationPageDark'
import AIIntegrationPageLight from './components/AIIntegrationPageLight'

const AIIntegrationPage = () => {
  const { theme } = useTheme()
  if (theme === 'dark') {
    return <AIIntegrationPageDark />
  }
  return <AIIntegrationPageLight />
}

export default AIIntegrationPage
