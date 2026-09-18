"use client";

import React, { useState, useEffect } from "react";
import Lenis from "lenis";
import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";
import SoundController from "@/components/SoundController";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OurStorySection from "@/components/OurStorySection";
import EventCardsSection from "@/components/EventCardsSection";
import MehendiSpotlight from "@/components/MehendiSpotlight";
import WeddingCeremonySpotlight from "@/components/WeddingCeremonySpotlight";
import CountdownSection from "@/components/CountdownSection";
import PhotoGallerySection from "@/components/PhotoGallerySection";
import VenueLocationSection from "@/components/VenueLocationSection";
import FinalScreen from "@/components/FinalScreen";
import RSVPModal from "@/components/RSVPModal";

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [isRSVPOpen, setIsRSVPOpen] = useState(false);

  useEffect(() => {
    // Initialize smooth scrolling with Lenis
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="relative min-h-screen bg-[#1C0507] text-[#FAF6EE] selection:bg-[#D4AF37]/40">
      {/* Loading Screen Overlay */}
      {!loadingComplete && (
        <LoadingScreen onComplete={() => setLoadingComplete(true)} />
      )}

      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* Floating Audio Controller */}
      <SoundController />

      {/* Glass Floating Navigation Bar */}
      <Navbar onOpenRSVP={() => setIsRSVPOpen(true)} />

      {/* Main Content Sections */}
      <HeroSection />
      <OurStorySection />
      <EventCardsSection />
      <MehendiSpotlight />
      <WeddingCeremonySpotlight />
      <CountdownSection />
      <PhotoGallerySection />
      <VenueLocationSection />
      <FinalScreen onOpenRSVP={() => setIsRSVPOpen(true)} />

      {/* Interactive RSVP Modal Form */}
      <RSVPModal isOpen={isRSVPOpen} onClose={() => setIsRSVPOpen(false)} />
    </main>
  );
}
