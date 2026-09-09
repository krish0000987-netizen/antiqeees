import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ShieldCheck, ChevronRight } from 'lucide-react';
import Logo from './Logo';

export default function Navbar({ onOpenEnquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Old Coins', path: '/old-coins' },
    { name: 'Antique Items', path: '/antique-items' },
    { name: 'Buy Coins', path: '/buy-coins' },
    { name: 'Sell Coins', path: '/sell-coins' },
    { name: 'Buy & Sell Antiques', path: '/antique-buy-sell' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Collector Guide', path: '/collector-guide' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-[#0e1017] border-b border-[#c5a059]/20 text-[#a39e93] text-xs py-2 px-4 text-center flex items-center justify-between font-sans z-50 relative">
        <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Indore’s Premier Heritage Vault & Coin Numismatic Gallery</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Indore, MP - 452003</span>
            <span className="text-[#c5a059]">•</span>
            <a href="tel:+919826035259" className="text-[#dfb76c] hover:underline flex items-center gap-1 font-semibold">
              <Phone className="w-3 h-3" /> +91 98260 35259
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#090a0f]/95 backdrop-blur-md border-b border-[#c5a059]/30 py-3 shadow-2xl'
            : 'bg-[#090a0f]/80 backdrop-blur-sm border-b border-[#c5a059]/15 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 text-xs xl:text-sm font-medium tracking-wide transition-all duration-200 rounded-sm relative ${
                    isActive
                      ? 'text-[#dfb76c] font-semibold'
                      : 'text-[#e8e2d5]/80 hover:text-[#dfb76c]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-transparent via-[#c5a059] to-transparent" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Header Action Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenEnquiry}
              className="btn-gold"
            >
              ENQUIRE NOW
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={onOpenEnquiry}
              className="px-3 py-1.5 text-xs font-bold bg-gradient-to-r from-[#dfb76c] to-[#c5a059] text-black rounded"
            >
              ENQUIRE
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#dfb76c] hover:bg-[#181b26] rounded-md transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-black/80 backdrop-blur-md flex flex-col">
          <div className="flex items-center justify-between p-4 border-b border-[#c5a059]/30 bg-[#090a0f]">
            <Logo />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#dfb76c] hover:bg-[#181b26] rounded-md"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-2">
            <p className="text-xs uppercase tracking-widest text-[#c5a059] font-bold mb-2">Navigation Menu</p>
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between py-3 text-base font-serif border-b border-[#181b26] transition-colors ${
                    isActive ? 'text-[#dfb76c] font-bold pl-2 border-l-2 border-l-[#c5a059]' : 'text-[#e8e2d5]'
                  }`
                }
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-[#c5a059]/60" />
              </NavLink>
            ))}

            <div className="mt-8 flex flex-col gap-3">
              <a
                href="tel:+919826035259"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded border border-[#c5a059] text-[#dfb76c] font-semibold text-sm"
              >
                <Phone className="w-4 h-4" /> CALL +91 98260 35259
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="btn-gold justify-center text-sm py-3"
              >
                REQUEST ANTIQUE EVALUATION
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
