"use client";


import HeroSection from "@/components/home/hero";
import HowItWorks from "@/components/home/HowItWorks";
import WhyChooseUs from "@/components/home/WhyChoseUs";
import RegionsWeCover from "@/components/home/Regions";
import FeaturedListings from "@/components/home/FeaturedListings";
import RealEstateMarketing from "@/components/home/RealEstate";
import LandForSale from "@/components/home/Lands";
import BusinessPackages from "@/components/home/BusinessPackages";
import Testimonials from "@/components/home/Testimonials";
import FAQSection from "@/components/home/Faq";
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <HeroSection />
      <HowItWorks />
      <WhyChooseUs />
      <RegionsWeCover />
      <FeaturedListings />
      <RealEstateMarketing />
      <LandForSale />
      <BusinessPackages />
      <Testimonials />
      <FAQSection />
    </div>
  );
}
