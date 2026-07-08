"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CalendarDays, Users, BedDouble, CreditCard, User, Mail, Phone, Check } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { ROOMS } from "@/data/rooms";
import { IMAGES } from "@/data/images";
import { fadeInUp, fadeInLeft, fadeInRight } from "@/lib/animations";

export default function BookingPageClient() {
  const [selectedRoom, setSelectedRoom] = useState(ROOMS[0].id);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [step, setStep] = useState(1);

  const room = ROOMS.find((r) => r.id === selectedRoom) || ROOMS[0];

  return (
    <>
      <PageHero
        title="Book Your Stay"
        subtitle="Reservations"
        description="Secure your luxury escape at Stay & Dine."
        image={IMAGES.bookingHero}
        imageAlt="Hotel booking"
      />

      <section className="section-padding bg-background">
        <Container>
          {/* Steps indicator */}
          <div className="flex items-center justify-center gap-4 mb-16">
            {["Select Room", "Details", "Confirm"].map((label, i) => (
              <div key={label} className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
                      step > i + 1
                        ? "bg-gold text-black"
                        : step === i + 1
                        ? "bg-gold/20 text-gold border border-gold"
                        : "bg-white/[0.04] text-white/30 border border-white/[0.08]"
                    }`}
                  >
                    {step > i + 1 ? <Check size={14} /> : i + 1}
                  </div>
                  <span
                    className={`text-xs uppercase tracking-wider hidden sm:block ${
                      step >= i + 1 ? "text-white" : "text-white/30"
                    }`}
                  >
                    {label}
                  </span>
                </div>
                {i < 2 && (
                  <div
                    className={`w-12 h-[1px] ${
                      step > i + 1 ? "bg-gold" : "bg-white/[0.08]"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              {step === 1 && (
                <div>
                  <h2 className="font-heading text-2xl font-bold text-white mb-6">
                    Select Your Room
                  </h2>
                  <div className="space-y-4">
                    {ROOMS.map((r) => (
                      <div
                        key={r.id}
                        onClick={() => setSelectedRoom(r.id)}
                        className={`flex gap-4 p-4 rounded-xl border cursor-pointer transition-all duration-300 ${
                          selectedRoom === r.id
                            ? "border-gold bg-gold/[0.05]"
                            : "border-white/[0.06] hover:border-white/[0.12]"
                        }`}
                      >
                        <div className="relative w-24 h-24 rounded-lg overflow-hidden shrink-0">
                          <Image
                            src={r.image}
                            alt={r.name}
                            fill
                            sizes="96px"
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between">
                            <h3 className="text-white font-semibold text-sm">{r.name}</h3>
                            <span className="text-gold font-bold text-sm">${r.price}/night</span>
                          </div>
                          <p className="text-white/40 text-xs mt-1">{r.size} · {r.maxGuests} Guests · {r.bedType} Bed</p>
                          <p className="text-paragraph text-xs mt-1 line-clamp-1">{r.shortDescription}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => setStep(2)}
                    className="w-full mt-6 py-4 bg-gold text-black font-semibold text-sm uppercase tracking-wider rounded-lg hover:bg-gold-hover transition-all duration-300"
                  >
                    Continue to Details
                  </button>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h2 className="font-heading text-2xl font-bold text-white mb-6">
                    Your Details
                  </h2>
                  <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setStep(3); }}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-white/40 text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
                          <CalendarDays size={12} className="text-gold" /> Check In
                        </label>
                        <input
                          type="date"
                          value={checkIn}
                          onChange={(e) => setCheckIn(e.target.value)}
                          className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-white text-sm focus:border-gold/50 focus:outline-none transition-colors [color-scheme:dark]"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-white/40 text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
                          <CalendarDays size={12} className="text-gold" /> Check Out
                        </label>
                        <input
                          type="date"
                          value={checkOut}
                          onChange={(e) => setCheckOut(e.target.value)}
                          className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-white text-sm focus:border-gold/50 focus:outline-none transition-colors [color-scheme:dark]"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-white/40 text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
                        <Users size={12} className="text-gold" /> Guests
                      </label>
                      <select
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-white text-sm focus:border-gold/50 focus:outline-none transition-colors appearance-none cursor-pointer"
                      >
                        {[1, 2, 3, 4, 5, 6].map((n) => (
                          <option key={n} value={n} className="bg-[#161616]">{n} Guest{n > 1 ? "s" : ""}</option>
                        ))}
                      </select>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-white/40 text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
                          <User size={12} className="text-gold" /> Full Name
                        </label>
                        <input
                          type="text"
                          placeholder="John Smith"
                          className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/20 focus:border-gold/50 focus:outline-none transition-colors"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-white/40 text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
                          <Mail size={12} className="text-gold" /> Email
                        </label>
                        <input
                          type="email"
                          placeholder="john@example.com"
                          className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/20 focus:border-gold/50 focus:outline-none transition-colors"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-white/40 text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
                        <Phone size={12} className="text-gold" /> Phone
                      </label>
                      <input
                        type="tel"
                        placeholder="+44 20 7629 8860"
                        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/20 focus:border-gold/50 focus:outline-none transition-colors"
                      />
                    </div>
                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="flex-1 py-4 border border-white/[0.08] text-white/60 font-semibold text-sm uppercase tracking-wider rounded-lg hover:bg-white/[0.04] transition-all"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="flex-1 py-4 bg-gold text-black font-semibold text-sm uppercase tracking-wider rounded-lg hover:bg-gold-hover transition-all"
                      >
                        Review Booking
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {step === 3 && (
                <div>
                  <h2 className="font-heading text-2xl font-bold text-white mb-6">
                    Confirm Your Booking
                  </h2>
                  <div className="glass rounded-xl p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                      <Check size={28} className="text-gold" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-white mb-2">
                      Booking Summary
                    </h3>
                    <p className="text-paragraph text-sm mb-6">
                      Please review your details before confirming.
                    </p>

                    <div className="space-y-3 text-left max-w-sm mx-auto mb-8">
                      <div className="flex justify-between text-sm">
                        <span className="text-white/40">Room</span>
                        <span className="text-white font-medium">{room.name}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-white/40">Rate</span>
                        <span className="text-gold font-semibold">${room.price}/night</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-white/40">Guests</span>
                        <span className="text-white">{guests}</span>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={() => setStep(2)}
                        className="flex-1 py-4 border border-white/[0.08] text-white/60 font-semibold text-sm uppercase tracking-wider rounded-lg hover:bg-white/[0.04] transition-all"
                      >
                        Back
                      </button>
                      <button className="flex-1 py-4 bg-gold text-black font-semibold text-sm uppercase tracking-wider rounded-lg hover:bg-gold-hover transition-all flex items-center justify-center gap-2">
                        <CreditCard size={16} />
                        Confirm Booking
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>

            {/* Summary Sidebar */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="glass rounded-xl p-6 sticky top-28">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    sizes="400px"
                    className="object-cover"
                  />
                </div>
                <h3 className="font-heading text-lg font-bold text-white mb-1">{room.name}</h3>
                <p className="text-paragraph text-xs mb-4">{room.shortDescription}</p>

                <div className="space-y-2 mb-4 text-xs">
                  <div className="flex justify-between">
                    <span className="text-white/40">Room Size</span>
                    <span className="text-white">{room.size}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/40">Max Guests</span>
                    <span className="text-white">{room.maxGuests}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/40">Bed Type</span>
                    <span className="text-white">{room.bedType}</span>
                  </div>
                </div>

                <div className="border-t border-white/[0.06] pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white/40 text-sm">Total</span>
                    <div>
                      <span className="text-gold text-2xl font-heading font-bold">${room.price}</span>
                      <span className="text-white/40 text-xs">/night</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
}
