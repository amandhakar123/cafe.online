"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cafeConfig, GalleryItem } from "@/data/cafe";
import { Lightbox } from "@/components/ui/lightbox";
import { Maximize2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function EditorialGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: "all", label: "ALL VISUALS" },
    { id: "coffee", label: "ROASTERY & COFFEE" },
    { id: "food", label: "CULINARY PLATES" },
    { id: "ambience", label: "SPACES & VERANDA" },
    { id: "moments", label: "ATMOSPHERE" },
  ];

  const filteredGallery = cafeConfig.gallery.filter((item) =>
    selectedCategory === "all" ? true : item.category === selectedCategory
  );

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! + 1) % filteredGallery.length);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! - 1 + filteredGallery.length) % filteredGallery.length);
    }
  };

  return (
    <div className="w-full">
      {/* Category Pills */}
      <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-10">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={cn(
                "px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 border",
                isActive
                  ? "bg-[var(--accent)] text-[#0C0A09] border-[var(--accent)] font-bold shadow-md"
                  : "bg-[var(--surface)] text-[var(--muted-foreground)] border-[var(--border)] hover:text-[var(--foreground)]"
              )}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Asymmetric Editorial Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGallery.map((item, idx) => {
          // Asymmetric column/row spans for editorial feel
          const isLarge = idx === 0 || idx === 3;

          return (
            <div
              key={item.id}
              data-cursor-text="EXPAND"
              onClick={() => handleOpenLightbox(idx)}
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] cursor-pointer shadow-lg transition-all duration-500 hover:border-[var(--accent)]",
                isLarge ? "sm:col-span-2 lg:col-span-2 h-[380px] sm:h-[460px]" : "h-[320px] sm:h-[460px]"
              )}
            >
              {/* Image */}
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />

              {/* Top Category Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest text-[var(--accent)] bg-black/60 backdrop-blur-md border border-[var(--border)]">
                  {item.category}
                </span>
              </div>

              {/* Expand Icon */}
              <div className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 backdrop-blur-md border border-[var(--border)] text-white/80 group-hover:text-[var(--accent)] group-hover:scale-110 transition-all duration-300">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-6 left-6 right-6 z-10 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="font-serif text-xl sm:text-2xl text-white font-medium mb-1 drop-shadow-md">
                  {item.title}
                </h4>
                <p className="text-xs text-neutral-300 font-sans line-clamp-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.alt}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Fullscreen Lightbox Modal */}
      <Lightbox
        items={filteredGallery}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
}
