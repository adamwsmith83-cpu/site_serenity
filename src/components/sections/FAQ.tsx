import React from 'react';
import { ParallaxSection } from '../ui/ParallaxSection';

export function FAQ() {
  const faqs = [
    {
      q: "How much do you charge?",
      a: "We charge 10% up-front return for EMD (up to 30 days) and 1.5% for double close funding up to $1M to start. These numbers can change depending on duration of the deal and risks involved. Seller finance funding starts at 2.5% for the added work."
    },
    {
      q: "Are there any up-front fees?",
      a: "For EMD, we charge the entire fee up front to pay our team for underwriting and processing the deal. This is significantly lower than what most people charge when a deal closes, so if you're confident in your deal you'll save lots of capital."
    },
    {
      q: "What qualifies as double closing?",
      a: "A double closing is where two back-to-back property sales occur on the same day, involving the original seller, the wholesaler, and the end buyer. The investor typically uses the funds from the end buyer to complete the purchase from the original seller."
    },
    {
      q: "Can you fund EMD for end buyers?",
      a: "We can fund EMD for end buyers if you and the seller sign an addendum making the inspection period go through the close of escrow. All details will be sent when your deal is submitted."
    },
    {
      q: "What happens if the deal doesn't close?",
      a: "If an EMD deal does not close, we just have the EMD sent back. Your only cost would be the up front fee. For double closing and seller finance there would be no charge since we don't fund until closing."
    },
    {
      q: "Are you open to equity sharing instead of fees?",
      a: (
        <>
          Yes, we're open to creatively structure funding for the right deal. Contact us at{" "}
          <a href="mailto:loans@serenitylending.org" className="underline hover:text-dusty-rose transition-colors">
            loans@serenitylending.org
          </a>{" "}
          to talk more.
        </>
      )
    }
  ];

  return (
    <ParallaxSection className="bg-transparent text-linen-cream">
      <div id="faq" className="max-w-4xl mx-auto">
        <div className="mb-16">
          <span className="font-instrument italic text-2xl text-terracotta block mb-4">Common Questions</span>
          <h2 className="text-5xl font-playfair font-bold text-linen-cream">Clarity in the details.</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq, i) => (
            <div key={i} className="group bg-linen-cream p-8 clip-panel shadow-lg border-l border-terracotta/20">
              <h3 className="text-lg font-playfair font-bold mb-3 text-sage-forest group-hover:text-terracotta transition-colors">{faq.q}</h3>
              <p className="text-sage-forest/70 leading-relaxed text-sm">{faq.a}</p>
              <div className="h-px w-8 bg-terracotta/20 mt-4 group-hover:w-full transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </ParallaxSection>
  );
}
