"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface PasswordProtectionProps {
  slug: string;
  title: string;
  onSuccess: () => void;
}

// Secure password hashes (using SHA-256 of the passwords)
const PROTECTED_WRITEUPS: Record<string, string> = {
  'nocturnal': '09db7bb2533aed0610cd00949232b569314c04aa9f2bd9829d6ce99b27d75c52', // Hash of "SiddPwnedNocturnal"
  'outbound': '95a7040b0cf01bc45f0762c789d508b82a1e3167b67d1b6ce26d1ac0fc15b972', // Hash of "SiddPwnedOutbound"
};

// Simple hash function (in production, use crypto.subtle.digest)
async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

export default function PasswordProtection({ slug, title, onSuccess }: PasswordProtectionProps) {
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [attempts, setAttempts] = useState(0);
  const router = useRouter();

  // Check if user is already authenticated
  useEffect(() => {
    const isAuthenticated = sessionStorage.getItem(`writeup-auth-${slug}`);
    if (isAuthenticated === 'true') {
      onSuccess();
    }
  }, [slug, onSuccess]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Rate limiting
      if (attempts >= 5) {
        setError('Too many attempts. Please try again later.');
        setIsLoading(false);
        return;
      }

      const hashedPassword = await hashPassword(password);
      const expectedHash = PROTECTED_WRITEUPS[slug];

      if (hashedPassword === expectedHash) {
        // Store authentication in session storage
        sessionStorage.setItem(`writeup-auth-${slug}`, 'true');
        onSuccess();
      } else {
        setAttempts(prev => prev + 1);
        setError(`Incorrect password. Attempts remaining: ${5 - attempts - 1}`);
        setPassword('');
      }
    } catch {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Removed unused handleLogout function

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="glass-dark rounded-2xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-white mb-2">
              {title} Write-up
            </h1>
            <p className="text-neutral-400">
              This write-up is password protected
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-neutral-300 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Enter password"
                required
                disabled={isLoading}
              />
            </div>

            {error && (
              <div className="text-red-400 text-sm text-center">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading || !password.trim()}
              className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 disabled:bg-neutral-700 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors duration-200"
            >
              {isLoading ? 'Verifying...' : 'Access Write-up'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => router.push('/writeups')}
              className="text-neutral-400 hover:text-neutral-200 text-sm transition-colors"
            >
              ← Back to Write-ups
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 