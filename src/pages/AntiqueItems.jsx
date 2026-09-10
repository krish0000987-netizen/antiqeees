import React from 'react';
import { ArrowRight, Sparkles, Clock, Compass, Shield } from 'lucide-react';

export default function AntiqueItems({ onOpenEnquiry, onOpenLightbox }) {
  const antiqueCategories = [
    {
      id: 1,
      title: 'Royal Brass & Bronze Objects',
      category: 'Antique Decorative Objects',
      origin: 'Rajasthan & Central India',
      image: '/images/hero_antique_artifacts.jpg',
      description: 'Hand-carved brass oil lamps (diya), royal incense burners, engraved vessels, and traditional decorative brassware.',
    },
    {
      id: 2,
      title: 'Vintage Gold & Skeleton Pocket Watches',
      category: 'Vintage Watches',
      origin: 'Swiss & British Horology',
      image: '/images/hero_vintage_watches.jpg',
      description: 'Luxury antique pocket watches featuring open mechanical gearwork, enamel dials, and gold watch chains.',
    },
    {
      id: 3,
      title: 'Heritage Silver & Gold Jewelry',
      category: 'Antique Jewelry',
      origin: 'Royal Princely States',
      image: '/images/hero_collector_inspection.jpg',
      description: 'Traditional Indian silver ornaments, royal anklets, kundan chokers, and antique coin necklaces.',
    },
    {
      id: 4,
      title: 'Navigational & Scientific Instruments',
      category: 'Historical Artifacts',
      origin: '19th Century Maritime',
      image: '/images/hero_antique_artifacts.jpg',
      description: 'Solid brass compasses, telescopes, sundials, and vintage surveyor instruments in carved wooden cases.',
    },
    {
      id: 5,
      title: 'Ancient Manuscripts & Curiosities',
      category: 'Rare Curiosities',
      origin: 'Mughal & Maratha Era',
      image: '/images/hero_ancient_coins.jpg',
      description: 'Handwritten parchment scrolls, miniature paintings, royal seals, and historic leather manuscripts.',
    },
    {
      id: 6,
      title: 'Vintage Curios & Heirloom Collectibles',
      category: 'Vintage Collectibles',
      origin: 'Pre-1950s',
      image: '/images/hero_collector_inspection.jpg',
      description: 'Gramophone horns, vintage locks, carved wooden chests, and royal court memorabilia.',
    },
  ];

  return (
    <div className="bg-[#090a0f] text-[#e8e2d5]">
      {/* Hero Header */}
      <section className="relative py-24 bg-[#0c0e15] border-b border-[#c5a059]/20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-widest text-[#c5a059] font-bold">Royal Antiquities</span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white mt-3 mb-6">
            Objects From <span className="text-gold-gradient">Another Era.</span>
          </h1>
          <p className="text-base sm:text-xl text-[#a39e93] max-w-3xl mx-auto font-light leading-relaxed">
            Discover royal Indian brassware, vintage timepieces, traditional jewelry, and rare historical curiosities.
          </p>
        </div>
      </section>

      {/* Editorial Quote Section */}
      <section className="py-16 bg-[#0d0f17] border-b border-[#c5a059]/20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-2xl sm:text-3xl font-serif italic text-white leading-relaxed">
            “From forgotten trunks to family heirlooms, every antique has a story waiting to be rediscovered.”
          </p>
          <span className="text-xs text-[#c5a059] uppercase tracking-widest font-bold mt-4 block">
            — Antique Super Antique Mumbai —
          </span>
        </div>
      </section>

      {/* Antique Items Masonry Gallery Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {antiqueCategories.map((item) => (
            <div
              key={item.id}
              className="glass-card glass-card-hover rounded-lg overflow-hidden border border-[#c5a059]/30 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden cursor-pointer" onClick={() => onOpenLightbox(item)}>
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute top-3 left-3 bg-[#12141d]/90 backdrop-blur-md px-3 py-1 rounded text-[11px] text-[#dfb76c] border border-[#c5a059]/30 font-semibold">
                  {item.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-xs text-[#a39e93] leading-relaxed mb-4">{item.description}</p>
                  <p className="text-[11px] text-[#c5a059] font-semibold mb-6">Origin: {item.origin}</p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onOpenLightbox(item)}
                    className="flex-1 btn-outline-gold text-xs py-2.5 justify-center"
                  >
                    VIEW PIECE
                  </button>
                  <button
                    onClick={onOpenEnquiry}
                    className="flex-1 btn-gold text-xs py-2.5 justify-center"
                  >
                    ENQUIRE
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0c0e15] border-t border-[#c5a059]/30 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
            Possess an Antique Artifact You Wish to Sell?
          </h2>
          <p className="text-sm text-[#a39e93] mb-8">
            Our team in Mumbai evaluates vintage watches, royal brassware, silver ornaments, and curiosities with confidentiality.
          </p>
          <button onClick={onOpenEnquiry} className="btn-gold py-4 px-9 text-base">
            SELL YOUR ANTIQUE
          </button>
        </div>
      </section>
    </div>
  );
}
