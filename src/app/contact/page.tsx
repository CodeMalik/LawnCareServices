import React from 'react'
import Image from 'next/image'
import ContactForm from '@/components/ContactForm'
import { SlideInRight, ScaleIn, SlideInLeft, SlideInBottom,SlideInTop, FadeIn } from '@/components/animations/Animate'

export const ContactSection = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-gray-900 min-h-[40vh] sm:min-h-[90vh]">
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                    <div className="absolute inset-0">
                        <img
                            src="https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991449/1-3_gtvfal.jpg"
                            alt="Contact Us - Professional Landscaping Services"
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
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
                </div>

                {/* Content Container */}
                <div className="absolute z-10 w-full h-full flex items-center justify-center">
                    <ScaleIn>
                    <div className="w-full px-6 py-16 text-center">
                        {/* Main Heading */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                            Contact
                        </h1>
                        {/* Subtitle */}
                        <p className="text-white text-md sm:text-lg md:text-lg leading-relaxed w-full text-center sm:px-20 max-w-4xl mx-auto">
                            Have questions? Need a quote? Want to schedule a service? We're just a message or call away.
                            Reach out and let's make your landscape vision a reality.
                        </p>
                    </div>
                    </ScaleIn>
                </div>
            </section>

            {/* Contact Form & Info Section */}
            <section className="w-full py-16 sm:py-24 bg-white ">
                <div className="w-full sm:mx-auto px-6">
                    <ScaleIn>
                    <div className="flex flex-col sm:flex-row w-full mb-20">
                        <h2 className="w-full px-6 sm:w-1/2 text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
                            Getting in Touch Is Easy!
                        </h2>
                        <p className="w-full sm:w-1/2 text-gray-600 text-sm sm:text-md sm:px-20 text-center sm:text-left">
                            Whether you're ready to start a project or just have a quick question, we're here to help.
                            Fill out the form and one of our friendly team members will get back to you shortly.
                        </p>
                    </div>
                    </ScaleIn>


                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 px-6 sm:px-30">

                        {/* Contact Information */}
                        <SlideInLeft xOffset={-200} duration={0.4}>
                        <div className="order-1">
                            <div className="">
                                <div>
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center sm:text-left">Contact Details</h3>
                                </div>

                                {/* Contact Info Cards */}
                                <div className="">
                                    {/* Phone */}
                                    <a 
                                        href="tel:+19725439020"
                                        className="flex flex-col items-center justify-center sm:items-start sm:justify-start sm:flex-row sm:items-start space-y-2 sm:space-x-4 p-2 sm:p-4 hover:bg-gray-50 rounded-lg transition-colors duration-200 group cursor-pointer"
                                    >
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-50 transition-colors duration-200">
                                                <svg
                                                    className="w-5 h-5 text-green-600 group-hover:text-green-700 transition-colors duration-200"
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
                                                </svg>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-0.5 text-gray-900 group-hover:text-green-600 transition-colors duration-200 text-center sm:text-left">Call Us</h4>
                                            <p className="text-gray-600 font-medium text-sm group-hover:text-green-700 transition-colors duration-200 text-center sm:text-left">
                                                (972) 543-9020
                                            </p>
                                        </div>
                                    </a>

                                    {/* Email */}
                                    <a 
                                        href="mailto:info@cancunlandscape.com"
                                        className="flex flex-col items-center justify-center sm:items-start sm:justify-start sm:flex-row sm:items-start space-y-2 sm:space-x-4 p-2 sm:p-4 hover:bg-gray-50 rounded-lg transition-colors duration-200 group cursor-pointer"
                                    >
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-50 transition-colors duration-200">
                                                <svg
                                                    className="w-5 h-5 text-blue-600 group-hover:text-blue-700 transition-colors duration-200"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-0.5 text-gray-900 group-hover:text-blue-600 transition-colors duration-200 text-center sm:text-left">Email Us</h4>
                                            <p className="text-gray-600 font-medium text-sm group-hover:text-blue-700 transition-colors duration-200 text-center sm:text-left">
                                                info@cancunlandscape.com
                                            </p>
                                        </div>
                                    </a>

                                    {/* Address */}
                                    <a 
                                        href="https://www.google.com/maps/place/14035+Janwood+Ln,+Farmers+Branch,+TX+75234,+USA"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex flex-col items-center justify-center sm:items-start sm:justify-start sm:flex-row sm:items-start space-y-2 sm:space-x-4 p-2 sm:p-4 hover:bg-gray-50 rounded-lg transition-colors duration-200 group cursor-pointer"
                                    >
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-50 transition-colors duration-200">
                                                <svg
                                                    className="w-5 h-5 text-purple-600 group-hover:text-purple-700 transition-colors duration-200"
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
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-0.5 text-gray-900 group-hover:text-purple-600 transition-colors duration-200 text-center sm:text-left">Our Location</h4>
                                            <p className="text-gray-600 text-sm group-hover:text-purple-700 transition-colors duration-200 text-center sm:text-left">
                                                Serving Dallas, TX and surrounding areas
                                            </p>
                                        </div>
                                    </a>

                                </div>
                            </div>
                        </div>
                        </SlideInLeft>
                        {/* Contact Form */}
                        <SlideInRight xOffset={200} duration={0.4}>
                        <div className="order-2">
                            <div className="rounded-2xl">
                                <h3 className="text-3xl font-bold mb-6">Send Us a Message</h3>
                                <ContactForm />
                            </div>
                        </div>
                        </SlideInRight>
                    </div>
                </div>
            </section>
            {/* Map section */}
            <div className="px-10 sm:px-30 mb-20">
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
        </>
    )
}

export default ContactSection