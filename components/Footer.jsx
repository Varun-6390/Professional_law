"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0b132a] text-gray-400 pt-16 pb-8 border-t border-gray-800/40 relative z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Logo & Description */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#1572ed] to-[#f97316] flex items-center justify-center shadow-lg shadow-blue-500/10">
                <span className="text-white font-extrabold text-lg">PL</span>
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                Professional<span className="text-[#1572ed]"> Law</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Our expert guidance for factory license, NOC, document checklist, application process, and on-time compliance support. Focus on growing your business while we handle the paperwork.
            </p>
            <div className="pt-2">
              <Link href="/services" className="inline-flex items-center gap-2 bg-[#f97316] text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-[#ea580c] transition-all shadow-md shadow-orange-500/20 group">
                Get Free Consultation
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-[16px] tracking-wide uppercase text-sm">Services</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services#factory-license" className="hover:text-white transition-colors">
                  Factory License
                </Link>
              </li>
              <li>
                <Link href="/services#pollution-noc" className="hover:text-white transition-colors">
                  Pollution Consent NOC
                </Link>
              </li>
              <li>
                <Link href="/services#other-nocs" className="hover:text-white transition-colors">
                  Fire NOC Clearance
                </Link>
              </li>
              <li>
                <Link href="/services#other-nocs" className="hover:text-white transition-colors">
                  Labour License
                </Link>
              </li>
              <li>
                <Link href="/services#other-nocs" className="hover:text-white transition-colors">
                  MSME (Udyam)
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-bold text-[16px] tracking-wide uppercase text-sm">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-white transition-colors">
                  Client Reviews
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Compliance Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact details */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-[16px] tracking-wide uppercase text-sm">Contact Info</h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-[#1572ed] shrink-0 mt-0.5" />
                <span className="text-gray-300 font-medium">+91 93551 23060</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-[#1572ed] shrink-0 mt-0.5" />
                <span className="text-gray-300 break-all font-medium">info@professionallaw.in</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#1572ed] shrink-0 mt-0.5" />
                <span className="text-gray-300 leading-relaxed">
                  Connaught Place, New Delhi, Delhi 110001
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Banner - Newsletter & Copyright */}
        <div className="border-t border-gray-800/60 pt-10 flex flex-col lg:flex-row items-center justify-center gap-8">
          <div className="text-sm text-gray-500 text-center lg:text-right">
            <p>© {new Date().getFullYear()} Professional Law. All rights reserved.</p>
            <div className="mt-2 flex gap-4 justify-center lg:justify-end text-xs text-gray-500">
              <Link href="/terms" className="hover:text-white">Terms of Service</Link>
              <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
