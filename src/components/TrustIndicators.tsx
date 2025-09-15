// src/components/TrustIndicators.tsx
'use client';

import React from 'react';
import { StaggeredContainer, StaggeredItem, SlideInBottom } from './animations/Animate';
import { trustIndicators } from '@/lib/data';

// ======================
// 🔹 Type Definitions
// ======================

interface TrustIndicator {
  id: string;
  title: string;
  description: string;
}

// ======================
// ✅ Component: TrustIndicators
// ======================

const TrustIndicators = (): React.ReactNode => {
  // Define icon map with 8 unique, visually distinct, semantically perfect icons
  const iconMap: Record<string, React.ReactNode> = {
    'Fast, Reliable Service': (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        key="fast-reliable"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    '18+ Years of Experience': (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        key="years-experience"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    'Licensed & Insured': (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        key="licensed-insured"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    'Eco-Friendly Products': (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        key="eco-friendly"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.5 15.75l7.5-7.5 7.5 7.5"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18.75l1.5-1.5"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M18 18.75l-1.5-1.5"
        />
      </svg>
    ),
    '100% Customer Satisfaction Guaranteed': (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        key="satisfaction"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
    ),
    'Offer All-Season Services': (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        key="all-season"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    'Affordable Pricing Plans': (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        key="affordable-price"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
        />
      </svg>
    ),
    'Local Expertise': (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        key="local-expertise"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8a4 4 0 100 8 4 4 0 000-8z"
        />
      </svg>
    ),
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xl sm:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Why Business and Homeowners Trust Us
          </h2>
          <p className="text-sm text-gray-600 max-w-4xl mx-auto">
            With over 18 years of experience, we’re a trusted lawn care contractor offering consistent, reliable service across the United States, backed by all-season craftsmanship you can count on.
          </p>
        </div>

        {/* Trust Indicators Grid */}
        <StaggeredContainer staggerChildren={0.4}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustIndicators.map((indicator: TrustIndicator, index: number) => (
              <StaggeredItem key={indicator.id}>
                <SlideInBottom duration={1} delay={index * 0.2}>
                  <div
                    className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 p-10 rounded-lg bg-white shadow-sm hover:shadow-md"
                  >
                    {/* Icon */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors duration-300">
                      <div className="text-green-600">
                        {iconMap[indicator.title] || (
                          <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            key="fallback"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                            />
                          </svg>
                        )}
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

        {/* Optional: Stats Section (commented out) */}
        {/* 
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
        </div>
        */}
      </div>
    </section>
  );
};

export default TrustIndicators;