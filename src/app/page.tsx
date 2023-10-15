import Footer from "@/components/UI/Footer";
import Hero from "@/components/UI/Hero";
import Navbar from "@/components/UI/Navbar";
import OurTeem from "@/components/UI/OurTeem";
import PreviewSection from "@/components/UI/PreviewSection";
import Reviews from "@/components/UI/Reviews";
import ServiceCard from "@/components/UI/ServiceCard";
import Summary from "@/components/UI/Summary";
import FeatureService from "@/components/page/FeatureService";

import { useGetServicesQuery } from "@/redux/api/serviceApi";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeatureService />
      <Summary />
      <PreviewSection />
      <Reviews />
      <OurTeem />
      <Footer />
    </div>
  );
}
