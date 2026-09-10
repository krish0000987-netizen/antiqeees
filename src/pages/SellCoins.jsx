import React from 'react';
import { AlertTriangle, CheckCircle2, XCircle, Mail } from 'lucide-react';

export default function SellCoins({ onOpenEnquiry }) {
  const sellerTips = [
    {
      title: "Don't Clean Old Coins Aggressively",
      status: 'critical',
      desc: 'Harsh chemicals or metallic polish scrub away the natural historical patina, permanently destroying numismatic value.',
    },
    {
      title: 'Preserve Natural Condition & Patina',
      status: 'do',
      desc: 'Keep coins in their original state. Natural toning and aged patina add character and verify authenticity.',
    },
    {
      title: 'Photograph Both Obverse & Reverse',
      status: 'do',
      desc: 'Take clear, high-resolution photographs of both front and reverse sides under natural daylight.',
    },
    {
      title: 'Gather Documentation & History',
      status: 'do',
      desc: 'If you have receipts, family provenance records, or original box packaging, keep them alongside the coin.',
    },
  ];

  return (
    <div className="bg-[#090a0f] text-[#e8e2d5]">
      {/* Hero Header */}
      <section className="relative py-24 bg-[#0c0e15] border-b border-[#c5a059]/20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-widest text-[#c5a059] font-bold">Seller Guide & Consultation</span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white mt-3 mb-6">
            Turn Your Forgotten Collection Into <br />
            <span className="text-gold-gradient">Its Next Chapter.</span>
          </h1>
          <p className="text-base sm:text-xl text-[#a39e93] max-w-3xl mx-auto font-light leading-relaxed">
            Professional evaluation and confidential coin acquisition guidance for private sellers in Mumbai and across Maharashtra.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <button onClick={onOpenEnquiry} className="btn-gold py-3.5 px-8">
              START AN ENQUIRY
            </button>
            <a href="mailto:antiquesuper8319@gmail.com" className="btn-outline-gold py-3.5 px-8">
              <Mail className="w-4 h-4 text-[#c5a059]" /> EMAIL US
            </a>
          </div>
        </div>
      </section>

      {/* Visual Checklist Section: Before You Contact Us */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-[#c5a059] font-bold">Essential Seller Advice</span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mt-2">
            Before You Contact Us
          </h2>
          <p className="text-sm text-[#a39e93] mt-2">
            Follow these essential numismatic guidelines to protect the maximum value of your historical coins.
          </p>
          <div className="w-24 h-0.5 bg-[#c5a059] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sellerTips.map((tip, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-lg border glass-card ${
                tip.status === 'critical'
                  ? 'border-amber-500/40 bg-amber-950/10'
                  : 'border-[#c5a059]/30'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                {tip.status === 'critical' ? (
                  <AlertTriangle className="w-6 h-6 text-amber-400 shrink-0" />
                ) : (
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                )}
                <h3 className="text-xl font-serif font-bold text-white">{tip.title}</h3>
              </div>
              <p className="text-xs text-[#a39e93] leading-relaxed pl-9">{tip.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Common Mistakes to Avoid */}
      <section className="py-20 bg-[#0d0f17] border-y border-[#c5a059]/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-[#c5a059] font-bold">Common Pitfalls</span>
            <h2 className="text-3xl font-serif font-bold text-white mt-1">Mistakes to Avoid When Selling Old Coins</h2>
          </div>

          <div className="space-y-4">
            <div className="p-5 rounded bg-[#181b26] border border-red-500/20 flex items-start gap-4">
              <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-base font-semibold text-white">1. Cleaning or polishing coins with metal polish</h4>
                <p className="text-xs text-[#a39e93] mt-1">
                  Chemical cleaners strip off the original mint surface layer, reducing coin grade from uncirculated to damaged.
                </p>
              </div>
            </div>

            <div className="p-5 rounded bg-[#181b26] border border-red-500/20 flex items-start gap-4">
              <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-base font-semibold text-white">2. Relying on online social media valuation claims</h4>
                <p className="text-xs text-[#a39e93] mt-1">
                  Viral videos claiming "Rs 10 lakh for a common 2-rupee coin" are misleading. Real valuation requires verified numismatic study.
                </p>
              </div>
            </div>

            <div className="p-5 rounded bg-[#181b26] border border-red-500/20 flex items-start gap-4">
              <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-base font-semibold text-white">3. Storing coins in PVC plastic holders</h4>
                <p className="text-xs text-[#a39e93] mt-1">
                  Pliable PVC plastic degrades over time, releasing acidic residue that creates green corrosion marks on silver.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seller CTA */}
      <section className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-white mb-4">
            Ready to Request a Coin Evaluation?
          </h2>
          <p className="text-sm text-[#a39e93] mb-8">
            Contact Antique Super Antique in Mumbai today via form or email.
          </p>
          <button onClick={onOpenEnquiry} className="btn-gold py-4 px-9 text-base">
            START AN ENQUIRY NOW
          </button>
        </div>
      </section>
    </div>
  );
}
