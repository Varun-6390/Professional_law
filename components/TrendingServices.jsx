"use client";

import { Search } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function TrendingServices() {
  const services = [
    "FSSAI Registration",
    "ISO Registration",
    "Company Incorporation",
    "GST Registration",
    "Trademark Registration",
    "Clinic License",
    "MSME Registration",
    "Import Export Code"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    },
  };

  return (
    <section className="relative py-8 px-4 w-full overflow-hidden flex items-center justify-center min-h-[500px] z-0">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/bgimg.png"
          alt="Trending Services Background"
          fill
          className="object-cover object-center opacity-100"
          style={{ objectPosition: "center 110%" }}
        />
        {/* Soft overlay to ensure text readability */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />
      </div>

      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10 w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Heading */}
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-5xl font-extrabold text-[#314259] mb-10 drop-shadow-sm"
        >
          Trending Services
        </motion.h2>

        {/* Search Bar */}
        <motion.div
          variants={itemVariants}
          className="flex items-stretch w-full max-w-2xl mx-auto border border-white/50 rounded-full overflow-hidden bg-white/90 backdrop-blur-md shadow-lg mb-12 transition-all focus-within:shadow-xl focus-within:bg-white"
        >
          <div className="pl-6 flex items-center justify-center text-[#1572ed]">
            <Search size={22} />
          </div>
          <input
            type="text"
            placeholder="Search for a service..."
            className="flex-1 py-4 px-4 outline-none text-[#314259] bg-transparent placeholder-gray-500 text-[16px] font-medium"
          />
          <button className="bg-[#1572ed] text-white px-8 md:px-10 font-semibold text-[16px] hover:bg-[#1260c9] transition-colors flex items-center justify-center cursor-pointer">
            Search
          </button>
        </motion.div>

        {/* Tags */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3.5 max-w-[850px] mx-auto"
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.button
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/80 backdrop-blur-md text-[#314259] font-semibold text-[14px] px-6 py-3 rounded-full border border-white/40 shadow-sm hover:shadow-md hover:bg-white transition-all whitespace-nowrap"
            >
              {service}
            </motion.button>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
