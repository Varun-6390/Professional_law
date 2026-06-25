"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Eye,
  Target,
  Users,
  BadgeCheck,
  DollarSign,
  ArrowRight,
  Clock,
  Globe,
} from "lucide-react";

/* ─── reusable fade-in wrapper ─── */
function FadeIn({ children, delay = 0, direction = "up", className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── animated counter ─── */
function Counter({ value, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.span
      ref={ref}
      className="text-3xl md:text-4xl font-extrabold text-[#131a31]"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
    >
      {inView ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {value}
          {suffix}
        </motion.span>
      ) : (
        "0"
      )}
    </motion.span>
  );
}

export default function AboutPage() {
  const leadership = [
    {
      name: "Rajesh Sharma",
      role: "Managing Partner",
      img: "/assets/images/pexels-olly-3777557.jpg",
    },
    {
      name: "Priya Desai",
      role: "Head of Corporate Law",
      img: "/assets/images/pexels-helenalopes-27086922.jpg",
    },
    {
      name: "Amit Patel",
      role: "Chief Operations Officer",
      img: "/assets/images/p1.jpg",
    },
    {
      name: "David D'souza",
      role: "Director of AI Compliance",
      img: "/assets/images/pexels-matazumultimedia-33048698.jpg",
    },
  ];

  const whyChoose = [
    {
      icon: <Users className="w-7 h-7 text-[#1572ed]" />,
      stat: "10,000+",
      label: "Clients",
      desc: "Trusted by thousands of businesses across the nation for their critical compliance needs.",
    },
    {
      icon: <BadgeCheck className="w-7 h-7 text-[#f97316]" />,
      stat: "50+",
      label: "Expert CAs & Lawyers",
      desc: "Our dedicated team consists of empowered professionals with specialized experience in corporate law.",
    },
    {
      icon: <DollarSign className="w-7 h-7 text-[#10b981]" />,
      stat: "100%",
      label: "Transparent Pricing",
      desc: "No hidden fees or surprise costs. We provide upfront, clear pricing for all our standard service packages.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fafbfe] flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow w-full pt-[57px]">

        {/* ══════════════════════════════════════════
            SECTION 1 — HERO / OUR STORY
        ══════════════════════════════════════════ */}
        <section className="w-full bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left — Text */}
            <FadeIn direction="right" className="flex flex-col">
              <span className="text-[13px] font-bold text-[#f97316] uppercase tracking-widest mb-4">
                Our Story
              </span>
              <h1 className="text-2xl sm:text-4xl lg:text-[48px] font-extrabold text-[#131a31] leading-tight mb-5">
                Empowering Businesses with Legal Excellence
              </h1>
              <p className="text-gray-500 text-[16px] leading-relaxed mb-8 max-w-lg">
                Founded on the principles of trust and precision, Professional
                Law has spent over a decade transforming complex compliance
                requirements into streamlined, tech-enabled experiences. We
                believe that legal frameworks should enable growth, not hinder
                it.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/services">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full sm:w-auto bg-[#f97316] text-white px-7 py-3.5 rounded-xl font-semibold text-[15px] hover:bg-[#ea580c] transition-colors shadow-lg shadow-orange-500/25"
                  >
                    Discover Our Services
                  </motion.button>
                </Link>
              </div>
            </FadeIn>

            {/* Right — Image with single bottom-left badge */}
            <FadeIn direction="left" delay={0.15} className="relative">
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-[#131a31]/10 aspect-[4/3] lg:aspect-auto lg:h-[400px] w-full">
                <Image
                  src="/assets/images/group.jpg"
                  alt="Professional Law team of legal experts"
                  fill
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131a31]/20 via-transparent to-transparent" />
              </div>

              {/* Single badge — bottom-left, partially overlapping image */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-5 left-5 bg-white rounded-2xl shadow-xl border border-gray-100 px-5 py-4 flex items-center gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-[#ededfa] flex items-center justify-center shrink-0">
                  <BadgeCheck className="w-6 h-6 text-[#4f46e5]" />
                </div>
                <div>
                  <p className="text-xl font-extrabold text-[#131a31] leading-none">15+</p>
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mt-1">Years Experience</p>
                </div>
              </motion.div>
            </FadeIn>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            SECTION 2 — DRIVEN BY PURPOSE
        ══════════════════════════════════════════ */}
        <section className="w-full py-12 md:py-16 bg-[#fafbfe]">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <FadeIn className="text-center mb-8">
              <p className="text-[13px] font-bold text-[#f97316] uppercase tracking-widest mb-3">
                Our Core Values
              </p>
              <h2 className="text-2xl md:text-4xl font-extrabold text-[#131a31] mb-4">
                Driven by Purpose
              </h2>
              <p className="text-gray-500 text-[16px] max-w-xl mx-auto leading-relaxed">
                Our core values dictate every interaction, ensuring your business receives the highest standard of professional care.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Vision Card */}
              <FadeIn direction="right" delay={0.1}>
                <motion.div
                  whileHover={{ y: -6, boxShadow: "0 20px 60px -10px rgba(21,114,237,0.12)" }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm h-full"
                >
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-5">
                    <Eye className="w-7 h-7 text-[#1572ed]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#131a31] mb-3">Our Vision</h3>
                  <p className="text-gray-500 text-[15px] leading-relaxed">
                    To be the premier digital compliance partner for modern enterprises, building a world where legal adherence is intuitive, transparent, and effortless for businesses of all scales.
                  </p>
                </motion.div>
              </FadeIn>

              {/* Mission Card */}
              <FadeIn direction="left" delay={0.2}>
                <motion.div
                  whileHover={{ y: -6, boxShadow: "0 20px 60px -10px rgba(249,115,22,0.12)" }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm h-full"
                >
                  <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center mb-5">
                    <Target className="w-7 h-7 text-[#f97316]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#131a31] mb-3">Our Mission</h3>
                  <p className="text-gray-500 text-[15px] leading-relaxed">
                    To deliver uncompromising legal expertise through our innovative tech-forward platform, bridging the gap between deep regulatory knowledge and accessible, daily business decisions.
                  </p>
                </motion.div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            SECTION 3 — WHY CHOOSE US
        ══════════════════════════════════════════ */}
        <section className="w-full py-12 md:py-16 bg-white border-t border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <FadeIn className="text-center mb-8">
              <p className="text-[13px] font-bold text-[#f97316] uppercase tracking-widest mb-3">
                The Professional Law Advantage
              </p>
              <h2 className="text-2xl md:text-4xl font-extrabold text-[#131a31] mb-4">
                Why Choose Us
              </h2>
              <p className="text-gray-500 text-[16px] max-w-xl mx-auto leading-relaxed">
                We combine deep industry knowledge with modern operational efficiency.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyChoose.map((item, i) => (
                <FadeIn key={i} delay={i * 0.12} direction="up">
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#fafbfe] rounded-2xl p-6 border border-gray-100 h-full flex flex-col gap-3 group hover:border-gray-200 transition-all"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <Counter value={item.stat} />
                      <p className="text-[17px] font-bold text-[#131a31] mt-1">{item.label}</p>
                    </div>
                    <p className="text-gray-500 text-[14px] leading-relaxed">{item.desc}</p>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            SECTION 4 — OUR LEADERSHIP
        ══════════════════════════════════════════ */}
        <section className="w-full py-12 md:py-16 bg-[#fafbfe]">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <FadeIn className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
              <div>
                <p className="text-[13px] font-bold text-[#f97316] uppercase tracking-widest mb-3">
                  The People Behind the Platform
                </p>
                <h2 className="text-2xl md:text-4xl font-extrabold text-[#131a31] mb-3">
                  Our Leadership
                </h2>
                <p className="text-gray-500 text-[16px] max-w-lg leading-relaxed">
                  The expert team in India guiding our commitment to legal excellence.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[#1572ed] font-semibold text-[15px] shrink-0 hover:gap-3 transition-all"
              >
                View All Members <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
              {leadership.map((member, i) => (
                <FadeIn key={i} delay={i * 0.1} direction="up">
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm group hover:shadow-xl hover:shadow-[#131a31]/8 transition-all duration-300"
                  >
                    <div className="relative h-64 overflow-hidden bg-gray-100">
                      <Image
                        src={member.img}
                        alt={member.name}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#131a31]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-5">
                      <h3 className="text-[16px] font-bold text-[#131a31]">{member.name}</h3>
                      <p className="text-[13px] text-[#1572ed] font-semibold mt-1">{member.role}</p>
                    </div>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            SECTION 5 — STATS ROW
        ══════════════════════════════════════════ */}
        <section className="w-full bg-white border-t border-gray-100 py-10 md:py-14">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {[
                { icon: <Users className="w-6 h-6 text-[#1572ed]" />, val: "10,000+", label: "Businesses Served" },
                { icon: <BadgeCheck className="w-6 h-6 text-[#f97316]" />, val: "50+", label: "Expert Professionals" },
                { icon: <Clock className="w-6 h-6 text-[#10b981]" />, val: "15+", label: "Years of Excellence" },
                { icon: <Globe className="w-6 h-6 text-[#8b5cf6]" />, val: "28+", label: "States Covered" },
              ].map((s, i) => (
                <FadeIn key={i} delay={i * 0.1} direction="up" className="text-center">
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center">
                      {s.icon}
                    </div>
                  </div>
                  <Counter value={s.val} />
                  <p className="text-[14px] text-gray-500 font-medium mt-1">{s.label}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            SECTION 6 — CTA BANNER
        ══════════════════════════════════════════ */}
        <section className="w-full bg-[#0b132a] py-14 md:py-18 relative overflow-hidden">
          {/* Decorative blobs */}
          <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-[#1572ed]/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-[#f97316]/10 blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto px-4 md:px-8 text-center relative z-10">
            <FadeIn>
              <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-8">
                <BadgeCheck className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
                Ready to simplify your operations?
              </h2>
              <p className="text-gray-400 text-[16px] leading-relaxed mb-10 max-w-2xl mx-auto">
                Join thousands of businesses that trust Professional Law for their comprehensive
                compliance and legal needs across cultural and regional requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/services">
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full sm:w-auto bg-[#f97316] text-white px-8 py-4 rounded-xl font-bold text-[16px] hover:bg-[#ea580c] transition-colors shadow-lg shadow-orange-500/25"
                  >
                    Start Your Compliance Journey
                  </motion.button>
                </Link>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full sm:w-auto bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-[16px] hover:bg-white/10 hover:border-white/50 transition-all"
                  >
                    Speak to an Expert
                  </motion.button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
