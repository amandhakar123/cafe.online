"use client";

import React, { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if device is touch or prefers-reduced-motion
    if (typeof window === "undefined") return;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isTouch || prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target as HTMLElement | null;
      const interactiveEl = target?.closest("button, a, [data-cursor], input, select, textarea");
      const cursorTextEl = target?.closest("[data-cursor-text]") as HTMLElement | null;

      if (cursorTextEl) {
        setCursorText(cursorTextEl.getAttribute("data-cursor-text") || "");
        setIsHovered(true);
      } else if (interactiveEl) {
        setIsHovered(true);
        setCursorText("");
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    // Smooth trailing animation loop
    let rafId: number;
    const smoothFollow = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15,
      }));
      rafId = requestAnimationFrame(smoothFollow);
    };
    rafId = requestAnimationFrame(smoothFollow);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, [position.x, position.y]);

  if (!isVisible) return null;

  return (
    <>
      {/* Small Precision Dot */}
      <div
        className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)] transition-opacity duration-300"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isHovered && cursorText ? "0px" : "6px",
          height: isHovered && cursorText ? "0px" : "6px",
          opacity: isVisible ? 1 : 0,
        }}
      />

      {/* Outer Aesthetic Ring */}
      <div
        className="fixed pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-200 flex items-center justify-center font-mono text-[10px] tracking-widest uppercase font-bold"
        style={{
          left: `${trailingPos.x}px`,
          top: `${trailingPos.y}px`,
          width: cursorText ? "80px" : isHovered ? "48px" : "28px",
          height: cursorText ? "80px" : isHovered ? "48px" : "28px",
          backgroundColor: cursorText
            ? "rgba(212, 175, 55, 0.95)"
            : isHovered
            ? "var(--accent-subtle)"
            : "transparent",
          borderColor: "var(--accent)",
          borderWidth: cursorText ? "0px" : "1px",
          color: cursorText ? "#0C0A09" : "var(--accent)",
          boxShadow: isHovered ? "0 0 20px var(--accent-subtle)" : "none",
        }}
      >
        {cursorText}
      </div>
    </>
  );
}
