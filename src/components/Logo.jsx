import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ className = "h-11" }) {
  return (
    <Link to="/" className="flex items-center gap-3 group text-decoration-none">
      <div className="relative flex items-center justify-center">
        {/* Decorative Gold Crest Circle */}
        <svg viewBox="0 0 100 100" className={`${className} w-auto text-[#c5a059] filter drop-shadow-[0_0_8px_rgba(197,160,89,0.4)] transition-transform duration-500 group-hover:scale-105`}>
          <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2" />
          <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="1" />
          
          {/* Inner Coin Accent */}
          <circle cx="50" cy="50" r="30" fill="#12141d" stroke="#dfb76c" strokeWidth="1" />
          <path d="M 50 24 L 54 36 L 66 36 L 56 44 L 60 56 L 50 48 L 40 56 L 44 44 L 34 36 L 46 36 Z" fill="none" stroke="#c5a059" strokeWidth="1" />
          
          {/* Circular Text Emulation */}
          <path id="curve" d="M 22,50 A 28,28 0 0,1 78,50" fill="none" />
          <text fontSize="6.5" fill="#dfb76c" fontWeight="bold" letterSpacing="1.2">
            <textPath href="#curve" startOffset="50%" textAnchor="middle">
              SUPER ANTIQUE
            </textPath>
          </text>
        </svg>
      </div>

      <div className="flex flex-col">
        <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-white group-hover:text-[#dfb76c] transition-colors leading-tight">
          ANTIQUE
        </span>
        <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-[#c5a059] font-medium leading-none">
          SUPER ANTIQUE • INDORE
        </span>
      </div>
    </Link>
  );
}
