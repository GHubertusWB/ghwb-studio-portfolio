'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Send, CheckCircle, Mail } from 'lucide-react'
import emailjs from '@emailjs/browser'

const ContactSectionAdvanced = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [emailMethod, setEmailMethod] = useState<'formspree' | 'emailjs'>('formspree')

  const services = [
    'UX/UI Design',
    'Fotografie', 
    'Kunst',
    'Allgemeine Anfrage'
  ]

  const handleSubmitFormspree = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://formspree.io/f/xanwkpzw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: `${formData.subject} - Anfrage von ${formData.name}`,
          message: formData.message,
          _replyto: formData.email,
          _subject: `${formData.subject} - Anfrage von ${formData.name}`
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        throw new Error('Formspree Fehler')
      }
    } catch (error) {
      alert('Fehler beim Senden über Formspree. Versuche es mit EmailJS oder kontaktiere uns direkt.')
      setEmailMethod('emailjs')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleSubmitEmailJS = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // EmailJS Konfiguration - diese Werte müssen in Vercel Environment Variables gesetzt werden
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_default'
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_default'
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your-public-key'

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'office@ghwbstudio.de'
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      
      setIsSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      alert('Fehler beim Senden über EmailJS. Bitte kontaktieren Sie uns direkt unter office@ghwbstudio.de')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleSubmit = emailMethod === 'formspree' ? handleSubmitFormspree : handleSubmitEmailJS

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  if (isSubmitted) {
    return (
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md mx-auto text-center bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl"
          >
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Nachricht gesendet!
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Vielen Dank für Ihre Anfrage. Ich melde mich zeitnah bei Ihnen zurück.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="text-cyan-600 hover:text-cyan-700 font-medium"
            >
              Neue Nachricht senden
            </button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Kontakt
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Haben Sie ein Projekt im Kopf? Lassen Sie uns darüber sprechen und gemeinsam etwas Großartiges schaffen.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
            <div className="p-8">
              {/* E-Mail-Service Selector */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  E-Mail-Service:
                </label>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setEmailMethod('formspree')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
                      emailMethod === 'formspree'
                        ? 'border-cyan-500 bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600'
                        : 'border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300'
                    }`}
                  >
                    <Mail className="w-4 h-4" />
                    Formspree (Empfohlen)
                  </button>
                  <button
                    type="button"
                    onClick={() => setEmailMethod('emailjs')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
                      emailMethod === 'emailjs'
                        ? 'border-cyan-500 bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600'
                        : 'border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300'
                    }`}
                  >
                    <Send className="w-4 h-4" />
                    EmailJS
                  </button>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  {emailMethod === 'formspree' 
                    ? 'Formspree ist einfach zu konfigurieren und sehr zuverlässig.'
                    : 'EmailJS erfordert zusätzliche Konfiguration, bietet aber mehr Kontrolle.'
                  }
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl 
                               bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                               focus:ring-2 focus:ring-cyan-500 focus:border-transparent
                               transition-all duration-200"
                      placeholder="Ihr Name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl 
                               bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                               focus:ring-2 focus:ring-cyan-500 focus:border-transparent
                               transition-all duration-200"
                      placeholder="ihre.email@beispiel.de"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Betreff *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl 
                             bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                             focus:ring-2 focus:ring-cyan-500 focus:border-transparent
                             transition-all duration-200"
                  >
                    <option value="">Wählen Sie einen Betreff</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl 
                             bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                             focus:ring-2 focus:ring-cyan-500 focus:border-transparent
                             transition-all duration-200 resize-none"
                    placeholder="Beschreiben Sie Ihr Projekt oder Ihre Anfrage..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 px-8 rounded-xl
                           font-semibold text-lg shadow-lg hover:shadow-xl
                           disabled:opacity-50 disabled:cursor-not-allowed
                           transition-all duration-200 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Wird gesendet...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Nachricht senden
                    </>
                  )}
                </motion.button>

                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten gemäß unserer{' '}
                  <a href="/datenschutz" className="text-cyan-600 hover:text-cyan-700">
                    Datenschutzerklärung
                  </a>{' '}
                  zu.
                </p>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSectionAdvanced
