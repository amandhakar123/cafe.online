"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cafeConfig } from "@/data/cafe";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/providers/theme-provider";
import { Menu, X, Sparkles, Phone, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  onOpenReservation: () => void;
}

export function Navbar({ onOpenReservation }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentTheme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "EXPERIENCE", href: "#experience" },
    { label: "MENU", href: "#menu" },
    { label: "THE CRAFT", href: "#craft" },
    { label: "AMBIENCE", href: "#ambience" },
    { label: "GALLERY", href: "#gallery" },
    { label: "LOCATION", href: "#location" },
  ];

  const themesList: ("luxury" | "modern" | "contemporary" | "youthful")[] = [
    "luxury",
    "modern",
    "contemporary",
    "youthful",
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "py-3 bg-[var(--background)]/85 backdrop-blur-xl border-b border-[var(--border)] shadow-2xl"
            : "py-6 bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex flex-col group transition-transform duration-300 active:scale-95"
          >
            <span className="font-serif text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
              {cafeConfig.shortName}
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-[var(--muted-foreground)] -mt-1 hidden sm:block">
              {cafeConfig.city} • Roastery
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-widest text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors relative py-1 group"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[var(--accent)] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Area */}
          <div className="flex items-center gap-3">
            {/* Theme Selector Pill (for sales demo & client customization showcase) */}
            <div className="hidden sm:flex items-center gap-1 p-1 rounded-full bg-[var(--surface-raised)] border border-[var(--border)]">
              {themesList.map((t) => (
                <button
                  key={t}
                  onClick={() => setTheme(t)}
                  title={`Switch to ${t} styling`}
                  className={cn(
                    "px-2.5 py-0.5 text-[10px] uppercase font-mono tracking-wider rounded-full transition-all duration-200",
                    currentTheme === t
                      ? "bg-[var(--accent)] text-[#0C0A09] font-bold shadow-sm"
                      : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                  )}
                >
                  {t.slice(0, 3)}
                </button>
              ))}
            </div>

            {/* Desktop Reserve Button */}
            <Button
              onClick={onOpenReservation}
              size="sm"
              variant="primary"
              withArrow
              className="hidden sm:inline-flex shadow-md"
            >
              Reserve Table
            </Button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-full text-[var(--foreground)] hover:bg-[var(--surface-raised)] border border-[var(--border)] transition-colors"
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[1000] bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-10">
          {/* Top Bar inside Menu */}
          <div className="flex items-center justify-between border-b border-[var(--border)] pb-6">
            <div>
              <span className="font-serif text-xl font-bold text-white tracking-tight">
                {cafeConfig.name}
              </span>
              <p className="text-[10px] uppercase tracking-widest text-[var(--accent)]">
                {cafeConfig.tagline}
              </p>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-full bg-white/10 text-white hover:bg-[var(--accent)] hover:text-black transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Links List */}
          <div className="flex flex-col gap-6 py-8">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-2xl sm:text-3xl text-neutral-200 hover:text-[var(--accent)] transition-colors flex items-center justify-between group"
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono text-[var(--accent)] opacity-50 group-hover:opacity-100">
                  0{idx + 1}
                </span>
              </a>
            ))}
          </div>

          {/* Bottom Actions inside Menu */}
          <div className="space-y-4 border-t border-[var(--border)] pt-6">
            <div className="flex items-center justify-between text-xs text-neutral-400 font-mono">
              <span>ACTIVE THEME:</span>
              <div className="flex gap-1">
                {themesList.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTheme(t)}
                    className={cn(
                      "px-2 py-0.5 uppercase text-[10px] rounded",
                      currentTheme === t
                        ? "bg-[var(--accent)] text-black font-bold"
                        : "bg-neutral-800 text-neutral-400"
                    )}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <Button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              variant="primary"
              size="lg"
              className="w-full"
            >
              Reserve a Table
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
