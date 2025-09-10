'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const services = [
    'UX/UI Design',
    'Fotografie', 
    'Kunst',
    'Allgemeine Anfrage'
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          selectedSubjects: [formData.subject],
          message: formData.message,
          variant: 'contact-section'
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        throw new Error('Fehler beim Senden der E-Mail')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (isSubmitted) {
    return (
      <section className="pt-20 pb-20 lg:pb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center p-12 bg-background/60 backdrop-blur-sm rounded-lg border border-border/30"
          >
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-semibold text-foreground mb-4">
              Vielen Dank!
            </h2>
            <p className="text-lg text-muted-foreground">
              Ihre Nachricht wurde erfolgreich gesendet. Ich melde mich in Kürze bei Ihnen.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-6 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Neue Nachricht senden
            </button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="pt-20 pb-20 lg:pb-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-semibold text-foreground leading-tight tracking-tight mb-6 md:text-3xl">
            Lassen Sie uns zusammenarbeiten
          </h2>
          <p className="text-xl text-muted-foreground leading-7 max-w-prose mx-auto">
            Haben Sie ein Projekt im Kopf? Ich freue mich auf Ihre Nachricht.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-background/60 backdrop-blur-sm rounded-lg border border-border/30 p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background/80 border border-border/50 rounded-lg text-foreground placeholder-muted-foreground focus:border-foreground focus:outline-none transition-colors"
                  placeholder="Ihr Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  E-Mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background/80 border border-border/50 rounded-lg text-foreground placeholder-muted-foreground focus:border-foreground focus:outline-none transition-colors"
                  placeholder="ihre.email@beispiel.de"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                Betreff *
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background/80 border border-border/50 rounded-lg text-foreground focus:border-foreground focus:outline-none transition-colors"
              >
                <option value="">Wählen Sie einen Service</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Nachricht *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-background/80 border border-border/50 rounded-lg text-foreground placeholder-muted-foreground focus:border-foreground focus:outline-none transition-colors resize-vertical"
                placeholder="Beschreiben Sie Ihr Projekt oder Ihre Anfrage..."
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-8 py-3 bg-foreground text-background font-medium rounded-lg hover:bg-foreground/90 focus:bg-foreground/90 focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Nachricht senden</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="w-12 h-px bg-border mx-auto mb-6" />
          <p className="text-sm text-muted-foreground">
            Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
          </p>
        </motion.div>

      </div>
    </section>
  )
}

export default ContactSection
