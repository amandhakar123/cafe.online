"use client";

import React, { useState, useMemo } from "react";
import { cafeConfig, MenuItem } from "@/data/cafe";
import { MenuCard } from "./menu-card";
import { MenuCategoryNav } from "./menu-category-nav";
import { Search, Sparkles, Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface InteractiveMenuProps {
  onOpenReservation: () => void;
}

export function InteractiveMenu({ onOpenReservation }: InteractiveMenuProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string>("ALL");

  const filterTags = ["ALL", "SIGNATURE", "BESTSELLER", "VEG", "VEGAN", "GLUTEN-FREE", "NEW"];

  const filteredItems = useMemo(() => {
    return cafeConfig.menu.filter((item) => {
      // Category match
      const matchesCategory = activeCategory === "all" || item.category === activeCategory;

      // Search query match
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.origin && item.origin.toLowerCase().includes(searchQuery.toLowerCase()));

      // Tag filter match
      const matchesTag =
        selectedTag === "ALL" ||
        (item.tags && item.tags.some((t) => t.toUpperCase() === selectedTag));

      return matchesCategory && matchesSearch && matchesTag;
    });
  }, [activeCategory, searchQuery, selectedTag]);

  return (
    <div className="w-full">
      {/* Top Search and Filter Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted-foreground)]" />
          <input
            type="text"
            placeholder="Search coffee origins, dishes, pastries..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-full bg-[var(--surface)] border border-[var(--border)] text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)]/60 focus:outline-none focus:border-[var(--accent)] transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
            >
              Clear
            </button>
          )}
        </div>

        {/* Dietary Tag Quick Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
          <Filter className="w-3.5 h-3.5 text-[var(--accent)] mr-1 shrink-0" />
          {filterTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1 rounded-full text-[11px] font-mono tracking-wider transition-all duration-200 uppercase whitespace-nowrap ${
                selectedTag === tag
                  ? "bg-[var(--accent-subtle)] text-[var(--accent)] border border-[var(--border)] font-bold"
                  : "text-[var(--muted-foreground)] hover:text-[var(--foreground)] border border-transparent"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Sticky Category Tabs */}
      <div className="sticky top-[60px] sm:top-[72px] z-30 bg-[var(--background)]/90 backdrop-blur-md pt-2 pb-4 mb-8">
        <MenuCategoryNav
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />
      </div>

      {/* Menu Grid */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-16 px-4 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
          <div className="w-12 h-12 rounded-full bg-[var(--surface-raised)] flex items-center justify-center mx-auto mb-3 text-[var(--accent)]">
            <Sparkles className="w-6 h-6" />
          </div>
          <h4 className="font-serif text-xl text-[var(--foreground)] mb-1">No delicacies found</h4>
          <p className="text-sm text-[var(--muted-foreground)] max-w-sm mx-auto mb-6">
            We could not find any items matching &quot;{searchQuery || selectedTag}&quot;. Try selecting another category or clear the search filters.
          </p>
          <Button
            onClick={() => {
              setSearchQuery("");
              setSelectedTag("ALL");
              setActiveCategory("all");
            }}
            variant="outline"
            size="sm"
          >
            Reset Filters
          </Button>
        </div>
      )}

      {/* Bottom Floating Menu CTA */}
      <div className="mt-16 text-center p-8 sm:p-12 rounded-2xl bg-[var(--surface)] border border-[var(--border)] relative overflow-hidden">
        <div className="relative z-10 max-w-xl mx-auto space-y-4">
          <Badge variant="gold">PRIVATE TASTINGS & RESERVATIONS</Badge>
          <h3 className="font-serif text-2xl sm:text-3xl text-[var(--foreground)]">
            Join Us for a Curated Cupping Session
          </h3>
          <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
            Reserve your table in advance or speak with our head barista for custom origin selections and private culinary events.
          </p>
          <div className="pt-2">
            <Button onClick={onOpenReservation} variant="primary" size="md" withArrow>
              Reserve Your Table
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
