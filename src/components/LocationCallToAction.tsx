'use client';

import React from 'react';
import Link from 'next/link';
import { ScaleIn } from '@/components/animations/Animate';
import { useParams } from 'next/navigation';

const LocationCallToAction: React.FC = () => {
  const params = useParams();
  const location = params?.location as string;

  return (
    <ScaleIn>
      <div className="flex justify-center items-center px-7 sm:px-20 h-full max-w-2xl mx-auto">
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-12">
          Locally Owned & Operated Family Business          </h2>
          <svg
            className="mx-auto relative bottom-2 left-0 w-20 h-2 text-green-600"
            viewBox="0 0 500 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0,8 Q150,0 300,8 L300,12 L0,12 Z" />
          </svg>
          <p className="text-center text-white text-md mb-8 max-w-3xl mx-auto">
          We are available to chat via our website contact form, email or by phone. Contact us today!          </p>
        </div>
      </div>
    </ScaleIn>
  );
};

export default LocationCallToAction;