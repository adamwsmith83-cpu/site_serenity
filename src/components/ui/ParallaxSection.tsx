import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

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

  // Smooth the scroll progress for this section
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Reduced range from [50, -50] to [25, -25]
  const y = useTransform(smoothProgress, [0, 1], [25, -25]);
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className={`relative min-h-screen flex items-center justify-center overflow-hidden z-10 mb-32 last:mb-0 ${className}`}>
      <motion.div style={{ y, opacity }} className="w-full max-w-7xl mx-auto px-4 py-12">
        {children}
      </motion.div>
    </section>
  );
}
