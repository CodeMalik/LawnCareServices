'use client'; // Optional — if ScaleIn uses client-side animations

import React from 'react';
import Image from 'next/image'; // ✅ Use Next.js Image for optimization
import { ScaleIn } from './animations/Animate';

// ✅ Define props interface
interface HeroProps {
    Herotitle: string;
    Herodescription: string;
    HerobgImage: string;
}

// ✅ Hero Component — fully typed
const Hero: React.FC<HeroProps> = ({ Herotitle, Herodescription, HerobgImage }) => {
    return (
        <section
            className="relative bg-gray-900 min-h-[70vh] sm:min-h-[110vh] 2xl:min-h-[70vh] pt-24 md:pt-28"
            aria-labelledby="hero-title"
        >
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src={HerobgImage.trim()} // ✅ Clean trailing spaces if any
                        alt="Professional Landscaping Services"
                        fill
                        className="object-cover object-center"
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center',
                        }}
                        priority={false} // ✅ Set to true if above the fold and critical
                        sizes="100vw"
                        quality={85}
                    />
                </div>
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/40"></div>
                {/* Gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
            </div>

            {/* Content Container */}
            <div className="absolute z-10 w-full h-full flex items-center justify-center">
                <ScaleIn viewportMargin="0px">
                    <div className="w-full px-6 pb-16 sm:pb-45 2xl:px-32 text-center">
                        {/* Main Heading */}
                        <h1
                            id="hero-title"
                            className="text-lg sm:text-2xl md:text-3xl 2xl:text-5xl font-bold text-white leading-tight mb-6"
                        >
                            {Herotitle}
                        </h1>
                        {/* Subtitle */}
                        <p className="text-xs sm:text-md md:text-lg 2xl:text-xl text-white leading-relaxed w-full text-center px-6 sm:px-20">
                            {Herodescription}
                        </p>
                    </div>
                </ScaleIn>
            </div>
        </section>
    );
};

export default Hero;