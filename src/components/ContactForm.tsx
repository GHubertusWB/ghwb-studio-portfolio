'use client'

import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import { Mail, User, MessageSquare, Send, X } from 'lucide-react'

interface ContactFormProps {
  initialSubjectTag?: string
  onSubjectTagRemove?: () => void
}

export default function ContactForm({ initialSubjectTag, onSubjectTagRemove }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simuliere API Call (hier würdest du deine echte API aufrufen)
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Erstelle mailto Link mit den Formulardaten
      const subject = initialSubjectTag 
        ? `Anfrage: ${initialSubjectTag} - ${formData.name}`
        : `Kontaktanfrage - ${formData.name}`
      
      const body = `Hallo,

${formData.message}

Mit freundlichen Grüßen,
${formData.name}
E-Mail: ${formData.email}`

      const mailtoLink = `mailto:hello@ghwb.studio?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      window.location.href = mailtoLink

      setSubmitStatus('success')
      
      // Reset form after success
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' })
        setSubmitStatus('idle')
        if (onSubjectTagRemove) {
          onSubjectTagRemove()
        }
      }, 3000)
      
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="relative p-8 rounded-2xl bg-background border border-border/50">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
            <Mail className="w-8 h-8 text-foreground" />
          </div>
          <h3 className="text-2xl font-semibold mb-2 text-foreground">
            Kontakt aufnehmen
          </h3>
          <p className="text-muted-foreground">
            Erzählen Sie mir von Ihrem Projekt
          </p>
        </motion.div>

        {/* Subject Tag */}
        {initialSubjectTag && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm font-medium text-foreground">
              <span>Betreff: {initialSubjectTag}</span>
              {onSubjectTagRemove && (
                <button
                  onClick={onSubjectTagRemove}
                  className="p-1 hover:bg-background rounded-full transition-colors"
                  aria-label="Tag entfernen"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>
          </motion.div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <User className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Ihr Name"
                className="w-full pl-10 pr-4 py-3 border border-border/50 rounded-xl bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-border transition-colors"
              />
            </div>
          </motion.div>

          {/* Email Field */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Ihre E-Mail Adresse"
                className="w-full pl-10 pr-4 py-3 border border-border/50 rounded-xl bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-border transition-colors"
              />
            </div>
          </motion.div>

          {/* Message Field */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={4}
                placeholder="Beschreiben Sie Ihr Projekt..."
                className="w-full pl-10 pr-4 py-3 border border-border/50 rounded-xl bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-border transition-colors resize-none"
              />
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
              disabled={isSubmitting}
              className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {isSubmitting ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-background border-t-transparent rounded-full"
                  />
                  Wird gesendet...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Nachricht senden
                </>
              )}
            </motion.button>
          </motion.div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center p-4 bg-green-50 border border-green-200 rounded-xl text-green-700"
            >
              ✅ Vielen Dank! Ihr E-Mail-Client öffnet sich mit Ihrer Nachricht.
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center p-4 bg-red-50 border border-red-200 rounded-xl text-red-700"
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
          className="mt-8 pt-6 border-t border-border/50 text-center"
        >
          <p className="text-sm text-muted-foreground mb-2">
            Oder kontaktieren Sie mich direkt:
          </p>
          <a
            href="mailto:hello@ghwb.studio"
            className="text-foreground font-medium hover:underline transition-colors"
          >
            hello@ghwb.studio
          </a>
        </motion.div>
      </div>
    </motion.div>
  )
}
