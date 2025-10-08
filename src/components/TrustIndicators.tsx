// src/components/TrustedIndicators.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { StaggeredContainer, StaggeredItem, SlideInBottom } from './animations/Animate';
import { fetchTrustedIndicators } from '@/lib/trustindicators'; // ✅ Fixed typo: was 'trustindicators'
import type { TrustIndicator } from '@/types';

// ✅ New interface for full section data
interface TrustedIndicatorsSection {
  title: string;
  subtitle: string;
  indicators: TrustIndicator[];
}

const TrustedIndicators = (): React.ReactNode => {
  const [sectionData, setSectionData] = useState<TrustedIndicatorsSection | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadIndicators = async () => {
      try {
        const data = await fetchTrustedIndicators();
        setSectionData(data);
      } catch (err: any) {
        setError(err.message || 'Unable to load trust indicators.');
      } finally {
        setLoading(false);
      }
    };

    loadIndicators();
  }, []);

  // Icon map keyed by title (must match exactly what's in Firebase)
  const iconMap: Record<string, React.ReactNode> = {
    'Fast, Reliable Service': (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    '18+ Years of Experience': (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    'Licensed & Insured': (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    'Eco-Friendly Products': (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18.75l1.5-1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 18.75l-1.5-1.5" />
      </svg>
    ),
    '100% Customer Satisfaction Guaranteed': (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
    'Offer All-Season Services': (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    'Affordable Pricing Plans': (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
      </svg>
    ),
    'Local Expertise': (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8a4 4 0 100 8 4 4 0 000-8z" />
      </svg>
    ),
  };

  // Loading state
  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Loader */}
          <div className="text-center mb-16">
            <div className="animate-pulse">
              <div className="h-12 bg-gray-300 rounded w-3/4 mx-auto mb-6"></div>
              <div className="h-6 bg-gray-300 rounded w-1/2 mx-auto"></div>
            </div>
          </div>

          {/* Indicators Grid Loader */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="text-center border border-gray-100 p-10 rounded-lg bg-white shadow-sm">
                  {/* Icon Loader */}
                  <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                  </div>
                  
                  {/* Title Loader */}
                  <div className="h-6 bg-gray-300 rounded w-4/5 mx-auto mb-4"></div>
                  
                  {/* Description Loader */}
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-300 rounded w-full"></div>
                    <div className="h-4 bg-gray-300 rounded w-5/6 mx-auto"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-red-600">{error}</p>
        </div>
      </section>
    );
  }

  if (!sectionData || sectionData.indicators.length === 0) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-500">No trust indicators configured.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* 🔥 NOW FETCHED FROM FIREBASE */}
          <h2 className="text-xl sm:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            {sectionData.title}
          </h2>
          <p className="text-sm text-gray-600 max-w-4xl mx-auto">
            {sectionData.subtitle}
          </p>
        </div>

        <StaggeredContainer staggerChildren={0.4}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sectionData.indicators.map((indicator, index) => (
              <StaggeredItem key={indicator.id}>
                <SlideInBottom duration={1} delay={index * 0.2}>
                  <div className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 p-10 rounded-lg bg-white shadow-sm hover:shadow-md">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors duration-300">
                      <div className="text-green-600">
                        {iconMap[indicator.title] || (
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        )}
                      </div>
                    </div>
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
      </div>
    </section>
  );
};

export default TrustedIndicators;