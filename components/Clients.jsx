"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight, Sparkles } from "lucide-react";

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
    <section className="py-20 w-full overflow-hidden bg-[#fafbfe] relative z-0">
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
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-[#1572ed] text-sm font-semibold mb-6 shadow-sm"
          >
            <Sparkles size={16} />
            <span>Trusted Globally</span>
          </motion.div>
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

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
          className="w-full relative rounded-[2rem] overflow-hidden shadow-2xl group"
        >
          {/* Base Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f2a4a] via-[#174685] to-[#1572ed] -z-20" />

          {/* Glow Orbs */}
          <div className="absolute top-[-50%] left-[-10%] w-[80%] h-[150%] bg-[#1572ed] rounded-full mix-blend-screen filter blur-[120px] opacity-40 animate-pulse -z-10" />
          <div className="absolute bottom-[-50%] right-[-10%] w-[60%] h-[150%] bg-[#4f46e5] rounded-full mix-blend-screen filter blur-[100px] opacity-30 -z-10" />

          {/* SVG Wave */}
          <svg className="absolute inset-0 w-full h-full opacity-30 -z-10 pointer-events-none" preserveAspectRatio="none" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
            <path fill="#ffffff" fillOpacity="0.1" d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,165.3C672,171,768,213,864,213.3C960,213,1056,171,1152,149.3C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            <path fill="#ffffff" fillOpacity="0.05" d="M0,224L60,213.3C120,203,240,181,360,176C480,171,600,181,720,197.3C840,213,960,235,1080,218.7C1200,203,1320,149,1380,122.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-10 md:p-14 lg:px-20 lg:py-16 gap-10">
            <div className="max-w-2xl text-center md:text-left">
              <h3 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-[1.2] drop-shadow-md">
                Start your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">10,000+</span> compliance{" "}
                <br className="hidden lg:block" />
                With Us!
              </h3>
            </div>

            <div className="flex flex-col items-center md:items-start gap-5 p-6 md:p-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg hover:bg-white/[0.15] transition-colors">
              <p className="text-blue-50 text-lg md:text-xl font-medium tracking-wide">
                Download Compliance Calendar
              </p>
              <button className="bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white px-8 py-4 rounded-xl font-bold text-[16px] hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all flex items-center gap-2 group w-full justify-center md:w-auto">
                Get Started
                <ChevronRight size={20} className="group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
