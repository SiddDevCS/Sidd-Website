import React from 'react';
import type { Metadata } from 'next';

export const revalidate = 3600; // Revalidate every hour

export const metadata: Metadata = {
  title: 'Portfolio | Siddharth Sehgal',
  description:
    'View Siddharth Sehgal\'s portfolio including projects like TripCraft, StudieBuddie, certifications, and professional experience in cybersecurity and software development.',
  alternates: {
    canonical: 'https://siddsehgal.com/portfolio',
  },
  openGraph: {
    title: 'Portfolio | Siddharth Sehgal',
    description:
      'View Siddharth Sehgal\'s portfolio including projects like TripCraft, StudieBuddie, certifications, and professional experience in cybersecurity and software development.',
    url: 'https://siddsehgal.com/portfolio',
    siteName: "Siddharth Sehgal's Portfolio",
    images: [
      {
        url: '/images/Sidd1.webp',
        width: 1200,
        height: 630,
        alt: 'Siddharth Sehgal - Software Developer and Cybersecurity Enthusiast',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | Siddharth Sehgal',
    description:
      'View Siddharth Sehgal\'s portfolio including projects like TripCraft, StudieBuddie, certifications, and professional experience in cybersecurity and software development.',
    images: ['/images/Sidd1.webp'],
    creator: '@SiddDevTech',
  },
};

export default function Portfolio() {
  return (
    <section className="w-full max-w-6xl mx-auto flex flex-col items-center pt-16 pb-16 animate-fadeInUp px-4">
      <div className="w-full glass-dark rounded-3xl shadow-2xl p-8 md:p-12">
        <h1 className="text-4xl font-bold mb-8 text-center text-gradient">Portfolio</h1>
        
        <div className="glass-card rounded-xl p-4 overflow-hidden">
          <iframe
            src="/documents/Sidd Portfolio.pdf"
            className="w-full h-[800px] md:h-[1000px] border-0 rounded-lg"
            title="Siddharth Sehgal Portfolio"
          />
        </div>
      </div>
    </section>
  );
}