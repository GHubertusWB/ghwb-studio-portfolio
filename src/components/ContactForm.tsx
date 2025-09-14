'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  BriefcaseIcon, 
  UsersIcon, 
  PaintBrushIcon,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  PresentationChartLineIcon,
  UserIcon, 
  EnvelopeIcon, 
  ChatBubbleLeftRightIcon 
} from '@heroicons/react/24/outline'
import Input from './ui/Input'
import Textarea from './ui/Textarea'
import SubjectCard from './ui/SubjectCard'

interface ContactFormProps {
  variant?: 'art' | 'uxui' | 'photography'
}

export default function ContactForm({ variant = 'art' }: ContactFormProps): React.JSX.Element {
  const [selectedSubjectTags, setSelectedSubjectTags] = useState<string[]>([])
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
          variant: variant
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

  const getSubjectCards = () => {
    if (variant === 'uxui') {
      return [
        {
          id: 'Website-Design',
          title: 'Website-Design',
          description: 'Responsive Websites und Web-Anwendungen',
          icon: <ComputerDesktopIcon className="w-5 h-5 text-gray-600 dark:text-white/70" />
        },
        {
          id: 'App-Design',
          title: 'App-Design',
          description: 'Mobile Apps für iOS und Android',
          icon: <DevicePhoneMobileIcon className="w-5 h-5 text-gray-600 dark:text-white/70" />
        },
        {
          id: 'UX-Beratung',
          title: 'UX-Beratung',
          description: 'User Research und Usability-Optimierung',
          icon: <PresentationChartLineIcon className="w-5 h-5 text-gray-600 dark:text-white/70" />
        }
      ]
    }
    
    if (variant === 'photography') {
      return [
        {
          id: 'Portrait-Shooting',
          title: 'Portrait-Shooting',
          description: 'Professionelle Portraits und Bewerbungsfotos',
          icon: <BriefcaseIcon className="w-5 h-5 text-gray-600 dark:text-white/70" />
        },
        {
          id: 'Tierfotografie',
          title: 'Tierfotografie',
          description: 'Liebevolle Aufnahmen Ihrer Haustiere',
          icon: <UsersIcon className="w-5 h-5 text-gray-600 dark:text-white/70" />
        },
        {
          id: 'Event-Fotografie',
          title: 'Event-Fotografie',
          description: 'Hochzeiten, Familienfeiern und besondere Momente',
          icon: <PaintBrushIcon className="w-5 h-5 text-gray-600 dark:text-white/70" />
        }
      ]
    }
    
    // Default art variant
    return [
      {
        id: 'Auftragsarbeiten',
        title: 'Auftragsarbeiten',
        description: 'Individuelle Kunstwerke nach Ihren Vorstellungen und Anforderungen.',
        icon: <BriefcaseIcon className="w-5 h-5 text-gray-600 dark:text-white/70" />
      },
      {
        id: 'Kollaborationen',
        title: 'Kollaborationen',
        description: 'Gemeinsame Projekte und kreative Partnerschaften mit anderen Künstlern.',
        icon: <UsersIcon className="w-5 h-5 text-gray-600 dark:text-white/70" />
      },
      {
        id: 'Einzelwerke',
        title: 'Einzelwerke',
        description: 'Verfügbare Kunstwerke aus der aktuellen Portfolio-Sammlung.',
        icon: <PaintBrushIcon className="w-5 h-5 text-gray-600 dark:text-white/70" />
      }
    ]
  }

  const subjectCards = getSubjectCards()

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full max-w-2xl mx-auto"
    >
      <div 
        className="relative p-8 border border-gray-200 dark:border-white/20 bg-white dark:bg-white/[0.02] backdrop-blur-sm"
        style={{
          backdropFilter: 'blur(10px)',
          
        }}
      >
        {/* Simple Corner Elements */}
        <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-gray-300 dark:border-white/40"></div>
        <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-gray-300 dark:border-white/40"></div>
        <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-gray-300 dark:border-white/40"></div>
        <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-gray-300 dark:border-white/40"></div>

        {/* Subject Cards - Hidden for photography variant */}
        {variant !== 'photography' && (
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-sm font-medium text-gray-800 dark:text-white/80 mb-2">Betreff</h3>
          
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {subjectCards.map((card, index) => (
              <SubjectCard
                key={card.id}
                title={card.title}
                description={card.description}
                icon={card.icon}
                isSelected={selectedSubjectTags.includes(card.id)}
                onClick={() => handleCardClick(card.id)}
                delay={0.1 + index * 0.1}
              />
            ))}
          </div>
        </motion.div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            id="name"
            name="name"
            type="text"
            label="Name"
            icon={<UserIcon className="w-4 h-4" />}
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Ihr Name"
            required
          />

          <Input
            id="email"
            name="email"
            type="email"
            label="E-Mail"
            icon={<EnvelopeIcon className="w-4 h-4" />}
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Ihre E-Mail Adresse"
            isRequired
            required
          />

          <Textarea
            id="message"
            name="message"
            label="Nachricht"
            icon={<ChatBubbleLeftRightIcon className="w-4 h-4" />}
            value={formData.message}
            onChange={handleInputChange}
            placeholder={
              variant === 'uxui' ? 'Beschreiben Sie Ihr UX/UI Projekt oder Ihre Anfrage...' :
              variant === 'photography' ? 'Beschreiben Sie Ihr Fotografie-Projekt oder Ihre Wünsche...' :
              'Beschreiben Sie Ihr Projekt...'
            }
            rows={4}
            required
          />

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
              className="inline-flex items-center px-8 py-3 rounded-full font-mono transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-white dark:text-white"
              style={{
                background: 'rgba(6, 182, 212, 0.25)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(6, 182, 212, 0.4)',
                boxShadow: '0 0 15px rgba(6, 182, 212, 0.3), 0 0 30px rgba(6, 182, 212, 0.15), 0 0 45px rgba(6, 182, 212, 0.05)',
                
              }}
              whileHover={!isSubmitting && formData.email.trim() ? { 
                scale: 1.05, 
                y: -2,
                boxShadow: '0 0 30px rgba(6, 182, 212, 0.6), 0 0 60px rgba(6, 182, 212, 0.4), 0 0 90px rgba(6, 182, 212, 0.2)'
              } : {}}
              whileTap={!isSubmitting && formData.email.trim() ? { 
                scale: 0.95,
                boxShadow: [
                  '0 0 40px rgba(6, 182, 212, 0.8), 0 0 80px rgba(6, 182, 212, 0.5), 0 0 120px rgba(6, 182, 212, 0.3)',
                  '0 0 10px rgba(6, 182, 212, 0.3), 0 0 20px rgba(6, 182, 212, 0.2), 0 0 30px rgba(6, 182, 212, 0.1)',
                  '0 0 40px rgba(6, 182, 212, 0.8), 0 0 80px rgba(6, 182, 212, 0.5), 0 0 120px rgba(6, 182, 212, 0.3)'
                ],
                transition: { duration: 0.1, repeat: 2, repeatType: "reverse" }
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
                border-green-600 bg-green-50 text-green-800 rounded-none
                dark:border-green-400 dark:bg-green-400/10 dark:text-green-400"
            >
              ✅ Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center p-4 border-2
                border-red-600 bg-red-50 text-red-800 rounded-none
                dark:border-red-400 dark:bg-red-400/10 dark:text-red-400"
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
          className="mt-8 pt-6 border-t border-gray-300 text-center dark:border-white/20"
        >
          <p className="text-xs mb-2 text-gray-600 dark:text-white/60">
            Oder kontaktieren Sie mich direkt:
          </p>
          <a
            href="mailto:office@ghwbstudio.de"
            className="transition-colors underline underline-offset-2 text-gray-800 hover:text-black dark:text-white/80 dark:hover:text-white"
          >
            office@ghwbstudio.de
          </a>
        </motion.div>
      </div>
    </motion.div>
  )
}
