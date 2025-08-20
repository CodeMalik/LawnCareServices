import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ScaleIn } from './animations/Animate';

interface LastCTAProps {
  bgImage: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink?: string; // Optional prop for the CTA link
}

const LastCTA: React.FC<LastCTAProps> = ({ 
  bgImage, 
  title, 
  description, 
  ctaText,
  ctaLink = '/contact' // Default to contact page if not provided
}) => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10">
        <div className="relative w-full h-full">
          <Image
            src={bgImage}
            alt={title}  // Use the title prop for better accessibility
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div> {/* Increased opacity for better text contrast */}
        </div>
      </div>

      {/* Content */}
      <ScaleIn>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {title}
            </h2>
            <div className="flex justify-center mb-8">
              <div className="w-20 h-1 bg-green-600"></div>
            </div>
            <p className="text-white text-lg mb-8">
              {description}
            </p>
            <Link
              href={ctaLink}
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
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