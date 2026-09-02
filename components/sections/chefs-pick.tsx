"use client";

import React from "react";
import Image from "next/image";
import { cafeConfig } from "@/data/cafe";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles } from "lucide-react";

interface ChefsPickProps {
  onOpenReservation: () => void;
}

export function ChefsPickSection({ onOpenReservation }: ChefsPickProps) {
  const dish = cafeConfig.featuredDish;

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-[var(--border)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden border border-[var(--border)] bg-[var(--surface)] grid grid-cols-1 lg:grid-cols-12 shadow-2xl">
          {/* Left Editorial Info */}
          <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 flex flex-col justify-between z-10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Badge variant="chef">{dish.badge}</Badge>
                <span className="text-xs font-mono text-[var(--accent)] tracking-widest uppercase">
                  LIMITED DAILY BATCH
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[var(--foreground)] tracking-tight leading-[1.05] mb-4">
                {dish.title}
              </h2>

              <p className="text-base sm:text-lg text-[var(--foreground)]/90 font-serif italic mb-6">
                {dish.name}
              </p>

              <p className="text-sm sm:text-base text-[var(--muted-foreground)] leading-relaxed mb-8">
                {dish.description}
              </p>

              {/* Highlights Bullet points */}
              <div className="space-y-3 mb-10">
                {dish.notes.map((note) => (
                  <div key={note} className="flex items-center gap-2.5 text-xs sm:text-sm text-[var(--foreground)] font-mono">
                    <div className="w-5 h-5 rounded-full bg-[var(--accent-subtle)] border border-[var(--border)] flex items-center justify-center text-[var(--accent)] shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{note}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-[var(--border)]">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--muted-foreground)] block">
                  PRICE
                </span>
                <span className="font-mono text-2xl font-bold text-[var(--accent)]">
                  {dish.price}
                </span>
              </div>

              <Button onClick={onOpenReservation} variant="primary" size="md" withArrow>
                Reserve For This Dish
              </Button>
            </div>
          </div>

          {/* Right Dominant Photography */}
          <div className="lg:col-span-6 relative h-[380px] sm:h-[480px] lg:h-auto min-h-[420px] overflow-hidden">
            <Image
              src={dish.image}
              alt={dish.name}
              fill
              priority
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] via-transparent to-transparent lg:bg-gradient-to-r lg:from-[var(--surface)] lg:via-transparent lg:to-transparent opacity-80" />
          </div>
        </div>
      </div>
    </section>
  );
}
