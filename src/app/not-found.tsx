'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { FaHome, FaPhone, FaTools, FaLeaf } from 'react-icons/fa';

// Dynamically import motion with no SSR
const MotionDiv = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.div),
  { ssr: false }
);

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex flex-col pt-24">
      <main className="flex-grow flex items-center justify-center px-4 py-16 sm:py-24">
        <MotionDiv 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto w-full"
        >
          <div className="relative inline-block mb-6">
            <div className="absolute -inset-1 bg-green-100 rounded-full blur opacity-30"></div>
            <div className="relative bg-white p-6 rounded-2xl shadow-lg">
              <div className="text-9xl font-bold text-green-600">404</div>
              <div className="text-2xl font-semibold text-gray-800 mt-4">Oops! Page Not Found</div>
              <p className="mt-3 text-gray-600">
                The page you're looking for might have been removed, had its name changed, or is temporarily unavailable.
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/"
              className="group bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <FaHome className="text-green-600 text-xl" />
              </div>
              <h3 className="font-semibold text-gray-800">Go Home</h3>
              <p className="text-sm text-gray-500 mt-1">Return to the homepage</p>
            </Link>

            <Link
              href="/services"
              className="group bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <FaTools className="text-green-600 text-xl" />
              </div>
              <h3 className="font-semibold text-gray-800">Our Services</h3>
              <p className="text-sm text-gray-500 mt-1">Explore what we offer</p>
            </Link>

            <Link
              href="/contact"
              className="group bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <FaPhone className="text-green-600 text-xl" />
              </div>
              <h3 className="font-semibold text-gray-800">Contact Us</h3>
              <p className="text-sm text-gray-500 mt-1">Get in touch for help</p>
            </Link>
          </div>

        </MotionDiv>
      </main>
    </div>
  );
}
