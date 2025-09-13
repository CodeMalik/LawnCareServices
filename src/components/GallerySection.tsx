// src/components/GallerySection.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { miniGalleryItems } from '@/lib/data';
import {
    StaggeredContainer,
    StaggeredItem,
    FadeIn,
    ScaleIn,
} from './animations/Animate';

// ✅ Define MiniGalleryItem interface locally (since it's not in '@/lib/data')
interface MiniGalleryItem {
    id: string;
    title: string;
    description: string;
    image: string;
    category?: 'before-after' | 'services' | 'results'; // Optional
    featured?: boolean; // Optional
}

/**
 * GallerySection component displaying curated mini-gallery items.
 * Uses miniGalleryItems from '@/lib/data' — typed locally for safety.
 */
const GallerySection: React.FC = () => {
    return (
        <section className="py-20 bg-gray-50" aria-labelledby="gallery-section-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-16">
                    <h2
                        id="gallery-section-heading"
                        className="text-2xl sm:text-5xl font-bold text-gray-900 mb-4 mx-8 sm:mx-0"
                    >
                        Experience the Transformation We Bring to Every Lawn

                    </h2>
                    <p className="text-sm sm:text-lg text-gray-600 max-w-3xl mx-auto">
                        From dull, lifeless grass to vibrant, healthy landscapes, witness how we turn ordinary yards into extraordinary outdoor spaces. Let us enhance your curb appeal with expert care and precision.

                    </p>
                </div>

                {/* Gallery grid */}
                <StaggeredContainer staggerChildren={0.2}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {miniGalleryItems.map((item: MiniGalleryItem) => (
                            <StaggeredItem key={item.id}>
                                <FadeIn duration={1}>
                                    <div
                                        className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
                                        role="figure"
                                        aria-label={`${item.title}: ${item.description}`}
                                    >
                                        <div className="relative w-full h-64">
                                            <Image
                                                src={item.image.trim()} // ✅ Remove trailing spaces
                                                alt={item.title}
                                                fill
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                quality={85}
                                            />
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                                            <h3 className="text-xl font-bold text-white mb-1">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-200 text-sm">{item.description}</p>
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
                        className="inline-block bg-[var(--primary-color)] hover:bg-green-700 text-white px-4 sm:px-6 py-2 rounded-xl text-sm sm:text-lg font-bold hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                        aria-label="Start My Landscape Makeover"
                    >
                        Start My Landscape Makeover
                    </a>
                </div>
            </div>
        </section>
    );
};

export default GallerySection;