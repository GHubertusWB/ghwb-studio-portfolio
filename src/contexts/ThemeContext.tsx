'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'dark' | 'light'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  // Theme Initialization ohne eval()
  useEffect(() => {
    const initializeTheme = () => {
      try {
        const savedTheme = window.localStorage.getItem('theme') as Theme
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light')
        
        setTheme(initialTheme)
        document.documentElement.classList.remove('light', 'dark')
        document.documentElement.classList.add(initialTheme)
      } catch (error) {
        // Fallback bei localStorage Problemen
        setTheme('light')
        document.documentElement.classList.add('light')
      }
      setMounted(true)
    }

    initializeTheme()
  }, [])

  useEffect(() => {
    if (!mounted) return
    
    try {
      const root = document.documentElement
      root.classList.remove('light', 'dark')
      root.classList.add(theme)
      localStorage.setItem('theme', theme)
    } catch (error) {
      console.warn('Could not save theme to localStorage:', error)
    }
  }, [theme, mounted])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  // Verhindere Flash of Unstyled Content während Theme-Loading
  if (!mounted) {
    return (
      <ThemeContext.Provider value={{ theme: 'light', toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    )
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
