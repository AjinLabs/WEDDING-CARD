"use client";

import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Disable custom cursor on mobile/touch screens
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768 || 'ontouchstart' in window;
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    if (isMobile) return;

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Hover listener for elements with data-cursor attribute
    const onMouseOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("[data-cursor]") as HTMLElement;
      if (target) {
        const text = target.getAttribute("data-cursor") || "VIEW";
        setCursorText(text);
        setIsExpanded(true);
      } else {
        setIsExpanded(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
    };
  }, [isMobile]);

  // Smooth easing loop for trailing cursor ring
  useEffect(() => {
    if (isMobile) return;

    let animationFrameId: number;
    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

    const animateTrailing = () => {
      setTrailingPos((prev) => ({
        x: lerp(prev.x, position.x, 0.18),
        y: lerp(prev.y, position.y, 0.18),
      }));
      animationFrameId = requestAnimationFrame(animateTrailing);
    };

    animationFrameId = requestAnimationFrame(animateTrailing);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position, isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Small magnetic center dot */}
      <div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-[#D4AF37] rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      />

      {/* Trailing luxury ring / expander */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center rounded-full border border-[#D4AF37]/60 bg-[#4A0E17]/20 backdrop-blur-[2px] transition-all duration-300 ease-out transform -translate-x-1/2 -translate-y-1/2 ${
          isExpanded
            ? "w-20 h-20 bg-[#D4AF37]/90 text-[#1C0507] border-[#D4AF37] scale-110 shadow-[0_0_20px_rgba(212,175,55,0.6)]"
            : "w-9 h-9"
        }`}
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        {isExpanded && (
          <span className="text-[10px] font-bold tracking-widest uppercase animate-fade-in font-sans">
            {cursorText}
          </span>
        )}
      </div>
    </>
  );
}
