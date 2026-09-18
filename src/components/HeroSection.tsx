"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronDown, Calendar, MapPin } from "lucide-react";
import gsap from "gsap";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textNavyaRef = useRef<HTMLHeadingElement>(null);
  const textAmpRef = useRef<HTMLSpanElement>(null);
  const textArjunRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Staggered reveal sequence for couple names
      tl.fromTo(
        textNavyaRef.current,
        { opacity: 0, y: 50, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1.4 }
      )
        .fromTo(
          textAmpRef.current,
          { opacity: 0, scale: 0.5, rotate: -20 },
          { opacity: 1, scale: 1, rotate: 0, duration: 1 },
          "-=0.8"
        )
        .fromTo(
          textArjunRef.current,
          { opacity: 0, y: 50, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 1.4 },
          "-=0.8"
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, letterSpacing: "0.1em" },
          { opacity: 1, letterSpacing: "0.35em", duration: 1.2 },
          "-=0.6"
        )
        .fromTo(
          detailsRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1 },
          "-=0.6"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#1C0507]"
    >
      {/* Background Painting Artwork with Overlay */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src="/images/hero_bg.jpg"
          alt="South Indian Temple Palace Golden Sunset Artwork"
          fill
          priority
          className="object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Soft vignette gradient mask for high typography readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C0507] via-[#1C0507]/60 to-[#1C0507]/40" />
        <div className="absolute inset-0 bg-[#4A0E17]/20 mix-blend-overlay" />
      </div>

      {/* Decorative Gold Arch Frame */}
      <div className="absolute inset-4 md:inset-8 border border-[#D4AF37]/30 rounded-2xl pointer-events-none z-10">
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#D4AF37]" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#D4AF37]" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#D4AF37]" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#D4AF37]" />
      </div>

      {/* Hero Central Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 max-w-5xl py-20">
        <div className="mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/40 bg-[#1C0507]/80 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
          <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-[#D4AF37] font-sans">
            Save The Date
          </span>
        </div>

        {/* Couple Names Headline */}
        <div className="my-4 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-8">
          <h1
            ref={textNavyaRef}
            className="font-serif-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#FAF6EE] tracking-tight gold-gradient-text drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
          >
            NAVYA
          </h1>

          <span
            ref={textAmpRef}
            className="font-serif-display text-4xl sm:text-5xl md:text-6xl text-[#D4AF37] italic my-1 md:my-0"
          >
            &
          </span>

          <h1
            ref={textArjunRef}
            className="font-serif-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#FAF6EE] tracking-tight gold-gradient-text drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
          >
            ARJUN
          </h1>
        </div>

        {/* Subtitle */}
        <div
          ref={subtitleRef}
          className="text-xs sm:text-sm md:text-base uppercase tracking-[0.35em] text-[#D4AF37]/90 font-sans font-semibold my-6"
        >
          ARE GETTING MARRIED
        </div>

        {/* Date & Location Pill Badge */}
        <div
          ref={detailsRef}
          className="mt-4 flex flex-col sm:flex-row items-center gap-6 px-8 py-4 rounded-2xl bg-[#1C0507]/85 border border-[#D4AF37]/40 backdrop-blur-md shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
        >
          <div className="flex items-center gap-2 text-sm text-[#FAF6EE]/90">
            <Calendar size={18} className="text-[#D4AF37]" />
            <span className="font-serif text-lg tracking-wider text-[#FAF6EE]">
              DECEMBER 12, 2026
            </span>
          </div>

          <div className="hidden sm:block w-[1px] h-6 bg-[#D4AF37]/30" />

          <div className="flex items-center gap-2 text-sm text-[#FAF6EE]/90">
            <MapPin size={18} className="text-[#D4AF37]" />
            <span className="font-serif text-lg tracking-wider text-[#FAF6EE]">
              THE OBEROI UDAIVILAS & KERALA
            </span>
          </div>
        </div>
      </div>

      {/* Downward Scroll Indicator */}
      <a
        href="#story"
        className="absolute bottom-8 z-20 flex flex-col items-center gap-2 text-[#D4AF37]/80 hover:text-[#D4AF37] transition-colors group"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-sans">Scroll To Explore</span>
        <ChevronDown size={18} className="animate-bounce" />
      </a>
    </section>
  );
}
