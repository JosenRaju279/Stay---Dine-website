import type { Metadata } from "next";
import RoomsPageClient from "./RoomsPageClient";

export const metadata: Metadata = {
  title: "Rooms & Suites",
  description:
    "Discover our exquisite collection of luxury rooms and suites at Stay & Dine. From elegant Deluxe rooms to the magnificent Presidential Suite.",
};

export default function RoomsPage() {
  return <RoomsPageClient />;
}
