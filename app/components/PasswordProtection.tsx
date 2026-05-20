"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
interface PasswordProtectionProps {
  slug: string;
  title: string;
  onSuccess: () => void;
}

const PROTECTED_WRITEUPS: Record<string, string> = {
  editor: "33bacc50e2fe9825bd79f90dd80e2c78edccadb3e956c52cdfdfeef5fd6d14d9",
  nocturnal: "09db7bb2533aed0610cd00949232b569314c04aa9f2bd9829d6ce99b27d75c52",
  outbound: "95a7040b0cf01bc45f0762c789d508b82a1e3167b67d1b6ce26d1ac0fc15b972",
  era: "9a47573c9a240940bb239c812d8ea2d21161baa5ddd7a092dfe0580e316a6aa0",
};

async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

export default function PasswordProtection({
  slug,
  title,
  onSuccess,
}: PasswordProtectionProps) {
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [attempts, setAttempts] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = sessionStorage.getItem(`writeup-auth-${slug}`);
    if (isAuthenticated === "true") {
      onSuccess();
    }
  }, [slug, onSuccess]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      if (attempts >= 5) {
        setError("Too many attempts. Please try again later.");
        setIsLoading(false);
        return;
      }

      const hashedPassword = await hashPassword(password);
      const expectedHash = PROTECTED_WRITEUPS[slug];

      if (hashedPassword === expectedHash) {
        sessionStorage.setItem(`writeup-auth-${slug}`, "true");
        onSuccess();
      } else {
        setAttempts((prev) => prev + 1);
        setError(`Incorrect password. Attempts remaining: ${5 - attempts - 1}`);
        setPassword("");
      }
    } catch {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 pt-24">
      <div className="w-full max-w-md surface-elevated rounded-2xl p-8 glow-accent">
        <div className="text-center mb-8">
          <p className="text-label text-cyan-400/80 mb-2">Restricted</p>
          <h1 className="text-xl font-semibold text-white mb-2">{title} write-up</h1>
          <p className="text-sm text-neutral-500">Password required to view</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="password"
              className="block text-mono-accent text-neutral-500 mb-2"
            >
              password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-neutral-950/80 border border-white/[0.08] text-white placeholder:text-neutral-600 focus:outline-none focus:border-blue-500/40 focus:ring-1 focus:ring-blue-500/20 transition-all font-mono text-sm"
              placeholder="••••••••"
              required
              disabled={isLoading}
              autoComplete="off"
            />
          </div>

          {error && (
            <p className="text-red-400/90 text-sm text-center font-mono">{error}</p>
          )}

          <button
            type="submit"
            disabled={isLoading || !password.trim()}
            className="w-full py-3 rounded-xl bg-white text-black font-medium hover:bg-neutral-200 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            {isLoading ? "Verifying…" : "Unlock"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={() => router.push("/writeups")}
            className="text-sm text-neutral-500 hover:text-white transition-colors"
          >
            ← Back to write-ups
          </button>
        </div>
      </div>
    </div>
  );
}
