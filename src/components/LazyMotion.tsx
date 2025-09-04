'use client'

import { LazyMotion, domAnimation, m } from 'framer-motion'
import { ReactNode } from 'react'

interface LazyMotionWrapperProps {
  children: ReactNode
}

export function LazyMotionWrapper({ children }: LazyMotionWrapperProps) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  )
}

// Exportiere lazy-loaded motion components
export { m as motion }
