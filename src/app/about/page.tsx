import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Counter from '@/components/Counter'
import { Metadata } from 'next'
import { ScaleIn, SlideInBottom, StaggeredContainer, StaggeredItem } from '@/components/animations/Animate'

export const metadata: Metadata = {
    title: 'About Us | Professional Landscaping Services',
    description: 'Learn about our passion for creating beautiful outdoor spaces. With years of experience, we transform landscapes into stunning, sustainable environments.',
    keywords: ['about us', 'landscaping company', 'our story', 'professional landscapers', 'garden design'],
    openGraph: {
        title: 'About Our Landscaping Company',
        description: 'Discover our commitment to excellence in landscaping and outdoor design services.',
        type: 'website',
        locale: 'en_US',
    }
};

const About = () => {
    return (
        <>
            <section className="relative bg-gray-900 min-h-[70vh] sm:min-h-[110vh] 2xl:min-h-[70vh] pt-24 md:pt-28">
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0">
                        <Image
                            src="https://res.cloudinary.com/dfnjpfucl/image/upload/v1755519842/1_w9p5t6_10_11zon_ii2yyf.jpg"
                            alt="Professional Landscaping Services"
                            className="w-full h-full object-cover object-center"
                            fill
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

                <div className="absolute z-10 w-full pb-50 h-full flex items-center justify-center py-30">
                    <ScaleIn>
                        <div className="w-full sm:max-w-7xl px-6 py-16 text-center">
                            {/* Main Heading */}
                            <h1 className="text-xl sm:text-4xl md:text-6xl 2xl:text-7xl font-bold text-white leading-tight mb-6  px-6 sm:px-50 2xl:px-20">
                                Meet the Lawn Care Services                        </h1>
                            {/* Subtitle */}
                            <p className="text-white text-sm sm:text-md md:text-lg 2xl:text-xl leading-relaxed w-full text-center px-6 sm:px-50">
                                Lawn Care Services blends expert landscaping, irrigation repair, and lawn care with a commitment to quality, reliability, and personal service. This isn’t just our work, it’s our craft, and we take pride in every project we touch.
                            </p>
                        </div>
                    </ScaleIn>
                </div>

            </section>

            <StaggeredContainer staggerChildren={0.4}>
                <section className="py-16 bg-white">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Mission */}
                            <StaggeredItem>
                                <SlideInBottom yOffset={100} duration={0.4}>
                                    <div className="border-1 border-green-100 rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                            </svg>
                                        </div>
                                        <h2 className="text-xl font-bold text-gray-800 mb-3">Our Mission</h2>
                                        <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                                            To provide dependable, expert landscaping services that help homeowners enjoy healthy,
                                            beautiful outdoor spaces, season after season.
                                        </p>
                                    </div>
                                </SlideInBottom>
                            </StaggeredItem>
                            {/* Vision */}
                            <StaggeredItem>
                                <SlideInBottom yOffset={100} duration={0.4} >
                                    <div className="border-1 border-green-100 rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        </div>
                                        <h2 className="text-xl font-bold text-gray-800 mb-3">Our Vision</h2>
                                        <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                                            To be the most trusted landscaping company in North Texas, known for honest service,
                                            lasting results, and a passion for nature.
                                        </p>
                                    </div>
                                </SlideInBottom>
                            </StaggeredItem>

                            {/* Values */}
                            <StaggeredItem>
                                <SlideInBottom yOffset={100} duration={0.4}>
                                    <div className="border-1 border-green-100 rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                        </div>
                                        <h2 className="text-xl font-bold text-gray-800 mb-3">Our Values</h2>
                                        <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                                            At Lawn Care Services, we believe in honest work, lasting quality, and putting our customers first.
                                            Every service is guided by respect for nature.
                                        </p>
                                    </div>
                                </SlideInBottom>
                            </StaggeredItem>
                        </div>
                    </div>
                </section>
            </StaggeredContainer>

            <div className="mx-4 sm:mx-0 flex justify-center items-center">
                <Image src="https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991600/7_om4k0z.jpg" alt="About" width={1100} height={1100} className="object-cover rounded-xl" />
            </div>
            {/* Legacy Section */}
            <section className="w-full py-16 sm:py-24 bg-white">
                <div className="w-full sm:max-w-[1200px] md:max-w-[1200px] lg:max-w-[1200px] xl:max-w-[1200px] 2xl:max-w-[1300px] mx-auto px-6 2xl:px-20">
                    <div className="flex flex-col sm:flex-row w-full space-y-6 justify-center gap-2">
                        <h2 className="w-full px-6 sm:w-1/2 2xl:w-[45%] 2xl:pl-0 text-xl sm:text-2xl md:text-3xl 2xl:text-4xl font-bold text-gray-900 mb-4 text-center ">
                            A Legacy of Beautiful Lawns and Happy Clients
                        </h2>
                        <p className="w-full sm:w-1/2 2xl:w-[55%] 2xl:pr-0 text-gray-600 text-sm sm:text-md sm:px-20 2xl:px-0 2xl:pl-10 text-center  2xl:text-lg">
                            For decades, Lawn Care Services has been Dallas's go-to for reliable sprinkler repair, precise irrigation, and lawn care that actually lasts. We don't just mow, we protect, restore, and elevate your outdoor space. From lush green lawns to flawless sprinkler systems, we deliver fast, honest service and results that speak for themselves.
                        </p>
                    </div>
                </div>
            </section>
            {/* Why Choose Us Section */}
            <section className="py-16 md:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section header */}
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Your Yard Deserves the Best, Here's Why
                        </h2>
                        <div className="w-24 h-[2px] bg-green-500 mx-auto mb-6"></div>
                        <p className=" text-md sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
                            Serving <strong className="font-semibold">Dallas, TX,</strong> for over 25 years with care,
                            consistency, and craftsmanship you can count on.
                        </p>
                    </div>

                    {/* Features grid */}
                    <StaggeredContainer staggerChildren={0.4}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                            {[
                                {
                                    icon: (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    ),
                                    title: "Fast, Reliable Service",
                                    description: "We show up on time, get the job done efficiently, and leave your lawn looking better than ever, no delays, no excuses."
                                },
                                {
                                    icon: (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    ),
                                    title: "25+ Years of Experience",
                                    description: "Founded by Jamie Cervantes, our team brings decades of hands-on landscaping knowledge to every yard we touch."
                                },
                                {
                                    icon: (
                                        <>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </>
                                    ),
                                    title: "Trusted Local Experts",
                                    description: "From Dallas, TX to Denton, we've earned a reputation for honest work, fair pricing, and results that speak for themselves."
                                },
                                {
                                    icon: (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                    ),
                                    title: "Nature-Loving Craftsmanship",
                                    description: "We don't just work outdoors, we respect it. Every service we provide is built on care for the land and the life it holds."
                                }
                            ].map((feature, index) => (
                                <StaggeredItem key={index}>
                                    <SlideInBottom duration={1} delay={index * 0.2}>
                                        <div
                                            key={index}
                                            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-10 flex flex-col h-full"
                                        >
                                            <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0 mb-4 mx-auto">
                                                <svg
                                                    className="w-7 h-7 text-green-600"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    {feature.icon}
                                                </svg>
                                            </div>
                                            <h3 className="text-md font-bold text-gray-900 mb-3 text-center">
                                                {feature.title}
                                            </h3>
                                            <p className="text-sm text-gray-600 leading-relaxed text-center flex-grow">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </SlideInBottom>
                                </StaggeredItem>
                            ))}
                        </div>
                    </StaggeredContainer>
                </div>
            </section>
            {/* Stats section */}
            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 sm:p-12 ">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 sm:gap-6 text-center">
                    <div className="space-y-2">
                        <div className="text-3xl sm:text-4xl font-semibold text-gray-700">
                            <Counter value={698} duration={2} suffix="+" />
                        </div>
                        <div className="text-green-600 font-medium">Home Delivery</div>
                    </div>
                    <div className="space-y-2">
                        <div className="text-3xl sm:text-4xl font-semibold text-gray-700">
                            <Counter value={1106} duration={2} suffix="+" />
                        </div>
                        <div className="text-green-600 font-medium">Happy People</div>
                    </div>
                    <div className="space-y-2">
                        <div className="text-3xl sm:text-4xl font-semibold text-gray-700">
                            <Counter value={4469} duration={2} suffix="+" />
                        </div>
                        <div className="text-green-600 font-medium">Tons of Goods</div>
                    </div>
                    <div className="space-y-2">
                        <div className="text-3xl sm:text-4xl font-semibold text-gray-700">
                            <Counter value={754} duration={2} suffix="+" />
                        </div>
                        <div className="text-green-600 font-medium">Tree Plant</div>
                    </div>
                </div>
            </div>
            <section className="relative py-20 md:py-28 overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 -z-10">
                    <div className="relative w-full h-full">
                        <Image
                            src="https://res.cloudinary.com/dfnjpfucl/image/upload/v1755519843/gallery-bg-image-2_bwqtp2_1_11zon_faeyp1.jpg"
                            alt="Beautiful landscape"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/50"></div>
                    </div>
                </div>

                {/* Content */}
                <div className="flex justify-center items-center px-10 sm:px-20 h-full max-w-2xl mx-auto">
                    <div className="text-center">
                        <ScaleIn>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-12 text-center">
                                Let’s Shape Nature into Your Dream Space</h2>                        <svg
                                    className="relative bottom-2 left-0 w-20 h-2 text-green-600 mx-auto"
                                    viewBox="0 0 500 20"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                <path d="M0,8 Q150,0 300,8 L300,12 L0,12 Z" />
                            </svg>
                            <p className="text-white text-md mb-8 max-w-3xl text-center">
                                Whether it’s lush lawn care, expert sprinkler repair, or full-scale landscaping, Lawn Care Services is here to help your yard thrive.</p>
                            <div className="w-full flex justify-center">
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
                                    Ready For A Lush, Green Lawn?
                                </Link>
                            </div>
                        </ScaleIn>
                    </div>
                </div>
            </section>

        </>
    )
}

export default About