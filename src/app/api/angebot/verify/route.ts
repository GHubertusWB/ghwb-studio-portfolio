import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { angebote } from '@/data/angebote.config'

// Rate Limiting
const attempts = new Map<string, { count: number; resetAt: number }>()
const MAX_ATTEMPTS = 5
const WINDOW_MS = 15 * 60 * 1000 // 15 Minuten

function getClientIp(request: NextRequest): string {
  return request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
}

function checkRateLimit(ip: string, angebotId: string): boolean {
  const key = `${ip}:${angebotId}`
  const now = Date.now()
  const entry = attempts.get(key)

  if (!entry || now > entry.resetAt) {
    attempts.set(key, { count: 1, resetAt: now + WINDOW_MS })
    return true
  }

  if (entry.count >= MAX_ATTEMPTS) {
    return false
  }

  entry.count++
  return true
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { id, password } = body

    if (!id || !password || typeof id !== 'string' || typeof password !== 'string') {
      return NextResponse.json({ error: 'Ungültige Anfrage' }, { status: 400 })
    }

    if (password.length > 100) {
      return NextResponse.json({ error: 'Ungültige Anfrage' }, { status: 400 })
    }

    // Rate Limiting
    const ip = getClientIp(request)
    if (!checkRateLimit(ip, id)) {
      return NextResponse.json(
        { error: 'Zu viele Versuche. Bitte versuchen Sie es in 15 Minuten erneut.' },
        { status: 429 }
      )
    }

    // Angebot suchen
    const angebot = angebote.find(a => a.id === id)
    if (!angebot) {
      // Gleiche Antwort wie bei falschem Passwort (kein Information Leak)
      return NextResponse.json({ error: 'Falsches Passwort' }, { status: 401 })
    }

    // Ablaufdatum prüfen
    if (new Date() > new Date(angebot.expiresAt)) {
      return NextResponse.json(
        { error: 'Dieses Angebot ist nicht mehr verfügbar.' },
        { status: 410 }
      )
    }

    // Passwort prüfen
    const valid = await bcrypt.compare(password, angebot.passwordHash)
    if (!valid) {
      return NextResponse.json({ error: 'Falsches Passwort' }, { status: 401 })
    }

    // Erfolg – Embed-URL zurückgeben
    return NextResponse.json({
      embedUrl: angebot.embedUrl,
      kunde: angebot.kunde,
      expiresAt: angebot.expiresAt,
    })
  } catch {
    return NextResponse.json({ error: 'Ein Fehler ist aufgetreten.' }, { status: 500 })
  }
}
