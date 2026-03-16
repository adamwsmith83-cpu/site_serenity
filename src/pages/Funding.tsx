import React, { useState, useEffect } from 'react';
import { Mail, CheckCircle2, Upload } from 'lucide-react';
import { ParallaxSection } from '../components/ui/ParallaxSection';

export function Funding() {
  const [formData, setFormData] = useState({
    fundingNeeded: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    businessName: '',
    address: '',
    streetAddress: '',
    city: '',
    state: '',
    postalCode: '',
    amountNeeded: '',
    closingDate: '',
    titleCompany: '',
    titleCompanyEmail: '',
    escrowOfficerPhone: '',
    howDidYouHear: '',
    referralSource: 'Direct',
    disclaimer: false
  });

  const [files, setFiles] = useState<{
    abContract: File | null;
    bcContract: File | null;
    addendums: File | null;
  }>({
    abContract: null,
    bcContract: null,
    addendums: null
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof typeof files) => {
    if (e.target.files && e.target.files[0]) {
      setFiles(prev => ({ ...prev, [field]: e.target.files![0] }));
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.disclaimer) {
      return;
    }
    
    setIsSubmitting(true);
    setError(null);

    // Manual validation for required files
    if (formData.fundingNeeded !== 'Fix and Flip' && !files.bcContract) {
      setError('B-C Contract is required for this funding type.');
      setIsSubmitting(false);
      return;
    }
    if (!files.abContract) {
      setError('A-B Contract is required.');
      setIsSubmitting(false);
      return;
    }

    try {
      const formspreeId = import.meta.env.VITE_FORMSPREE_ID || 'mgonkapb';
      
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value.toString());
      });

      if (files.abContract) data.append('abContract', files.abContract);
      if (files.bcContract) data.append('bcContract', files.bcContract);
      if (files.addendums) data.append('addendums', files.addendums);

      data.append('_subject', `New Funding Request from ${formData.firstName} ${formData.lastName}`);
      
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: 'POST',
          body: data,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Failed to submit form. Please try again later.');
        }

        setIsSubmitted(true);
        setFormData({
          fundingNeeded: '', firstName: '', lastName: '', email: '', phone: '', businessName: '', address: '', streetAddress: '', city: '', state: '', postalCode: '', amountNeeded: '', closingDate: '', titleCompany: '', titleCompanyEmail: '', escrowOfficerPhone: '', howDidYouHear: '', referralSource: 'Direct', disclaimer: false
        });
        setFiles({ abContract: null, bcContract: null, addendums: null });
      } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isSubmitted) {
    return (
      <div className="pt-20 min-h-screen bg-transparent flex items-center justify-center px-6">
        <div className="max-w-md w-full bg-black/40 backdrop-blur-xl p-12 text-center shadow-2xl border-t-4 border-sage-forest clip-panel text-linen-cream">
          <div className="w-20 h-20 bg-sage-forest text-linen-cream flex items-center justify-center rounded-full mx-auto mb-8">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="text-4xl font-playfair font-bold mb-4">Request Received</h2>
          <p className="text-linen-cream/70 mb-8 leading-relaxed">
            Thank you for choosing Serenity Lending. Our team is reviewing your deal details and will contact you at <strong>{formData.email}</strong> shortly.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="text-sage-forest font-bold uppercase tracking-widest hover:text-linen-cream transition-colors"
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
              <div key={i} className="bg-linen-cream p-10 clip-panel border-l border-terracotta/20 text-sage-forest shadow-xl">
                <h3 className="text-2xl font-playfair font-bold mb-6">{req.title}</h3>
                <ul className="space-y-4">
                  {req.steps.map((step, si) => (
                    <li key={si} className="flex items-start gap-3 text-sm text-sage-forest/70">
                      <div className="mt-1.5 w-1.5 h-1.5 bg-terracotta rounded-full flex-shrink-0" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-20 bg-linen-cream p-12 md:p-20 clip-diagonal shadow-2xl">
            <div>
              <h2 className="text-5xl font-playfair font-bold mb-8 text-sage-forest tracking-tight">Deal Details</h2>
              <p className="text-sage-forest/70 mb-12 text-lg leading-relaxed font-dm-sans">
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
                      className="text-xl font-playfair font-bold text-sage-forest hover:text-terracotta transition-colors"
                    >
                      loans@serenitylending.org
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/40 backdrop-blur-xl p-10 shadow-2xl border-t-4 border-terracotta text-sage-forest">
              <h2 className="text-3xl font-playfair font-bold mb-8 border-b border-black/10 pb-4">Funding Request</h2>
              <form onSubmit={handleFormSubmit} className="space-y-8">
                <div className="relative group">
                  <label className="block text-xs font-bold uppercase tracking-widest text-terracotta mb-2">
                    Funding Needed <span className="text-red-500">*</span>
                  </label>
                  <select 
                    className="w-full border-b border-black/20 py-3 text-sm outline-none focus:border-terracotta bg-transparent font-dm-sans text-sage-forest"
                    value={formData.fundingNeeded}
                    onChange={e => setFormData({...formData, fundingNeeded: e.target.value})}
                    required
                  >
                    <option value="" className="bg-linen-cream text-sage-forest">Select an option</option>
                    <option value="EMD" className="bg-linen-cream text-sage-forest">EMD</option>
                    <option value="Double-Close" className="bg-linen-cream text-sage-forest">Double-Close</option>
                    <option value="Fix and Flip" className="bg-linen-cream text-sage-forest">Fix and Flip</option>
                    <option value="Other" className="bg-linen-cream text-sage-forest">Other</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <label className="block text-xs font-bold uppercase tracking-widest text-terracotta mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" placeholder="First Name" required
                      className="w-full border-b border-black/20 py-3 text-lg outline-none focus:border-terracotta transition-colors bg-transparent font-dm-sans text-sage-forest"
                      value={formData.firstName}
                      onChange={e => setFormData({...formData, firstName: e.target.value})}
                    />
                  </div>
                  <div className="relative group">
                    <label className="block text-xs font-bold uppercase tracking-widest text-terracotta mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" placeholder="Last Name" required
                      className="w-full border-b border-black/20 py-3 text-lg outline-none focus:border-terracotta transition-colors bg-transparent font-dm-sans text-sage-forest"
                      value={formData.lastName}
                      onChange={e => setFormData({...formData, lastName: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <label className="block text-xs font-bold uppercase tracking-widest text-terracotta mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="email" placeholder="email@example.com" required
                      className="w-full border-b border-black/20 py-3 text-lg outline-none focus:border-terracotta transition-colors bg-transparent font-dm-sans text-sage-forest"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className="relative group">
                    <label className="block text-xs font-bold uppercase tracking-widest text-terracotta mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="tel" placeholder="(555) 000-0000" required
                      className="w-full border-b border-black/20 py-3 text-lg outline-none focus:border-terracotta transition-colors bg-transparent font-dm-sans text-sage-forest"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div className="relative group">
                  <label className="block text-xs font-bold uppercase tracking-widest text-terracotta mb-2">Business Name (If Applicable)</label>
                  <input 
                    type="text" placeholder="Your Company LLC"
                    className="w-full border-b border-black/20 py-3 text-lg outline-none focus:border-terracotta transition-colors bg-transparent font-dm-sans text-sage-forest"
                    value={formData.businessName}
                    onChange={e => setFormData({...formData, businessName: e.target.value})}
                  />
                </div>

                <div className="mt-12">
                  <h3 className="text-2xl font-playfair font-bold mb-6 border-b border-black/10 pb-2">Property Information</h3>
                  <div className="space-y-8">
                    <div className="relative group">
                      <label className="block text-xs font-bold uppercase tracking-widest text-terracotta mb-2">
                        Street Address <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" placeholder="123 Main St" required
                        className="w-full border-b border-black/20 py-3 text-lg outline-none focus:border-terracotta transition-colors bg-transparent font-dm-sans text-sage-forest"
                        value={formData.streetAddress}
                        onChange={e => setFormData({...formData, streetAddress: e.target.value})}
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="relative group">
                        <label className="block text-xs font-bold uppercase tracking-widest text-terracotta mb-2">
                          City <span className="text-red-500">*</span>
                        </label>
                        <input 
                          type="text" placeholder="City" required
                          className="w-full border-b border-black/20 py-3 text-lg outline-none focus:border-terracotta transition-colors bg-transparent font-dm-sans text-sage-forest"
                          value={formData.city}
                          onChange={e => setFormData({...formData, city: e.target.value})}
                        />
                      </div>
                      <div className="relative group">
                        <label className="block text-xs font-bold uppercase tracking-widest text-terracotta mb-2">
                          State <span className="text-red-500">*</span>
                        </label>
                        <input 
                          type="text" placeholder="State" required
                          className="w-full border-b border-black/20 py-3 text-lg outline-none focus:border-terracotta transition-colors bg-transparent font-dm-sans text-sage-forest"
                          value={formData.state}
                          onChange={e => setFormData({...formData, state: e.target.value})}
                        />
                      </div>
                      <div className="relative group">
                        <label className="block text-xs font-bold uppercase tracking-widest text-terracotta mb-2">
                          Postal Code <span className="text-red-500">*</span>
                        </label>
                        <input 
                          type="text" placeholder="Zip" required
                          className="w-full border-b border-black/20 py-3 text-lg outline-none focus:border-terracotta transition-colors bg-transparent font-dm-sans text-sage-forest"
                          value={formData.postalCode}
                          onChange={e => setFormData({...formData, postalCode: e.target.value})}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-2xl font-playfair font-bold mb-6 border-b border-black/10 pb-2">Deal Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-terracotta mb-3">
                        Amount Needed <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" placeholder="$0.00" required
                        className="w-full border-b border-black/20 py-3 text-sm outline-none focus:border-terracotta bg-transparent font-dm-sans text-sage-forest"
                        value={formData.amountNeeded}
                        onChange={e => setFormData({...formData, amountNeeded: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-terracotta mb-3">
                        Closing Date <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="date" required
                        className="w-full border-b border-black/20 py-3 text-sm outline-none focus:border-terracotta bg-transparent font-dm-sans text-sage-forest"
                        value={formData.closingDate}
                        onChange={e => setFormData({...formData, closingDate: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-8 mb-8">
                    <div className="relative group">
                      <label className="block text-xs font-bold uppercase tracking-widest text-terracotta mb-2">
                        Title Company <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" placeholder="Company Name" required
                        className="w-full border-b border-black/20 py-3 text-lg outline-none focus:border-terracotta transition-colors bg-transparent font-dm-sans text-sage-forest"
                        value={formData.titleCompany}
                        onChange={e => setFormData({...formData, titleCompany: e.target.value})}
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="relative group">
                        <label className="block text-xs font-bold uppercase tracking-widest text-terracotta mb-2">
                          Title Company Email <span className="text-red-500">*</span>
                        </label>
                        <input 
                          type="email" placeholder="title@example.com" required
                          className="w-full border-b border-black/20 py-3 text-lg outline-none focus:border-terracotta transition-colors bg-transparent font-dm-sans text-sage-forest"
                          value={formData.titleCompanyEmail}
                          onChange={e => setFormData({...formData, titleCompanyEmail: e.target.value})}
                        />
                      </div>
                      <div className="relative group">
                        <label className="block text-xs font-bold uppercase tracking-widest text-terracotta mb-2">
                          Escrow Officer Phone <span className="text-red-500">*</span>
                        </label>
                        <input 
                          type="tel" placeholder="(555) 000-0000" required
                          className="w-full border-b border-black/20 py-3 text-lg outline-none focus:border-terracotta transition-colors bg-transparent font-dm-sans text-sage-forest"
                          value={formData.escrowOfficerPhone}
                          onChange={e => setFormData({...formData, escrowOfficerPhone: e.target.value})}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6 mb-12">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-terracotta mb-4">Required Documents</h4>
                    
                    <div className="space-y-4">
                      {[
                        { label: 'A-B Contract', field: 'abContract', required: true },
                        { label: 'B-C Contract', field: 'bcContract', required: formData.fundingNeeded !== 'Fix and Flip' },
                        { label: 'Addendums (If Any)', field: 'addendums', required: false }
                      ].map((file) => (
                        <div key={file.field} className="relative">
                          <label className="block text-[10px] uppercase tracking-widest text-sage-forest/50 mb-2">
                            {file.label} {file.required && <span className="text-red-500">*</span>}
                          </label>
                          <div className="flex items-center gap-4 p-4 border border-black/10 bg-black/5 rounded-lg group hover:border-terracotta transition-colors cursor-pointer relative">
                            <Upload size={18} className="text-terracotta" />
                            <span className="text-xs font-dm-sans text-sage-forest/70 truncate">
                              {files[file.field as keyof typeof files]?.name || 'Click to upload file'}
                            </span>
                            <input 
                              type="file" 
                              className="absolute inset-0 opacity-0 cursor-pointer"
                              required={file.required}
                              onChange={(e) => handleFileChange(e, file.field as keyof typeof files)}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <label className="block text-xs font-bold uppercase tracking-widest text-terracotta mb-3">
                      How did you hear about us? <span className="text-red-500">*</span>
                    </label>
                    <select 
                      className="w-full border-b border-black/20 py-3 text-sm outline-none focus:border-terracotta bg-transparent font-dm-sans text-sage-forest"
                      value={formData.howDidYouHear}
                      onChange={e => setFormData({...formData, howDidYouHear: e.target.value})}
                      required
                    >
                      <option value="" className="bg-linen-cream text-sage-forest">Select an option</option>
                      <option value="Google" className="bg-linen-cream text-sage-forest">Google Search</option>
                      <option value="Social Media" className="bg-linen-cream text-sage-forest">Social Media</option>
                      <option value="Referral" className="bg-linen-cream text-sage-forest">Referral</option>
                      <option value="Other" className="bg-linen-cream text-sage-forest">Other</option>
                    </select>
                  </div>

                  <input type="hidden" name="referralSource" value={formData.referralSource} />

                  <div className="flex items-start gap-3 mb-8">
                    <input 
                      type="checkbox" 
                      id="disclaimer"
                      required
                      className="mt-1 accent-terracotta"
                      checked={formData.disclaimer}
                      onChange={e => setFormData({...formData, disclaimer: e.target.checked})}
                    />
                    <label htmlFor="disclaimer" className="text-xs text-sage-forest/70 leading-relaxed cursor-pointer">
                      I understand that submitting this request does not guarantee funding, and that I will abide by the agreed upon terms.
                    </label>
                  </div>
                </div>

                {error && (
                  <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 text-xs mb-6 font-dm-sans">
                    {error}
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-sage-forest text-linen-cream py-5 font-dm-sans font-bold uppercase tracking-widest hover:bg-terracotta transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Processing Request...' : 'Submit Funding Request'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </ParallaxSection>
    </div>
  );
}
