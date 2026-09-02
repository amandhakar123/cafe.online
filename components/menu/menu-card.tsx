"use client";

import React from "react";
import Image from "next/image";
import { MenuItem } from "@/data/cafe";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Leaf } from "lucide-react";

interface MenuCardProps {
  item: MenuItem;
}

export function MenuCard({ item }: MenuCardProps) {
  return (
    <div
      data-cursor-text="TASTE"
      className="group relative p-5 sm:p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)]/60 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] flex flex-col justify-between"
    >
      <div>
        {/* Optional Image Thumbnail with Shallow Depth of Field */}
        {item.image && (
          <div className="relative w-full h-44 sm:h-48 mb-4 rounded-xl overflow-hidden bg-black/40">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            {/* Gradient Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)]/90 via-transparent to-transparent" />

            {/* Top Badges */}
            <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
              {item.tags?.map((tag) => (
                <Badge
                  key={tag}
                  variant={
                    tag === "SIGNATURE" || tag === "CHEF'S PICK"
                      ? "gold"
                      : tag === "VEG" || tag === "VEGAN"
                      ? "success"
                      : "default"
                  }
                  size="sm"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Header with Title and Price */}
        <div className="flex items-baseline justify-between gap-3 mb-2">
          <h4 className="font-serif text-lg sm:text-xl text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
            {item.name}
          </h4>
          <span className="font-mono text-base sm:text-lg font-bold text-[var(--accent)] whitespace-nowrap">
            {item.price}
          </span>
        </div>

        {/* Short Editorial Description */}
        <p className="text-xs sm:text-sm text-[var(--muted-foreground)] leading-relaxed mb-4">
          {item.description}
        </p>
      </div>

      {/* Origin or Calorie Footnote */}
      {item.origin && (
        <div className="pt-3 border-t border-[var(--border)]/60 flex items-center justify-between text-[11px] text-[var(--muted-foreground)] font-mono">
          <span className="flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[var(--accent)]" />
            <span>TERROIR: {item.origin}</span>
          </span>
          <span className="text-[var(--accent)] uppercase text-[10px] tracking-widest font-semibold">
            Single Estate
          </span>
        </div>
      )}
    </div>
  );
}
