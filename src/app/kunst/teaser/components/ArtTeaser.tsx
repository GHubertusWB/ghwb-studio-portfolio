/**
 * ArtTeaser — Interactive grass meadow with motion-driven wind
 *
 * How to test:
 *   - Run `npm run dev` and open http://localhost:3000/kunst/teaser
 *   - Webcam requires HTTPS or localhost.
 *   - Without camera: move mouse/touch to create wind across the grass.
 *   - Adjust "Intensität" slider to control wind strength.
 *
 * Framework: Next.js App Router (detected from /src/app/ structure).
 * Three.js loaded only on this page via dynamic import (no global impact).
 * All CSS is scoped via CSS Modules.
 */

'use client'

import { useRef, useEffect, useState, useCallback } from 'react'
import * as THREE from 'three'
import { grassVertexShader, grassFragmentShader, groundVertexShader, groundFragmentShader } from './shaders'
import { MotionDetector } from './MotionDetector'
import UIOverlay from './UIOverlay'
import styles from '../art-teaser.module.css'

/* ------------------------------------------------------------------ */
/* Constants                                                           */
/* ------------------------------------------------------------------ */
const BLADE_COUNT = 100_000
const FIELD_SIZE = 30
const MOTION_W = 128
const MOTION_H = 72
const FOG_COLOR = new THREE.Color('#c8bda8')

/* Deterministic random */
function makeRandom(seed: number) {
  return () => {
    seed = (seed * 16807) % 2147483647
    return (seed - 1) / 2147483646
  }
}

/* ------------------------------------------------------------------ */
/* Create instanced grass field                                        */
/* ------------------------------------------------------------------ */
function createGrassField(motionTexture: THREE.DataTexture) {
  const rand = makeRandom(42)

  // Blade template: 3 segments + tip = 7 vertices, 5 triangles
  const W = 0.018
  const SEGS = 3
  const posArr: number[] = []
  const heightArr: number[] = []
  const idxArr: number[] = []

  for (let i = 0; i <= SEGS; i++) {
    const t = i / SEGS
    if (i < SEGS) {
      const w = W * (1 - t * 0.9)
      posArr.push(-w, t, 0, w, t, 0)
      heightArr.push(t, t)
    } else {
      posArr.push(0, 1, 0)
      heightArr.push(1)
    }
  }

  for (let i = 0; i < SEGS - 1; i++) {
    const bl = i * 2, br = i * 2 + 1, tl = (i + 1) * 2, tr = (i + 1) * 2 + 1
    idxArr.push(bl, br, tr, bl, tr, tl)
  }
  idxArr.push((SEGS - 1) * 2, (SEGS - 1) * 2 + 1, SEGS * 2) // tip triangle

  const geom = new THREE.InstancedBufferGeometry()
  geom.setAttribute('position', new THREE.Float32BufferAttribute(posArr, 3))
  geom.setAttribute('bladeHeight', new THREE.Float32BufferAttribute(heightArr, 1))
  geom.setIndex(idxArr)
  geom.instanceCount = BLADE_COUNT

  // Per-instance data
  const offsets = new Float32Array(BLADE_COUNT * 3)
  const scales = new Float32Array(BLADE_COUNT)
  const phases = new Float32Array(BLADE_COUNT)
  const angles = new Float32Array(BLADE_COUNT)
  const colorVars = new Float32Array(BLADE_COUNT)

  for (let i = 0; i < BLADE_COUNT; i++) {
    offsets[i * 3]     = (rand() - 0.5) * FIELD_SIZE
    offsets[i * 3 + 1] = 0
    offsets[i * 3 + 2] = (rand() - 0.5) * FIELD_SIZE
    scales[i]    = 0.4 + rand() * 0.9
    phases[i]    = rand() * Math.PI * 2
    angles[i]    = rand() * Math.PI * 2
    colorVars[i] = (rand() - 0.5) * 0.6
  }

  geom.setAttribute('aOffset', new THREE.InstancedBufferAttribute(offsets, 3))
  geom.setAttribute('aScale', new THREE.InstancedBufferAttribute(scales, 1))
  geom.setAttribute('aPhase', new THREE.InstancedBufferAttribute(phases, 1))
  geom.setAttribute('aAngle', new THREE.InstancedBufferAttribute(angles, 1))
  geom.setAttribute('aColorVar', new THREE.InstancedBufferAttribute(colorVars, 1))

  const material = new THREE.ShaderMaterial({
    vertexShader: grassVertexShader,
    fragmentShader: grassFragmentShader,
    side: THREE.DoubleSide,
    uniforms: {
      uMotionTex: { value: motionTexture },
      uTime: { value: 0 },
      uStrength: { value: 0.175 },
      uFieldSize: { value: FIELD_SIZE },
      uMotionTexelSize: { value: new THREE.Vector2(1 / MOTION_W, 1 / MOTION_H) },
      uFogColor: { value: FOG_COLOR },
      uFogNear: { value: 14 },
      uFogFar: { value: 32 },
    },
  })

  return { mesh: new THREE.Mesh(geom, material), material, geometry: geom }
}

/* ------------------------------------------------------------------ */
/* Create ground plane                                                 */
/* ------------------------------------------------------------------ */
function createGround() {
  const geometry = new THREE.PlaneGeometry(60, 60)
  geometry.rotateX(-Math.PI / 2)
  geometry.translate(0, -0.02, 0)

  const material = new THREE.ShaderMaterial({
    vertexShader: groundVertexShader,
    fragmentShader: groundFragmentShader,
    uniforms: {
      uFogColor: { value: FOG_COLOR },
      uFogNear: { value: 14 },
      uFogFar: { value: 32 },
    },
  })

  return { mesh: new THREE.Mesh(geometry, material), material, geometry }
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
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setClearColor(FOG_COLOR)
    container.appendChild(renderer.domElement)

    // --- Scene & Perspective Camera ---
    const scene = new THREE.Scene()
    const aspect = container.clientWidth / container.clientHeight
    const camera = new THREE.PerspectiveCamera(50, aspect, 0.1, 80)
    camera.position.set(0, 2.5, 13)
    camera.lookAt(0, 0.3, -2)

    // --- Motion Detector ---
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

    // --- Grass Field ---
    const grass = createGrassField(motionTexture)
    scene.add(grass.mesh)
    materialRef.current = grass.material

    // --- Ground ---
    const ground = createGround()
    scene.add(ground.mesh)

    // --- Resize ---
    const onResize = () => {
      const w = container.clientWidth
      const h = container.clientHeight
      renderer.setSize(w, h)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
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
      } else if (elapsed - lastMouseDecay > 0.03) {
        motionDetector.decay()
        lastMouseDecay = elapsed
      }

      // Update texture data
      motionTexture.needsUpdate = true

      // Update grass uniforms
      grass.material.uniforms.uTime.value = elapsed
      grass.material.uniforms.uStrength.value = strengthRef.current * 0.35

      // Gentle camera sway
      camera.position.y = 2.5 + Math.sin(elapsed * 0.12) * 0.04

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
      grass.geometry.dispose()
      grass.material.dispose()
      ground.geometry.dispose()
      ground.material.dispose()
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
