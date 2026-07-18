"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { IMAGES } from "@/data/images";
import { staggerContainer, staggerItem } from "@/lib/animations";

const galleryImages = IMAGES.gallery.slice(0, 6);

export default function GalleryPreview() {
  return (
    <section className="section-padding bg-background" aria-label="Gallery preview">
      <Container>
        <SectionTitle
          subtitle="Gallery"
          title="A Visual Journey"
          description="Explore the beauty of Stay & Dine through our curated collection of photographs."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
        >
          {galleryImages.map((src, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className={`relative overflow-hidden rounded-xl image-zoom cursor-pointer ${
                i === 0 ? "md:row-span-2 aspect-square md:aspect-auto" : "aspect-square"
              }`}
            >
              <Image
                src={src}
                alt={`Gallery photo ${i + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white text-2xl opacity-0 hover:opacity-100 transition-opacity duration-300">
                  +
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-gold text-sm font-semibold uppercase tracking-wider hover:text-gold-hover transition-colors group"
          >
            View Full Gallery
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
