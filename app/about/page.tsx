import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about the legacy, values, and team behind Stay & Dine — over 25 years of redefining luxury hospitality in the heart of London.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
