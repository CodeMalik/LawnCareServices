import React from 'react';
import { ScaleIn } from './animations/Animate';
const Hero = () => {
  return (
    <section className="relative min-h-[50vh] sm:min-h-[80vh] 2xl:min-h-[70vh] flex overflow-hidden pt-24 md:pt-28">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        {/* You can replace this with your actual image URL */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/dfnjpfucl/image/upload/v1755519843/hero-background_syinko_9_11zon_t5ldnt.jpg')` // Replace with your actual image path
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
      </div>
      <ScaleIn viewportMargin='0px'>
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl px-4 sm:px-6 2xl:px-20 py-20">
        <div className="mx-[10px] sm:mx-[50px] lg:mx-[60px] max-w-6xl">
          {/* Top Tagline */}
          <p className="text-white leading-tight sm:leading-relaxed text-center sm:text-left text-md sm:text-xl font-medium mb-4 tracking-wide">
            Professional Lawn, Irrigation & Landscape Solutions
          </p>

          {/* Main Heading */}
          <h1 className="text-3xl leading-tight sm:leading-relaxed text-center sm:text-left sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-8">
            Transform Your Yard into a{' '}
            <span className="text-green-400 relative inline-block">
              Tropical Paradise
              {/* Decorative underline */}
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-green-300"
                viewBox="0 0 300 12"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0,8 Q150,0 300,8 L300,12 L0,12 Z" />
              </svg>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-white text-center sm:text-left text-md sm:text-xl mb-8 max-w-4xl leading-tight sm:leading-relaxed">
            Fast, affordable sprinkler repair, lawn care, and landscaping — all handled by local experts. Book today and enjoy a worry-free yard.
          </p>

          {/* CTA Button */}
          <div className="mb-12 text-center sm:text-left">
            <button className="mx-auto sm:mx-0 bg-[var(--primary-color)] hover:bg-green-600 text-white px-6 py-2 sm:px-8 sm:py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-3 group cursor-pointer">
              <svg className="w-4 h-4 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Fix Your Lawn Now!
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center justify-between sm:justify-start text-left flex-wrap gap-2 text-white sm:gap-8">
            {[
              { icon: '✓', text: 'Licensed & Insured' },
              { icon: '✓', text: '100% Guaranteed' },
              { icon: '✓', text: 'Local Experts' }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between gap-1 sm:gap-2">
                <div className="w-5 h-5 sm:w-8 sm:h-8 bg-[var(--primary-color)] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs sm:text-base">{item.icon}</span>
                </div>
                <span className="text-xs sm:text-base">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      </ScaleIn>


      {/* Curved Bottom Right Design */}
      <div className="absolute bottom-0 right-0 w-full overflow-hidden">
        <svg
          className="absolute bottom-0 right-0 w-full h-32 sm:h-40 md:h-48"
          preserveAspectRatio="none"
          viewBox="0 0 1200 200"
          fill="none"
        >
          {/* Main curved shape */}
          <path
            d="M1200,200 L1200,100 C1000,50 800,150 600,100 C400,50 200,150 0,100 L0,200 Z"
            fill="white"
            opacity="0.9"
          />
          {/* Additional curved layer for depth */}
          <path
            d="M1200,200 L1200,120 C1050,80 850,170 650,120 C450,70 250,170 0,120 L0,200 Z"
            fill="white"
            opacity="0.6"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;