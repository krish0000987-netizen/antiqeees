import React, { useState } from 'react';
import { Filter, Eye, ArrowRight } from 'lucide-react';

export default function Gallery({ onOpenEnquiry, onOpenLightbox }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryItems = [
    {
      id: 1,
      title: 'Gupta Empire Gold Dinara',
      category: 'coins',
      categoryLabel: 'Coins',
      era: 'c. 380 - 415 CE',
      material: '24K Fine Gold',
      rarity: 'Extremely Rare',
      origin: 'Gupta Dynasty',
      image: '/images/hero_ancient_coins.jpg',
      description: 'Gold dinara struck under Chandragupta II featuring archer figure holding bow and royal standard.',
    },
    {
      id: 2,
      title: 'Victorian 1887 Empress Silver Rupee',
      category: 'coins',
      categoryLabel: 'Coins',
      era: '1887 CE',
      material: 'Sterling Silver',
      rarity: 'Rare Mint State',
      origin: 'Calcutta Mint',
      image: '/images/hero_rare_silver.jpg',
      description: 'Golden Jubilee crown portrait of Queen Victoria on high-grade silver rupee with original toning.',
    },
    {
      id: 3,
      title: 'Mughal Shah Jahan Silver Rupee',
      category: 'coins',
      categoryLabel: 'Coins',
      era: 'c. 1640 CE',
      material: 'Silver',
      rarity: 'Very Rare',
      origin: 'Agra Mint',
      image: '/images/hero_collector_inspection.jpg',
      description: 'Fine silver rupee with four square cartouches containing Kalima and Shah Jahan titles.',
    },
    {
      id: 4,
      title: 'Solid Brass Maritime Sundial Compass',
      category: 'artifacts',
      categoryLabel: 'Artifacts',
      era: '19th Century',
      material: 'Antique Brass & Horn',
      rarity: 'Historical Artifact',
      origin: 'British India Trade',
      image: '/images/hero_antique_artifacts.jpg',
      description: 'Hand-machined nautical compass with folding gnomon and engraved cardinal directions.',
    },
    {
      id: 5,
      title: 'Gold Skeleton Pocket Watch & Chain',
      category: 'watches',
      categoryLabel: 'Watches',
      era: 'c. 1905',
      material: '18K Gold Plated / Brass',
      rarity: 'Horological Collector',
      origin: 'Swiss Movement',
      image: '/images/hero_vintage_watches.jpg',
      description: 'Exposed mechanical balance wheel, hand-cut bridge plates, and original fob chain.',
    },
    {
      id: 6,
      title: 'Royal Indian Silver Coin Necklace',
      category: 'jewelry',
      categoryLabel: 'Jewelry',
      era: 'Late 19th Century',
      material: 'Silver Rupees & Filigree',
      rarity: 'Heritage Jewelry',
      origin: 'Princely State of Indore',
      image: '/images/hero_collector_inspection.jpg',
      description: 'Traditional heritage necklace fashioned from silver Victoria rupees and hand-twisted silver wire.',
    },
    {
      id: 7,
      title: 'Pre-Independence 10 Rupees Note Archive',
      category: 'currency',
      categoryLabel: 'Currency',
      era: 'c. 1938',
      material: 'Watermarked Paper',
      rarity: 'Very Rare',
      origin: 'Reserve Bank of India',
      image: '/images/hero_antique_artifacts.jpg',
      description: 'Early King George VI 10 rupees paper note bearing profile portrait and historic serial watermark.',
    },
    {
      id: 8,
      title: 'Royal Carved Brass Temple Diya Lamp',
      category: 'collectibles',
      categoryLabel: 'Collectibles',
      era: 'c. 1880',
      material: 'Cast Brassware',
      rarity: 'Antique Curio',
      origin: 'Central India',
      image: '/images/hero_antique_artifacts.jpg',
      description: 'Intricately cast brass oil lamp adorned with peacock crest and traditional oil channels.',
    },
  ];

  const filterTabs = [
    { id: 'all', label: 'All Items' },
    { id: 'coins', label: 'Old Coins' },
    { id: 'currency', label: 'Currency' },
    { id: 'jewelry', label: 'Jewelry' },
    { id: 'watches', label: 'Watches' },
    { id: 'artifacts', label: 'Artifacts' },
    { id: 'collectibles', label: 'Collectibles' },
  ];

  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="bg-[#090a0f] text-[#e8e2d5]">
      {/* Hero Header */}
      <section className="relative py-24 bg-[#0c0e15] border-b border-[#c5a059]/20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-widest text-[#c5a059] font-bold">Digital Museum & Archive</span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white mt-3 mb-6">
            The Heritage <span className="text-gold-gradient">Digital Gallery.</span>
          </h1>
          <p className="text-base sm:text-xl text-[#a39e93] max-w-3xl mx-auto font-light leading-relaxed">
            Immerse yourself in our private gallery of rare coins, royal artifacts, horological timepieces, and historical curiosities.
          </p>
        </div>
      </section>

      {/* Gallery Filter Tabs & Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Navigation Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 ${
                activeFilter === tab.id
                  ? 'bg-gradient-to-r from-[#dfb76c] to-[#c5a059] text-black shadow-lg gold-glow'
                  : 'bg-[#12141d] text-[#a39e93] hover:text-white border border-[#c5a059]/20 hover:border-[#c5a059]/50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item)}
              className="group cursor-pointer glass-card glass-card-hover rounded-lg overflow-hidden border border-[#c5a059]/30 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <span className="px-4 py-2 rounded bg-[#c5a059] text-black text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Eye className="w-4 h-4" /> Inspect Item
                  </span>
                </div>
                <div className="absolute top-3 left-3 bg-[#090a0f]/90 backdrop-blur-md px-2.5 py-1 rounded text-[10px] uppercase font-bold text-[#dfb76c] border border-[#c5a059]/30">
                  {item.categoryLabel}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#dfb76c] transition-colors mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#a39e93] leading-relaxed mb-3">{item.era}</p>
                </div>

                <div className="pt-3 border-t border-[#181b26] flex items-center justify-between text-xs text-[#c5a059] font-semibold">
                  <span>{item.rarity}</span>
                  <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Enquire <ArrowRight className="w-3.5 h-3.5" />
                  </span>
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
            Interested in Acquiring or Evaluating a Gallery Item?
          </h2>
          <p className="text-sm text-[#a39e93] mb-8">
            Contact Antique Super Antique in Indore today for acquisition details or coin valuations.
          </p>
          <button onClick={onOpenEnquiry} className="btn-gold py-4 px-9 text-base">
            REQUEST ITEM INQUIRY
          </button>
        </div>
      </section>
    </div>
  );
}
