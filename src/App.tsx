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
  
  // Subtle parallax for the background
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  const navLinks = [
    { name: 'Programs', href: '#programs' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <BrowserRouter>
      <div className="bg-[#0a0a0a] text-sage-forest font-dm-sans relative min-h-screen">
        {/* Paper Texture Overlays */}
        <div className="paper-texture" />
        <div className="paper-overlay" />

        {/* Parallax Background Layer */}
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.div 
            style={{ 
              y: backgroundY, 
              willChange: 'transform',
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden'
            }}
            className="absolute -top-[10%] left-0 w-full h-[120%]"
          >
            {/* Base PNG Layer */}
            <img 
              src="/assets/background.png" 
              alt="" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2070&auto=format&fit=crop";
              }}
            />
          </motion.div>
          
          {/* Optional Overlay SVG Layer */}
          <motion.div 
            style={{ 
              y: backgroundY, 
              willChange: 'transform',
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden'
            }}
            className="absolute -top-[10%] left-0 w-full h-[120%]"
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
