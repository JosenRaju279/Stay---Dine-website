"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import PageHero from "@/components/shared/PageHero";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { IMAGES } from "@/data/images";
import { STATS } from "@/lib/constants";
import { AWARDS } from "@/data/testimonials";
import { useCountUp } from "@/hooks/useCountUp";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from "@/lib/animations";

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value, 2000);
  return (
    <div ref={ref} className="text-center p-6 glass rounded-xl">
      <div className="text-4xl md:text-5xl font-heading font-bold text-gold">
        {count}
        <span>{suffix}</span>
      </div>
      <div className="text-paragraph text-xs uppercase tracking-wider mt-2">{label}</div>
    </div>
  );
}

const values = [
  { title: "Excellence", description: "We pursue perfection in every detail, from the thread count of our linens to the garnish on every plate." },
  { title: "Authenticity", description: "We honor tradition while embracing innovation, creating experiences that feel genuine and meaningful." },
  { title: "Warmth", description: "True luxury is not just opulence — it's the feeling of being welcomed, understood, and cared for." },
  { title: "Sustainability", description: "We are committed to responsible luxury, minimizing our footprint while maximizing positive impact." },
];

const milestones = [
  { year: "1999", event: "Founded in Mayfair, London" },
  { year: "2005", event: "First Forbes Five-Star Rating" },
  { year: "2010", event: "Aurelia Restaurant opens" },
  { year: "2015", event: "First Michelin Star awarded" },
  { year: "2019", event: "Second Michelin Star achieved" },
  { year: "2023", event: "Major renovation complete" },
  { year: "2025", event: "Named World's Best Hotel" },
];

export default function AboutPageClient() {
  return (
    <>
      <PageHero
        title="Our Story"
        subtitle="About Us"
        description="A legacy of unparalleled luxury, crafted over 25 years of passion and dedication."
        image={IMAGES.aboutHotel}
        imageAlt="Stay & Dine hotel"
      />

      {/* Story */}
      <section className="section-padding bg-background">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <SectionTitle
                subtitle="The Beginning"
                title="Where It All Started"
                align="left"
              />
              <p className="text-paragraph text-sm md:text-base leading-relaxed mb-6">
                Stay & Dine was born from a vision to create more than a hotel — a destination 
                where every moment feels extraordinary. Founded in 1999 by the Ashworth family, 
                our hotel has grown from an intimate 40-room boutique into one of the world&apos;s 
                most celebrated luxury properties.
              </p>
              <p className="text-paragraph text-sm md:text-base leading-relaxed">
                Through decades of unwavering dedication to excellence, we&apos;ve earned the trust 
                of the world&apos;s most discerning travelers. Today, with 120 rooms, a Michelin-starred 
                restaurant, and a world-class spa, Stay & Dine continues to redefine what luxury 
                hospitality means.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden image-zoom"
            >
              <Image
                src={IMAGES.lobby}
                alt="Hotel grand lobby"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="section-padding bg-section-bg">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            {STATS.map((stat) => (
              <motion.div key={stat.label} variants={staggerItem}>
                <StatItem {...stat} />
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <Container>
          <SectionTitle
            subtitle="Philosophy"
            title="Our Values"
            description="The principles that guide everything we do."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                variants={staggerItem}
                className="glass rounded-xl p-6 text-center hover:bg-white/[0.08] transition-all duration-300"
              >
                <div className="text-gold text-3xl font-heading font-bold mb-3">
                  0{i + 1}
                </div>
                <h3 className="text-white font-heading text-lg font-bold mb-3">{v.title}</h3>
                <p className="text-paragraph text-sm leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-section-bg">
        <Container className="max-w-3xl">
          <SectionTitle
            subtitle="Milestones"
            title="Our Journey"
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-0"
          >
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                variants={staggerItem}
                className="flex items-center gap-6 py-4 border-b border-white/[0.06] group"
              >
                <span className="text-gold font-heading text-2xl font-bold w-20 shrink-0">
                  {m.year}
                </span>
                <div className="w-2 h-2 rounded-full bg-gold/30 shrink-0 group-hover:bg-gold transition-colors" />
                <p className="text-paragraph text-sm group-hover:text-white transition-colors">
                  {m.event}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Awards */}
      <section className="section-padding bg-background">
        <Container>
          <SectionTitle
            subtitle="Recognition"
            title="Awards & Accolades"
            description="Honored by the world's most prestigious hospitality organizations."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {AWARDS.map((award) => (
              <motion.div
                key={award.id}
                variants={staggerItem}
                className="glass rounded-xl p-6 text-center hover:bg-white/[0.08] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-3">
                  <span className="text-gold text-lg">★</span>
                </div>
                <h4 className="text-white text-sm font-semibold mb-1">{award.name}</h4>
                <p className="text-white/30 text-xs">{award.year}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>
    </>
  );
}
