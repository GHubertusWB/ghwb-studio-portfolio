'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { 
  BriefcaseIcon, 
  UsersIcon, 
  PaintBrushIcon, 
  UserIcon, 
  EnvelopeIcon, 
  ChatBubbleLeftRightIcon 
} from '@heroicons/react/24/outline'

interface ContactFormLightProps {
  // Keine Props benötigt
}

export default function ContactFormLight(): React.JSX.Element {
  const [selectedSubjectTags, setSelectedSubjectTags] = useState<string[]>([])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [isClient, setIsClient] = useState(false)

  // Hydration fix
  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleCardClick = (subject: string): void => {
    setSelectedSubjectTags(prev => {
      if (prev.includes(subject)) {
        return prev.filter(tag => tag !== subject)
      } else {
        return [...prev, subject]
      }
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // E-Mail über API-Route senden
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          selectedSubjects: selectedSubjectTags,
          variant: 'art'
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        
        // Formular nach erfolgreichem Versand zurücksetzen
        setTimeout(() => {
          setFormData({ name: '', email: '', message: '' })
          setSelectedSubjectTags([])
          setSubmitStatus('idle')
        }, 5000)
      } else {
        const errorData = await response.json()
        console.error('Fehler beim Senden:', errorData)
        setSubmitStatus('error')
      }
      
    } catch (error) {
      console.error('Fehler beim Senden der E-Mail:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const subjectCards = [
    {
      id: 'Auftragsarbeiten',
      title: 'Auftragsarbeiten',
      description: 'Individuelle Kunstwerke nach Ihren Vorstellungen',
      icon: <BriefcaseIcon className="w-5 h-5 text-gray-700" />
    },
    {
      id: 'Kollaborationen',
      title: 'Kollaborationen',
      description: 'Gemeinsame Projekte und kreative Partnerschaften',
      icon: <UsersIcon className="w-5 h-5 text-gray-700" />
    },
    {
      id: 'Einzelwerke',
      title: 'Einzelwerke',
      description: 'Verfügbare Kunstwerke aus der Portfolio-Sammlung',
      icon: <PaintBrushIcon className="w-5 h-5 text-gray-700" />
    }
  ]

  // Prevent hydration issues
  if (!isClient) {
    return (
      <div className="w-full max-w-2xl mx-auto">
        <div className="relative bg-white border-2 border-gray-900 p-8">
          <div className="animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
            <div className="space-y-4">
              <div className="h-20 bg-gray-200 rounded"></div>
              <div className="h-20 bg-gray-200 rounded"></div>
              <div className="h-20 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full max-w-2xl mx-auto"
    >
      <div 
        className="relative bg-white border-2 border-gray-900 p-8"
        style={{ cursor: 'none' }}
      >
        {/* Simple line decorations */}
        <div className="absolute top-0 left-8 w-16 h-1 bg-gray-900"></div>
        <div className="absolute bottom-0 right-8 w-16 h-1 bg-gray-900"></div>

        {/* Subject Cards */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-sm font-bold text-gray-900 mb-4 tracking-wider uppercase">Betreff wählen</h3>
          
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {subjectCards.map((card, index) => (
              <motion.button
                key={card.id}
                type="button"
                onClick={() => handleCardClick(card.id)}
                className={`cursor-button p-4 border-2 border-gray-900 transition-all duration-200 text-left group ${
                  selectedSubjectTags.includes(card.id)
                    ? 'bg-gray-900 text-white' 
                    : 'bg-white text-gray-900 hover:bg-gray-100'
                }`}
                style={{ cursor: 'none' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center mb-2">
                  {card.icon}
                  <span className="ml-2 font-bold text-sm">{card.title}</span>
                </div>
                <p className="text-xs leading-relaxed opacity-80">
                  {card.description}
                </p>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-2 tracking-wider uppercase">
              Name
            </label>
            <div className="relative">
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Ihr Name"
                required
                className="cursor-button w-full px-4 py-3 border-2 border-gray-900 bg-white text-gray-900 font-mono text-sm focus:outline-none focus:bg-gray-50 transition-colors"
                style={{ cursor: 'none' }}
              />
              <UserIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-600" />
            </div>
          </motion.div>

          {/* Email Input */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2 tracking-wider uppercase">
              E-Mail
            </label>
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="ihre@email.de"
                required
                className="cursor-button w-full px-4 py-3 border-2 border-gray-900 bg-white text-gray-900 font-mono text-sm focus:outline-none focus:bg-gray-50 transition-colors"
                style={{ cursor: 'none' }}
              />
              <EnvelopeIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-600" />
            </div>
          </motion.div>

          {/* Message Textarea */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-2 tracking-wider uppercase">
              Nachricht
            </label>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Beschreiben Sie Ihr Projekt..."
                rows={4}
                required
                className="cursor-button w-full px-4 py-3 border-2 border-gray-900 bg-white text-gray-900 font-mono text-sm focus:outline-none focus:bg-gray-50 transition-colors resize-none"
                style={{ cursor: 'none' }}
              />
              <ChatBubbleLeftRightIcon className="absolute right-3 top-3 w-4 h-4 text-gray-600" />
            </div>
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center pt-4"
          >
            <motion.button
              type="submit"
              disabled={isSubmitting || !formData.email.trim()}
              className="cursor-button group relative inline-flex items-center px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                background: 'rgba(0, 0, 0, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                cursor: 'none'
              }}
              whileHover={!isSubmitting && formData.email.trim() ? { 
                scale: 1.05,
                y: -2
              } : {}}
              whileTap={!isSubmitting && formData.email.trim() ? { 
                scale: 0.95
              } : {}}
            >
              {isSubmitting ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="inline-block w-4 h-4 border-2 border-gray-600 border-t-transparent rounded-full mr-3"
                  />
                  <span className="tracking-wide">Wird gesendet...</span>
                </>
              ) : (
                <>
                  <EnvelopeIcon className="w-4 h-4 mr-2" />
                  <span className="tracking-wide">Anfrage absenden</span>
                </>
              )}
            </motion.button>
          </motion.div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <motion.div
              key="success-message"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-center p-4 border-2 border-green-600 bg-green-100 text-green-800 font-bold"
            >
              ✓ Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              key="error-message"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-center p-4 border-2 border-red-600 bg-red-100 text-red-800 font-bold"
            >
              ✗ Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.
            </motion.div>
          )}
        </form>

        {/* Alternative Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-8 pt-6 border-t-2 border-gray-900 text-center"
        >
          <p className="text-xs mb-2 text-gray-600 font-bold tracking-wider uppercase">
            Direkter Kontakt
          </p>
          <a
            href="mailto:office@ghwbstudio.de"
            className="cursor-button font-mono text-gray-900 hover:text-gray-600 transition-colors border-b-2 border-gray-900 hover:border-gray-600"
            style={{ cursor: 'none' }}
          >
            office@ghwbstudio.de
          </a>
        </motion.div>
      </div>
    </motion.div>
  )
}
