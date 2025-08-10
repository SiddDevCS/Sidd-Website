"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaLock, FaSignOutAlt } from "react-icons/fa";

interface WriteUpTemplateProps {
  title: string;
  category: string;
  difficulty?: string;
  children: React.ReactNode;
}

export default function WriteUpTemplate({ title, category, difficulty, children }: WriteUpTemplateProps) {
  const router = useRouter();
  const protectedSlugs = ['editor', 'nocturnal', 'code', 'outbound'];
  
  // Check if current write-up is protected by looking at the URL
  const isProtected = typeof window !== 'undefined' && protectedSlugs.some(slug => 
    window.location.pathname.includes(`/writeups/${slug}`)
  );

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      const currentSlug = window.location.pathname.split('/').pop();
      if (currentSlug && protectedSlugs.includes(currentSlug)) {
        sessionStorage.removeItem(`writeup-auth-${currentSlug}`);
        router.refresh();
      }
    }
  };

  return (
    <section className="w-full max-w-4xl mx-auto flex flex-col items-center pt-16 pb-16 animate-fadeInUp px-4">
      <div className="w-full glass-dark rounded-3xl shadow-2xl p-8 md:p-12">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-sm text-neutral-400">
            <li>
              <Link href="/" className="hover:text-blue-400 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <span className="text-neutral-600">/</span>
            </li>
            <li>
              <Link href="/writeups" className="hover:text-blue-400 transition-colors">
                Write-ups
              </Link>
            </li>
            <li>
              <span className="text-neutral-600">/</span>
            </li>
            <li className="text-neutral-300" aria-current="page">
              {title}
            </li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-wrap items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold text-gradient-green mb-2">
                {title}
              </h1>
              {isProtected && (
                <div className="flex items-center gap-2">
                  <FaLock className="text-yellow-400 text-sm" title="Password Protected" />
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-1 px-2 py-1 text-xs bg-red-500/10 text-red-400 rounded hover:bg-red-500/20 transition-colors"
                    title="Logout"
                  >
                    <FaSignOutAlt className="text-xs" />
                    Logout
                  </button>
                </div>
              )}
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1 text-sm rounded-full bg-green-500/10 text-green-400">
                {category}
              </span>
              {difficulty && (
                <span className="px-3 py-1 text-sm rounded-full bg-blue-500/10 text-blue-400">
                  {difficulty}
                </span>
              )}
            </div>
          </div>
          
          <Link
            href="/writeups"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Write-ups
          </Link>
        </header>

        {/* Content */}
        <article className="prose prose-invert max-w-none">
          {children}
        </article>
      </div>
    </section>
  );
} 