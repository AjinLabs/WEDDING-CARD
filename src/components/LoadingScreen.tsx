"use client";

import React, { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(onComplete, 800);
          }, 300);
          return 100;
        }
        const diff = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + diff, 100);
      });
    }, 120);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#1C0507] text-[#FAF6EE] transition-transform duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        isFinished ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* Delicate background ornamental pattern */}
      <div className="absolute inset-0 bg-grain opacity-20 pointer-events-none" />

      {/* Monogram Box */}
      <div className="relative flex flex-col items-center z-10 px-6">
        <div className="relative mb-6 flex items-center justify-center w-28 h-28 rounded-full border border-[#D4AF37]/30 bg-[#240407]/60 shadow-[0_0_40px_rgba(212,175,55,0.15)]">
          <Sparkles className="absolute top-3 right-3 w-4 h-4 text-[#D4AF37] animate-pulse" />
          <h1 className="font-serif-display text-4xl text-[#D4AF37] tracking-wider gold-gradient-text font-light">
            N & A
          </h1>
        </div>

        <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37]/80 font-sans font-medium mb-8">
          The Wedding Celebration
        </p>

        {/* Progress Bar Container */}
        <div className="w-56 h-[2px] bg-[#4A0E17] rounded-full overflow-hidden mb-4 relative">
          <div
            className="h-full bg-gradient-to-r from-[#AA820A] via-[#D4AF37] to-[#F4E09B] transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="text-sm font-serif text-[#FAF6EE]/70 tracking-widest">
          {progress}%
        </div>
      </div>
    </div>
  );
}
