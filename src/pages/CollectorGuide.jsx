import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Shield, AlertCircle, Phone, BookOpen, Sparkles } from 'lucide-react';

export default function CollectorGuide({ onOpenEnquiry }) {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: 'How do I know if my old coin is valuable?',
      a: 'Coin value is determined by a combination of rarity, historical era, metallic purity (gold, silver, copper), mint marks, strike quality, and physical condition. A coin does not need to be ancient to be valuable; rare mintage dates or low circulation issues from the Victorian era can command high collector demand.',
    },
    {
      q: 'How should old coins be stored safely?',
      a: 'Store old coins in archival, acid-free flips, coin capsules, or velvet-lined wooden cabinets. Keep them in a dry, room-temperature environment away from humidity. Avoid soft PVC plastic sleeves as they release acidic gases over time.',
    },
    {
      q: 'Should I clean an old coin before showing it?',
      a: 'No! Never clean an old coin with brass polish, toothpaste, vinegar, or abrasive clothes. Cleaning strips away the original mint luster and historical patina, which permanently destroys its collector value.',
    },
    {
      q: 'What information is useful when evaluating a coin?',
      a: 'Clear high-resolution photographs of both front (obverse) and back (reverse) under natural daylight, weight in grams (if known), coin diameter, and any known family origin story or documentation.',
    },
    {
      q: 'Can I sell inherited coin collections?',
      a: 'Yes. Many of our clients have inherited family coin hoards or heirloom trunks. We provide confidential physical and photographic evaluation for complete inherited collections.',
    },
    {
      q: 'What affects an antique object’s value?',
      a: 'Antique value depends on age, craftsmanship, completeness, provenance (history of ownership), historical era, material (solid brass, silver, mahogany), and current collector demand.',
    },
    {
      q: 'How do I photograph an old coin for evaluation?',
      a: 'Place the coin on a flat, neutral dark cloth under indirect natural window daylight. Take straight-on, focused photos of both front and back without shadows or strong flash reflections.',
    },
    {
      q: 'Do you buy antique objects besides coins?',
      a: 'Yes! In addition to rare coins, Antique Super Antique evaluates and purchases royal Indian brassware, vintage pocket watches, traditional silver ornaments, and historical curiosities in Indore.',
    },
    {
      q: 'How can I enquire about a collection?',
      a: 'You can fill out our online evaluation form, send photos via WhatsApp, or call our Indore gallery directly at +91 98260 35259 to arrange a personal consultation.',
    },
    {
      q: 'Where are you located in Indore?',
      a: 'Antique Super Antique is located in Indore, Madhya Pradesh – 452003, India. Consultations are arranged by phone or online enquiry.',
    },
  ];

  return (
    <div className="bg-[#090a0f] text-[#e8e2d5]">
      {/* Hero Header */}
      <section className="relative py-24 bg-[#0c0e15] border-b border-[#c5a059]/20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-widest text-[#c5a059] font-bold">Educational Knowledge Portal</span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white mt-3 mb-6">
            The Collector’s <span className="text-gold-gradient">Guide & FAQ.</span>
          </h1>
          <p className="text-base sm:text-xl text-[#a39e93] max-w-3xl mx-auto font-light leading-relaxed">
            Essential numismatic guidance on coin care, preservation, storage, valuation drivers, and selling inherited collections.
          </p>
        </div>
      </section>

      {/* Accordion FAQ Section */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-white">Frequently Asked Questions</h2>
          <p className="text-sm text-[#a39e93] mt-2">Find authoritative answers to common collector queries.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-lg border border-[#c5a059]/30 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-lg font-serif font-bold text-white flex items-center gap-3">
                    <span className="text-[#c5a059] font-sans text-sm">0{idx + 1}.</span>
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#c5a059] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm text-[#a39e93] leading-relaxed border-t border-[#181b26] animate-fade-in-up">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Informational Disclaimer Box */}
        <div className="mt-12 p-5 rounded-lg bg-[#181b26] border border-[#c5a059]/30 text-xs text-[#a39e93] flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
          <div>
            <strong className="text-white">Educational Disclaimer:</strong> All content on this page is provided for educational and informational purposes. Valuations depend on item-specific physical examination, condition, mint marks, and verified numismatic characteristics.
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0c0e15] border-t border-[#c5a059]/30 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-white mb-4">Have a Question Not Answered Here?</h2>
          <p className="text-sm text-[#a39e93] mb-8">
            Speak directly with Antique Super Antique in Indore for expert advice.
          </p>
          <div className="flex justify-center gap-4">
            <button onClick={onOpenEnquiry} className="btn-gold py-3.5 px-8">
              SUBMIT A QUESTION
            </button>
            <a href="tel:+919826035259" className="btn-outline-gold py-3.5 px-8">
              <Phone className="w-4 h-4 text-[#c5a059]" /> CALL +91 98260 35259
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
