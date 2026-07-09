import type { Metadata } from "next";
import GalleryPageClient from "./GalleryPageClient";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore the beauty of Stay & Dine through our curated gallery of stunning photographs showcasing our luxury hotel, dining, and experiences.",
};

export default function GalleryPage() {
  return <GalleryPageClient />;
}
