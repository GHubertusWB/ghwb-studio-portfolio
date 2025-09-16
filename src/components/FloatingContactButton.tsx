'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { Button } from './ui/Button'
import ContactModal from './ContactModal'
import { useTheme } from '@/contexts/ThemeContext'

interface FloatingContactButtonProps {
  title?: string
  subtitle?: string
}

/**
 * FloatingContactButton Component
 * 
 * Globales floating contact button system mit Modal.
 * Kann auf allen Seiten verwendet werden.
 * 
 * @param {FloatingContactButtonProps} props - Komponenten Props
 * @returns {JSX.Element} Das floating button system
 */

export default function FloatingContactButton({
  title = 'Kontakt aufnehmen',
  subtitle = 'Haben Sie ein Projekt im Kopf oder möchten Sie einfach Hallo sagen? Ich freue mich auf Ihre Nachricht.'
}: FloatingContactButtonProps): React.JSX.Element {
  
  // Verwende das aktuelle Theme aus dem Context
  const { theme } = useTheme()
  const [showStickyButton, setShowStickyButton] = useState(false)
  const [buttonBottomOffset, setButtonBottomOffset] = useState(16) // 1rem in px
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  // Scroll-Handler für sticky button visibility und position
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight // Hero ist full height
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const footerHeight = 400 // Geschätzte Footer-Höhe
      const baseOffset = 16 // 1rem in px

      // Button erscheint nach dem Hero
      const shouldShow = scrollPosition > heroHeight * 0.8
      setShowStickyButton(shouldShow)

      // Button position dynamisch anpassen
      const distanceFromBottom = documentHeight - (scrollPosition + windowHeight)
      
      if (distanceFromBottom < footerHeight + baseOffset) {
        // Button wird vom Footer nach oben geschoben
        const pushUpDistance = footerHeight + baseOffset - distanceFromBottom
        setButtonBottomOffset(baseOffset + pushUpDistance)
      } else {
        // Normale Position
        setButtonBottomOffset(baseOffset)
      }
    }

    window.addEventListener('scroll', handleScroll)
    // Initial check
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Global event listener für Hero-Button
  useEffect(() => {
    const handleGlobalContactOpen = () => {
      setIsContactModalOpen(true)
    }

    window.addEventListener('openContactModal', handleGlobalContactOpen)
    return () => window.removeEventListener('openContactModal', handleGlobalContactOpen)
  }, [])

  const openContactModal = () => {
    setIsContactModalOpen(true)
  }

  const closeContactModal = () => {
    setIsContactModalOpen(false)
  }

  return (
    <>
      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={closeContactModal}
        title={title}
        subtitle={subtitle}
      />

      {/* Sticky Contact Button */}
      <AnimatePresence>
        {showStickyButton && (
          <motion.div
            className="fixed right-4 z-50 transition-all duration-300 ease-out"
            style={{
              bottom: `${buttonBottomOffset}px`
            }}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0
            }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ 
              duration: 0.3, 
              ease: "easeOut",
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
          >
            <Button
              variant="primary"
              size="base"
              onClick={openContactModal}
              icon="left"
              iconElement={<MessageCircle className="w-4 h-4" />}
              className="shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              Kontakt
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
