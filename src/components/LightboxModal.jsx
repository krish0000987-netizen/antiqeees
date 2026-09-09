import React from 'react';
import { X, Calendar } from 'lucide-react';

export default function LightboxModal({ item, onClose, onEnquire }) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-lg overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#12141d] border border-[#c5a059]/40 rounded-lg shadow-2xl overflow-hidden my-auto flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full transition-colors"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Left Image View */}
        <div className="w-full md:w-1/2 bg-black flex items-center justify-center min-h-[320px] max-h-[500px] relative overflow-hidden group">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Right Details Panel */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between bg-[#12141d]">
          <div>
            {/* Tag / Category Badge */}
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full bg-[#181b26] border border-[#c5a059]/40 text-[#dfb76c] text-xs font-semibold uppercase tracking-wider">
                {item.category}
              </span>
              {item.era && (
                <span className="text-xs text-[#a39e93] flex items-center gap-1 font-sans">
                  <Calendar className="w-3.5 h-3.5 text-[#c5a059]" /> {item.era}
                </span>
              )}
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3 leading-snug">
              {item.title}
            </h3>

            <p className="text-sm text-[#a39e93] leading-relaxed mb-6 font-light">
              {item.description || 'Rare historical piece preserved in private museum collection condition.'}
            </p>

            {/* Spec Attributes Grid */}
            <div className="grid grid-cols-2 gap-3 mb-6 p-4 rounded bg-[#181b26] border border-[#c5a059]/20 text-xs">
              <div>
                <span className="text-[#a39e93] block uppercase tracking-wider font-semibold text-[10px]">Material</span>
                <span className="text-[#e8e2d5] font-medium">{item.material || 'Sterling Silver / Antique Alloy'}</span>
              </div>
              <div>
                <span className="text-[#a39e93] block uppercase tracking-wider font-semibold text-[10px]">Rarity Rating</span>
                <span className="text-[#dfb76c] font-semibold">{item.rarity || 'Very Rare / Historical'}</span>
              </div>
              <div>
                <span className="text-[#a39e93] block uppercase tracking-wider font-semibold text-[10px]">Origin</span>
                <span className="text-[#e8e2d5] font-medium">{item.origin || 'India / Colonial Era'}</span>
              </div>
              <div>
                <span className="text-[#a39e93] block uppercase tracking-wider font-semibold text-[10px]">Status</span>
                <span className="text-emerald-400 font-medium">Available for Inquiry</span>
              </div>
            </div>
          </div>

          {/* Action CTA */}
          <div className="pt-4 border-t border-[#181b26] flex flex-col gap-3">
            <button
              onClick={() => {
                onClose();
                onEnquire(item);
              }}
              className="btn-gold justify-center text-sm py-3"
            >
              ENQUIRE ABOUT THIS PIECE
            </button>
            <p className="text-[11px] text-[#a39e93] text-center">
              Submit an online enquiry or email antiquesuper8319@gmail.com for acquisition details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
