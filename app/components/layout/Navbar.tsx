"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import { cn } from "@/app/lib/cn";
import Container from "@/app/components/ui/Container";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Journey", path: "/journey" },
  { name: "Work", path: "/portfolio" },
  { name: "Write-ups", path: "/writeups" },
  { name: "CTF", path: "/ctfs" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 12);
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "py-3 bg-[#030303]/80 backdrop-blur-xl border-b border-white/[0.06]"
          : "py-5 bg-transparent"
      )}
    >
      <Container>
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="group flex items-center gap-2 text-sm font-medium text-white"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-40" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
            </span>
            <span className="hidden sm:inline tracking-tight">Siddharth Sehgal</span>
            <span className="sm:hidden tracking-tight">SS</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Main">
            {navItems.map((item) => {
              const active = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={cn(
                    "relative px-3.5 py-2 text-sm rounded-lg transition-colors duration-300",
                    active
                      ? "text-white"
                      : "text-neutral-500 hover:text-neutral-200"
                  )}
                >
                  {item.name}
                  {active && (
                    <span className="absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/writeups"
              className="text-sm text-neutral-500 hover:text-white transition-colors duration-300"
            >
              Research
            </Link>
            <Link
              href="https://github.com/SiddDevCS"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-4 py-2 rounded-xl bg-white text-black font-medium hover:bg-neutral-200 transition-colors duration-300"
            >
              GitHub
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-neutral-400 hover:text-white transition-colors"
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span
                className={cn(
                  "block h-px w-full bg-current transition-transform duration-300",
                  isOpen && "rotate-45 translate-y-[7px]"
                )}
              />
              <span
                className={cn(
                  "block h-px w-full bg-current transition-opacity duration-300",
                  isOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "block h-px w-full bg-current transition-transform duration-300",
                  isOpen && "-rotate-45 -translate-y-[7px]"
                )}
              />
            </div>
          </button>
        </div>

        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 ease-out",
            isOpen ? "max-h-[420px] opacity-100 mt-4" : "max-h-0 opacity-0"
          )}
        >
          <nav className="surface-elevated rounded-2xl p-2 flex flex-col gap-0.5" aria-label="Mobile">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "px-4 py-3 text-sm rounded-xl transition-colors",
                  pathname === item.path
                    ? "text-white bg-white/[0.06]"
                    : "text-neutral-400 hover:text-white hover:bg-white/[0.04]"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="https://github.com/SiddDevCS"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 mt-2 mb-1 py-3 text-center text-sm font-medium rounded-xl bg-white text-black"
            >
              GitHub →
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}
