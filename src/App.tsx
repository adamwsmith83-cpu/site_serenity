/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { Navigation } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Funding } from './pages/Funding';

export default function App() {
  const { scrollYProgress } = useScroll();
  
  // The background is 120% of viewport height. 
  // We move it up by the "extra" 20% over the entire scroll duration.
  // This ensures it never scrolls past its own bounds.
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "-16.66%"]);
  const watermarkY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  const navLinks = [
    { name: 'Programs', href: '#programs' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <BrowserRouter>
      <div className="bg-[#0a0a0a] text-sage-forest font-dm-sans relative min-h-screen">
        {/* Parallax Background Layer */}
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.div 
            style={{ y: backgroundY }}
            className="absolute inset-0 w-full h-[150%]"
          >
            {/* Base PNG Layer */}
            <img 
              src="/assets/background.png" 
              alt="" 
              className="w-full h-full object-cover opacity-60 grayscale"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop";
              }}
            />
          </motion.div>
          
          {/* SVG Icon Watermark Layer */}
          <motion.div 
            style={{ y: watermarkY }}
            className="absolute inset-0 flex items-center justify-center opacity-[0.08]"
          >
            <img 
              src="/assets/serenity_icon.svg" 
              alt="" 
              className="w-[800px] h-[800px] rotate-12"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Optional Overlay SVG Layer */}
          <motion.div 
            style={{ y: backgroundY }}
            className="absolute inset-0 w-full h-[150%]"
          >
            <img 
              src="/assets/overlay.svg" 
              alt="" 
              className="w-full h-full object-cover opacity-30 pointer-events-none"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </motion.div>
        </div>

        <Navigation navLinks={navLinks} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/funding" element={<Funding />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
