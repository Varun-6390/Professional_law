"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, MapPin, Layers, ShieldCheck, Flame, ShieldAlert, Award } from "lucide-react";

export default function ServicesList({ onApply }) {
  const factoryServices = [
    {
      state: "Delhi",
      badge: "STATE FACTORY DEPT",
      title: "Delhi Factory License (Rule 1950)",
      description:
        "Mandatory licensing for factory operations within the National Capital Territory. Ensures compliance with security, welfare, and safety standards.",
      slug: "factory-license-registration"
    },
    {
      state: "Uttar Pradesh",
      badge: "STATE FACTORY DEPT",
      title: "UP Factory License (Rule 1957)",
      description:
        "Registration for industrial units operating in UP. Register under State Factory Rules for worker safety, welfare, and shift approvals.",
      slug: "factory-license-registration"
    },
    {
      state: "Maharashtra",
      badge: "STATE FACTORY DEPT",
      title: "Maharashtra Factory License",
      description:
        "Compliance licensing for manufacturing units in Maharashtra. Covers building stability, health checks, and worker shift approvals.",
      slug: "factory-license-registration"
    },
    {
      state: "Haryana",
      badge: "STATE FACTORY DEPT",
      title: "Haryana Factory License (Rule 1953)",
      description:
        "Registration and license approval for factory units in Haryana under state norms. Offers quick turnaround for industrial approvals.",
      slug: "factory-license-registration"
    },
    {
      state: "Bihar",
      badge: "STATE FACTORY DEPT",
      title: "Bihar Factory License (Rule 1950)",
      description:
        "State registration process for industrial units in Bihar. Ensures compliance with state machinery safety and workforce welfare laws.",
      slug: "factory-license-registration"
    },
    {
      state: "West Bengal",
      badge: "STATE FACTORY DEPT",
      title: "WB Factory License (Rule 1958)",
      description:
        "Licensing support for units operating in West Bengal under the state factory directorate. Streamlined processing for quick approvals.",
      slug: "factory-license-registration"
    },
  ];

  const pollutionServices = [
    {
      state: "Delhi",
      badge: "STATE POLLUTION BOARD",
      title: "DPCC Pollution Board Consent",
      description:
        "Obtain Consent to Establish (CTE) & Consent to Operate (CTO) from Delhi Pollution Control Committee for green/orange categories.",
      slug: "pollution-control-noc"
    },
    {
      state: "Uttar Pradesh",
      badge: "STATE POLLUTION BOARD",
      title: "UPPCB Pollution Board Consent",
      description:
        "Environmental clearances and pollution consent certificates from Uttar Pradesh Pollution Control Board for safe industrial setup.",
      slug: "pollution-control-noc"
    },
    {
      state: "Maharashtra",
      badge: "STATE POLLUTION BOARD",
      title: "MPCB Pollution Board Consent",
      description:
        "Pollution consent clearances from Maharashtra Pollution Control Board (MPCB) for waste discharge and emissions.",
      slug: "pollution-control-noc"
    },
    {
      state: "Haryana",
      badge: "STATE POLLUTION BOARD",
      title: "HSPCB Pollution Board Consent",
      description:
        "Consent to Establish and Operate from Haryana State Pollution Control Board. Easy categorization and emission clearances.",
      slug: "pollution-control-noc"
    },
    {
      state: "Bihar",
      badge: "STATE POLLUTION BOARD",
      title: "BSPCB Pollution Board Consent",
      description:
        "Pollution control board consent certificates from Bihar (BSPCB) for manufacturing, processing, and warehousing units.",
      slug: "pollution-control-noc"
    },
    {
      state: "West Bengal",
      badge: "STATE POLLUTION BOARD",
      title: "WBPCB Pollution Board Consent",
      description:
        "Get environmental clearance and consent certificates (CTE/CTO) from West Bengal Pollution Control Board.",
      slug: "pollution-control-noc"
    },
  ];

  const otherServices = [
    {
      icon: <Flame className="w-6 h-6 text-[#f97316]" />,
      title: "Fire NOC Safety Clearance",
      badge: "FIRE SERVICE DEPT",
      description:
        "Obtain Fire NOC certificate from state fire services confirming installation of mandatory safety equipment and layout plans.",
      slug: "fire-noc-certificate"
    },
    {
      icon: <Award className="w-6 h-6 text-[#1572ed]" />,
      title: "MSME Registration (Udyam)",
      badge: "MINISTRY OF MSME",
      description:
        "Online registration process for Micro, Small & Medium Enterprises to unlock priority sector lending, tax exemptions, and government subsidies.",
      slug: "msme-registration-india"
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-emerald-500" />,
      title: "Labour License Compliance",
      badge: "LABOUR DEPARTMENT",
      description:
        "Ensure contract labor license and worker registration under state contract labor acts for safe, legal contractor management.",
      slug: "contract-labour-license"
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div id="services-list-container" className="py-20 bg-[#fafbfe] w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-28">
        
        {/* Section 1: Factory License */}
        <section id="factory-license" className="scroll-mt-32">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-[#1572ed] text-sm font-extrabold uppercase tracking-widest block mb-2">
                Factory License Suite
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#314259] tracking-tight">
                State-wise Factory Licenses
              </h2>
            </div>
            <p className="text-gray-500 max-w-xl text-sm md:text-base leading-relaxed">
              Secure compliance under state factory rules. We provide end-to-end guidance for fresh applications, setup registrations, plan approvals, and timely renewals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {factoryServices.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-[#1572ed]/25 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[11px] font-extrabold text-[#1572ed] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full uppercase tracking-wider">
                      {service.badge}
                    </span>
                    <div className="flex items-center gap-1.5 text-gray-400 font-semibold text-sm">
                      <MapPin size={14} className="text-[#f97316]" />
                      <span>{service.state}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#314259] mb-3 group-hover:text-[#1572ed] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed mb-6">
                    {service.description}
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

        {/* Section 2: Pollution Board Consent */}
        <section id="pollution-noc" className="scroll-mt-32">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-[#f97316] text-sm font-extrabold uppercase tracking-widest block mb-2">
                Pollution Board Consent (CTE & CTO)
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#314259] tracking-tight">
                State Pollution NOC Certificates
              </h2>
            </div>
            <p className="text-gray-500 max-w-xl text-sm md:text-base leading-relaxed">
              Obtain Consent to Establish (CTE) before setting up and Consent to Operate (CTO) before starting operations from DPCC, MPCB, BSPCB, UPPCB, HSPCB, or WBPCB.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pollutionServices.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-[#f97316]/25 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[11px] font-extrabold text-[#f97316] bg-orange-50/50 border border-orange-100 px-3 py-1 rounded-full uppercase tracking-wider">
                      {service.badge}
                    </span>
                    <div className="flex items-center gap-1.5 text-gray-400 font-semibold text-sm">
                      <MapPin size={14} className="text-[#1572ed]" />
                      <span>{service.state}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#314259] mb-3 group-hover:text-[#f97316] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed mb-6">
                    {service.description}
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

        {/* Section 3: Other Registrations & NOCs */}
        <section id="other-nocs" className="scroll-mt-32">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-emerald-500 text-sm font-extrabold uppercase tracking-widest block mb-2">
                Other Registrations & NOCs
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#314259] tracking-tight">
                Mandatory Industrial Approvals
              </h2>
            </div>
            <p className="text-gray-500 max-w-xl text-sm md:text-base leading-relaxed">
              Ensure safety clearance, MSME registrations, and workforce compliance. Complete your establishment suite with our expert-led legal compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherServices.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-emerald-500/25 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[11px] font-extrabold text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full uppercase tracking-wider">
                      {service.badge}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center">
                      {service.icon}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#314259] mb-3 group-hover:text-emerald-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed mb-6">
                    {service.description}
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
