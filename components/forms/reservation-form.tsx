"use client";

import React, { useState } from "react";
import { cafeConfig } from "@/data/cafe";
import { Button } from "@/components/ui/button";
import { buildWhatsAppUrl } from "@/lib/utils";
import { MessageCircle, CheckCircle, Calendar, Users, Clock, Phone, User, MessageSquare } from "lucide-react";

interface ReservationFormProps {
  onSuccess?: () => void;
}

export function ReservationForm({ onSuccess }: ReservationFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "19:30",
    guests: "2",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isReadyToSend, setIsReadyToSend] = useState(false);
  const [whatsAppUrl, setWhatsAppUrl] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const messageText = `*TABLE RESERVATION REQUEST*\n` +
      `Café: ${cafeConfig.name}\n` +
      `• Guest Name: ${formData.name}\n` +
      `• Phone: ${formData.phone}\n` +
      `• Date: ${formData.date || "Today"}\n` +
      `• Time: ${formData.time}\n` +
      `• Party Size: ${formData.guests} Guests\n` +
      (formData.message ? `• Note / Seating Preference: ${formData.message}\n` : "") +
      `\nSent via online reservation portal.`;

    const url = buildWhatsAppUrl(cafeConfig.whatsapp, messageText);
    setWhatsAppUrl(url);
    setIsSubmitting(false);
    setIsReadyToSend(true);
  };

  if (isReadyToSend) {
    return (
      <div className="text-center py-6 space-y-5 animate-in fade-in zoom-in-95 duration-300">
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
          <CheckCircle className="w-8 h-8" />
        </div>

        <div>
          <h4 className="font-serif text-2xl text-[var(--foreground)] font-semibold mb-2">
            Reservation Prepared!
          </h4>
          <p className="text-sm text-[var(--muted-foreground)] max-w-sm mx-auto">
            Your request details for <strong className="text-[var(--foreground)]">{formData.guests} guests</strong> on{" "}
            <strong className="text-[var(--foreground)]">{formData.date || "today"} at {formData.time}</strong> are ready.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[var(--surface-raised)] border border-[var(--border)] text-left text-xs text-[var(--muted-foreground)] space-y-1 font-mono">
          <p>NAME: {formData.name}</p>
          <p>CONTACT: {formData.phone}</p>
          <p>STATUS: Ready to confirm via Concierge WhatsApp</p>
        </div>

        <div className="pt-2 flex flex-col gap-3">
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => onSuccess?.()}
            className="w-full"
          >
            <Button variant="primary" size="lg" className="w-full bg-emerald-500 hover:bg-emerald-400 text-black">
              <MessageCircle className="w-5 h-5 mr-2" />
              Send to Concierge via WhatsApp
            </Button>
          </a>

          <button
            type="button"
            onClick={() => setIsReadyToSend(false)}
            className="text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)] uppercase tracking-wider py-2 font-mono"
          >
            ← Modify Details
          </button>
        </div>
      </div>
    );
  }

  // Get minimum date (today)
  const todayDate = new Date().toISOString().split("T")[0];

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name and Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-mono uppercase tracking-widest text-[var(--muted-foreground)] mb-1.5 flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span>Full Name *</span>
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="e.g. Arjun Kapoor"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-[var(--surface-raised)] border border-[var(--border)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)]/50 focus:outline-none focus:border-[var(--accent)] text-sm transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-mono uppercase tracking-widest text-[var(--muted-foreground)] mb-1.5 flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span>Phone Number *</span>
          </label>
          <input
            type="tel"
            name="phone"
            required
            placeholder="e.g. +91 98200 12345"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-[var(--surface-raised)] border border-[var(--border)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)]/50 focus:outline-none focus:border-[var(--accent)] text-sm transition-colors"
          />
        </div>
      </div>

      {/* Date, Time, Guests */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-mono uppercase tracking-widest text-[var(--muted-foreground)] mb-1.5 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span>Date *</span>
          </label>
          <input
            type="date"
            name="date"
            required
            min={todayDate}
            value={formData.date}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-[var(--surface-raised)] border border-[var(--border)] text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)] text-sm transition-colors [color-scheme:dark]"
          />
        </div>

        <div>
          <label className="block text-xs font-mono uppercase tracking-widest text-[var(--muted-foreground)] mb-1.5 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span>Time *</span>
          </label>
          <select
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-[var(--surface-raised)] border border-[var(--border)] text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)] text-sm transition-colors [color-scheme:dark]"
          >
            <option value="08:30">08:30 AM (Breakfast)</option>
            <option value="10:00">10:00 AM (Morning Brew)</option>
            <option value="12:30">12:30 PM (Lunch)</option>
            <option value="15:30">03:30 PM (Afternoon Tea)</option>
            <option value="18:00">06:00 PM (Sunset Hours)</option>
            <option value="19:30">07:30 PM (Dinner & Vibe)</option>
            <option value="21:00">09:00 PM (Late Night Dessert)</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-mono uppercase tracking-widest text-[var(--muted-foreground)] mb-1.5 flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span>Guests *</span>
          </label>
          <select
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-[var(--surface-raised)] border border-[var(--border)] text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)] text-sm transition-colors [color-scheme:dark]"
          >
            <option value="1">1 Guest (Solo Ritual)</option>
            <option value="2">2 Guests (Intimate Table)</option>
            <option value="3">3 Guests</option>
            <option value="4">4 Guests</option>
            <option value="5">5 Guests</option>
            <option value="6+">6+ Guests (Large Party)</option>
          </select>
        </div>
      </div>

      {/* Special Requests / Notes */}
      <div>
        <label className="block text-xs font-mono uppercase tracking-widest text-[var(--muted-foreground)] mb-1.5 flex items-center gap-1.5">
          <MessageSquare className="w-3.5 h-3.5 text-[var(--accent)]" />
          <span>Seating Preference / Special Notes</span>
        </label>
        <textarea
          name="message"
          rows={2}
          placeholder="e.g. Veranda garden seating, quiet table for meeting, birthday celebration..."
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl bg-[var(--surface-raised)] border border-[var(--border)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)]/50 focus:outline-none focus:border-[var(--accent)] text-sm transition-colors resize-none"
        />
      </div>

      <p className="text-[11px] text-[var(--muted-foreground)] italic text-center">
        * Table holds are confirmed instantly with our concierge over WhatsApp.
      </p>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isSubmitting}
        className="w-full mt-2"
      >
        Request A Table
      </Button>
    </form>
  );
}
