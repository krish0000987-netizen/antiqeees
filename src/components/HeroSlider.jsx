import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight, Mail } from 'lucide-react';

export default function HeroSlider({ onOpenEnquiry }) {
  const slides = [
    {
      id: 1,
      image: '/images/hero_ancient_coins.jpg',
      tag: 'Ancient Numismatic Treasures',
      title: 'Every Coin Holds a Story.',
      subtitle: 'Discover, Buy & Sell Old Coins and Rare Antique Treasures in Indore.',
    },
    {
      id: 2,
      image: '/images/hero_rare_silver.jpg',
      tag: 'British & Princely State Currency',
      title: 'Centuries of Indian Heritage.',
      subtitle: 'Preserving Victorian rupees, Mughal mohurs, and royal silver coins.',
    },
    {
      id: 3,
      image: '/images/hero_antique_artifacts.jpg',
      tag: 'Royal Curiosities & Artifacts',
      title: 'Objects From Another Era.',
      subtitle: 'Authentic brassware, manuscripts, vintage compasses & royal curios.',
    },
    {
      id: 4,
      image: '/images/hero_vintage_watches.jpg',
      tag: 'Luxury Horology & Timepieces',
      title: 'Timeless Mechanical Heritage.',
      subtitle: 'Rare vintage pocket watches, gold chains & horological rarities.',
    },
    {
      id: 5,
      image: '/images/hero_collector_inspection.jpg',
      tag: 'Expert Numismatic Evaluation',
      title: 'Authenticity & Precise Evaluation.',
      subtitle: 'Trusted consultation for inherited collections and rare discoveries.',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // 3 seconds auto-play

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full min-h-[540px] h-[82vh] max-h-[850px] bg-[#090a0f] overflow-hidden flex items-center justify-center">
      {/* Slides images with crossfade & Ken Burns */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover animate-kenburns"
          />
          {/* Dark luxury gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-[#090a0f]/60 to-black/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#090a0f]/50 to-[#090a0f]" />
        </div>
      ))}

      {/* Hero Content Box */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center py-10">
        {/* Tag Pill */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#181b26]/90 border border-[#c5a059]/40 backdrop-blur-md text-[#dfb76c] text-[11px] sm:text-xs font-medium tracking-widest uppercase mb-4 shadow-xl">
          <Sparkles className="w-3 h-3 text-[#c5a059] shrink-0" />
          <span className="truncate max-w-[240px] sm:max-w-none">{slides[currentSlide].tag}</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-4 sm:mb-6 drop-shadow-2xl">
          {slides[currentSlide].title}
        </h1>

        {/* Subheadline */}
        <p className="text-xs sm:text-lg md:text-2xl text-[#e8e2d5]/90 max-w-2xl mx-auto font-light mb-8 sm:mb-10 leading-relaxed drop-shadow-md px-2">
          {slides[currentSlide].subtitle}
        </p>

        {/* Action Buttons Container */}
        <div className="w-full max-w-md sm:max-w-none flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-2">
          <button
            onClick={onOpenEnquiry}
            className="btn-gold text-xs sm:text-sm py-3 px-6 w-full sm:w-auto justify-center"
          >
            SELL YOUR ANTIQUE <ArrowRight className="w-4 h-4" />
          </button>

          <Link
            to="/gallery"
            className="btn-outline-gold text-xs sm:text-sm py-3 px-6 w-full sm:w-auto justify-center"
          >
            EXPLORE COLLECTION
          </Link>

          <a
            href="mailto:antiquesuper8319@gmail.com"
            className="w-full sm:w-auto justify-center flex items-center gap-2 px-5 py-3 rounded text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all"
          >
            <Mail className="w-3.5 h-3.5 text-[#dfb76c]" /> EMAIL US
          </a>
        </div>
      </div>

      {/* Desktop Manual Slide Arrows */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-[#090a0f]/60 hover:bg-[#c5a059] text-[#dfb76c] hover:text-black border border-[#c5a059]/30 transition-all duration-300 backdrop-blur-sm"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-[#090a0f]/60 hover:bg-[#c5a059] text-[#dfb76c] hover:text-black border border-[#c5a059]/30 transition-all duration-300 backdrop-blur-sm"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators / Dots */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 bg-black/50 backdrop-blur-md py-1.5 px-3 rounded-full border border-[#c5a059]/20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-1.5 sm:h-2 rounded-full transition-all duration-500 ${
              idx === currentSlide
                ? 'w-6 sm:w-8 bg-gradient-to-r from-[#dfb76c] to-[#c5a059]'
                : 'w-1.5 sm:w-2 bg-white/30 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
