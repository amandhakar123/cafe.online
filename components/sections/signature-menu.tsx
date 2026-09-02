"use client";

import React from "react";
import Image from "next/image";
import { cafeConfig } from "@/data/cafe";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

interface SignatureMenuProps {
  onOpenReservation: () => void;
}

export function SignatureMenu({ onOpenReservation }: SignatureMenuProps) {
  // Filter top 4 signature items
  const signatureItems = cafeConfig.menu.filter((m) =>
    m.tags?.includes("SIGNATURE") || m.tags?.includes("CHEF'S PICK")
  ).slice(0, 4);

  return (
    <section id="signatures" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--accent)] font-semibold mb-3 block">
              02 • SIGNATURE SELECTIONS
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[var(--foreground)] tracking-tight">
              Curated Masterpieces.
            </h2>
          </div>
          <a href="#menu">
            <Button variant="outline" size="sm" withArrow>
              View Full Menu
            </Button>
          </a>
        </div>

        {/* Highlight Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {signatureItems.map((item) => (
            <div
              key={item.id}
              data-cursor-text="TASTE"
              className="group relative rounded-2xl bg-[var(--surface)] border border-[var(--border)] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[var(--accent)] hover:shadow-2xl"
            >
              <div>
                {/* Image */}
                {item.image && (
                  <div className="relative w-full h-56 overflow-hidden bg-black/40">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] via-transparent to-transparent" />
                    <div className="absolute top-3 left-3">
                      <Badge variant="gold">SIGNATURE</Badge>
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-baseline justify-between gap-2 mb-2">
                    <h3 className="font-serif text-lg font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                      {item.name}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[var(--muted-foreground)] leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Price & Action Footer */}
              <div className="p-6 pt-0 flex items-center justify-between border-t border-[var(--border)]/40 mt-auto">
                <span className="font-mono text-lg font-bold text-[var(--accent)]">
                  {item.price}
                </span>
                <button
                  onClick={onOpenReservation}
                  className="text-xs font-mono uppercase tracking-widest text-[var(--muted-foreground)] hover:text-[var(--accent)] flex items-center gap-1 transition-colors"
                >
                  <span>Reserve</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
