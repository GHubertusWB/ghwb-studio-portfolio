'use client'

import { motion } from 'framer-motion'
import ContactForm from '@/components/ContactForm'

interface ContactSectionProps {
  selectedSubjectTag?: string
}

export default function ContactSection({ selectedSubjectTag }: ContactSectionProps) {
  return (
    <motion.section
      id="contact-form"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="py-32 px-6 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <ContactForm initialSubjectTag={selectedSubjectTag} />
        </motion.div>
      </div>
    </motion.section>
  )
}
