'use client'

import { useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

const CustomCursor = () => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [isHovering, setIsHovering] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [hoveredElement, setHoveredElement] = useState<HTMLElement | null>(null)
  const [elementCorners, setElementCorners] = useState([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 }
  ])
  
  // Magnetische Position - wird zu den Mouse-Koordinaten "hingezogen"
  const magneticX = useMotionValue(0)
  const magneticY = useMotionValue(0)
  
  // Springs für sanfte Bewegung
  const springX = useSpring(magneticX, { damping: 30, stiffness: 400 })
  const springY = useSpring(magneticY, { damping: 30, stiffness: 400 })
  
  // Triangle Motion Values für präzise Kontrolle
  const triangle1X = useMotionValue(-15)
  const triangle1Y = useMotionValue(-15)
  const triangle2X = useMotionValue(15)
  const triangle2Y = useMotionValue(-15)
  const triangle3X = useMotionValue(15)
  const triangle3Y = useMotionValue(15)
  const triangle4X = useMotionValue(-15)
  const triangle4Y = useMotionValue(15)
  
  // Springs für die Dreiecke
  const triangle1SpringX = useSpring(triangle1X, { damping: 25, stiffness: 200 })
  const triangle1SpringY = useSpring(triangle1Y, { damping: 25, stiffness: 200 })
  const triangle2SpringX = useSpring(triangle2X, { damping: 25, stiffness: 200 })
  const triangle2SpringY = useSpring(triangle2Y, { damping: 25, stiffness: 200 })
  const triangle3SpringX = useSpring(triangle3X, { damping: 25, stiffness: 200 })
  const triangle3SpringY = useSpring(triangle3Y, { damping: 25, stiffness: 200 })
  const triangle4SpringX = useSpring(triangle4X, { damping: 25, stiffness: 200 })
  const triangle4SpringY = useSpring(triangle4Y, { damping: 25, stiffness: 200 })
  
  const triangleSprings = [
    { x: triangle1SpringX, y: triangle1SpringY },
    { x: triangle2SpringX, y: triangle2SpringY },
    { x: triangle3SpringX, y: triangle3SpringY },
    { x: triangle4SpringX, y: triangle4SpringY }
  ]

  // Farben basierend auf Dark Mode Detection
  const triangleColor = isDarkMode ? '#ffffff' : '#0a0f1a'
  const centerDotColor = isDarkMode ? '#ffffff' : '#000000'

  // Dark Mode Detection via CSS Media Query und HTML Attribute
  useEffect(() => {
    const checkDarkMode = () => {
      // Prüfe HTML data-theme oder class für manuell gesetzte Themes
      const htmlElement = document.documentElement
      const hasDataThemeDark = htmlElement.getAttribute('data-theme') === 'dark'
      const hasClassDark = htmlElement.classList.contains('dark')
      
      // Prüfe system preference als fallback
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      
      const isDark = hasDataThemeDark || hasClassDark || (!htmlElement.getAttribute('data-theme') && !htmlElement.classList.contains('light') && systemPrefersDark)
      setIsDarkMode(isDark)
    }
    
    checkDarkMode()
    
    // Observer für HTML Attribute Änderungen
    const observer = new MutationObserver(checkDarkMode)
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ['data-theme', 'class'] 
    })
    
    // Media Query Listener für System Theme Änderungen
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', checkDarkMode)
    
    return () => {
      observer.disconnect()
      mediaQuery.removeEventListener('change', checkDarkMode)
    }
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      
      // Suche nach magnetischen Elementen in der Nähe
      const target = e.target as HTMLElement
      const magneticElement = target.closest('button, a, input, textarea, select, [role="button"], .card, [data-magnetic="true"]')
      
      if (magneticElement) {
        const rect = magneticElement.getBoundingClientRect()
        const elementCenterX = rect.left + rect.width / 2
        const elementCenterY = rect.top + rect.height / 2
        
        // Berechne Distanz zur Element-Mitte
        const distanceX = e.clientX - elementCenterX
        const distanceY = e.clientY - elementCenterY
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)
        
        // Magnetische Zone (Radius in dem der Effekt aktiv ist)
        const magneticRadius = Math.max(rect.width, rect.height) * 0.8
        
        if (distance < magneticRadius) {
          setIsHovering(true)
          setHoveredElement(magneticElement as HTMLElement)
          
          // Berechne absolute Eck-Positionen für die Dreiecke
          const corners = [
            { x: rect.left, y: rect.top },           // Top-left
            { x: rect.right, y: rect.top },          // Top-right  
            { x: rect.right, y: rect.bottom },       // Bottom-right
            { x: rect.left, y: rect.bottom }         // Bottom-left
          ]
          setElementCorners(corners)
          
          // Setze Triangle Positionen zu den Ecken
          triangle1X.set(corners[0].x - e.clientX)
          triangle1Y.set(corners[0].y - e.clientY)
          triangle2X.set(corners[1].x - e.clientX)
          triangle2Y.set(corners[1].y - e.clientY)
          triangle3X.set(corners[2].x - e.clientX)
          triangle3Y.set(corners[2].y - e.clientY)
          triangle4X.set(corners[3].x - e.clientX)
          triangle4Y.set(corners[3].y - e.clientY)
          
          // Stärke des magnetischen Effekts (0-1, basierend auf Distanz)
          const magneticStrength = 1 - (distance / magneticRadius)
          const magneticForce = magneticStrength * 0.3 // 30% der Distanz zum Zentrum
          
          // Ziehe Cursor zum Element-Zentrum
          const pullX = elementCenterX - e.clientX
          const pullY = elementCenterY - e.clientY
          
          magneticX.set(e.clientX + (pullX * magneticForce))
          magneticY.set(e.clientY + (pullY * magneticForce))
        } else {
          setIsHovering(false)
          setHoveredElement(null)
          
          // Dreiecke zurück zum Cursor
          triangle1X.set(-15)
          triangle1Y.set(-15)
          triangle2X.set(15)
          triangle2Y.set(-15)
          triangle3X.set(15)
          triangle3Y.set(15)
          triangle4X.set(-15)
          triangle4Y.set(15)
          
          magneticX.set(e.clientX)
          magneticY.set(e.clientY)
        }
      } else {
        setIsHovering(false)
        setHoveredElement(null)
        
        // Dreiecke zurück zum Cursor
        triangle1X.set(-15)
        triangle1Y.set(-15)
        triangle2X.set(15)
        triangle2Y.set(-15)
        triangle3X.set(15)
        triangle3Y.set(15)
        triangle4X.set(-15)
        triangle4Y.set(15)
        
        magneticX.set(e.clientX)
        magneticY.set(e.clientY)
      }
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
      setHoveredElement(null)
      
      // Dreiecke zurück zum Cursor
      triangle1X.set(-15)
      triangle1Y.set(-15)
      triangle2X.set(15)
      triangle2Y.set(-15)
      triangle3X.set(15)
      triangle3Y.set(15)
      triangle4X.set(-15)
      triangle4Y.set(15)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [mouseX, mouseY, magneticX, magneticY, triangle1X, triangle1Y, triangle2X, triangle2Y, triangle3X, triangle3Y, triangle4X, triangle4Y])

  return (
    <>
      {/* 4 Dreiecke die um den Cursor kreisen oder zu Ecken springen */}
      {triangleSprings.map((triangle, index) => (
        <motion.div
          key={index}
          className="fixed pointer-events-none z-49"
          style={{
            x: springX,
            y: springY,
            translateX: '-50%',
            translateY: '-50%',
          }}
        >
          <motion.div
            style={{
              x: triangle.x,
              y: triangle.y,
              width: '3px',
              height: '3px',
              borderRadius: '50%',
              backgroundColor: triangleColor,
              opacity: 0.8
            }}
          />
        </motion.div>
      ))}

      {/* Pink Punkt (16px) - geblurred */}
      <motion.div
        className="fixed pointer-events-none z-51"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <div
          className="w-4 h-4 rounded-full"
          style={{
            backgroundColor: '#ec4899',
            boxShadow: '0 0 8px #ec4899, 0 0 12px #ec4899, 0 0 16px #ec4899',
            opacity: isHovering ? 0.8 : 0.2,
            filter: 'blur(12px)',
            transition: 'opacity 0.2s ease-out',
          }}
        />
      </motion.div>

      {/* Schwarzer Punkt in der Mitte (nicht transparent) */}
      <motion.div
        className="fixed pointer-events-none z-52"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <div
          className="w-2 h-2 rounded-full"
          style={{
            backgroundColor: centerDotColor,
          }}
        />
      </motion.div>
    </>
  )
}

export default CustomCursor
