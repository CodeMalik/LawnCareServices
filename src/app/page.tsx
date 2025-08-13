// src/app/page.tsx
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import TrustIndicators from '@/components/TrustIndicators'
import Testimonials from '@/components/Testimonials'
import ServiceAreas from '@/components/ServiceAreas'
import GallerySection from '@/components/GallerySection'
import FAQ from '@/components/FAQ'
import LastSection from '@/components/LastSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <TrustIndicators />
      <Testimonials />
      <ServiceAreas />
      <GallerySection />
      {/* <Gallery /> */}
      <FAQ />
      <LastSection />
    </main>
  )
}