"use client";

import { useState } from "react";
import { PhoneCall } from "lucide-react";
import ConsultationModal from "./ConsultationModal";

export default function CTASection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="py-16 md:py-24 bg-white text-center w-full relative z-10">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="w-16 h-16 rounded-full bg-[#1572ed]/10 text-[#1572ed] flex items-center justify-center mx-auto mb-6 md:mb-8 animate-bounce">
          <PhoneCall size={28} />
        </div>

        <h2 className="text-3xl md:text-5xl font-extrabold text-[#314259] tracking-tight mb-4">
          Need Expert Assistance with Licensing?
        </h2>

        <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed">
          Schedule a free compliance audit. We help you choose the right category, verify documents, and submit error-free applications to ensure instant approvals.
        </p>

        <button
          onClick={() => setModalOpen(true)}
          className="bg-[#f97316] text-white hover:bg-[#ea580c] font-bold text-base md:text-lg px-8 py-4 rounded-xl shadow-lg shadow-orange-500/20 hover:shadow-xl hover:shadow-orange-500/30 transform hover:-translate-y-0.5 transition-all duration-300"
        >
          Request Callback
        </button>
      </div>

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
