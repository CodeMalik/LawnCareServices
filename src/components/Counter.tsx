'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

// ✅ Define props interface
export interface CounterProps {
    value: number;
    duration?: number;
    prefix?: string;
    suffix?: string;
}

// ✅ Main component — fully typed
const Counter: React.FC<CounterProps> = ({
    value,
    duration = 1.5,
    prefix = '',
    suffix = '',
}) => {
    // ✅ State for current count
    const [count, setCount] = useState<number>(0);

    // ✅ Ref for intersection observer
    const ref = useRef<HTMLSpanElement>(null);

    // ✅ Track if element is in viewport
    const isInView = useInView(ref, {
        once: true,
        margin: '0px 0px -50px 0px',
    });

    // ✅ Effect to animate counter when in view
    useEffect(() => {
        // Early return if not in view
        if (!isInView) return;

        // ✅ Declare all animation variables with explicit types
        const start: number = 0;
        const end: number = value;
        const totalSteps: number = 60;
        const increment: number = end / totalSteps;
        const incrementTime: number = (duration * 1000) / totalSteps;

        // ✅ Set up interval with typed handle
        const timer: NodeJS.Timeout = setInterval(() => {
            const newCount: number = start + increment;

            if (newCount >= end) {
                setCount(Math.round(end));
                clearInterval(timer);
            } else {
                setCount(Math.round(newCount));
            }
        }, incrementTime);

        // ✅ Cleanup function — typed as () => void
        return () => {
            clearInterval(timer);
        };
    }, [isInView, value, duration]);

    // ✅ Define motion variants for better reusability (optional but clean)
    const spanVariants: Variants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <motion.span
            ref={ref}
            variants={spanVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            aria-live="polite"
            aria-label={`${prefix}${value}${suffix}`}
        >
            {prefix}
            {count}
            {suffix}
        </motion.span>
    );
};

export default Counter;