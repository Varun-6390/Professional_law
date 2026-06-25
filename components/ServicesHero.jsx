"use client";

import { useState, useEffect, useRef } from "react";
import { Sparkles, ArrowRight, Search, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ConsultationModal from "./ConsultationModal";
import Link from "next/link";

export default function ServicesHero({ activeTab, onTabChange }) {
  const [modalOpen, setModalOpen] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const [servicesList, setServicesList] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchContainerRef = useRef(null);

  const placeholderSuggestions = [
    "Search for Factory License...",
    "Search for Pollution NOC...",
    "Search for Trademark Registration...",
    "Search for MSME Registration...",
    "Search for FSSAI License...",
    "Search for GST Registration..."
  ];

  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowPlaceholder(false);
      setTimeout(() => {
        setPlaceholderIndex((prev) => (prev + 1) % placeholderSuggestions.length);
        setShowPlaceholder(true);
      }, 400);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    fetch('/data/services-list.json')
      .then(res => res.json())
      .then(data => setServicesList(data))
      .catch(err => console.error("Error fetching services list:", err));
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredServices([]);
    } else {
      const lowerQuery = searchQuery.toLowerCase();
      setFilteredServices(
        servicesList
          .filter(s => (s.title || s.slug || '').toLowerCase().includes(lowerQuery))
          .slice(0, 6) // limit to top 6 results
      );
    }
  }, [searchQuery, servicesList]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setIsSearchFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const tabs = [
    { id: "all", label: "All Services" },
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

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-10 w-full max-w-2xl relative"
          ref={searchContainerRef}
        >
          <div className="relative group">
            <div className={`absolute inset-0 bg-gradient-to-r from-blue-500 to-[#f97316] rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-500 ${isSearchFocused ? 'opacity-50' : ''}`}></div>
            <div className="relative bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl flex items-center p-2 focus-within:border-[#f97316]/50 focus-within:bg-white/15 transition-all">
              <Search className="w-6 h-6 text-gray-400 ml-3" />
              <input
                type="text"
                className="w-full bg-transparent border-none outline-none text-white px-4 py-3 text-lg relative z-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
              />
              {searchQuery === "" && (
                <div className="absolute left-[52px] top-1/2 -translate-y-1/2 pointer-events-none overflow-hidden h-7 flex items-center">
                  <AnimatePresence mode="wait">
                    {showPlaceholder && (
                      <motion.span
                        key={placeholderIndex}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="text-gray-400 text-lg font-medium whitespace-nowrap"
                      >
                        {placeholderSuggestions[placeholderIndex]}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </div>
          </div>

          {/* Search Results Dropdown */}
          <AnimatePresence>
            {isSearchFocused && searchQuery.trim() !== '' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-full left-0 right-0 mt-3 bg-white rounded-2xl shadow-2xl overflow-hidden z-50 border border-gray-100 text-left"
              >
                {filteredServices.length > 0 ? (
                  <ul className="py-2">
                    {filteredServices.map((service, idx) => (
                      <li key={idx}>
                        <Link
                          href={`/services/${service.slug}`}
                          className="flex items-center gap-3 px-5 py-3 hover:bg-gray-50 transition-colors group"
                          onClick={() => setIsSearchFocused(false)}
                        >
                          <div className="bg-blue-50 text-blue-500 p-2 rounded-lg group-hover:bg-blue-500 group-hover:text-white transition-colors">
                            <FileText className="w-5 h-5" />
                          </div>
                          <span className="text-[#131a31] font-medium text-[15px]">{service.title || service.slug}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="px-6 py-8 text-center text-gray-500">
                    <Search className="w-8 h-8 mx-auto mb-3 text-gray-300" />
                    <p>No services found for "{searchQuery}"</p>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
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
            className="bg-white/10 text-white hover:bg-white hover:text-[#0f172a] px-8 py-4 rounded-xl font-bold text-base border border-white/20 transition-all backdrop-blur-md"
          >
            Browse Services
          </button>
        </motion.div>

      </div>

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
