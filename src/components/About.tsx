// components/About.tsx
"use client"; // Required for client-side hooks

import React from "react";
import Image from "next/image";
import { ArrowBigRight } from "lucide-react";
import useAboutData from "@/lib/aboutdata"; // Adjust path as needed

const About = () => {
  const { data, loading, error } = useAboutData();

  // Loading state
  if (loading) {
    return (
      <div className="w-full py-8 px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 md:pl-14">
          {/* Left Content Loader */}
          <div className="left-content w-full md:w-1/2 space-y-4 md:space-y-6">
            {/* Title Loader */}
            <div className="animate-pulse">
              <div className="h-6 bg-gray-300 rounded w-32"></div>
            </div>
            
            {/* Heading Loader */}
            <div className="animate-pulse">
              <div className="h-10 bg-gray-300 rounded w-3/4 mb-3"></div>
              <div className="h-10 bg-gray-300 rounded w-5/6"></div>
            </div>
            
            {/* Description Loader */}
            <div className="animate-pulse">
              <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-4/5 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            </div>
            
            {/* Button Loader */}
            <div className="animate-pulse mt-6">
              <div className="h-12 bg-gray-300 rounded-md w-48"></div>
            </div>
          </div>

          {/* Right Image Loader */}
          <div className="right-image w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-md md:max-w-none aspect-[4/3] md:aspect-auto md:w-[600px] md:h-[450px] rounded-md overflow-hidden bg-gray-300 flex items-center justify-center">
              <div className="animate-pulse w-full h-full bg-gray-400"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="w-full py-8 px-4 text-center text-red-500">{error}</div>;
  }

  if (!data) {
    return <div className="w-full py-8 px-4 text-center">No data available.</div>;
  }

  return (
    <div className="w-full py-8 px-4 md:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 md:pl-14">
        {/* Left Content */}
        <div className="left-content w-full md:w-1/2 space-y-4 md:space-y-6">
          <div className="font-bold text-green-600 text-xl md:text-2xl">
            {data.title}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            {data.heading}
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            {data.description}
          </p>
          <button
            className="bg-[#54b435] mt-6 py-3 md:py-4 px-6 md:px-8 text-white flex items-center gap-3 md:gap-4 rounded-md cursor-pointer hover:bg-green-600 transition-colors w-fit"
            aria-label="View Our Services"
          >
            {data.buttonText}
            <ArrowBigRight className="text-white w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Right Image */}
        <div className="right-image w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-full max-w-md md:max-w-none aspect-[4/3] md:aspect-auto md:w-[600px] md:h-[450px] rounded-md overflow-hidden bg-white flex items-center justify-center">
            <Image
              src="/aboutback.png"
              alt="Background"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-contain"
              priority
            />
            <Image
              src="/aboutfront.png"
              alt="About image"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-contain absolute"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;