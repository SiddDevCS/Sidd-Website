import React from 'react';
import type { Metadata } from 'next';

export const revalidate = 3600; // Revalidate every hour

export const metadata: Metadata = {
  title: 'Portfolio | Sidd Sehgal',
  description:
    'View Sidd Sehgal\'s portfolio including projects like TripCraft, StudieBuddie, certifications, and professional experience in cybersecurity and software development.',
  openGraph: {
    title: 'Portfolio | Sidd Sehgal',
    description:
      'View Sidd Sehgal\'s portfolio including projects like TripCraft, StudieBuddie, certifications, and professional experience in cybersecurity and software development.',
  },
};

export default function Portfolio() {
  return (
    <section className="w-full max-w-6xl mx-auto flex flex-col items-center pt-16 pb-16 animate-fadeInUp px-4">
      <div className="w-full glass-dark rounded-3xl shadow-2xl p-8 md:p-12">
        <h1 className="text-4xl font-bold mb-8 text-center text-gradient">Portfolio</h1>
        
        <div className="glass-card rounded-xl p-4 overflow-hidden">
          <iframe
            src="/documents/new-portfolio-sidd-2026.pdf"
            className="w-full h-[800px] md:h-[1000px] border-0 rounded-lg"
            title="Sidd Sehgal Portfolio"
          />
        </div>
      </div>
    </section>
  );
}