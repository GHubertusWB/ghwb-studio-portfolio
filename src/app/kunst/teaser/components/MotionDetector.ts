/**
 * MotionDetector — CPU-based motion detection via frame differencing.
 *
 * Supports two modes:
 *   1. Camera: processVideoFrame(video) — compares consecutive webcam frames in luma space.
 *   2. Mouse fallback: processMouseMove(nx, ny) — creates a synthetic motion blob at cursor.
 *
 * Outputs a Uint8Array (RGBA, 128×72) suitable for THREE.DataTexture.
 */

export class MotionDetector {
  readonly width: number
  readonly height: number
  readonly motionData: Uint8Array // RGBA for DataTexture

  private canvas: HTMLCanvasElement
  private ctx: CanvasRenderingContext2D
  private prevLuma: Float32Array
  private smoothed: Float32Array

  // Mouse fallback state
  private prevMouseX = -1
  private prevMouseY = -1

  constructor(width = 128, height = 72) {
    this.width = width
    this.height = height

    this.canvas = document.createElement('canvas')
    this.canvas.width = width
    this.canvas.height = height
    this.ctx = this.canvas.getContext('2d', { willReadFrequently: true })!

    const size = width * height
    this.prevLuma = new Float32Array(size)
    this.smoothed = new Float32Array(size)
    this.motionData = new Uint8Array(size * 4)

    // Init alpha channel to 255
    for (let i = 0; i < size; i++) {
      this.motionData[i * 4 + 3] = 255
    }
  }

  /* ------------------------------------------------------------------ */
  /* Camera mode                                                         */
  /* ------------------------------------------------------------------ */

  processVideoFrame(video: HTMLVideoElement): void {
    // Mirror horizontally for natural feel
    this.ctx.save()
    this.ctx.scale(-1, 1)
    this.ctx.drawImage(video, -this.width, 0, this.width, this.height)
    this.ctx.restore()

    const imageData = this.ctx.getImageData(0, 0, this.width, this.height)
    const data = imageData.data
    const size = this.width * this.height

    for (let i = 0; i < size; i++) {
      const idx = i * 4
      // BT.709 luma
      const luma = (0.2126 * data[idx] + 0.7152 * data[idx + 1] + 0.0722 * data[idx + 2]) / 255

      let diff = Math.abs(luma - this.prevLuma[i])
      // Threshold (0.025) + gain (×4)
      diff = Math.min(1.0, Math.max(0.0, diff - 0.025) * 4.0)

      // Temporal smoothing (exponential)
      this.smoothed[i] = this.smoothed[i] * 0.75 + diff * 0.25

      this.prevLuma[i] = luma
    }

    this.applyBlur()
    this.writeMotionData()
  }

  /* ------------------------------------------------------------------ */
  /* Mouse / touch fallback                                              */
  /* ------------------------------------------------------------------ */

  processMouseMove(normalizedX: number, normalizedY: number): void {
    // Natural decay
    const size = this.width * this.height
    for (let i = 0; i < size; i++) {
      this.smoothed[i] *= 0.90
    }

    if (this.prevMouseX < 0) {
      this.prevMouseX = normalizedX
      this.prevMouseY = normalizedY
      this.writeMotionData()
      return
    }

    const dx = normalizedX - this.prevMouseX
    const dy = normalizedY - this.prevMouseY
    const velocity = Math.sqrt(dx * dx + dy * dy)

    if (velocity > 0.001) {
      const cx = Math.floor(normalizedX * this.width)
      const cy = Math.floor((1.0 - normalizedY) * this.height) // flip Y for texture coords
      const radius = 18
      const intensity = Math.min(1.0, velocity * 10.0)

      const x0 = Math.max(0, cx - radius)
      const x1 = Math.min(this.width - 1, cx + radius)
      const y0 = Math.max(0, cy - radius)
      const y1 = Math.min(this.height - 1, cy + radius)

      for (let y = y0; y <= y1; y++) {
        for (let x = x0; x <= x1; x++) {
          const d = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2)
          const blob = Math.max(0.0, 1.0 - d / radius)
          const val = blob * blob * intensity
          const idx = y * this.width + x
          this.smoothed[idx] = Math.max(this.smoothed[idx], val)
        }
      }
    }

    this.prevMouseX = normalizedX
    this.prevMouseY = normalizedY
    this.writeMotionData()
  }

  /* ------------------------------------------------------------------ */
  /* Helpers                                                             */
  /* ------------------------------------------------------------------ */

  /** Decay-only pass (for idle frames when mouse doesn't move) */
  decay(): void {
    const size = this.width * this.height
    for (let i = 0; i < size; i++) {
      this.smoothed[i] *= 0.94
    }
    this.writeMotionData()
  }

  /** 3×3 box blur on smoothed motion map */
  private applyBlur(): void {
    const { width, height, smoothed } = this
    const temp = new Float32Array(smoothed.length)

    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        let sum = 0
        for (let dy = -1; dy <= 1; dy++) {
          for (let dx = -1; dx <= 1; dx++) {
            sum += smoothed[(y + dy) * width + (x + dx)]
          }
        }
        temp[y * width + x] = sum / 9
      }
    }

    smoothed.set(temp)
  }

  /** Pack smoothed float data → RGBA Uint8Array */
  private writeMotionData(): void {
    const size = this.width * this.height
    for (let i = 0; i < size; i++) {
      const val = Math.min(255, (this.smoothed[i] * 255) | 0)
      const idx = i * 4
      this.motionData[idx] = val
      this.motionData[idx + 1] = val
      this.motionData[idx + 2] = val
      // [idx + 3] stays 255
    }
  }

  dispose(): void {
    this.canvas.width = 0
    this.canvas.height = 0
  }
}
