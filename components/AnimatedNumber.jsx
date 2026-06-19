"use client";

import { useEffect, useRef } from "react";
import { useInView, animate } from "framer-motion";

export default function AnimatedNumber({ value, duration = 2, prefix = "", suffix = "", decimals = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView && ref.current) {
      const controls = animate(0, value, {
        duration,
        ease: "easeOut",
        onUpdate: (cv) => {
          if (ref.current) {
            ref.current.textContent = `${prefix}${cv.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}${suffix}`;
          }
        }
      });
      return () => controls.stop();
    }
  }, [value, duration, inView, prefix, suffix, decimals]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}
