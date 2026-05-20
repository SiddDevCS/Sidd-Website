"use client";

import { useEffect, useState } from "react";

export default function SiteBackground() {
  const [mouse, setMouse] = useState({ x: 50, y: 30 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[#030303]" />
      <div className="absolute inset-0 grid-pattern opacity-60" />
      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          background: `radial-gradient(600px circle at ${mouse.x}% ${mouse.y}%, rgba(59, 130, 246, 0.08), transparent 50%)`,
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/[0.07] blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-cyan-500/[0.04] blur-[100px] rounded-full" />
      <div className="absolute inset-0 noise-overlay" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
    </div>
  );
}
