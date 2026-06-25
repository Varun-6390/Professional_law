"use client";

import { Search, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function TrendingServices() {
  const placeholderSuggestions = [
    "Search for ISO Registration...",
    "Search for GST Registration...",
    "Search for Trademark Registration...",
    "Search for Company Incorporation...",
    "Search for FSSAI Registration...",
    "Search for MSME Registration...",
    "Search for Import Export Code...",
    "Search for Clinic License...",
  ];

  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [servicesList, setServicesList] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchContainerRef = useRef(null);

  useEffect(() => {
    fetch('/data/services-list.json')
      .then(res => res.json())
      .then(data => setServicesList(data))
      .catch(err => console.error("Error fetching services list:", err));
  }, []);

  useEffect(() => {
    if (inputValue.trim() === '') {
      setFilteredServices([]);
    } else {
      const lowerQuery = inputValue.toLowerCase();
      setFilteredServices(
        servicesList
          .filter(s => (s.title || s.slug || '').toLowerCase().includes(lowerQuery))
          .slice(0, 6)
      );
    }
  }, [inputValue, servicesList]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setIsSearchFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

  const services = [
    { name: "FSSAI Registration", slug: "fssai-licence-registration" },
    { name: "ISO Registration", slug: "iso-certification" },
    { name: "Company Incorporation", slug: "private-limited-company-registration-india" },
    { name: "GST Registration", slug: "gst-registration-online" },
    { name: "Trademark Registration", slug: "trademark-registration" },
    { name: "Clinic License", slug: "clinic-registration" },
    { name: "MSME Registration", slug: "msme-registration-india" },
    { name: "Import Export Code", slug: "import-export-code-registration-online" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    },
  };

  return (
    <section className="relative py-8 px-4 w-full overflow-hidden flex items-center justify-center min-h-[500px] z-0">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/bgimg.png"
          alt="Trending Services Background"
          fill
          className="object-cover object-center opacity-100"
          style={{ objectPosition: "center 110%" }}
        />
        {/* Soft overlay to ensure text readability */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />
      </div>

      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10 w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Heading */}
        <motion.h2
          variants={itemVariants}
          className="text-2xl md:text-4xl font-extrabold text-[#314259] mb-10 drop-shadow-sm"
        >
          Trending Services
        </motion.h2>

        {/* Search Bar Container */}
        <motion.div
          variants={itemVariants}
          className="relative w-full max-w-2xl mx-auto mb-12"
          ref={searchContainerRef}
        >
          <div className="flex items-stretch w-full border border-white/50 rounded-full overflow-hidden bg-white/90 backdrop-blur-md shadow-lg transition-all focus-within:shadow-xl focus-within:bg-white relative z-20">
            <div className="pl-3 md:pl-6 flex items-center justify-center text-[#1572ed]">
              <Search size={20} className="md:w-[22px] md:h-[22px]" />
            </div>
            <div className="relative flex-1 flex items-center min-w-0">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                className="w-full py-3 md:py-4 px-2 md:px-4 outline-none text-[#314259] bg-transparent text-[14px] md:text-[16px] font-medium relative z-10"
              />
              {/* Animated placeholder — only visible when input is empty */}
              {inputValue === "" && (
                <div className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 pointer-events-none overflow-hidden h-6 flex items-center">
                  <AnimatePresence mode="wait">
                    {showPlaceholder && (
                      <motion.span
                        key={placeholderIndex}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="text-gray-400 text-[13px] md:text-[16px] font-medium whitespace-nowrap"
                      >
                        {placeholderSuggestions[placeholderIndex]}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </div>
            <button className="bg-[#f97316] text-white px-4 md:px-10 font-semibold text-[14px] md:text-[16px] hover:bg-[#ea580c] transition-colors flex items-center justify-center cursor-pointer shrink-0">
              Search
            </button>
          </div>

          {/* Search Results Dropdown */}
          <AnimatePresence>
            {isSearchFocused && inputValue.trim() !== '' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-[calc(100%+8px)] left-0 right-0 bg-white rounded-2xl shadow-2xl overflow-hidden z-50 border border-gray-100 text-left"
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
                    <p>No services found for "{inputValue}"</p>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Tags */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3.5 max-w-[850px] mx-auto"
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={`/services/${service.slug}`}
                className="inline-block bg-white/80 backdrop-blur-md text-[#314259] font-semibold text-[14px] px-6 py-3 rounded-full border border-white/40 shadow-sm hover:shadow-md hover:bg-white transition-all whitespace-nowrap"
              >
                {service.name}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
