import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const dir = path.join(process.cwd(), 'public', 'gallery', 'photography')
  let files: string[] = []
  try {
    files = fs.readdirSync(dir)
      .filter(file => /\.(jpe?g|png|webp|gif)$/i.test(file))
      .map(file => `/gallery/photography/${file}`)
  } catch (e) {
    // Ordner existiert evtl. noch nicht oder ist leer
  }
  res.status(200).json({ images: files })
}
