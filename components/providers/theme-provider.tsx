"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { cafeConfig, ThemeColors } from "@/data/cafe";

interface ThemeContextType {
  currentTheme: "luxury" | "modern" | "contemporary" | "youthful";
  setTheme: (theme: "luxury" | "modern" | "contemporary" | "youthful") => void;
  colors: ThemeColors;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<"luxury" | "modern" | "contemporary" | "youthful">(
    cafeConfig.themeStyle
  );

  const colors = cafeConfig.themes[currentTheme] || cafeConfig.themes.luxury;

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--background", colors.background);
    root.style.setProperty("--foreground", colors.foreground);
    root.style.setProperty("--surface", colors.surface);
    root.style.setProperty("--surface-raised", colors.surfaceRaised);
    root.style.setProperty("--accent", colors.accent);
    root.style.setProperty("--accent-hover", colors.accentHover);
    root.style.setProperty("--accent-subtle", colors.accentSubtle);
    root.style.setProperty("--accent-secondary", colors.accentSecondary);
    root.style.setProperty("--muted", colors.muted);
    root.style.setProperty("--muted-foreground", colors.mutedForeground);
    root.style.setProperty("--border", colors.border);
  }, [colors]);

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme: setCurrentTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
