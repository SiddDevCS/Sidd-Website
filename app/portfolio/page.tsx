import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio | Sidd Sehgal',
  description: 'View my portfolio of projects including TripCraft, StudieBuddie, and other innovative applications. Featuring mobile apps, web development, and AI integration.',
  openGraph: {
    title: 'Portfolio | Sidd Sehgal',
    description: 'View my portfolio of projects including TripCraft, StudieBuddie, and other innovative applications. Featuring mobile apps, web development, and AI integration.',
  },
};

export default function Portfolio() {
  return (
    <section className="w-full max-w-3xl mx-auto flex flex-col items-center pt-16 pb-16 animate-fadeInUp">
      <div className="w-full glass-dark rounded-3xl shadow-2xl p-8 md:p-12">
        <h1 className="text-4xl font-bold mb-6 text-center text-gradient">Portfolio</h1>
        <div className="glass-card rounded-xl p-6 text-center">
          <p className="text-neutral-400 text-lg">Coming Soon!</p>
        </div>
      </div>
    </section>
  );
} 