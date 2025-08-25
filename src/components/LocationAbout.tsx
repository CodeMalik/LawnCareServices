'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {FadeIn} from '@/components/animations/Animate';

const LocationAbout: React.FC = () => {
  return (
    <FadeIn>
    <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col lg:flex-row items-center gap-8 xl:gap-16">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-xl h-72 sm:h-80 md:h-96 lg:h-[500px]">
              <Image
                src="https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992685/Mein-Background-image-2_cpfbiz.jpg"
                alt="Professional lawn care team"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        
        
          {/* Content Section */}
          <div className="w-full lg:w-1/2 space-y-8">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 text-center lg:text-left">
              Why Choose Our Lawn Care Services?
            </h2>
            
            <div className="space-y-2 sm:space-y-6">
              {[
                { icon: '🌱', text: '20+ years of professional lawn care expertise' },
                { icon: '💧', text: 'Specialized sprinkler installation and repair' },
                { icon: '🌳', text: 'Eco-friendly landscaping solutions' },
                { icon: '🏆', text: 'Award-winning customer service' },
                { icon: '🔧', text: 'Fully licensed and insured professionals' }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <span className="text-sm sm:text-2xl flex-shrink-0">{item.icon}</span>
                  <p className="text-gray-700 text-sm sm:text-lg leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
            
            <div className="pt-2 sm:pt-4 text-center sm:text-left">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 border border-transparent text-base font-medium rounded-xl text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Your Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    </FadeIn>
  );
};

export default LocationAbout;