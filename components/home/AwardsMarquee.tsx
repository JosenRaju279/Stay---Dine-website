"use client";

import { motion } from "framer-motion";
import { AWARDS } from "@/data/testimonials";

export default function AwardsMarquee() {
  return (
    <section className="py-16 bg-background border-y border-white/[0.04] overflow-hidden" aria-label="Awards and recognition">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <span className="text-white/30 text-xs uppercase tracking-[0.2em]">
          Awards & Recognition
        </span>
      </motion.div>

      {/* Marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-marquee">
          {[...AWARDS, ...AWARDS].map((award, i) => (
            <div
              key={`${award.id}-${i}`}
              className="flex items-center gap-3 px-10 shrink-0"
            >
              <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center">
                <span className="text-gold text-xs font-bold">★</span>
              </div>
              <div className="whitespace-nowrap">
                <span className="text-white/60 text-sm font-medium">{award.name}</span>
                <span className="text-white/20 text-xs ml-2">{award.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
