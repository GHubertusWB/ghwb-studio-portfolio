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

  const footerSections = [
    { 
      href: '/design', 
      label: 'UX/UI Design',
      subLinks: [
        { href: '/webdesign-holzkirchen', label: 'Webdesign Holzkirchen' }
      ]
    },
    { href: '/ai-integration', label: 'AI Integration', subLinks: [] },
    { href: '/photography', label: 'Fotografie', subLinks: [] },
    { href: '/art', label: 'Kunst', subLinks: [] },
    { href: '/about', label: 'Über mich', subLinks: [] }
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

          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {footerSections.map((section) => (
              <div key={section.href} className="flex flex-col items-center sm:items-start">
                <Link 
                  href={section.href}
                  className={`font-bold mb-2 transition-colors ${
                    theme === 'dark' 
                      ? 'text-gray-200 hover:text-blue-400' 
                      : 'text-gray-800 hover:text-blue-600'
                  }`}
                >
                  {section.label}
                </Link>
                {section.subLinks && section.subLinks.length > 0 && (
                  <div className={`flex flex-col space-y-1.5 border-l pl-3 ${
                    theme === 'dark' ? 'border-gray-600' : 'border-gray-300'
                  }`}>
                    {section.subLinks.map((subLink) => (
                      <Link
                        key={subLink.href}
                        href={subLink.href}
                        className={`text-sm transition-colors ${
                          theme === 'dark'
                            ? 'text-gray-400 hover:text-blue-400'
                            : 'text-gray-600 hover:text-blue-600'
                        }`}
                      >
                        {subLink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
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
