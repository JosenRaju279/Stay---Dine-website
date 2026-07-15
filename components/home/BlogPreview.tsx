"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { BLOG_POSTS } from "@/data/testimonials";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function BlogPreview() {
  return (
    <section className="section-padding bg-background" aria-label="Latest articles">
      <Container>
        <SectionTitle
          subtitle="Journal"
          title="Stories & Insights"
          description="Discover the latest from our world of luxury, dining, and wellness."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {BLOG_POSTS.map((post) => (
            <motion.article
              key={post.id}
              variants={staggerItem}
              className="group rounded-2xl overflow-hidden bg-section-bg border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="glass rounded-full px-3 py-1 text-gold text-[10px] font-semibold uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-white/30 text-xs mb-3">
                  <Calendar size={12} />
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.author}</span>
                </div>
                <h3 className="font-heading text-lg font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-paragraph text-sm leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <Link
                  href="#"
                  className="text-gold text-xs font-semibold uppercase tracking-wider hover:text-gold-hover transition-colors flex items-center gap-1 group/link"
                >
                  Read More
                  <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
