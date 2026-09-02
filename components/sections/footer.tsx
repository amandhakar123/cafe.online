"use client";

import React from "react";
import Link from "next/link";
import { cafeConfig } from "@/data/cafe";
import { Instagram, Phone, MessageCircle, MapPin, Mail, ArrowUp } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/utils";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsAppUrl = buildWhatsAppUrl(
    cafeConfig.whatsapp,
    `Hi ${cafeConfig.name}, I'm reaching out from your website.`
  );

  return (
    <footer className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-[var(--border)] bg-[var(--background)] relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-5 space-y-4">
            <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[var(--foreground)] block">
              {cafeConfig.name}
            </span>
            <p className="text-sm text-[var(--muted-foreground)] max-w-sm leading-relaxed">
              {cafeConfig.tagline}
            </p>
            <p className="text-xs text-[var(--muted-foreground)]/80 font-mono">
              {cafeConfig.address}
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--accent)] font-semibold block mb-4">
              EXPERIENCE
            </span>
            <ul className="space-y-2 text-sm text-[var(--muted-foreground)]">
              <li>
                <a href="#experience" className="hover:text-[var(--foreground)] transition-colors">
                  The Four Pillars
                </a>
              </li>
              <li>
                <a href="#signatures" className="hover:text-[var(--foreground)] transition-colors">
                  Signature Dishes
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[var(--foreground)] transition-colors">
                  Artisanal Menu
                </a>
              </li>
              <li>
                <a href="#craft" className="hover:text-[var(--foreground)] transition-colors">
                  From Beans to Beauty
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[var(--foreground)] transition-colors">
                  Visual Archive
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Concierge & Socials */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--accent)] font-semibold block mb-4">
              CONCIERGE & SOCIALS
            </span>
            <div className="space-y-3 text-sm text-[var(--muted-foreground)] font-mono">
              <a
                href={`tel:${cafeConfig.phone}`}
                className="flex items-center gap-2 hover:text-[var(--foreground)] transition-colors"
              >
                <Phone className="w-4 h-4 text-[var(--accent)]" />
                <span>{cafeConfig.phone}</span>
              </a>
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Booking & Enquiries</span>
              </a>
              <a
                href={`mailto:${cafeConfig.email}`}
                className="flex items-center gap-2 hover:text-[var(--foreground)] transition-colors"
              >
                <Mail className="w-4 h-4 text-[var(--accent)]" />
                <span>{cafeConfig.email}</span>
              </a>
              <a
                href={cafeConfig.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[var(--foreground)] transition-colors"
              >
                <Instagram className="w-4 h-4 text-[var(--accent)]" />
                <span>{cafeConfig.instagram.handle}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 border-t border-[var(--border)]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[var(--muted-foreground)]">
          <div>
            © {new Date().getFullYear()} {cafeConfig.name}. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 hover:text-[var(--accent)] transition-colors uppercase tracking-wider"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
