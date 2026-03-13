import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ParallaxSection } from '../ui/ParallaxSection';

export function Hero() {
  return (
    <ParallaxSection className="bg-transparent">
      <div className="max-w-4xl bg-linen-cream p-12 md:p-20 clip-diagonal shadow-2xl">
        <div className="inline-block mb-12">
          <span className="font-instrument italic text-2xl text-terracotta">Trusted Capital Partner</span>
          <div className="h-px w-12 bg-terracotta mt-2" />
        </div>
        <h1 className="text-7xl font-playfair font-bold text-sage-forest mb-8 leading-none">
          Grounded financing for real estate investors.
        </h1>
        <p className="text-2xl font-dm-sans mb-12 text-sage-forest/80 max-w-2xl leading-relaxed">
          We provide a range of creative funding options for almost any type of deal.
        </p>
        <div className="flex gap-6 items-center">
          <Link to="/funding" className="bg-sage-forest text-linen-cream px-10 py-5 font-medium text-lg hover:bg-terracotta transition-all duration-500 shadow-xl">
            Fund Your Next Deal
          </Link>
          <a href="#programs" className="font-instrument italic text-xl text-sage-forest hover:text-terracotta transition-colors flex items-center gap-2">
            Explore our programs <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </ParallaxSection>
  );
}
