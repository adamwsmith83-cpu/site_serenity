import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ParallaxSection } from '../ui/ParallaxSection';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden z-10 mb-32 bg-transparent">
      <div className="w-full max-w-7xl mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto bg-linen-cream p-12 md:p-24 clip-diagonal shadow-2xl text-center flex flex-col items-center">
          <div className="mb-12">
            <span className="font-instrument italic text-4xl text-terracotta">Trusted Capital Partner</span>
            <div className="h-px w-24 bg-terracotta mt-2 mx-auto" />
          </div>
          <h1 className="text-6xl md:text-7xl font-playfair font-bold text-sage-forest mb-8 leading-tight max-w-5xl">
            Grounded financing for real estate investors.
          </h1>
          <p className="text-xl md:text-2xl font-dm-sans mb-12 text-sage-forest/80 max-w-3xl leading-relaxed">
            We provide a range of creative funding options for almost any type of deal.
          </p>
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            <Link to="/funding" className="bg-sage-forest text-linen-cream px-12 py-6 font-medium text-xl hover:bg-terracotta transition-all duration-500 shadow-xl">
              Fund Your Next Deal
            </Link>
            <a href="#programs" className="font-instrument italic text-2xl text-sage-forest hover:text-terracotta transition-colors flex items-center gap-2">
              Explore our programs <ArrowRight size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
