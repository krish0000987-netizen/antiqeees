import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Shield, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-[#07080b] border-t border-[#c5a059]/25 text-[#a39e93] pt-16 pb-12 font-sans relative overflow-hidden">
      {/* Ambient Gold Glow Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-[#c5a059] to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-14 border-b border-[#181b26]">
          {/* Column 1: Brand Overview */}
          <div className="space-y-4">
            <Logo />
            <p className="text-xs text-[#a39e93] leading-relaxed pt-2">
              Indore’s premier heritage gallery and numismatic valuation vault. Dedicated to the discovery, evaluation, preservation, and exchange of rare historical coins, ancient currency, and royal Indian antique treasures.
            </p>
            <div className="pt-2 text-xs font-semibold text-[#dfb76c] flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#c5a059]" />
              <span>Authenticity & Professional Evaluation</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-serif font-bold uppercase tracking-wider text-white mb-4 border-l-2 border-[#c5a059] pl-3">
              Explore Vault
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/" className="hover:text-[#dfb76c] transition-colors flex items-center gap-1.5">
                  <ArrowUpRight className="w-3 h-3 text-[#c5a059]" /> Home Page
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#dfb76c] transition-colors flex items-center gap-1.5">
                  <ArrowUpRight className="w-3 h-3 text-[#c5a059]" /> About Our Story
                </Link>
              </li>
              <li>
                <Link to="/old-coins" className="hover:text-[#dfb76c] transition-colors flex items-center gap-1.5">
                  <ArrowUpRight className="w-3 h-3 text-[#c5a059]" /> Rare Old Coins
                </Link>
              </li>
              <li>
                <Link to="/antique-items" className="hover:text-[#dfb76c] transition-colors flex items-center gap-1.5">
                  <ArrowUpRight className="w-3 h-3 text-[#c5a059]" /> Antique Items & Objects
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#dfb76c] transition-colors flex items-center gap-1.5">
                  <ArrowUpRight className="w-3 h-3 text-[#c5a059]" /> Digital Museum Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Buying & Selling Services */}
          <div>
            <h4 className="text-sm font-serif font-bold uppercase tracking-wider text-white mb-4 border-l-2 border-[#c5a059] pl-3">
              Services & Guides
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/buy-coins" className="hover:text-[#dfb76c] transition-colors flex items-center gap-1.5">
                  <ArrowUpRight className="w-3 h-3 text-[#c5a059]" /> Buy Old Coins
                </Link>
              </li>
              <li>
                <Link to="/sell-coins" className="hover:text-[#dfb76c] transition-colors flex items-center gap-1.5">
                  <ArrowUpRight className="w-3 h-3 text-[#c5a059]" /> Sell Old Coins
                </Link>
              </li>
              <li>
                <Link to="/antique-buy-sell" className="hover:text-[#dfb76c] transition-colors flex items-center gap-1.5">
                  <ArrowUpRight className="w-3 h-3 text-[#c5a059]" /> Buy & Sell Antiques
                </Link>
              </li>
              <li>
                <Link to="/collector-guide" className="hover:text-[#dfb76c] transition-colors flex items-center gap-1.5">
                  <ArrowUpRight className="w-3 h-3 text-[#c5a059]" /> The Collector’s Guide & FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#dfb76c] transition-colors flex items-center gap-1.5">
                  <ArrowUpRight className="w-3 h-3 text-[#c5a059]" /> Contact Us & Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Location & Contact */}
          <div>
            <h4 className="text-sm font-serif font-bold uppercase tracking-wider text-white mb-4 border-l-2 border-[#c5a059] pl-3">
              Gallery Location
            </h4>
            <div className="space-y-3 text-xs">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <span>Indore, Madhya Pradesh – 452003, India</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#c5a059] shrink-0" />
                <a href="tel:+919826035259" className="text-[#dfb76c] hover:underline font-semibold">
                  +91 98260 35259
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#c5a059] shrink-0" />
                <a href="mailto:antiquesuper8319@gmail.com" className="text-[#e8e2d5] hover:text-[#dfb76c] transition-colors font-medium">
                  antiquesuper8319@gmail.com
                </a>
              </p>
              <div className="pt-2 p-3 bg-[#12141d] rounded border border-[#c5a059]/20 text-[11px]">
                <p className="text-white font-semibold mb-1">Valuation Notice:</p>
                <p className="text-[#a39e93]">
                  All coin and antique evaluations depend on physical or photographic condition examination.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#a39e93]">
          <p>© 2026 Antique Super Antique. All Rights Reserved.</p>
          <div className="flex items-center gap-6 text-[11px]">
            <span className="hover:text-[#dfb76c] cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-[#dfb76c] cursor-pointer">Terms & Conditions</span>
            <span>•</span>
            <span className="hover:text-[#dfb76c] cursor-pointer">Legal Disclaimer</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
