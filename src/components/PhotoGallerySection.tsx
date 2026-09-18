"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Maximize2, X } from "lucide-react";

interface GalleryImage {
  id: number;
  title: string;
  category: string;
  src: string;
  aspect: string; // e.g. 'col-span-2 row-span-2'
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    title: "Temple Sunset Vows",
    category: "Main Ceremony",
    src: "/images/hero_bg.jpg",
    aspect: "md:col-span-2 md:row-span-2 h-[450px]",
  },
  {
    id: 2,
    title: "Henna Artistry",
    category: "Mehendi Night",
    src: "/images/mehendi.jpg",
    aspect: "md:col-span-1 md:row-span-1 h-[215px]",
  },
  {
    id: 3,
    title: "Sacred Fire Mandap",
    category: "Sacred Muhurtham",
    src: "/images/wedding.jpg",
    aspect: "md:col-span-1 md:row-span-1 h-[215px]",
  },
  {
    id: 4,
    title: "Marigold Sunshine",
    category: "Haldi Blessing",
    src: "/images/haldi.jpg",
    aspect: "md:col-span-1 md:row-span-1 h-[215px]",
  },
  {
    id: 5,
    title: "Royal Courtyard Sangeet",
    category: "Music & Dance",
    src: "/images/sangeet.jpg",
    aspect: "md:col-span-2 md:row-span-1 h-[215px]",
  },
  {
    id: 6,
    title: "Imperial Palace Reception",
    category: "Grand Banquet",
    src: "/images/reception.jpg",
    aspect: "md:col-span-1 md:row-span-1 h-[215px]",
  },
];

export default function PhotoGallerySection() {
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);

  return (
    <section
      id="gallery"
      className="relative py-28 md:py-36 bg-[#1C0507] text-[#FAF6EE] overflow-hidden"
    >
      <div className="absolute inset-0 bg-grain opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#240407] text-[#D4AF37] mb-4">
            <Sparkles size={14} />
            <span className="text-xs uppercase tracking-[0.3em] font-sans font-medium">
              Editorial Gallery
            </span>
          </div>
          <h2 className="font-serif-display text-4xl sm:text-5xl md:text-6xl text-[#FAF6EE] gold-gradient-text tracking-wide mb-4">
            MEMORIES IN FRAME
          </h2>
          <p className="font-serif text-lg text-[#FAF6EE]/70 max-w-xl mx-auto italic">
            "Capturing the golden light, laughter, and heritage of our celebration."
          </p>
        </div>

        {/* Asymmetrical Masonry Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryImages.map((img) => (
            <div
              key={img.id}
              onClick={() => setActiveImage(img)}
              data-cursor="EXPAND"
              className={`group relative rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-[0_15px_35px_rgba(0,0,0,0.5)] cursor-pointer ${img.aspect}`}
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C0507] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-sans uppercase tracking-widest text-[#D4AF37] font-semibold">
                    {img.category}
                  </span>
                  <h4 className="font-serif text-xl text-[#FAF6EE] font-medium">
                    {img.title}
                  </h4>
                </div>

                <div className="w-8 h-8 rounded-full border border-[#D4AF37]/50 bg-[#1C0507]/80 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#1C0507] transition-colors">
                  <Maximize2 size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1C0507]/95 backdrop-blur-md p-6"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute -top-12 right-0 text-[#FAF6EE] hover:text-[#D4AF37] transition-colors p-2"
              aria-label="Close Lightbox"
            >
              <X size={28} />
            </button>

            <div className="relative w-full h-[65vh] sm:h-[75vh] rounded-2xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl">
              <Image
                src={activeImage.src}
                alt={activeImage.title}
                fill
                className="object-contain object-center"
              />
            </div>

            <div className="mt-4 text-center">
              <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-sans">
                {activeImage.category}
              </span>
              <h3 className="font-serif-display text-3xl text-[#FAF6EE]">
                {activeImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
