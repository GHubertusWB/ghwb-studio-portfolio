'use client'

import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Services from "@/components/Services";
import Divider from '@/components/ui/Divider';
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";

export default function HomeWithLoader() {
  return (
    <div className="relative min-h-screen">
      <div className="relative z-10">
        <Hero />
      </div>
      <div className="relative z-10">
        <Introduction />
      </div>
      <div className="relative z-10">
        <Divider />
      </div>
      <div className="relative z-10">
        <Services />
      </div>
      <div className="relative z-10">
        <Footer />
      </div>

      {/* Floating Contact Button System */}
      <FloatingContactButton />
    </div>
  )
}
