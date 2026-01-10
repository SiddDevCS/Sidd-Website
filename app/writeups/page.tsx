import Link from "next/link";
import type { Metadata } from 'next';
import { getAllWriteUps } from '../data/writeups';

export const revalidate = 86400; // Revalidate daily

export const metadata: Metadata = {
  title: 'Write-ups | Hack The Box & Bug Bounty CTF Solutions',
  description: 'Detailed write-ups and CTF solutions from Hack The Box machines and bug bounty challenges. Learn penetration testing, web exploitation, and cybersecurity techniques.',
  alternates: {
    canonical: 'https://siddharthsehgal.com/writeups',
  },
  openGraph: {
    title: 'Write-ups | Hack The Box & Bug Bounty CTF Solutions',
    description: 'Detailed write-ups and CTF solutions from Hack The Box machines and bug bounty challenges. Learn penetration testing, web exploitation, and cybersecurity techniques.',
    url: 'https://siddharthsehgal.com/writeups',
    siteName: "Siddharth Sehgal's Portfolio",
    images: [
      {
        url: '/images/Sidd1.webp',
        width: 1200,
        height: 630,
        alt: 'Siddharth Sehgal - CTF Write-ups and Cybersecurity Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Write-ups | Hack The Box & Bug Bounty CTF Solutions',
    description: 'Detailed write-ups and CTF solutions from Hack The Box machines and bug bounty challenges. Learn penetration testing, web exploitation, and cybersecurity techniques.',
    images: ['/images/Sidd1.webp'],
    creator: '@SiddDevTech',
  },
};

export default function WriteUps() {
  const writeups = getAllWriteUps();

  return (
    <section className="w-full max-w-4xl mx-auto flex flex-col items-center pt-16 pb-16 animate-fadeInUp px-4">
      <div className="w-full glass-dark rounded-3xl shadow-2xl p-8 md:p-12">
        <h1 className="text-4xl font-bold mb-8 text-center text-gradient-green">
          Write-ups
        </h1>

        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mb-6 text-center">
          <p className="text-blue-300 text-sm">
            These were all active machines I played during Season 8 of Hack The Box (May-August 2025).
          </p>
        </div>

        <p className="text-lg text-neutral-400 mb-6 text-center">
          My journey through Hack The Box machines and bug bounty challenges
        </p>
        
        {/* Medium Button */}
        <div className="text-center mb-10">
          <div className="glass-card rounded-2xl p-6 border-2 border-green-500/20 hover:border-green-500/40 transition-all duration-300 group">
            <h3 className="text-xl font-bold text-white mb-2">More Write-ups on Medium</h3>
            <p className="text-neutral-400 mb-6 text-sm leading-relaxed">
              Most of my Hack The Box machine write-ups are available on my Medium profile with detailed explanations and step-by-step guides.
            </p>
            <a
              href="https://medium.com/@siddnative"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <span>Visit Medium</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {writeups.map((writeup) => (
            <Link 
              key={writeup.slug} 
              href={`/writeups/${writeup.slug}`}
              className="block group h-full"
            >
              <div className="glass-card rounded-xl p-6 transition-all duration-300 hover:border-green-500/20 group-hover:scale-[1.02] h-full flex flex-col">
                <div className="flex flex-col space-y-4 flex-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-green-400 group-hover:text-green-300 transition-colors">
                        {writeup.title}
                      </h3>
                    </div>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 text-sm rounded-full bg-green-500/10 text-green-400">
                        {writeup.category}
                      </span>
                      {writeup.difficulty && (
                        <span className="px-3 py-1 text-sm rounded-full bg-blue-500/10 text-blue-400">
                          {writeup.difficulty}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-neutral-400 text-sm leading-relaxed flex-1">
                    {writeup.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {writeup.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-2 py-1 text-xs rounded-full bg-neutral-800/50 text-neutral-400"
                      >
                        {tag}
                      </span>
                    ))}
                    {writeup.tags.length > 3 && (
                      <span className="px-2 py-1 text-xs rounded-full bg-neutral-800/50 text-neutral-400">
                        +{writeup.tags.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-neutral-500 mt-auto">
                    <span>{writeup.date}</span>
                    <span className="group-hover:text-green-400 transition-colors">Read more →</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="w-16 h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-10 mx-auto"></div>


      </div>
    </section>
  );
}

