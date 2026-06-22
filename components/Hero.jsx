"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, ShieldCheck, CheckCircle, Sparkles } from "lucide-react";
import ConsultationForm from "./ConsultationForm";
import AnimatedNumber from "./AnimatedNumber";

export default function Hero() {
  const words = ["Startups", "Manufacturers", "Units", "Service Industry"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setFade(true);
      }, 300); // 300ms fade out before changing word
    }, 2500); // Change word every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative px-4 pt-28 pb-16 md:pt-32 md:pb-24 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between min-h-[calc(100vh-80px)]">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden rounded-3xl">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#4f46e5]/20 blur-[80px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#f97316]/20 blur-[100px]"
        />

        {/* Floating Shapes */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[45%] text-[#4f46e5]/30"
        >
          <Sparkles size={32} />
        </motion.div>

        <motion.div
          animate={{ y: [0, 25, 0], rotate: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[20%] left-[5%] text-[#f97316]/30"
        >
          <Star size={24} />
        </motion.div>

        <motion.div
          animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[25%] right-[45%] flex items-center justify-center"
        >
          <div className="w-4 h-4 rounded-full bg-emerald-400/40" />
        </motion.div>
      </div>

      {/* Left Content */}
      <div className="md:w-[55%] lg:w-1/2 flex flex-col items-start text-left z-10 pr-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1572ed]/10 border border-[#1572ed]/20 text-[#1572ed] text-sm font-semibold mb-6 shadow-sm"
        >
          <Sparkles size={16} />
          <span>India's #1 Compliance Platform</span>
        </motion.div>

        <h1 className="text-[38px] sm:text-[42px] md:text-[56px] lg:text-[64px] font-bold text-[#314259] leading-[1.15] md:leading-[1.1] tracking-tight">
          Making <br />
          Compliances <br />
          <span className="block sm:flex sm:items-center sm:whitespace-nowrap mt-1 sm:mt-0">
            <span className="mr-2 sm:mr-3">Easy for</span>
            <span className={`text-[#1572ed] block sm:inline transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}>
              {words[currentWordIndex]}
            </span>
          </span>
        </h1>
        <p className="mt-6 text-lg text-gray-500 leading-relaxed max-w-[480px]">
          Streamline your legal, tax, and compliance processes with our expert-led platform. Focus on growing your business while we handle the paperwork.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
          <button className="bg-[#f97316] text-white px-7 py-3.5 rounded-[12px] font-semibold text-[16px] hover:bg-[#ea580c] transition-colors shadow-md shadow-orange-500/20 w-full sm:w-auto text-center">
            Get Started Now
          </button>
          <button className="bg-white text-[#f97316] px-7 py-3.5 rounded-[12px] font-semibold text-[16px] border-2 border-[#f97316] hover:bg-[#f97316] hover:text-white transition-all shadow-sm w-full sm:w-auto text-center">
            View Services
          </button>
        </div>
      </div>

      {/* Right Content - Form Section */}
      <div className="md:w-1/2 mt-12 md:mt-0 w-full flex justify-center md:justify-end md:pl-10 lg:pl-20 relative">
        <div className="relative w-full max-w-[450px]">
          <ConsultationForm />
        </div>
      </div>
    </section>

    {/* Stats Bar */}
    <div className="w-full bg-[#131a31] py-12 md:py-16 relative z-10 overflow-hidden">
      {/* Optional faint background blur */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#f97316]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#1572ed]/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 text-center relative z-10">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-3xl md:text-[40px] font-bold text-[#f97316] mb-2 md:mb-3">
            <AnimatedNumber value={500} prefix="₹" suffix="Cr+" />
          </h3>
          <p className="text-gray-300 text-sm md:text-base font-medium tracking-wide">Recovered</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-3xl md:text-[40px] font-bold text-[#f97316] mb-2 md:mb-3">
            <AnimatedNumber value={15000} suffix="+" />
          </h3>
          <p className="text-gray-300 text-sm md:text-base font-medium tracking-wide">Happy Clients</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-3xl md:text-[40px] font-bold text-[#f97316] mb-2 md:mb-3">
            <AnimatedNumber value={99.8} suffix="%" decimals={1} />
          </h3>
          <p className="text-gray-300 text-sm md:text-base font-medium tracking-wide">Success Rate</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-3xl md:text-[40px] font-bold text-[#f97316] mb-2 md:mb-3">
            <AnimatedNumber value={15} suffix="+" />
          </h3>
          <p className="text-gray-300 text-sm md:text-base font-medium tracking-wide">Years Experience</p>
        </div>
      </div>
    </div>
  </>
  );
}
