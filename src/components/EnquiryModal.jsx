import React, { useState } from 'react';
import { X, Upload, CheckCircle2, AlertCircle } from 'lucide-react';

export default function EnquiryModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    enquiryType: 'evaluation',
    category: 'old-coins',
    approxAge: '',
    description: '',
    message: '',
  });

  const [files, setFiles] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      const filePreviews = selectedFiles.map((file) => ({
        name: file.name,
        url: URL.createObjectURL(file),
      }));
      setFiles((prev) => [...prev, ...filePreviews]);
    }
  };

  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFiles([]);
    setFormData({
      name: '',
      phone: '',
      email: '',
      enquiryType: 'evaluation',
      category: 'old-coins',
      approxAge: '',
      description: '',
      message: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#12141d] border border-[#c5a059]/40 rounded-lg shadow-2xl overflow-hidden my-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-[#181b26] bg-[#090a0f]">
          <div>
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#c5a059] font-bold">Antique Super Antique</span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mt-0.5">Item Evaluation & Consultation</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#a39e93] hover:text-[#dfb76c] hover:bg-[#181b26] rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-4 sm:p-6 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="py-8 sm:py-12 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center text-emerald-400 mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl sm:text-3xl font-serif text-white mb-2">Enquiry Received</h4>
              <p className="text-[#a39e93] max-w-md mx-auto mb-6 text-xs sm:text-sm leading-relaxed">
                Thank you, <strong className="text-white">{formData.name}</strong>. Our evaluation team in Indore will review your item details and call back at <strong className="text-[#dfb76c]">{formData.phone}</strong> promptly.
              </p>
              <button onClick={resetForm} className="btn-gold w-full sm:w-auto justify-center">
                CLOSE WINDOW
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#a39e93] mb-1 font-semibold">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rajesh Sharma"
                    className="w-full bg-[#181b26] border border-[#c5a059]/30 rounded px-3 py-2 text-white text-xs sm:text-sm focus:outline-none focus:border-[#dfb76c]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#a39e93] mb-1 font-semibold">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98260 35259"
                    className="w-full bg-[#181b26] border border-[#c5a059]/30 rounded px-3 py-2 text-white text-xs sm:text-sm focus:outline-none focus:border-[#dfb76c]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#a39e93] mb-1 font-semibold">
                    Enquiry Type
                  </label>
                  <select
                    name="enquiryType"
                    value={formData.enquiryType}
                    onChange={handleChange}
                    className="w-full bg-[#181b26] border border-[#c5a059]/30 rounded px-3 py-2 text-white text-xs sm:text-sm focus:outline-none focus:border-[#dfb76c]"
                  >
                    <option value="evaluation">Sell / Valuation Request</option>
                    <option value="buy">Looking to Buy</option>
                    <option value="consultation">Collection Consultation</option>
                    <option value="general">General Enquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#a39e93] mb-1 font-semibold">
                    Item Category
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full bg-[#181b26] border border-[#c5a059]/30 rounded px-3 py-2 text-white text-xs sm:text-sm focus:outline-none focus:border-[#dfb76c]"
                  >
                    <option value="old-coins">Rare / Old Coins</option>
                    <option value="vintage-currency">Vintage Currency Notes</option>
                    <option value="antique-objects">Antique Brassware & Objects</option>
                    <option value="jewelry">Heritage Silver / Gold Jewelry</option>
                    <option value="watches">Vintage Watches & Timepieces</option>
                    <option value="collectibles">Historical Collectibles & Curios</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#a39e93] mb-1 font-semibold">
                  Upload Photos of Both Sides (Recommended)
                </label>
                <div className="relative border-2 border-dashed border-[#c5a059]/40 hover:border-[#dfb76c] bg-[#181b26] rounded p-3 text-center cursor-pointer">
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleFileChange}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  />
                  <Upload className="w-6 h-6 text-[#c5a059] mx-auto mb-1" />
                  <p className="text-xs text-[#e8e2d5]">Tap to attach front & back photos</p>
                </div>

                {files.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {files.map((file, idx) => (
                      <div key={idx} className="relative w-14 h-14 rounded border border-[#c5a059] overflow-hidden">
                        <img src={file.url} alt="Preview" className="w-full h-full object-cover" />
                        <button
                          type="button"
                          onClick={() => removeFile(idx)}
                          className="absolute inset-0 bg-black/60 text-red-400 flex items-center justify-center"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#a39e93] mb-1 font-semibold">
                  Description / Notes
                </label>
                <textarea
                  name="description"
                  rows={2}
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Mention markings, mint marks, material, or origin..."
                  className="w-full bg-[#181b26] border border-[#c5a059]/30 rounded px-3 py-2 text-white text-xs sm:text-sm focus:outline-none focus:border-[#dfb76c]"
                />
              </div>

              <div className="p-2.5 bg-[#090a0f] border border-[#c5a059]/20 rounded text-[10px] sm:text-[11px] text-[#a39e93] flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <span>
                  <strong>Valuation Disclaimer:</strong> Final evaluation depends on physical examination, condition, rarity, and authenticity.
                </span>
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-[#a39e93]"
                >
                  CANCEL
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-gold py-2.5 px-5 text-xs"
                >
                  {isSubmitting ? 'SUBMITTING...' : 'SUBMIT ENQUIRY'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
