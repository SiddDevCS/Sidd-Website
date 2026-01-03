import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Experience | Sidd Sehgal',
  description: 'Learn about Sidd Sehgal\'s professional experience, skills, and background in software development and cybersecurity.',
  openGraph: {
    title: 'Experience | Sidd Sehgal',
    description: 'Learn about Sidd Sehgal\'s professional experience, skills, and background in software development and cybersecurity.',
  },
};

export default function Experience() {
  return (
    <section className="w-full max-w-3xl mx-auto flex flex-col items-center pt-16 pb-16 animate-fadeInUp">
      <div className="w-full glass-dark rounded-3xl shadow-2xl p-8 md:p-12">
        <h1 className="text-4xl font-bold mb-10 text-center text-gradient">Experience</h1>
        
        <div className="glass-card rounded-xl p-6 text-center">
          <p className="text-neutral-400 text-lg">
            Experience details coming soon...
          </p>
        </div>
      </div>
    </section>
  );
}
