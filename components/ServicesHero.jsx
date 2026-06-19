"use client";

import { useState } from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ConsultationModal from "./ConsultationModal";

export default function ServicesHero({ activeTab, onTabChange }) {
  const [modalOpen, setModalOpen] = useState(false);

  const tabs = [
    { id: "all", label: "All Services" },
    { id: "factory-license", label: "Factory License" },
    { id: "pollution-noc", label: "Pollution NOC" },
    { id: "other-nocs", label: "Other NOCs" },
  ];

  const handleTabClick = (tabId) => {
    onTabChange(tabId);
    if (tabId === "all") {
      const el = document.getElementById("services-list-container");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      const el = document.getElementById(tabId);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative bg-[#0f172a] text-white pt-32 pb-16 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#1572ed] blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#f97316] blur-[120px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10 flex flex-col items-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-[#1572ed] text-sm font-semibold mb-6 shadow-sm"
        >
          <Sparkles size={16} className="text-[#f97316]" />
          <span>Industrial Compliance Suite</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight max-w-4xl"
        >
          State-wise Industrial <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#f97316]">
            Licenses & NOCs
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed"
        >
          Quick, reliable, and compliant registration support for Factory License, Pollution Board Consent (CTE & CTO), Fire Safety NOCs, and Labour laws.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <button
            onClick={() => setModalOpen(true)}
            className="bg-[#f97316] text-white hover:bg-[#ea580c] px-8 py-4 rounded-xl font-bold text-base shadow-lg shadow-orange-500/20 transition-all flex items-center justify-center gap-2 group"
          >
            Get Free Consultation
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => {
              const el = document.getElementById("services-list-container");
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="bg-white/10 text-white hover:bg-white/20 px-8 py-4 rounded-xl font-bold text-base border border-white/20 transition-all"
          >
            Browse Services
          </button>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 sm:mt-24 w-full max-w-2xl bg-white/5 border border-white/10 rounded-2xl p-2 flex flex-wrap gap-2 items-center justify-center shadow-lg backdrop-blur-md"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`flex-grow sm:flex-grow-0 px-6 py-3 rounded-xl text-sm md:text-base font-bold transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-[#1572ed] text-white shadow-lg shadow-blue-500/25 scale-[1.02]"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>
      </div>

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
