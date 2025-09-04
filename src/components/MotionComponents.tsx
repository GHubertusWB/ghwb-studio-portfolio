'use client'

import dynamic from 'next/dynamic'
import { ReactNode } from 'react'

// Dynamisch geladene Motion-Komponenten
const MotionDiv = dynamic(() => import('framer-motion').then(mod => ({ default: mod.motion.div })), {
  loading: () => <div />,
  ssr: false,
})

const MotionSection = dynamic(() => import('framer-motion').then(mod => ({ default: mod.motion.section })), {
  loading: () => <section />,
  ssr: false,
})

const MotionH1 = dynamic(() => import('framer-motion').then(mod => ({ default: mod.motion.h1 })), {
  loading: () => <h1 />,
  ssr: false,
})

const MotionH2 = dynamic(() => import('framer-motion').then(mod => ({ default: mod.motion.h2 })), {
  loading: () => <h2 />,
  ssr: false,
})

const MotionP = dynamic(() => import('framer-motion').then(mod => ({ default: mod.motion.p })), {
  loading: () => <p />,
  ssr: false,
})

const MotionA = dynamic(() => import('framer-motion').then(mod => ({ default: mod.motion.a })), {
  loading: () => <a />,
  ssr: false,
})

const MotionButton = dynamic(() => import('framer-motion').then(mod => ({ default: mod.motion.button })), {
  loading: () => <button />,
  ssr: false,
})

export {
  MotionDiv,
  MotionSection,
  MotionH1,
  MotionH2,
  MotionP,
  MotionA,
  MotionButton,
}
