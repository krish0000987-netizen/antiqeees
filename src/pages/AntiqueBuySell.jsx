import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Tag, Search, Compass, Shield, Phone, ArrowRight } from 'lucide-react';

export default function AntiqueBuySell({ onOpenEnquiry }) {
  const services = [
    {
      title: 'What We Look For',
      icon: Search,
      desc: 'Royal Indian brassware, historical silver ornaments, rare vintage pocket watches, ancient manuscripts, and vintage decorative curiosities.',
    },
    {
      title: 'Antique Evaluation',
      icon: Shield,
      desc: 'Thorough assessment of material purity, age authenticity, provenance history, and physical preservation state.',
    },
    {
      title: 'Collection Consultation',
      icon: Compass,
      desc: 'Assisting collectors and estate executors in organizing, cataloging, and evaluating inherited heritage collections.',
    },
    {
      title: 'Sourcing Assistance',
      icon: Tag,
      desc: 'Helping passionate numismatists and interior connoisseurs locate specific historical artifacts and rare coin issues.',
    },
  ];

  return (
    <div className="bg-[#090a0f] text-[#e8e2d5]">
      {/* Hero Header */}
      <section className="relative py-24 bg-[#0c0e15] border-b border-[#c5a059]/20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-widest text-[#c5a059] font-bold">Antique Marketplace & Exchange</span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white mt-3 mb-6">
            Discover. Evaluate. <span className="text-gold-gradient">Exchange. Preserve.</span>
          </h1>
          <p className="text-base sm:text-xl text-[#a39e93] max-w-3xl mx-auto font-light leading-relaxed">
            Connecting heritage antiquities with discerning collectors and sellers across Madhya Pradesh.
          </p>
        </div>
      </section>

      {/* Two Large Visual Pathways */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* BUY ANTIQUES Pathway */}
          <div className="relative group rounded-xl overflow-hidden border border-[#c5a059]/40 glass-card p-8 sm:p-12 flex flex-col justify-between min-h-[420px] gold-glow-hover">
            <div className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:scale-105 transition-transform duration-700 pointer-events-none" style={{ backgroundImage: "url('/images/hero_antique_artifacts.jpg')" }} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-[#090a0f]/80 to-transparent pointer-events-none" />

            <div className="relative z-10">
              <span className="px-3.5 py-1 rounded-full bg-[#c5a059] text-black text-xs font-bold uppercase tracking-wider mb-4 inline-block">
                For Collectors & Buyers
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mt-2 mb-4">
                BUY ANTIQUES
              </h2>
              <p className="text-sm text-[#a39e93] leading-relaxed max-w-md">
                Explore our curated digital gallery of rare coins, royal brassware, vintage timepieces, and historical artifacts.
              </p>
            </div>

            <div className="relative z-10 pt-8">
              <Link to="/gallery" className="btn-gold py-3.5 px-8">
                VIEW COLLECTION <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* SELL ANTIQUES Pathway */}
          <div className="relative group rounded-xl overflow-hidden border border-[#c5a059]/40 glass-card p-8 sm:p-12 flex flex-col justify-between min-h-[420px] gold-glow-hover">
            <div className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:scale-105 transition-transform duration-700 pointer-events-none" style={{ backgroundImage: "url('/images/hero_collector_inspection.jpg')" }} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-[#090a0f]/80 to-transparent pointer-events-none" />

            <div className="relative z-10">
              <span className="px-3.5 py-1 rounded-full bg-[#dfb76c] text-black text-xs font-bold uppercase tracking-wider mb-4 inline-block">
                For Sellers & Estates
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mt-2 mb-4">
                SELL ANTIQUES
              </h2>
              <p className="text-sm text-[#a39e93] leading-relaxed max-w-md">
                Possess an antique item or inherited coin set? Submit details for professional examination and evaluation.
              </p>
            </div>

            <div className="relative z-10 pt-8">
              <button onClick={onOpenEnquiry} className="btn-gold py-3.5 px-8">
                SUBMIT YOUR ITEM <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-[#0d0f17] border-y border-[#c5a059]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-[#c5a059] font-bold">Services & Expertise</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-2">
              Our Antique & Coin Consultation Services
            </h2>
            <div className="w-24 h-0.5 bg-[#c5a059] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <div key={idx} className="glass-card p-6 rounded-lg border border-[#c5a059]/30">
                  <div className="w-12 h-12 rounded-full bg-[#181b26] border border-[#c5a059] flex items-center justify-center text-[#dfb76c] mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-white mb-2">{srv.title}</h3>
                  <p className="text-xs text-[#a39e93] leading-relaxed">{srv.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-white mb-4">Have Questions About Buying or Selling?</h2>
          <p className="text-sm text-[#a39e93] mb-8">
            Call our Indore gallery directly at +91 98260 35259 or request an online callback.
          </p>
          <div className="flex justify-center gap-4">
            <a href="tel:+919826035259" className="btn-gold py-3.5 px-8">
              <Phone className="w-4 h-4" /> CALL +91 98260 35259
            </a>
            <button onClick={onOpenEnquiry} className="btn-outline-gold py-3.5 px-8">
              REQUEST CONSULTATION
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
