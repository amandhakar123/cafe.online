import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "gold" | "secondary" | "outline" | "success" | "chef";
  className?: string;
  size?: "sm" | "md";
}

export function Badge({ children, variant = "default", className, size = "sm" }: BadgeProps) {
  const sizeStyles = {
    sm: "text-[10px] px-2.5 py-0.5 tracking-wider",
    md: "text-xs px-3 py-1 tracking-widest",
  };

  const variantStyles = {
    default: "bg-[var(--surface-raised)] text-[var(--foreground)] border border-[var(--border)]",
    gold: "bg-[var(--accent-subtle)] text-[var(--accent)] border border-[var(--border)] font-semibold",
    secondary: "bg-[var(--muted)] text-[var(--muted-foreground)]",
    outline: "border border-[var(--border)] text-[var(--muted-foreground)]",
    success: "bg-emerald-950/60 text-emerald-400 border border-emerald-800/40",
    chef: "bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-amber-300 border border-amber-500/40 font-semibold",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full uppercase font-medium",
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
