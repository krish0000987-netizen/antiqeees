import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Sparkles, BookOpen, Compass, Search, Eye, Scale, Archive, Award, ArrowRight, Phone } from 'lucide-react';

export default function About({ onOpenEnquiry }) {
  const timelineSteps = [
    {
      num: '01',
      title: 'Discovery',
      icon: Search,
      desc: 'Rare coins and inherited curiosities emerge from old family trunks, forgotten collections, or private archives.',
    },
    {
      num: '02',
      title: 'Examination',
      icon: Eye,
      desc: 'Expert inspection of physical attributes, mint marks, strikes, metallic purity, and patina condition.',
    },
    {
      num: '03',
      title: 'Evaluation',
      icon: Scale,
      desc: 'Assessment against historical numismatic catalogs, rarity indices, and active collector market demand.',
    },
    {
      num: '04',
      title: 'Preservation',
      icon: Shield,
      desc: 'Professional conservation techniques ensuring zero abrasive damage or loss of historic metallic integrity.',
    },
    {
      num: '05',
      title: 'Collection',
      icon: Archive,
      desc: 'Securing the object into its next rightful home within a private museum vault or passionate collector cabinet.',
    },
  ];

  return (
    <div className="bg-[#090a0f] text-[#e8e2d5]">
      {/* Editorial Hero Header */}
      <section className="relative py-24 bg-[#0c0e15] border-b border-[#c5a059]/20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs uppercase tracking-widest text-[#c5a059] font-bold">About Antique Super Antique</span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white mt-3 mb-6">
            Preserving History, <br />
            <span className="text-gold-gradient">One Treasure at a Time.</span>
          </h1>
          <p className="text-base sm:text-xl text-[#a39e93] max-w-3xl mx-auto font-light leading-relaxed">
            Dedicated to safeguarding India’s numismatic heritage and royal antiquities with authenticity, transparency, and deep historical reverence.
          </p>
        </div>
      </section>

      {/* Our Story & Philosophy */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#c5a059] font-bold">Our Story & Heritage</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-2 mb-6">
              Rooted in Mumbai, Inspiring Collectors Nationwide
            </h2>
            <p className="text-sm text-[#a39e93] leading-relaxed mb-4">
              Based in the historic city of Mumbai, Maharashtra, <strong className="text-white">Antique Super Antique</strong> was established with a singular vision: to create a trusted, sophisticated platform for old coin collectors, history enthusiasts, and families possessing inherited antiquities.
            </p>
            <p className="text-sm text-[#a39e93] leading-relaxed mb-4">
              We believe that every antique object and rare coin is a tangible portal to the past — carrying the trade secrets of ancient empires, royal mints, and forgotten eras.
            </p>
            <p className="text-sm text-[#a39e93] leading-relaxed">
              From ancient Indian punch-marked coins to Victorian silver rupees, Mughal mohurs, and royal brass artifacts, we uphold standard practices in examination and valuation.
            </p>
          </div>

          <div className="relative">
            <div className="rounded-lg overflow-hidden border border-[#c5a059]/40 gold-glow">
              <img
                src="/images/hero_ancient_coins.jpg"
                alt="Antique Super Antique Heritage"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Historical Objects Matter & Our Philosophy */}
      <section className="py-20 bg-[#0d0f17] border-y border-[#c5a059]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-[#c5a059] font-bold">Our Core Philosophy</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-2">
              Why Historical Objects Matter
            </h2>
            <div className="w-24 h-0.5 bg-[#c5a059] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-lg border border-[#c5a059]/30">
              <div className="w-12 h-12 rounded-full bg-[#181b26] border border-[#c5a059] flex items-center justify-center text-[#dfb76c] mb-6">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-3">Living History</h3>
              <p className="text-xs text-[#a39e93] leading-relaxed">
                Coins and antiques document royal dynasties, economic trade routes, and craftsmanship that written history often overlooks.
              </p>
            </div>

            <div className="glass-card p-8 rounded-lg border border-[#c5a059]/30">
              <div className="w-12 h-12 rounded-full bg-[#181b26] border border-[#c5a059] flex items-center justify-center text-[#dfb76c] mb-6">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-3">Authenticity First</h3>
              <p className="text-xs text-[#a39e93] leading-relaxed">
                Transparency and honest communication form the bedrock of our business. We never make unverified valuation promises.
              </p>
            </div>

            <div className="glass-card p-8 rounded-lg border border-[#c5a059]/30">
              <div className="w-12 h-12 rounded-full bg-[#181b26] border border-[#c5a059] flex items-center justify-center text-[#dfb76c] mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-3">Collector Guidance</h3>
              <p className="text-xs text-[#a39e93] leading-relaxed">
                Whether you are selling an inherited coin hoard or seeking a rare addition to your collection, we provide guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Timeline Section: The Journey of an Antique */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#c5a059] font-bold">The Journey of an Antique</span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mt-2">
            From Discovery to Preservation
          </h2>
          <p className="text-sm text-[#a39e93] mt-3">
            Every historical artifact passes through five distinct phases of meticulous care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {timelineSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="glass-card p-6 rounded-lg border border-[#c5a059]/30 text-center flex flex-col items-center glass-card-hover">
                <span className="text-3xl font-serif font-bold text-[#c5a059] mb-2">{step.num}</span>
                <div className="w-10 h-10 rounded-full bg-[#181b26] border border-[#dfb76c] flex items-center justify-center text-[#dfb76c] mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-serif font-bold text-white mb-2">{step.title}</h4>
                <p className="text-xs text-[#a39e93] leading-relaxed">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* End CTA */}
      <section className="py-20 bg-[#0c0e15] border-t border-[#c5a059]/30 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-white mb-4">Have a piece of history?</h2>
          <p className="text-sm text-[#a39e93] mb-8">
            Contact Antique Super Antique in Mumbai today for confidential advice, coin evaluations, or purchasing inquiries.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/contact" className="btn-gold py-3.5 px-8">
              CONTACT US NOW
            </Link>
            <button onClick={onOpenEnquiry} className="btn-outline-gold py-3.5 px-8">
              REQUEST EVALUATION
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
