import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import EnquiryModal from './components/EnquiryModal';
import LightboxModal from './components/LightboxModal';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import OldCoins from './pages/OldCoins';
import AntiqueItems from './pages/AntiqueItems';
import BuyCoins from './pages/BuyCoins';
import SellCoins from './pages/SellCoins';
import AntiqueBuySell from './pages/AntiqueBuySell';
import Gallery from './pages/Gallery';
import CollectorGuide from './pages/CollectorGuide';
import Contact from './pages/Contact';

// ScrollToTop Helper Component
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [selectedLightboxItem, setSelectedLightboxItem] = useState(null);

  const handleOpenEnquiry = () => {
    setIsEnquiryOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryOpen(false);
  };

  const handleOpenLightbox = (item) => {
    setSelectedLightboxItem(item);
  };

  const handleCloseLightbox = () => {
    setSelectedLightboxItem(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#090a0f] text-[#e8e2d5] selection:bg-[#c5a059] selection:text-black">
      <ScrollToTop />
      
      {/* Sticky Header Navigation */}
      <Navbar onOpenEnquiry={handleOpenEnquiry} />

      {/* Main Page Routing View */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home onOpenEnquiry={handleOpenEnquiry} onOpenLightbox={handleOpenLightbox} />} />
          <Route path="/about" element={<About onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="/old-coins" element={<OldCoins onOpenEnquiry={handleOpenEnquiry} onOpenLightbox={handleOpenLightbox} />} />
          <Route path="/antique-items" element={<AntiqueItems onOpenEnquiry={handleOpenEnquiry} onOpenLightbox={handleOpenLightbox} />} />
          <Route path="/buy-coins" element={<BuyCoins onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="/sell-coins" element={<SellCoins onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="/antique-buy-sell" element={<AntiqueBuySell onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="/gallery" element={<Gallery onOpenEnquiry={handleOpenEnquiry} onOpenLightbox={handleOpenLightbox} />} />
          <Route path="/collector-guide" element={<CollectorGuide onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="/contact" element={<Contact onOpenEnquiry={handleOpenEnquiry} />} />
        </Routes>
      </main>

      {/* Global Luxury Footer */}
      <Footer />

      {/* Persistent Floating Quick Actions Widget */}
      <FloatingActions onOpenEnquiry={handleOpenEnquiry} />

      {/* Interactive Evaluation Enquiry Modal */}
      <EnquiryModal isOpen={isEnquiryOpen} onClose={handleCloseEnquiry} />

      {/* Museum Lightbox Viewer Modal */}
      <LightboxModal
        item={selectedLightboxItem}
        onClose={handleCloseLightbox}
        onEnquire={handleOpenEnquiry}
      />
    </div>
  );
}
