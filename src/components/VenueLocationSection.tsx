"use client";

import React from "react";
import { MapPin, Navigation, Compass, Calendar, Sparkles } from "lucide-react";

export default function VenueLocationSection() {
  return (
    <section
      id="venue"
      className="relative py-28 md:py-36 bg-[#240407] text-[#FAF6EE] overflow-hidden border-t border-[#D4AF37]/30"
    >
      <div className="absolute inset-0 bg-grain opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#1C0507] text-[#D4AF37] mb-4">
            <Sparkles size={14} />
            <span className="text-xs uppercase tracking-[0.3em] font-sans font-medium">
              Sanctuary & Destination
            </span>
          </div>
          <h2 className="font-serif-display text-4xl sm:text-5xl md:text-6xl text-[#FAF6EE] gold-gradient-text tracking-wide mb-4">
            THE WEDDING VENUE
          </h2>
          <p className="font-serif text-lg text-[#FAF6EE]/70 max-w-xl mx-auto italic">
            "Where heritage palaces meet the peaceful lakes and tropical backwaters of India."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Venue Info Card Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-8 rounded-3xl bg-[#1C0507]/90 border border-[#D4AF37]/40 shadow-[0_20px_50px_rgba(0,0,0,0.6)] space-y-6">
              <div className="flex items-center gap-3 text-[#D4AF37]">
                <Compass size={24} />
                <span className="text-xs uppercase tracking-[0.3em] font-sans font-bold">
                  Primary Location
                </span>
              </div>

              <h3 className="font-serif-display text-3xl sm:text-4xl text-[#FAF6EE]">
                THE OBEROI UDAIVILAS & KERALA TEMPLE PALACE
              </h3>

              <p className="font-sans text-sm text-[#FAF6EE]/80 leading-relaxed">
                Situated on the tranquil banks of Lake Pichola, spanning 50 acres of royal gardens, domed palaces, and historic South Indian temple architecture.
              </p>

              <div className="space-y-4 pt-4 border-t border-[#D4AF37]/20 font-sans text-sm">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#FAF6EE] block">Full Address:</span>
                    <span className="text-[#FAF6EE]/75">
                      Haridas Ji Ki Magri, Udaipur, Rajasthan 313001, India & Alleppey Backwater Sanctuary, Kerala.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar size={18} className="text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#FAF6EE] block">Dates:</span>
                    <span className="text-[#FAF6EE]/75">
                      December 10th – December 12th, 2026
                    </span>
                  </div>
                </div>
              </div>

              {/* Get Directions Button */}
              <a
                href="https://maps.google.com/?q=The+Oberoi+Udaivilas+Udaipur"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="DIRECTIONS"
                className="w-full py-4 rounded-full bg-[#D4AF37] text-[#1C0507] hover:bg-[#F4E09B] text-xs font-bold uppercase tracking-[0.25em] font-sans flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_10px_30px_rgba(212,175,55,0.3)] transform hover:-translate-y-0.5"
              >
                <Navigation size={16} />
                <span>GET DIRECTIONS ON GOOGLE MAPS</span>
              </a>
            </div>
          </div>

          {/* Styled Map Canvas Visual */}
          <div className="lg:col-span-6">
            <div
              data-cursor="MAP VIEW"
              className="relative h-[420px] sm:h-[480px] w-full rounded-3xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl bg-[#1C0507] flex flex-col items-center justify-center p-8 text-center"
            >
              {/* Decorative SVG Map Art Background */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px]" />

              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border-2 border-[#D4AF37] bg-[#4A0E17]/80 flex items-center justify-center text-[#D4AF37] mb-4 shadow-[0_0_30px_rgba(212,175,55,0.4)] animate-pulse">
                  <MapPin size={28} />
                </div>

                <h4 className="font-serif-display text-2xl text-[#FAF6EE] mb-2">
                  Navya & Arjun's Wedding Destination
                </h4>

                <p className="font-serif text-sm text-[#D4AF37] italic max-w-sm mb-6">
                  "Surrounded by emerald waters, golden royal arches, and sacred coconut groves."
                </p>

                <a
                  href="https://maps.google.com/?q=The+Oberoi+Udaivilas+Udaipur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full border border-[#D4AF37]/60 bg-[#1C0507]/90 text-[#FAF6EE] hover:bg-[#D4AF37] hover:text-[#1C0507] text-xs uppercase tracking-widest font-sans font-semibold transition-colors"
                >
                  Open Interactive Map
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
