import React from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import { ShieldCheck, Award, Eye, Coins, ArrowRight } from 'lucide-react';

export default function Home({ onOpenEnquiry, onOpenLightbox }) {
  const featuredCategories = [
    {
      id: 'coins',
      title: 'Old Coins',
      desc: 'Ancient Indian, Mughal silver rupees, British India & Princely state coinages.',
      image: '/images/hero_ancient_coins.jpg',
      link: '/old-coins',
    },
    {
      id: 'rare-coins',
      title: 'Rare Numismatic Coins',
      desc: 'High-grade gold mohurs, commemorative issues, and low-mintage historical rarities.',
      image: '/images/hero_rare_silver.jpg',
      link: '/old-coins',
    },
    {
      id: 'currency',
      title: 'Vintage Currency',
      desc: 'Pre-independence Indian paper notes, colonial bank notes, and historic archives.',
      image: '/images/hero_antique_artifacts.jpg',
      link: '/old-coins',
    },
    {
      id: 'antiques',
      title: 'Antique Objects',
      desc: 'Royal Indian brassware, antique lamps, carved wooden artifacts & traditional curios.',
      image: '/images/hero_antique_artifacts.jpg',
      link: '/antique-items',
    },
    {
      id: 'watches',
      title: 'Vintage Timepieces',
      desc: 'Rare gold pocket watches, skeleton mechanical gears & horological collectibles.',
      image: '/images/hero_vintage_watches.jpg',
      link: '/antique-items',
    },
    {
      id: 'treasures',
      title: 'Historical Treasures',
      desc: 'Ancient leather manuscripts, vintage compasses, telescopes & royal heritage pieces.',
      image: '/images/hero_collector_inspection.jpg',
      link: '/gallery',
    },
  ];

  const galleryPreviewItems = [
    {
      id: 1,
      title: 'Gupta Empire Gold Dinara Coin',
      category: 'Ancient Coins',
      era: 'c. 380 - 415 CE',
      image: '/images/hero_ancient_coins.jpg',
      description: 'Superb strike gold coin featuring royal archer motif from the Golden Age of India.',
    },
    {
      id: 2,
      title: 'Victorian 1887 Silver One Rupee',
      category: 'British India',
      era: '1887 CE',
      image: '/images/hero_rare_silver.jpg',
      description: 'High-grade Queen Victoria empress silver rupee with lustrous original patina.',
    },
    {
      id: 3,
      title: 'Royal Brass Navigational Compass',
      category: 'Antique Artifacts',
      era: '19th Century',
      image: '/images/hero_antique_artifacts.jpg',
      description: 'Hand-crafted solid brass compass with sundial markings and original rosewood case.',
    },
    {
      id: 4,
      title: 'Enamel Skeleton Pocket Watch',
      category: 'Vintage Horology',
      era: 'c. 1910',
      image: '/images/hero_vintage_watches.jpg',
      description: 'Swiss movement gold pocket watch featuring hand-engraved bridge plates and chain.',
    },
  ];

  return (
    <div className="bg-[#090a0f] text-[#e8e2d5]">
      {/* 1. Cinematic Hero Slider */}
      <HeroSlider onOpenEnquiry={onOpenEnquiry} />

      {/* 2. Trust / Value Proposition Section */}
      <section className="py-20 bg-[#0d0f17] border-y border-[#c5a059]/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest text-[#c5a059] font-bold">
              Heritage • Integrity • Rarity
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mt-2">
              Why Collectors Value the Right Guidance
            </h2>
            <div className="w-24 h-0.5 bg-[#c5a059] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-card glass-card-hover p-8 rounded-md border border-[#c5a059]/30">
              <div className="w-12 h-12 rounded-full bg-[#181b26] border border-[#c5a059] flex items-center justify-center text-[#dfb76c] mb-6 gold-glow">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-white mb-2">Heritage Knowledge</h3>
              <p className="text-sm text-[#a39e93] leading-relaxed">
                Understanding historical objects requires deep numismatic research and attention to historical detail.
              </p>
            </div>

            <div className="glass-card glass-card-hover p-8 rounded-md border border-[#c5a059]/30">
              <div className="w-12 h-12 rounded-full bg-[#181b26] border border-[#c5a059] flex items-center justify-center text-[#dfb76c] mb-6 gold-glow">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-white mb-2">Careful Evaluation</h3>
              <p className="text-sm text-[#a39e93] leading-relaxed">
                We consider strike quality, mint marks, material purity, and condition before discussing any piece.
              </p>
            </div>

            <div className="glass-card glass-card-hover p-8 rounded-md border border-[#c5a059]/30">
              <div className="w-12 h-12 rounded-full bg-[#181b26] border border-[#c5a059] flex items-center justify-center text-[#dfb76c] mb-6 gold-glow">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-white mb-2">Transparent Process</h3>
              <p className="text-sm text-[#a39e93] leading-relaxed">
                Direct, straightforward enquiry experience for both buyers and sellers across Mumbai and Maharashtra.
              </p>
            </div>

            <div className="glass-card glass-card-hover p-8 rounded-md border border-[#c5a059]/30">
              <div className="w-12 h-12 rounded-full bg-[#181b26] border border-[#c5a059] flex items-center justify-center text-[#dfb76c] mb-6 gold-glow">
                <Coins className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-white mb-2">Collector Focus</h3>
              <p className="text-sm text-[#a39e93] leading-relaxed">
                Tailored for passionate history enthusiasts, inherited coin families, and private collectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. About Antique Super Antique Summary */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden border border-[#c5a059]/40 gold-glow">
              <img
                src="/images/hero_collector_inspection.jpg"
                alt="Antique Super Antique Expert Inspection"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 border-2 border-[#c5a059]/30 rounded-lg -z-0 hidden sm:block" />
          </div>

          <div>
            <span className="text-xs uppercase tracking-widest text-[#c5a059] font-bold">About Our Vault</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mt-2 mb-6 leading-tight">
              Pieces of History. <br />
              <span className="text-gold-gradient">Stories Worth Preserving.</span>
            </h2>
            <p className="text-base text-[#a39e93] leading-relaxed mb-6 font-light">
              Based in Mumbai, Maharashtra, <strong className="text-white">Antique Super Antique</strong> is a premier destination for rare old coins, historical currency, and royal heritage objects. We bridge the gap between historic discovery and passionate preservation.
            </p>
            <p className="text-sm text-[#a39e93] leading-relaxed mb-8">
              Whether you have inherited a family heirloom coin set, wish to sell rare silver rupees, or are expanding your private numismatic gallery, our team offers professional examination and evaluation.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/about" className="btn-gold">
                OUR FULL STORY <ArrowRight className="w-4 h-4" />
              </Link>
              <button onClick={onOpenEnquiry} className="btn-outline-gold">
                EVALUATE YOUR ITEM
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Featured Antique & Coin Categories */}
      <section className="py-20 bg-[#0c0e15] border-t border-[#c5a059]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#c5a059] font-bold">Curated Collections</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-1">Featured Categories</h2>
            </div>
            <Link to="/gallery" className="mt-4 md:mt-0 text-xs font-bold uppercase tracking-wider text-[#dfb76c] hover:underline flex items-center gap-1">
              EXPLORE ALL CATEGORIES <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCategories.map((cat) => (
              <Link
                key={cat.id}
                to={cat.link}
                className="group glass-card glass-card-hover rounded-lg overflow-hidden border border-[#c5a059]/30 flex flex-col text-decoration-none"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12141d] via-transparent to-transparent" />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-white group-hover:text-[#dfb76c] transition-colors mb-2">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-[#a39e93] leading-relaxed mb-4">{cat.desc}</p>
                  </div>
                  <span className="text-xs font-semibold text-[#c5a059] group-hover:text-[#dfb76c] flex items-center gap-1">
                    BROWSE CATEGORY <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 4-Step Process Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#c5a059] font-bold">Transparent & Professional</span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mt-2">
            How The Valuation & Sale Process Works
          </h2>
          <div className="w-24 h-0.5 bg-[#c5a059] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="glass-card p-6 rounded-lg border border-[#c5a059]/30 relative">
            <span className="text-4xl font-serif font-bold text-[#c5a059]/40 block mb-2">01</span>
            <h3 className="text-xl font-serif font-bold text-white mb-2">Share Details</h3>
            <p className="text-xs text-[#a39e93] leading-relaxed">
              Contact us via email or enquiry form with photos and known origin details of your old coin or antique.
            </p>
          </div>

          <div className="glass-card p-6 rounded-lg border border-[#c5a059]/30 relative">
            <span className="text-4xl font-serif font-bold text-[#c5a059]/40 block mb-2">02</span>
            <h3 className="text-xl font-serif font-bold text-white mb-2">Examination</h3>
            <p className="text-xs text-[#a39e93] leading-relaxed">
              The item is reviewed for strike quality, material purity, mint markings, and physical condition.
            </p>
          </div>

          <div className="glass-card p-6 rounded-lg border border-[#c5a059]/30 relative">
            <span className="text-4xl font-serif font-bold text-[#c5a059]/40 block mb-2">03</span>
            <h3 className="text-xl font-serif font-bold text-white mb-2">Evaluation</h3>
            <p className="text-xs text-[#a39e93] leading-relaxed">
              An assessment is made based on historical significance, numismatic demand, and current collector market.
            </p>
          </div>

          <div className="glass-card p-6 rounded-lg border border-[#c5a059]/30 relative">
            <span className="text-4xl font-serif font-bold text-[#c5a059]/40 block mb-2">04</span>
            <h3 className="text-xl font-serif font-bold text-white mb-2">Transaction</h3>
            <p className="text-xs text-[#a39e93] leading-relaxed">
              If both parties agree on the valuation terms, proceed with a secure and transparent transaction.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button onClick={onOpenEnquiry} className="btn-gold py-3.5 px-8">
            START AN ENQUIRY NOW
          </button>
        </div>
      </section>

      {/* 6. Heritage Digital Gallery Preview */}
      <section className="py-20 bg-[#0c0e15] border-t border-[#c5a059]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-[#c5a059] font-bold">Museum Vault</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-1">Heritage Gallery Highlights</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryPreviewItems.map((item) => (
              <div
                key={item.id}
                onClick={() => onOpenLightbox(item)}
                className="group cursor-pointer glass-card rounded-md overflow-hidden border border-[#c5a059]/30 glass-card-hover"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3 py-1.5 rounded bg-[#c5a059] text-black text-xs font-bold uppercase">
                      View Details
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <span className="text-[10px] uppercase font-bold text-[#c5a059]">{item.category}</span>
                  <h4 className="text-lg font-serif font-bold text-white group-hover:text-[#dfb76c] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#a39e93] mt-1">{item.era}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Tasteful Testimonials Section */}
      <section className="py-20 border-t border-[#c5a059]/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-xs uppercase tracking-widest text-[#c5a059] font-bold">Collector Reviews</span>
          <h2 className="text-3xl font-serif font-bold text-white mt-2 mb-8">What Collectors Say</h2>

          <div className="glass-card p-8 rounded-lg border border-[#c5a059]/30 text-center">
            <p className="text-sm sm:text-base text-[#e8e2d5] italic leading-relaxed mb-4">
              “A professional client testimonial will be displayed here as real customer reviews are gathered during ongoing business transactions in Mumbai.”
            </p>
            <span className="text-xs text-[#c5a059] uppercase tracking-wider font-semibold">
              — Verified Client Testimonial Placeholder —
            </span>
          </div>
        </div>
      </section>

      {/* 8. Final Call To Action */}
      <section className="py-24 bg-gradient-to-b from-[#12141d] to-[#090a0f] border-t border-[#c5a059]/30 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="text-xs uppercase tracking-widest text-[#c5a059] font-bold">Have Something Rare?</span>
          <h2 className="text-4xl sm:text-6xl font-serif font-bold text-white mt-2 mb-6">
            Let’s Talk About Your Piece of History.
          </h2>
          <p className="text-base sm:text-xl text-[#a39e93] max-w-2xl mx-auto mb-10 font-light">
            Contact Antique Super Antique in Mumbai today for confidential evaluation, coin buying, or collection consultation.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button onClick={onOpenEnquiry} className="btn-gold py-4 px-9 text-base">
              REQUEST EVALUATION NOW
            </button>
            <Link to="/contact" className="btn-outline-gold py-4 px-8 text-base">
              CONTACT US NOW
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
