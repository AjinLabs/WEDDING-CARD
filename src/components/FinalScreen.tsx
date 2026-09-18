"use client";

import React from "react";
import { Sparkles, Heart } from "lucide-react";

interface FinalScreenProps {
  onOpenRSVP: () => void;
}

export default function FinalScreen({ onOpenRSVP }: FinalScreenProps) {
  return (
    <footer className="relative py-32 md:py-44 bg-[#1C0507] text-[#FAF6EE] overflow-hidden border-t-2 border-[#D4AF37]/40">
      <div className="absolute inset-0 bg-grain opacity-25 pointer-events-none" />

      {/* Radial soft gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        {/* Monogram emblem */}
        <div className="w-20 h-20 rounded-full border border-[#D4AF37]/50 bg-[#240407] flex items-center justify-center text-[#D4AF37] mb-8 shadow-[0_0_40px_rgba(212,175,55,0.2)]">
          <Heart size={28} className="fill-[#D4AF37]" />
        </div>

        <h2 className="font-serif-display text-5xl sm:text-7xl md:text-8xl text-[#FAF6EE] gold-gradient-text tracking-wide mb-6">
          NAVYA & ARJUN
        </h2>

        <p className="font-serif text-xl sm:text-2xl text-[#FAF6EE]/90 italic max-w-2xl mb-4">
          "WE CAN'T WAIT TO CELEBRATE WITH YOU"
        </p>

        <span className="text-xs uppercase tracking-[0.4em] font-sans font-bold text-[#D4AF37] mb-8">
          SEE YOU AT THE WEDDING
        </span>

        <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent mb-8" />

        <div className="text-sm font-sans text-[#FAF6EE]/75 space-y-1 mb-10">
          <p className="font-serif text-lg text-[#FAF6EE] font-medium">
            DECEMBER 12, 2026
          </p>
          <p className="uppercase tracking-widest text-xs">
            THE OBEROI UDAIVILAS & KERALA TEMPLE PALACE
          </p>
        </div>

        {/* Final RSVP Button */}
        <button
          onClick={onOpenRSVP}
          data-cursor="RSVP NOW"
          className="px-10 py-4 rounded-full bg-[#D4AF37] text-[#1C0507] hover:bg-[#F4E09B] text-xs font-bold uppercase tracking-[0.3em] font-sans transition-all duration-300 shadow-[0_15px_35px_rgba(212,175,55,0.3)] transform hover:scale-105 flex items-center gap-2"
        >
          <Sparkles size={16} />
          <span>CONFIRM YOUR RSVP</span>
        </button>

        <div className="mt-20 pt-8 border-t border-[#D4AF37]/20 text-[11px] font-sans tracking-widest text-[#FAF6EE]/40 uppercase">
          Crafted with love for Navya & Arjun • 2026
        </div>
      </div>
    </footer>
  );
}
