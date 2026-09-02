"use client";

import React from "react";
import Image from "next/image";
import { cafeConfig } from "@/data/cafe";
import { Sparkles, CheckCircle, Clock, MapPin } from "lucide-react";

export function AmbienceSection() {
  const { ambience } = cafeConfig;

  return (
    <section id="ambience" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-[var(--border)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Full Bleed Visual Container */}
        <div className="relative rounded-3xl overflow-hidden border border-[var(--border)] bg-[var(--surface)] min-h-[580px] sm:min-h-[640px] flex items-end p-6 sm:p-12 lg:p-16 shadow-2xl">
          {/* Background Image */}
          <Image
            src={ambience.image}
            alt="Ambience"
            fill
            className="object-cover"
            sizes="100vw"
          />

          {/* Cinematic Dark Gradient Layers */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />

          {/* Content Card Overlay */}
          <div className="relative z-10 max-w-2xl">
            <div className="flex items-center gap-2 text-[var(--accent)] text-xs font-mono uppercase tracking-[0.25em] mb-4">
              <Sparkles className="w-4 h-4" />
              <span>THE ARCHITECTURE OF COMFORT</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.05] mb-4">
              {ambience.title}
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-8 font-sans">
              {ambience.description}
            </p>

            {/* Feature Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 pt-6 border-t border-white/10">
              {ambience.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-200 font-mono">
                  <CheckCircle className="w-4 h-4 text-[var(--accent)] shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Hours Badge */}
          <div className="absolute top-6 right-6 hidden md:flex items-center gap-3 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 text-white z-10">
            <Clock className="w-5 h-5 text-[var(--accent)]" />
            <div className="text-xs font-mono">
              <p className="text-[10px] text-neutral-400 uppercase tracking-widest">TODAY&apos;S SERVICE</p>
              <p className="font-semibold text-white">07:30 — 23:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
