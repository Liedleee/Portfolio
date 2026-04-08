'use client';
import React from 'react';
import { motion, useInView } from 'framer-motion';

type ScrollWrapperProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  once?: boolean;
};

function ScrollWrapper({
  children,
  className,
  delay = 0,
  duration = 0.6,
  direction = 'up',
  distance = 50,
  once = true,
}: ScrollWrapperProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once, margin: '-100px' });

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: distance, x: 0 };
      case 'down':
        return { y: -distance, x: 0 };
      case 'left':
        return { y: 0, x: distance };
      case 'right':
        return { y: 0, x: -distance };
      default:
        return { y: distance, x: 0 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...getInitialPosition() }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, ...getInitialPosition() }}
      transition={{ delay, duration, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default ScrollWrapper;