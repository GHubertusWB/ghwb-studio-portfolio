'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Lock, Eye, EyeOff, AlertCircle, Loader2, CheckCircle, Send, PenLine, X } from 'lucide-react'
import { SpecialButton } from '@/components/ui/SpecialButton'

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

  // Signatur & AGB
  const [signaturName, setSignaturName] = useState('')
  const [agbAccepted, setAgbAccepted] = useState(false)

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
    if (!signaturName.trim()) {
      setActionError('Bitte geben Sie Ihren vollständigen Namen ein.')
      return
    }
    if (!agbAccepted) {
      setActionError('Bitte akzeptieren Sie die AGB.')
      return
    }
    setActionLoading(true)
    setActionError('')
    try {
      const res = await fetch('/api/angebot/respond', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ angebotId: id, action: 'accept', signaturName: signaturName.trim() }),
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
          {actionError && !showAcceptConfirm && !showRevisionForm && (
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

        {/* Action Buttons */}
        <div className="flex gap-3 justify-center">
          <SpecialButton
            variant="primary"
            size="sm"
            onClick={() => { setShowAcceptConfirm(true); setShowRevisionForm(false); setActionError(''); setActionSuccess(''); setSignaturName(''); setAgbAccepted(false) }}
            disabled={accepted || actionLoading}
          >
            <CheckCircle className="w-4 h-4 mr-2" />
            {accepted ? 'Beauftragung gesendet ✓' : 'Angebot beauftragen'}
          </SpecialButton>

          <SpecialButton
            variant="secondary"
            size="sm"
            onClick={() => { setShowRevisionForm(true); setShowAcceptConfirm(false); setActionError(''); setActionSuccess('') }}
            disabled={revisionSent || actionLoading}
          >
            <PenLine className="w-4 h-4 mr-2" />
            {revisionSent ? 'Änderungswünsche gesendet ✓' : 'Änderungswünsche'}
          </SpecialButton>
        </div>
      </div>

      {/* Accept Modal */}
      <AnimatePresence>
        {showAcceptConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center px-4"
            onClick={() => { setShowAcceptConfirm(false); setActionError('') }}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md rounded-2xl bg-gray-900/95 border border-gray-700/50 shadow-2xl shadow-black/50 backdrop-blur-xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Angebot beauftragen</h3>
                <button
                  onClick={() => { setShowAcceptConfirm(false); setActionError('') }}
                  className="text-gray-500 hover:text-gray-300 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="text-sm text-gray-400 mb-4">
                Bitte geben Sie Ihren vollständigen Namen als digitale Signatur ein und bestätigen Sie die AGB.
              </p>

              {/* Signatur-Feld */}
              <div className="mb-4">
                <label className="block text-xs text-gray-500 mb-1.5">Vollständiger Name (digitale Signatur)</label>
                <input
                  type="text"
                  value={signaturName}
                  onChange={(e) => { setSignaturName(e.target.value); setActionError('') }}
                  placeholder="Vor- und Nachname"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all"
                  autoComplete="name"
                />
              </div>

              {/* AGB Checkbox */}
              <label className="flex items-start gap-3 mb-6 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={agbAccepted}
                  onChange={(e) => { setAgbAccepted(e.target.checked); setActionError('') }}
                  className="mt-0.5 w-4 h-4 rounded border-gray-600 bg-white/5 text-amber-500 focus:ring-amber-500/50 focus:ring-offset-0 cursor-pointer"
                />
                <span className="text-xs text-gray-400 leading-relaxed">
                  Ich beauftrage hiermit verbindlich gemäß den Konditionen des Angebots und akzeptiere die{' '}
                  <a href="/agb" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">
                    Allgemeinen Geschäftsbedingungen (AGB)
                  </a>.
                </span>
              </label>

              <AnimatePresence>
                {actionError && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex items-center gap-2 text-red-400 text-sm mb-4"
                  >
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{actionError}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex gap-3 justify-end">
                <SpecialButton
                  variant="secondary"
                  size="xs"
                  onClick={() => { setShowAcceptConfirm(false); setActionError('') }}
                >
                  Abbrechen
                </SpecialButton>
                <SpecialButton
                  variant="primary"
                  size="xs"
                  onClick={handleAccept}
                  disabled={actionLoading || !signaturName.trim() || !agbAccepted}
                >
                  {actionLoading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <CheckCircle className="w-4 h-4 mr-2" />}
                  Verbindlich beauftragen
                </SpecialButton>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Revision Modal */}
      <AnimatePresence>
        {showRevisionForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center px-4"
            onClick={() => { setShowRevisionForm(false); setActionError('') }}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md rounded-2xl bg-gray-900/95 border border-gray-700/50 shadow-2xl shadow-black/50 backdrop-blur-xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Änderungswünsche</h3>
                <button
                  onClick={() => { setShowRevisionForm(false); setActionError('') }}
                  className="text-gray-500 hover:text-gray-300 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="text-sm text-gray-400 mb-4">
                Beschreiben Sie Ihre gewünschten Änderungen – wir passen das Angebot entsprechend an.
              </p>

              <textarea
                value={revisionMessage}
                onChange={(e) => { setRevisionMessage(e.target.value); setActionError('') }}
                placeholder="Ihre Änderungswünsche..."
                rows={5}
                maxLength={5000}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent resize-none mb-2"
              />
              <span className="text-xs text-gray-600 block mb-4">{revisionMessage.length}/5000</span>

              <AnimatePresence>
                {actionError && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex items-center gap-2 text-red-400 text-sm mb-4"
                  >
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{actionError}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex gap-3 justify-end">
                <SpecialButton
                  variant="secondary"
                  size="xs"
                  onClick={() => { setShowRevisionForm(false); setActionError('') }}
                >
                  Abbrechen
                </SpecialButton>
                <SpecialButton
                  variant="primary"
                  size="xs"
                  onClick={handleRevision}
                  disabled={actionLoading || !revisionMessage.trim()}
                >
                  {actionLoading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Send className="w-4 h-4 mr-2" />}
                  Absenden
                </SpecialButton>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
