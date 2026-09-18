"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenRSVP: () => void;
}

export default function Navbar({ onOpenRSVP }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Our Story", href: "#story" },
    { label: "Events", href: "#events" },
    { label: "Mehendi", href: "#mehendi" },
    { label: "Ceremony", href: "#ceremony" },
    { label: "Gallery", href: "#gallery" },
    { label: "Venue", href: "#venue" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-[#1C0507]/90 backdrop-blur-md border-b border-[#D4AF37]/20 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Monogram / Title */}
        <a
          href="#"
          className="flex items-center gap-2 group"
          data-cursor="NAVYA & ARJUN"
        >
          <div className="w-8 h-8 rounded-full border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37] font-serif-display text-xs group-hover:bg-[#D4AF37]/20 transition-colors">
            N&A
          </div>
          <span className="font-serif-display text-lg md:text-xl text-[#FAF6EE] tracking-widest uppercase">
            Navya <span className="text-[#D4AF37]">&</span> Arjun
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] font-sans text-[#FAF6EE]/80 hover:text-[#D4AF37] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* RSVP Action Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenRSVP}
            data-cursor="RSVP"
            className="px-5 py-2 rounded-full border border-[#D4AF37] bg-[#4A0E17]/80 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#1C0507] text-xs uppercase tracking-widest font-sans font-semibold transition-all duration-300 shadow-[0_4px_15px_rgba(212,175,55,0.15)] flex items-center gap-1.5"
          >
            <Sparkles size={12} />
            <span>RSVP</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#D4AF37] p-1.5 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1C0507] border-b border-[#D4AF37]/30 px-6 py-6 flex flex-col gap-4 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm uppercase tracking-widest font-sans text-[#FAF6EE] hover:text-[#D4AF37] py-2 border-b border-[#4A0E17]/40"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
