import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Certifications | CompTIA Security+ & eJPT',
  description: 'View Siddharth Sehgal\'s professional certifications including CompTIA Security+ and eJPT (eLearnSecurity Junior Penetration Tester) certification.',
  alternates: {
    canonical: 'https://siddharthsehgal.com/certifications',
  },
  openGraph: {
    title: 'Certifications | CompTIA Security+ & eJPT',
    description: 'View Siddharth Sehgal\'s professional certifications including CompTIA Security+ and eJPT (eLearnSecurity Junior Penetration Tester) certification.',
    url: 'https://siddharthsehgal.com/certifications',
    siteName: "Siddharth Sehgal's Portfolio",
    images: [
      {
        url: '/images/Sidd1.webp',
        width: 1200,
        height: 630,
        alt: 'Siddharth Sehgal - Cybersecurity Certifications',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Certifications | CompTIA Security+ & eJPT',
    description: 'View Siddharth Sehgal\'s professional certifications including CompTIA Security+ and eJPT (eLearnSecurity Junior Penetration Tester) certification.',
    images: ['/images/Sidd1.webp'],
    creator: '@SiddDevTech',
  },
};

export default function Certifications() {
  return (
    <section className="w-full max-w-4xl mx-auto flex flex-col items-center pt-28 pb-20 px-4 sm:px-6">
      <header className="w-full mb-12 text-center max-w-2xl">
        <p className="text-label mb-3 text-blue-400/80">Credentials</p>
        <h1 className="text-headline text-gradient mb-4">Certifications</h1>
        <p className="text-subhead text-neutral-500">Validated offensive security and foundational knowledge.</p>
      </header>
      <div className="w-full space-y-8">
        
        {/* CompTIA Security+ Certificate */}
        <div className="surface-interactive rounded-2xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="relative w-64 h-40 rounded-lg overflow-hidden border border-neutral-700/50">
                <Image
                  src="/documents/CompTIA Security+ ce certificate-1.png"
                  alt="CompTIA Security+ ce Certificate"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-3 text-gradient-accent">CompTIA Security+ ce</h2>
              <p className="text-neutral-400 mb-4 leading-relaxed">
                Successfully obtained the CompTIA Security+ ce certification, demonstrating foundational knowledge 
                in cybersecurity concepts, risk management, and security operations. This certification validates 
                my understanding of core security principles and best practices.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                  ✓ Obtained
                </span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                  Cybersecurity
                </span>
                <span className="px-3 py-1 bg-neutral-500/20 text-neutral-400 rounded-full text-sm font-medium">
                  July 2025
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* eJPT Certificate */}
        <div className="surface-interactive rounded-2xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="relative w-64 h-40 rounded-lg overflow-hidden border border-neutral-700/50">
                <Image
                  src="/documents/Certified-eJPT-Sidd-Blur.png"
                  alt="eJPT Junior Penetration Tester Certificate"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-3 text-white">eLearnSecurity Junior Penetration Tester (eJPT)</h2>
              <p className="text-neutral-400 mb-4 leading-relaxed">
                Successfully obtained the eJPT certification from INE Security, demonstrating practical penetration testing 
                skills and hands-on experience with real-world scenarios. This certification validates my expertise in 
                ethical hacking, vulnerability assessment, and penetration testing methodologies.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                  ✓ Obtained
                </span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                  Penetration Testing
                </span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">
                  Ethical Hacking
                </span>
                <span className="px-3 py-1 bg-neutral-500/20 text-neutral-400 rounded-full text-sm font-medium">
                  November 2025
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
