"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Search, Clock, ArrowRight, ShieldCheck, FileText, PhoneCall, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import ConsultationModal from "@/components/ConsultationModal";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [modalOpen, setModalOpen] = useState(false);

  const categories = ["All", "Company Registration", "Tax Compliance", "Trademarks & IP", "Licenses & NOCs"];

  const blogPosts = [
    {
      title: "Understanding Private Limited Company Registration: A Complete Guide",
      slug: "understanding-private-limited-company-registration",
      excerpt: "Thinking of setting up a startup in India? Read our complete, step-by-step guide covering eligibility, document checklist, and timelines.",
      category: "Company Registration",
      readTime: "5 min read",
      date: "May 24, 2026",
      author: "Rajesh Kumar",
      bgGradient: "from-orange-500 to-orange-400"
    },
    {
      title: "How to File Your GST Returns Without Penalties",
      slug: "how-to-file-your-gst-returns",
      excerpt: "Filing GST returns accurately is critical for any business. Here is a simplified walkthrough of the application process and common pitfalls to avoid.",
      category: "Tax Compliance",
      readTime: "7 min read",
      date: "May 18, 2026",
      author: "Amit Verma",
      bgGradient: "from-blue-600 to-blue-400"
    },
    {
      title: "Trademark Registration: Protecting Your Brand Identity",
      slug: "trademark-registration-protecting-brand",
      excerpt: "Protect your brand and products from copycats by securing a Trademark. Learn about the necessary classes, document requirements, and timeline.",
      category: "Trademarks & IP",
      readTime: "4 min read",
      date: "May 10, 2026",
      author: "Sanjay Sharma",
      bgGradient: "from-rose-500 to-rose-400"
    },
    {
      title: "Key Differences Between MSME Registration and Startup India",
      slug: "msme-registration-vs-startup-india",
      excerpt: "Many entrepreneurs confuse MSME registration with Startup India recognition. We break down the differences, key benefits, and eligibility criteria.",
      category: "Licenses & NOCs",
      readTime: "6 min read",
      date: "May 02, 2026",
      author: "Priya Dalal",
      bgGradient: "from-emerald-500 to-emerald-400"
    },
    {
      title: "Top 5 Common Compliance Pitfalls for Indian Startups",
      slug: "compliance-pitfalls",
      excerpt: "Avoid heavy penalties, operational delays, and closure notices. Discover the most common compliance mistakes made by new founders.",
      category: "Company Registration",
      readTime: "8 min read",
      date: "April 24, 2026",
      author: "Rajesh Kumar",
      bgGradient: "from-purple-600 to-purple-400"
    }
  ];

  const filteredPosts = activeCategory === "All"
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#fafbfe] flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow w-full pt-20">

        {/* Hero Section */}
        <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#f0f4f8] to-[#fafbfe] pt-16 pb-12 lg:pt-24 lg:pb-16 px-4">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl pointer-events-none -z-10" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-orange-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">

            {/* Left Content */}
            <div className="w-full lg:w-3/5 text-center lg:text-left z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-green-200 text-green-700 text-sm font-semibold mb-6 shadow-sm">
                <ShieldCheck size={16} className="text-green-600" />
                <span>Trusted Compliance Resource</span>
              </div>

              <h1 className="text-[38px] md:text-[52px] lg:text-[60px] font-extrabold text-[#131a31] leading-[1.15] tracking-tight mb-6">
                Compliance <span className="text-[#1572ed]">Insights</span> & <span className="text-[#f97316]">Expert</span> Guides
              </h1>

              <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Stay ahead of regulatory requirements. Access deep-dive articles, step-by-step registration checklists, and practical compliance advice for your business.
              </p>

              {/* Search Bar */}
              <div className="relative w-full max-w-2xl mx-auto lg:mx-0">
                <div className="flex items-stretch w-full border border-white/50 rounded-full overflow-hidden bg-white/90 backdrop-blur-md shadow-lg transition-all focus-within:shadow-xl focus-within:bg-white relative z-20">
                  <div className="pl-3 md:pl-6 flex items-center justify-center text-[#1572ed]">
                    <Search size={20} className="md:w-[22px] md:h-[22px]" />
                  </div>
                  <div className="relative flex-1 flex items-center min-w-0">
                    <input
                      type="text"
                      placeholder="Search compliance guides, licenses, NOCs..."
                      className="w-full py-3 md:py-4 px-2 md:px-4 outline-none text-[#314259] bg-transparent text-[14px] md:text-[16px] font-medium relative z-10"
                    />
                  </div>
                  <button className="bg-[#f97316] text-white px-4 md:px-10 font-semibold text-[14px] md:text-[16px] hover:bg-[#ea580c] transition-colors flex items-center justify-center cursor-pointer shrink-0">
                    Search
                  </button>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="hidden lg:flex w-full lg:w-2/5 justify-center lg:justify-end relative">
              <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] lg:w-[450px] lg:h-[450px]">
                {/* Decorative blob/shape behind image */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1572ed]/20 to-[#f97316]/20 rounded-full blur-2xl transform scale-90 -z-10" />
                <Image
                  src="/assets/images/undraw_blogging_38kl.svg"
                  alt="Compliance Expert"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>

          </div>
        </section>

        {/* Categories / Filters */}
        <section className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-[14px] font-semibold transition-all duration-300 ${activeCategory === category
                  ? "bg-[#f97316] text-white shadow-md shadow-orange-500/20"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-[#f97316] hover:text-[#f97316]"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Blog Grid */}
        <section className="max-w-7xl mx-auto px-4 py-12 mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, idx) => (
              <div key={idx} className="bg-white rounded-[1.5rem] overflow-hidden border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group">

                {/* Card Header/Gradient */}
                <div className={`h-48 w-full bg-gradient-to-br ${post.bgGradient} relative p-5 flex flex-col justify-between`}>
                  <div className="flex justify-between items-start">
                    <span className="bg-white/90 backdrop-blur-sm text-[#131a31] text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm">
                      {post.category}
                    </span>
                    <span className="bg-black/30 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  {/* Decorative faint overlay */}
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-xs text-gray-400 font-medium mb-4 uppercase tracking-wide">
                    <span className="flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span>{post.author}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#131a31] leading-tight mb-3 group-hover:text-[#1572ed] transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="text-gray-500 text-[15px] leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>

                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-[#f97316] font-bold text-[15px] group/btn">
                    Read Article
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>

              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 mb-20 relative">
          <div className="relative rounded-[2.5rem] overflow-hidden bg-[#0b132a] text-center lg:text-left shadow-2xl">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/assets/images/pexels-yankrukov-7792841.jpg"
                alt="Consultation Background"
                fill
                className="object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0b132a] via-[#0b132a]/90 to-transparent" />
            </div>

            <div className="relative z-10 p-8 md:p-16 lg:p-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white border border-white/20 text-sm font-semibold mb-8 backdrop-blur-md">
                <CheckCircle2 size={16} className="text-[#f97316]" />
                <span>Expert Legal Consultation</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6 max-w-2xl">
                Need expert help with <span className="text-[#f97316]">business registration</span> and compliance approvals?
              </h2>

              <p className="text-gray-300 text-lg mb-12 max-w-xl leading-relaxed">
                Get guided support for eligibility, documents, application steps, NOCs, renewals, and all approval-related compliance requirements.
              </p>

              {/* Info Cards */}
              <div className="grid sm:grid-cols-3 gap-4 mb-10 max-w-3xl">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 flex flex-col items-center lg:items-start text-center lg:text-left transition-all hover:bg-white/20">
                  <FileText className="w-6 h-6 text-white mb-3" />
                  <h4 className="text-white font-bold mb-1">Company Setup</h4>
                  <p className="text-gray-300 text-xs">Applicability guidance</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 flex flex-col items-center lg:items-start text-center lg:text-left transition-all hover:bg-white/20">
                  <ShieldCheck className="w-6 h-6 text-white mb-3" />
                  <h4 className="text-white font-bold mb-1">Documents</h4>
                  <p className="text-gray-300 text-xs">Checklist support</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 flex flex-col items-center lg:items-start text-center lg:text-left transition-all hover:bg-white/20">
                  <Clock className="w-6 h-6 text-white mb-3" />
                  <h4 className="text-white font-bold mb-1">24h Callback</h4>
                  <p className="text-gray-300 text-xs">Quick expert help</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => setModalOpen(true)}
                  className="bg-[#f97316] text-white px-8 py-4 rounded-xl font-bold text-[16px] hover:bg-[#ea580c] transition-colors shadow-lg shadow-orange-500/30 flex items-center gap-2">
                  Get Free Consultation <ArrowRight className="w-5 h-5" />
                </button>
                <button className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-[16px] hover:bg-white/20 transition-all flex items-center gap-2 backdrop-blur-md">
                  <PhoneCall className="w-5 h-5" /> +91 93111 17064
                </button>
              </div>
            </div>
          </div>

          <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </section>

      </main>

      <Footer />
    </div>
  );
}
