// src/components/Gallery.tsx
import Image from 'next/image'
import { galleryItems } from '@/lib/data'

export default function Gallery() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((image, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
              <div className="relative h-64">
                <Image 
                  src={image.image} 
                  alt={`Before ${image.title}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-green-800 opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Before</span>
                </div>
              </div>
              <div className="relative h-64">
                <Image 
                  src={image.image} 
                  alt={`After ${image.title}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-green-800 opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">After</span>
                </div>
              </div>
              <h3 className="text-center py-4 font-medium">{image.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}