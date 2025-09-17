'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import LoadingScreen from '@/components/LoadingScreen'
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy/index";
import Services from "@/components/Services";
import Divider from '@/components/ui/Divider';

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
      
      // Mindest-Loading Zeit von 4 Sekunden für vollständige Animation
      await new Promise(resolve => setTimeout(resolve, 4000))
      
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
          className="overflow-x-hidden relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative z-10">
            <Hero />
          </div>
          <div className="relative z-10">
            <Philosophy />
          </div>
          <div className="relative z-10">
            <Divider variant="comet" paddingY="py-20" />
          </div>
          <div className="relative z-10">
            <Services />
          </div>
          <div className="relative z-10">
            <Footer />
          </div>

          {/* Floating Contact Button System */}
          <FloatingContactButton />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
