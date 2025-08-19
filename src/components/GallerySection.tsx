// src/components/GallerySection.tsx
'use client'

import React from 'react';
import Image from 'next/image';
import { miniGalleryItems } from '@/lib/data';
import { StaggeredContainer, StaggeredItem, FadeIn, ScaleIn } from './animations/Animate';

const GallerySection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-5xl font-bold text-gray-900 mb-4 mx-8 sm:mx-0">
            See the Difference We Create
          </h2>
          <p className="text-sm sm:text-lg text-gray-600 max-w-3xl mx-auto">
            From lifeless lawns to stunning landscapes, explore how we turn ordinary yards into extraordinary outdoor spaces.
          </p>
        </div>

        {/* Gallery grid */}
        <StaggeredContainer staggerChildren={0.2}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {miniGalleryItems.map((item) => (
            <StaggeredItem key={item.id}>  
            <FadeIn duration={1}>
            <div key={item.id} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-w-4 aspect-h-3">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                <p className="text-gray-200">{item.description}</p>
                {item.category === 'before-after' && (
                  <span className="absolute top-4 left-4 bg-yellow-500 text-white px-2 py-1 rounded text-xs font-bold">
                    Before/After
                  </span>
                )}
              </div>
            </div>
            </FadeIn>
            </StaggeredItem>
          ))}
        </div>
        </StaggeredContainer>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="/gallery"
            className="inline-block bg-[var(--primary-color)] hover:bg-green-700 text-white px-4 sm:px-6 py-2 rounded-xl text-sm sm:text-lg font-bold hover:scale-105 transition-all duration-300"
          >
            Start My Landscape Makeover
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;