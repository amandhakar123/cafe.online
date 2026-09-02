"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/navigation/navbar";
import { HeroSection } from "@/components/sections/hero";
import { BrandIntro } from "@/components/sections/brand-intro";
import { SignatureExperience } from "@/components/sections/signature-experience";
import { SignatureMenu } from "@/components/sections/signature-menu";
import { ChefsPickSection } from "@/components/sections/chefs-pick";
import { InteractiveMenu } from "@/components/menu/interactive-menu";
import { BeforeAfterCraft } from "@/components/ui/before-after";
import { AmbienceSection } from "@/components/sections/ambience";
import { EditorialGallery } from "@/components/gallery/editorial-gallery";
import { ReviewsSection } from "@/components/sections/reviews";
import { LocationSection } from "@/components/sections/location";
import { InstagramFeedSection } from "@/components/sections/instagram-feed";
import { Footer } from "@/components/sections/footer";
import { MobileBottomBar } from "@/components/navigation/mobile-bottom-bar";
import { Modal } from "@/components/ui/modal";
import { ReservationForm } from "@/components/forms/reservation-form";
import { cafeConfig } from "@/data/cafe";

export default function HomePage() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] relative">
      {/* 1. Top Floating Navigation Header */}
      <Navbar onOpenReservation={() => setIsReservationOpen(true)} />

      {/* 2. Fullscreen Cinematic Hero with 3D Coffee Cup Object */}
      <HeroSection onOpenReservation={() => setIsReservationOpen(true)} />

      {/* 3. Typography Brand Narrative Statement */}
      <BrandIntro />

      {/* 4. The Signature Experience: 01-04 Pillars */}
      <SignatureExperience />

      {/* 5. Highlighted Signature Selections */}
      <SignatureMenu onOpenReservation={() => setIsReservationOpen(true)} />

      {/* 6. Chef's Signature Feature Advertisement */}
      <ChefsPickSection onOpenReservation={() => setIsReservationOpen(true)} />

      {/* 7. Dedicated Interactive Full Menu Experience */}
      <section id="menu" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--accent)] font-semibold mb-3 block">
              03 • ARTISANAL MENU
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[var(--foreground)] tracking-tight mb-4">
              Explore Our Offerings.
            </h2>
            <p className="text-sm sm:text-base text-[var(--muted-foreground)]">
              From dawn espresso extractions and sourdough viennoiserie to contemporary evening bistro plates.
            </p>
          </div>

          <InteractiveMenu onOpenReservation={() => setIsReservationOpen(true)} />
        </div>
      </section>

      {/* 8. From Beans to Beauty: Interactive Craft Journey */}
      <section id="craft" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-[var(--border)] bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--accent)] font-semibold mb-3 block">
              04 • THE CRAFT JOURNEY
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[var(--foreground)] tracking-tight mb-4">
              {cafeConfig.craftStory.title}
            </h2>
            <p className="text-sm sm:text-base text-[var(--muted-foreground)]">
              {cafeConfig.craftStory.subtitle}
            </p>
          </div>

          <BeforeAfterCraft />
        </div>
      </section>

      {/* 9. Ambience & Spatial Design */}
      <AmbienceSection />

      {/* 10. Editorial Photography Gallery */}
      <section id="gallery" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--accent)] font-semibold mb-3 block">
              05 • VISUAL ARCHIVE
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[var(--foreground)] tracking-tight mb-4">
              Moments of Light & Flavor.
            </h2>
            <p className="text-sm sm:text-base text-[var(--muted-foreground)]">
              A curated photographic look into our daily craft, spaces, and kitchen creations.
            </p>
          </div>

          <EditorialGallery />
        </div>
      </section>

      {/* 11. Customer Love & Verified Trust */}
      <ReviewsSection />

      {/* 12. Location, Hours, & Directions */}
      <LocationSection onOpenReservation={() => setIsReservationOpen(true)} />

      {/* 13. Social Proof & Instagram Feed */}
      <InstagramFeedSection />

      {/* 14. Minimal Luxury Footer */}
      <Footer />

      {/* 15. Mobile Sticky Bottom Action Bar */}
      <MobileBottomBar onOpenReservation={() => setIsReservationOpen(true)} />

      {/* 16. Table Reservation Request Modal */}
      <Modal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
        title="Your Table Is Waiting"
        subtitle="EXCLUSIVE RESERVATION"
        maxWidth="lg"
      >
        <ReservationForm onSuccess={() => setIsReservationOpen(false)} />
      </Modal>
    </main>
  );
}
