'use client';

import React from 'react';
import Counter from '@/components/Counter';

const LocationStats: React.FC = () => {
  return (
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
  );
};

export default LocationStats;