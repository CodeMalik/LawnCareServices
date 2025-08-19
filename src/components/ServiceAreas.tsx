import React from 'react';
import { serviceAreas } from '@/lib/data';
import Link from 'next/link';
import { SlideInLeft, SlideInRight, ScaleIn, FadeIn } from './animations/Animate';

const ServiceAreas: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map section */}
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
              ></iframe>
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

          {/* Service areas list */}
          <FadeIn>
          <div>
             {/* Section header */}
        <div className="text-center mb-8 px-8 sm:px-6 lg:px-8">
          <h5 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Proudly Serving Dallas & Beyond
          </h5>
          <p className="text-sm text-gray-500 max-w-4xl mx-auto">
            Wherever you are in North Texas, Lawn Care Services brings expert lawn care,
            sprinkler repair, and landscaping right to your doorstep.
          </p>
        </div>

             <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-8 px-8 sm:px-6 lg:px-8">
              {serviceAreas.map((area, index) => (
                <div
                  key={area.id}
                  className="flex items-center gap-2 rounded-lg hover:text-green-700 transition-colors duration-200"
                >
                  <svg
                    className="w-4 h-4 text-green-600 flex-shrink-0"
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
                  <span className="text-sm font-medium text-gray-800">
                    {area.name}
                  </span>
                </div>
              ))}
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-8 text-center">
              Local Service. Lasting Results.
            </h2>
           
            <div className="bg-white rounded-xl text-center">
              <div className="flex flex-col justify-center items-center sm:flex-row">
                <Link
                  href="/contact"
                  className="bg-[var(--primary-color)] inline-flex items-center justify-center gap-2 hover:bg-green-600 hover:scale-105 duration-300 text-white px-4 py-2 rounded-2xl font-semibold"
                >
                  One Call To A Greener Yard!
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