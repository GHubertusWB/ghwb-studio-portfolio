'use client'

import { useState, useEffect } from 'react'
import NavigationLink from './NavigationLink'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'
import { cn } from '@/lib/utils'
import { Button } from './ui/Button'
import { SpecialButton } from './ui/SpecialButton'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/design', label: 'UX/UI Design' },
    { href: '/photography', label: 'Fotografie' },
    { href: '/art', label: 'Kunst' },
    { href: '/about', label: 'Über mich' },
  ]

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return null
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-500",
          scrolled 
            ? "bg-background/80 backdrop-blur-md shadow-lg" 
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <NavigationLink href="/" className="text-xl tracking-wider">
              <motion.span
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="flex items-center"
              >
                <span className="font-bold">GHWB</span>
                <span className="font-medium ml-2">STUDIO</span>
              </motion.span>
            </NavigationLink>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              {menuItems.slice(1).map((item) => (
                <NavigationLink key={item.href} href={item.href}>
                  <span
                    className={cn(
                      "text-sm font-poppins font-semibold transition-all duration-300",
                      pathname === item.href
                        ? "text-[#FF8C42] drop-shadow-[0_0_8px_rgba(255,140,66,0.6)]"
                        : "text-foreground hover:text-[#4A90E2] hover:drop-shadow-[0_0_6px_rgba(74,144,226,0.5)]"
                    )}
                  >
                    {item.label}
                  </span>
                </NavigationLink>
              ))}
            </div>

            {/* Theme Toggle & Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              {mounted && (
                <motion.div whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.9 }}>
                  <Button
                    variant="secondary"
                    size="base"
                    icon="only"
                    onClick={toggleTheme}
                    iconElement={
                      <motion.div
                        initial={false}
                        animate={{ rotate: theme === 'dark' ? 0 : 180 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      >
                        {theme === 'dark' ? (
                          <Sun className="w-4 h-4" />
                        ) : (
                          <Moon className="w-4 h-4" />
                        )}
                      </motion.div>
                    }
                  />
                </motion.div>
              )}

              <motion.div whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="secondary"
                  size="base"
                  icon="only"
                  onClick={() => setIsOpen(!isOpen)}
                  className="md:hidden"
                  iconElement={
                    <motion.div
                      initial={false}
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center justify-center"
                    >
                      {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                    </motion.div>
                  }
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={cn(
              "fixed inset-0 backdrop-blur-xl z-40 md:hidden flex items-center justify-center",
              theme === 'dark' 
                ? "bg-black/80" 
                : "bg-white/50"
            )}
            onClick={() => setIsOpen(false)}
          >
            <div className="flex flex-col items-center space-y-8" onClick={(e) => e.stopPropagation()}>
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <NavigationLink
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                  >
                    <span
                      className={cn(
                        "text-2xl font-poppins font-semibold transition-all duration-300",
                        pathname === item.href
                          ? "text-[#FF8C42] drop-shadow-[0_0_12px_rgba(255,140,66,0.7)]"
                          : "text-foreground hover:text-[#4A90E2] hover:drop-shadow-[0_0_10px_rgba(74,144,226,0.6)]"
                      )}
                    >
                      {item.label}
                    </span>
                  </NavigationLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation
