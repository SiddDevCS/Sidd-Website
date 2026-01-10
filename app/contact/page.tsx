import React from 'react';
import type { Metadata } from 'next';
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

export const metadata: Metadata = {
  title: 'Contact | Siddharth Sehgal',
  description: 'Get in touch with Siddharth Sehgal. Reach out for collaboration opportunities, project inquiries, or just to connect.',
  alternates: {
    canonical: 'https://siddsehgal.com/contact',
  },
  openGraph: {
    title: 'Contact | Siddharth Sehgal',
    description: 'Get in touch with Siddharth Sehgal. Reach out for collaboration opportunities, project inquiries, or just to connect.',
    url: 'https://siddsehgal.com/contact',
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
    title: 'Contact | Siddharth Sehgal',
    description: 'Get in touch with Siddharth Sehgal. Reach out for collaboration opportunities, project inquiries, or just to connect.',
    images: ['/images/Sidd1.webp'],
    creator: '@SiddDevTech',
  },
};

export default function Contact() {
  return (
    <section className="w-full max-w-3xl mx-auto px-6 pt-20 pb-24 animate-fadeInUp">
      <div className="w-full bg-zinc-900/50 border border-zinc-700 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12">
        <h1 className="text-5xl font-extrabold mb-6 text-center text-gradient bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          Contact Me
        </h1>

        <p className="text-neutral-300 text-lg text-center mb-6">
          Interested in working together or just want to say hi?
        </p>

        <div className="bg-zinc-800/50 rounded-xl p-6 text-center border border-zinc-700">
          <p className="text-neutral-400 text-md leading-relaxed">
            Email me at <br />
            <a
              href="mailto:siddnative@gmail.com"
              className="text-blue-400 hover:underline break-all"
            >
              siddnative@gmail.com
            </a>
            <br /><br />
            Or drop a DM on LinkedIn!
          </p>
        </div>

        <div className="flex justify-center space-x-6 mt-10 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <a
            href="https://www.linkedin.com/in/siddsehgal/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-blue-400 transition-transform duration-300 hover:scale-110"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://github.com/SiddDevCS"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition-transform duration-300 hover:scale-110"
            aria-label="GitHub Profile"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.youtube.com/@SiddDevTech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-red-500 transition-transform duration-300 hover:scale-110"
            aria-label="YouTube Channel"
          >
            <FaYoutube size={30} />
          </a>
        </div>
      </div>
    </section>
  );
}
