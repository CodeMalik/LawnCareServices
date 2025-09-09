'use client'; // Optional — if ScaleIn uses client-side animations

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ScaleIn } from './animations/Animate';

// ✅ LastSection Component — fully typed
const LastSection: React.FC = () => {
    return (
        <section
            className="relative py-20 md:py-28 overflow-hidden 2xl:flex 2xl:justify-center 2xl:items-center"
            aria-labelledby="last-section-heading"
        >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 -z-10">
                <div className="relative w-full h-full">
                    <Image
                        src="https://res.cloudinary.com/dfnjpfucl/image/upload/v1755519848/lastSection_eyynym_8_11zon_ictkj0.jpg"
                        alt="Beautiful landscape with lush green lawn and professional landscaping"
                        fill
                        className="object-cover"
                        priority={false} // ✅ Set to true only if critical above-the-fold
                        sizes="100vw"
                        quality={85}
                    />
                    <div className="absolute inset-0 bg-black/50" aria-hidden="true"></div>
                </div>
            </div>

            {/* Content */}
            <ScaleIn>
                <div className="flex justify-center items-center px-10 sm:px-20 h-full max-w-2xl mx-auto">
                    <div className="text-center">
                        <h2
                            id="last-section-heading"
                            className="text-center text-3xl md:text-4xl font-bold text-white mb-6 leading-12"
                        >
                            From Lawn to Lush, Let’s Begin!
                        </h2>
                        {/* Decorative underline */}
                        <svg
                            className="relative bottom-2 left-0 w-20 h-2 text-green-600 mx-auto"
                            viewBox="0 0 500 20"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <path d="M0,8 Q150,0 300,8 L300,12 L0,12 Z" />
                        </svg>
                        <p className="text-sm text-white text-center sm:text-md mb-8 max-w-3xl mx-auto">
                            Whether it’s lush lawn care, expert sprinkler repair, or full-scale
                            landscaping, Lawn Care Services is here to help your yard thrive.
                        </p>
                        <div className="w-full flex justify-center">
                            <Link
                                href="/contact"
                                className="text-sm sm:text-lg bg-[var(--primary-color)] hover:bg-green-700 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center w-fit focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-black"
                                aria-label="Call now to get started with Lawn Care Services"
                            >
                                Call Now To Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            </ScaleIn>
        </section>
    );
};

export default LastSection;