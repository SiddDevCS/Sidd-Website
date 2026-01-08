import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me | Siddharth Sehgal',
  description: 'Learn about Siddharth Sehgal - A passionate developer focused on mobile apps, web development, and cybersecurity. Discover my journey in tech and creative pursuits.',
  openGraph: {
    title: 'About Me | Siddharth Sehgal',
    description: 'Learn about Siddharth Sehgal - A passionate developer focused on mobile apps, web development, and cybersecurity. Discover my journey in tech and creative pursuits.',
  },
};

export default function About() {
  return (
    <section className="w-full max-w-3xl mx-auto flex flex-col items-center pt-16 pb-16 animate-fadeInUp">
      <div className="w-full glass-dark rounded-3xl shadow-2xl p-8 md:p-12">
        <h1 className="text-4xl font-bold mb-10 text-center text-gradient">About Me</h1>
        
        {/* Introduction */}
        <div className="glass-card rounded-xl p-6 mb-8 hover:border-blue-500/20 transition-colors">
          <h2 className="text-xl font-semibold mb-4 text-gradient-blue">Hey, I&apos;m Siddharth!</h2>
          <p className="text-neutral-400 leading-relaxed">
            I&apos;m really into tech, creativity, and figuring out how things work. 
            I remember making my first game with Unity Game Engine in 2024, and I&apos;ve been hooked to developing ever since.
            In 2025, I discovered the world of mobile app development and I&apos;ve been building apps ever since.
          </p>
        </div>

        {/* Tech & Development */}
        <div className="glass-card rounded-xl p-6 mb-8 hover:border-blue-500/20 transition-colors">
          <h2 className="text-xl font-semibold mb-4 text-gradient-blue">Tech & Development</h2>
          <div className="space-y-4 text-neutral-400 leading-relaxed">
            <p>
              I love experimenting with new tech, whether that&apos;s diving into a new programming language, 
              building apps, or just playing around with different tools to see what I can create. I&apos;ve built 
              a few apps like TripCraft and StudieBuddie, which are focused on solving real problems in 
              simple ways.
              <br />
              <br />
              I&apos;m also really into cybersecurity, and I regularly do CTFs (Capture the Flag challenges), 
              learn about different types of vulnerabilities, and try to understand how systems can be broken. And 
              more importantly, how to protect them.
            </p>
          </div>
        </div>

        {/* Creative Side */}
        <div className="glass-card rounded-xl p-6 mb-8 hover:border-blue-500/20 transition-colors">
          <h2 className="text-xl font-semibold mb-4 text-gradient-blue">Creative Side</h2>
          <p className="text-neutral-400 mb-4 leading-relaxed">
            Outside of tech, I also enjoy being creative in other ways:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start space-x-3 text-neutral-400">
              <span className="text-blue-400 mt-1">→</span>
              <span className="leading-relaxed">
                <span className="text-blue-400/90 font-medium">Photography</span> – I like capturing cool moments 
                and perspectives, telling stories through visuals.
              </span>
            </li>
            <li className="flex items-start space-x-3 text-neutral-400">
              <span className="text-blue-400 mt-1">→</span>
              <span className="leading-relaxed">
                <span className="text-blue-400/90 font-medium">Music Production</span> – I use Logic Pro to make 
                beats and experiment with sounds. It&apos;s my creative outlet and a fun way to switch things up from coding.
              </span>
            </li>
          </ul>
        </div>

        {/* How I Work (not neccesary)
        <div className="glass-card rounded-xl p-6 hover:border-blue-500/20 transition-colors">
          <h2 className="text-xl font-semibold mb-4 text-gradient-blue">How I Work</h2>
          <p className="text-neutral-400 leading-relaxed">
            I&apos;m a big believer in learning by doing. Whether I&apos;m working on an app, solving a CTF, editing 
            a photo, or building a beat, I like to just jump in, try things out, and figure stuff out along 
            the way. That mix of tech and creativity helps me think differently and come up with ideas that 
            feel both practical and personal.
          </p>
        </div>
        */}
      </div>
    </section>
  );
} 