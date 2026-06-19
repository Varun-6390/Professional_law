"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <>
      {/* Top Gradient Border */}
      <div className="h-1 w-full"></div>
      <nav className="flex items-center justify-between fixed z-50 px-4 md:px-8 py-4 md:py-5 w-full bg-white/80 backdrop-blur-md border-b border-b-gray-200">
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
          <Link href="/" className="text-[20px] md:text-[22px] font-bold text-[#131a31] tracking-tight">
            Professional Law
          </Link>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-[15px] text-gray-500 hover:text-[#131a31] font-medium transition-colors">
            Home
          </Link>
          <Link href="/services" className="text-[15px] text-gray-500 hover:text-[#131a31] font-medium transition-colors">
            Services
          </Link>
          <Link href="/pricing" className="text-[15px] text-gray-500 hover:text-[#131a31] font-medium transition-colors">
            Pricing
          </Link>
          <Link href="/about" className="text-[15px] text-gray-500 hover:text-[#131a31] font-medium transition-colors">
            About Us
          </Link>
          <Link href="/resources" className="text-[15px] text-gray-500 hover:text-[#131a31] font-medium transition-colors">
            Resources
          </Link>
        </div>

        {/* Actions - Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/login" className="text-[15px] text-gray-500 hover:text-[#131a31] font-medium transition-colors">
            Login
          </Link>
          <button className="bg-white border-2 border-[#131a31] text-[#131a31] px-5 py-2.5 rounded-[10px] text-[15px] font-medium hover:bg-[#131a31] hover:text-white transition-colors shadow-sm">
            Talk to Expert
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-600 hover:text-[#131a31] transition-colors p-1"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-[70px] left-0 w-full bg-white shadow-lg border-b border-gray-200 z-40 md:hidden flex flex-col p-5"
          >
            <div className="flex flex-col space-y-4">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 font-medium text-[16px] py-2 border-b border-gray-100">
                Home
              </Link>
              <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 font-medium text-[16px] py-2 border-b border-gray-100">
                Services
              </Link>
              <Link href="/pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 font-medium text-[16px] py-2 border-b border-gray-100">
                Pricing
              </Link>
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 font-medium text-[16px] py-2 border-b border-gray-100">
                About Us
              </Link>
              <Link href="/resources" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 font-medium text-[16px] py-2 border-b border-gray-100">
                Resources
              </Link>
              <div className="flex flex-col gap-3 pt-4">
                <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} className="text-center text-gray-700 font-medium text-[16px] py-2.5 border border-gray-200 rounded-[10px]">
                  Login
                </Link>
                <button className="bg-[#131a31] text-white py-2.5 rounded-[10px] text-[16px] font-medium">
                  Talk to Expert
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
