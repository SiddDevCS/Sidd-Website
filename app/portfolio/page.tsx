import React from 'react';
import type { Metadata } from 'next';

export const revalidate = 3600; // Revalidate every hour

export const metadata: Metadata = {
  title: 'Portfolio | Sidd Sehgal',
  description:
    'View my portfolio of projects including TripCraft, StudieBuddie, and other innovative applications. Featuring mobile apps, web development, and AI integration.',
  openGraph: {
    title: 'Portfolio | Sidd Sehgal',
    description:
      'View my portfolio of projects including TripCraft, StudieBuddie, and other innovative applications. Featuring mobile apps, web development, and AI integration.',
  },
};

export default function Portfolio() {
  return (
    <section className="w-full max-w-3xl mx-auto flex flex-col items-center pt-16 pb-16 animate-fadeInUp">
      <div className="w-full glass-dark rounded-3xl shadow-2xl p-8 md:p-12">
        <h1 className="text-4xl font-bold mb-6 text-center text-gradient">Portfolio</h1>
        <div className="glass-card rounded-xl p-6 text-center">
          <p className="text-neutral-400 text-lg mb-4">
            Want to see what I&apos;ve built? Check out my full portfolio PDF!
          </p>
          <a
            href="/documents/Portfolio1.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Sidd Sehgal's Portfolio PDF"
            className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
          >
            View Portfolio (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}

