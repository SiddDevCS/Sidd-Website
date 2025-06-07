import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Experience | Sidd Sehgal',
  description: 'Explore my experience in software development, mobile app creation, and cybersecurity projects. View my technical skills and achievements.',
  openGraph: {
    title: 'Experience | Sidd Sehgal',
    description: 'Explore my experience in software development, mobile app creation, and cybersecurity projects. View my technical skills and achievements.',
  },
};

export default function Experience() {
  return (
    <section className="w-full max-w-3xl mx-auto flex flex-col items-center pt-16 pb-16 animate-fadeInUp">
      <div className="w-full glass-dark rounded-3xl shadow-2xl p-8 md:p-12">
        <h1 className="text-4xl font-bold mb-6 text-center text-gradient">Experience</h1>
        <div className="glass-card rounded-xl p-6 text-center">
          <p className="text-neutral-400 text-lg">Coming Soon!</p>
        </div>
      </div>
    </section>
  );
} 