import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const BlurIn = ({ children, className = '', delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        filter: 'blur(20px)' 
      }}
      animate={isInView ? { 
        opacity: 1, 
        filter: 'blur(0px)' 
      } : { 
        opacity: 0, 
        filter: 'blur(20px)' 
      }}
      transition={{ 
        duration: 1.2, 
        delay: delay,
        ease: [0.4, 0, 0.2, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
