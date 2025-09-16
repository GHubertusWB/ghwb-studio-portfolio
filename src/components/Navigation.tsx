'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'
import { cn } from '@/lib/utils'
import { Button } from './ui/Button'

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
            <Link href="/" className="text-xl tracking-wider">
              <motion.span
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="flex items-center"
              >
                <span className="font-bold">GHWB</span>
                <span className="font-medium ml-2">STUDIO</span>
              </motion.span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-2">
              {menuItems.slice(1).map((item) => (
                <Link key={item.href} href={item.href}>
                  <Button
                    variant="tertiary"
                    size="xs"
                    className={cn(
                      "relative text-sm transition-colors",
                      pathname === item.href
                        ? "text-foreground font-semibold"
                        : "text-foreground/60 hover:text-foreground/80"
                    )}
                  >
                    {item.label}
                    {pathname === item.href && mounted && (
                      <motion.div
                        layoutId="underline"
                        className={cn(
                          "absolute left-0 top-full h-1 w-full rounded-full",
                          theme === 'dark' 
                            ? "bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg shadow-cyan-400/25" 
                            : "bg-gradient-to-r from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/25"
                        )}
                        initial={false}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Button>
                </Link>
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
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                  >
                    <Button
                      variant="tertiary"
                      size="base"
                      className={cn(
                        "text-2xl relative px-8 py-4",
                        pathname === item.href
                          ? "text-foreground font-semibold"
                          : "text-foreground/60"
                      )}
                    >
                      {item.label}
                      {pathname === item.href && mounted && (
                        <motion.div
                          className={cn(
                            "absolute left-0 top-full h-1 w-full rounded-full mt-2",
                            theme === 'dark' 
                              ? "bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg shadow-cyan-400/25" 
                              : "bg-gradient-to-r from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/25"
                          )}
                          layoutId="mobile-underline"
                          initial={false}
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                    </Button>
                  </Link>
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
