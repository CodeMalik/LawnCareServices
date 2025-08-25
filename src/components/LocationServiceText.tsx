'use client';

import React from 'react';
import Image from 'next/image';
import {FadeIn} from '@/components/animations/Animate';

interface ServiceText {
  title: string;
  description: string;
  image: string;
}

const LocationServiceText: React.FC<{ serviceText: ServiceText }> = ({ serviceText }) => {
  const handleScrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('allServices');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
    <FadeIn>
    <section className="py-12 md:py-16 lg:py-20 px-10 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 xl:gap-16">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-6 order-2 sm:order-1 px-0 lg:px-10 2xl:px-0">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 leading-tight text-center sm:text-left">
              {serviceText.title}
            </h2>
            
            <div className="prose prose-lg text-gray-600 max-w-none">
              <p className="leading-relaxed text-sm text-center sm:text-left">
                {serviceText.description}
              </p>
            </div>
            
            <div className="pt-2 text-center sm:text-left">
              <button
                onClick={handleScrollToServices}
                className="inline-flex items-center px-4 py-2 sm:px-8 sm:py-3 text-base font-medium rounded-xl text-white bg-green-600 hover:bg-green-700 focus:outline-none transition-colors transform hover:scale-105 hover:shadow-lg cursor-pointer duration-300"
              >
                Explore Our Services
                <svg 
                  className="ml-2 -mr-1 w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                  />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Image */}
          <div className="w-full lg:w-1/2 order-1 sm:order-2">
            <div className="relative rounded-xl overflow-hidden shadow-2xl h-72 sm:h-80 md:h-96 lg:h-[500px]">
              <Image 
                src={serviceText.image} 
                alt={serviceText.title} 
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    </FadeIn>
    </>
  );
};

export default LocationServiceText;