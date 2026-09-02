"use client";

import React from "react";
import Image from "next/image";
import { cafeConfig } from "@/data/cafe";
import { ArrowUpRight } from "lucide-react";

export function SignatureExperience() {
  return (
    <section id="experience" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--accent)] font-semibold mb-3 block">
              01 • THE SIGNATURE EXPERIENCE
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[var(--foreground)] tracking-tight">
              Crafted in Every Detail.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[var(--muted-foreground)] max-w-md">
            Four pillars that define our daily pursuit of hospitality, aesthetic calm, and culinary distinction.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cafeConfig.experiences.map((exp) => (
            <div
              key={exp.id}
              data-cursor-text="EXPLORE"
              className="group relative h-[440px] sm:h-[480px] rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--surface)] flex flex-col justify-between p-6 transition-all duration-500 hover:border-[var(--accent)] hover:shadow-2xl"
            >
              {/* Image Background */}
              <Image
                src={exp.image}
                alt={exp.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />

              {/* Multi-layer Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20 group-hover:from-black/95 group-hover:via-black/50 transition-all duration-300" />

              {/* Top Meta */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[var(--accent)] tracking-widest">
                  {exp.number}
                </span>
                <div className="p-2.5 rounded-full bg-black/60 backdrop-blur-md border border-[var(--border)] text-white/80 group-hover:text-[var(--accent)] group-hover:border-[var(--accent)] transition-all duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom Content */}
              <div className="relative z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--accent)] block mb-1">
                  {exp.subtitle}
                </span>
                <h3 className="font-serif text-2xl text-white font-medium mb-3 tracking-tight">
                  {exp.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed line-clamp-3 opacity-90 group-hover:opacity-100 transition-opacity">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
