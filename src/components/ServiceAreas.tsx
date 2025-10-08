// components/ServiceAreas.tsx

'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FadeIn } from './animations/Animate';
import { getServiceAreasData, ServiceAreasSection, ServiceArea } from '@/lib/serviceareadata';

// ======================
// 🔹 Type Definitions
// ======================

interface ServiceAreasProps {}

// ======================
// ✅ Component: Fully Explicit & Safe
// ======================

const ServiceAreas = (_props: ServiceAreasProps): React.ReactNode => {
  const [serviceData, setServiceData] = useState<ServiceAreasSection | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServiceAreas = async () => {
      try {
        setLoading(true);
        const data = await getServiceAreasData();
        setServiceData(data);
      } catch (err) {
        setError('Failed to load service areas');
        console.error('Error fetching service areas:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchServiceAreas();
  }, []);

  // Loading state
  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Map Section Loader */}
            <div className="relative sm:px-6 lg:px-8">
              <div className="animate-pulse">
                <div className="relative rounded-2xl overflow-hidden h-96 bg-gray-300">
                  {/* Map placeholder */}
                </div>
                {/* Map Overlay Loader */}
                <div className="absolute top-4 left-4 bg-gray-200 p-4 rounded-lg shadow-md w-48">
                  <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                  <div className="h-3 bg-gray-300 rounded w-3/4"></div>
                </div>
              </div>
            </div>

            {/* Service Areas List Loader */}
            <div>
              {/* Section Header Loader */}
              <div className="text-center mb-8 px-8 sm:px-6 lg:px-8">
                <div className="animate-pulse">
                  <div className="h-8 bg-gray-300 rounded w-3/4 mx-auto mb-4"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-2/3 mx-auto"></div>
                </div>
              </div>

              {/* Grid of Service Areas Loader */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-8 px-8 sm:px-6 lg:px-8">
                {[...Array(12)].map((_, index) => (
                  <div key={index} className="animate-pulse">
                    <div className="flex items-center gap-2 rounded-lg">
                      <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                      <div className="h-4 bg-gray-300 rounded w-20"></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tagline Loader */}
              <div className="text-center mb-8">
                <div className="animate-pulse">
                  <div className="h-6 bg-gray-300 rounded w-2/3 mx-auto"></div>
                </div>
              </div>

              {/* Call to Action Loader */}
              <div className="bg-white rounded-xl text-center">
                <div className="animate-pulse">
                  <div className="h-12 bg-gray-300 rounded-2xl w-48 mx-auto"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error || !serviceData) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-red-600">{error || 'Failed to load service areas'}</p>
        </div>
      </section>
    );
  }

  const areas: ServiceArea[] = serviceData.serviceAreas;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Map Section */}
          <FadeIn>
            <div className="relative sm:px-6 lg:px-8">
              <div className="relative rounded-2xl overflow-hidden h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3343.717123456789!2d-96.8987!3d32.9306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c3b8f8f8f8f8f%3A0x1234567890abcdef!2s14035%20Janwood%20Ln%2C%20Farmers%20Branch%2C%20TX%2075234%2C%20USA!5e0!3m2!1sen!2sus!4v1691312345!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Service Area Location Map"
                ></iframe>

                {/* Map Overlay Info */}
                <div className="absolute top-4 left-4 bg-white p-2 rounded-lg shadow-md">
                  <p className="text-sm text-gray-800">
                    14035 Janwood Ln, Farmers Branch, TX 75234, USA
                  </p>
                  <a
                    href="https://www.google.com/maps/place/14035+Janwood+Ln,+Farmers+Branch,+TX+75234,+USA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 text-sm hover:underline"
                  >
                    View larger map
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Service Areas List */}
          <FadeIn>
            <div>
              {/* Section Header */}
              <div className="text-center mb-8 px-8 sm:px-6 lg:px-8">
                <h5 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  {serviceData.title}
                </h5>
                <p className="text-sm text-gray-500 max-w-4xl mx-auto">
                  {serviceData.description}
                </p>
              </div>

              {/* Grid of Service Areas — NOW CLICKABLE */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-8 px-8 sm:px-6 lg:px-8">
                {areas.map((area: ServiceArea, index: number): React.ReactNode => (
                  <Link
                    key={area.id}
                    href={`/${area.id}`}
                    className="flex items-center gap-2 rounded-lg hover:text-green-700 transition-colors duration-200 group"
                  >
                    <svg
                      className="w-4 h-4 text-green-600 flex-shrink-0 group-hover:text-green-700 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
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
                    <span className="text-sm font-medium text-gray-800 group-hover:text-green-700">
                      {area.name}
                    </span>
                  </Link>
                ))}
              </div>

              {/* Tagline */}
              <h2 className="text-xl font-bold text-gray-900 mb-8 text-center">
                {serviceData.tagline}
              </h2>

              {/* Call to Action */}
              <div className="bg-white rounded-xl text-center">
                <div className="flex flex-col justify-center items-center sm:flex-row">
                  <Link
                    href="/contact"
                    className="bg-[var(--primary-color)] inline-flex items-center justify-center gap-2 hover:bg-green-600 hover:scale-105 duration-300 text-white px-4 py-2 rounded-2xl font-semibold"
                  >
                    {serviceData.ctaText}
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;