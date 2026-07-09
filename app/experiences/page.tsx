import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import PageHero from "@/components/shared/PageHero";
import SectionTitle from "@/components/ui/SectionTitle";
import { EXPERIENCES } from "@/data/experiences";
import { IMAGES } from "@/data/images";

export const metadata: Metadata = {
  title: "Experiences",
  description:
    "Discover unforgettable experiences at Stay & Dine — from our world-class spa and infinity pool to private dining and bespoke weddings.",
};

export default function ExperiencesPage() {
  return (
    <>
      <PageHero
        title="Experiences"
        subtitle="Discover"
        description="Extraordinary moments await at every turn — curated exclusively for our guests."
        image={IMAGES.experiences.spa}
        imageAlt="Luxury spa experience"
      />

      <section className="bg-background">
        {EXPERIENCES.map((exp, i) => (
          <div
            key={exp.id}
            className="section-padding border-b border-white/[0.04] last:border-none"
          >
            <Container>
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  i % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Image */}
                <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden image-zoom ${
                  i % 2 === 1 ? "lg:order-2" : ""
                }`}>
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <SectionTitle
                    subtitle={`Experience ${String(i + 1).padStart(2, "0")}`}
                    title={exp.title}
                    align="left"
                  />
                  <p className="text-paragraph text-sm md:text-base leading-relaxed mb-8">
                    {exp.description}
                  </p>
                  <Link
                    href="/booking"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-black text-sm font-semibold uppercase tracking-wider rounded-sm hover:bg-gold-hover transition-all duration-300"
                  >
                    Book This Experience
                  </Link>
                </div>
              </div>
            </Container>
          </div>
        ))}
      </section>
    </>
  );
}
