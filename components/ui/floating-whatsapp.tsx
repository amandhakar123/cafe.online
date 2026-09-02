"use client";

import React from "react";
import { cafeConfig } from "@/data/cafe";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/utils";

export function FloatingWhatsApp() {
  const message = `Hi ${cafeConfig.name}, I found your website online and would like to enquire about visiting / table reservations.`;
  const url = buildWhatsAppUrl(cafeConfig.whatsapp, message);

  return (
    <aside
      aria-label="Concierge WhatsApp Chat"
      className="fixed bottom-20 sm:bottom-8 right-4 sm:right-8 z-40"
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat with ${cafeConfig.shortName} on WhatsApp`}
        data-cursor-text="CHAT"
        className="flex items-center gap-3 p-3 sm:px-4 sm:py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium shadow-[0_8px_30px_rgba(16,185,129,0.4)] border border-emerald-400/30 transition-all duration-300 hover:scale-105 group active:scale-95"
      >
        <MessageCircle className="w-5 h-5 text-white" />
        <span className="text-xs font-mono font-semibold tracking-wider uppercase hidden sm:inline-block">
          WhatsApp Concierge
        </span>
      </a>
    </aside>
  );
}
