'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'
import { cn } from '@/lib/utils'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
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
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
            <Link href="/" className="text-xl font-bold tracking-wider">
              <motion.span
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                GHWB STUDIO
              </motion.span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.slice(1).map((item) => (
                <Link key={item.href} href={item.href}>
                  <motion.span
                    className={cn(
                      "relative text-sm font-medium transition-colors hover:text-foreground/80",
                      pathname === item.href
                        ? "text-foreground"
                        : "text-foreground/60"
                    )}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                    {pathname === item.href && (
                      <motion.div
                        layoutId="underline"
                        className="absolute left-0 top-full h-0.5 w-full bg-foreground"
                        initial={false}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </motion.span>
                </Link>
              ))}
            </div>

            {/* Theme Toggle & Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              <motion.button
                onClick={toggleTheme}
                className="p-3 rounded-full bg-background/20 backdrop-blur-md border border-white/10 hover:bg-background/30 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  background: theme === 'dark' 
                    ? 'rgba(255, 255, 255, 0.1)' 
                    : 'rgba(0, 0, 0, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: theme === 'dark' 
                    ? '1px solid rgba(255, 255, 255, 0.2)' 
                    : '1px solid rgba(0, 0, 0, 0.1)'
                }}
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: theme === 'dark' ? 0 : 180 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {theme === 'dark' ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </motion.div>
              </motion.button>

              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-3 rounded-full bg-background/20 backdrop-blur-md border border-white/10 hover:bg-background/30 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  background: theme === 'dark' 
                    ? 'rgba(255, 255, 255, 0.1)' 
                    : 'rgba(0, 0, 0, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: theme === 'dark' 
                    ? '1px solid rgba(255, 255, 255, 0.2)' 
                    : '1px solid rgba(0, 0, 0, 0.1)'
                }}
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-md z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-80 bg-background border-l border-border z-50 md:hidden"
            >
              <div className="p-6 pt-20">
                <div className="space-y-6">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "block text-lg font-medium transition-colors",
                          pathname === item.href
                            ? "text-foreground"
                            : "text-foreground/60"
                        )}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation
