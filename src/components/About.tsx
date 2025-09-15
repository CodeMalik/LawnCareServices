import React from "react";
import Image from "next/image";
import { ArrowBigRight } from "lucide-react";

const About = () => {
  return (
    <div className="w-full py-8 px-4 md:px-6 lg:px-8 ">
      {/* Removed ml-12 — breaks mobile layout */}
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 md:pl-14">
        {/* Left Content */}
        <div className="left-content w-full md:w-1/2 space-y-4 md:space-y-6">
          <div className="font-semibold text-green-600 text-sm md:text-base">
            About Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Best lawn care and landscaping services Company
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Since 2007, we've been committed to providing reliable and
            hassle-free lawn care and landscaping services. Our experienced team
            specializes in everything from organic treatments to affordable,
            weekly care packages for residential and commercial properties.
            We're proud to be the go-to company for families, pet owners, and
            businesses who want to maintain the beauty of their outdoor spaces
            without the stress. Trust us to create the lawn you've always
            dreamed of, backed by our satisfaction guarantee and unbeatable
            customer support.
          </p>
          <button
            className="bg-[#54b435] mt-6 py-3 md:py-4 px-6 md:px-8 text-white flex items-center gap-3 md:gap-4 rounded-md cursor-pointer hover:bg-green-600 transition-colors w-fit"
            aria-label="View Our Services"
          >
            Our Services
            <ArrowBigRight className="text-white w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Right Image — Now Fully Responsive */}
        <div className="right-image w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-full max-w-md md:max-w-none aspect-[4/3] md:aspect-auto md:w-[600px] md:h-[450px] rounded-md overflow-hidden bg-white flex items-center justify-center">
            {/* Background Image */}
            <Image
              src="/aboutback.png"
              alt="Background"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-contain"
              priority
            />
            {/* Foreground Image */}
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