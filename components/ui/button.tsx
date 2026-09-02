"use client";

import React, { forwardRef, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
  withArrow?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", withArrow = false, children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full tracking-wider uppercase disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] group relative overflow-hidden";

    const sizeStyles = {
      sm: "text-xs px-4 py-2 gap-1.5",
      md: "text-xs md:text-sm px-6 py-3.5 gap-2",
      lg: "text-sm md:text-base px-8 py-4 gap-2.5",
    };

    const variantStyles = {
      primary:
        "bg-[var(--accent)] text-[#0C0A09] font-semibold hover:bg-[var(--accent-hover)] shadow-lg hover:shadow-[0_0_25px_rgba(212,175,55,0.35)]",
      secondary:
        "bg-[var(--surface-raised)] text-[var(--foreground)] hover:bg-[var(--muted)] border border-[var(--border)]",
      outline:
        "bg-transparent text-[var(--foreground)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--accent-subtle)]",
      ghost:
        "bg-transparent text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--accent-subtle)]",
      gold:
        "bg-gradient-to-r from-[#DFBA53] via-[#D4AF37] to-[#A27C17] text-[#0C0A09] font-bold shadow-[0_4px_20px_rgba(212,175,55,0.3)] hover:brightness-110",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
        {withArrow && (
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
