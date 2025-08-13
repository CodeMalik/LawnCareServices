'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface CounterProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

const Counter = ({ value, duration = 1.5, prefix = '', suffix = '' }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const end = value;
    const totalSteps = 60;
    const increment = end / totalSteps;
    const incrementTime = (duration * 1000) / totalSteps;
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(Math.round(end));
        clearInterval(timer);
      } else {
        setCount(Math.round(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.5 }
      } : {}}
    >
      {prefix}{count}{suffix}
    </motion.span>
  );
};

export default Counter;