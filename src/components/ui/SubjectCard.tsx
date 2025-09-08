'use client'

import { motion } from 'framer-motion'

interface SubjectCardProps {
  title: string
  description: string
  icon: React.ReactNode
  isSelected: boolean
  onClick: () => void
  delay?: number
}

export default function SubjectCard({ 
  title, 
  description, 
  icon, 
  isSelected, 
  onClick, 
  delay = 0 
}: SubjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className={`group relative cursor-pointer transition-all duration-300 ${
        isSelected 
          ? 'border-white bg-gray-50 ring-2 ring-white/20 shadow-lg shadow-white/40 dark:border-white dark:bg-cyan-400/5 dark:shadow-lg dark:shadow-white/20' 
          : 'border-gray-900 hover:border-gray-400 hover:bg-gray-50 dark:border-white dark:hover:border-white/40 dark:hover:bg-white/5 hover:shadow-lg dark:hover:shadow-white/10'
      }`}
      style={{
        border: '2px solid',
        padding: '16px'
      }}
      onClick={onClick}
      whileTap={{ scale: 0.98 }}
    >
      {/* Status Indicator */}
      <div className={`absolute top-4 right-4 w-2 h-2 rounded-full ${
        isSelected ? 'bg-white dark:bg-white' : 'bg-gray-400 dark:bg-white/60'
      } animate-pulse`}></div>
      
      <div className="w-10 h-10 mb-3 border border-gray-300 dark:border-white/30 flex items-center justify-center group-hover:border-gray-500 dark:group-hover:border-white/60 transition-colors">
        {icon}
      </div>
      
      <h3 className="text-lg font-semibold mb-1 text-gray-800 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white/90 transition-colors">
        {title}
      </h3>
      
      <p className="text-gray-600 dark:text-white/70 leading-relaxed text-xs">
        {description}
      </p>
    </motion.div>
  )
}
