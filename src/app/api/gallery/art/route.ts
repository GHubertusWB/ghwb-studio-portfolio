import { NextResponse } from 'next/server'
import { artImages } from '@/data/gallery'

export async function GET() {
  try {
    // Simuliere eine kleine Verzögerung für realistisches Loading
    await new Promise(resolve => setTimeout(resolve, 100))
    
    return NextResponse.json({
      success: true,
      images: artImages.slice(0, 6), // Erste 6 Bilder für Preloading
      total: artImages.length
    })
  } catch (error) {
    console.error('Error loading art gallery:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to load art gallery' },
      { status: 500 }
    )
  }
}
