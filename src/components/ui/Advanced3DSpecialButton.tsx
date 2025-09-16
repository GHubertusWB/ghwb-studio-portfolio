'use client'

import React, { useRef, useState, useCallback, useMemo, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Text, RoundedBox } from '@react-three/drei'
import * as THREE from 'three'
import { motion } from 'framer-motion'

interface Advanced3DButtonProps {
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  className?: string
  glowColor?: string
  size?: 'sm' | 'base' | 'lg'
  variant?: 'glass' | 'neon' | 'crystal'
}

// Erweiterte 3D Button Mesh Komponente
function Advanced3DButtonMesh({ 
  isHovered, 
  isPressed, 
  mousePosition, 
  children, 
  glowColor = '#06B6D4',
  size = 'base',
  variant = 'glass'
}: {
  isHovered: boolean
  isPressed: boolean
  mousePosition: { x: number; y: number }
  children: React.ReactNode
  glowColor: string
  size: string
  variant: string
}) {
  const meshRef = useRef<THREE.Group>(null!)
  const glowRef = useRef<THREE.Mesh>(null!)
  const innerGlowRef = useRef<THREE.Mesh>(null!)
  const { viewport, camera } = useThree()
  
  // Size variants
  const sizeConfig = useMemo(() => ({
    sm: { width: 2.8, height: 0.9, depth: 0.4, fontSize: 0.28, padding: 0.2 },
    base: { width: 4.2, height: 1.2, depth: 0.5, fontSize: 0.32, padding: 0.25 },
    lg: { width: 5.8, height: 1.5, depth: 0.6, fontSize: 0.38, padding: 0.3 }
  }), [])
  
  const config = sizeConfig[size as keyof typeof sizeConfig] || sizeConfig.base

  // Animation Loop
  useFrame((state) => {
    if (meshRef.current && glowRef.current && innerGlowRef.current) {
      const time = state.clock.getElapsedTime()
      
      // Erweiterte Pulsierungseffekte
      const basePulse = 0.4 + Math.sin(time * 1.5) * 0.15
      const secondaryPulse = 0.3 + Math.cos(time * 2.3) * 0.1
      const hoverPulse = isHovered ? 
        0.8 + Math.sin(time * 6) * 0.4 + Math.cos(time * 3.7) * 0.2 : 
        basePulse
      
      // Mehrschichtiger Glow
      if (glowRef.current.material instanceof THREE.MeshBasicMaterial) {
        glowRef.current.material.opacity = hoverPulse * (isHovered ? 0.8 : 0.3)
        glowRef.current.scale.setScalar(1 + hoverPulse * 0.1)
      }
      
      if (innerGlowRef.current.material instanceof THREE.MeshBasicMaterial) {
        innerGlowRef.current.material.opacity = secondaryPulse * (isHovered ? 0.4 : 0.15)
      }
      
      // Erweiterte Hover-Interaktionen
      if (isHovered) {
        // Dramatischer Z-Movement
        meshRef.current.position.z = THREE.MathUtils.lerp(
          meshRef.current.position.z, 
          1.2, 
          0.08
        )
        
        // Präzises Cursor-Tracking mit Smoothing
        const tiltStrength = 0.6
        const tiltX = (mousePosition.y - 0.5) * tiltStrength
        const tiltY = (mousePosition.x - 0.5) * -tiltStrength
        
        meshRef.current.rotation.x = THREE.MathUtils.lerp(
          meshRef.current.rotation.x,
          tiltX,
          0.12
        )
        meshRef.current.rotation.y = THREE.MathUtils.lerp(
          meshRef.current.rotation.y,
          tiltY,
          0.12
        )
        
        // Dynamische Skalierung
        const dynamicScale = 1.08 + Math.sin(time * 4) * 0.02
        meshRef.current.scale.setScalar(
          THREE.MathUtils.lerp(meshRef.current.scale.x, dynamicScale, 0.1)
        )
        
        // Rotations-Momentum
        meshRef.current.rotation.z = Math.sin(time * 0.5) * 0.02
        
      } else {
        // Sanfte Rückkehr
        meshRef.current.position.z = THREE.MathUtils.lerp(
          meshRef.current.position.z, 
          0, 
          0.06
        )
        meshRef.current.rotation.x = THREE.MathUtils.lerp(
          meshRef.current.rotation.x, 0, 0.08
        )
        meshRef.current.rotation.y = THREE.MathUtils.lerp(
          meshRef.current.rotation.y, 0, 0.08
        )
        meshRef.current.rotation.z = THREE.MathUtils.lerp(
          meshRef.current.rotation.z, 0, 0.08
        )
        meshRef.current.scale.setScalar(
          THREE.MathUtils.lerp(meshRef.current.scale.x, 1, 0.08)
        )
      }
      
      // Press-Effekt mit Spring-Physics
      if (isPressed) {
        meshRef.current.scale.setScalar(0.92)
        meshRef.current.position.z = THREE.MathUtils.lerp(
          meshRef.current.position.z, -0.2, 0.3
        )
      }
    }
  })

  // Erweiterte Materialien basierend auf Variant
  const materials = useMemo(() => {
    const baseColor = new THREE.Color(glowColor)
    
    const variants = {
      glass: new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        metalness: 0,
        roughness: 0.05,
        transmission: 0.95,
        transparent: true,
        opacity: 0.85,
        thickness: 0.8,
        ior: 1.5,
        clearcoat: 1,
        clearcoatRoughness: 0.05,
        envMapIntensity: 2,
        side: THREE.DoubleSide,
      }),
      
      neon: new THREE.MeshPhysicalMaterial({
        color: baseColor,
        metalness: 0.1,
        roughness: 0.2,
        transmission: 0.7,
        transparent: true,
        opacity: 0.9,
        thickness: 0.3,
        emissive: baseColor,
        emissiveIntensity: 0.2,
        clearcoat: 0.8,
        clearcoatRoughness: 0.1,
      }),
      
      crystal: new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        metalness: 0,
        roughness: 0,
        transmission: 0.98,
        transparent: true,
        opacity: 0.95,
        thickness: 1.2,
        ior: 2.4,
        clearcoat: 1,
        clearcoatRoughness: 0,
        envMapIntensity: 3,
        side: THREE.DoubleSide,
      })
    }
    
    return variants[variant as keyof typeof variants] || variants.glass
  }, [glowColor, variant])

  // Glow-Materialien
  const glowMaterials = useMemo(() => {
    const color = new THREE.Color(glowColor)
    
    return {
      outer: new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.3,
        side: THREE.BackSide,
      }),
      inner: new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.15,
        side: THREE.FrontSide,
      })
    }
  }, [glowColor])

  return (
    <group ref={meshRef}>
      {/* Outer Glow */}
      <mesh ref={glowRef} position={[0, 0, -0.02]}>
        <RoundedBox 
          args={[config.width + 0.4, config.height + 0.4, config.depth + 0.2]} 
          radius={0.25} 
          smoothness={12}
        >
          <primitive object={glowMaterials.outer} attach="material" />
        </RoundedBox>
      </mesh>
      
      {/* Inner Glow */}
      <mesh ref={innerGlowRef} position={[0, 0, -0.01]}>
        <RoundedBox 
          args={[config.width + 0.15, config.height + 0.15, config.depth + 0.05]} 
          radius={0.2} 
          smoothness={10}
        >
          <primitive object={glowMaterials.inner} attach="material" />
        </RoundedBox>
      </mesh>
      
      {/* Haupt-Button */}
      <mesh>
        <RoundedBox 
          args={[config.width, config.height, config.depth]} 
          radius={0.18} 
          smoothness={16}
        >
          <primitive object={materials} attach="material" />
        </RoundedBox>
        
        {/* 3D Text mit besserer Positionierung */}
        <Text
          position={[0, 0, config.depth / 2 + 0.02]}
          fontSize={config.fontSize}
          color={variant === 'neon' ? '#ffffff' : '#2a2a2a'}
          anchorX="center"
          anchorY="middle"
          letterSpacing={0.025}
          lineHeight={1}
          maxWidth={config.width - config.padding}
        >
          {children}
        </Text>
      </mesh>
    </group>
  )
}

// Loading Fallback
function ButtonFallback({ size }: { size: string }) {
  const containerSizes = {
    sm: 'w-32 h-16',
    base: 'w-40 h-20',
    lg: 'w-52 h-24'
  }
  
  return (
    <div className={`${containerSizes[size as keyof typeof containerSizes]} bg-gray-200 dark:bg-gray-700 rounded-2xl flex items-center justify-center animate-pulse`}>
      <div className="text-gray-400 text-sm">Loading...</div>
    </div>
  )
}

// Haupt-Komponente
export const Advanced3DSpecialButton: React.FC<Advanced3DButtonProps> = ({
  children,
  onClick,
  disabled = false,
  className = '',
  glowColor = '#06B6D4',
  size = 'base',
  variant = 'glass'
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isPressed, setIsPressed] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 })
  
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    setMousePosition({ x, y })
  }, [])

  const handleClick = useCallback(() => {
    if (!disabled && onClick) {
      onClick()
    }
  }, [disabled, onClick])

  // Container-Größen
  const containerSizes = {
    sm: 'w-32 h-16',
    base: 'w-40 h-20',
    lg: 'w-52 h-24'
  }

  return (
    <motion.div
      className={`${containerSizes[size]} cursor-pointer select-none ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
      whileTap={{ scale: 0.95 }}
      style={{ 
        opacity: disabled ? 0.4 : 1,
        pointerEvents: disabled ? 'none' : 'auto',
        filter: disabled ? 'grayscale(0.5)' : 'none'
      }}
    >
      <Suspense fallback={<ButtonFallback size={size} />}>
        <Canvas
          camera={{ position: [0, 0, 6], fov: 45 }}
          style={{ width: '100%', height: '100%' }}
          gl={{ alpha: true, antialias: true }}
        >
          {/* Erweiterte Beleuchtung */}
          <ambientLight intensity={0.3} />
          <directionalLight 
            position={[8, 8, 5]} 
            intensity={0.8} 
            castShadow
            shadow-mapSize={[1024, 1024]}
          />
          <pointLight 
            position={[-5, -5, -3]} 
            intensity={0.4} 
            color={glowColor}
          />
          <pointLight 
            position={[5, 2, 8]} 
            intensity={0.3} 
            color="#ffffff"
          />
          
          {/* Optimierte Beleuchtung ohne externe Environment */}
          <hemisphereLight intensity={0.35} groundColor="#444" />
          <spotLight 
            position={[10, 10, 10]} 
            angle={0.15} 
            penumbra={1} 
            intensity={0.5}
            castShadow
          />
          
          {/* 3D Button */}
          <Advanced3DButtonMesh
            isHovered={isHovered}
            isPressed={isPressed}
            mousePosition={mousePosition}
            glowColor={glowColor}
            size={size}
            variant={variant}
          >
            {children}
          </Advanced3DButtonMesh>
        </Canvas>
      </Suspense>
    </motion.div>
  )
}

export default Advanced3DSpecialButton
