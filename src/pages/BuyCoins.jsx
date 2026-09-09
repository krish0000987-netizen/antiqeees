import React, { useState } from 'react';
import { Phone, MessageCircle, Upload, CheckCircle2, ShieldCheck, AlertCircle, FileText } from 'lucide-react';

export default function BuyCoins({ onOpenEnquiry }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    itemType: 'old-coin',
    approxAge: '',
    description: '',
    message: '',
  });

  const [files, setFiles] = useState([]);
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
          <span className="text-xs uppercase tracking-widest text-[#c5a059] font-bold">Coin Acquisition & Evaluation</span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white mt-3 mb-6">
            Looking to <span className="text-gold-gradient">Sell Your Old Coins?</span>
          </h1>
          <p className="text-base sm:text-xl text-[#a39e93] max-w-3xl mx-auto font-light leading-relaxed">
            Transparent, professional evaluation for ancient coins, British India rupees, and inherited coin collections in Indore.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="tel:+919826035259" className="btn-gold py-3.5 px-8">
              <Phone className="w-4 h-4" /> CALL +91 98260 35259
            </a>
            <a
              href="https://wa.me/919826035259?text=Hello%20Antique%20Super%20Antique,%20I%20want%20to%20evaluate/sell%20my%20old%20coins."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold py-3.5 px-8"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" /> WHATSAPP ENQUIRY
            </a>
          </div>
        </div>
      </section>

      {/* 4-Step Process Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#c5a059] font-bold">Step-By-Step</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-2">
            The 4-Step Coin Valuation Process
          </h2>
          <div className="w-24 h-0.5 bg-[#c5a059] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="glass-card p-6 rounded-lg border border-[#c5a059]/30">
            <span className="text-4xl font-serif font-bold text-[#c5a059] block mb-2">01</span>
            <h3 className="text-xl font-serif font-bold text-white mb-2">Share Details</h3>
            <p className="text-xs text-[#a39e93] leading-relaxed">
              Contact us and provide information about your coin, including clear photos of both front and reverse sides.
            </p>
          </div>

          <div className="glass-card p-6 rounded-lg border border-[#c5a059]/30">
            <span className="text-4xl font-serif font-bold text-[#c5a059] block mb-2">02</span>
            <h3 className="text-xl font-serif font-bold text-white mb-2">Examination</h3>
            <p className="text-xs text-[#a39e93] leading-relaxed">
              The item is reviewed for relevant physical characteristics, mint marks, metallic purity, and condition.
            </p>
          </div>

          <div className="glass-card p-6 rounded-lg border border-[#c5a059]/30">
            <span className="text-4xl font-serif font-bold text-[#c5a059] block mb-2">03</span>
            <h3 className="text-xl font-serif font-bold text-white mb-2">Evaluation</h3>
            <p className="text-xs text-[#a39e93] leading-relaxed">
              An appropriate assessment is made based on available historical information and current collector market considerations.
            </p>
          </div>

          <div className="glass-card p-6 rounded-lg border border-[#c5a059]/30">
            <span className="text-4xl font-serif font-bold text-[#c5a059] block mb-2">04</span>
            <h3 className="text-xl font-serif font-bold text-white mb-2">Complete Transaction</h3>
            <p className="text-xs text-[#a39e93] leading-relaxed">
              If both parties agree on terms, proceed securely with the acquisition transaction.
            </p>
          </div>
        </div>
      </section>

      {/* Embedded Evaluation Enquiry Form Section */}
      <section className="py-20 bg-[#0d0f17] border-t border-[#c5a059]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-[#c5a059] font-bold">Online Submission</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-1">
              Submit Coin Details for Evaluation
            </h2>
          </div>

          <div className="glass-card p-8 rounded-lg border border-[#c5a059]/40 gold-glow">
            {submitted ? (
              <div className="py-10 text-center">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-2xl font-serif text-white mb-2">Submission Complete</h3>
                <p className="text-sm text-[#a39e93] mb-6">
                  Thank you! Our numismatic team will analyze your coin photos and call you back shortly.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn-gold">
                  SUBMIT ANOTHER ITEM
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#a39e93] mb-1 font-semibold">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#181b26] border border-[#c5a059]/30 rounded px-3.5 py-2.5 text-white text-sm"
                      placeholder="e.g. Anand Verma"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#a39e93] mb-1 font-semibold">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#181b26] border border-[#c5a059]/30 rounded px-3.5 py-2.5 text-white text-sm"
                      placeholder="+91 98260 35259"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#a39e93] mb-1 font-semibold">Item Type</label>
                    <select
                      value={formData.itemType}
                      onChange={(e) => setFormData({ ...formData, itemType: e.target.value })}
                      className="w-full bg-[#181b26] border border-[#c5a059]/30 rounded px-3.5 py-2.5 text-white text-sm"
                    >
                      <option value="old-coin">Ancient / Old Coin</option>
                      <option value="silver-rupee">Victorian / British Silver Rupee</option>
                      <option value="mughal">Mughal / Princely State Coin</option>
                      <option value="paper-note">Vintage Paper Currency</option>
                      <option value="collection">Complete Inherited Collection</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#a39e93] mb-1 font-semibold">Approximate Age / Year</label>
                    <input
                      type="text"
                      value={formData.approxAge}
                      onChange={(e) => setFormData({ ...formData, approxAge: e.target.value })}
                      className="w-full bg-[#181b26] border border-[#c5a059]/30 rounded px-3.5 py-2.5 text-white text-sm"
                      placeholder="e.g. 1890, 1940s, Ancient"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#a39e93] mb-1 font-semibold">Description & Markings</label>
                  <textarea
                    rows={3}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full bg-[#181b26] border border-[#c5a059]/30 rounded px-3.5 py-2.5 text-white text-sm"
                    placeholder="Describe markings, metal type, where you acquired it..."
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#a39e93] mb-1 font-semibold">Upload Coin Photos (Obverse & Reverse)</label>
                  <div className="border-2 border-dashed border-[#c5a059]/40 bg-[#181b26] rounded p-4 text-center cursor-pointer">
                    <Upload className="w-6 h-6 text-[#c5a059] mx-auto mb-1" />
                    <span className="text-xs text-[#e8e2d5]">Attach photos of both sides</span>
                  </div>
                </div>

                {/* Mandated Disclaimer */}
                <div className="p-3 bg-[#090a0f] border border-[#c5a059]/20 rounded text-[11px] text-[#a39e93] flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                  <span>
                    <strong>Disclaimer:</strong> Final evaluation depends on examination, authenticity, condition, rarity, provenance and other relevant factors.
                  </span>
                </div>

                <button type="submit" className="btn-gold w-full justify-center py-3.5">
                  SUBMIT EVALUATION REQUEST
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
