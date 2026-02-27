'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Lock, Eye, EyeOff, AlertCircle, Loader2 } from 'lucide-react'

export default function AngebotPage() {
  const params = useParams()
  const id = params.id as string

  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [embedUrl, setEmbedUrl] = useState<string | null>(null)
  const [kunde, setKunde] = useState('')

  // Session-Check: embedUrl im sessionStorage behalten
  useEffect(() => {
    const cached = sessionStorage.getItem(`angebot-${id}`)
    if (cached) {
      try {
        const data = JSON.parse(cached)
        if (data.embedUrl && new Date(data.expiresAt) > new Date()) {
          setEmbedUrl(data.embedUrl)
          setKunde(data.kunde)
        }
      } catch {
        sessionStorage.removeItem(`angebot-${id}`)
      }
    }
  }, [id])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/angebot/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, password }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Ein Fehler ist aufgetreten.')
        setLoading(false)
        return
      }

      // In Session speichern
      sessionStorage.setItem(`angebot-${id}`, JSON.stringify(data))
      setEmbedUrl(data.embedUrl)
      setKunde(data.kunde)
    } catch {
      setError('Verbindungsfehler. Bitte versuchen Sie es erneut.')
    } finally {
      setLoading(false)
    }
  }

  // Passwort-Gate
  if (!embedUrl) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          {/* Logo */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 mb-6">
              <Lock className="w-7 h-7 text-white/70" />
            </div>
            <h1 className="text-2xl font-semibold text-white tracking-tight">
              Geschütztes Angebot
            </h1>
            <p className="text-gray-400 mt-2 text-sm">
              Bitte geben Sie das Passwort ein, um das Angebot einzusehen.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError('') }}
                placeholder="Passwort"
                autoFocus
                className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all pr-12"
                disabled={loading}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex items-center gap-2 text-red-400 text-sm px-1"
                >
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{error}</span>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              type="submit"
              disabled={loading || !password}
              className="w-full py-3.5 bg-white text-gray-900 font-medium rounded-xl hover:bg-gray-100 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Wird geprüft...
                </>
              ) : (
                'Angebot öffnen'
              )}
            </button>
          </form>

          <p className="text-center text-gray-600 text-xs mt-8">
            GHWB Studio · Vertrauliches Dokument
          </p>
        </motion.div>
      </div>
    )
  }

  // Canva Embed anzeigen
  return (
    <div className="min-h-screen bg-gray-950 flex flex-col pt-16">
      {/* Minimal Header */}
      <div className="flex items-center justify-between px-6 py-3 bg-gray-900/80 backdrop-blur-lg border-b border-white/5">
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-white">GHWB Studio</span>
          <span className="text-gray-600">·</span>
          <span className="text-sm text-gray-400">Angebot für {kunde}</span>
        </div>
        <button
          onClick={() => {
            sessionStorage.removeItem(`angebot-${id}`)
            setEmbedUrl(null)
            setPassword('')
          }}
          className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
        >
          Abmelden
        </button>
      </div>

      {/* Canva Embed */}
      <div className="flex-1 relative">
        <iframe
          src={embedUrl}
          className="absolute inset-0 w-full h-full border-0"
          allow="fullscreen"
          loading="lazy"
          title={`Angebot für ${kunde}`}
        />
      </div>
    </div>
  )
}
