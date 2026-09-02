"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryItem } from "@/data/cafe";

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export function Lightbox({ items, currentIndex, onClose, onNext, onPrev }: LightboxProps) {
  useEffect(() => {
    if (currentIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex, onClose, onNext, onPrev]);

  if (currentIndex === null || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-10 select-none">
      {/* Top Header Bar */}
      <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-20">
        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-widest text-[var(--accent)] font-semibold font-mono">
            {String(currentIndex + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
          </span>
          <span className="text-sm font-serif text-white/80 hidden sm:inline-block">
            {currentItem.title}
          </span>
        </div>
        <button
          onClick={onClose}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 border border-white/10"
          aria-label="Close fullscreen gallery"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={onPrev}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 hover:bg-[var(--accent)] hover:text-black text-white transition-all duration-300 z-20 backdrop-blur-sm border border-white/10"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={onNext}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 hover:bg-[var(--accent)] hover:text-black text-white transition-all duration-300 z-20 backdrop-blur-sm border border-white/10"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div className="relative w-full max-w-5xl h-[70vh] sm:h-[80vh] flex items-center justify-center">
        <Image
          src={currentItem.src}
          alt={currentItem.alt || currentItem.title}
          fill
          className="object-contain"
          priority
          sizes="(max-width: 1280px) 100vw, 1280px"
        />
      </div>

      {/* Bottom Caption Bar */}
      <div className="absolute bottom-6 left-6 right-6 text-center z-20">
        <p className="text-sm text-neutral-300 font-serif italic max-w-md mx-auto">
          {currentItem.alt}
        </p>
      </div>
    </div>
  );
}
