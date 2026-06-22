"use client";

import { useEffect, useState, use } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import ConsultationModal from "../../../components/ConsultationModal";
import Link from "next/link";
import { CheckCircle2, ChevronRight, Star, ArrowRight, User, Mail, Phone, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export default function ServiceDetails({ params }) {
  const unwrappedParams = use(params);
  const slug = unwrappedParams.slug;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    if (!slug) return;
    const fetchServiceData = async () => {
      try {
        const res = await fetch(`/data/services/${slug}.json`);
        if (res.ok) {
          const json = await res.json();
          setData(json);
        } else {
          console.error("Failed to load service data. Status:", res.status);
          setData(null);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    fetchServiceData();
  }, [slug]);

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-[#fafbfe]">Loading...</div>;
  if (!data) return <div className="min-h-screen flex items-center justify-center bg-[#fafbfe] text-xl font-semibold text-gray-600">Service not found</div>;

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -120; // adjust for fixed header
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: "overview", label: "Overview" },
    { id: "benefits", label: "Benefits" },
    { id: "eligibility", label: "Eligibility" },
    { id: "documents", label: "Documents" },
    { id: "process", label: "Process" },
    { id: "faqs", label: "FAQs" },
  ];

  return (
    <div className="min-h-screen bg-[#fafbfe] flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow w-full pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          {/* Breadcrumb */}
          <div className="flex items-center flex-nowrap space-x-2 text-[14px] text-gray-500 mb-6 overflow-hidden">
            <Link href="/" className="hover:text-[#f97316] transition-colors whitespace-nowrap shrink-0">Home</Link>
            <ChevronRight className="w-4 h-4 shrink-0" />
            <Link href="/services" className="hover:text-[#f97316] transition-colors whitespace-nowrap shrink-0">All Services</Link>
            <ChevronRight className="w-4 h-4 shrink-0" />
            <span className="text-[#131a31] font-medium truncate min-w-0 whitespace-nowrap">{data.mainHeading}</span>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 relative">
            
            {/* Left Content Area */}
            <div className="lg:w-2/3">
              
              {/* Header block */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-8">
                <div className="flex items-center gap-2 mb-4 bg-orange-50 text-orange-600 px-3 py-1.5 rounded-full w-fit text-sm font-medium">
                  <Star className="w-4 h-4 fill-orange-500 text-orange-500" />
                  <span>4.8/5 Rating</span>
                  <span className="text-orange-400">|</span>
                  <span>Based on 500+ Reviews</span>
                </div>
                <h1 className="text-[32px] md:text-[40px] font-bold text-[#131a31] leading-tight mb-4">
                  {data.mainHeading}
                </h1>
                <p className="text-[16px] text-gray-600 mb-8 leading-relaxed">
                  {data.hero?.subtext || data.introduction?.body[0]}
                </p>
                
                {/* Internal Nav */}
                <div className="flex flex-wrap items-center gap-2 border-b border-gray-100 pb-2 sticky top-[80px] bg-white z-10 pt-2">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`px-4 py-2 text-[15px] font-medium rounded-lg transition-all duration-200 ${
                        activeSection === item.id 
                          ? "bg-[#131a31] text-white" 
                          : "text-gray-600 hover:bg-gray-50 hover:text-[#131a31]"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sections Container */}
              <div className="space-y-8">
                
                {/* Overview */}
                <section id="overview" className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 scroll-mt-32">
                  <h2 className="text-[24px] font-bold text-[#131a31] mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-sm">1</span>
                    {data.introduction?.heading || "Overview"}
                  </h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    {data.introduction?.body?.map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>
                  
                  {data.whyNeeded && (
                    <div className="mt-8 pt-8 border-t border-gray-100">
                      <h3 className="text-[20px] font-bold text-[#131a31] mb-4">{data.whyNeeded.heading}</h3>
                      <div className="space-y-4 text-gray-600 leading-relaxed">
                        {data.whyNeeded.body?.map((para, idx) => (
                          <p key={idx}>{para}</p>
                        ))}
                      </div>
                    </div>
                  )}
                </section>

                {/* Benefits */}
                {data.benefits && (
                  <section id="benefits" className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 scroll-mt-32">
                    <h2 className="text-[24px] font-bold text-[#131a31] mb-6 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-sm">2</span>
                      {data.benefits.heading}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      {data.benefits.body?.map((benefit, idx) => (
                        <div key={idx} className="bg-[#fafbfe] p-5 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                          <h4 className="font-semibold text-[#131a31] mb-2 flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                            {benefit.title}
                          </h4>
                          <p className="text-sm text-gray-600 pl-7">{benefit.description}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Eligibility */}
                {data.eligibilityCriteria && (
                  <section id="eligibility" className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 scroll-mt-32">
                    <h2 className="text-[24px] font-bold text-[#131a31] mb-6 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-sm">3</span>
                      {data.eligibilityCriteria.heading}
                    </h2>
                    {data.eligibilityCriteria.categories?.map((cat, idx) => (
                      <div key={idx} className="mb-6 last:mb-0">
                        {cat.applicantType && <h4 className="font-semibold text-lg text-[#131a31] mb-3">{cat.applicantType}</h4>}
                        <ul className="space-y-3">
                          {cat.criteria?.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </section>
                )}

                {/* Documents Required */}
                {data.documentsRequired && (
                  <section id="documents" className="bg-[#131a31] rounded-2xl p-8 shadow-lg scroll-mt-32 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
                    <div className="relative z-10">
                      <h2 className="text-[24px] font-bold text-white mb-6 flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center text-sm">4</span>
                        {data.documentsRequired.heading}
                      </h2>
                      {data.documentsRequired.categories?.map((cat, idx) => (
                        <div key={idx} className="mb-6 last:mb-0">
                          {cat.applicantType && <h4 className="font-semibold text-lg text-white mb-4">{cat.applicantType}</h4>}
                          <div className="grid md:grid-cols-2 gap-4">
                            {cat.documents?.map((doc, i) => (
                              <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4 text-gray-300">
                                <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                                <span className="text-sm">{doc}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Process / Steps */}
                {data.steps && (
                  <section id="process" className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 scroll-mt-32">
                    <h2 className="text-[24px] font-bold text-[#131a31] mb-8 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-sm">5</span>
                      {data.steps.heading}
                    </h2>
                    <div className="relative border-l-2 border-gray-100 ml-4 space-y-8 pb-4">
                      {data.steps.body?.map((step, idx) => (
                        <div key={idx} className="relative pl-8">
                          <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-white border-4 border-orange-500 flex items-center justify-center shadow-sm">
                            <span className="text-xs font-bold text-[#131a31]">{idx + 1}</span>
                          </div>
                          <h4 className="font-bold text-[#131a31] text-lg mb-2 pt-1">{step.step}</h4>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* FAQs */}
                {data.faqs && (
                  <section id="faqs" className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 scroll-mt-32">
                    <h2 className="text-[24px] font-bold text-[#131a31] mb-6 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-sm">6</span>
                      {data.faqs.heading}
                    </h2>
                    <div className="space-y-4">
                      {data.faqs.body?.map((faq, idx) => (
                        <details key={idx} className="group bg-[#fafbfe] border border-gray-100 rounded-xl overflow-hidden">
                          <summary className="flex items-center justify-between p-5 font-semibold text-[#131a31] cursor-pointer list-none">
                            {faq.question}
                            <span className="transition group-open:rotate-180">
                              <ChevronDownIcon className="w-5 h-5 text-gray-400" />
                            </span>
                          </summary>
                          <div className="p-5 pt-0 text-gray-600 border-t border-gray-100 mt-2 bg-white">
                            {faq.answer}
                          </div>
                        </details>
                      ))}
                    </div>
                  </section>
                )}

              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-[100px]">
                {/* Consultation Form Box */}
                <div className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
                  <h3 className="text-[22px] font-bold text-[#131a31] mb-2">Talk to Our CA</h3>
                  <p className="text-gray-500 text-sm mb-6">Get expert guidance for your {data.title} process.</p>
                  
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="relative">
                      <User className="w-5 h-5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input 
                        type="text" 
                        placeholder="Your Name" 
                        className="w-full bg-[#fafbfe] border border-gray-200 text-gray-800 text-[15px] rounded-xl pl-11 pr-4 py-3 focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] transition-colors"
                      />
                    </div>
                    <div className="relative">
                      <Mail className="w-5 h-5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input 
                        type="email" 
                        placeholder="Email Address" 
                        className="w-full bg-[#fafbfe] border border-gray-200 text-gray-800 text-[15px] rounded-xl pl-11 pr-4 py-3 focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] transition-colors"
                      />
                    </div>
                    <div className="relative">
                      <Phone className="w-5 h-5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input 
                        type="tel" 
                        placeholder="Phone Number" 
                        className="w-full bg-[#fafbfe] border border-gray-200 text-gray-800 text-[15px] rounded-xl pl-11 pr-4 py-3 focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] transition-colors"
                      />
                    </div>
                    <div className="relative">
                      <MessageSquare className="w-5 h-5 text-gray-400 absolute left-3.5 top-3.5" />
                      <textarea 
                        placeholder="Message (Optional)" 
                        rows={3}
                        className="w-full bg-[#fafbfe] border border-gray-200 text-gray-800 text-[15px] rounded-xl pl-11 pr-4 py-3 focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] transition-colors resize-none"
                      />
                    </div>
                    <button className="w-full bg-[#f97316] text-white font-semibold py-3.5 rounded-xl hover:bg-[#ea580c] transition-colors flex items-center justify-center gap-2 group">
                      Get Free Quote
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                </div>

                {/* Additional Sidebar Info (Pricing, etc) */}
                {data.pricing && (
                  <div className="bg-[#fffcf8] rounded-2xl p-6 mt-6 border border-[#ffedd5]">
                    <h4 className="font-bold text-[#131a31] mb-4">Pricing Breakdown</h4>
                    <div className="space-y-3 text-[15px]">
                      <div className="flex justify-between text-gray-600">
                        <span>Professional Fee</span>
                        <span className="font-medium">₹{data.pricing.professionalFee}</span>
                      </div>
                      <div className="flex justify-between text-gray-600">
                        <span>Govt Fee</span>
                        <span className="font-medium">₹{data.pricing.governmentFee}</span>
                      </div>
                      {data.pricing.otherCharges > 0 && (
                        <div className="flex justify-between text-gray-600">
                          <span>Other Charges</span>
                          <span className="font-medium">₹{data.pricing.otherCharges}</span>
                        </div>
                      )}
                      <div className="pt-3 mt-3 border-t border-[#ffedd5] flex justify-between text-[#131a31] font-bold">
                        <span>Total (Est.)</span>
                        <span className="text-[#f97316] text-lg">₹{data.pricing.total}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

// Quick helper component
function ChevronDownIcon(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6"/>
    </svg>
  );
}
