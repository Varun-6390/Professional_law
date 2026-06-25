"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Phone, Mail, Clock, MapPin, AlertCircle, User } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#fafbfe] flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow w-full pt-20">
        {/* Hero Section */}
        <section className="w-full bg-[#0b132a] py-16 md:py-24 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Contact Our Compliance Team
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Have questions about business registrations or tax compliance? Connect with our expert team for PAN India support.
          </p>
        </section>

        {/* Content Section */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            
            {/* Left Column */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-4xl font-bold text-[#131a31] mb-4">
                  Reach Out to India's Trusted Regulatory Advisors
                </h2>
                <p className="text-gray-600 leading-relaxed text-[15px]">
                  Avoid heavy penalties or rejection of applications. Get direct assistance for all your corporate compliance, tax filing, and registration needs.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                  <div className="w-12 h-12 rounded-full bg-blue-50 text-[#1572ed] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[13px] font-bold text-gray-400 uppercase tracking-wider mb-1">Call Support</p>
                    <p className="text-lg font-semibold text-[#131a31]">+91 93111 17064</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                  <div className="w-12 h-12 rounded-full bg-blue-50 text-[#1572ed] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[13px] font-bold text-gray-400 uppercase tracking-wider mb-1">Email Address</p>
                    <p className="text-lg font-semibold text-[#131a31]">info@professionallaw.in</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                  <div className="w-12 h-12 rounded-full bg-blue-50 text-[#1572ed] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[13px] font-bold text-gray-400 uppercase tracking-wider mb-1">Working Hours</p>
                    <p className="text-lg font-semibold text-[#131a31]">Mon - Sat: 9:30 AM - 6:30 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                  <div className="w-12 h-12 rounded-full bg-blue-50 text-[#1572ed] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[13px] font-bold text-gray-400 uppercase tracking-wider mb-1">Coverage</p>
                    <p className="text-lg font-semibold text-[#131a31]">PAN India Support</p>
                  </div>
                </div>
              </div>

              {/* Alert Box */}
              <div className="bg-[#fffbeb] border border-[#fde68a] rounded-xl p-5 flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-[#d97706] shrink-0 mt-0.5" />
                <p className="text-sm text-[#92400e] leading-relaxed font-medium">
                  <strong className="block mb-1">Important Notice:</strong>
                  Submission of wrong application details can lead to permanent closure notices or rejection of application fee. Consult an advisor before final filing.
                </p>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="rounded-2xl shadow-xl overflow-hidden bg-white border border-gray-100 mt-2 lg:mt-0 relative z-10">
              <div className="bg-[#0b132a] p-8 text-white">
                <p className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-2">Free Consultation</p>
                <h3 className="text-2xl font-bold">Talk to a Legal Expert</h3>
              </div>
              <div className="p-8">
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-sm font-semibold text-[#131a31] mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-5 h-5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full bg-[#fafbfe] border border-gray-200 text-gray-800 text-[15px] rounded-xl pl-11 pr-4 py-3.5 focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] transition-colors"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-[#131a31] mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-5 h-5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        placeholder="Enter phone number"
                        className="w-full bg-[#fafbfe] border border-gray-200 text-gray-800 text-[15px] rounded-xl pl-11 pr-4 py-3.5 focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] transition-colors"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-[#131a31] mb-2">
                      Email Address <span className="text-gray-400 font-normal">(Optional)</span>
                    </label>
                    <div className="relative">
                      <Mail className="w-5 h-5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        placeholder="Enter email address"
                        className="w-full bg-[#fafbfe] border border-gray-200 text-gray-800 text-[15px] rounded-xl pl-11 pr-4 py-3.5 focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] transition-colors"
                      />
                    </div>
                  </div>

                  <button className="w-full bg-[#f97316] text-white font-bold py-4 rounded-xl hover:bg-[#ea580c] transition-colors shadow-md shadow-orange-500/20 mt-4 text-[16px]">
                    Request Callback
                  </button>

                  <p className="text-center text-xs text-gray-400 mt-4">
                    Your information is secure and will only be used to contact you regarding your inquiry.
                  </p>
                </form>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
