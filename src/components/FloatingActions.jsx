import React, { useState } from 'react';
import { Phone, MessageCircle, FileText, X } from 'lucide-react';

export default function FloatingActions({ onOpenEnquiry }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 group">
      {/* Floating Buttons Menu */}
      {expanded && (
        <div className="flex flex-col items-end gap-2.5 animate-fade-in-up">
          {/* Call Button */}
          <a
            href="tel:+919826035259"
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#181b26] text-white border border-[#c5a059]/40 hover:border-[#dfb76c] shadow-2xl transition-all hover:scale-105 hover:bg-[#202433]"
            title="Call +91 98260 35259"
          >
            <span className="text-xs font-semibold tracking-wide">Call +91 98260 35259</span>
            <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white">
              <Phone className="w-4 h-4" />
            </div>
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/919826035259?text=Hello%20Antique%20Super%20Antique,%20I%20have%20an%20enquiry%20regarding%20old%20coins%20or%20antiques."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#181b26] text-white border border-[#c5a059]/40 hover:border-[#dfb76c] shadow-2xl transition-all hover:scale-105 hover:bg-[#202433]"
            title="Chat on WhatsApp"
          >
            <span className="text-xs font-semibold tracking-wide">WhatsApp Us</span>
            <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white">
              <MessageCircle className="w-4.5 h-4.5 fill-current" />
            </div>
          </a>

          {/* Quick Evaluation Button */}
          <button
            onClick={onOpenEnquiry}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-[#dfb76c] to-[#c5a059] text-black border border-[#dfb76c] shadow-2xl transition-all hover:scale-105 font-bold"
          >
            <span className="text-xs tracking-wide uppercase">Request Evaluation</span>
            <div className="w-8 h-8 rounded-full bg-black/20 flex items-center justify-center text-black">
              <FileText className="w-4 h-4" />
            </div>
          </button>
        </div>
      )}

      {/* Main Toggle Fab */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-13 h-13 rounded-full bg-[#090a0f] border-2 border-[#c5a059] text-[#dfb76c] shadow-2xl flex items-center justify-center hover:bg-[#181b26] transition-transform hover:scale-110 active:scale-95 gold-glow"
        aria-label="Quick Actions"
      >
        {expanded ? (
          <X className="w-6 h-6 text-[#dfb76c]" />
        ) : (
          <div className="relative">
            <MessageCircle className="w-6 h-6 text-[#dfb76c]" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#dfb76c] rounded-full animate-ping" />
          </div>
        )}
      </button>
    </div>
  );
}
