"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight, Sparkles } from "lucide-react";
import { useState } from "react";
import ConsultationModal from "./ConsultationModal";

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

export default function Clients() {
  const [modalOpen, setModalOpen] = useState(false);
  const logos = [
    "Screenshot 2026-06-18 144343.png",
    "Screenshot 2026-06-18 144353.png",
    "Screenshot 2026-06-18 144403.png",
    "Screenshot 2026-06-18 144413.png",
    "Screenshot 2026-06-18 144424.png",
  ];

  // Duplicate for seamless infinite loop
  const scrollLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-6 w-full overflow-hidden bg-[#fafbfe] relative z-0">
      {/* Decorative Background */}
      <div className="absolute inset-0 z-[-1] pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[#1572ed]/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#f97316]/5 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center mb-12"
        >

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-extrabold text-[#314259] text-center tracking-tight"
          >
            Our Esteemed Clients
          </motion.h2>
        </motion.div>

        {/* Infinite Scroll Carousel */}
        <div className="relative w-full overflow-hidden mb-20">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#fafbfe] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#fafbfe] to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-33.33%"] }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ width: "max-content" }}
          >
            {scrollLogos.map((logo, index) => (
              <div
                key={index}
                className="relative w-32 h-32 md:w-36 md:h-36 shrink-0 bg-white border border-gray-100 rounded-xl shadow-sm flex items-center justify-center overflow-hidden hover:shadow-md hover:border-[#1572ed]/20 transition-all duration-300"
              >
                <Image
                  src={`/assets/images/logos/${logo}`}
                  alt={`Client Logo ${(index % logos.length) + 1}`}
                  fill
                  className="object-contain p-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Expert CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
          className="w-full relative rounded-[2rem] overflow-hidden bg-white border border-gray-100 shadow-lg min-h-[320px] md:min-h-[380px] lg:min-h-[420px]"
        >
          {/* Background Image (Desktop Only) */}
          <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden rounded-[2rem] md:block hidden">
            <div className="absolute -bottom-6 -right-6 -left-6 -top-6">
              <Image
                src="/assets/images/profimgs-removebg-preview.png"
                alt="Professional Law Verified Experts"
                fill
                priority
                className="object-contain object-right"
              />
            </div>
            {/* Soft left blend so text area stays clean */}
            <div className="absolute inset-0 z-[1] bg-gradient-to-r from-white via-white/70 to-transparent" style={{ width: '55%' }} />
          </div>

          {/* Left Content Area */}
          <div className="relative z-20 w-full md:w-[60%] lg:w-[55%] p-8 md:p-12 lg:p-16 flex flex-col justify-center items-start text-left bg-transparent min-h-[300px] md:min-h-[380px] lg:min-h-[420px]">
            {/* Pill/Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-[10px] bg-[#1572ed] text-white text-xs md:text-sm font-semibold mb-6 shadow-md shadow-blue-500/20 tracking-wide uppercase">
              Professional Law Verified Experts
            </div>

            {/* Heading */}
            <h3 className="text-3xl md:text-4xl lg:text-[42px] leading-tight lg:leading-[1.15] font-extrabold text-[#314259] tracking-tight mb-8">
              Need Expert Help?
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#1572ed] to-[#f97316]">
                India's top tax & legal experts
              </span>
              <span className="block mt-1 font-extrabold text-[#314259]">
                one click away
              </span>
            </h3>

            {/* Button */}
            <button
              onClick={() => setModalOpen(true)}
              className="border border-[#f97316] text-[#f97316] bg-white/50 hover:bg-[#f97316] hover:text-white px-8 py-3.5 rounded-xl font-bold text-[16px] transition-all duration-300 shadow-sm hover:shadow-[0_8px_20px_rgba(249,115,22,0.15)] hover:-translate-y-0.5 cursor-pointer z-30"
            >
              Explore Assisted Filing Plans
            </button>
          </div>
        </motion.div>
      </div>

      {/* Consultation Modal */}
      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
