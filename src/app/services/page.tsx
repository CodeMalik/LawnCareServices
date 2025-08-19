import React from 'react'
import Services from '@/components/Services'
import ServiceAreas from '@/components/ServiceAreas'
import Testimonials from '@/components/Testimonials'
import Image from 'next/image'
import Link from 'next/link'
import Counter from '@/components/Counter'
import { ScaleIn} from '@/components/animations/Animate'
import {Metadata} from 'next'

const metadata: Metadata = {
  title: 'Our Services | Lawn Care Services',
  description: 'Comprehensive landscaping services including design, installation, and maintenance. Transform your outdoor space with our expert team.',
  keywords: ['landscaping services', 'garden design', 'lawn care', 'outdoor living', 'landscape maintenance'],
  openGraph: {
    title: 'Professional Landscaping Services',
    description: 'Explore our range of landscaping services to enhance your outdoor living space.',
    type: 'website',
    locale: 'en_US',
  }
};

const ServicesSection = () => {
  return (
    <>

      <section className="relative bg-gray-900 min-h-[70vh] sm:min-h-[110vh] 2xl:min-h-[70vh] pt-24 md:pt-28">

        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://res.cloudinary.com/dfnjpfucl/image/upload/v1755519853/service-bg-image_nn04p0_7_11zon_iacs7j.jpg"
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

          <ScaleIn viewportMargin='0px'>
            <div className="w-full px-6 pb-16 sm:pb-45 2xl:px-32 text-center">
              {/* Main Heading */}
              <h1 className="text-lg sm:text-2xl md:text-3xl 2xl:text-5xl font-bold text-white leading-tight mb-6">
                Professional Landscaping & Irrigation Services You Can Rely On
              </h1>
              {/* Subtitle */}
              <p className="text-xs sm:text-md md:text-lg 2xl:text-xl text-white text-md sm:text-lg md:text-lg leading-relaxed w-full text-center px-6 sm:px-20">
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
              <div className="text-2xl sm:text-5xl font-bold text-green-600">
                <Counter value={25} duration={2} suffix="+" />
              </div>
              <div className="text-gray-700 font-medium">Years of Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl sm:text-5xl font-bold text-green-600">
                <Counter value={1000} duration={2} suffix="+" />
              </div>
              <div className="text-gray-700 font-medium">Happy Customers</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl sm:text-5xl font-bold text-green-600">
                <Counter value={100} duration={2} suffix="%" />
              </div>
              <div className="text-gray-700 font-medium">Satisfaction Guarantee</div>
            </div>
          </div>
        </div>
      <Services />
      <ServiceAreas />
      <Testimonials />
      <section className="relative py-20 md:py-28 overflow-hidden 2xl:flex 2xl:justify-center 2xl:items-center">
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
        <ScaleIn>
          <div className="flex justify-center items-center px-7 sm:px-20 h-full max-w-2xl mx-auto">
            <div className="text-center">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-12 text-center ">
                Your Dream Yard Starts with One Simple Step                      </h2>
              {/* Decorative underline */}
              <svg
                className="mx-auto relative bottom-2 left-0 w-20 h-2 text-green-600"
                viewBox="0 0 500 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0,8 Q150,0 300,8 L300,12 L0,12 Z" />
              </svg>
              <p className="text-center text-white text-md mb-8 max-w-3xl mx-auto">
                Whether it’s restoring your lawn, upgrading your sprinklers, or refreshing your landscape — we’re ready to bring your outdoor vision to life. Let’s make it happen.                      </p>
              <div className='w-full flex justify-center'>
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
        </ScaleIn>
      </section>
    </>
  )
}
export default ServicesSection
