export interface Angebot {
  id: string
  kunde: string
  kundeEmail: string
  embedUrl: string
  /** bcrypt hash des Passworts */
  passwordHash: string
  /** ISO date string – nach diesem Datum ist das Angebot nicht mehr erreichbar */
  expiresAt: string
}

export const angebote: Angebot[] = [
  {
    id: 'e2ae6a3a-1445-44c2-9ae3-5ce14a29cb9b',
    kunde: 'Robin Ramm',
    kundeEmail: 'info@rr-amz-consulting.de',
    embedUrl: 'https://www.canva.com/design/DAHCgKuc-5o/SQWvzv5ZdnOSgL-tv9F4VA/view?embed',
    passwordHash: '$2b$12$jRBlApj5/DEZf.B4A0nUdut/HolZ4G.NsAEhxcdUV8rgB/SdvbFmW',
    expiresAt: '2026-03-27T23:59:59.000Z',
  },
]
