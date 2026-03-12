import React from 'react';
import { ParallaxSection } from '../ui/ParallaxSection';

export function Pricing() {
  const pricingOptions = [
    { 
      title: 'EMD Funding', 
      fee: '10%', 
      desc: 'Flat up-front return on all EMD deals. Minimum return is $1200.' 
    },
    { 
      title: 'Double Close', 
      fee: '1.5%', 
      desc: 'Flat fee on all double closings with at least 1 week notice. Minimum return $1200.' 
    }
  ];

  return (
    <ParallaxSection className="bg-transparent text-linen-cream">
      <div id="pricing" className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <span className="font-instrument italic text-2xl text-terracotta block mb-4">Pricing Structure</span>
          <h2 className="text-6xl font-playfair font-bold text-linen-cream mb-6">Transparent Capital.</h2>
          <div className="h-px w-24 bg-terracotta mx-auto" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-3xl mx-auto">
          {pricingOptions.map((p, i) => (
            <div key={i} className="relative">
              <div className="text-7xl font-playfair font-bold text-terracotta/5 absolute -top-10 -left-4">0{i+1}</div>
              <h3 className="text-2xl font-playfair font-bold mb-4 text-linen-cream">{p.title}</h3>
              <div className="text-4xl font-playfair font-bold text-terracotta mb-6">
                <span className="text-xs uppercase tracking-widest block mb-1 opacity-60">Starting from</span>
                {p.fee}
              </div>
              <p className="text-linen-cream/70 text-sm leading-relaxed mb-8">{p.desc}</p>
              <div className="h-px w-full bg-terracotta/10" />
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-linen-cream/40 text-xs italic">* all costs subject to change according to your specific deal.</p>
        </div>
      </div>
    </ParallaxSection>
  );
}
