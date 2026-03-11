import React from 'react';
import { ParallaxSection } from '../ui/ParallaxSection';

export function Programs() {
  const programs = [
    { 
      title: 'EMD / Double Close', 
      desc: 'Transactional funding for earnest money or back-to-back closings. Wholesale friendly.',
      features: ['Quick Funding', 'No credit check. No collateral.', 'Wholesale friendly']
    },
    { 
      title: 'Double Close', 
      desc: 'Short-term financing for purchase and renovation. Grounded in market reality.',
      features: ['Quick funding', 'No credit check, no collateral', 'Wholesale Friendly']
    },
    { 
      title: 'Other Creative Solutions', 
      desc: 'Flexible solutions for non-traditional investor deals. Subject-To and Seller Finance.',
      features: [
        <span key="ask">Need other funding? <a href="mailto:loans@serenitylending.org" className="underline hover:text-sage-forest transition-colors normal-case">Just ask!</a></span>
      ]
    }
  ];

  return (
    <ParallaxSection className="bg-transparent text-linen-cream">
      <div id="programs" className="w-full">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <span className="font-instrument italic text-2xl text-terracotta block mb-4">Our Programs</span>
            <h2 className="text-6xl font-playfair font-bold text-linen-cream leading-tight">
              Structured for your success.
            </h2>
          </div>
          <p className="text-linen-cream/60 max-w-xs text-sm leading-relaxed">
            We've funded deals like yours a hundred times. Our process is built on speed, transparency, and unhurried precision.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4">
          {programs.map((program, i) => (
            <div key={i} className="group relative bg-white/5 backdrop-blur-sm p-10 clip-panel transition-all duration-500 hover:-translate-y-2 border-l border-terracotta/20">
              <div className="text-5xl font-playfair font-bold text-terracotta/10 mb-6 group-hover:text-terracotta/20 transition-colors">0{i+1}</div>
              <h3 className="text-3xl font-playfair font-bold mb-4 text-linen-cream">{program.title}</h3>
              <p className="text-linen-cream/70 mb-8 text-sm leading-relaxed">{program.desc}</p>
              <ul className="space-y-3">
                {program.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-terracotta">
                    <div className="w-1.5 h-1.5 bg-terracotta rounded-full" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </ParallaxSection>
  );
}
