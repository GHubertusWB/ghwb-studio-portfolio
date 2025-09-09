import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(req: NextRequest) {
  const dir = path.join(process.cwd(), 'public', 'gallery', 'art');
  let files: string[] = [];
  try {
    files = fs.readdirSync(dir)
      .filter(file => /\.(jpe?g|png|webp|gif)$/i.test(file))
      .map(file => `/gallery/art/${file}`);
  } catch (e) {
    // Ordner existiert evtl. noch nicht oder ist leer
  }
  return NextResponse.json({ images: files });
}
