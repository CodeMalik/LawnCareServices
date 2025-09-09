'use client';

import React from 'react';
import Link from 'next/link';
import { SlideInBottom, StaggeredContainer, StaggeredItem } from '@/components/animations/Animate';

// ======================
// 🔹 Type Definitions
// ======================

interface ServiceFeature {
  description: string;
}

interface ServiceArrayItem {
  title: string;
  image: string;
  features: ServiceFeature[];
  buttonText: string;
}

interface LocationService {
  slug: string;
  name: string;
}

interface AllServices {
  title: string;
  description: string;
  ServiceArray: ServiceArrayItem[];
}

interface LocationServiceListProps {
  AllServices: AllServices;
  services: LocationService[];
}

// ======================
// ✅ Component: Fully Explicit & Safe
// ======================

const LocationServiceList = ({ 
  AllServices, 
  services 
}: LocationServiceListProps): React.ReactNode => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      {/* Section Header */}
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-6">
        {AllServices.title}
      </h2>
      <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
        {AllServices.description}
      </p>

      {/* Grid of Services */}
      <StaggeredContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {AllServices.ServiceArray.map((service: ServiceArrayItem, index: number): React.ReactNode => {
          // Find matching service by name
          const fullService: LocationService | undefined = services.find(
            (s: LocationService) => s.name === service.title
          );

          if (!fullService) {
            return null; // Skip if no matching service found
          }

          return (
            <StaggeredItem key={index} className="col-span-1">
              <SlideInBottom>
                <Link
                  href={`/services/${fullService.slug}`}
                  className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 hover:border-green-200 relative h-96"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center rounded-lg"
                    style={{ backgroundImage: `url(${service.image})` }}
                  >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50 bg-opacity-40 rounded-lg"></div>

                    {/* Content */}
                    <div className="left-0 top-1/3 relative h-full flex flex-col p-6 text-white">
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>

                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature: ServiceFeature, idx: number) => (
                          <li key={idx} className="text-sm">
                            {feature.description}
                          </li>
                        ))}
                      </ul>

                      <button
                        type="button"
                        className="bg-[var(--primary-color)] hover:bg-green-500 text-white font-medium px-4 py-2 rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95"
                      >
                        {service.buttonText}
                      </button>
                    </div>
                  </div>
                </Link>
              </SlideInBottom>
            </StaggeredItem>
          );
        })}
      </StaggeredContainer>
    </section>
  );
};

export default LocationServiceList;