"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [activeServiceCategory, setActiveServiceCategory] = useState("Factory License");
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const servicesMenu = [
    {
      category: "Licensing & Registrations",
      items: [
        { name: "Factory License Registration", href: "/services/factory-license-registration" },
        { name: "Shop & Establishment License", href: "/services/shop-license" },
        { name: "FSSAI Food License", href: "/services/fssai-licence-registration" },
        { name: "MSME Registration", href: "/services/msme-registration-india" },
        { name: "Trade License", href: "/services/trade-license-registration-online" },
      ]
    },
    {
      category: "NOC & Clearances",
      items: [
        { name: "Pollution Control NOC", href: "/services/pollution-control-noc" },
        { name: "Fire NOC Certificate", href: "/services/fire-noc-certificate" },
        { name: "Building Plan Approval", href: "/services/building-plan-approval" },
        { name: "Ground Water NOC", href: "/services/ground-water-noc" },
      ]
    },
    {
      category: "Company Registration",
      items: [
        { name: "Private Limited Company", href: "/services/private-limited-company-registration-india" },
        { name: "LLP Registration", href: "/services/llp-registration" },
        { name: "One Person Company", href: "/services/one-person-company-registration-india" },
        { name: "Section 8 Company", href: "/services/section-8-company-registration-india" },
        { name: "Partnership Firm", href: "/services/partnership-firm-registration-india" },
      ]
    },
    {
      category: "Tax & Compliance",
      items: [
        { name: "GST Registration", href: "/services/gst-registration-online" },
        { name: "Income Tax Returns", href: "/services/income-tax-returns" },
        { name: "Accounting & Bookkeeping", href: "/services/accounting-and-bookkeeping" },
        { name: "Trademark Registration", href: "/services/trademark-registration" },
      ]
    }
  ];

  return (
    <>
      {/* Top Gradient Border */}
      <div className="h-1 w-full"></div>
      <nav className="fixed z-50 w-full bg-white/80 backdrop-blur-md border-b border-b-gray-200">
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-4 md:px-6 py-3.5 md:py-5">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-[#4f46e5] text-white p-1.5 rounded-lg shadow-sm">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21h18" />
                <path d="M9 8h1" />
                <path d="M9 12h1" />
                <path d="M9 16h1" />
                <path d="M14 8h1" />
                <path d="M14 12h1" />
                <path d="M14 16h1" />
                <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
              </svg>
            </div>
            <Link href="/" onClick={() => window.scrollTo(0, 0)} className="text-[20px] md:text-[22px] font-bold text-[#131a31] tracking-tight">
              Professional Law
            </Link>
          </div>

          {/* Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" onClick={() => window.scrollTo(0, 0)} className="text-[15px] text-gray-500 hover:text-[#131a31] font-medium transition-colors">
              Home
            </Link>
            <Link href="/about" onClick={() => window.scrollTo(0, 0)} className="text-[15px] text-gray-500 hover:text-[#131a31] font-medium transition-colors">
              About Us
            </Link>

            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <div className="flex items-center gap-1 group">
                <Link
                  href="/services"
                  onClick={() => window.scrollTo(0, 0)}
                  className="text-[15px] text-gray-500 group-hover:text-[#131a31] font-medium transition-colors outline-none"
                >
                  Services
                </Link>
                <button
                  onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                  className="text-gray-500 group-hover:text-[#131a31] focus:outline-none"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>

              <AnimatePresence>
                {isServicesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/4 mt-6 bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] flex overflow-hidden border border-gray-100 z-50 w-[600px]"
                  >
                    {/* Absolute invisible bridge to prevent hover loss */}
                    <div className="absolute -top-6 left-0 w-full h-6" />

                    {/* Left Sidebar */}
                    <div className="w-[45%] bg-[#fffcf8] py-4 px-3 border-r border-gray-100/50">
                      {servicesMenu.map((cat, idx) => (
                        <button
                          key={idx}
                          onMouseEnter={() => setActiveServiceCategory(cat.category)}
                          className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-left text-[15px] transition-all duration-200 ${activeServiceCategory === cat.category
                            ? "bg-[#fff3eb] text-[#f97316] font-semibold"
                            : "text-[#4b5563] hover:bg-[#fff9f4] hover:text-[#131a31] font-medium"
                            }`}
                        >
                          {cat.category}
                          {activeServiceCategory === cat.category ? (
                            <ChevronDown className="w-4 h-4 text-[#f97316]" />
                          ) : (
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                          )}
                        </button>
                      ))}
                    </div>

                    {/* Right Content */}
                    <div className="w-[55%] py-4 px-6 bg-white">
                      <div className="flex flex-col space-y-1">
                        {servicesMenu
                          .find(c => c.category === activeServiceCategory)
                          ?.items.map((item, idx) => (
                            <Link
                              key={idx}
                              href={item.href}
                              onClick={() => {
                                setIsServicesDropdownOpen(false);
                                window.scrollTo(0, 0);
                              }}
                              className="text-[15px] text-[#4b5563] hover:text-[#131a31] hover:bg-gray-50/80 px-3 py-3 rounded-xl transition-colors"
                            >
                              {item.name}
                            </Link>
                          ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/blog" onClick={() => window.scrollTo(0, 0)} className="text-[15px] text-gray-500 hover:text-[#131a31] font-medium transition-colors">
              Blog
            </Link>
            <Link href="/contact" onClick={() => window.scrollTo(0, 0)} className="text-[15px] text-gray-500 hover:text-[#131a31] font-medium transition-colors">
              Contact
            </Link>
          </div>

          {/* Actions - Desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* <Link href="/login" onClick={() => window.scrollTo(0, 0)} className="text-[15px] text-gray-500 hover:text-[#131a31] font-medium transition-colors">
              Login
            </Link> */}
            <Link href="/contact">
              <button className="bg-[#f97316] text-white px-5 py-2.5 rounded-[10px] text-[15px] font-medium hover:bg-[#ea580c] transition-colors shadow-sm shadow-orange-500/20">
                Talk to Expert
              </button>
            </Link>
          </div>

          {/* Mobile Hamburger — always visible on small screens */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className="flex items-center justify-center w-10 h-10 rounded-lg text-[#131a31] hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[57px] left-0 w-full bg-white shadow-xl border-b border-gray-200 z-40 lg:hidden overflow-y-auto max-h-[calc(100vh-57px)]"
          >
            <div className="flex flex-col px-5 py-4 space-y-1">
              <Link href="/" onClick={() => { setIsMobileMenuOpen(false); window.scrollTo(0, 0); }} className="text-[#131a31] font-semibold text-[16px] px-3 py-3 rounded-xl hover:bg-gray-50 border-b border-gray-100">
                Home
              </Link>
              <Link href="/about" onClick={() => { setIsMobileMenuOpen(false); window.scrollTo(0, 0); }} className="text-[#131a31] font-semibold text-[16px] px-3 py-3 rounded-xl hover:bg-gray-50 border-b border-gray-100">
                About Us
              </Link>
              <Link href="/services" onClick={() => { setIsMobileMenuOpen(false); window.scrollTo(0, 0); }} className="text-[#131a31] font-semibold text-[16px] px-3 py-3 rounded-xl hover:bg-gray-50 border-b border-gray-100">
                Services
              </Link>
              <Link href="/blog" onClick={() => { setIsMobileMenuOpen(false); window.scrollTo(0, 0); }} className="text-[#131a31] font-semibold text-[16px] px-3 py-3 rounded-xl hover:bg-gray-50 border-b border-gray-100">
                Blog
              </Link>
              <Link href="/contact" onClick={() => { setIsMobileMenuOpen(false); window.scrollTo(0, 0); }} className="text-[#131a31] font-semibold text-[16px] px-3 py-3 rounded-xl hover:bg-gray-50 border-b border-gray-100">
                Contact
              </Link>
              <div className="flex flex-col gap-3 pt-3">
                <Link href="/contact" onClick={() => { setIsMobileMenuOpen(false); window.scrollTo(0, 0); }} className="w-full">
                  <button className="w-full bg-[#f97316] text-white py-3 rounded-xl text-[16px] font-semibold hover:bg-[#ea580c] transition-colors shadow-md shadow-orange-500/20">
                    Talk to Expert
                  </button>
                </Link>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
