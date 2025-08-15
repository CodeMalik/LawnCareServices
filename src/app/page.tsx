// src/app/page.tsx
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import TrustIndicators from '@/components/TrustIndicators'
import Testimonials from '@/components/Testimonials'
import ServiceAreas from '@/components/ServiceAreas'
import GallerySection from '@/components/GallerySection'
import FAQ from '@/components/FAQ'
import LastSection from '@/components/LastSection'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lawn Care Services | Transform Your Outdoor Space',
  description: 'Expert landscaping services to create and maintain beautiful outdoor environments. Residential and commercial solutions tailored to your needs.',
  keywords: ['landscaping', 'garden design', 'lawn care', 'outdoor living', 'landscape maintenance'],
  openGraph: {
    title: 'Lawn Care Services | Transform Your Outdoor Space',
    description: 'Expert landscaping services to create and maintain beautiful outdoor environments. Residential and commercial solutions tailored to your needs.',
    type: 'website',
    locale: 'en_US',
  }
};
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