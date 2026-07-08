import type { Metadata } from "next";
import BookingPageClient from "./BookingPageClient";

export const metadata: Metadata = {
  title: "Booking",
  description:
    "Book your luxury stay at Stay & Dine. Select your room, choose dates, and secure your reservation at London's finest hotel.",
};

export default function BookingPage() {
  return <BookingPageClient />;
}
