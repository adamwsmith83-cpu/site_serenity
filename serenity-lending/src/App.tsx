/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Funding } from './pages/Funding';

export default function App() {
  const navLinks = [
    { name: 'Programs', href: '#programs' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <BrowserRouter>
      <div className="bg-black text-sage-forest font-dm-sans relative">
        {/* Fixed Background Layered Image (PNG + SVG Overlay) */}
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Base PNG Layer */}
          <img 
            src="/assets/background.png" 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale"
            referrerPolicy="no-referrer"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop";
            }}
          />
          
          {/* SVG Icon Watermark Layer */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
            <img 
              src="/assets/serenity_icon.svg" 
              alt="" 
              className="w-[800px] h-[800px] rotate-12"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Optional Overlay SVG Layer */}
          <img 
            src="/assets/overlay.svg" 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
            referrerPolicy="no-referrer"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />

          {/* Gradient Overlay for Depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />
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
