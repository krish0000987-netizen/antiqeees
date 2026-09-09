import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ShieldCheck, ChevronRight, FileText, Mail } from 'lucide-react';
import Logo from './Logo';

export default function Navbar({ onOpenEnquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

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
      <div className="bg-[#0e1017] border-b border-[#c5a059]/20 text-[#a39e93] text-[11px] sm:text-xs py-2 px-3 sm:px-4 font-sans z-50 relative">
        <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-2 text-center sm:text-left">
          <div className="flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
            <span className="truncate max-w-[280px] sm:max-w-none">Indore’s Premier Heritage Vault & Coin Numismatic Gallery</span>
          </div>
          <div className="flex items-center gap-3 text-[10px] sm:text-[11px]">
            <span className="hidden sm:inline">Indore, MP - 452003</span>
            <span className="text-[#c5a059] hidden sm:inline">•</span>
            <a href="mailto:antiquesuper8319@gmail.com" className="text-[#dfb76c] hover:underline flex items-center gap-1 font-semibold">
              <Mail className="w-3 h-3 text-[#c5a059]" /> antiquesuper8319@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#090a0f]/95 backdrop-blur-md border-b border-[#c5a059]/30 py-2.5 sm:py-3 shadow-2xl'
            : 'bg-[#090a0f]/85 backdrop-blur-sm border-b border-[#c5a059]/15 py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-2.5 xl:px-3 py-2 text-xs xl:text-sm font-medium tracking-wide transition-all duration-200 rounded-sm relative ${
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
                      <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-transparent via-[#c5a059] to-transparent" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button onClick={onOpenEnquiry} className="btn-gold">
              ENQUIRE NOW
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenEnquiry}
              className="px-2.5 py-1.5 text-[11px] font-bold tracking-wider uppercase bg-gradient-to-r from-[#dfb76c] to-[#c5a059] text-black rounded shadow"
            >
              ENQUIRE
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#dfb76c] hover:bg-[#181b26] rounded-md transition-colors border border-[#c5a059]/20"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-[#090a0f] flex flex-col h-screen w-screen overflow-hidden animate-fade-in-up">
          <div className="flex items-center justify-between p-4 border-b border-[#c5a059]/30 bg-[#07080b] shrink-0">
            <Logo />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#dfb76c] hover:bg-[#181b26] rounded-full border border-[#c5a059]/30"
              aria-label="Close Menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-6 flex flex-col justify-between">
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-widest text-[#c5a059] font-bold px-2 block mb-3">
                Vault Navigation Menu
              </span>
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between py-3 px-3 text-base font-serif rounded-md transition-all ${
                      isActive
                        ? 'text-[#dfb76c] font-bold bg-[#181b26] border-l-4 border-l-[#c5a059]'
                        : 'text-[#e8e2d5] hover:bg-[#12141d]'
                    }`
                  }
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-[#c5a059]/60" />
                </NavLink>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[#181b26] flex flex-col gap-2.5 shrink-0">
              <a
                href="mailto:antiquesuper8319@gmail.com"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded border border-[#c5a059]/30 text-[#dfb76c] text-xs font-semibold bg-[#12141d]"
              >
                <Mail className="w-4 h-4 text-[#c5a059]" /> antiquesuper8319@gmail.com
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="btn-gold justify-center text-xs py-3.5 w-full"
              >
                <FileText className="w-4 h-4" /> REQUEST ANTIQUE EVALUATION
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
