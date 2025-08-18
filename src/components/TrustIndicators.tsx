// src/components/TrustIndicators.tsx
import { StaggeredContainer, StaggeredItem, SlideInBottom } from './animations/Animate';
import React from 'react';
import { trustIndicators } from '@/lib/data';

const TrustIndicators: React.FC = () => {
  const iconMap = {
    'Fast, Reliable Service': (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    '25+ Years of Experience': (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    'Licensed & Insured': (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    'Eco-Friendly Products': (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-xl sm:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Why Homeowners Trust Us
          </h2>
          <p className="text-sm text-gray-600 max-w-4xl mx-auto">
            Serving Dallas for over 25 years with care, consistency, and craftsmanship you can count on.
          </p>
        </div>

        {/* Trust indicators grid */}
        <StaggeredContainer staggerChildren={0.4}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {trustIndicators.map((indicator, index) => (
            <StaggeredItem key={indicator.id}>
            <SlideInBottom duration={1} delay={index * 0.2}>
            <div 
              key={indicator.id}
              className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300 border-1 border-gray-100 p-10"
            >
              {/* Icon */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors duration-300">
                <div className="text-green-600">
                  {iconMap[indicator.title as keyof typeof iconMap]}
                </div>
              </div>

              {/* Content */}
              <h3 className="line-clamp-1 text-md sm:text-xl font-bold text-gray-900 mb-3">
                {indicator.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                {indicator.description}
              </p>
            </div>
            </SlideInBottom>
            </StaggeredItem>
          ))}
        </div>
        </StaggeredContainer>

        {/* Stats section
        <div className="mt-20 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 sm:p-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl sm:text-5xl font-bold text-green-600">25+</div>
              <div className="text-gray-700 font-medium">Years of Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl sm:text-5xl font-bold text-green-600">1000+</div>
              <div className="text-gray-700 font-medium">Happy Customers</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl sm:text-5xl font-bold text-green-600">100%</div>
              <div className="text-gray-700 font-medium">Satisfaction Guarantee</div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default TrustIndicators;