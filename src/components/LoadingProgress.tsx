// src/components/LoadingProgress.tsx
'use client';

import { useEffect, useState } from 'react';

const LoadingProgress = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading for demonstration (remove in production)
    const simulateLoading = () => {
      let currentProgress = 0;
      const interval = setInterval(() => {
        currentProgress += Math.random() * 15;
        if (currentProgress >= 100) {
          currentProgress = 100;
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 300);
        }
        setProgress(currentProgress);
      }, 200);
    };

    const handleActualLoad = () => {
      setProgress(100);
      setTimeout(() => setIsLoading(false), 300);
    };

    // For testing - always simulate loading
    simulateLoading();

    // For production - use actual page load
    // if (document.readyState === 'complete') {
    //   handleActualLoad();
    // } else {
    //   window.addEventListener('load', handleActualLoad);
    // }

    // Fallback
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => {
      window.removeEventListener('load', handleActualLoad);
      clearTimeout(timeoutId);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed top-0 left-0 w-full z-[100]">
      <div className="h-0.5 bg-gray-100 relative">
        <div 
          className="h-0.5 bg-gradient-to-r from-green-300 to-green-500 transition-all duration-200 ease-out shadow-lg"
          style={{ width: `${progress}%` }}
        />
        {/* Optional: Add a shimmer effect */}
        <div className="absolute top-0 h-full w-20 bg-white/30 animate-pulse" 
             style={{ 
               left: `${progress - 20}%`,
               transform: 'skewX(-20deg)'
             }} 
        />
      </div>
      {/* Optional: Remove this progress text for production */}
      <div className="absolute top-2 right-4 text-xs bg-black/70 text-white px-2 py-1 rounded">
        {Math.round(progress)}%
      </div>
    </div>
  );
};

export default LoadingProgress;