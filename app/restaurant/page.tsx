import type { Metadata } from "next";
import RestaurantPageClient from "./RestaurantPageClient";

export const metadata: Metadata = {
  title: "Restaurant",
  description:
    "Experience Michelin-starred dining at Aurelia, our signature restaurant. Chef Marco Bellini presents a menu that celebrates artistry and gastronomy.",
};

export default function RestaurantPage() {
  return <RestaurantPageClient />;
}
