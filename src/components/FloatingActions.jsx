import React, { useState } from 'react';
import { MessageCircle, FileText, X, Mail } from 'lucide-react';

export default function FloatingActions({ onOpenEnquiry }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5">
      {/* Floating Buttons Menu */}
      {expanded && (
        <div className="flex flex-col items-end gap-2 animate-fade-in-up">
          {/* Email Button */}
          <a
            href="mailto:antiquesuper8319@gmail.com"
            className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#181b26] text-white border border-[#c5a059]/40 shadow-2xl transition-transform active:scale-95"
            title="Email us"
          >
            <span className="text-[11px] font-semibold tracking-wide">antiquesuper8319@gmail.com</span>
            <div className="w-7 h-7 rounded-full bg-[#c5a059] flex items-center justify-center text-black shrink-0 font-bold">
              <Mail className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/919826035259?text=Hello%20Antique%20Super%20Antique,%20I%20have%20an%20enquiry%20regarding%20old%20coins%20or%20antiques."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#181b26] text-white border border-[#c5a059]/40 shadow-2xl transition-transform active:scale-95"
            title="Chat on WhatsApp"
          >
            <span className="text-[11px] font-semibold tracking-wide">WhatsApp Us</span>
            <div className="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0">
              <MessageCircle className="w-4 h-4 fill-current" />
            </div>
          </a>

          {/* Quick Evaluation Button */}
          <button
            onClick={() => {
              setExpanded(false);
              onOpenEnquiry();
            }}
            className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-gradient-to-r from-[#dfb76c] to-[#c5a059] text-black border border-[#dfb76c] shadow-2xl transition-transform active:scale-95 font-bold"
          >
            <span className="text-[11px] tracking-wide uppercase">Request Evaluation</span>
            <div className="w-7 h-7 rounded-full bg-black/20 flex items-center justify-center text-black shrink-0">
              <FileText className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      )}

      {/* Main Toggle Fab */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#090a0f] border-2 border-[#c5a059] text-[#dfb76c] shadow-2xl flex items-center justify-center hover:bg-[#181b26] transition-transform active:scale-90 gold-glow"
        aria-label="Quick Contact Actions"
      >
        {expanded ? (
          <X className="w-5 h-5 sm:w-6 sm:h-6 text-[#dfb76c]" />
        ) : (
          <div className="relative">
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#dfb76c]" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#dfb76c] rounded-full animate-ping" />
          </div>
        )}
      </button>
    </div>
  );
}
