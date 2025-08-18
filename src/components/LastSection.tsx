import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ScaleIn } from './animations/Animate';
const LastSection = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10">
        <div className="relative w-full h-full">
          <Image
            src="https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991299/lastSection_eyynym.jpg"
            alt="Beautiful landscape"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      </div>

      {/* Content */}
      <ScaleIn>
      <div className="flex justify-start items-center px-10 sm:px-20 h-full max-w-2xl">
        <div className="text-start">
          <h2 className="text-center sm:text-left text-3xl md:text-4xl font-bold text-white mb-6 leading-12">
          From Lawn to Lush, Let’s Begin!
          </h2>
          {/* Decorative underline */}
          <svg 
                className="relative bottom-2 left-0 w-20 h-2 text-green-600 mx-auto sm:mx-0" 
                viewBox="0 0 500 20" 
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0,8 Q150,0 300,8 L300,12 L0,12 Z" />
            </svg>
          <p className="text-sm text-white sm:text-md mb-8 max-w-3xl mx-auto">
          Whether it’s lush lawn care, expert sprinkler repair, or full-scale landscaping, Cancun Landscaping is here to help your yard thrive.          </p>
          <div className='w-full flex justify-center sm:justify-start'>
          <Link
            href="/contact"
            className="text-sm sm:text-lg bg-[var(--primary-color)] hover:bg-green-700 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center w-fit"
          >
            {/* <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg> */}
            Call Now To Get Started
          </Link></div>
        </div>
      </div>  
      </ScaleIn>
    </section>
  );
};

export default LastSection;