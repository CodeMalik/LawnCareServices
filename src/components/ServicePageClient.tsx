// src/components/ServicePageClient.tsx
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Testimonials from '@/components/Testimonials';
import FAQSection from '@/components/FAQSection';
import Counter from '@/components/Counter';
import { ScaleIn, SlideInTop, StaggeredContainer, StaggeredItem, FadeIn } from '@/components/animations/Animate';
import { serviceAreas } from '@/lib/data';
import LocationContactForm from '@/components/LocationContactForm';
import LocationServiceText from '@/components/LocationServiceText';
import Sprinklerdescription from '@/components/Sprinklerdescription';
import { getServiceBySlug, Service } from '@/lib/homepageservices';

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen bg-white flex items-center justify-center">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-600"></div>
  </div>
);

// This is the enhanced client component that can fetch data if needed
const ServicePageClient = ({ service: initialService }: { service: Service }) => {
  const [service, setService] = useState<Service | null>(initialService);
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  // Fallback data fetching if initial service is not provided
  useEffect(() => {
    if (!initialService) {
      const fetchServiceData = async () => {
        setLoading(true);
        try {
          // Extract slug from pathname
          const slug = pathname.split('/').pop();
          if (slug) {
            const serviceData = await getServiceBySlug(slug);
            setService(serviceData);
          }
        } catch (error) {
          console.error('Error fetching service data:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchServiceData();
    }
  }, [initialService, pathname]);

  // Show loading state
  if (loading) {
    return <LoadingSpinner />;
  }

  // Show error state if no service data
  if (!service) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-8">The requested service could not be loaded.</p>
          <Link
            href="/services"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    );
  }

  const isSprinklerRepairPage = pathname === '/services/sprinkler-system-repair';

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Enhanced with better gradient and text positioning */}
      <div className="relative bg-gray-900 min-h-[70vh] sm:min-h-[110vh] 2xl:min-h-[70vh] pt-24 md:pt-28">
        <div className="absolute inset-0 overflow-hidden flex items-center justify-center">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />
        </div>

        <div className="absolute z-10 pb-20 px-6 w-full h-full flex items-center justify-center">
          <ScaleIn viewportMargin='0px'>
            <div className="w-full flex flex-col items-center justify-center">
              <h1 className="text-center text-2xl md:text-5xl lg:text-5xl 2xl:text-6xl font-bold text-white mb-6 leading-tight text-center">
                {service.heroTitle}
              </h1>
              <p className="text-center text-sm md:text-md lg:text-xl 2xl:text-2xl text-gray-200 mb-10 leading-relaxed font-light">
                {service.heroSubtitle}
              </p>
            </div>
          </ScaleIn>
        </div>
      </div>

      {/* Stats Section - Enhanced with animations */}
      {service.stats && service.stats.length > 0 && (
        <div className="bg-[var(--primary-color)] py-10 sm:py-20 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {service.stats.map((stat: any, index: number) => (
                <div key={index} className="text-center group">
                  <div className="text-xl sm:text-4xl lg:text-5xl font-bold text-green-600 mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Counter value={stat.number} duration={2} prefix="" suffix="+" />
                  </div>
                  <div className="text-gray-700 font-medium text-sm lg:text-base">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Features Section - Enhanced cards with better spacing */}
      {service.features && service.features.length > 0 && (
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <StaggeredContainer staggerChildren={0.4}>
              <div className="space-y-20">
                {service.features.map((feature: any, index: number) => {
                  const isEven = index % 2 === 0;
                  return (
                    <StaggeredItem key={index}>
                      <FadeIn>
                        <div
                          className={`flex flex-col md:flex-row gap-8 group ${isEven ? '' : 'md:flex-row-reverse'}`}
                        >
                          <div className="w-full md:w-1/2 h-80 md:h-auto relative overflow-hidden rounded-xl">
                            <Image
                              src={feature.image}
                              alt={feature.title}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-10 duration-300" />
                          </div>

                          <div className="w-full md:w-1/2 p-0 md:p-8 flex flex-col justify-center">
                            <h3 className="text-center sm:text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 transition-colors leading-tight">
                              {feature.title}
                            </h3>
                            <p className="text-sm sm:text-md md:text-lg text-center sm:text-left text-gray-600 mb-6 leading-relaxed">{feature.description}</p>

                            <ul className="space-y-3 mb-8">
                              {feature.featuresArray.map((item: any, i: number) => (
                                <li key={i} className="flex items-start">
                                  <svg className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                  <span className="text-sm sm:text-md md:text-lg text-gray-600 font-medium">{item.description}</span>
                                </li>
                              ))}
                            </ul>

                            <Link
                              href="/contact"
                              className="bg-[var(--primary-color)] inline-flex items-center justify-center text-white sm:items-start sm:justify-start text-sm sm:text-md md:text-lg px-6 py-2 sm:py-3 sm:px-8 rounded-2xl hover:bg-green-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 w-fit mx-auto sm:mx-0"
                            >
                              {feature.buttonText}
                            </Link>
                          </div>
                        </div>
                      </FadeIn>
                    </StaggeredItem>
                  );
                })}
              </div>
            </StaggeredContainer>
          </div>
        </div>
      )}

      {service.form && (
        <div id="contact-form">
          <LocationContactForm form={service.form} />
        </div>
      )}

      {service.ServiceText && (
        <LocationServiceText serviceText={service.ServiceText} />
      )}

      {/* Only show Sprinklerdescription on the sprinkler-system-repair page */}
      {isSprinklerRepairPage && <Sprinklerdescription />}
      
      {/* Solution Gallery - Enhanced with better grid and hover effects */}
      {service.solution && (
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {service.solution.title}
              </h2>
              <p className="text-sm sm:text-md md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                {service.solution.description}
              </p>
            </div>
            <StaggeredContainer staggerChildren={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {service.solution.imageGallery.map((image: any, index: number) => (
                  <StaggeredItem key={index}>
                    <FadeIn>
                      <div className="group relative rounded-2xl overflow-hidden cursor-pointer h-64 w-full">
                        <Image
                          src={image.image}
                          alt={`${service.title} project ${index + 1}`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                      </div>
                    </FadeIn>
                  </StaggeredItem>
                ))}
              </div>
            </StaggeredContainer>

            <div className="flex justify-center sm:justify-start">
              <Link
                href="/gallery"
                className="bg-[var(--primary-color)] text-white px-6 py-2 rounded-2xl hover:bg-green-700 transition-all duration-300 font-semibold text-sm sm:text-md md:text-lg lg:text-xl shadow-lg hover:shadow-xl transform hover:scale-105 w-fit mx-auto "
              >
                {service.solution.buttonText}
              </Link>
            </div>
          </div>
        </div>
      )}
      
      {/* Card Section - Enhanced with better styling */}
      {service.card && (
        <div className="relative py-16 bg-[rgba(237,251,226,255)] overflow-hidden">
          <FadeIn>
            <div className="relative sm:max-w-6xl md:max-w-7xl lg:max-w-6xl bg-white rounded-xl mx-auto px-6 py-10 text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                {service.card.title}
              </h2>
              <p className="text-sm sm:text-md md:text-lg lg:text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
                {service.card.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-[var(--primary-color)] text-white px-6 py-2 rounded-2xl hover:bg-green-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 w-fit mx-auto"
                >
                  {service.card.buttonText}
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      )}
      
      {service.mapSection && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Map section */}
              <FadeIn>
                <div className="relative">
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
                      <Link
                        href="https://www.google.com/maps/place/14035+Janwood+Ln,+Farmers+Branch,+TX+75234,+USA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 text-sm hover:underline"
                      >
                        View larger map
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeIn>
              <FadeIn>
                {/* Service areas list */}
                <div>
                  {/* Section header */}
                  <div className="text-center mb-8">
                    <h5 className="text-4xl sm:text-4xl font-bold text-gray-900 mb-4">
                      {service.mapSection.title}
                    </h5>
                    <p className="text-sm text-gray-500 max-w-4xl mx-auto">
                      {service.mapSection.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-8">
                    {serviceAreas.map((area, index) => (
                      <div
                        key={area.id}
                        className="flex items-center gap-2 rounded-lg hover:bg-green-50 hover:text-green-700 transition-colors duration-200"
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
                  <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                    Not sure if we cover your neighborhood?
                  </h2>

                  <div className="bg-white rounded-xl text-center">
                    <div className="flex flex-col justify-center items-center sm:flex-row">
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 bg-[var(--primary-color)] hover:bg-green-700 hover:scale-105 duration-300 text-white px-4 py-2 sm:px-5 sm:py-3 rounded-2xl font-semibold"
                      >
                        Call Now To Confirm Your Area
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      )}
      
      <Testimonials />
      
      {/* FAQ Section - Using the new separate component */}
      {service.faqs && service.faqs.length > 0 && (
        <FAQSection 
          faqs={service.faqs}
          title="FAQs"
          description="Find answers to common questions about our services"
        />
      )}
      
      {/* Final CTA Section */}
      <div className="relative sm:py-24 py-16 overflow-hidden w-full">
        <div className="absolute inset-0">
          <Image
            src={service.cta.image}
            alt="Final CTA Background"
            fill
            className="object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <ScaleIn>
          <div className="relative max-w-3xl px-6 sm:px-20 flex flex-col justify-center items-center mx-auto">
            <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold text-white mb-8 leading-tight text-center">
              {service.cta.finalCta}
            </h2>
            {/* Decorative underline */}
            <svg
              className="relative bottom-2 left-0 w-20 h-2 text-green-600 mx-auto"
              viewBox="0 0 500 20"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0,8 Q150,0 300,8 L300,12 L0,12 Z" />
            </svg>

            <p className="text-md lg:text-lg text-white mb-12 leading-relaxed text-center">
              {service.cta.finalCtaDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-fit mx-auto"
              >
                {service.cta.buttonText}
              </Link>
            </div>
          </div>
        </ScaleIn>
      </div>
    </div>
  );
}

export default ServicePageClient;