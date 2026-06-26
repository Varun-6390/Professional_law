"use client";

import { use } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import ConsultationModal from "../../../components/ConsultationModal";
import Link from "next/link";
import { ChevronRight, ArrowRight, User, Mail, Phone, MessageSquare, Calendar, Clock, Share2 } from "lucide-react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

export default function BlogDetails({ params }) {
  const unwrappedParams = use(params);
  const slug = unwrappedParams.slug;
  const [modalOpen, setModalOpen] = useState(false);

  // Dummy data based on the blog listing
  const blogData = {
    title: "Understanding Private Limited Company Registration: A Complete Guide",
    category: "Company Registration",
    author: "Rajesh Kumar",
    date: "May 24, 2026",
    readTime: "5 min read",
    content: [
      {
        type: "paragraph",
        text: "Setting up a startup in India involves numerous compliance and regulatory requirements. One of the most popular structures for startups is the Private Limited Company. It offers limited liability, ease of fundraising, and a professional image."
      },
      {
        type: "heading",
        text: "Why Choose a Private Limited Company?"
      },
      {
        type: "paragraph",
        text: "A private limited company provides a distinct legal entity status, which means the company is responsible for its own debts and liabilities. This protects the personal assets of the founders. Additionally, venture capitalists and angel investors prefer investing in private limited companies due to the clear shareholding structure."
      },
      {
        type: "heading",
        text: "Eligibility Criteria"
      },
      {
        type: "list",
        items: [
          "Minimum of two directors and a maximum of 15 directors.",
          "At least one director must be an Indian resident.",
          "Minimum of two shareholders.",
          "No minimum capital requirement."
        ]
      },
      {
        type: "heading",
        text: "Document Checklist"
      },
      {
        type: "paragraph",
        text: "To register, you will need the following documents:"
      },
      {
        type: "list",
        items: [
          "PAN Card of all directors and shareholders.",
          "ID Proof (Aadhar, Voter ID, Passport, or Driving License).",
          "Address Proof (Bank statement, Utility bill).",
          "Registered Office Proof (Rent agreement, NOC from owner)."
        ]
      },
      {
        type: "heading",
        text: "Registration Process"
      },
      {
        type: "paragraph",
        text: "The process begins with obtaining a Digital Signature Certificate (DSC) and Director Identification Number (DIN). Once these are secured, an application for name approval is filed with the Ministry of Corporate Affairs (MCA). Upon name approval, the incorporation documents (SPICe+ form, MOA, AOA) are filed. Finally, the Certificate of Incorporation is issued."
      }
    ],
    relatedPosts: [
      { title: "Top 5 Common Compliance Pitfalls for Indian Startups", slug: "compliance-pitfalls" },
      { title: "Key Differences Between MSME Registration and Startup India", slug: "msme-vs-startup-india" }
    ]
  };

  return (
    <div className="min-h-screen bg-[#fafbfe] flex flex-col font-sans">
      <Navbar />

      {/* Absolute Full-width Background for Hero */}
      <div className="absolute top-0 left-0 w-full h-[60vh] lg:h-[500px] z-0">
        <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/pexels-yankrukov-7792841.jpg')" }}></div>
        <div className="absolute inset-0 bg-[#0b132a]/80 backdrop-blur-[2px]"></div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#fafbfe] to-transparent"></div>
      </div>

      <main className="flex-grow w-full pt-28 pb-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">

          {/* Breadcrumb */}
          <div className="flex items-center flex-nowrap space-x-2 text-[14px] text-gray-300 mb-8 overflow-hidden font-medium">
            <Link href="/" className="hover:text-[#f97316] transition-colors whitespace-nowrap shrink-0">Home</Link>
            <ChevronRight className="w-4 h-4 shrink-0" />
            <Link href="/blog" className="hover:text-[#f97316] transition-colors whitespace-nowrap shrink-0">Blog</Link>
            <ChevronRight className="w-4 h-4 shrink-0" />
            <span className="text-white font-semibold truncate min-w-0 whitespace-nowrap">{blogData.title}</span>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">

            {/* Left Content Column (Hero text + Content) */}
            <div className="lg:w-2/3">

              {/* Hero Header */}
              <div className="w-full flex flex-col justify-center pb-12 lg:pr-12">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                   <span className="bg-[#f97316] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                     {blogData.category}
                   </span>
                   <div className="flex items-center gap-1.5 text-gray-300 text-sm">
                     <Calendar className="w-4 h-4" />
                     {blogData.date}
                   </div>
                   <div className="flex items-center gap-1.5 text-gray-300 text-sm">
                     <Clock className="w-4 h-4" />
                     {blogData.readTime}
                   </div>
                </div>
                <h1 className="text-[32px] md:text-[44px] lg:text-[48px] font-extrabold text-white leading-[1.1] tracking-tight mb-6">
                  {blogData.title}
                </h1>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold border-2 border-orange-200">
                    {blogData.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">By {blogData.author}</p>
                    <p className="text-gray-400 text-xs">Expert Advisor</p>
                  </div>
                </div>
              </div>

              {/* Blog Content */}
              <article className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-8">
                 <div className="prose prose-lg max-w-none text-gray-600">
                   {blogData.content.map((block, idx) => {
                     if (block.type === 'paragraph') {
                       return <p key={idx} className="mb-6 leading-relaxed">{block.text}</p>;
                     }
                     if (block.type === 'heading') {
                       return <h2 key={idx} className="text-2xl font-bold text-[#131a31] mt-8 mb-4">{block.text}</h2>;
                     }
                     if (block.type === 'list') {
                       return (
                         <ul key={idx} className="space-y-3 mb-6">
                           {block.items.map((item, i) => (
                             <li key={i} className="flex items-start gap-3">
                               <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
                               <span>{item}</span>
                             </li>
                           ))}
                         </ul>
                       );
                     }
                     return null;
                   })}
                 </div>

                 {/* Social Share */}
                 <div className="mt-10 pt-6 border-t border-gray-100 flex items-center gap-4">
                   <span className="font-semibold text-[#131a31]">Share this article:</span>
                   <div className="flex items-center gap-3">
                     <button className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                       <FaFacebook className="w-5 h-5" />
                     </button>
                     <button className="w-10 h-10 rounded-full bg-sky-50 text-sky-500 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors">
                       <FaTwitter className="w-5 h-5" />
                     </button>
                     <button className="w-10 h-10 rounded-full bg-blue-50 text-blue-800 flex items-center justify-center hover:bg-blue-800 hover:text-white transition-colors">
                       <FaLinkedin className="w-5 h-5" />
                     </button>
                     <button className="w-10 h-10 rounded-full bg-gray-50 text-gray-600 flex items-center justify-center hover:bg-gray-600 hover:text-white transition-colors">
                       <Share2 className="w-5 h-5" />
                     </button>
                   </div>
                 </div>
              </article>

              {/* Related Posts */}
              <div className="bg-[#fffcf8] rounded-2xl p-8 border border-[#ffedd5] shadow-sm">
                <h3 className="text-[20px] font-bold text-[#131a31] mb-6">Related Articles</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {blogData.relatedPosts.map((post, idx) => (
                    <Link key={idx} href={`/blog/${post.slug}`} className="block group">
                      <div className="bg-white p-5 rounded-xl border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all h-full flex flex-col justify-between">
                        <h4 className="font-bold text-[#131a31] mb-3 group-hover:text-orange-600 transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        <span className="text-orange-500 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read More <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar (Sticky Form) */}
            <div className="lg:w-1/3">
              <div className="sticky top-[120px]">
                <div className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100">
                  <h3 className="text-[22px] font-bold text-[#131a31] mb-2">Need Expert Help?</h3>
                  <p className="text-gray-500 text-sm mb-6">Talk to our CAs for free guidance on your business compliance.</p>

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
                        placeholder="Your Query"
                        rows={3}
                        className="w-full bg-[#fafbfe] border border-gray-200 text-gray-800 text-[15px] rounded-xl pl-11 pr-4 py-3 focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] transition-colors resize-none"
                      />
                    </div>
                    <button className="w-full bg-[#f97316] text-white font-semibold py-3.5 rounded-xl hover:bg-[#ea580c] transition-colors flex items-center justify-center gap-2 group mt-2">
                      Get Free Consultation
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                </div>

                {/* Popular Tags */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mt-6">
                  <h3 className="text-lg font-bold text-[#131a31] mb-4">Popular Topics</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Registration", "GST", "Trademark", "Compliance", "Startup", "Tax"].map((tag, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-600 px-3 py-1.5 rounded-lg text-sm hover:bg-gray-200 cursor-pointer transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

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
