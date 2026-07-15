"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Users, BedDouble, Search } from "lucide-react";
import Container from "@/components/layout/Container";
import { fadeInUp } from "@/lib/animations";

export default function BookingWidget() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [rooms, setRooms] = useState("1");

  return (
    <section className="relative z-20 -mt-20 md:-mt-14 mb-8" aria-label="Quick booking">
      <Container>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="glass-strong rounded-2xl p-6 md:p-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 items-end">
            {/* Check In */}
            <div className="flex flex-col gap-2">
              <label className="text-white/40 text-xs uppercase tracking-wider flex items-center gap-2">
                <CalendarDays size={14} className="text-gold" />
                Check In
              </label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-white text-sm focus:border-gold/50 focus:outline-none transition-colors [color-scheme:dark]"
                aria-label="Check-in date"
              />
            </div>

            {/* Check Out */}
            <div className="flex flex-col gap-2">
              <label className="text-white/40 text-xs uppercase tracking-wider flex items-center gap-2">
                <CalendarDays size={14} className="text-gold" />
                Check Out
              </label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-white text-sm focus:border-gold/50 focus:outline-none transition-colors [color-scheme:dark]"
                aria-label="Check-out date"
              />
            </div>

            {/* Guests */}
            <div className="flex flex-col gap-2">
              <label className="text-white/40 text-xs uppercase tracking-wider flex items-center gap-2">
                <Users size={14} className="text-gold" />
                Guests
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-white text-sm focus:border-gold/50 focus:outline-none transition-colors appearance-none cursor-pointer"
                aria-label="Number of guests"
              >
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n} className="bg-[#161616] text-white">
                    {n} {n === 1 ? "Guest" : "Guests"}
                  </option>
                ))}
              </select>
            </div>

            {/* Rooms */}
            <div className="flex flex-col gap-2">
              <label className="text-white/40 text-xs uppercase tracking-wider flex items-center gap-2">
                <BedDouble size={14} className="text-gold" />
                Rooms
              </label>
              <select
                value={rooms}
                onChange={(e) => setRooms(e.target.value)}
                className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-white text-sm focus:border-gold/50 focus:outline-none transition-colors appearance-none cursor-pointer"
                aria-label="Number of rooms"
              >
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n} className="bg-[#161616] text-white">
                    {n} {n === 1 ? "Room" : "Rooms"}
                  </option>
                ))}
              </select>
            </div>

            {/* Search Button */}
            <button
              className="w-full py-3 bg-gold text-black font-semibold uppercase tracking-wider text-sm rounded-lg hover:bg-gold-hover transition-all duration-300 hover:shadow-[0_0_25px_rgba(201,162,39,0.3)] flex items-center justify-center gap-2"
              aria-label="Search availability"
            >
              <Search size={16} />
              Check Availability
            </button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
