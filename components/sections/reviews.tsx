"use client";

import React from "react";
import { cafeConfig } from "@/data/cafe";
import { Star, Quote, ShieldCheck } from "lucide-react";

export function ReviewsSection() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--accent)] font-semibold mb-3 block">
            VERIFIED TESTIMONIALS
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[var(--foreground)] tracking-tight mb-4">
            Loved by People Who Come Back.
          </h2>
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-[var(--muted-foreground)]">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Google Rating {cafeConfig.trustStats.rating} ★ based on {cafeConfig.trustStats.totalReviews} genuine guests</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {cafeConfig.reviews.map((review) => (
            <div
              key={review.id}
              className="p-8 rounded-2xl bg-[var(--surface-raised)] border border-[var(--border)] flex flex-col justify-between hover:border-[var(--accent)]/50 transition-all duration-300"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-6 text-[var(--accent)]">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Quote Body */}
                <p className="font-serif text-base sm:text-lg text-[var(--foreground)] leading-relaxed mb-6 italic">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-6 border-t border-[var(--border)]/60 flex items-center justify-between">
                <div>
                  <h4 className="font-sans font-semibold text-sm text-[var(--foreground)]">
                    {review.name}
                  </h4>
                  {review.role && (
                    <p className="text-[11px] text-[var(--muted-foreground)] font-mono">
                      {review.role}
                    </p>
                  )}
                </div>
                {review.date && (
                  <span className="text-[10px] text-[var(--muted-foreground)] font-mono">
                    {review.date}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Community Trust Stats Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-2xl bg-[var(--background)] border border-[var(--border)] text-center">
          <div>
            <span className="font-serif text-3xl sm:text-4xl text-[var(--accent)] font-bold block mb-1">
              {cafeConfig.trustStats.rating}
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--muted-foreground)]">
              Average Rating
            </span>
          </div>

          <div>
            <span className="font-serif text-3xl sm:text-4xl text-[var(--foreground)] font-bold block mb-1">
              {cafeConfig.trustStats.totalReviews}
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--muted-foreground)]">
              Google Reviews
            </span>
          </div>

          <div>
            <span className="font-serif text-3xl sm:text-4xl text-[var(--foreground)] font-bold block mb-1">
              {cafeConfig.trustStats.yearsCrafting}
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--muted-foreground)]">
              Roasting Heritage
            </span>
          </div>

          <div>
            <span className="font-serif text-3xl sm:text-4xl text-[var(--accent)] font-bold block mb-1">
              {cafeConfig.trustStats.signatureBlends}
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--muted-foreground)]">
              Estate Selections
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
