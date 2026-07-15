"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { IMAGES } from "@/data/images";
import { STATS } from "@/lib/constants";
import { useCountUp } from "@/hooks/useCountUp";
import { fadeInLeft, fadeInRight, staggerContainer, staggerItem } from "@/lib/animations";

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value, 2000);
  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-heading font-bold text-gold">
        {count}
        <span>{suffix}</span>
      </div>
      <div className="text-paragraph text-xs uppercase tracking-wider mt-1">{label}</div>
    </div>
  );
}

export default function AboutPreview() {
  return (
    <section className="section-padding bg-background" aria-label="About our hotel">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden image-zoom">
              <Image
                src={IMAGES.aboutHotel}
                alt="Stay & Dine hotel grand lobby"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Floating accent card */}
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 glass rounded-xl p-6 max-w-[200px]">
              <div className="text-4xl font-heading font-bold text-gold">25+</div>
              <div className="text-white text-sm mt-1">Years of Excellence</div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <SectionTitle
              subtitle="Our Story"
              title="A Legacy of Unparalleled Luxury"
              description="Since 1999, Stay & Dine has redefined luxury hospitality. Nestled in the heart of London's Mayfair, our hotel blends timeless elegance with contemporary sophistication to create moments that last a lifetime."
              align="left"
            />

            <p className="text-paragraph text-sm md:text-base leading-relaxed mb-8">
              Every detail — from our hand-selected Italian marble to our Michelin-starred cuisine — 
              reflects our unwavering commitment to excellence. Our dedicated team of over 300 
              professionals ensures that every guest experience transcends expectation.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-gold text-sm font-semibold uppercase tracking-wider hover:text-gold-hover transition-colors group"
            >
              Discover Our Story
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>

            {/* Stats */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-white/[0.06]"
            >
              {STATS.map((stat) => (
                <motion.div key={stat.label} variants={staggerItem}>
                  <StatItem {...stat} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
