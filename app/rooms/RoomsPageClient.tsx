"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Maximize2, Users, Bed, Wifi, Bath, Coffee, Tv, UtensilsCrossed } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { ROOMS } from "@/data/rooms";
import { IMAGES } from "@/data/images";
import { staggerContainer, staggerItem } from "@/lib/animations";

const categories = [
  { label: "All Rooms", value: "all" },
  { label: "Deluxe", value: "deluxe" },
  { label: "Suites", value: "suite" },
  { label: "Presidential", value: "presidential" },
];

const amenityIcons: Record<string, React.ReactNode> = {
  "Free Wi-Fi": <Wifi size={14} />,
  "Rain Shower": <Bath size={14} />,
  "Soaking Tub": <Bath size={14} />,
  "Spa Bathroom": <Bath size={14} />,
  "Mini Bar": <Coffee size={14} />,
  "Full Bar": <Coffee size={14} />,
  "Smart TV": <Tv size={14} />,
  "Home Cinema": <Tv size={14} />,
  "Room Service": <UtensilsCrossed size={14} />,
  "Butler Service": <UtensilsCrossed size={14} />,
};

export default function RoomsPageClient() {
  const [filter, setFilter] = useState("all");

  const filteredRooms =
    filter === "all" ? ROOMS : ROOMS.filter((r) => r.category === filter);

  return (
    <>
      <PageHero
        title="Rooms & Suites"
        subtitle="Accommodation"
        description="Each room is a sanctuary of refined comfort, designed to exceed the expectations of the most discerning traveler."
        image={IMAGES.rooms.grandSuite}
        imageAlt="Luxury hotel suite interior"
      />

      <section className="section-padding bg-background">
        <Container>
          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
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

          {/* Room Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            key={filter}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {filteredRooms.map((room) => (
              <motion.div
                key={room.id}
                variants={staggerItem}
                className="group rounded-2xl overflow-hidden bg-section-bg border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  {/* Price */}
                  <div className="absolute top-4 right-4 glass rounded-lg px-4 py-2">
                    <span className="text-gold font-bold text-lg">${room.price}</span>
                    <span className="text-white/40 text-xs">/{room.priceUnit}</span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-gold/90 text-black text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
                      {room.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <h3 className="font-heading text-2xl font-bold text-white mb-3 group-hover:text-gold transition-colors">
                    {room.name}
                  </h3>
                  <p className="text-paragraph text-sm leading-relaxed mb-5">
                    {room.shortDescription}
                  </p>

                  {/* Room Details */}
                  <div className="flex items-center gap-6 mb-5 text-white/40 text-xs">
                    <span className="flex items-center gap-1.5">
                      <Maximize2 size={14} />
                      {room.size}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users size={14} />
                      {room.maxGuests} Guests
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Bed size={14} />
                      {room.bedType}
                    </span>
                  </div>

                  {/* Amenities */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {room.amenities.slice(0, 6).map((amenity) => (
                      <span
                        key={amenity}
                        className="flex items-center gap-1.5 text-white/30 text-xs bg-white/[0.03] rounded-full px-3 py-1.5"
                      >
                        {amenityIcons[amenity] || null}
                        {amenity}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    <Link
                      href="/booking"
                      className="flex-1 py-3 text-center text-sm font-semibold text-black bg-gold rounded-lg hover:bg-gold-hover transition-all duration-300"
                    >
                      Book This Room
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>
    </>
  );
}
