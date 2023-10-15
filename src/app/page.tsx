"use client";
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
import { useEffect, useState } from "react";

export default function Home() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <FeatureService />
      <Summary />
      <PreviewSection />
      <Reviews />
      <OurTeem />
      {showScrollToTop && (
        <div>
          <a
            href="#"
            id="scrollToTopButton"
            className="fixed bottom-4 right-4 z-10"
          >
            <button className="btn  btn-success" onClick={scrollToTop}>
              Go up
            </button>
          </a>
        </div>
      )}
      <Footer />
    </div>
  );
}
