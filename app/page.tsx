import HeroSection from "@/components/home/HeroSection";
import BookingWidget from "@/components/home/BookingWidget";
import AboutPreview from "@/components/home/AboutPreview";
import FeaturedRooms from "@/components/home/FeaturedRooms";
import RestaurantPreview from "@/components/home/RestaurantPreview";
import ExperiencePreview from "@/components/home/ExperiencePreview";
import GalleryPreview from "@/components/home/GalleryPreview";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import AwardsMarquee from "@/components/home/AwardsMarquee";
import VideoSection from "@/components/home/VideoSection";
import SpecialOffers from "@/components/home/SpecialOffers";
import BlogPreview from "@/components/home/BlogPreview";
import FAQSection from "@/components/home/FAQSection";
import NewsletterSection from "@/components/home/NewsletterSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BookingWidget />
      <AboutPreview />
      <FeaturedRooms />
      <RestaurantPreview />
      <ExperiencePreview />
      <GalleryPreview />
      <TestimonialsSection />
      <AwardsMarquee />
      <VideoSection />
      <SpecialOffers />
      <BlogPreview />
      <FAQSection />
      <NewsletterSection />
    </>
  );
}
