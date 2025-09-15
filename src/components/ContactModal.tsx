'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect } from 'react'
import GlobalContactForm from './GlobalContactForm'
import { Button } from './ui/Button'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  subtitle?: string
  theme?: 'light' | 'dark'
}

/**
 * ContactModal Component
 * 
 * A modal popup that contains the GlobalContactForm component.
 * Can be triggered by any button and provides a clean overlay experience.
 * 
 * @param {ContactModalProps} props - The modal configuration props
 * @returns {JSX.Element} The modal component with contact form
 */

export default function ContactModal({
  isOpen,
  onClose,
  title = 'Kontakt aufnehmen',
  subtitle = 'Haben Sie ein Projekt im Kopf oder möchten Sie einfach Hallo sagen? Ich freue mich auf Ihre Nachricht.',
  theme = 'light'
}: ContactModalProps): React.JSX.Element {

  // Escape key handler
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  // Handle backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <motion.div
            className={`
              absolute inset-0 backdrop-blur-sm
              ${theme === 'dark' ? 'bg-black/70' : 'bg-black/50'}
            `}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleBackdropClick}
          />

          {/* Modal Content */}
          <motion.div
            className={`
              relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl
              ${theme === 'dark' 
                ? 'bg-gray-900/95 border-gray-700/50 shadow-2xl shadow-black/50' 
                : 'bg-white/95 border-gray-200/50 shadow-2xl shadow-black/25'
              }
              border backdrop-blur-xl
            `}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ 
              duration: 0.3, 
              ease: "easeOut",
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 pb-0">
              <div>
                <h2 className={`
                  text-2xl font-semibold leading-tight tracking-tight
                  ${theme === 'dark' ? 'text-white' : 'text-gray-900'}
                `}>
                  {title}
                </h2>
                <p className={`
                  text-sm mt-1
                  ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}
                `}>
                  {subtitle}
                </p>
              </div>
              
              {/* Close Button */}
              <button
                onClick={onClose}
                className={`
                  flex-shrink-0 ml-4 p-2 rounded-lg transition-all duration-200
                  ${theme === 'dark' 
                    ? 'hover:bg-gray-800/80 text-gray-400 hover:text-white hover:scale-110' 
                    : 'hover:bg-gray-100/80 text-gray-500 hover:text-gray-900 hover:scale-110'
                  }
                `}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form Content */}
            <div className="p-6 pt-4">
              <GlobalContactForm
                title="" // No title since we have it in header
                subtitle="" // No subtitle since we have it in header  
                theme={theme}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
