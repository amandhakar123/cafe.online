"use client";

import React from "react";
import { cafeConfig } from "@/data/cafe";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, ArrowUpRight, MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/utils";

interface LocationProps {
  onOpenReservation: () => void;
}

export function LocationSection({ onOpenReservation }: LocationProps) {
  const whatsAppUrl = buildWhatsAppUrl(
    cafeConfig.whatsapp,
    `Hi ${cafeConfig.name}, I'd like to ask for directions / parking assistance.`
  );

  return (
    <section id="location" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--accent)] font-semibold mb-3 block">
            VISIT & DIRECTIONS
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[var(--foreground)] tracking-tight">
            Find Your Way Here.
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Address and Contacts */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-8 rounded-2xl bg-[var(--surface)] border border-[var(--border)] space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[var(--surface-raised)] border border-[var(--border)] text-[var(--accent)] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-[var(--foreground)] mb-1">
                    {cafeConfig.name}
                  </h3>
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                    {cafeConfig.address}
                  </p>
                  <p className="text-xs font-mono text-[var(--accent)] mt-1">
                    {cafeConfig.area}, {cafeConfig.city}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[var(--border)]/60">
                <a
                  href={`tel:${cafeConfig.phone}`}
                  className="p-4 rounded-xl bg-[var(--surface-raised)] border border-[var(--border)] hover:border-[var(--accent)] transition-colors group flex items-center gap-3"
                >
                  <Phone className="w-4 h-4 text-[var(--accent)]" />
                  <div>
                    <span className="text-[10px] font-mono text-[var(--muted-foreground)] uppercase block">
                      Direct Phone
                    </span>
                    <span className="text-xs font-mono font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)]">
                      {cafeConfig.phone}
                    </span>
                  </div>
                </a>

                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-800/30 hover:border-emerald-600/50 transition-colors group flex items-center gap-3"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <div>
                    <span className="text-[10px] font-mono text-emerald-400/80 uppercase block">
                      WhatsApp Concierge
                    </span>
                    <span className="text-xs font-mono font-semibold text-emerald-300 group-hover:text-emerald-200">
                      Chat with Us
                    </span>
                  </div>
                </a>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[var(--border)]/60">
                <a
                  href={cafeConfig.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[200px]"
                >
                  <Button variant="primary" size="md" withArrow className="w-full">
                    Get Google Maps Directions
                  </Button>
                </a>
                <Button onClick={onOpenReservation} variant="outline" size="md">
                  Reserve Table
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column: Opening Hours Timetable */}
          <div className="lg:col-span-6">
            <div className="p-8 rounded-2xl bg-[var(--surface)] border border-[var(--border)] h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-5 h-5 text-[var(--accent)]" />
                  <h3 className="font-serif text-2xl text-[var(--foreground)]">
                    Service Hours
                  </h3>
                </div>

                <div className="space-y-4">
                  {cafeConfig.openingHours.map((item) => (
                    <div
                      key={item.day}
                      className="flex items-center justify-between py-3 border-b border-[var(--border)]/60 text-sm font-mono"
                    >
                      <span className={item.isWeekend ? "text-[var(--accent)] font-semibold" : "text-[var(--foreground)]"}>
                        {item.day}
                      </span>
                      <span className="text-[var(--muted-foreground)]">
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[var(--surface-raised)] border border-[var(--border)] mt-8">
                <p className="text-xs text-[var(--muted-foreground)] font-mono">
                  ✦ Kitchen orders take last requests 45 minutes prior to close. Walk-ins always welcomed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
