"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 25,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 50 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 25,
      },
    },
  };

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col items-center"
      >
        <motion.h2
          variants={itemVariants}
          className="text-center text-3xl md:text-5xl font-extrabold text-[#314259] mb-10 drop-shadow-sm"
        >
          About Professional Law
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">
          {/* Left Column - Image */}
          <motion.div
            variants={imageVariants}
            className="relative w-full h-auto rounded-[2rem] overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#3a4556] via-[#1e2532] to-[#12161e] border-[8px] border-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex items-end justify-center"
          >
            <Image
              src="/assets/images/emp.png"
              alt="Professional Law Expert"
              width={800}
              height={800}
              className="w-full h-auto object-contain object-bottom"
              priority
            />
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            variants={cardVariants}
            className="bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-full"
          >
            <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <motion.h3
                variants={itemVariants}
                className="text-2xl md:text-[28px] leading-tight font-bold text-[#314259] mb-6"
              >
                Your Trusted Compliance Partner
              </motion.h3>

              <motion.p
                variants={itemVariants}
                className="text-gray-500 text-[15px] leading-relaxed mb-5"
              >
                Professional Law is dedicated to simplifying the complex world of legal
                and business compliance for startups and enterprises alike. We
                combine deep industry expertise with technology to deliver fast,
                accurate, and transparent services.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-gray-500 text-[15px] leading-relaxed mb-8"
              >
                From company incorporation to intellectual property protection and
                ongoing tax filings, our team of dedicated professionals ensures your
                business remains compliant and ready for growth.
              </motion.p>

              <motion.ul variants={itemVariants} className="space-y-4 mb-10">
                {[
                  "10,000+ Businesses Served",
                  "Pan India Presence",
                  "Expert Legal & CA Team",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-[#314259]"
                  >
                    <Check className="text-[#f97316] w-5 h-5 shrink-0" strokeWidth={2.5} />
                    <span className="text-[15px] font-medium">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#f97316] text-white px-8 py-3.5 rounded-xl font-medium hover:bg-[#ea580c] transition-colors shadow-md shadow-orange-500/20"
              >
                Read Our Full Story
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
