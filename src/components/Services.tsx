// components/service.tsx (or wherever your Services component lives)
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import type { Service } from '@/types';
import { fetchServices } from '@/lib/mainservice';
import {
  SlideInBottom,
  StaggeredContainer,
  StaggeredItem,
  FadeIn
} from './animations/Animate';

// ======================
// 🔹 ServiceCard (same as before)
// ======================

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <div className="group rounded-xl transition-all duration-500 sm:shadow-md overflow-hidden transform hover:-translate-y-3">
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
        <div
          className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 group-hover:scale-110 transition-transform duration-500"
          style={{
            backgroundImage: `url(${service.image.trim()})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute bottom-4 left-4 z-20">
          <h3 className="text-white text-xl font-bold mb-1">{service.title}</h3>
          <p className="text-green-200 text-sm">{service.description}</p>
        </div>
      </div>

      <div className="p-6">
        <ul className="space-y-3 mb-6">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-green-500 text-sm mt-1">🌿</span>
              <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>

        <Link
          href={service.link}
          className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold transition-colors duration-200 group"
        >
          Book Your Service Now!
          <svg
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

// 🔹 Extend locally to include cta (since we're keeping `Service` type as-is)
interface ServicesSectionData {
  title: string;
  subtitle: string;
  services: Service[];
  cta: {
    text: string;
    href: string;
  };
}

// ======================
// ✅ Services Component (Fully Dynamic from Firebase)
// ======================

const Services = () => {
  const [sectionData, setSectionData] = useState<ServicesSectionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadServices = async () => {
      try {
        const data = await fetchServices();
        if (
          data &&
          typeof data.title === 'string' &&
          Array.isArray(data.services) &&
          data.services.length > 0 &&
          data.cta?.text &&
          data.cta?.href
        ) {
          setSectionData(data);
        } else {
          setError(true);
        }
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    loadServices();
  }, []);

  // Loading state
  if (loading) {
    return (
      <section className="bg-[var(--tertiary-color)] pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header Loader */}
          <div className="text-center mb-8 sm:mb-16">
            <div className="animate-pulse">
              <div className="h-10 bg-gray-300 rounded w-3/4 mx-auto mb-4"></div>
              <div className="h-6 bg-gray-300 rounded w-1/2 mx-auto"></div>
            </div>
          </div>

          {/* Services Grid Loader */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="animate-pulse">
                {/* Service Card Loader */}
                <div className="rounded-xl shadow-md overflow-hidden bg-white">
                  {/* Image Loader */}
                  <div className="h-64 bg-gray-300"></div>
                  
                  {/* Content Loader */}
                  <div className="p-6">
                    {/* Features Loader */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-3">
                        <div className="w-4 h-4 bg-gray-300 rounded-full mt-1"></div>
                        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-4 h-4 bg-gray-300 rounded-full mt-1"></div>
                        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-4 h-4 bg-gray-300 rounded-full mt-1"></div>
                        <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                      </div>
                    </div>
                    
                    {/* Link Loader */}
                    <div className="h-5 bg-gray-300 rounded w-40"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button Loader */}
          <div className="text-center mt-16 mb-20">
            <div className="animate-pulse">
              <div className="h-12 bg-gray-300 rounded-xl w-48 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error || !sectionData) {
    return (
      <section className="bg-[var(--tertiary-color)] pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-500">Services section data is not available.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[var(--tertiary-color)] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header — FROM FIREBASE */}
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            {sectionData.title}
          </h2>
          <p className="text-md text-gray-500 max-w-3xl mx-auto">
            {sectionData.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <StaggeredContainer staggerChildren={0.4}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectionData.services.map((service) => (
              <StaggeredItem key={service.id}>
                <FadeIn>
                  <ServiceCard service={service} />
                </FadeIn>
              </StaggeredItem>
            ))}
          </div>
        </StaggeredContainer>

        {/* 🔹 Dynamic CTA Button — FROM FIREBASE */}
        <div className="text-center mt-16 mb-20">
          <div className="mx-auto">
            <Link
              href={sectionData.cta.href}
              className="bg-[var(--primary-color)] inline-block hover:bg-green-600 text-white px-6 py-2 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
            >
              {sectionData.cta.text}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;