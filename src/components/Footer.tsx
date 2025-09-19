'use client'

import { motion } from 'framer-motion'
import { Linkedin, Mail, ArrowUp } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { SpecialButton } from '@/components/ui/SpecialButton'
import { SpecialButtonDark } from '@/components/ui/SpecialButtonDark'
import { useTheme } from '@/contexts/ThemeContext'

const Footer = () => {
  const { theme } = useTheme()
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/weidenbruechergh/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:office@ghwbstudio.de', label: 'E-Mail' }
  ]

  const footerLinks = [
    { href: '/design', label: 'UX/UI Design' },
    { href: '/photography', label: 'Fotografie' },
    { href: '/art', label: 'Kunst' },
    { href: '/about', label: 'Über mich' }
  ]

  return (
    <footer className="relative border-t border-border/50 mt-16 clear-both" style={{
      background: `
        linear-gradient(135deg, 
          rgba(173, 216, 230, 0.15) 0%, 
          rgba(135, 206, 235, 0.25) 50%, 
          rgba(70, 130, 180, 0.35) 100%
        ),
        var(--background)
      `
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold tracking-wider mb-4">GHWB STUDIO</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Kreative Lösungen für digitale Erlebnisse, 
              unvergessliche Momente und innovative Kunst.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {theme === 'dark' ? (
                  <SpecialButtonDark
                    variant="tertiary"
                    size="sm"
                  >
                    {link.label}
                  </SpecialButtonDark>
                ) : (
                  <SpecialButton
                    variant="tertiary"
                    size="sm"
                  >
                    {link.label}
                  </SpecialButton>
                )}
              </Link>
            ))}
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={social.label}
                >
                  {theme === 'dark' ? (
                    <SpecialButtonDark
                      variant="tertiary"
                      size="base"
                      icon="only"
                      iconElement={<Icon className="w-5 h-5" />}
                    />
                  ) : (
                    <SpecialButton
                      variant="tertiary"
                      size="medium"
                    >
                      <Icon className="w-5 h-5" />
                    </SpecialButton>
                  )}
                </motion.a>
              )
            })}
          </div>
        </div>

        <div className="border-t border-border/50 py-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 sm:mb-0">
            © 2025 GHWB Studio. Alle Rechte vorbehalten.
          </p>
          
          <div className="flex space-x-4">
            <Link href="/impressum">
              {theme === 'dark' ? (
                <SpecialButtonDark
                  variant="tertiary"
                  size="sm"
                >
                  Impressum
                </SpecialButtonDark>
              ) : (
                <SpecialButton
                  variant="tertiary"
                  size="sm"
                >
                  Impressum
                </SpecialButton>
              )}
            </Link>
            <Link href="/datenschutz">
              {theme === 'dark' ? (
                <SpecialButtonDark
                  variant="tertiary"
                  size="sm"
                >
                  Datenschutz
                </SpecialButtonDark>
              ) : (
                <SpecialButton
                  variant="tertiary"
                  size="sm"
                >
                  Datenschutz
                </SpecialButton>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <motion.div
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400 }}
        className="absolute top-4 right-4 md:top-8 md:right-8"
      >
        {theme === 'dark' ? (
          <SpecialButtonDark
            variant="tertiary"
            size="base"
            onClick={scrollToTop}
            icon="only"
            iconElement={<ArrowUp className="w-5 h-5" />}
          />
        ) : (
          <SpecialButton
            variant="tertiary"
            size="medium"
            onClick={scrollToTop}
          >
            <ArrowUp className="w-5 h-5" />
          </SpecialButton>
        )}
      </motion.div>
    </footer>
  )
}

export default Footer
