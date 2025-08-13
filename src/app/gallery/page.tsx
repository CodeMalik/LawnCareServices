import React from 'react'
import GalleryImages from '@/components/GalleryImages'
import Image from 'next/image'
import Link from 'next/link'
import { ScaleIn,SlideInRight} from '@/components/animations/Animate'
const Gallery = () => {
    return (
        <>
            <section className="relative bg-gray-900 min-h-[40vh] sm:min-h-[90vh]">
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                    <div className="absolute inset-0">
                        <img
                            src="https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991874/gallery-bg-image_qcs4x2.jpg"
                            alt="Gallery Background Image"
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
                        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                            Our Work Speaks for Itself
                        </h1>
                        {/* Subtitle */}
                        <p className="text-white text-md sm:text-lg md:text-lg leading-relaxed w-full text-center px-6 sm:px-20">
                            From sprinkler installs to full landscaping transformations — here’s a look at the outdoor spaces we’ve helped bring to life. Every photo is a real project we’re proud of.
                        </p>
                    </div>
                    </ScaleIn>
                </div>
            </section>
            <GalleryImages />
            <section className="relative py-20 md:py-28 overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 -z-10">
                    <div className="relative w-full h-full">
                        <Image
                            src="https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991865/gallery-bg-image-2_th5mlq.jpg"
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
                <div className="flex justify-start items-center px-6 sm:px-20 h-full max-w-2xl">
                    <div className="text-start">
                        <h2 className="text-center sm:text-left text-3xl sm:text-3xl font-bold text-white mb-6 leading-12">
                        Let’s Bring Nature Into Your Lovely House  </h2>                      {/* Decorative underline */}
                        <svg
                            className="relative bottom-2 left-0 w-20 h-2 text-green-600 mx-auto sm:mx-0"
                            viewBox="0 0 500 20"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M0,8 Q150,0 300,8 L300,12 L0,12 Z" />
                        </svg>
                        <p className="text-center sm:text-left text-white text-md mb-8 max-w-3xl mx-auto sm:mx-0">
                        Ready to refresh your yard or start something new? Whether you’re tackling brown patches, overgrown gardens, or outdated irrigation — we’ve got you covered with expert landscaping solutions.</p>
                        <div className="flex justify-center sm:justify-start">
                          <Link
                            href="/contact"
                            className="inline-flex items-center justify-center text-center text-sm sm:text-lg bg-[var(--primary-color)] hover:bg-green-600 text-white px-6 py-2 sm:px-8 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                          >
                          Get A Free Quote
                        </Link>
                      </div>
                    </div>
                </div>
                
                </SlideInRight>
            </section>
        </>
    )
}

export default Gallery