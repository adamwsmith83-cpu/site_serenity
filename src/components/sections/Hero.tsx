import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ParallaxSection } from '../ui/ParallaxSection';

export function Hero() {
  return (
    <ParallaxSection className="bg-transparent text-linen-cream">
      <div className="max-w-4xl">
        <div className="inline-block mb-12">
          <span className="font-instrument italic text-2xl text-terracotta">Trusted Capital Partner</span>
          <div className="h-px w-12 bg-terracotta mt-2" />
        </div>
        <p className="text-2xl font-dm-sans mb-12 text-linen-cream/80 max-w-2xl leading-relaxed">
          Grounded financing for real estate investors and wholesalers. 
          We provide a range of creative funding options for almost any type of deal.
        </p>
        <div className="flex gap-6 items-center">
          <Link to="/funding" className="bg-sage-forest text-linen-cream px-10 py-5 font-medium text-lg hover:bg-terracotta transition-all duration-500 shadow-xl">
            Fund Your Next Deal
          </Link>
          <a href="#programs" className="font-instrument italic text-xl text-linen-cream hover:text-terracotta transition-colors flex items-center gap-2">
            Explore our programs <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </ParallaxSection>
  );
}
