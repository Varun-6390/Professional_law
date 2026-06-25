"use client";

import { motion } from "framer-motion";

export default function WhyUs() {
  const features = [
    {
      title: "Pricing",
      us: "Transparent & Upfront",
      others: "Hidden Fees",
    },
    {
      title: "Process Tracking",
      us: "100% Online Dashboard",
      others: "Manual / Emails",
    },
    {
      title: "Expertise",
      us: "In-house CAs & Lawyers",
      others: "Outsourced Freelancers",
    },
    {
      title: "Support",
      us: "Dedicated Account Manager",
      others: "Generic Helpdesk",
    },
    {
      title: "Document Security",
      us: "Bank-level Encryption",
      others: "Standard Storage",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const rowVariants = {
    hidden: { opacity: 0, x: -20 },
    show: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  return (
    <section className="py-10 px-4 md:px-8 bg-white w-full overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-[#314259] tracking-tight">
            Professional Law VS Others (Why us)
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="w-full overflow-x-auto pb-4 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-2xl"
        >
          <table className="w-full min-w-[700px] text-left border-collapse bg-white">
            <thead>
              <tr className="bg-[#0b132a] text-white text-[17px]">
                <th className="py-5 px-8 font-semibold w-1/3 border-r border-white/10 rounded-tl-2xl">
                  Features / Benefits
                </th>
                <th className="py-5 px-8 font-semibold w-1/3 border-r border-white/10">
                  Professional Law
                </th>
                <th className="py-5 px-8 font-semibold w-1/3 rounded-tr-2xl">
                  Other Consultants
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <motion.tr
                  variants={rowVariants}
                  key={index}
                  className="border-b border-gray-100 hover:bg-slate-50 transition-colors duration-200 group"
                >
                  <td className="py-5 px-8 text-gray-600 font-medium border-r border-gray-100 group-hover:text-[#314259] transition-colors">
                    {feature.title}
                  </td>
                  <td className="py-5 px-8 text-[#314259] font-bold border-r border-gray-100 bg-[#f8fafc] group-hover:bg-[#f1f5f9] transition-colors">
                    {feature.us}
                  </td>
                  <td className="py-5 px-8 text-gray-400 font-normal group-hover:text-gray-500 transition-colors">
                    {feature.others}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
