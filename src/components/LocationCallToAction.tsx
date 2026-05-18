'use client';

import React from 'react';
import Link from 'next/link';
import { ScaleIn } from '@/components/animations/Animate';
import { useParams } from 'next/navigation';

// ======================
// 🔹 Type Definitions
// ======================

interface LocationParams {
  location?: string;
}

// ======================
// ✅ Clean & Explicit Component
// ======================

const LocationCallToAction = (): React.ReactNode => {
  // Type-safe access to route params
  const params = useParams() as LocationParams;
  const location: string | null = params?.location ? String(params.location) : null;

  return (
    <ScaleIn>
      <div className="flex justify-center items-center px-7 sm:px-20 h-full max-w-2xl mx-auto">
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-12">
            Locally Owned & Operated Family Business
          </h2>

          {/* Decorative SVG */}
          <svg
            className="mx-auto relative bottom-2 left-0 w-20 h-2 text-green-600"
            viewBox="0 0 500 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0,8 Q150,0 300,8 L300,12 L0,12 Z" />
          </svg>

          <p className="text-center text-white text-md mb-8 max-w-3xl mx-auto">
            We are available to chat via our website contact form, email or by phone. Contact us today!
          </p>

          {/* Optional: Add dynamic location text */}
          {location && (
            <p className="text-sm text-green-100 italic">
              Serving {location.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())}
            </p>
          )}
        </div>
      </div>
    </ScaleIn>
  );
};

export default LocationCallToAction;