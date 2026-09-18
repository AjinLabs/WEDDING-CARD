"use client";

import React, { useEffect, useState } from "react";
import { Clock } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-12-12T09:30:00+05:30").getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, []);

  const timeBlocks = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINUTES", value: timeLeft.minutes },
    { label: "SECONDS", value: timeLeft.seconds },
  ];

  return (
    <section className="relative py-20 bg-[#240407] text-[#FAF6EE] border-y border-[#D4AF37]/30 overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-20 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 mb-4 text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-sans font-semibold">
          <Clock size={16} />
          <span>Counting Down To The Sacred Hour</span>
        </div>

        <h3 className="font-serif-display text-3xl sm:text-4xl text-[#FAF6EE] gold-gradient-text tracking-wide mb-10">
          THE CELEBRATION BEGINS IN
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {timeBlocks.map((block) => (
            <div
              key={block.label}
              className="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-[#1C0507]/90 border border-[#D4AF37]/40 shadow-[0_15px_30px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="font-serif-display text-4xl sm:text-5xl md:text-6xl text-[#D4AF37] font-bold tracking-tight">
                {String(block.value).padStart(2, "0")}
              </span>
              <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#FAF6EE]/70 font-semibold mt-2">
                {block.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
