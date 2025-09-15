'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Send, Check, AlertCircle } from 'lucide-react'
import { Button } from './ui/Button'

// TypeScript Interfaces
interface ContactFormProps {
  /** Überschrift des Formulars */
  title?: string
  /** Untertitel/Beschreibung des Formulars */
  subtitle?: string
  /** Callback für erfolgreiche Übermittlung */
  onSubmit?: (formData: ContactFormData) => Promise<void>
  /** Theme für Light/Dark Mode */
  theme?: 'light' | 'dark'
}

interface ContactFormData {
  name: string
  email: string
  message: string
}

/**
 * GlobalContactForm Component
 * 
 * Globale, wiederverwendbare Kontakt-Komponente.
 * Kann auf allen Seiten verwendet werden mit seitenspezifischen Anpassungen.
 * 
 * Features:
 * - Name, E-Mail, Nachricht Felder
 * - Nur E-Mail ist Pflichtfeld
 * - Light/Dark Mode Support
 * - Responsive Design
 * - Animationen
 * 
 * @param {ContactFormProps} props - Komponenten Props
 * @returns {JSX.Element} Die Kontakt-Formular Komponente
 */

export default function GlobalContactForm({
  title = 'Kontakt aufnehmen',
  subtitle = 'Haben Sie eine Frage oder ein Projekt im Kopf? Lassen Sie uns sprechen.',
  onSubmit,
  theme = 'light'
}: ContactFormProps): React.JSX.Element {
  
  // Form State
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  })
  
  // UI State
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Theme-abhängige Klassen
  const isDark = theme === 'dark'
  const bgClass = isDark ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'
  const textClass = isDark ? 'text-white' : 'text-gray-900'
  const labelClass = isDark ? 'text-white/80' : 'text-gray-700'
  const inputClass = isDark 
    ? 'bg-white/5 border-white/20 text-white placeholder-white/40 focus:border-cyan-400 focus:ring-cyan-400/20 hover:border-white/30' 
    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20 hover:border-gray-400'
  const buttonClass = isDark ? 'border-cyan-400/30' : 'border-gray-200'

  // Form Handlers
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (error) setError(null)
  }



  const validateForm = (): boolean => {
    if (!formData.email.trim()) {
      setError('E-Mail-Adresse ist erforderlich')
      return false
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setError('Bitte geben Sie eine gültige E-Mail-Adresse ein')
      return false
    }
    
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    setError(null)
    
    try {
      // Custom onSubmit handler falls vorhanden
      if (onSubmit) {
        await onSubmit(formData)
      } else {
        // Standard E-Mail Versand (hier können Sie Ihre E-Mail-Service Integration einfügen)
        console.log('Formular gesendet:', formData)
        
        // Simuliere API Call
        await new Promise(resolve => setTimeout(resolve, 1000))
      }
      
      setIsSubmitted(true)
      
      // Form nach erfolgreicher Übermittlung zurücksetzen
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' })
        setIsSubmitted(false)

      }, 3000)
      
    } catch (err) {
      setError('Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut.')
      console.error('Form submission error:', err)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Success State
  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`max-w-md mx-auto text-center p-8 rounded-lg ${bgClass} ${textClass}`}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
            isDark ? 'bg-cyan-400/20' : 'bg-green-100'
          }`}
        >
          <Check className={`w-8 h-8 ${isDark ? 'text-cyan-400' : 'text-green-600'}`} />
        </motion.div>
        <h3 className={`text-xl font-semibold mb-2 ${textClass}`}>
          Nachricht gesendet!
        </h3>
        <p className={isDark ? 'text-white/70' : 'text-gray-600'}>
          Vielen Dank für Ihre Nachricht. Ich melde mich in Kürze bei Ihnen.
        </p>
      </motion.div>
    )
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className={`max-w-2xl mx-auto p-8 rounded-lg ${bgClass} shadow-sm`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div className="text-center mb-8">
        <h3 className={`text-2xl font-semibold mb-2 ${textClass}`}>
          {title}
        </h3>
        <p className={isDark ? 'text-white/70' : 'text-gray-600'}>
          {subtitle}
        </p>
      </div>

      {/* Error Message */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
            isDark ? 'bg-red-500/20 border border-red-500/30' : 'bg-red-50 border border-red-200'
          }`}
        >
          <AlertCircle className={`w-5 h-5 ${isDark ? 'text-red-400' : 'text-red-500'}`} />
          <span className={isDark ? 'text-red-400' : 'text-red-600'}>
            {error}
          </span>
        </motion.div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className={`block text-sm font-medium mb-2 ${labelClass}`}>
            Name (optional)
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Ihr Name"
            className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-opacity-50 ${inputClass}`}
          />
        </div>

        {/* Email Field (Required) */}
        <div>
          <label htmlFor="email" className={`block text-sm font-medium mb-2 ${labelClass}`}>
            E-Mail-Adresse <span className={isDark ? 'text-cyan-400' : 'text-red-500'}>*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="ihre@email.de"
            required
            className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-opacity-50 ${inputClass}`}
          />
        </div>
      </div>



      {/* Message Field */}
      <div className="mt-6">
        <label htmlFor="message" className={`block text-sm font-medium mb-2 ${labelClass}`}>
          Nachricht (optional)
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Ihre Nachricht..."
          rows={5}
          className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-opacity-50 resize-vertical ${inputClass}`}
        />
      </div>

      {/* Submit Button */}
      <div className="mt-8">
        <Button
          type="submit"
          variant="primary"
          size="base"
          disabled={isSubmitting}
          icon="right"
          iconElement={<Send className="w-4 h-4" />}
          className="w-full md:w-auto"
        >
          {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
        </Button>
      </div>

      {/* Privacy Note */}
      <p className={`mt-4 text-xs ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
        Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
      </p>
    </motion.form>
  )
}
