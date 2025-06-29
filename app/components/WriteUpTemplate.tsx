"use client";

import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

interface WriteUpTemplateProps {
  title: string;
  category: string;
  difficulty?: string;
  children: React.ReactNode;
}

export default function WriteUpTemplate({ title, category, difficulty, children }: WriteUpTemplateProps) {
  return (
    <section className="w-full max-w-4xl mx-auto flex flex-col items-start pt-16 pb-16 animate-fadeInUp px-4">
      <Link 
        href="/writeups"
        className="flex items-center space-x-2 text-neutral-400 hover:text-green-400 transition-colors mb-8 group"
      >
        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
        <span>Back to Write-ups</span>
      </Link>

      <div className="w-full glass-dark rounded-3xl shadow-2xl p-8 md:p-12">
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <h1 className="text-4xl font-bold text-gradient-green">
            {title}
          </h1>
          <div className="flex gap-2">
            <span className="px-3 py-1 text-sm rounded-full bg-green-500/10 text-green-400">
              {category}
            </span>
            {difficulty && (
              <span className="px-3 py-1 text-sm rounded-full bg-green-500/10 text-green-400">
                {difficulty}
              </span>
            )}
          </div>
        </div>

        <div className="prose prose-invert prose-green max-w-none">
          {children}
        </div>
      </div>
    </section>
  );
} 