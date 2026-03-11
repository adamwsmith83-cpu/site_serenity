import React, { useState, useEffect } from 'react';
import { Mail, Phone, CheckCircle2 } from 'lucide-react';
import { ParallaxSection } from '../components/ui/ParallaxSection';

export function Funding() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    loanType: 'fix-and-flip',
    closingDate: '',
    message: '',
    disclaimer: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.disclaimer) {
      return;
    }
    // Simulate API call
    setIsSubmitted(true);
    setFormData({
      name: '', email: '', phone: '', loanType: 'fix-and-flip', closingDate: '', message: '', disclaimer: false
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isSubmitted) {
    return (
      <div className="pt-20 min-h-screen bg-transparent flex items-center justify-center px-6">
        <div className="max-w-md w-full bg-black/40 backdrop-blur-xl p-12 text-center shadow-2xl border-t-4 border-terracotta clip-panel text-linen-cream">
          <div className="w-20 h-20 bg-terracotta text-linen-cream flex items-center justify-center rounded-full mx-auto mb-8">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="text-4xl font-playfair font-bold mb-4">Request Received</h2>
          <p className="text-linen-cream/70 mb-8 leading-relaxed">
            Thank you for choosing Serenity Lending. Our team is reviewing your deal details and will contact you at <strong>{formData.email}</strong> shortly.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="text-terracotta font-bold uppercase tracking-widest hover:text-linen-cream transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <ParallaxSection className="bg-transparent">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-20">
            <span className="font-instrument italic text-2xl text-terracotta block mb-4">Funding Request</span>
            <h1 className="text-6xl font-playfair font-bold text-linen-cream tracking-tight leading-none uppercase">Get Funded.</h1>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                title: "EMD Request",
                steps: [
                  "Submit your request with all information",
                  "Wait for request to be approved by our team",
                  "Fill out contracts and email title",
                  "We verify your title company",
                  "Get your deal funded!"
                ]
              },
              {
                title: "Double Closing Request",
                steps: [
                  "Submit your request with all information",
                  "Wait for request to be approved by our team",
                  "Have title reach out when HUD is ready",
                  "We send payoff to title",
                  "Final approval and funding!"
                ]
              },
              {
                title: "Stack Method Request",
                steps: [
                  "Submit your request with all information",
                  "Wait for request to be approved by our team",
                  "Follow the bank setup guide",
                  "We send POF to your lender",
                  "We handle the rest!"
                ]
              }
            ].map((req, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm p-10 clip-panel border-l border-terracotta/20 text-linen-cream">
                <h3 className="text-2xl font-playfair font-bold mb-6">{req.title}</h3>
                <ul className="space-y-4">
                  {req.steps.map((step, si) => (
                    <li key={si} className="flex items-start gap-3 text-sm text-linen-cream/70">
                      <div className="mt-1.5 w-1.5 h-1.5 bg-terracotta rounded-full flex-shrink-0" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-20 bg-white/5 backdrop-blur-md p-12 md:p-20 clip-diagonal">
            <div>
              <h2 className="text-5xl font-playfair font-bold mb-8 text-linen-cream tracking-tight">Deal Details</h2>
              <p className="text-linen-cream/70 mb-12 text-lg leading-relaxed font-dm-sans">
                Submit your request with clarity. Our team reviews with unhurried precision, providing certainty in your capital partner.
              </p>
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-terracotta text-linen-cream flex items-center justify-center rounded-full">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-terracotta font-bold mb-1">Email Us</div>
                    <a 
                      href="mailto:loans@serenitylending.org" 
                      className="text-xl font-playfair font-bold text-linen-cream hover:text-terracotta transition-colors"
                    >
                      loans@serenitylending.org
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-terracotta text-linen-cream flex items-center justify-center rounded-full">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-terracotta font-bold mb-1">Call Us</div>
                    <div className="text-xl font-playfair font-bold text-linen-cream">(555) 123-4567</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-xl p-10 shadow-2xl border-t-4 border-terracotta text-linen-cream">
              <h2 className="text-3xl font-playfair font-bold mb-8 border-b border-white/10 pb-4">Funding Request</h2>
              <form onSubmit={handleFormSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <label className="block text-xs font-bold uppercase tracking-widest text-terracotta mb-2">Full Name</label>
                    <input 
                      type="text" placeholder="Your Name" required
                      className="w-full border-b border-white/20 py-3 text-lg outline-none focus:border-terracotta transition-colors bg-transparent font-dm-sans text-linen-cream"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="relative group">
                    <label className="block text-xs font-bold uppercase tracking-widest text-terracotta mb-2">Email Address</label>
                    <input 
                      type="email" placeholder="email@example.com" required
                      className="w-full border-b border-white/20 py-3 text-lg outline-none focus:border-terracotta transition-colors bg-transparent font-dm-sans text-linen-cream"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-2xl font-playfair font-bold mb-6 border-b border-white/10 pb-2">Deal Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-terracotta mb-3">Deal Type</label>
                      <select 
                        className="w-full border-b border-white/20 py-3 text-sm outline-none focus:border-terracotta bg-transparent font-dm-sans text-linen-cream"
                        value={formData.loanType}
                        onChange={e => setFormData({...formData, loanType: e.target.value})}
                      >
                        <option value="fix-and-flip" className="bg-black text-linen-cream">Private Money Funds</option>
                        <option value="emd" className="bg-black text-linen-cream">Earnest Money Deposit (EMD)</option>
                        <option value="double-close-same" className="bg-black text-linen-cream">Double Closing (same title company)</option>
                        <option value="double-close-diff" className="bg-black text-linen-cream">Double Closing (different title company)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-terracotta mb-3">Closing Date</label>
                      <input 
                        type="date" required
                        className="w-full border-b border-white/20 py-3 text-sm outline-none focus:border-terracotta bg-transparent font-dm-sans text-linen-cream"
                        value={formData.closingDate}
                        onChange={e => setFormData({...formData, closingDate: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="mb-8">
                    <label className="block text-xs font-bold uppercase tracking-widest text-terracotta mb-3">Experience</label>
                    <select className="w-full border-b border-white/20 py-3 text-sm outline-none focus:border-terracotta bg-transparent font-dm-sans text-linen-cream">
                      <option className="bg-black text-linen-cream">No deals yet!</option>
                      <option className="bg-black text-linen-cream">1-3 deals closed</option>
                      <option className="bg-black text-linen-cream">4-6 deals closed</option>
                      <option className="bg-black text-linen-cream">7+ deals closed</option>
                    </select>
                  </div>

                  <textarea 
                    placeholder="Message / Deal Details" rows={4}
                    className="w-full border border-white/10 p-4 text-sm outline-none focus:border-terracotta bg-white/5 resize-none font-dm-sans text-linen-cream mb-6"
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                  ></textarea>

                  <div className="flex items-start gap-3 mb-8">
                    <input 
                      type="checkbox" 
                      id="disclaimer"
                      required
                      className="mt-1 accent-terracotta"
                      checked={formData.disclaimer}
                      onChange={e => setFormData({...formData, disclaimer: e.target.checked})}
                    />
                    <label htmlFor="disclaimer" className="text-xs text-linen-cream/70 leading-relaxed cursor-pointer">
                      I understand that submitting this request does not guarantee funding, and that I will abide by the agreed upon terms.
                    </label>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-terracotta font-bold mb-2">
                  <CheckCircle2 size={10} /> Secure Submission via Serenity Protocol
                </div>

                <button type="submit" className="w-full bg-terracotta text-linen-cream py-5 font-dm-sans font-bold uppercase tracking-widest hover:bg-white/20 transition-all duration-500">
                  Submit Funding Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </ParallaxSection>
    </div>
  );
}
