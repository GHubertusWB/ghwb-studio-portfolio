'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { 
  ComputerDesktopIcon, 
  DevicePhoneMobileIcon, 
  PresentationChartLineIcon, 
  UserIcon, 
  EnvelopeIcon, 
  ChatBubbleLeftRightIcon 
} from '@heroicons/react/24/outline'

interface ContactFormUXUIDarkProps {
  // Keine Props benötigt
}

export default function ContactFormUXUIDark(): React.JSX.Element {
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
          variant: 'uxui'
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
      id: 'Website-Design',
      title: 'Website-Design',
      description: 'Responsive Websites und Web-Anwendungen',
      icon: <ComputerDesktopIcon className="w-5 h-5 text-white/70" />
    },
    {
      id: 'App-Design',
      title: 'App-Design',
      description: 'Mobile Apps für iOS und Android',
      icon: <DevicePhoneMobileIcon className="w-5 h-5 text-white/70" />
    },
    {
      id: 'UX-Beratung',
      title: 'UX-Beratung',
      description: 'User Research und Usability-Optimierung',
      icon: <PresentationChartLineIcon className="w-5 h-5 text-white/70" />
    }
  ]

  // Prevent hydration issues
  if (!isClient) {
    return (
      <div className="w-full max-w-2xl mx-auto">
        <div 
          className="relative p-8 border border-white/20 bg-white/[0.02] backdrop-blur-sm"
          style={{
            backdropFilter: 'blur(10px)',
            cursor: 'none'
          }}
        >
          <div className="animate-pulse">
            <div className="h-4 bg-white/20 rounded w-1/4 mb-4"></div>
            <div className="space-y-4">
              <div className="h-20 bg-white/20 rounded"></div>
              <div className="h-20 bg-white/20 rounded"></div>
              <div className="h-20 bg-white/20 rounded"></div>
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
        className="relative p-8 border border-white/20 bg-white/[0.02] backdrop-blur-sm"
        style={{
          backdropFilter: 'blur(10px)',
          cursor: 'none'
        }}
      >
        {/* Simple Corner Elements */}
        <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-white/40"></div>
        <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-white/40"></div>
        <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-white/40"></div>
        <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-white/40"></div>

        {/* Subject Cards */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-sm font-medium text-white/80 mb-2">Betreff</h3>
          
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {subjectCards.map((card, index) => (
              <motion.button
                key={card.id}
                type="button"
                onClick={() => handleCardClick(card.id)}
                className={`cursor-button p-4 border border-white/20 transition-all duration-200 text-left group ${
                  selectedSubjectTags.includes(card.id)
                    ? 'bg-cyan-500/20 border-cyan-400 text-white' 
                    : 'bg-white/[0.02] text-white/80 hover:bg-white/[0.05] hover:border-white/30'
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
                  <span className="ml-2 font-medium text-sm">{card.title}</span>
                </div>
                <p className="text-xs leading-relaxed opacity-70">
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
            <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
              Name
            </label>
            <div className="relative">
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="cursor-button w-full px-4 py-3 border border-white/20 bg-white/[0.02] text-white placeholder-white/50 focus:outline-none focus:bg-white/[0.05] focus:border-white/30 transition-colors duration-200"
                style={{ cursor: 'none' }}
                placeholder="Ihr vollständiger Name"
              />
              <UserIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" />
            </div>
          </motion.div>

          {/* Email Input */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
              E-Mail
            </label>
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="cursor-button w-full px-4 py-3 border border-white/20 bg-white/[0.02] text-white placeholder-white/50 focus:outline-none focus:bg-white/[0.05] focus:border-white/30 transition-colors duration-200"
                style={{ cursor: 'none' }}
                placeholder="ihre.email@beispiel.de"
              />
              <EnvelopeIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" />
            </div>
          </motion.div>

          {/* Message Textarea */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
              Nachricht
            </label>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                className="cursor-button w-full px-4 py-3 border border-white/20 bg-white/[0.02] text-white placeholder-white/50 focus:outline-none focus:bg-white/[0.05] focus:border-white/30 transition-colors duration-200 resize-none"
                style={{ cursor: 'none' }}
                placeholder="Beschreiben Sie Ihr UX/UI Projekt oder Ihre Anfrage..."
              />
              <ChatBubbleLeftRightIcon className="absolute right-3 top-3 w-4 h-4 text-white/60" />
            </div>
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.button
              type="submit"
              disabled={isSubmitting || !formData.email.trim()}
              className="cursor-button inline-flex items-center px-8 py-3 rounded-full font-mono transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-white"
              style={{
                background: 'rgba(6, 182, 212, 0.25)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(6, 182, 212, 0.4)',
                boxShadow: '0 0 15px rgba(6, 182, 212, 0.3), 0 0 30px rgba(6, 182, 212, 0.15), 0 0 45px rgba(6, 182, 212, 0.05)',
                cursor: 'none'
              }}
              whileHover={!isSubmitting && formData.email.trim() ? { 
                scale: 1.05, 
                y: -2,
                boxShadow: '0 0 30px rgba(6, 182, 212, 0.6), 0 0 60px rgba(6, 182, 212, 0.4), 0 0 90px rgba(6, 182, 212, 0.2)'
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
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                  />
                  WIRD GESENDET...
                </>
              ) : (
                <>
                  <EnvelopeIcon className="w-4 h-4 mr-2" />
                  ANFRAGE ABSENDEN
                </>
              )}
            </motion.button>
          </motion.div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center p-4 border-2 
                border-green-400 bg-green-400/10 text-green-400 rounded-none"
            >
              ✅ Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center p-4 border-2
                border-red-400 bg-red-400/10 text-red-400 rounded-none"
            >
              ❌ Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.
            </motion.div>
          )}
        </form>

        {/* Alternative Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-8 pt-6 border-t border-white/20 text-center"
        >
          <p className="text-xs mb-2 text-white/60">
            Oder kontaktieren Sie mich direkt:
          </p>
          <a
            href="mailto:office@ghwbstudio.de"
            className="transition-colors underline underline-offset-2 text-white/80 hover:text-white"
          >
            office@ghwbstudio.de
          </a>
        </motion.div>
      </div>
    </motion.div>
  )
}
