'use client'
interface ContactFormUXUIDarkProps {
  // Props can be added here when needed
}import { motion } from 'framer-motion'
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
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      const subject = selectedSubjectTags.length > 0 
        ? `UX/UI Anfrage: ${selectedSubjectTags.join(', ')} - ${formData.name}`
        : `UX/UI Kontaktanfrage - ${formData.name}`
      
      const body = `Hallo,

${formData.message}

Mit freundlichen Grüßen,
${formData.name}
E-Mail: ${formData.email}`

      const mailtoLink = `mailto:office@ghwbstudio.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
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
      id: 'Website-Design',
      title: 'Website-Design',
      description: 'Responsive Websites und Web-Anwendungen',
      icon: <ComputerDesktopIcon className="w-5 h-5 text-cyan-400" />
    },
    {
      id: 'App-Design',
      title: 'App-Design',
      description: 'Mobile Apps für iOS und Android',
      icon: <DevicePhoneMobileIcon className="w-5 h-5 text-cyan-400" />
    },
    {
      id: 'UX-Beratung',
      title: 'UX-Beratung',
      description: 'User Research und Usability-Optimierung',
      icon: <PresentationChartLineIcon className="w-5 h-5 text-cyan-400" />
    }
  ]

  // Prevent hydration issues
  if (!isClient) {
    return (
      <div className="w-full max-w-2xl mx-auto">
        <div 
          className="relative p-8 rounded-2xl border border-white/20"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <div className="animate-pulse">
            <div className="h-4 bg-white/20 rounded w-1/4 mb-4"></div>
            <div className="space-y-4">
              <div className="h-20 bg-white/10 rounded"></div>
              <div className="h-20 bg-white/10 rounded"></div>
              <div className="h-20 bg-white/10 rounded"></div>
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
        className="relative p-8 rounded-2xl border border-white/20 hover:border-cyan-400/40 transition-all duration-300"
        style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          cursor: 'none'
        }}
      >
        {/* HUD-style corner decorations */}
        <div className="absolute top-0 left-8 w-16 h-1 bg-cyan-400/60"></div>
        <div className="absolute bottom-0 right-8 w-16 h-1 bg-cyan-400/60"></div>
        <div className="absolute top-4 left-0 w-1 h-16 bg-cyan-400/60"></div>
        <div className="absolute bottom-4 right-0 w-1 h-16 bg-cyan-400/60"></div>

        {/* Subject Cards */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-sm font-bold text-cyan-400 mb-4 tracking-wider uppercase font-mono">
            PROJECT_TYPE.SELECT
          </h3>
          
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {subjectCards.map((card, index) => (
              <motion.button
                key={card.id}
                type="button"
                onClick={() => handleCardClick(card.id)}
                className={`cursor-button p-4 rounded-lg border transition-all duration-200 text-left group ${
                  selectedSubjectTags.includes(card.id)
                    ? 'bg-cyan-400/20 border-cyan-400 text-white' 
                    : 'bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-cyan-400/40'
                }`}
                style={{ cursor: 'none' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center mb-2">
                  {card.icon}
                  <span className="ml-2 font-bold text-sm font-mono">{card.title}</span>
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
            <label htmlFor="name" className="block text-sm font-bold text-cyan-400 mb-2 tracking-wider uppercase font-mono">
              USER.NAME
            </label>
            <div className="relative">
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="cursor-button w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-white placeholder-white/50 focus:outline-none focus:bg-white/10 focus:border-cyan-400/40 transition-all duration-200"
                style={{ cursor: 'none' }}
                placeholder="Ihr vollständiger Name"
              />
              <UserIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
            </div>
          </motion.div>

          {/* Email Input */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <label htmlFor="email" className="block text-sm font-bold text-cyan-400 mb-2 tracking-wider uppercase font-mono">
              COMM.EMAIL
            </label>
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="cursor-button w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-white placeholder-white/50 focus:outline-none focus:bg-white/10 focus:border-cyan-400/40 transition-all duration-200"
                style={{ cursor: 'none' }}
                placeholder="ihre.email@beispiel.de"
              />
              <EnvelopeIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
            </div>
          </motion.div>

          {/* Message Textarea */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <label htmlFor="message" className="block text-sm font-bold text-cyan-400 mb-2 tracking-wider uppercase font-mono">
              MESSAGE.CONTENT
            </label>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                className="cursor-button w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-white placeholder-white/50 focus:outline-none focus:bg-white/10 focus:border-cyan-400/40 transition-all duration-200 resize-none"
                style={{ cursor: 'none' }}
                placeholder="Beschreiben Sie Ihr UX/UI Projekt oder Ihre Mission..."
              />
              <ChatBubbleLeftRightIcon className="absolute right-3 top-3 w-5 h-5 text-white/50" />
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
              className={`cursor-button w-full py-4 px-6 rounded-lg font-bold text-sm tracking-wider uppercase transition-all duration-200 font-mono ${
                isSubmitting 
                  ? 'bg-white/5 text-white/30 border border-white/10 cursor-not-allowed' 
                  : submitStatus === 'success'
                  ? 'bg-green-400/20 text-green-400 border border-green-400'
                  : submitStatus === 'error'
                  ? 'bg-red-400/20 text-red-400 border border-red-400'
                  : 'bg-cyan-400/25 text-cyan-400 border border-cyan-400 hover:bg-cyan-400/35 hover:shadow-lg hover:shadow-cyan-400/20'
              }`}
              style={{ 
                cursor: 'none',
                boxShadow: submitStatus === 'idle' && !isSubmitting ? '0 0 15px rgba(6, 182, 212, 0.3)' : undefined
              }}
              whileHover={!isSubmitting ? { 
                scale: 1.02, 
                y: -2,
                boxShadow: '0 0 30px rgba(6, 182, 212, 0.6), 0 0 60px rgba(6, 182, 212, 0.4)'
              } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
            >
              {isSubmitting ? 'TRANSMITTING_MESSAGE...' : 
               submitStatus === 'success' ? 'MESSAGE_SENT_SUCCESSFUL!' :
               submitStatus === 'error' ? 'ERROR_RETRY_TRANSMISSION' :
               'SEND_TRANSMISSION'}
            </motion.button>
          </motion.div>
        </form>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-4 rounded-lg bg-green-400/10 border border-green-400 text-green-400 text-sm font-mono"
          >
            <strong>TRANSMISSION_SUCCESSFUL!</strong> Ihre Nachricht wurde übertragen. Antwort-Protokoll wird zeitnah initiiert.
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-4 rounded-lg bg-red-400/10 border border-red-400 text-red-400 text-sm font-mono"
          >
            <strong>TRANSMISSION_ERROR!</strong> Verbindungsfehler erkannt. Bitte Übertragung wiederholen.
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}
