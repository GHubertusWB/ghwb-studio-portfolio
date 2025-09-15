'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import LoadingScreen from '@/components/LoadingScreen'
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy/index";
import Services from "@/components/Services";

import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";

export default function HomeWithLoader() {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  const handleLoadingComplete = () => {
    setIsLoading(false)
    // Kleine Verzögerung bevor Content angezeigt wird für smooth transition
    setTimeout(() => {
      setShowContent(true)
    }, 200)
  }

  



  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      <AnimatePresence>
        {showContent && (
          <motion.div 
            className="overflow-x-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Hero />
            <Philosophy />
            <Services />

            <Footer />

            {/* Floating Contact Button System */}
            <FloatingContactButton
              theme="light"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
