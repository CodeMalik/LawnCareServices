// src/components/Gallery.tsx

'use client'; // Optional — only if you later add client-side interactivity

import React from 'react';
import Image from 'next/image';
import { galleryItems } from '@/lib/data';

// ✅ Define GalleryItem interface locally (since it's not in '@/lib/data')
interface GalleryItem {
    id: string;
    title: string;
    description: string;
    image: string;
    category: 'before-after' | 'landscape' | 'irrigation' | 'lawn-care';
}

/**
 * Gallery component displaying landscaping project showcases.
 * Uses galleryItems from '@/lib/data' — typed locally for safety.
 */
const Gallery: React.FC = () => {
    return (
        <section className="py-16 bg-gray-50" aria-labelledby="gallery-heading">
            <div className="container mx-auto px-4">
                <h2
                    id="gallery-heading"
                    className="text-3xl font-bold text-center mb-12 text-gray-900"
                >
                    Our Work
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {galleryItems.map((item: GalleryItem) => (
                        <div
                            key={item.id} // ✅ Use unique ID — safe since your data has `id`
                            className="relative group overflow-hidden rounded-lg shadow-lg bg-white transition-all duration-300 hover:shadow-xl"
                            role="figure"
                            aria-label={`${item.title}: ${item.description}`}
                        >
                            {/* Image Container */}
                            <div className="relative h-64">
                                <Image
                                    src={item.image.trim()} // ✅ Clean trailing spaces from URLs
                                    alt={`${item.title} — ${item.description}`}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    priority={false}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-4">
                                    <span className="text-white font-semibold text-lg mb-1 capitalize">
                                        {item.category.replace('-', ' ')}
                                    </span>
                                    <span className="text-white text-sm opacity-90">
                                        {item.title}
                                    </span>
                                </div>
                            </div>

                            {/* Title & Description */}
                            <div className="p-4">
                                <h3 className="text-center font-semibold text-gray-800 mb-1">
                                    {item.title}
                                </h3>
                                <p className="text-center text-sm text-gray-600 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;