"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Heart, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const storyMilestones = [
  {
    year: "AUTUMN 2021",
    title: "The First Meeting",
    location: "Bangalore, India",
    description:
      "A chance afternoon meeting over traditional South Indian filter coffee in Bangalore. What was meant to be a 30-minute chat turned into five hours of endless laughter and shared dreams.",
    image: "/images/mehendi.jpg",
  },
  {
    year: "SPRING 2023",
    title: "A Shared Horizon",
    location: "Alleppey Backwaters, Kerala",
    description:
      "Drifting silently along the serene emerald backwaters of Kerala, watching sunsets together, realizing home was never a physical place—it was being right beside each other.",
    image: "/images/sangeet.jpg",
  },
  {
    year: "WINTER 2025",
    title: "The Proposal",
    location: "Lake Pichola, Udaipur",
    description:
      "Surrounded by twinkling palace lights and gentle ripples on Lake Pichola, Arjun asked Navya to spend a lifetime together. She said yes before he could even finish his sentence.",
    image: "/images/reception.jpg",
  },
  {
    year: "DECEMBER 2026",
    title: "Forever Begins",
    location: "The Grand Mandap",
    description:
      "Taking our seven sacred steps (Saptapadi) around the holy fire, uniting our families, and stepping hand in hand into eternity.",
    image: "/images/wedding.jpg",
  },
];

export default function OurStorySection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".story-card").forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="story"
      ref={sectionRef}
      className="relative py-24 md:py-36 bg-[#1C0507] text-[#FAF6EE] overflow-hidden"
    >
      <div className="absolute inset-0 bg-grain opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#240407] text-[#D4AF37] mb-4">
            <Sparkles size={14} />
            <span className="text-xs uppercase tracking-[0.3em] font-sans font-medium">
              Chapter by Chapter
            </span>
          </div>
          <h2 className="font-serif-display text-4xl sm:text-5xl md:text-6xl text-[#FAF6EE] gold-gradient-text tracking-wide mb-4">
            OUR STORY
          </h2>
          <p className="font-serif text-lg text-[#FAF6EE]/70 max-w-xl mx-auto italic">
            "Two souls, two journeys, weaving one timeless love story."
          </p>
        </div>

        {/* Vertical Timeline Wrapper */}
        <div className="relative">
          {/* Glowing Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#D4AF37]/40 to-transparent -translate-x-1/2 hidden md:block" />

          <div className="space-y-16 md:space-y-24">
            {storyMilestones.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.title}
                  className={`story-card flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image Card Side */}
                  <div className="w-full md:w-1/2">
                    <div
                      data-cursor="STORY"
                      className="group relative h-72 sm:h-80 md:h-96 w-full rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1C0507] via-transparent to-transparent opacity-60" />
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#FAF6EE]/90 uppercase tracking-widest font-sans">
                        <span>{item.location}</span>
                        <Heart size={14} className="text-[#D4AF37] fill-[#D4AF37]" />
                      </div>
                    </div>
                  </div>

                  {/* Text Side */}
                  <div className="w-full md:w-1/2 text-center md:text-left">
                    <span className="text-xs font-sans uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
                      {item.year}
                    </span>
                    <h3 className="font-serif-display text-3xl sm:text-4xl text-[#FAF6EE] my-2">
                      {item.title}
                    </h3>
                    <p className="font-sans text-sm sm:text-base text-[#FAF6EE]/80 leading-relaxed max-w-lg mx-auto md:mx-0">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
