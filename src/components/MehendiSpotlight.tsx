"use client";

import React from "react";
import Image from "next/image";
import { Calendar, Clock, MapPin, ExternalLink, Sparkles } from "lucide-react";

export default function MehendiSpotlight() {
  return (
    <section
      id="mehendi"
      className="relative py-28 md:py-40 bg-[#0F291E] text-[#FAF6EE] overflow-hidden"
    >
      <div className="absolute inset-0 bg-grain opacity-25 pointer-events-none" />

      {/* Atmospheric Emerald & Gold Parallax Decor Background */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text & Content Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/40 bg-[#0F291E]/90 text-[#D4AF37]">
              <Sparkles size={14} />
              <span className="text-xs uppercase tracking-[0.3em] font-sans font-semibold">
                Henna & Harmonies
              </span>
            </div>

            <h2 className="font-serif-display text-5xl sm:text-6xl lg:text-7xl text-[#FAF6EE] gold-gradient-text tracking-wide">
              MEHENDI NIGHT
            </h2>

            <p className="font-serif text-xl text-[#FAF6EE]/90 italic leading-relaxed">
              "Hands painted in intricate henna threads, weaving blessings of joy, longevity, and prosperous union."
            </p>

            <p className="font-sans text-sm text-[#FAF6EE]/80 leading-relaxed">
              Join us for an enchanting evening infused with traditional folk songs, dhol rhythms, organic henna artists, fresh marigold decorations, and an exquisite array of traditional delicacies.
            </p>

            {/* Event Info Details Box */}
            <div className="p-6 rounded-2xl bg-[#1C0507]/60 border border-[#D4AF37]/30 space-y-3 font-sans text-sm text-[#FAF6EE]/90">
              <div className="flex items-center gap-3">
                <Calendar size={18} className="text-[#D4AF37]" />
                <span className="font-serif text-lg text-[#FAF6EE]">FRIDAY, DECEMBER 11, 2026</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={18} className="text-[#D4AF37]" />
                <span>11:00 AM ONWARDS</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-[#D4AF37]" />
                <span>COURTYARD OF LOTUS PALMS, UDAIVILAS</span>
              </div>
            </div>

            {/* View Location Button */}
            <a
              href="https://maps.google.com/?q=The+Oberoi+Udaivilas+Udaipur"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="LOCATION"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#D4AF37] text-[#1C0507] hover:bg-[#F4E09B] text-xs uppercase tracking-[0.25em] font-sans font-bold transition-all duration-300 shadow-[0_10px_30px_rgba(212,175,55,0.3)] transform hover:scale-105"
            >
              <span>VIEW LOCATION</span>
              <ExternalLink size={16} />
            </a>
          </div>

          {/* Painting Artwork Display Frame */}
          <div className="lg:col-span-6">
            <div
              data-cursor="MEHENDI ART"
              className="relative h-[450px] sm:h-[550px] w-full rounded-3xl overflow-hidden border-2 border-[#D4AF37]/40 shadow-[0_30px_70px_rgba(0,0,0,0.7)] group"
            >
              <Image
                src="/images/mehendi.jpg"
                alt="Mehendi Night Traditional Fine Art Painting"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F291E] via-transparent to-transparent opacity-40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
