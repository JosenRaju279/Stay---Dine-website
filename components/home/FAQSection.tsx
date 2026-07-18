"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { FAQS } from "@/data/testimonials";
import { fadeInUp } from "@/lib/animations";

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="section-padding bg-section-bg" aria-label="Frequently asked questions">
      <Container className="max-w-3xl">
        <SectionTitle
          subtitle="FAQ"
          title="Common Questions"
          description="Everything you need to know about your stay with us."
        />

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-3"
        >
          {FAQS.map((faq) => (
            <div
              key={faq.id}
              className="border border-white/[0.06] rounded-xl overflow-hidden hover:border-white/[0.1] transition-colors duration-300"
            >
              <button
                onClick={() => toggle(faq.id)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left group"
                aria-expanded={openId === faq.id}
              >
                <span className="text-white text-sm md:text-base font-medium pr-4 group-hover:text-gold transition-colors duration-300">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openId === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gold shrink-0"
                >
                  <ChevronDown size={18} />
                </motion.span>
              </button>

              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 md:px-6 pb-5 md:pb-6 text-paragraph text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
