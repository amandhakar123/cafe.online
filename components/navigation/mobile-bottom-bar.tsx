"use client";

import React from "react";
import { cafeConfig } from "@/data/cafe";
import { Phone, MessageCircle, Utensils, Calendar } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/utils";

interface MobileBottomBarProps {
  onOpenReservation: () => void;
}

export function MobileBottomBar({ onOpenReservation }: MobileBottomBarProps) {
  const whatsAppMsg = `Hi ${cafeConfig.name}, I found you online and would like to enquire about visiting / reserving a table.`;
  const whatsappUrl = buildWhatsAppUrl(cafeConfig.whatsapp, whatsAppMsg);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden p-3 bg-[var(--background)]/90 backdrop-blur-xl border-t border-[var(--border)] shadow-[0_-5px_25px_rgba(0,0,0,0.5)]">
      <div className="grid grid-cols-4 gap-2">
        {/* Call CTA */}
        <a
          href={`tel:${cafeConfig.phone}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[var(--surface-raised)] border border-[var(--border)] text-[var(--foreground)] hover:text-[var(--accent)] transition-colors active:scale-95"
        >
          <Phone className="w-4 h-4 mb-1 text-[var(--accent)]" />
          <span className="text-[10px] font-mono font-semibold uppercase tracking-wider">CALL</span>
        </a>

        {/* WhatsApp CTA */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-950/40 border border-emerald-600/30 text-emerald-400 hover:bg-emerald-900/50 transition-colors active:scale-95"
        >
          <MessageCircle className="w-4 h-4 mb-1 text-emerald-400" />
          <span className="text-[10px] font-mono font-semibold uppercase tracking-wider">WHATSAPP</span>
        </a>

        {/* Menu Anchor CTA */}
        <a
          href="#menu"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[var(--surface-raised)] border border-[var(--border)] text-[var(--foreground)] hover:text-[var(--accent)] transition-colors active:scale-95"
        >
          <Utensils className="w-4 h-4 mb-1 text-[var(--accent)]" />
          <span className="text-[10px] font-mono font-semibold uppercase tracking-wider">MENU</span>
        </a>

        {/* Reserve Table Modal Trigger */}
        <button
          onClick={onOpenReservation}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[var(--accent)] text-[#0C0A09] font-bold shadow-md hover:bg-[var(--accent-hover)] transition-colors active:scale-95"
        >
          <Calendar className="w-4 h-4 mb-1 text-[#0C0A09]" />
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider">RESERVE</span>
        </button>
      </div>
    </div>
  );
}
