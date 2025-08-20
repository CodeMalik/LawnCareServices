import React from 'react';
import { ScaleIn } from './animations/Animate';
const Hero = ({Herotitle, Herodescription, HerobgImage}: {Herotitle: string, Herodescription: string, HerobgImage: string})  => {
  return (
    <section className="relative bg-gray-900 min-h-[70vh] sm:min-h-[110vh] 2xl:min-h-[70vh] pt-24 md:pt-28">
    
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={HerobgImage}
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
                    {Herotitle}
                  </h1>
                  {/* Subtitle */}
                  <p className="text-xs sm:text-md md:text-lg 2xl:text-xl text-white text-md sm:text-lg md:text-lg leading-relaxed w-full text-center px-6 sm:px-20">
                    {Herodescription}
                  </p>
                </div>
    
              </ScaleIn>
            </div>
          </section>
    
  );
};

export default Hero;