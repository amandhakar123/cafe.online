"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { cafeConfig } from "@/data/cafe";
import { Button } from "@/components/ui/button";
import { CoffeeScene } from "@/components/3d/coffee-scene";
import { DemoBadge } from "@/components/ui/demo-badge";
import { ArrowDown, Sparkles } from "lucide-react";
import { gsap } from "@/lib/gsap";

interface HeroProps {
  onOpenReservation: () => void;
}

export function HeroSection({ onOpenReservation }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 0.3s Background reveals
      tl.fromTo(
        visualRef.current,
        { opacity: 0, scale: 1.08, filter: "blur(10px)" },
        { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.4 }
      )
        // 0.8s Eyebrow & Logo
        .fromTo(
          eyebrowRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.6"
        )
        // 1.2s Headline line-by-line reveal
        .fromTo(
          headlineRef.current?.children || [],
          { opacity: 0, y: 40, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
          {
            opacity: 1,
            y: 0,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            stagger: 0.2,
            duration: 1.0,
          },
          "-=0.4"
        )
        // 1.8s Subtext
        .fromTo(
          subtextRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.4"
        )
        // 2.2s CTA buttons
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.5"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden pt-28 pb-16 px-4 sm:px-6 lg:px-8"
    >
      {/* Background Ambient Layer */}
      <div
        ref={visualRef}
        className="absolute inset-0 pointer-events-none z-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=2000&q=85"
          alt="Café Ambience"
          fill
          priority
          className="object-cover opacity-25 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--background)] via-transparent to-[var(--background)] opacity-70" />
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Editorial Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Eyebrow / Tag */}
          <div ref={eyebrowRef} className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--surface-raised)] border border-[var(--border)] text-[var(--accent)] text-xs font-mono tracking-widest uppercase shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>WELCOME TO {cafeConfig.shortName}</span>
            </span>
            <DemoBadge label="HERO AMBIENCE" />
          </div>

          {/* Staggered Line-by-Line Headline */}
          <h1
            ref={headlineRef}
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-[var(--foreground)] mb-6 font-medium"
          >
            <span className="block overflow-hidden">{cafeConfig.heroHeadline.line1}</span>
            <span className="block overflow-hidden gold-gradient-text">
              {cafeConfig.heroHeadline.line2}
            </span>
            <span className="block overflow-hidden text-[var(--foreground)]">
              {cafeConfig.heroHeadline.line3}
            </span>
          </h1>

          {/* Supporting Narrative */}
          <p
            ref={subtextRef}
            className="text-base sm:text-lg md:text-xl text-[var(--muted-foreground)] max-w-xl font-light leading-relaxed mb-8 sm:mb-10"
          >
            {cafeConfig.heroSubtext}
          </p>

          {/* Conversion CTAs */}
          <div
            ref={ctaRef}
            className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
          >
            <a href="#menu" className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                withArrow
                className="w-full sm:w-auto"
              >
                Explore Menu
              </Button>
            </a>

            <Button
              onClick={onOpenReservation}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              Reserve A Table
            </Button>
          </div>

          {/* Micro Trust Indicators */}
          <div className="mt-12 pt-6 border-t border-[var(--border)]/60 flex items-center gap-8 text-xs font-mono text-[var(--muted-foreground)]">
            <div>
              <span className="text-[var(--accent)] font-bold text-sm block">
                {cafeConfig.trustStats.rating} ★
              </span>
              <span>Google Verified</span>
            </div>
            <div className="h-6 w-[1px] bg-[var(--border)]" />
            <div>
              <span className="text-[var(--foreground)] font-bold text-sm block">
                {cafeConfig.trustStats.signatureBlends}
              </span>
              <span>Micro-Lot Origins</span>
            </div>
            <div className="h-6 w-[1px] bg-[var(--border)] hidden sm:block" />
            <div className="hidden sm:block">
              <span className="text-[var(--foreground)] font-bold text-sm block">
                {cafeConfig.area}
              </span>
              <span>{cafeConfig.city}</span>
            </div>
          </div>
        </div>

        {/* Right 3D Visual Experience */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <div className="relative w-full max-w-md lg:max-w-none">
            {/* Ambient Back Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-[var(--accent)]/15 blur-[90px] pointer-events-none" />

            {/* 3D Canvas Scene */}
            <CoffeeScene />
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#brand-intro"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--muted-foreground)] hover:text-[var(--accent)] transition-colors group z-10"
        aria-label="Scroll to introduction"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">DISCOVER</span>
        <div className="p-2 rounded-full border border-[var(--border)] group-hover:border-[var(--accent)] transition-colors animate-bounce">
          <ArrowDown className="w-3.5 h-3.5" />
        </div>
      </a>
    </section>
  );
}
