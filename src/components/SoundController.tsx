"use client";

import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";

export default function SoundController() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Shehnai / Sitar pentatonic scale frequencies (Raga Desh / Kalyani inspired: D, E, F#, A, B)
  const notes = [293.66, 329.63, 369.99, 440.0, 493.88, 587.33, 659.25, 739.99];

  const startAmbientSound = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const gainNode = ctx.createGain();
      gainNode.gain.setValueAtTime(0.08, ctx.currentTime);
      gainNode.connect(ctx.destination);
      gainNodeRef.current = gainNode;

      let noteIdx = 0;
      intervalRef.current = setInterval(() => {
        if (!ctx || ctx.state === "closed") return;

        const osc = ctx.createOscillator();
        const noteGain = ctx.createGain();

        // Warm sitar/shehnai tone
        osc.type = "sine";
        const freq = notes[noteIdx % notes.length];
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // Subtle pitch bend
        osc.frequency.exponentialRampToValueAtTime(freq * 1.02, ctx.currentTime + 0.4);

        noteGain.gain.setValueAtTime(0.001, ctx.currentTime);
        noteGain.gain.linearRampToValueAtTime(0.06, ctx.currentTime + 0.3);
        noteGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.8);

        osc.connect(noteGain);
        noteGain.connect(gainNode);

        osc.start();
        osc.stop(ctx.currentTime + 2.0);

        noteIdx = (noteIdx + Math.floor(Math.random() * 3 + 1)) % notes.length;
      }, 900);

      setIsPlaying(true);
    } catch {
      console.log("Audio Context initialization failed");
    }
  };

  const stopAmbientSound = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (audioCtxRef.current) {
      audioCtxRef.current.close();
      audioCtxRef.current = null;
    }
    setIsPlaying(false);
  };

  const toggleSound = () => {
    if (isPlaying) {
      stopAmbientSound();
    } else {
      startAmbientSound();
    }
  };

  useEffect(() => {
    return () => {
      stopAmbientSound();
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={toggleSound}
        data-cursor="MUSIC"
        className="group relative flex items-center gap-3 px-4 py-3 rounded-full bg-[#1C0507]/90 border border-[#D4AF37]/40 text-[#D4AF37] hover:border-[#D4AF37] hover:bg-[#4A0E17] transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-md"
        aria-label="Toggle Wedding Music"
      >
        <span className="relative flex h-3 w-3">
          {isPlaying ? (
            <>
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#D4AF37]"></span>
            </>
          ) : (
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#D4AF37]/40"></span>
          )}
        </span>

        <span className="text-xs font-semibold tracking-wider font-sans uppercase text-[#FAF6EE] group-hover:text-[#D4AF37] transition-colors">
          {isPlaying ? "MELODY ON" : "PLAY MUSIC"}
        </span>

        {/* Animated equalizer bars */}
        <div className="flex items-end gap-[3px] h-4">
          <span
            className={`w-[2px] bg-[#D4AF37] rounded-full transition-all duration-300 ${
              isPlaying ? "animate-[pulse_0.6s_ease-in-out_infinite] h-3.5" : "h-1.5 opacity-40"
            }`}
          />
          <span
            className={`w-[2px] bg-[#D4AF37] rounded-full transition-all duration-300 ${
              isPlaying ? "animate-[pulse_0.8s_ease-in-out_infinite_0.2s] h-4" : "h-2 opacity-40"
            }`}
          />
          <span
            className={`w-[2px] bg-[#D4AF37] rounded-full transition-all duration-300 ${
              isPlaying ? "animate-[pulse_0.5s_ease-in-out_infinite_0.4s] h-2.5" : "h-1 opacity-40"
            }`}
          />
        </div>

        {isPlaying ? <Volume2 size={16} className="text-[#D4AF37]" /> : <VolumeX size={16} className="text-[#D4AF37]/50" />}
      </button>
    </div>
  );
}
