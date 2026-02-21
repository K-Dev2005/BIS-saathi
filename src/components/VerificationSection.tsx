"use client";
import { useState } from 'react';
import { Search, CheckCircle2, AlertCircle, Clock, MapPin, Copy, Download, ShieldAlert } from 'lucide-react';
import { products, type Product } from '@/data/products';
import { useGamification } from '@/hooks/useGamification';
import { jsPDF } from 'jspdf';
import { motion, AnimatePresence } from 'framer-motion';

export const VerificationSection = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<Product | null | 'not_found'>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const { incrementVerifications, completeComplaint } = useGamification();

  const handleVerify = () => {
    if (!query.trim()) return;
    
    const found = products.find(p => p.cml_code.toLowerCase() === query.trim().toLowerCase());
    setResult(found || 'not_found');
    incrementVerifications();
  };

  const generateComplaintDraft = async (product: Product | 'not_found') => {
    setIsGenerating(true);
    
    let location = "Unknown Location";
    try {
      const pos = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
      location = `Lat: ${pos.coords.latitude}, Lng: ${pos.coords.longitude}`;
    } catch (e) {
      console.error("Location access denied", e);
    }

    const timestamp = new Date().toLocaleString();
    const productInfo = product === 'not_found' ? `Unknown Product (${query})` : `${product.product_name} (${product.cml_code})`;
    const status = product === 'not_found' ? 'Not Registered' : product.status;

    const draft = `
Subject: Formal Complaint Regarding Non-Compliant Product - BIS Saathi Portal

To, 
The Bureau of Indian Standards,
India.

Respected Sir/Madam,

I am writing to report a product that appears to be non-compliant with BIS certification standards. 

Product Details:
- Name/Code: ${productInfo}
- Reported Status: ${status.toUpperCase()}
- Identified At: ${location}
- Timestamp: ${timestamp}

The product lacks a valid ISI mark or its license number is invalid/expired/suspended. I request you to investigate this matter.

Sincerely,
Concerned Consumer
    `.trim();

    // Copy to clipboard
    await navigator.clipboard.writeText(draft);
    alert("Complaint draft copied to clipboard!");
    
    // PDF Generation
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("BIS Compliance Complaint Draft", 20, 20);
    doc.setFontSize(12);
    doc.text(draft, 20, 40, { maxWidth: 170 });
    doc.save(`BIS_Complaint_${query}.pdf`);

    completeComplaint();
    setIsGenerating(false);
  };

  return (
    <section className="py-12 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-navy mb-4">Validate BIS Certification</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Protect yourself from sub-standard products. Enter the 7-digit CM/L code or license number found near the ISI mark to verify its authenticity.
        </p>
      </div>

      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-navy to-saffron rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative flex items-center bg-white rounded-xl shadow-2xl overflow-hidden p-2">
          <input
            type="text"
            placeholder="Enter CM/L-1234567..."
            className="flex-grow px-6 py-4 text-lg outline-none text-navy font-medium"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleVerify()}
          />
          <button
            onClick={handleVerify}
            className="bg-navy text-white px-8 py-4 rounded-lg font-bold hover:bg-navy/90 transition flex items-center space-x-2"
          >
            <Search className="w-5 h-5 text-saffron" />
            <span>Verify</span>
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-12"
          >
            {result === 'not_found' ? (
              <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8 text-center">
                <ShieldAlert className="w-16 h-16 text-red-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-red-700 mb-2">Certification Not Found</h3>
                <p className="text-red-600 mb-6">This CM/L code is not registered in our database. It might be a fraudulent ISI mark.</p>
                <button
                  onClick={() => generateComplaintDraft('not_found')}
                  disabled={isGenerating}
                  className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition flex items-center space-x-2 mx-auto"
                >
                  <AlertCircle className="w-5 h-5" />
                  <span>Generate Complaint Draft (+20 pts)</span>
                </button>
              </div>
            ) : (
              <div className={`rounded-2xl border-l-8 p-8 shadow-lg ${
                result.status === 'valid' ? 'bg-green-50 border-green-500' : 'bg-amber-50 border-amber-500'
              }`}>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      {result.status === 'valid' ? (
                        <CheckCircle2 className="w-6 h-6 text-green-600" />
                      ) : (
                        <Clock className="w-6 h-6 text-amber-600" />
                      )}
                      <span className={`text-xl font-bold ${result.status === 'valid' ? 'text-green-700' : 'text-amber-700'}`}>
                        {result.status.toUpperCase()}
                      </span>
                    </div>
                    <h2 className="text-3xl font-extrabold text-navy mb-1">{result.product_name}</h2>
                    <p className="text-slate-500 font-medium">{result.manufacturer} • {result.category}</p>
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <div className="bg-white/50 p-3 rounded-lg shadow-sm">
                        <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">CM/L Code</span>
                        <p className="font-mono text-lg font-bold text-navy">{result.cml_code}</p>
                      </div>
                      <div className="bg-white/50 p-3 rounded-lg shadow-sm">
                        <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">Expiry Date</span>
                        <p className="font-bold text-navy">{result.expiry}</p>
                      </div>
                    </div>
                  </div>
                  
                  {result.status !== 'valid' && (
                    <div className="flex flex-col gap-3">
                       <button
                        onClick={() => generateComplaintDraft(result)}
                        disabled={isGenerating}
                        className="bg-navy text-white px-6 py-4 rounded-xl font-bold hover:bg-navy/90 transition flex items-center justify-center space-x-2 shadow-lg"
                      >
                        <ShieldAlert className="w-5 h-5 text-saffron" />
                        <span>Report Violation (+20 pts)</span>
                      </button>
                    </div>
                  )}
                  
                  {result.status === 'valid' && (
                     <div className="bg-green-100 p-4 rounded-xl border border-green-200">
                        <p className="text-green-800 font-bold text-sm">Product safe to use!</p>
                        <p className="text-green-600 text-xs">Certified by BIS standards.</p>
                     </div>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
