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
  const [resourcesLoaded, setResourcesLoaded] = useState(false)

  useEffect(() => {
    // Preload wichtige Ressourcen
    const preloadResources = async () => {
      const imagesToPreload = [
        '/icons/logo/logo.svg',
        '/icons/logo/logo-blue.svg',
        '/images/hubertus-portrait.jpg',
      ]

      // Preload Images
      const imagePromises = imagesToPreload.map(src => {
        return new Promise<void>((resolve) => {
          const img = new window.Image()
          img.onload = () => resolve()
          img.onerror = () => resolve() // Auch bei Fehlern weiter
          img.src = src
        })
      })

      // Preload API endpoints falls vorhanden
      const apiPromises = [
        fetch('/api/gallery/photography').catch(() => null),
        fetch('/api/gallery/art').catch(() => null)
      ]

      // Warte auf alle Ressourcen
      await Promise.allSettled([...imagePromises, ...apiPromises])
      
      // Mindest-Loading Zeit von 2 Sekunden für UX
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setResourcesLoaded(true)
    }

    preloadResources()
  }, [])

  const handleLoadingComplete = () => {
    setIsLoading(false)
    // Kleine Verzögerung bevor Content angezeigt wird für smooth transition
    setTimeout(() => {
      setShowContent(true)
    }, 300)
  }

  // LoadingScreen nur anzeigen wenn noch nicht alles geladen ist
  useEffect(() => {
    if (resourcesLoaded && isLoading) {
      handleLoadingComplete()
    }
  }, [resourcesLoaded, isLoading])

  



  // Zeige nur LoadingScreen bis alle Ressourcen geladen sind
  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />
  }

  return (
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
          <FloatingContactButton />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
