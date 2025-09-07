import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const FadeUp = ({ children, className = '', delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        y: 60
      }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0
      } : { 
        opacity: 0, 
        y: 60
      }}
      transition={{ 
        duration: 0.8, 
        delay: delay,
        ease: [0.4, 0, 0.2, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
