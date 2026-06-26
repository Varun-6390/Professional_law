"use client";

import { useState, useEffect } from "react";
import { X, ShieldCheck, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ConsultationForm from "./ConsultationForm";

export default function PopupModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);

  useEffect(() => {
    // Show popup after 3 seconds, but only once per session/visit
    const timer = setTimeout(() => {
      if (!hasOpened) {
        setIsOpen(true);
        setHasOpened(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [hasOpened]);

  // Optional: Prevent background scrolling when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[#0f172a]/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            className="relative z-10 w-full max-w-5xl bg-white rounded-2xl md:rounded-[24px] shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-y-visible [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 bg-gray-100/80 hover:bg-gray-200 text-gray-600 rounded-full transition-colors z-50 backdrop-blur-md"
            >
              <X size={20} strokeWidth={2.5} />
            </button>

            {/* Left Section - hidden on mobile */}
            <div className="hidden md:flex w-full md:w-[45%] lg:w-[40%] bg-[#1a2b3c] p-8 md:p-10 flex-col text-white relative overflow-hidden shrink-0">
              {/* Background Effects */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#f97316]/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

              <div className="relative z-10 h-full flex flex-col">
                <div className="inline-flex items-center self-start gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-[11px] font-bold text-white mb-6 md:mb-8 tracking-widest uppercase shadow-sm">
                  <ShieldCheck size={14} className="text-[#f97316]" />
                  Trusted Compliance Partner
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-white mb-4 leading-[1.15]">
                  Simplify Your Business & Industrial Compliance
                </h2>
                <p className="text-blue-100/80 text-sm md:text-[15px] mb-8 leading-relaxed">
                  Share your details to get expert guidance on Factory Licenses, Pollution NOCs, Trade Licenses, GST, Trademarks, and all corporate registrations.
                </p>

                <div className="space-y-3 mt-auto">
                  {[
                    "Factory Licenses & Renewals",
                    "Pollution Control Board NOCs",
                    "GST Registration & Returns",
                    "Trademark Registration"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-xl transition-colors hover:bg-white/10">
                      <CheckCircle2 size={18} className="text-[#f97316] shrink-0" />
                      <span className="text-sm font-semibold text-white/90">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Section (Form) */}
            <div className="w-full md:w-[55%] lg:w-[60%] bg-white flex items-center justify-center p-6 md:p-10 lg:p-12 relative">
              <ConsultationForm isPopup={true} />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
