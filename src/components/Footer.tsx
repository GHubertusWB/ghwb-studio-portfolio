'use client'

import { motion } from 'framer-motion'
import { Instagram, Linkedin, Mail, ArrowUp } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
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
    <footer className="relative bg-muted/50 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold tracking-wider mb-4">GHWB STUDIO</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Kreative Lösungen für digitale Erlebnisse, 
              unvergessliche Momente und innovative Kunst.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <Button
                  variant="tertiary"
                  size="sm"
                  className="text-muted-foreground hover:text-foreground"
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-6 mb-12"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="p-3 rounded-full bg-background border border-border/50 hover:border-border transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              )
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-border/50 py-8 flex flex-col sm:flex-row justify-between items-center"
        >
          <p className="text-sm text-muted-foreground mb-4 sm:mb-0">
            © 2025 GHWB Studio. Alle Rechte vorbehalten.
          </p>
          
          <div className="flex space-x-4">
            <Link href="/impressum">
              <Button
                variant="tertiary"
                size="xs"
                className="text-muted-foreground hover:text-foreground text-sm"
              >
                Impressum
              </Button>
            </Link>
            <Link href="/datenschutz">
              <Button
                variant="tertiary"
                size="xs"
                className="text-muted-foreground hover:text-foreground text-sm"
              >
                Datenschutz
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll to top button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400 }}
        className="absolute top-8 right-8"
      >
        <Button
          variant="secondary"
          size="sm"
          onClick={scrollToTop}
          className="bg-background border-border/50 hover:border-border"
          icon="only"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      </motion.div>
    </footer>
  )
}

export default Footer
