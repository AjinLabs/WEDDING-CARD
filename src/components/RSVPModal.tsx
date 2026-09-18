"use client";

import React, { useState } from "react";
import { X, Sparkles, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";

interface RSVPModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RSVPModal({ isOpen, onClose }: RSVPModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "1",
    events: ["wedding", "reception"],
    dietary: "",
    songRequest: "",
  });

  if (!isOpen) return null;

  const handleEventToggle = (eventId: string) => {
    setFormData((prev) => {
      const exists = prev.events.includes(eventId);
      return {
        ...prev,
        events: exists
          ? prev.events.filter((e) => e !== eventId)
          : [...prev.events, eventId],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Trigger celebratory gold & crimson confetti burst
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#D4AF37", "#F4E09B", "#4A0E17", "#FAF6EE"],
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1C0507]/90 backdrop-blur-md p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-[#FAF6EE] text-[#240407] rounded-3xl p-6 sm:p-10 shadow-[0_30px_70px_rgba(0,0,0,0.8)] border-2 border-[#D4AF37] my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#240407]/60 hover:text-[#4A0E17] transition-colors p-2"
          aria-label="Close RSVP Modal"
        >
          <X size={24} />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="text-center">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#4A0E17] text-[#D4AF37] text-[11px] font-sans font-semibold uppercase tracking-widest mb-2">
                <Sparkles size={12} />
                <span>Kindly Respond</span>
              </div>
              <h3 className="font-serif-display text-3xl sm:text-4xl text-[#240407] font-bold">
                RSVP INVITATION
              </h3>
              <p className="font-serif text-sm text-[#4A0E17] italic">
                "Please confirm your presence by November 15, 2026."
              </p>
            </div>

            <div className="space-y-4 font-sans text-xs">
              <div>
                <label className="block uppercase tracking-wider font-semibold mb-1 text-[#240407]">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Ananya Sharma"
                  className="w-full px-4 py-3 rounded-xl border border-[#D4AF37]/50 bg-[#F4EFEB] focus:outline-none focus:border-[#4A0E17] text-sm text-[#240407]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block uppercase tracking-wider font-semibold mb-1 text-[#240407]">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-[#D4AF37]/50 bg-[#F4EFEB] focus:outline-none focus:border-[#4A0E17] text-sm text-[#240407]"
                  />
                </div>

                <div>
                  <label className="block uppercase tracking-wider font-semibold mb-1 text-[#240407]">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl border border-[#D4AF37]/50 bg-[#F4EFEB] focus:outline-none focus:border-[#4A0E17] text-sm text-[#240407]"
                  />
                </div>
              </div>

              <div>
                <label className="block uppercase tracking-wider font-semibold mb-1 text-[#240407]">
                  Attending Guests Count
                </label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#D4AF37]/50 bg-[#F4EFEB] focus:outline-none focus:border-[#4A0E17] text-sm text-[#240407]"
                >
                  <option value="1">1 Guest (Self)</option>
                  <option value="2">2 Guests (Couple)</option>
                  <option value="3">3+ Family Guests</option>
                </select>
              </div>

              <div>
                <label className="block uppercase tracking-wider font-semibold mb-2 text-[#240407]">
                  Attending Celebrations
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { id: "engagement", label: "Engagement" },
                    { id: "mehendi", label: "Mehendi Night" },
                    { id: "haldi", label: "Haldi" },
                    { id: "sangeet", label: "Sangeet" },
                    { id: "wedding", label: "Wedding" },
                    { id: "reception", label: "Reception" },
                  ].map((evt) => (
                    <button
                      type="button"
                      key={evt.id}
                      onClick={() => handleEventToggle(evt.id)}
                      className={`px-3 py-2 rounded-lg border text-xs font-semibold transition-colors ${
                        formData.events.includes(evt.id)
                          ? "bg-[#4A0E17] border-[#4A0E17] text-[#FAF6EE]"
                          : "bg-[#F4EFEB] border-[#D4AF37]/40 text-[#240407] hover:border-[#4A0E17]"
                      }`}
                    >
                      {evt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block uppercase tracking-wider font-semibold mb-1 text-[#240407]">
                  Dietary Preferences & Song Requests
                </label>
                <input
                  type="text"
                  value={formData.dietary}
                  onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
                  placeholder="e.g. Pure Jain / Vegetarian, Sangeet dance song choice"
                  className="w-full px-4 py-3 rounded-xl border border-[#D4AF37]/50 bg-[#F4EFEB] focus:outline-none focus:border-[#4A0E17] text-sm text-[#240407]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-full bg-[#4A0E17] text-[#FAF6EE] hover:bg-[#AA820A] text-xs font-bold uppercase tracking-[0.25em] font-sans transition-colors shadow-lg"
            >
              CONFIRM ATTENDANCE
            </button>
          </form>
        ) : (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#4A0E17] text-[#D4AF37] flex items-center justify-center mx-auto shadow-lg">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="font-serif-display text-3xl font-bold text-[#240407]">
              RSVP RECEIVED!
            </h3>
            <p className="font-serif text-lg text-[#4A0E17] italic">
              Thank you, {formData.name}! Navya & Arjun are overjoyed to celebrate this milestone with you.
            </p>
            <button
              onClick={onClose}
              className="mt-6 px-8 py-3 rounded-full bg-[#4A0E17] text-[#FAF6EE] text-xs uppercase tracking-widest font-sans font-semibold hover:bg-[#AA820A] transition-colors"
            >
              RETURN TO INVITATION
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
