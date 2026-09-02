"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cafeConfig } from "@/data/cafe";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function BeforeAfterCraft() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = cafeConfig.craftStory.steps;

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Step Selector Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12">
        {steps.map((s, idx) => {
          const isActive = activeStep === idx;
          return (
            <button
              key={s.step}
              onClick={() => setActiveStep(idx)}
              className={cn(
                "relative text-left p-4 sm:p-6 rounded-xl border transition-all duration-300 group",
                isActive
                  ? "bg-[var(--surface-raised)] border-[var(--accent)] shadow-[0_0_20px_var(--accent-subtle)]"
                  : "bg-[var(--surface)] border-[var(--border)] hover:border-[var(--accent)]/50"
              )}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className={cn(
                    "text-xs font-mono font-bold tracking-widest uppercase",
                    isActive ? "text-[var(--accent)]" : "text-[var(--muted-foreground)]"
                  )}
                >
                  STEP {s.step}
                </span>
                {isActive && <Sparkles className="w-4 h-4 text-[var(--accent)] animate-pulse" />}
              </div>
              <h4
                className={cn(
                  "font-serif text-base sm:text-lg transition-colors duration-200",
                  isActive ? "text-[var(--foreground)] font-semibold" : "text-[var(--muted-foreground)]"
                )}
              >
                {s.title}
              </h4>
              {/* Progress Line */}
              <div
                className={cn(
                  "absolute bottom-0 left-0 right-0 h-1 rounded-b-xl transition-all duration-300",
                  isActive ? "bg-[var(--accent)]" : "bg-transparent"
                )}
              />
            </button>
          );
        })}
      </div>

      {/* Active Step Showcase */}
      <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] grid grid-cols-1 lg:grid-cols-12 gap-0 shadow-2xl">
        {/* Left Visual Area */}
        <div className="relative h-[340px] sm:h-[450px] lg:h-[520px] lg:col-span-7 overflow-hidden">
          <Image
            src={steps[activeStep].image}
            alt={steps[activeStep].title}
            fill
            priority
            className="object-cover transition-transform duration-700 hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[var(--surface)] opacity-80" />

          {/* Badge */}
          <div className="absolute top-6 left-6 z-10">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-[var(--border)] text-[var(--accent)] text-xs font-mono tracking-widest">
              <span>PHASE {steps[activeStep].step} OF 04</span>
            </span>
          </div>
        </div>

        {/* Right Editorial Info Area */}
        <div className="lg:col-span-5 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-[var(--accent)] text-xs font-mono tracking-widest uppercase mb-4">
              <CheckCircle2 className="w-4 h-4" />
              <span>THE CRAFT DISCIPLINE</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[var(--foreground)] mb-4 tracking-tight leading-tight">
              {steps[activeStep].title}
            </h3>

            <p className="text-[var(--muted-foreground)] text-sm sm:text-base leading-relaxed mb-8">
              {steps[activeStep].description}
            </p>

            {/* Micro Details list */}
            <div className="space-y-3 border-t border-[var(--border)] pt-6">
              <div className="flex items-center justify-between text-xs text-[var(--muted-foreground)] font-mono">
                <span>STAGE PARAMETER</span>
                <span className="text-[var(--foreground)]">Calibrated to 0.1g</span>
              </div>
              <div className="flex items-center justify-between text-xs text-[var(--muted-foreground)] font-mono">
                <span>ROAST PROFILE</span>
                <span className="text-[var(--foreground)]">Slow Drum Convection</span>
              </div>
              <div className="flex items-center justify-between text-xs text-[var(--muted-foreground)] font-mono">
                <span>CUP QUALITY</span>
                <span className="text-[var(--accent)] font-bold">Specialty Grade 88+</span>
              </div>
            </div>
          </div>

          {/* Step Stepper Navigation */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-[var(--border)]">
            <button
              onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
              className="text-xs uppercase tracking-widest text-[var(--muted-foreground)] hover:text-[var(--accent)] font-semibold transition-colors"
            >
              ← Previous Stage
            </button>
            <button
              onClick={() => setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[var(--accent)] hover:text-[var(--accent-hover)] font-semibold transition-colors"
            >
              <span>Next Stage</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
