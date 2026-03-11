import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
}

export function ParallaxSection({ children, className = "" }: ParallaxSectionProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className={`relative min-h-screen flex items-center justify-center overflow-hidden z-10 mb-32 last:mb-0 ${className}`}>
      <motion.div style={{ y, opacity }} className="w-full max-w-7xl mx-auto px-4 py-12">
        {children}
      </motion.div>
    </section>
  );
}
