'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Lock, Eye, EyeOff, AlertCircle, Loader2, CheckCircle, Send, PenLine, X } from 'lucide-react'

export default function AngebotPage() {
  const params = useParams()
  const id = params.id as string

  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [embedUrl, setEmbedUrl] = useState<string | null>(null)
  const [kunde, setKunde] = useState('')

  // Action states
  const [actionLoading, setActionLoading] = useState(false)
  const [accepted, setAccepted] = useState(false)
  const [revisionSent, setRevisionSent] = useState(false)
  const [showRevisionForm, setShowRevisionForm] = useState(false)
  const [showAcceptConfirm, setShowAcceptConfirm] = useState(false)
  const [revisionMessage, setRevisionMessage] = useState('')
  const [actionError, setActionError] = useState('')
  const [actionSuccess, setActionSuccess] = useState('')

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

  const handleAccept = async () => {
    setActionLoading(true)
    setActionError('')
    try {
      const res = await fetch('/api/angebot/respond', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ angebotId: id, action: 'accept' }),
      })
      const data = await res.json()
      if (!res.ok) {
        setActionError(data.error || 'Fehler beim Senden.')
      } else {
        setAccepted(true)
        setShowAcceptConfirm(false)
        setActionSuccess('Beauftragung erfolgreich gesendet!')
      }
    } catch {
      setActionError('Verbindungsfehler. Bitte versuchen Sie es erneut.')
    } finally {
      setActionLoading(false)
    }
  }

  const handleRevision = async () => {
    if (!revisionMessage.trim()) {
      setActionError('Bitte geben Sie Ihre Änderungswünsche ein.')
      return
    }
    setActionLoading(true)
    setActionError('')
    try {
      const res = await fetch('/api/angebot/respond', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ angebotId: id, action: 'revision', message: revisionMessage }),
      })
      const data = await res.json()
      if (!res.ok) {
        setActionError(data.error || 'Fehler beim Senden.')
      } else {
        setRevisionSent(true)
        setShowRevisionForm(false)
        setActionSuccess('Änderungswünsche erfolgreich gesendet!')
      }
    } catch {
      setActionError('Verbindungsfehler. Bitte versuchen Sie es erneut.')
    } finally {
      setActionLoading(false)
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

      {/* Action Bar */}
      <div className="border-t border-white/5 bg-gray-900/90 backdrop-blur-lg px-6 py-4">
        {/* Success Message */}
        <AnimatePresence>
          {actionSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="flex items-center gap-2 text-emerald-400 text-sm mb-3 justify-center"
            >
              <CheckCircle className="w-4 h-4" />
              <span>{actionSuccess}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Error Message */}
        <AnimatePresence>
          {actionError && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="flex items-center gap-2 text-red-400 text-sm mb-3 justify-center"
            >
              <AlertCircle className="w-4 h-4" />
              <span>{actionError}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Accept Confirmation Dialog */}
        <AnimatePresence>
          {showAcceptConfirm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-4 overflow-hidden"
            >
              <div className="bg-emerald-950/50 border border-emerald-800/50 rounded-xl p-4 max-w-lg mx-auto">
                <p className="text-sm text-emerald-200 mb-3 text-center">
                  Möchten Sie dieses Angebot verbindlich beauftragen?
                </p>
                <div className="flex gap-3 justify-center">
                  <button
                    onClick={handleAccept}
                    disabled={actionLoading}
                    className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium rounded-lg transition-all disabled:opacity-50 flex items-center gap-2"
                  >
                    {actionLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <CheckCircle className="w-4 h-4" />}
                    Ja, verbindlich beauftragen
                  </button>
                  <button
                    onClick={() => { setShowAcceptConfirm(false); setActionError('') }}
                    className="px-5 py-2 bg-white/5 hover:bg-white/10 text-gray-300 text-sm rounded-lg transition-all"
                  >
                    Abbrechen
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Revision Form */}
        <AnimatePresence>
          {showRevisionForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-4 overflow-hidden"
            >
              <div className="bg-amber-950/30 border border-amber-800/40 rounded-xl p-4 max-w-lg mx-auto">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm text-amber-200 font-medium">Änderungswünsche mitteilen</p>
                  <button
                    onClick={() => { setShowRevisionForm(false); setActionError('') }}
                    className="text-gray-500 hover:text-gray-300 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <textarea
                  value={revisionMessage}
                  onChange={(e) => { setRevisionMessage(e.target.value); setActionError('') }}
                  placeholder="Beschreiben Sie Ihre gewünschten Änderungen..."
                  rows={4}
                  maxLength={5000}
                  className="w-full px-3 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30 resize-none"
                />
                <div className="flex items-center justify-between mt-3">
                  <span className="text-xs text-gray-600">{revisionMessage.length}/5000</span>
                  <button
                    onClick={handleRevision}
                    disabled={actionLoading || !revisionMessage.trim()}
                    className="px-5 py-2 bg-amber-600 hover:bg-amber-500 text-white text-sm font-medium rounded-lg transition-all disabled:opacity-50 flex items-center gap-2"
                  >
                    {actionLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                    Absenden
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action Buttons */}
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => { setShowAcceptConfirm(true); setShowRevisionForm(false); setActionError(''); setActionSuccess('') }}
            disabled={accepted || actionLoading}
            className={`px-6 py-2.5 text-sm font-medium rounded-lg transition-all flex items-center gap-2 ${
              accepted
                ? 'bg-emerald-900/50 text-emerald-400 cursor-default'
                : 'bg-emerald-600 hover:bg-emerald-500 text-white'
            } disabled:opacity-70`}
          >
            <CheckCircle className="w-4 h-4" />
            {accepted ? 'Beauftragung gesendet ✓' : 'Angebot beauftragen'}
          </button>

          <button
            onClick={() => { setShowRevisionForm(true); setShowAcceptConfirm(false); setActionError(''); setActionSuccess('') }}
            disabled={revisionSent || actionLoading}
            className={`px-6 py-2.5 text-sm font-medium rounded-lg transition-all flex items-center gap-2 ${
              revisionSent
                ? 'bg-amber-900/50 text-amber-400 cursor-default'
                : 'bg-amber-600 hover:bg-amber-500 text-white'
            } disabled:opacity-70`}
          >
            <PenLine className="w-4 h-4" />
            {revisionSent ? 'Änderungswünsche gesendet ✓' : 'Änderungswünsche'}
          </button>
        </div>
      </div>
    </div>
  )
}
