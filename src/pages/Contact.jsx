import React, { useState } from 'react';
import { MessageCircle, MapPin, Mail, Upload, CheckCircle2 } from 'lucide-react';

export default function Contact({ onOpenEnquiry }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    enquiryType: 'selling',
    category: 'old-coins',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#090a0f] text-[#e8e2d5]">
      {/* Hero Header */}
      <section className="relative py-24 bg-[#0c0e15] border-b border-[#c5a059]/20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-widest text-[#c5a059] font-bold">Connect With Our Vault</span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white mt-3 mb-6">
            Let’s Talk About Your <span className="text-gold-gradient">Piece of History.</span>
          </h1>
          <p className="text-base sm:text-xl text-[#a39e93] max-w-3xl mx-auto font-light leading-relaxed">
            Contact Antique Super Antique in Mumbai for coin evaluation, antique acquisition, or collection consultation.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Official Contact Details Cards */}
          <div className="space-y-6">
            <div className="glass-card p-8 rounded-lg border border-[#c5a059]/40 gold-glow">
              <span className="text-xs uppercase tracking-widest text-[#c5a059] font-bold">Official Business Details</span>
              <h2 className="text-2xl font-serif font-bold text-white mt-2 mb-6">
                Antique Super Antique
              </h2>

              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#181b26] border border-[#c5a059] flex items-center justify-center text-[#dfb76c] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-[#a39e93]">Location</h4>
                    <p className="text-white font-medium mt-1">Mumbai, Maharashtra – 400001, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#181b26] border border-[#c5a059] flex items-center justify-center text-[#dfb76c] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-[#a39e93]">Email Address</h4>
                    <a href="mailto:antiquesuper8319@gmail.com" className="text-[#e8e2d5] hover:text-[#dfb76c] font-medium block mt-1 transition-colors">
                      antiquesuper8319@gmail.com
                    </a>
                    <p className="text-xs text-[#a39e93] mt-0.5">Direct numismatic evaluation inbox</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#181b26] border border-[#c5a059] flex items-center justify-center text-[#25D366] shrink-0">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-[#a39e93]">WhatsApp Desk</h4>
                    <a
                      href="https://wa.me/919826035259?text=Hello%20Antique%20Super%20Antique,%20I%20want%20to%20enquire%20about%20coins/antiques."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 font-semibold hover:underline block mt-1"
                    >
                      Instant Photo Evaluation Desk
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Cards */}
            <div className="glass-card p-6 rounded-lg border border-[#c5a059]/30 space-y-4 text-xs">
              <h4 className="text-sm font-serif font-bold text-white uppercase tracking-wider border-b border-[#181b26] pb-2">
                Business Enquiries
              </h4>
              <div className="flex items-center justify-between">
                <span className="text-[#a39e93]">Selling Old Coins / Antiques:</span>
                <span className="text-[#dfb76c] font-semibold">Priority Review</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#a39e93]">Numismatic Acquisition:</span>
                <span className="text-white font-semibold">Private Gallery</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#a39e93]">Estate Evaluation:</span>
                <span className="text-white font-semibold">Confidential</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Evaluation Form */}
          <div className="lg:col-span-2 glass-card p-8 rounded-lg border border-[#c5a059]/40">
            <h3 className="text-2xl font-serif font-bold text-white mb-2">Send an Online Enquiry</h3>
            <p className="text-xs text-[#a39e93] mb-6">
              Fill out the form below or email us directly at <strong className="text-[#dfb76c]">antiquesuper8319@gmail.com</strong>.
            </p>

            {submitted ? (
              <div className="py-12 text-center">
                <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto mb-4" />
                <h4 className="text-2xl font-serif text-white mb-2">Enquiry Sent Successfully</h4>
                <p className="text-sm text-[#a39e93] max-w-md mx-auto mb-6">
                  Our team in Mumbai will review your message and contact you back.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn-gold">
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#a39e93] mb-1 font-semibold">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Vikramaditya Singh"
                      className="w-full bg-[#181b26] border border-[#c5a059]/30 rounded px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-[#dfb76c]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#a39e93] mb-1 font-semibold">Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Your mobile contact"
                      className="w-full bg-[#181b26] border border-[#c5a059]/30 rounded px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-[#dfb76c]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#a39e93] mb-1 font-semibold">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="yourname@domain.com"
                      className="w-full bg-[#181b26] border border-[#c5a059]/30 rounded px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-[#dfb76c]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#a39e93] mb-1 font-semibold">Enquiry Type</label>
                    <select
                      value={formData.enquiryType}
                      onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                      className="w-full bg-[#181b26] border border-[#c5a059]/30 rounded px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-[#dfb76c]"
                    >
                      <option value="selling">Selling Old Coins / Antiques</option>
                      <option value="buying">Looking to Purchase</option>
                      <option value="valuation">Item Valuation Request</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#a39e93] mb-1 font-semibold">Item Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-[#181b26] border border-[#c5a059]/30 rounded px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-[#dfb76c]"
                  >
                    <option value="old-coins">Rare / Old Coins</option>
                    <option value="currency">Vintage Currency</option>
                    <option value="antique-objects">Brassware & Antique Objects</option>
                    <option value="jewelry">Heritage Silver / Gold Jewelry</option>
                    <option value="watches">Vintage Watches & Timepieces</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#a39e93] mb-1 font-semibold">Message & Description</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details about your coins or antiques..."
                    className="w-full bg-[#181b26] border border-[#c5a059]/30 rounded px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-[#dfb76c]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#a39e93] mb-1 font-semibold">Attach Item Photos (Optional)</label>
                  <div className="border border-dashed border-[#c5a059]/40 bg-[#181b26] rounded p-3 text-center cursor-pointer">
                    <Upload className="w-5 h-5 text-[#c5a059] mx-auto mb-1" />
                    <span className="text-xs text-[#a39e93]">Select high-res photos</span>
                  </div>
                </div>

                <button type="submit" className="btn-gold py-3.5 px-8">
                  SEND ENQUIRY NOW
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Embedded Google Map Section Centered on Mumbai */}
      <section className="py-12 bg-[#0c0e15] border-t border-[#c5a059]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
          <span className="text-xs uppercase tracking-widest text-[#c5a059] font-bold">Interactive Location</span>
          <h2 className="text-3xl font-serif font-bold text-white mt-1">Mumbai, Maharashtra – 400001</h2>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg overflow-hidden border border-[#c5a059]/30 h-[380px] gold-glow">
            <iframe
              title="Antique Super Antique Mumbai Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160982357!2d72.74109995709657!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(1.2)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
