"use client";

import React, { useEffect, useRef } from "react";
import { cafeConfig } from "@/data/cafe";
import { gsap } from "@/lib/gsap";

export function BrandIntro() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0.2, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 60%",
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="brand-intro"
      ref={sectionRef}
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-[var(--border)] relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto text-center" ref={textRef}>
        {/* Eyebrow */}
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--accent)] font-semibold mb-6 block">
          THE PHILOSOPHY
        </span>

        {/* Large Typography Statement */}
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[var(--foreground)] tracking-tight leading-[1.15] mb-8">
          {cafeConfig.brandStory.headline}
        </h2>

        {/* Atmospheric Narrative */}
        <p className="text-lg sm:text-2xl text-[var(--foreground)]/90 font-serif italic max-w-3xl mx-auto leading-relaxed mb-8">
          &ldquo;{cafeConfig.brandStory.subheadline}&rdquo;
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto text-sm sm:text-base text-[var(--muted-foreground)] leading-relaxed pt-6 border-t border-[var(--border)]/60">
          <p>{cafeConfig.brandStory.paragraph1}</p>
          <p>{cafeConfig.brandStory.paragraph2}</p>
        </div>
      </div>
    </section>
  );
}
