'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { 
  CameraIcon, 
  HeartIcon, 
  UserGroupIcon, 
  UserIcon, 
  EnvelopeIcon, 
  ChatBubbleLeftRightIcon 
} from '@heroicons/react/24/outline'

interface ContactFormPhotographyProps {
  // Keine Props benötigt
}

export default function ContactFormPhotography(): React.JSX.Element {
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
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      const subject = selectedSubjectTags.length > 0 
        ? `Fotografie Anfrage: ${selectedSubjectTags.join(', ')} - ${formData.name}`
        : `Fotografie Kontaktanfrage - ${formData.name}`
      
      const body = `Hallo,

${formData.message}

Mit freundlichen Grüßen,
${formData.name}
E-Mail: ${formData.email}`

      const mailtoLink = `mailto:hello@ghwb.studio?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      window.location.href = mailtoLink

      setSubmitStatus('success')
      
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' })
        setSelectedSubjectTags([])
        setSubmitStatus('idle')
      }, 3000)
      
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const subjectCards = [
    {
      id: 'Portrait-Shooting',
      title: 'Portrait-Shooting',
      description: 'Professionelle Portraits und Bewerbungsfotos',
      icon: <CameraIcon className="w-5 h-5 text-gray-700" />
    },
    {
      id: 'Tierfotografie',
      title: 'Tierfotografie',
      description: 'Liebevolle Aufnahmen Ihrer Haustiere',
      icon: <HeartIcon className="w-5 h-5 text-gray-700" />
    },
    {
      id: 'Event-Fotografie',
      title: 'Event-Fotografie',
      description: 'Hochzeiten, Familienfeiern und besondere Momente',
      icon: <UserGroupIcon className="w-5 h-5 text-gray-700" />
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
                required
                value={formData.name}
                onChange={handleInputChange}
                className="cursor-button w-full px-4 py-3 border-2 border-gray-900 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:bg-gray-50 transition-colors duration-200"
                style={{ cursor: 'none' }}
                placeholder="Ihr vollständiger Name"
              />
              <UserIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
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
                required
                value={formData.email}
                onChange={handleInputChange}
                className="cursor-button w-full px-4 py-3 border-2 border-gray-900 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:bg-gray-50 transition-colors duration-200"
                style={{ cursor: 'none' }}
                placeholder="ihre.email@beispiel.de"
              />
              <EnvelopeIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
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
                required
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                className="cursor-button w-full px-4 py-3 border-2 border-gray-900 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:bg-gray-50 transition-colors duration-200 resize-none"
                style={{ cursor: 'none' }}
                placeholder="Beschreiben Sie Ihr Fotografie-Projekt oder Ihre Wünsche..."
              />
              <ChatBubbleLeftRightIcon className="absolute right-3 top-3 w-5 h-5 text-gray-500" />
            </div>
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="pt-4"
          >
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`cursor-button w-full py-4 px-6 border-2 border-gray-900 font-bold text-sm tracking-wider uppercase transition-all duration-200 ${
                isSubmitting 
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                  : submitStatus === 'success'
                  ? 'bg-green-100 text-green-800 border-green-600'
                  : submitStatus === 'error'
                  ? 'bg-red-100 text-red-800 border-red-600'
                  : 'bg-gray-900 text-white hover:bg-gray-800'
              }`}
              style={{ cursor: 'none' }}
              whileHover={!isSubmitting ? { scale: 1.02 } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
            >
              {isSubmitting ? 'Nachricht wird gesendet...' : 
               submitStatus === 'success' ? 'Nachricht gesendet!' :
               submitStatus === 'error' ? 'Fehler - Bitte erneut versuchen' :
               'Nachricht senden'}
            </motion.button>
          </motion.div>
        </form>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-4 bg-green-100 border-2 border-green-600 text-green-800 text-sm"
          >
            <strong>Erfolgreich!</strong> Ihre Nachricht wurde gesendet. Ich melde mich zeitnah bei Ihnen.
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-4 bg-red-100 border-2 border-red-600 text-red-800 text-sm"
          >
            <strong>Fehler!</strong> Beim Senden ist ein Problem aufgetreten. Bitte versuchen Sie es erneut.
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}
