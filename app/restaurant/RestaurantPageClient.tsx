"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import PageHero from "@/components/shared/PageHero";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { IMAGES } from "@/data/images";
import { MENU_ITEMS } from "@/data/menu";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from "@/lib/animations";

const menuCategories = [
  { label: "All", value: "all" },
  { label: "Starters", value: "starters" },
  { label: "Mains", value: "mains" },
  { label: "Desserts", value: "desserts" },
  { label: "Drinks", value: "drinks" },
];

export default function RestaurantPageClient() {
  const [filter, setFilter] = useState("all");

  const filteredItems =
    filter === "all"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === filter);

  return (
    <>
      <PageHero
        title="Aurelia Restaurant"
        subtitle="Fine Dining"
        description="A culinary journey where artistry meets gastronomy under the guidance of Michelin-starred Chef Marco Bellini."
        image={IMAGES.restaurant.interior}
        imageAlt="Aurelia restaurant interior"
      />

      {/* About the Chef */}
      <section className="section-padding bg-background">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden image-zoom"
            >
              <Image
                src={IMAGES.restaurant.chef}
                alt="Chef Marco Bellini"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>

            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <SectionTitle
                subtitle="The Chef"
                title="Chef Marco Bellini"
                description="With three decades of experience and two Michelin stars, Chef Marco brings an unrivaled passion for culinary excellence to every dish that leaves his kitchen."
                align="left"
              />
              <p className="text-paragraph text-sm leading-relaxed mb-6">
                Trained at Le Cordon Bleu in Paris and having led kitchens in Rome, Tokyo, 
                and New York, Chef Marco&apos;s cuisine is a celebration of global flavors refined
                through French technique. His philosophy: the finest ingredients, treated with 
                respect and presented with artistry.
              </p>
              <p className="text-paragraph text-sm leading-relaxed mb-8">
                At Aurelia, every dish tells a story — of the land it comes from, the seasons 
                that shaped it, and the hands that crafted it into something extraordinary.
              </p>
              <Link
                href="/booking"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-black text-sm font-semibold uppercase tracking-wider rounded-sm hover:bg-gold-hover transition-all duration-300"
              >
                Reserve a Table
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Menu */}
      <section className="section-padding bg-section-bg">
        <Container>
          <SectionTitle
            subtitle="Our Menu"
            title="Culinary Artistry"
            description="Each dish is crafted with the finest seasonal ingredients, celebrating flavors from around the world."
          />

          {/* Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {menuCategories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-300 ${
                  filter === cat.value
                    ? "bg-gold text-black"
                    : "border border-white/[0.08] text-white/60 hover:text-white hover:border-white/20"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Menu Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            key={filter}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                variants={staggerItem}
                className="group flex gap-4 p-4 rounded-xl border border-white/[0.04] hover:border-white/[0.1] hover:bg-white/[0.02] transition-all duration-300"
              >
                <div className="relative w-24 h-24 rounded-lg overflow-hidden shrink-0 image-zoom">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-heading text-base font-bold text-white group-hover:text-gold transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-gold font-semibold text-sm shrink-0">
                      ${item.price}
                    </span>
                  </div>
                  <p className="text-paragraph text-xs leading-relaxed mt-1 line-clamp-2">
                    {item.description}
                  </p>
                  {item.dietary && (
                    <div className="flex gap-1.5 mt-2">
                      {item.dietary.map((d) => (
                        <span
                          key={d}
                          className="text-[10px] text-gold/70 bg-gold/10 px-2 py-0.5 rounded-full uppercase tracking-wider"
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-background">
        <Container>
          <SectionTitle
            subtitle="Ambiance"
            title="The Dining Experience"
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3"
          >
            {[
              IMAGES.restaurant.interior,
              IMAGES.restaurant.dining,
              IMAGES.restaurant.bar,
              IMAGES.restaurant.ambiance,
            ].map((src, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="relative aspect-square rounded-xl overflow-hidden image-zoom"
              >
                <Image
                  src={src}
                  alt={`Restaurant ambiance ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* CTA */}
      <section className="section-padding bg-section-bg">
        <Container className="text-center max-w-2xl">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-4 inline-block">
              Join Us
            </span>
            <div className="gold-line-center mb-6" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Reserve Your Table
            </h2>
            <p className="text-paragraph text-base leading-relaxed mb-8">
              For reservations, private dining inquiries, or special occasions, 
              our team is ready to create an unforgettable evening.
            </p>
            <Link
              href="/booking"
              className="inline-flex px-8 py-4 bg-gold text-black text-sm font-semibold uppercase tracking-wider rounded-sm hover:bg-gold-hover transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,162,39,0.3)]"
            >
              Make a Reservation
            </Link>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
