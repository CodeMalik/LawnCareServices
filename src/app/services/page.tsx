import React from 'react'
import Services from '@/components/Services'
import ServiceAreas from '@/components/ServiceAreas'
import Testimonials from '@/components/Testimonials'
import Image from 'next/image'
import Link from 'next/link'
import Counter from '@/components/Counter'
import { ScaleIn, SlideInRight } from '@/components/animations/Animate'
export const ServicesSection = () => {
  return (
    <>

      <section className="relative bg-gray-900 min-h-[50vh] sm:min-h-[90vh]">

        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992701/service-bg-image_nn04p0.jpg"
              alt="Professional Landscaping Services"
              className="w-full h-full object-cover object-center"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center'
              }}
            />
          </div>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
          {/* Gradient overlay for better text readability */}
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>
        {/* Content Container */}
        <div className="absolute z-10 w-full h-full flex items-center justify-center">

          <ScaleIn>
            <div className="w-full px-6 py-16 text-center">
              {/* Main Heading */}
              <h1 className="text-lg sm:text-2xl md:text-3xl font-bold text-white leading-tight mb-6">
                Professional Landscaping & Irrigation Services You Can Rely On
              </h1>
              {/* Subtitle */}
              <p className="text-xs sm:text-md md:text-lg text-white text-md sm:text-lg md:text-lg leading-relaxed w-full text-center px-6 sm:px-20">
                From smart sprinkler systems to vibrant lawns and healthy trees — we bring expert care and long-term beauty to every outdoor space.
                Browse our services below and choose what your yard needs today.
              </p>
            </div>

          </ScaleIn>
        </div>
      </section>

        <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 sm:p-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl sm:text-5xl font-bold text-green-600">
                <Counter value={25} duration={2} suffix="+" />
              </div>
              <div className="text-gray-700 font-medium">Years of Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl sm:text-5xl font-bold text-green-600">
                <Counter value={1000} duration={2} suffix="+" />
              </div>
              <div className="text-gray-700 font-medium">Happy Customers</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl sm:text-5xl font-bold text-green-600">
                <Counter value={100} duration={2} suffix="%" />
              </div>
              <div className="text-gray-700 font-medium">Satisfaction Guarantee</div>
            </div>
          </div>
        </div>
      <Services />
      <ServiceAreas />
      <Testimonials />
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 -z-10">
          <div className="relative w-full h-full">
            <Image
              src="https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992685/Mein-Background-image-2_cpfbiz.jpg"
              alt="Beautiful landscape"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        </div>

        {/* Content */}
        <SlideInRight xOffset={800} duration={0.8}>
          <div className="flex justify-start items-center px-7 sm:px-20 h-full max-w-2xl">
            <div className="text-start">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-12 text-center sm:text-left">
                Your Dream Yard Starts with One Simple Step                      </h2>
              {/* Decorative underline */}
              <svg
                className="mx-auto sm:mx-0 relative bottom-2 left-0 w-20 h-2 text-green-600"
                viewBox="0 0 500 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0,8 Q150,0 300,8 L300,12 L0,12 Z" />
              </svg>
              <p className="text-center text-white text-md mb-8 max-w-3xl mx-auto sm:text-left">
                Whether it’s restoring your lawn, upgrading your sprinklers, or refreshing your landscape — we’re ready to bring your outdoor vision to life. Let’s make it happen.                      </p>
              <div className='w-full flex justify-center sm:justify-start'>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-xl text-sm sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
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
                  Start My Lawn Makeover
                </Link>
              </div>
            </div>
          </div>
        </SlideInRight>
      </section>
    </>
  )
}
export default ServicesSection

