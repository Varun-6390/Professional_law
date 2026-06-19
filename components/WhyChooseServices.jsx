"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, FileCheck } from "lucide-react";

export default function WhyChooseServices() {
  const points = [
    {
      icon: <FileCheck className="w-8 h-8 text-[#1572ed]" />,
      title: "Technical Scrutiny",
      description:
        "Every application and document undergoes a rigorous verification process by our in-house experts to ensure error-free submissions and avoid government rejections.",
    },
    {
      icon: <Clock className="w-8 h-8 text-[#f97316]" />,
      title: "Timeline Tracking",
      description:
        "Get regular updates and real-time tracking of your licensing progress. We ensure timely submissions and keep you informed at every milestone.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-emerald-500" />,
      title: "Transparent Estimates",
      description:
        "Upfront pricing with complete transparency. We provide a detailed cost breakdown with zero hidden charges or sudden extra fees.",
    },
  ];

  return (
    <section className="py-20 bg-[#0f172a] text-white w-full overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#1572ed] blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#f97316] blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Why Professional Law?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            We simplify complex compliance registrations with expert-led verification, timeline tracking, and honest pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {point.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-wide">{point.title}</h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
