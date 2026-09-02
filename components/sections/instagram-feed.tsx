"use client";

import React from "react";
import Image from "next/image";
import { cafeConfig } from "@/data/cafe";
import { Instagram, Heart, MessageCircle, ExternalLink } from "lucide-react";

export function InstagramFeedSection() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--accent)] font-semibold mb-3 block">
              INSTAGRAM JOURNAL
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[var(--foreground)] tracking-tight">
              Follow The Mood.
            </h2>
          </div>

          <a
            href={cafeConfig.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors group"
          >
            <Instagram className="w-4 h-4" />
            <span>{cafeConfig.instagram.handle}</span>
            <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* 6 Images Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {cafeConfig.instagramPosts.map((post) => (
            <a
              key={post.id}
              href={cafeConfig.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-text="INSTA"
              className="group relative h-48 sm:h-60 rounded-xl overflow-hidden border border-[var(--border)] bg-black/40 block"
            >
              <Image
                src={post.image}
                alt={post.caption}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
              />

              {/* Hover Overlay with Likes/Comments */}
              <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 p-3 text-white text-center">
                <div className="flex items-center gap-4 text-xs font-mono">
                  <span className="flex items-center gap-1 text-[var(--accent)]">
                    <Heart className="w-3.5 h-3.5 fill-current" />
                    <span>{post.likes}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{post.comments}</span>
                  </span>
                </div>
                <p className="text-[10px] text-neutral-300 line-clamp-2 mt-1 italic font-serif">
                  {post.caption}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
