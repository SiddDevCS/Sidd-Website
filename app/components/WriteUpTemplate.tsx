"use client";

import Link from "next/link";

interface WriteUpTemplateProps {
  title: string;
  category: string;
  difficulty?: string;
  children: React.ReactNode;
}

export default function WriteUpTemplate({
  title,
  category,
  difficulty,
  children,
}: WriteUpTemplateProps) {
  return (
    <article className="w-full max-w-4xl mx-auto px-4 sm:px-6 pt-28 pb-20">
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex flex-wrap items-center gap-2 text-mono-accent text-sm">
          <li>
            <Link href="/" className="hover:text-white transition-colors">
              home
            </Link>
          </li>
          <li className="text-neutral-700">/</li>
          <li>
            <Link href="/writeups" className="hover:text-white transition-colors">
              write-ups
            </Link>
          </li>
          <li className="text-neutral-700">/</li>
          <li className="text-neutral-400" aria-current="page">
            {title.toLowerCase()}
          </li>
        </ol>
      </nav>

      <header className="mb-10 pb-8 border-b border-white/[0.06]">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="inline-flex items-center px-2 py-1 rounded-md bg-cyan-500/10 text-cyan-400 text-xs font-mono border border-cyan-500/20">
            {category}
          </span>
          {difficulty && (
            <span className="inline-flex items-center px-2 py-1 rounded-md bg-blue-500/10 text-blue-400 text-xs font-mono border border-blue-500/20">
              {difficulty}
            </span>
          )}
        </div>
        <h1 className="text-headline text-gradient mb-4">{title}</h1>
        <Link
          href="/writeups"
          className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-cyan-400 transition-colors"
        >
          ← All write-ups
        </Link>
      </header>

      <div className="surface-elevated rounded-xl p-4 mb-8 border-cyan-500/10">
        <p className="text-sm text-neutral-500 text-center">
          More walkthroughs on{" "}
          <a
            href="https://medium.com/@siddnative"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            Medium
          </a>
        </p>
      </div>

      <div className="prose-writeup">{children}</div>
    </article>
  );
}
