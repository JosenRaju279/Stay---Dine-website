"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import Container from "@/components/layout/Container";
import { IMAGES } from "@/data/images";
import { staggerContainer, staggerItem } from "@/lib/animations";

const allGalleryImages = [
  ...IMAGES.gallery,
  IMAGES.rooms.deluxeKing,
  IMAGES.rooms.premiumSuite,
  IMAGES.rooms.grandSuite,
  IMAGES.restaurant.interior,
  IMAGES.restaurant.bar,
  IMAGES.experiences.spa,
  IMAGES.experiences.pool,
  IMAGES.experiences.wedding,
];

const galleryCategories = [
  { label: "All", images: allGalleryImages },
  { label: "Hotel", images: IMAGES.gallery.slice(0, 6) },
  { label: "Rooms", images: [IMAGES.rooms.deluxeKing, IMAGES.rooms.premiumSuite, IMAGES.rooms.grandSuite, IMAGES.rooms.penthouseSuite, IMAGES.rooms.presidential, IMAGES.rooms.oceanView] },
  { label: "Dining", images: [IMAGES.restaurant.interior, IMAGES.restaurant.dining, IMAGES.restaurant.bar, IMAGES.restaurant.ambiance, IMAGES.food.dish1, IMAGES.food.dish2] },
  { label: "Experiences", images: [IMAGES.experiences.spa, IMAGES.experiences.pool, IMAGES.experiences.gym, IMAGES.experiences.events, IMAGES.experiences.wedding, IMAGES.experiences.privateDining] },
];

export default function GalleryPageClient() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const currentImages = galleryCategories[activeCategory].images;

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + currentImages.length) % currentImages.length : null
    );
  const nextImage = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % currentImages.length : null
    );

  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="Visual Journey"
        description="A curated collection of photographs capturing the essence of Stay & Dine."
        image={IMAGES.gallery[0]}
        imageAlt="Hotel gallery"
      />

      <section className="section-padding bg-background">
        <Container>
          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {galleryCategories.map((cat, i) => (
              <button
                key={cat.label}
                onClick={() => setActiveCategory(i)}
                className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-300 ${
                  i === activeCategory
                    ? "bg-gold text-black"
                    : "border border-white/[0.08] text-white/60 hover:text-white hover:border-white/20"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            key={activeCategory}
            className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3"
          >
            {currentImages.map((src, i) => (
              <motion.div
                key={`${activeCategory}-${i}`}
                variants={staggerItem}
                className="break-inside-avoid cursor-pointer group rounded-xl overflow-hidden"
                onClick={() => openLightbox(i)}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={src}
                    alt={`Gallery image ${i + 1}`}
                    width={600}
                    height={i % 3 === 0 ? 800 : i % 2 === 0 ? 500 : 600}
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      +
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white"
              aria-label="Close lightbox"
            >
              <X size={18} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 z-10 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white"
              aria-label="Previous image"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 z-10 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white"
              aria-label="Next image"
            >
              <ChevronRight size={18} />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl max-h-[80vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={currentImages[lightboxIndex]}
                alt={`Gallery image ${lightboxIndex + 1}`}
                width={1200}
                height={800}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
            </motion.div>

            <div className="absolute bottom-6 text-white/40 text-xs">
              {lightboxIndex + 1} / {currentImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
