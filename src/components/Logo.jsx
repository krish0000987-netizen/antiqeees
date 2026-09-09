import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ className = "h-10 sm:h-12" }) {
  return (
    <Link to="/" className="flex items-center gap-3 group text-decoration-none shrink-0">
      <div className="relative flex items-center justify-center shrink-0">
        <img
          src="/images/logo.png"
          alt="Antique Super Antique Logo"
          className={`${className} w-auto object-contain filter drop-shadow-[0_0_8px_rgba(197,160,89,0.3)] transition-transform duration-300 group-hover:scale-105`}
        />
      </div>

      <div className="flex flex-col">
        <span className="font-serif text-lg sm:text-2xl font-bold tracking-wider text-white group-hover:text-[#dfb76c] transition-colors leading-tight">
          ANTIQUE
        </span>
        <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.28em] text-[#c5a059] font-medium leading-none">
          SUPER ANTIQUE • INDORE
        </span>
      </div>
    </Link>
  );
}
