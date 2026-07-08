import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Stay & Dine. Reach our reservations team, find our location, or send us a message.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
