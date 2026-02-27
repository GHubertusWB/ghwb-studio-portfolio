/**
 * ArtTeaser — Main client component for /kunst/teaser
 *
 * How to test:
 *   - Run `npm run dev` and open http://localhost:3000/kunst/teaser
 *   - Webcam requires HTTPS or localhost.
 *   - Without camera: move mouse/touch across the canvas for motion effect.
 *   - Adjust "Intensität" slider to control displacement strength.
 *
 * Framework: Next.js App Router (detected from /src/app/ structure).
 * Three.js loaded only on this page via dynamic import (no global impact).
 * All CSS is scoped via CSS Modules.
 */

'use client'

import { useRef, useEffect, useState, useCallback } from 'react'
import * as THREE from 'three'
import { vertexShader, fragmentShader } from './shaders'
import { MotionDetector } from './MotionDetector'
import UIOverlay from './UIOverlay'
import styles from '../art-teaser.module.css'

/* ------------------------------------------------------------------ */
/* Placeholder texture: load real artwork, canvas gradient fallback    */
/* ------------------------------------------------------------------ */
function createFallbackTexture(): THREE.CanvasTexture {
  const c = document.createElement('canvas')
  c.width = 1920
  c.height = 1080
  const ctx = c.getContext('2d')!

  // Bright visible gradient
  const grad = ctx.createLinearGradient(0, 0, 1920, 1080)
  grad.addColorStop(0, '#2d1b69')
  grad.addColorStop(0.3, '#1a3a5c')
  grad.addColorStop(0.5, '#0d4f4f')
  grad.addColorStop(0.7, '#4a2040')
  grad.addColorStop(1, '#1a1040')
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, 1920, 1080)

  // Bright organic blobs
  const blobs: [string, number, number, number, number][] = [
    ['#e94560', 400, 300, 320, 0.45],
    ['#4ecdc4', 1200, 500, 280, 0.4],
    ['#a855f7', 800, 200, 350, 0.35],
    ['#f59e0b', 1500, 700, 250, 0.5],
    ['#ec4899', 300, 700, 300, 0.4],
    ['#6366f1', 1000, 800, 280, 0.38],
    ['#14b8a6', 600, 500, 260, 0.42],
    ['#f97316', 1600, 200, 220, 0.35],
  ]

  for (const [hex, x, y, r, a] of blobs) {
    const rg = ctx.createRadialGradient(x, y, 0, x, y, r)
    rg.addColorStop(0, hex + Math.round(a * 255).toString(16).padStart(2, '0'))
    rg.addColorStop(0.5, hex + '44')
    rg.addColorStop(1, hex + '00')
    ctx.fillStyle = rg
    ctx.beginPath()
    ctx.arc(x, y, r, 0, Math.PI * 2)
    ctx.fill()
  }

  // Bright accent text
  ctx.save()
  ctx.globalAlpha = 0.06
  ctx.fillStyle = '#ffffff'
  ctx.font = 'bold 200px sans-serif'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText('GHWB', 960, 540)
  ctx.restore()

  const tex = new THREE.CanvasTexture(c)
  tex.colorSpace = THREE.SRGBColorSpace
  return tex
}

function loadArtworkTexture(): Promise<THREE.Texture> {
  return new Promise((resolve, reject) => {
    const loader = new THREE.TextureLoader()
    loader.load(
      '/gallery/art/ente-pink-tuerkis.jpg',
      (tex) => {
        tex.colorSpace = THREE.SRGBColorSpace
        resolve(tex)
      },
      undefined,
      () => reject(new Error('Image load failed'))
    )
  })
}

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */
export default function ArtTeaser() {
  const containerRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>(0)
  const cleanupRef = useRef<(() => void) | null>(null)

  // UI state
  const [cameraOn, setCameraOn] = useState(false)
  const [cameraLoading, setCameraLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [strength, setStrength] = useState(0.5)
  const [isSecure, setIsSecure] = useState(true)

  // Refs for values used inside the animation loop
  const strengthRef = useRef(strength)
  strengthRef.current = strength

  const cameraOnRef = useRef(false)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const streamRef = useRef<MediaStream | null>(null)
  const motionDetectorRef = useRef<MotionDetector | null>(null)
  const materialRef = useRef<THREE.ShaderMaterial | null>(null)
  const motionTextureRef = useRef<THREE.DataTexture | null>(null)

  // Mouse tracking
  const mouseRef = useRef({ x: 0.5, y: 0.5, moved: false })

  /* ---------------------------------------------------------------- */
  /* Enable camera                                                     */
  /* ---------------------------------------------------------------- */
  const handleEnableCamera = useCallback(async () => {
    setCameraLoading(true)
    setError(null)

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: { ideal: 640 }, height: { ideal: 360 }, facingMode: 'user' },
        audio: false,
      })

      const video = document.createElement('video')
      video.srcObject = stream
      video.playsInline = true
      video.muted = true
      video.setAttribute('style', 'position:fixed;top:-9999px;left:-9999px;width:1px;height:1px;opacity:0;pointer-events:none')
      document.body.appendChild(video)
      await video.play()

      videoRef.current = video
      streamRef.current = stream
      cameraOnRef.current = true
      setCameraOn(true)
    } catch (err: unknown) {
      const msg = err instanceof DOMException && err.name === 'NotAllowedError'
        ? 'Kamera-Zugriff wurde abgelehnt. Die Maus-Interaktion bleibt aktiv.'
        : 'Kamera konnte nicht gestartet werden. Die Maus-Interaktion bleibt aktiv.'
      setError(msg)
    } finally {
      setCameraLoading(false)
    }
  }, [])

  /* ---------------------------------------------------------------- */
  /* Three.js setup + animation loop                                   */
  /* ---------------------------------------------------------------- */
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // HTTPS check
    const secure = location.protocol === 'https:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1'
    setIsSecure(secure)

    // --- Renderer ---
    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: false })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.outputColorSpace = THREE.SRGBColorSpace
    container.appendChild(renderer.domElement)

    // --- Scene & Camera ---
    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10)
    camera.position.z = 1

    // --- Motion Detector ---
    const MOTION_W = 128
    const MOTION_H = 72
    const motionDetector = new MotionDetector(MOTION_W, MOTION_H)
    motionDetectorRef.current = motionDetector

    // --- Motion DataTexture ---
    const motionTexture = new THREE.DataTexture(
      motionDetector.motionData,
      MOTION_W,
      MOTION_H,
      THREE.RGBAFormat,
      THREE.UnsignedByteType
    )
    motionTexture.minFilter = THREE.LinearFilter
    motionTexture.magFilter = THREE.LinearFilter
    motionTexture.wrapS = THREE.ClampToEdgeWrapping
    motionTexture.wrapT = THREE.ClampToEdgeWrapping
    motionTexture.needsUpdate = true
    motionTextureRef.current = motionTexture

    // --- Shader Material (init with fallback, replace once image loads) ---
    const fallbackTex = createFallbackTexture()
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTex: { value: fallbackTex },
        uMotionTex: { value: motionTexture },
        uTime: { value: 0 },
        uStrength: { value: strengthRef.current * 0.12 },
        uMotionTexelSize: { value: new THREE.Vector2(1 / MOTION_W, 1 / MOTION_H) },
      },
    })
    materialRef.current = material

    // --- Try loading real artwork ---
    let artworkTex: THREE.Texture | null = null
    loadArtworkTexture()
      .then((tex) => {
        artworkTex = tex
        material.uniforms.uTex.value = tex
        material.needsUpdate = true
      })
      .catch(() => {
        // Fallback already set — nothing to do
      })

    // --- Fullscreen Quad ---
    const geometry = new THREE.PlaneGeometry(2, 2)
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    // --- Resize ---
    const onResize = () => {
      const w = container.clientWidth
      const h = container.clientHeight
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', onResize)

    // --- Mouse / Touch ---
    const onPointerMove = (e: PointerEvent) => {
      mouseRef.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
        moved: true,
      }
    }
    window.addEventListener('pointermove', onPointerMove)

    // --- Animation Loop ---
    const clock = new THREE.Clock()
    let lastMouseDecay = 0

    const animate = () => {
      rafRef.current = requestAnimationFrame(animate)

      const elapsed = clock.getElapsedTime()

      // Update motion
      if (cameraOnRef.current && videoRef.current && videoRef.current.readyState >= 2) {
        motionDetector.processVideoFrame(videoRef.current)
      } else if (mouseRef.current.moved) {
        motionDetector.processMouseMove(mouseRef.current.x, mouseRef.current.y)
        mouseRef.current.moved = false
        lastMouseDecay = elapsed
      } else if (elapsed - lastMouseDecay > 0.05) {
        motionDetector.decay()
        lastMouseDecay = elapsed
      }

      // Update texture data
      motionTexture.needsUpdate = true

      // Update uniforms
      material.uniforms.uTime.value = elapsed
      material.uniforms.uStrength.value = strengthRef.current * 0.12

      renderer.render(scene, camera)
    }

    animate()

    // --- Cleanup ---
    cleanupRef.current = () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('pointermove', onPointerMove)

      // Stop camera stream
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(t => t.stop())
        streamRef.current = null
      }
      if (videoRef.current) {
        videoRef.current.srcObject = null
        videoRef.current.remove()
        videoRef.current = null
      }

      // Dispose Three.js
      geometry.dispose()
      material.dispose()
      fallbackTex.dispose()
      if (artworkTex) artworkTex.dispose()
      motionTexture.dispose()
      motionDetector.dispose()
      renderer.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }

    return () => {
      cleanupRef.current?.()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={styles.container}>
      <div ref={containerRef} className={styles.canvasWrap} />
      <UIOverlay
        cameraOn={cameraOn}
        cameraLoading={cameraLoading}
        error={error}
        strength={strength}
        isSecure={isSecure}
        onEnableCamera={handleEnableCamera}
        onStrengthChange={setStrength}
      />
    </div>
  )
}
