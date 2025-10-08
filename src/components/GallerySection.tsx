// src/components/GallerySection.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { fetchGalleryData, MiniGalleryItem } from '@/lib/gallerydata';
import {
    StaggeredContainer,
    StaggeredItem,
    FadeIn,
    ScaleIn,
} from './animations/Animate';

/**
 * GallerySection component displaying curated mini-gallery items.
 * Fetches data directly from Firebase Firestore.
 */
const GallerySection: React.FC = () => {
    const [galleryData, setGalleryData] = useState<MiniGalleryItem[]>([]);
    const [heading1, setHeading1] = useState<string>('');
    const [heading2, setHeading2] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadGalleryData = async () => {
            try {
                setLoading(true);
                const data = await fetchGalleryData();
                
                setGalleryData(data.gallarysection || []);
                setHeading1(data.h21 || 'Experience the Transformation We Bring to Every Lawn');
                setHeading2(data.h22 || 'From dull, lifeless grass to vibrant, healthy landscapes, witness how we turn ordinary yards into extraordinary outdoor spaces. Let us enhance your curb appeal with expert care and precision.');
                
            } catch (err) {
                console.error('Error loading gallery data:', err);
                setError('Failed to load gallery data');
                setGalleryData([]);
            } finally {
                setLoading(false);
            }
        };

        loadGalleryData();
    }, []);

    // Loading state - modified for gallery layout
    if (loading) {
        return (
            <section className="py-20 bg-gray-50" aria-labelledby="gallery-section-heading">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section header loader */}
                    <div className="text-center mb-16">
                        <div className="animate-pulse">
                            <div className="h-12 bg-gray-300 rounded w-3/4 mx-auto mb-6"></div>
                            <div className="h-6 bg-gray-300 rounded w-1/2 mx-auto mb-4"></div>
                            <div className="h-4 bg-gray-300 rounded w-2/3 mx-auto"></div>
                        </div>
                    </div>

                    {/* Gallery grid loader */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[...Array(6)].map((_, index) => (
                            <div key={index} className="animate-pulse">
                                <div className="bg-gray-300 rounded-xl h-64 mb-4"></div>
                                <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                            </div>
                        ))}
                    </div>

                    {/* CTA loader */}
                    <div className="text-center mt-16">
                        <div className="h-12 bg-gray-300 rounded w-48 mx-auto"></div>
                    </div>
                </div>
            </section>
        );
    }

    // Error state
    if (error && galleryData.length === 0) {
        return (
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-red-600">{error}</p>
                </div>
            </section>
        );
    }

    return (
        <section className="py-20 bg-gray-50" aria-labelledby="gallery-section-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-16">
                    <h2
                        id="gallery-section-heading"
                        className="text-2xl sm:text-5xl font-bold text-gray-900 mb-4 mx-8 sm:mx-0"
                    >
                        {heading1}
                    </h2>
                    <p className="text-sm sm:text-lg text-gray-600 max-w-3xl mx-auto">
                        {heading2}
                    </p>
                </div>

                {/* Gallery grid */}
                {galleryData.length > 0 ? (
                    <StaggeredContainer staggerChildren={0.2}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {galleryData.map((item: MiniGalleryItem) => (
                                <StaggeredItem key={item.id}>
                                    <FadeIn duration={1}>
                                        <div
                                            className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
                                            role="figure"
                                            aria-label={`${item.title}: ${item.description}`}
                                        >
                                            <div className="relative w-full h-64">
                                                <Image
                                                    src={item.image.trim()}
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
                                            </div>
                                        </div>
                                    </FadeIn>
                                </StaggeredItem>
                            ))}
                        </div>
                    </StaggeredContainer>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-gray-500">No gallery items found.</p>
                    </div>
                )}

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