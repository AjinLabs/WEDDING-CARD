"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Calendar, Clock, MapPin, Sparkles, ExternalLink } from "lucide-react";

export default function WeddingCeremonySpotlight() {
  return (
    <section
      id="ceremony"
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#1C0507] py-28"
    >
      {/* Background Temple Mandap Artwork */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/wedding.jpg"
          alt="South Indian Temple Wedding Mandap Ceremony Artwork"
          fill
          className="object-cover object-center scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C0507] via-[#1C0507]/75 to-[#1C0507]/60" />
      </div>

      <div className="absolute inset-6 md:inset-12 border border-[#D4AF37]/30 rounded-3xl pointer-events-none z-10">
        <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-[#D4AF37]" />
        <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-[#D4AF37]" />
        <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-[#D4AF37]" />
        <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-[#D4AF37]" />
      </div>

      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#D4AF37] bg-[#1C0507]/90 text-[#D4AF37] mb-6 backdrop-blur-md">
          <Sparkles size={16} />
          <span className="text-xs uppercase tracking-[0.35em] font-sans font-bold">
            The Sacred Vows
          </span>
        </div>

        <span className="font-serif text-xl sm:text-2xl text-[#FAF6EE]/80 italic mb-2">
          The Wedding of
        </span>

        <h2 className="font-serif-display text-5xl sm:text-7xl md:text-8xl text-[#FAF6EE] gold-gradient-text tracking-wide mb-6">
          NAVYA & ARJUN
        </h2>

        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-8" />

        <p className="font-serif text-lg sm:text-xl text-[#FAF6EE]/90 leading-relaxed max-w-2xl mb-10 italic">
          "With the sacred fire (Agni) as our witness, surrounded by the blessings of our elders and the fragrance of fresh jasmine, we unite our souls for seven lifetimes."
        </p>

        {/* Ceremony Details Card */}
        <div className="w-full max-w-xl p-8 rounded-2xl bg-[#1C0507]/90 border border-[#D4AF37]/50 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.8)] mb-10 space-y-4">
          <div className="flex items-center justify-center gap-3 text-sm text-[#FAF6EE]">
            <Calendar size={20} className="text-[#D4AF37]" />
            <span className="font-serif text-xl tracking-wider text-[#FAF6EE]">
              SATURDAY, DECEMBER 12, 2026
            </span>
          </div>

          <div className="flex items-center justify-center gap-3 text-sm text-[#FAF6EE]/90 font-sans">
            <Clock size={18} className="text-[#D4AF37]" />
            <span className="uppercase tracking-widest font-semibold">
              MUHURTHAM: 09:30 AM — 11:00 AM
            </span>
          </div>

          <div className="flex items-center justify-center gap-3 text-sm text-[#FAF6EE]/90 font-sans">
            <MapPin size={18} className="text-[#D4AF37]" />
            <span className="uppercase tracking-wider">
              THE SACRED TEMPLE MANDAP, KERALA / UDAIPUR
            </span>
          </div>
        </div>

        <a
          href="https://maps.google.com/?q=The+Oberoi+Udaivilas+Udaipur"
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="CEREMONY"
          className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-[#4A0E17] border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#1C0507] text-xs uppercase tracking-[0.3em] font-sans font-bold transition-all duration-300 shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
        >
          <span>GET CEREMONY DIRECTIONS</span>
          <ExternalLink size={16} />
        </a>
      </div>
    </section>
  );
}
