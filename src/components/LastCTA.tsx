'use client'; // Optional — only if ScaleIn uses client-side animations

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ScaleIn } from './animations/Animate';

// ✅ Define props interface
export interface LastCTAProps {
    bgImage: string;
    title: string;
    description: string;
    ctaText: string;
    ctaLink?: string; // Optional prop for the CTA link
}

// ✅ LastCTA Component — fully typed
const LastCTA: React.FC<LastCTAProps> = ({
    bgImage,
    title,
    description,
    ctaText,
    ctaLink = '/contact', // Default to contact page if not provided
}) => {
    return (
        <section
            className="relative py-20 md:py-28 overflow-hidden"
            aria-labelledby="last-cta-title"
        >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 -z-10">
                <div className="relative w-full h-full">
                    <Image
                        src={bgImage.trim()} // ✅ Clean trailing spaces if any
                        alt={title} // Use title for accessibility
                        fill
                        className="object-cover"
                        priority={false} // ✅ Set true only if critical above-the-fold
                        sizes="100vw"
                        quality={85}
                    />
                    <div className="absolute inset-0 bg-black/60"></div>{' '}
                    {/* Increased opacity for better text contrast */}
                </div>
            </div>

            {/* Content */}
            <ScaleIn>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2
                            id="last-cta-title"
                            className="text-3xl md:text-4xl font-bold text-white mb-6"
                        >
                            {title}
                        </h2>
                        <div className="flex justify-center mb-8" role="presentation">
                            <div className="w-20 h-1 bg-green-600" aria-hidden="true"></div>
                        </div>
                        <p className="text-white text-lg mb-8">{description}</p>
                        <Link
                            href={ctaLink}
                            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-black"
                            aria-label={`${ctaText} - ${description}`}
                        >
                            {ctaText}
                        </Link>
                    </div>
                </div>
            </ScaleIn>
        </section>
    );
};

export default LastCTA;