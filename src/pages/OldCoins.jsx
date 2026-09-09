import React, { useState } from 'react';
import { ShieldCheck, HelpCircle, ArrowRight, Award, Search, Sparkles, AlertCircle } from 'lucide-react';

export default function OldCoins({ onOpenEnquiry, onOpenLightbox }) {
  const coinCategories = [
    {
      id: 1,
      title: 'Ancient & Punch-Marked Coins',
      category: 'Ancient India',
      material: 'Silver / Copper',
      era: 'c. 600 BCE - 300 CE',
      image: '/images/hero_ancient_coins.jpg',
      description: 'Hand-stamped silver karshapanas from Janapadas, Mauryan & Gupta dynasties featuring auspicious solar and floral symbols.',
    },
    {
      id: 2,
      title: 'Mughal Empire Silver Rupees',
      category: 'Mughal Numismatics',
      material: 'Fine Silver',
      era: '1526 - 1857 CE',
      image: '/images/hero_collector_inspection.jpg',
      description: 'Historical silver rupees minted under Akbar, Shah Jahan, and Aurangzeb bearing intricate Persian calligraphy.',
    },
    {
      id: 3,
      title: 'British India Victoria Silver Rupees',
      category: 'Colonial Era',
      material: '91.7% Pure Silver',
      era: '1840 - 1901 CE',
      image: '/images/hero_rare_silver.jpg',
      description: 'Victorian queen & empress silver coins struck at Bombay, Calcutta, and Madras mints.',
    },
    {
      id: 4,
      title: 'Princely State Coinages',
      category: 'Royal Indian States',
      material: 'Gold / Silver / Copper',
      era: '1700 - 1948 CE',
      image: '/images/hero_ancient_coins.jpg',
      description: 'Rare coinages issued by Indore Holkar state, Hyderabad Nizams, Gwalior Scindias, and Travancore kings.',
    },
    {
      id: 5,
      title: 'King George V & VI Silver Currency',
      category: 'Colonial Era',
      material: 'Silver',
      era: '1911 - 1947 CE',
      image: '/images/hero_rare_silver.jpg',
      description: 'Late British India silver half-rupees, quarter rupees, and one-rupee coins in lustrous mint state condition.',
    },
    {
      id: 6,
      title: 'Commemorative & Proof Sets',
      category: 'Republic India',
      material: 'Silver / Nickel Alloy',
      era: 'Post-1950',
      image: '/images/hero_collector_inspection.jpg',
      description: 'Limited edition commemorative issues celebrating historic events, freedom fighters, and independence milestones.',
    },
  ];

  const valuationFactors = [
    { title: 'Age & Era', desc: 'Historical period and origin dynasty (e.g. Ancient Janapadas vs British Colonial).' },
    { title: 'Rarity & Mintage', desc: 'Total number of coins originally struck and surviving worldwide specimens.' },
    { title: 'Historical Significance', desc: 'Association with famous emperors, key historical events, or monetary reforms.' },
    { title: 'Physical Condition', desc: 'Grade from Poor to Mint State (MS), original luster, sharp details, and patina.' },
    { title: 'Mint Mark & Die Variety', desc: 'Specific mint house marks (Calcutta, Bombay, Lahore) or rare die errors.' },
    { title: 'Metallic Material', desc: 'Purity of gold, sterling silver, copper, or billon metal composition.' },
    { title: 'Collector Demand', desc: 'Current market interest among active numismatic collectors in India and abroad.' },
    { title: 'Provenance', desc: 'Documented history of ownership, past auction appearances, or collection records.' },
  ];

  return (
    <div className="bg-[#090a0f] text-[#e8e2d5]">
      {/* Hero Header */}
      <section className="relative py-24 bg-[#0c0e15] border-b border-[#c5a059]/20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-widest text-[#c5a059] font-bold">Numismatic Vault</span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white mt-3 mb-6">
            Coins That Carry <span className="text-gold-gradient">Centuries of History.</span>
          </h1>
          <p className="text-base sm:text-xl text-[#a39e93] max-w-3xl mx-auto font-light leading-relaxed">
            Explore ancient Indian silver, Mughal mohurs, Victorian rupees, and rare Princely State coinages preserved in our Indore gallery.
          </p>
        </div>
      </section>

      {/* Coin Showcase Gallery */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">Rare Old Coin Categories</h2>
          <p className="text-sm text-[#a39e93] mt-2">
            Click on any category item to inspect details or request direct evaluation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coinCategories.map((coin) => (
            <div
              key={coin.id}
              className="glass-card glass-card-hover rounded-lg overflow-hidden border border-[#c5a059]/30 flex flex-col"
            >
              <div className="relative h-60 overflow-hidden cursor-pointer" onClick={() => onOpenLightbox(coin)}>
                <img src={coin.image} alt={coin.title} className="w-full h-full object-cover" />
                <div className="absolute top-3 left-3 bg-[#12141d]/90 backdrop-blur-md px-3 py-1 rounded text-[11px] text-[#dfb76c] border border-[#c5a059]/30 font-semibold">
                  {coin.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-2">{coin.title}</h3>
                  <p className="text-xs text-[#a39e93] leading-relaxed mb-4">{coin.description}</p>

                  <div className="flex items-center justify-between text-[11px] text-[#c5a059] border-t border-[#181b26] pt-3 mb-6 font-semibold">
                    <span>{coin.material}</span>
                    <span>{coin.era}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onOpenLightbox(coin)}
                    className="flex-1 btn-outline-gold text-xs py-2.5 justify-center"
                  >
                    VIEW DETAILS
                  </button>
                  <button
                    onClick={onOpenEnquiry}
                    className="flex-1 btn-gold text-xs py-2.5 justify-center"
                  >
                    ENQUIRE NOW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Educational Section: What Makes an Old Coin Valuable? */}
      <section className="py-24 bg-[#0d0f17] border-y border-[#c5a059]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-[#c5a059] font-bold">Numismatic Education</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mt-2">
              What Makes an Old Coin Valuable?
            </h2>
            <p className="text-sm text-[#a39e93] mt-3">
              Coin valuation depends on several key factors rather than age alone.
            </p>
            <div className="w-24 h-0.5 bg-[#c5a059] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valuationFactors.map((factor, idx) => (
              <div key={idx} className="glass-card p-6 rounded-lg border border-[#c5a059]/30">
                <span className="text-[#c5a059] font-serif font-bold text-lg mb-2 block">0{idx + 1}.</span>
                <h4 className="text-xl font-serif font-bold text-white mb-2">{factor.title}</h4>
                <p className="text-xs text-[#a39e93] leading-relaxed">{factor.desc}</p>
              </div>
            ))}
          </div>

          {/* Non-guarantee Valuation Disclaimer */}
          <div className="mt-12 p-4 rounded-lg bg-[#181b26] border border-[#c5a059]/30 text-xs text-[#a39e93] flex items-start gap-3 max-w-4xl mx-auto">
            <AlertCircle className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
            <div>
              <strong className="text-white">Professional Valuation Notice:</strong> We do not issue instant guaranteed price claims without physical or photographic inspection. Coin conditions vary significantly, and proper examination ensures transparent, accurate guidance.
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-white mb-4">
            Want to know more about your coin?
          </h2>
          <p className="text-sm text-[#a39e93] mb-8">
            Submit details or photos of your old coin for examination by our Indore numismatic team.
          </p>
          <button onClick={onOpenEnquiry} className="btn-gold py-4 px-9 text-base">
            REQUEST EVALUATION NOW
          </button>
        </div>
      </section>
    </div>
  );
}
