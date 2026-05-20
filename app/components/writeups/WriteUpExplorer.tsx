"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { WriteUp } from "@/app/data/writeups";
import Badge from "@/app/components/ui/Badge";
import { cn } from "@/app/lib/cn";

interface WriteUpExplorerProps {
  writeups: WriteUp[];
}

const categories = ["All", "HTB Machine", "Bug Bounty CTF"] as const;

function estimateReadMinutes(description: string): number {
  const words = description.split(/\s+/).length;
  return Math.max(3, Math.ceil(words / 40));
}

export default function WriteUpExplorer({ writeups }: WriteUpExplorerProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");

  const filtered = useMemo(() => {
    return writeups.filter((w) => {
      const matchesCategory =
        category === "All" || w.category === category;
      const q = query.toLowerCase().trim();
      const matchesQuery =
        !q ||
        w.title.toLowerCase().includes(q) ||
        w.description.toLowerCase().includes(q) ||
        w.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesQuery;
    });
  }, [writeups, query, category]);

  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-mono-accent text-neutral-600">
            /
          </span>
          <input
            type="search"
            placeholder="Search write-ups, tags, techniques..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-8 pr-4 py-3 rounded-xl bg-neutral-950/80 border border-white/[0.08] text-white placeholder:text-neutral-600 focus:outline-none focus:border-blue-500/40 focus:ring-1 focus:ring-blue-500/20 transition-all"
            aria-label="Search write-ups"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={cn(
                "px-4 py-2 text-sm rounded-xl border transition-all duration-300",
                category === cat
                  ? "bg-white/[0.08] border-white/[0.14] text-white"
                  : "border-white/[0.06] text-neutral-500 hover:text-neutral-300 hover:border-white/[0.1]"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <p className="text-mono-accent mb-6">
        {filtered.length} result{filtered.length !== 1 ? "s" : ""}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((writeup) => (
          <Link
            key={writeup.slug}
            href={`/writeups/${writeup.slug}`}
            className="group surface-interactive rounded-2xl p-6 flex flex-col h-full hover:border-cyan-500/20"
          >
            <div className="flex items-start justify-between gap-3 mb-4">
              <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                {writeup.title}
              </h3>
              <span className="text-mono-accent shrink-0 tabular-nums">
                {estimateReadMinutes(writeup.description)}m
              </span>
            </div>
            <p className="text-sm text-neutral-500 leading-relaxed flex-1 mb-4">
              {writeup.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="success">{writeup.category}</Badge>
              {writeup.difficulty && (
                <Badge variant="accent">{writeup.difficulty}</Badge>
              )}
            </div>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {writeup.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-neutral-600 font-mono"
                >
                  #{tag.replace(/\s+/g, "")}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between text-xs text-neutral-600 mt-auto pt-4 border-t border-white/[0.04]">
              <time dateTime={writeup.date}>{writeup.date}</time>
              <span className="text-cyan-500/80 group-hover:text-cyan-400 transition-colors">
                Read →
              </span>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-neutral-500 py-12">
          No write-ups match your search.
        </p>
      )}
    </div>
  );
}
