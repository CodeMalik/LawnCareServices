// src/components/animations/Animate.tsx
'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { Variants } from 'framer-motion';


type AnimationWrapperProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  viewportMargin?: string;
};

// Fade In
export function FadeIn({ 
  children, 
  className = '',
  delay = 0,
  duration = 1,
  once = true,
  viewportMargin = '-100px'
}: AnimationWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once, margin: viewportMargin }}
      transition={{ duration, delay }}
      className={`overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function ScaleIn({ 
    children, 
    className = '',
    delay = 0,
    duration = 1.2,  // Slightly longer duration for smoother effect
    scale = 0,       // Start from 0
    once = true,
    viewportMargin = '-100px'
  }: AnimationWrapperProps & { scale?: number }) {
    return (
      <motion.div
        initial={{ 
          scale, 
          opacity: 0,
          transformOrigin: 'center'  // Ensure it scales from the center
        }}
        whileInView={{ 
          scale: 1, 
          opacity: 1,
          transition: {
            duration,
            delay,
            ease: [0.16, 1, 0.3, 1], // Custom easing for smooth scaling
          }
        }}
        viewport={{ once, margin: viewportMargin }}
        className={`overflow-hidden ${className}`}
      >
        {children}
      </motion.div>
    );
  }
// Slide In From Bottom
export function SlideInBottom({ 
  children, 
  className = '',
  delay = 0,
  duration = 1,
  yOffset = 50,
  once = true,
  viewportMargin = '-100px'
}: AnimationWrapperProps & { yOffset?: number }) {
  return (
    <motion.div
      initial={{ y: yOffset, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once, margin: viewportMargin }}
      transition={{ duration, delay }}
      className={`overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
}

// Slide In From Top
export function SlideInTop({ 
  children, 
  className = '',
  delay = 0,
  duration = 1,
  yOffset = -50,
  once = true,
  viewportMargin = '-100px'
}: AnimationWrapperProps & { yOffset?: number }) {
  return (
    <motion.div
      initial={{ y: yOffset, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once, margin: viewportMargin }}
      transition={{ duration, delay }}
      className={`overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
}

// Slide In From Left
export function SlideInLeft({ 
  children, 
  className = '',
  delay = 0,
  duration = 1,
  xOffset = -50,
  once = true,
  viewportMargin = '-100px'
}: AnimationWrapperProps & { xOffset?: number }) {
  return (
    <motion.div
      initial={{ x: xOffset, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once, margin: viewportMargin }}
      transition={{ duration, delay }}
      className={`overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
}

// Slide In From Right
export function SlideInRight({ 
  children, 
  className = '',
  delay = 0,
  duration = 1,
  xOffset = 100,
  once = true,
  viewportMargin = '-100px'
}: AnimationWrapperProps & { xOffset?: number }) {
  return (
    <motion.div
      initial={{ x: xOffset, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once, margin: viewportMargin }}
      transition={{ duration, delay }}
      className={`overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
}

// Bounce In
export function BounceIn({ 
  children, 
  className = '',
  delay = 0,
  duration = 1,
  once = true,
  viewportMargin = '-100px'
}: AnimationWrapperProps) {
  return (
    <motion.div
      initial={{ scale: 0.7, opacity: 0 }}
      whileInView={{ 
        scale: 1, 
        opacity: 1,
        transition: {
          type: "spring",
          bounce: 0.4,
          duration
        }
      }}
      viewport={{ once, margin: viewportMargin }}
      transition={{ delay }}
      className={`overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
}

// Flip In
export function FlipIn({ 
  children, 
  className = '',
  delay = 0,
  duration = 1,
  once = true,
  viewportMargin = '-100px'
}: AnimationWrapperProps) {
  return (
    <motion.div
      initial={{ rotateX: -90, opacity: 0 }}
      whileInView={{ 
        rotateX: 0, 
        opacity: 1,
        transition: {
          duration,
          ease: [0.6, -0.05, 0.01, 0.99]
        }
      }}
      viewport={{ once, margin: viewportMargin }}
      transition={{ delay }}
      className={`overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
}

// Rotate In
export function RotateIn({ 
  children, 
  className = '',
  delay = 0,
  duration = 1,
  angle = -10,
  once = true,
  viewportMargin = '-100px'
}: AnimationWrapperProps & { angle?: number }) {
  return (
    <motion.div
      initial={{ rotate: angle, opacity: 0 }}
      whileInView={{ 
        rotate: 0, 
        opacity: 1,
        transition: {
          duration,
          ease: "easeOut"
        }
      }}
      viewport={{ once, margin: viewportMargin }}
      transition={{ delay }}
      className={`overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
}

// Staggered Container
export function StaggeredContainer({ 
  children, 
  className = '',
  staggerChildren = 0.1,
  delayChildren = 0.2,
  once = true,
  viewportMargin = '-100px'
}: {
  children: ReactNode;
  className?: string;
  staggerChildren?: number;
  delayChildren?: number;
  once?: boolean;
  viewportMargin?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: viewportMargin }}
      variants={{
        visible: {
          transition: {
            staggerChildren,
            delayChildren,
          },
        },
      }}
      className={`overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
}

// Staggered Item
export function StaggeredItem({ 
  children,
  className = ''
}: { 
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      className={`overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
}