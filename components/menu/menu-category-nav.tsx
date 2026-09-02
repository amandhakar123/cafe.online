"use client";

import React from "react";
import { cafeConfig } from "@/data/cafe";
import { cn } from "@/lib/utils";

interface MenuCategoryNavProps {
  activeCategory: string;
  onSelectCategory: (categoryId: any) => void;
}

export function MenuCategoryNav({
  activeCategory,
  onSelectCategory,
}: MenuCategoryNavProps) {
  const categories = [
    { id: "all", label: "ALL SELECTIONS" },
    ...cafeConfig.menuCategories.map((c) => ({ id: c.id, label: c.label })),
  ];

  return (
    <div className="w-full overflow-x-auto no-scrollbar py-2 border-b border-[var(--border)]">
      <div className="flex items-center gap-2 sm:gap-3 min-w-max pb-2">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={cn(
                "px-5 py-2.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider transition-all duration-300 border",
                isActive
                  ? "bg-[var(--accent)] text-[#0C0A09] border-[var(--accent)] shadow-[0_0_15px_var(--accent-subtle)]"
                  : "bg-[var(--surface-raised)] text-[var(--muted-foreground)] border-[var(--border)] hover:text-[var(--foreground)] hover:border-[var(--accent)]/40"
              )}
            >
              {cat.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
