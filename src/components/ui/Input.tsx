'use client'

import { forwardRef, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  icon?: React.ReactNode
  isRequired?: boolean
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, icon, isRequired, className = '', ...props }, ref) => {
    const internalRef = useRef<HTMLInputElement>(null)
    
    useEffect(() => {
      const element = internalRef.current
      if (element) {
        const isDark = document.documentElement.classList.contains('dark')
        if (isDark) {
          element.style.borderColor = 'rgb(255, 255, 255)'
          element.style.borderWidth = '1px'
        } else {
          element.style.borderColor = 'rgb(17, 24, 39)'
          element.style.borderWidth = '2px'
        }
      }
    }, [])

    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative"
      >
        {/* Dark Mode Label */}
        {label && (
          <label 
            htmlFor={props.id}
            className="hidden dark:block text-sm font-medium text-white/80 mb-2 font-mono"
          >
            {label.toUpperCase()} {isRequired && <span className="text-xs font-normal text-white/50">(erforderlich)</span>}
          </label>
        )}
        
        {/* Light Mode Icon */}
        {icon && (
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:hidden flex items-center justify-center">
            {icon}
          </div>
        )}
        
        <input
          ref={(element) => {
            // Handle both external ref and internal ref
            if (ref) {
              if (typeof ref === 'function') {
                ref(element)
              } else {
                ref.current = element
              }
            }
            internalRef.current = element
            
            // Set initial border styling based on theme
            if (element) {
              const isDark = document.documentElement.classList.contains('dark')
              if (isDark) {
                element.style.borderColor = 'rgb(255, 255, 255)'
                element.style.borderWidth = '1px'
              } else {
                element.style.borderColor = 'rgb(17, 24, 39)'
                element.style.borderWidth = '2px'
              }
            }
          }}
          className={`w-full 
            ${icon ? 'dark:pl-4 pl-12' : 'pl-4'} pr-4 py-3 
            border-2 dark:border
            
            /* Light Mode - Bauhaus Style */
            bg-white text-gray-900 placeholder:text-gray-500 
            focus:bg-gray-50 focus:ring-2 focus:ring-white/20 focus:shadow-lg focus:shadow-white/40
            font-normal focus:font-semibold 
            rounded-none
            
            /* Dark Mode - Minimalist with Labels */
            dark:bg-transparent dark:text-white dark:placeholder:text-transparent
            dark:focus:shadow-lg dark:focus:shadow-white/20 dark:focus:bg-cyan-400/5
            dark:font-normal dark:focus:font-bold
            dark:border-white
            
            focus:outline-none transition-all duration-300 ${className}`}
          style={{
            borderStyle: 'solid'
          }}
          onFocus={(e) => {
            e.target.style.borderColor = 'rgb(255, 255, 255)'
            e.target.style.borderWidth = '2px'
          }}
          onBlur={(e) => {
            const isDark = document.documentElement.classList.contains('dark')
            if (isDark) {
              e.target.style.borderColor = 'rgb(255, 255, 255)'
              e.target.style.borderWidth = '1px'
            } else {
              e.target.style.borderColor = 'rgb(17, 24, 39)'
              e.target.style.borderWidth = '2px'
            }
          }}
          {...props}
        />
      </motion.div>
    )
  }
)

Input.displayName = 'Input'

export default Input
