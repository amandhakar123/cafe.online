"use client";

import React, { useEffect, useState } from "react";

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-[100] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-[var(--accent-secondary)] via-[var(--accent)] to-[var(--accent-hover)] transition-all duration-75 ease-out shadow-[0_0_10px_var(--accent)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
