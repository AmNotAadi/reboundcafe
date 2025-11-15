"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { GALLERY_ITEMS } from "@/lib/content";

const filters = ["All", "Interior", "Food", "Events"] as const;

type Filter = (typeof filters)[number];

export default function GalleryPage() {
  const [filter, setFilter] = useState<Filter>("All");
  const filtered = useMemo(() => {
    if (filter === "All") return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === filter);
  }, [filter]);

  return (
    <div className="pb-24">
      <header className="rounded-[32px] bg-[var(--color-charcoal)] p-10 text-white">
        <p className="text-xs uppercase tracking-[0.6em] text-[var(--color-gold)]">Gallery</p>
        <h1 className="mt-4 text-4xl font-semibold">Cinematic snapshots</h1>
        <p className="mt-4 text-white/80">Hover to reveal captions, click for immersive view.</p>
      </header>

      <div className="mt-10 flex flex-wrap gap-3">
        {filters.map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`rounded-full px-5 py-2 text-sm transition ${
              filter === tab
                ? "bg-[var(--color-olive)] text-white"
                : "border border-[var(--color-olive)]/40 text-[var(--color-olive)]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {filtered.map((item) => (
          <div key={item.id} className="mb-4 overflow-hidden rounded-[28px]">
            <Image src={item.image} alt={item.alt} width={800} height={1000} className="w-full object-cover" />
            <p className="p-4 text-sm text-[var(--color-slate)]">
              {item.title}
              <span className="ml-2 text-xs uppercase tracking-[0.3em] text-[var(--color-gold)]">{item.category}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
