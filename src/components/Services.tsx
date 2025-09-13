'use client';

import React from 'react';
import Link from 'next/link';
import { services } from '@/lib/data';
import type { Service } from '@/types';
import { SlideInBottom, StaggeredContainer, StaggeredItem, FadeIn } from './animations/Animate';

// ======================
// 🔹 Type Definitions
// ======================

interface ServiceCardProps {
  service: Service;
}

// ======================
// ✅ ServiceCard Component
// ======================

const ServiceCard = ({ service }: ServiceCardProps): React.ReactNode => {
  return (
    <div className="group rounded-xl transition-all duration-500 sm:shadow-md overflow-hidden transform hover:-translate-y-3">
      {/* Image container */}
      <div className="relative h-64 overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />

        {/* Background image */}
        <div
          className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 group-hover:scale-110 transition-transform duration-500"
          style={{
            backgroundImage: `url(${service.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Service title overlay */}
        <div className="absolute bottom-4 left-4 z-20">
          <h3 className="text-white text-xl font-bold mb-1">{service.title}</h3>
          <p className="text-green-200 text-sm">{service.description}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <ul className="space-y-3 mb-6">
          {service.features.map((feature: string, index: number) => (
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

// ======================
// ✅ Services Component
// ======================

const Services = (): React.ReactNode => {
  return (
    <section className="bg-[var(--tertiary-color)] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Tailored Landscaping Solutions for Every Yard
          </h2>
          <p className="text-md text-gray-500 max-w-3xl mx-auto">
            Sick of constant lawn hassles? Get total solutions for a lush, worry-free yard— all in one place. Select From Our Property Services Below.
          </p>
        </div>

        {/* Services Grid */}
        <StaggeredContainer staggerChildren={0.4}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service: Service) => (
              <StaggeredItem key={service.id}>
                <FadeIn>
                  <ServiceCard service={service} />
                </FadeIn>
              </StaggeredItem>
            ))}
          </div>
        </StaggeredContainer>

        {/* Bottom CTA */}
        <div className="text-center mt-16 mb-20">
          <div className="mx-auto">
            <Link
              href="/services"
              className="bg-[var(--primary-color)] inline-block hover:bg-green-600 text-white px-6 py-2 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
            >
              Discover What We Do
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;