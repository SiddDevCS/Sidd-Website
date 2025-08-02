"use client";

import { useState, useEffect } from 'react';
import PasswordProtection from './PasswordProtection';

interface ProtectedWriteUpProps {
  slug: string;
  title: string;
  children: React.ReactNode;
}

const PROTECTED_SLUGS = ['nocturnal', 'outbound'];

export default function ProtectedWriteUp({ slug, title, children }: ProtectedWriteUpProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Check if this write-up requires password protection
    if (PROTECTED_SLUGS.includes(slug)) {
      const authStatus = sessionStorage.getItem(`writeup-auth-${slug}`);
      setIsAuthenticated(authStatus === 'true');
    } else {
      // Non-protected write-ups are always accessible
      setIsAuthenticated(true);
    }
  }, [slug]);

  // Show loading state while checking authentication
  if (!isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-neutral-400">Loading...</div>
      </div>
    );
  }

  // If not authenticated and this is a protected write-up, show password form
  if (!isAuthenticated && PROTECTED_SLUGS.includes(slug)) {
    return (
      <PasswordProtection
        slug={slug}
        title={title}
        onSuccess={() => setIsAuthenticated(true)}
      />
    );
  }

  // If authenticated or not protected, show the write-up content
  return <>{children}</>;
} 