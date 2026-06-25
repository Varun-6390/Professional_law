"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      title: "Founder, TechInnovate",
      text: `"Professional Law made our company registration a breeze. Their team was responsive and guided us through every step. Highly recommended for any new startup!"`,
      avatarBg: "bg-[#0f172a]",
    },
    {
      name: "Priya Patel",
      title: "Director, FoodWorks",
      text: `"We transferred all our GST and annual compliance work to them. The dashboard makes it so easy to track progress. Saves us a lot of headache."`,
      avatarBg: "bg-[#f97316]",
    },
    {
      name: "Amit Singh",
      title: "CEO, RetailPro",
      text: `"Got my trademark registered without any hassle. The pricing was transparent and exactly as quoted initially. Very professional service."`,
      avatarBg: "bg-[#1e293b]",
    },
    {
      name: "Sneha Gupta",
      title: "Co-founder, DesignStudio",
      text: `"Exceptional service! They handled our complex compliance requirements with ease and kept us updated throughout the entire process."`,
      avatarBg: "bg-[#1572ed]",
    },
    {
      name: "Vikram Reddy",
      title: "Managing Director, BuildTech",
      text: `"The team at Professional Law is incredibly knowledgeable. They've been a crucial compliance partner in our company's rapid growth phase."`,
      avatarBg: "bg-[#059669]",
    },
  ];

  // Duplicate testimonials array for seamless infinite scroll
  const scrollItems = [...testimonials, ...testimonials];

  return (
    <section className="py-10 bg-white overflow-hidden w-full relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-4xl font-bold text-[#314259] tracking-tight"
        >
          Testimonials
        </motion.h2>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Left and Right Fade Gradients */}
        <div className="absolute top-0 bottom-0 left-0 w-24 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40, // Adjust speed here (higher is slower)
          }}
          className="flex gap-6 md:gap-8 w-fit px-6 md:px-8"
        >
          {scrollItems.map((testimonial, index) => (
            <div
              key={index}
              className="w-[320px] md:w-[400px] shrink-0 bg-[#f8fafc] rounded-3xl p-8 flex flex-col justify-between border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div>
                <div className="flex gap-1.5 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#f97316] text-[#f97316]"
                    />
                  ))}
                </div>
                <p className="text-gray-500 italic leading-relaxed mb-8 text-[15px]">
                  {testimonial.text}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full ${testimonial.avatarBg} text-white flex items-center justify-center font-bold text-lg shadow-sm`}
                >
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-[#314259] text-[15px]">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
