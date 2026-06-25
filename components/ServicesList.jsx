"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, Layers } from "lucide-react";
import servicesData from "../public/data/services-list.json";

export default function ServicesList({ onApply }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div id="services-list-container" className="py-20 bg-[#fafbfe] w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-28">
        
        <section id="all-services" className="scroll-mt-32">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-[#1572ed] text-sm font-extrabold uppercase tracking-widest block mb-2">
                Our Services
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#314259] tracking-tight">
                All Professional Services
              </h2>
            </div>
            <p className="text-gray-500 max-w-xl text-sm md:text-base leading-relaxed">
              Explore our comprehensive range of legal, compliance, and registration services tailored to your business requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.3, delay: (index % 12) * 0.05 }}
                className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-[#1572ed]/25 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[11px] font-extrabold text-[#1572ed] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full uppercase tracking-wider">
                      SERVICE
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center">
                       <Layers size={18} className="text-gray-400 group-hover:text-[#1572ed] transition-colors" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#314259] mb-3 group-hover:text-[#1572ed] transition-colors line-clamp-2">
                    {service.title || service.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </h3>
                  <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed mb-6 line-clamp-2">
                    Professional consultation and end-to-end support for {service.title ? service.title.split(' |')[0] : service.slug.split('-').join(' ')}.
                  </p>
                </div>

                <div className="flex items-center justify-between pt-5 border-t border-gray-100 mt-auto">
                  <a
                    href={`/services/${service.slug}`}
                    className="text-gray-500 hover:text-[#314259] text-sm font-semibold flex items-center gap-1.5 group/btn"
                  >
                    View Details
                    <ArrowUpRight size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                  <button
                    onClick={onApply}
                    className="bg-[#f97316]/10 text-[#f97316] hover:bg-[#f97316] hover:text-white px-4 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-1.5 group/apply"
                  >
                    Apply Now
                    <ArrowRight size={14} className="group-hover/apply:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
