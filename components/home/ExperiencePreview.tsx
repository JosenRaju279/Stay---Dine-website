"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Waves, Dumbbell, PartyPopper, UtensilsCrossed, Heart } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { EXPERIENCES } from "@/data/experiences";
import { staggerContainer, staggerItem } from "@/lib/animations";

const iconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles size={24} />,
  Waves: <Waves size={24} />,
  Dumbbell: <Dumbbell size={24} />,
  PartyPopper: <PartyPopper size={24} />,
  UtensilsCrossed: <UtensilsCrossed size={24} />,
  Heart: <Heart size={24} />,
};

export default function ExperiencePreview() {
  return (
    <section className="section-padding bg-section-bg" aria-label="Experiences">
      <Container>
        <SectionTitle
          subtitle="Experiences"
          title="Unforgettable Moments"
          description="From rejuvenating spa rituals to romantic dining under the stars — discover a world of extraordinary experiences."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {EXPERIENCES.map((exp) => (
            <motion.div
              key={exp.id}
              variants={staggerItem}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] cursor-pointer"
            >
              {/* Background Image */}
              <Image
                src={exp.image}
                alt={exp.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-500" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="text-gold mb-3 transition-transform duration-300 group-hover:-translate-y-2">
                  {iconMap[exp.icon]}
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-2 transition-transform duration-300 group-hover:-translate-y-2">
                  {exp.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  {exp.shortDescription}
                </p>
                <Link
                  href="/experiences"
                  className="mt-3 text-gold text-xs font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 flex items-center gap-1"
                >
                  Learn More <span>→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
