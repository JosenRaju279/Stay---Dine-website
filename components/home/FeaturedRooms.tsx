"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Maximize2, Users, Bed } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { ROOMS } from "@/data/rooms";
import { staggerContainer, staggerItem } from "@/lib/animations";

const featuredRooms = ROOMS.filter((r) => r.featured).slice(0, 3);

export default function FeaturedRooms() {
  return (
    <section className="section-padding bg-section-bg" aria-label="Featured rooms">
      <Container>
        <SectionTitle
          subtitle="Accommodation"
          title="Exquisite Rooms & Suites"
          description="Each room is a sanctuary of comfort, designed with meticulous attention to detail and adorned with the finest materials."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {featuredRooms.map((room) => (
            <motion.div
              key={room.id}
              variants={staggerItem}
              className="group rounded-2xl overflow-hidden bg-background border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Price Badge */}
                <div className="absolute top-4 right-4 glass rounded-lg px-3 py-1.5">
                  <span className="text-gold font-semibold text-sm">${room.price}</span>
                  <span className="text-white/40 text-xs">/{room.priceUnit}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors duration-300">
                  {room.name}
                </h3>
                <p className="text-paragraph text-sm leading-relaxed mb-4">
                  {room.shortDescription}
                </p>

                {/* Room Details */}
                <div className="flex items-center gap-4 mb-6 text-white/40 text-xs">
                  <span className="flex items-center gap-1.5">
                    <Maximize2 size={12} />
                    {room.size}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users size={12} />
                    {room.maxGuests} Guests
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Bed size={12} />
                    {room.bedType}
                  </span>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <Link
                    href={`/rooms`}
                    className="flex-1 py-2.5 text-center text-sm font-semibold text-gold border border-gold/30 rounded-lg hover:bg-gold hover:text-black transition-all duration-300"
                  >
                    View Details
                  </Link>
                  <Link
                    href="/booking"
                    className="flex-1 py-2.5 text-center text-sm font-semibold text-black bg-gold rounded-lg hover:bg-gold-hover transition-all duration-300"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            href="/rooms"
            className="inline-flex items-center gap-2 text-gold text-sm font-semibold uppercase tracking-wider hover:text-gold-hover transition-colors group"
          >
            View All Rooms
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
