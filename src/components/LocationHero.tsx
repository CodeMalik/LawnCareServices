'use client';

import React from 'react';
import { ScaleIn } from '@/components/animations/Animate';

interface Hero {
  title: string;
  subtitle: string;
  image: string;
}

const LocationHero: React.FC<{ hero: Hero }> = ({ hero }) => {
  return (
    <ScaleIn viewportMargin="0px">
      <div className="w-full px-6 pb-16 sm:pb-45 2xl:px-32 text-center">
        <h1 className="text-lg sm:text-2xl md:text-3xl 2xl:text-5xl font-bold text-white leading-tight mb-6">
          {hero.title}
        </h1>
        <p className="text-xs sm:text-md md:text-lg 2xl:text-xl text-white text-md sm:text-lg md:text-lg leading-relaxed w-full text-center px-6 sm:px-20">
          {hero.subtitle}
        </p>
      </div>
    </ScaleIn>
  );
};

export default LocationHero;