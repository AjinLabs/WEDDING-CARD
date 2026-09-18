"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Calendar, Clock, MapPin, ExternalLink, Sparkles } from "lucide-react";

interface WeddingEvent {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  venue: string;
  city: string;
  description: string;
  dressCode: string;
  image: string;
  mapUrl: string;
}

const weddingEvents: WeddingEvent[] = [
  {
    id: "engagement",
    num: "01",
    title: "THE ENGAGEMENT",
    subtitle: "Rings & Promises",
    date: "December 10, 2026",
    time: "06:00 PM Onwards",
    venue: "The Royal Ballroom, Udaivilas",
    city: "Udaipur, Rajasthan",
    description:
      "Exchange of rings, blessing ceremony, and an intimate royal candlelit cocktail banquet to kick off our wedding festivities.",
    dressCode: "Indo-Western / Royal Ethnic",
    image: "/images/engagement.jpg",
    mapUrl: "https://maps.google.com/?q=The+Oberoi+Udaivilas+Udaipur",
  },
  {
    id: "mehendi",
    num: "02",
    title: "MEHENDI NIGHT",
    subtitle: "Henna & Harmony",
    date: "December 11, 2026",
    time: "11:00 AM Onwards",
    venue: "Courtyard of Lotus Palms",
    city: "Udaipur, Rajasthan",
    description:
      "A vibrant afternoon filled with intricate henna artistry, traditional folk song performances, dhol beats, and fresh floral jewelry.",
    dressCode: "Festive Green & Yellow Silk",
    image: "/images/mehendi.jpg",
    mapUrl: "https://maps.google.com/?q=The+Oberoi+Udaivilas+Udaipur",
  },
  {
    id: "haldi",
    num: "03",
    title: "HALDI CEREMONY",
    subtitle: "Auspicious Sunshine",
    date: "December 11, 2026",
    time: "04:00 PM Onwards",
    venue: "Suryavanshi Terrace",
    city: "Udaipur, Rajasthan",
    description:
      "Holy golden turmeric paste blessing ceremony accompanied by marigold showers, traditional urli dips, and joyful rituals.",
    dressCode: "Shades of Sunshine Yellow",
    image: "/images/haldi.jpg",
    mapUrl: "https://maps.google.com/?q=The+Oberoi+Udaivilas+Udaipur",
  },
  {
    id: "sangeet",
    num: "04",
    title: "SANGEET NIGHT",
    subtitle: "Music & Celebration",
    date: "December 11, 2026",
    time: "07:30 PM Onwards",
    venue: "The Grand Pavilion",
    city: "Udaipur, Rajasthan",
    description:
      "An unforgettable evening of high-energy family dance performances, live sitar-fusion music, royal feast, and celebration.",
    dressCode: "Glamorous Evening Formals / Lehengas & Sherwanis",
    image: "/images/sangeet.jpg",
    mapUrl: "https://maps.google.com/?q=The+Oberoi+Udaivilas+Udaipur",
  },
  {
    id: "wedding",
    num: "05",
    title: "WEDDING CEREMONY",
    subtitle: "The Sacred Vows",
    date: "December 12, 2026",
    time: "09:30 AM Muhurtham",
    venue: "The Sacred Temple Mandap",
    city: "Kerala / Udaipur Sanctuary",
    description:
      "The main wedding ritual. Exchange of sacred floral garlands (Varamala), tying of the Mangalsutra, and taking seven sacred steps around the holy fire.",
    dressCode: "Traditional South Indian Kanjeevaram Saree & Silk Veshti",
    image: "/images/wedding.jpg",
    mapUrl: "https://maps.google.com/?q=The+Oberoi+Udaivilas+Udaipur",
  },
  {
    id: "reception",
    num: "06",
    title: "THE RECEPTION",
    subtitle: "The Grand Royal Banquet",
    date: "December 12, 2026",
    time: "07:00 PM Onwards",
    venue: "The Imperial Palace Gardens",
    city: "Udaipur, Rajasthan",
    description:
      "A grand royal reception banquet honoring the newlyweds with gourmet pan-Indian culinary delicacies, live orchestra, and celebratory toast.",
    dressCode: "Black Tie / Royal Formal Elegance",
    image: "/images/reception.jpg",
    mapUrl: "https://maps.google.com/?q=The+Oberoi+Udaivilas+Udaipur",
  },
];

export default function EventCardsSection() {
  const [selectedEvent, setSelectedEvent] = useState<WeddingEvent | null>(null);

  return (
    <section
      id="events"
      className="relative py-28 md:py-36 bg-[#1C0507] text-[#FAF6EE] overflow-hidden"
    >
      <div className="absolute inset-0 bg-grain opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#240407] text-[#D4AF37] mb-4">
            <Sparkles size={14} />
            <span className="text-xs uppercase tracking-[0.3em] font-sans font-medium">
              Wedding Schedule
            </span>
          </div>
          <h2 className="font-serif-display text-4xl sm:text-5xl md:text-6xl text-[#FAF6EE] gold-gradient-text tracking-wide mb-4">
            CELEBRATION EVENTS
          </h2>
          <p className="font-serif text-lg text-[#FAF6EE]/70 max-w-xl mx-auto italic">
            "Six magical celebrations. Six unforgettable memories. Join us for each sacred chapter."
          </p>
        </div>

        {/* 6 Event Invitation Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {weddingEvents.map((evt) => (
            <div
              key={evt.id}
              data-cursor="INVITATION"
              className="group relative flex flex-col justify-between bg-[#FAF6EE] text-[#240407] rounded-2xl p-6 sm:p-8 shadow-[0_25px_50px_rgba(0,0,0,0.5)] border border-[#D4AF37]/40 hover:border-[#D4AF37] hover:shadow-[0_30px_60px_rgba(212,175,55,0.25)] transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Gold foil corner motifs */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]" />

              <div>
                {/* Event Number & Subtitle */}
                <div className="flex items-center justify-between border-b border-[#D4AF37]/30 pb-4 mb-6">
                  <span className="font-serif-display text-2xl font-bold text-[#AA820A]">
                    {evt.num}
                  </span>
                  <span className="text-xs uppercase tracking-widest font-sans font-semibold text-[#4A0E17]">
                    {evt.subtitle}
                  </span>
                </div>

                {/* Event Artwork Preview */}
                <div className="relative h-44 w-full rounded-xl overflow-hidden mb-6 border border-[#D4AF37]/20">
                  <Image
                    src={evt.image}
                    alt={evt.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#240407]/60 to-transparent" />
                </div>

                {/* Title */}
                <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#240407] tracking-tight mb-3">
                  {evt.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-xs sm:text-sm text-[#240407]/80 leading-relaxed mb-6">
                  {evt.description}
                </p>

                {/* Meta details */}
                <div className="space-y-2.5 text-xs font-sans text-[#4A0E17] border-t border-[#D4AF37]/20 pt-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-[#AA820A]" />
                    <span className="font-semibold">{evt.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-[#AA820A]" />
                    <span>{evt.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-[#AA820A]" />
                    <span className="line-clamp-1">{evt.venue}, {evt.city}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <a
                href={evt.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="MAP"
                className="w-full py-3 rounded-xl bg-[#4A0E17] text-[#FAF6EE] hover:bg-[#AA820A] text-xs font-semibold uppercase tracking-widest font-sans flex items-center justify-center gap-2 transition-colors duration-300 shadow-md"
              >
                <span>VIEW LOCATION</span>
                <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
