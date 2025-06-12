import React from 'react';
import type { Metadata } from 'next';
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

export const metadata: Metadata = {
  title: 'Contact | Sidd Sehgal',
  description: 'Get in touch with Sidd Sehgal. Reach out for collaboration opportunities, project inquiries, or just to connect.',
  openGraph: {
    title: 'Contact | Sidd Sehgal',
    description: 'Get in touch with Sidd Sehgal. Reach out for collaboration opportunities, project inquiries, or just to connect.',
  },
};

export default function Contact() {
  return (
    <section className="w-full max-w-3xl mx-auto flex flex-col items-center pt-16 pb-16 animate-fadeInUp">
      <div className="w-full glass-dark rounded-3xl shadow-2xl p-8 md:p-12">
        <h1 className="text-4xl font-bold mb-6 text-center text-gradient">Contact</h1>
        <div className="glass-card rounded-xl p-6 text-center">
          <p className="text-neutral-400 text-lg">
            You can contact me at: siddnative@gmail.com<br></br>
            Or  just give me a DM on linkedin!
          </p>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="flex space-x-6 mb-10 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
        <a
          href="https://www.linkedin.com/in/siddsehgal/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-400 hover:text-blue-400 transition-colors duration-300"
          aria-label="LinkedIn Profile"
        >
        <FaLinkedin size={28} />
          </a>
          <a
            href="https://github.com/SiddDevCS"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-blue-400 transition-colors duration-300"
            aria-label="GitHub Profile"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://www.youtube.com/@SiddDevTech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-blue-400 transition-colors duration-300"
            aria-label="YouTube Channel"
          >
            <FaYoutube size={28} />
          </a>
        </div>
    </section>
  );
} 