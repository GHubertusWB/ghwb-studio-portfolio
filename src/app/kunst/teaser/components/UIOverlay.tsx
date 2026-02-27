import React from 'react'
import styles from '../art-teaser.module.css'

interface UIOverlayProps {
  cameraOn: boolean
  cameraLoading: boolean
  error: string | null
  strength: number
  isSecure: boolean
  onEnableCamera: () => void
  onStrengthChange: (value: number) => void
}

export default function UIOverlay({
  cameraOn,
  cameraLoading,
  error,
  strength,
  isSecure,
  onEnableCamera,
  onStrengthChange,
}: UIOverlayProps) {
  return (
    <div className={styles.overlay}>
      {/* Left panel: controls */}
      <div className={styles.panel}>
        <p className={styles.title}>Interactive Art</p>
        <p className={styles.subtitle}>
          {cameraOn
            ? 'Bewege dich vor der Kamera — das Bild reagiert auf deine Bewegung.'
            : 'Aktiviere die Kamera oder bewege die Maus über das Bild.'}
        </p>

        {/* Camera status */}
        <div className={styles.statusRow}>
          <span className={`${styles.statusDot} ${cameraOn ? styles.statusDotOn : ''}`} />
          <span className={styles.statusText}>
            Kamera {cameraOn ? 'aktiv' : 'inaktiv'}
          </span>
        </div>

        {/* Enable Camera button */}
        {!cameraOn && (
          <button
            className={styles.enableBtn}
            onClick={onEnableCamera}
            disabled={cameraLoading || !isSecure}
          >
            {cameraLoading ? (
              <>
                <span className={styles.spinner} />
                Wird verbunden…
              </>
            ) : (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 7l-7 5 7 5V7z" />
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                </svg>
                Kamera aktivieren
              </>
            )}
          </button>
        )}

        {/* HTTPS warning */}
        {!isSecure && (
          <div className={styles.infoMsg}>
            Kamera benötigt HTTPS oder localhost. Maus-Interaktion ist aktiv.
          </div>
        )}

        {/* Permission / error message */}
        {error && (
          <div className={styles.errorMsg}>
            {error}
          </div>
        )}

        {/* Intensity slider */}
        <div className={styles.sliderGroup}>
          <div className={styles.sliderLabel}>
            <span className={styles.sliderLabelText}>Intensität</span>
            <span className={styles.sliderValue}>{Math.round(strength * 100)}%</span>
          </div>
          <input
            type="range"
            className={styles.slider}
            min="0"
            max="1"
            step="0.01"
            value={strength}
            onChange={(e) => onStrengthChange(parseFloat(e.target.value))}
          />
        </div>
      </div>

      {/* Right badge */}
      <div className={styles.badge}>
        <p className={styles.badgeText}>GHWB Studio</p>
      </div>
    </div>
  )
}
