"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FaFacebookF, FaTwitter, FaYoutube, FaPinterestP, FaInstagram } from "react-icons/fa";
import PageHero from "@/components/shared/PageHero";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { IMAGES } from "@/data/images";
import { CONTACT, SOCIAL_LINKS } from "@/lib/constants";
import { fadeInLeft, fadeInRight, fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const socialIcons: Record<string, React.ReactNode> = {
  instagram: <FaInstagram size={14} />,
  facebook: <FaFacebookF size={14} />,
  twitter: <FaTwitter size={14} />,
  youtube: <FaYoutube size={14} />,
  pinterest: <FaPinterestP size={14} />,
};

export default function ContactPageClient() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Get in Touch"
        description="We'd love to hear from you. Reach out to our team for reservations, inquiries, or any assistance."
        image={IMAGES.contactHero}
        imageAlt="Hotel entrance"
      />

      <section className="section-padding bg-background">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <SectionTitle
                subtitle="Send a Message"
                title="We'd Love to Hear From You"
                align="left"
              />

              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-white/40 text-xs uppercase tracking-wider mb-2 block">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Smith"
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/20 focus:border-gold/50 focus:outline-none transition-colors"
                      aria-label="Full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-white/40 text-xs uppercase tracking-wider mb-2 block">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/20 focus:border-gold/50 focus:outline-none transition-colors"
                      aria-label="Email address"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-white/40 text-xs uppercase tracking-wider mb-2 block">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="+44 20 7629 8860"
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/20 focus:border-gold/50 focus:outline-none transition-colors"
                      aria-label="Phone number"
                    />
                  </div>
                  <div>
                    <label className="text-white/40 text-xs uppercase tracking-wider mb-2 block">
                      Subject
                    </label>
                    <select
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-white text-sm focus:border-gold/50 focus:outline-none transition-colors appearance-none cursor-pointer"
                      aria-label="Subject"
                    >
                      <option value="" className="bg-[#161616]">Select a subject</option>
                      <option value="reservation" className="bg-[#161616]">Reservation</option>
                      <option value="general" className="bg-[#161616]">General Inquiry</option>
                      <option value="events" className="bg-[#161616]">Events & Weddings</option>
                      <option value="feedback" className="bg-[#161616]">Feedback</option>
                      <option value="other" className="bg-[#161616]">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-white/40 text-xs uppercase tracking-wider mb-2 block">
                    Message
                  </label>
                  <textarea
                    placeholder="Tell us how we can help..."
                    rows={5}
                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/20 focus:border-gold/50 focus:outline-none transition-colors resize-none"
                    aria-label="Message"
                    required
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 bg-gold text-black font-semibold text-sm uppercase tracking-wider rounded-lg hover:bg-gold-hover transition-all duration-300 hover:shadow-[0_0_25px_rgba(201,162,39,0.3)]"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <SectionTitle
                subtitle="Information"
                title="Find Us"
                align="left"
              />

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4 p-4 glass rounded-xl">
                  <MapPin size={20} className="text-gold mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-white text-sm font-semibold mb-1">Address</h4>
                    <p className="text-paragraph text-sm">{CONTACT.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 glass rounded-xl">
                  <Phone size={20} className="text-gold mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-white text-sm font-semibold mb-1">Phone</h4>
                    <a href={`tel:${CONTACT.phone}`} className="text-paragraph text-sm hover:text-gold transition-colors">
                      {CONTACT.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 glass rounded-xl">
                  <Mail size={20} className="text-gold mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-white text-sm font-semibold mb-1">Email</h4>
                    <a href={`mailto:${CONTACT.email}`} className="text-paragraph text-sm hover:text-gold transition-colors">
                      {CONTACT.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 glass rounded-xl">
                  <Clock size={20} className="text-gold mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-white text-sm font-semibold mb-2">Working Hours</h4>
                    <div className="space-y-1">
                      {CONTACT.workingHours.map((wh) => (
                        <div key={wh.label} className="flex items-center justify-between text-sm">
                          <span className="text-white/40">{wh.label}</span>
                          <span className="text-paragraph">{wh.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-white text-sm font-semibold mb-3">Follow Us</h4>
                <div className="flex items-center gap-3">
                  {SOCIAL_LINKS.map((social) => (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.platform}
                      className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold/50 transition-all duration-300"
                    >
                      {socialIcons[social.icon]}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Map */}
      <section className="bg-section-bg">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.3072025658927!2d-0.14968792283818516!3d51.50729127181291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876053a03deaf87%3A0xe99eaae8cbefac1d!2sMayfair%2C%20London!5e0!3m2!1sen!2suk!4v1689000000000!5m2!1sen!2suk"
            width="100%"
            height="450"
            style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg) brightness(0.7) contrast(1.2)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Hotel location on Google Maps"
            className="w-full"
          />
        </motion.div>
      </section>
    </>
  );
}
