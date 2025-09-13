'use client';

import React from 'react';
import Counter from '@/components/Counter';

// ======================
// 🔹 Type Definitions (if Counter expects specific props)
// ======================

// If Counter component expects these props, it's good to reflect that
interface CounterProps {
  value: number;
  duration: number;
  suffix?: string;
}

// Optional: Define props (none used here, but for clarity)
interface LocationStatsProps {}

// ======================
// ✅ Component: Fully Explicit & Safe
// ======================

const LocationStats = (props: LocationStatsProps): React.ReactNode => {
  // Explicitly typed stat items (for scalability and clarity)
  const stats: Array<{
    value: number;
    suffix: string;
    label: string;
    duration: number;
  }> = [
    {
      value: 25,
      suffix: '+',
      label: 'Years of Experience',
      duration: 2,
    },
    {
      value: 1000,
      suffix: '+',
      label: 'Happy Customers',
      duration: 2,
    },
    {
      value: 100,
      suffix: '%',
      label: 'Satisfaction Guarantee',
      duration: 2,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
      {stats.map((stat, index) => (
        <div key={index} className="space-y-2">
          <div className="text-2xl sm:text-5xl font-bold text-green-600">
            <Counter 
              value={stat.value} 
              duration={stat.duration} 
              suffix={stat.suffix} 
            />
          </div>
          <div className="text-gray-700 font-medium">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default LocationStats;