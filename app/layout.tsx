import type { Metadata } from "next";
import "./globals.css";
import { cafeConfig } from "@/data/cafe";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";

export const metadata: Metadata = {
  title: `${cafeConfig.name} | Artisanal Roastery & Culinary Sanctuary in ${cafeConfig.city}`,
  description: `${cafeConfig.name} in ${cafeConfig.area}, ${cafeConfig.city}. ${cafeConfig.heroSubtext} Explore our single-origin menu, curated breakfast & mains, and reserve your table online.`,
  keywords: [
    `${cafeConfig.name}`,
    `Cafe in ${cafeConfig.city}`,
    `Best coffee shop in ${cafeConfig.area}`,
    "Artisanal Coffee",
    "Specialty Roastery",
    "Brunch Cafe",
    "Table Reservation",
  ],
  authors: [{ name: cafeConfig.name }],
  openGraph: {
    title: `${cafeConfig.name} | ${cafeConfig.city}`,
    description: cafeConfig.heroSubtext,
    url: "https://ateliercafe.com",
    siteName: cafeConfig.name,
    images: [
      {
        url: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: `${cafeConfig.name} Ambience`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${cafeConfig.name} | ${cafeConfig.city}`,
    description: cafeConfig.heroSubtext,
    images: ["https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: cafeConfig.name,
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80",
    telephone: cafeConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: cafeConfig.address,
      addressLocality: cafeConfig.city,
      addressRegion: "MH",
      addressCountry: "IN",
    },
    servesCuisine: ["Coffee", "Artisanal Bakery", "European Contemporary", "Desserts"],
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:30",
        closes: "23:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "08:00",
        closes: "23:30",
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased selection:bg-[var(--accent)] selection:text-black">
        {/* Subtle noise grain texture overlay */}
        <div className="noise-overlay" />

        <ThemeProvider>
          <SmoothScrollProvider>
            {/* Desktop magnetic custom cursor */}
            <CustomCursor />

            {/* Top scroll progress indicator */}
            <ScrollProgress />

            {/* Main Application Container */}
            {children}

            {/* Floating WhatsApp Quick Concierge */}
            <FloatingWhatsApp />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
