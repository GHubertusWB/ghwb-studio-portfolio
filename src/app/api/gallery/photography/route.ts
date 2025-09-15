import { NextResponse } from 'next/server'
import { photographyImages } from '@/data/gallery'

export async function GET() {
  try {
    // Simuliere eine kleine Verzögerung für realistisches Loading
    await new Promise(resolve => setTimeout(resolve, 100))
    
    return NextResponse.json({
      success: true,
      images: photographyImages.slice(0, 6), // Erste 6 Bilder für Preloading
      total: photographyImages.length
    })
  } catch (error) {
    console.error('Error loading photography gallery:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to load photography gallery' },
      { status: 500 }
    )
  }
}
