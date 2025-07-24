import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CTF Competitions | Sidd Sehgal',
  description: 'My journey through Capture The Flag competitions including PicoCTF 2025, Hack The System Bug Bounty CTF, L3akCTF 2025, and DownUnderCTF 2025. Track my progress and achievements in cybersecurity challenges.',
  keywords: [
    'CTF',
    'Capture The Flag',
    'PicoCTF 2025',
    'Hack The System',
    'Bug Bounty CTF',
    'L3akCTF 2025',
    'DownUnderCTF 2025',
    'Cybersecurity',
    'Security Competitions',
    'S1DD3CATED',
    'CyberTeam',
    'Web Exploitation',
    'Binary Exploitation',
    'Cryptography',
    'OSINT',
    'AI Prompt Injection',
    'SSTI',
    'Security Challenges',
    'CTF Rankings',
    'Cybersecurity Skills'
  ],
  authors: [{ name: 'Sidd Sehgal' }],
  creator: 'Sidd Sehgal',
  publisher: 'Sidd Sehgal',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://siddsehgal.com'),
  openGraph: {
    title: 'CTF Competitions | Sidd Sehgal',
    description: 'My journey through Capture The Flag competitions including PicoCTF 2025, Hack The System Bug Bounty CTF, L3akCTF 2025, and DownUnderCTF 2025.',
    url: 'https://siddsehgal.com/ctfs',
    siteName: "Sidd Sehgal's Portfolio",
    images: [
      {
        url: '/images/ctf-images/stats-sidddev-pico.png',
        width: 600,
        height: 400,
        alt: 'Sidd Sehgal CTF Statistics and Achievements',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CTF Competitions | Sidd Sehgal',
    description: 'My journey through Capture The Flag competitions including PicoCTF 2025, Hack The System Bug Bounty CTF, L3akCTF 2025, and DownUnderCTF 2025.',
    images: ['/images/ctf-images/stats-sidddev-pico.png'],
    creator: '@SiddDevTech',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://siddsehgal.com/ctfs',
  },
};

interface CTFEntry {
  id: number;
  name: string;
  date: string;
  teamName: string;
  teamLink: string;
  placement: string;
  totalTeams: number;
  description: string;
  images: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }[];
  categories: string[];
  solo: boolean;
}

const ctfData: CTFEntry[] = [
  {
    id: 4,
    name: 'DownUnderCTF 2025',
    date: 'July 2025',
    teamName: 'S1DD3CATED',
    teamLink: 'https://ctftime.org/team/392378',
    placement: '622nd',
    totalTeams: 1667,
    description: 'I solved various challenges in specifically: AI which was prompt injection, web exploitation and other complex categories. This was a great CTF, I enjoyed playing this a lot.',
    images: [
      {
        src: '/images/ctf-images/image-scoreboard-ductf.png',
        alt: 'DownUnderCTF 2025 Scoreboard showing S1DD3CATED team',
        width: 800,
        height: 400
      },
      {
        src: '/images/ctf-images/S1DD3CATED-certificate.png',
        alt: 'S1DD3CATED Certificate for DownUnderCTF 2025',
        width: 600,
        height: 400
      }
    ],
    categories: ['AI/Prompt Injection', 'Web Exploitation', 'Complex Challenges'],
    solo: true
  },
  {
    id: 3,
    name: 'L3akCTF 2025',
    date: 'July 2025',
    teamName: 'S1DD3CATED',
    teamLink: 'https://ctftime.org/team/392378',
    placement: '509th',
    totalTeams: 1587,
    description: 'I solved various challenges in categories like: OSINT, web exploitation, cryptography and more. This was a very fun but hard CTF since there were 60+ challenges and I was solo.',
    images: [
      {
        src: '/images/ctf-images/image-scoreboard-l3ak.png',
        alt: 'L3akCTF 2025 Scoreboard showing S1DD3CATED team name',
        width: 800,
        height: 400
      }
    ],
    categories: ['OSINT', 'Web Exploitation', 'Cryptography'],
    solo: true
  },
  {
    id: 2,
    name: 'Hack The System - Bug Bounty CTF',
    date: 'June 2025',
    teamName: 'S1DD3CATED',
    teamLink: 'https://ctftime.org/team/392378',
    placement: '242nd',
    totalTeams: 1323,
    description: 'I solved 1 very hard bug bounty challenge, it was a web application with certificates which were generated, and were vulnerable to SSTI.',
    images: [
      {
        src: '/images/ctf-images/certificate-bugbountyctf.png',
        alt: 'Bug Bounty CTF Certificate for S1DD3CATED',
        width: 600,
        height: 400
      }
    ],
    categories: ['Bug Bounty', 'Web Exploitation', 'SSTI'],
    solo: true
  },
  {
    id: 1,
    name: 'PicoCTF 2025',
    date: 'March 2025',
    teamName: 'cyberteam',
    teamLink: 'https://play.picoctf.org/teams/13151',
    placement: '355th',
    totalTeams: 10460,
    description: 'I completed several challenges in the following categories: binary exploitation, cryptography, general skills and web exploitation. This first CTF was a great learning for me and was very fun to experience.',
    images: [
      {
        src: '/images/ctf-images/stats-sidddev-pico.png',
        alt: 'SiddDev PicoCTF 2025 Statistics',
        width: 600,
        height: 400
      },
      {
        src: '/images/ctf-images/stats-team-pico.png',
        alt: 'CyberTeam PicoCTF 2025 Team Statistics',
        width: 600,
        height: 400
      }
    ],
    categories: ['Binary Exploitation', 'Cryptography', 'General Skills', 'Web Exploitation'],
    solo: false
  }
];

export default function CTFs() {
  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "CTF Competitions | Sidd Sehgal",
    "description": "My journey through Capture The Flag competitions including PicoCTF 2025, Hack The System Bug Bounty CTF, L3akCTF 2025, and DownUnderCTF 2025.",
    "author": {
      "@type": "Person",
      "name": "Sidd Sehgal",
      "url": "https://siddsehgal.com"
    },
    "mainEntity": {
      "@type": "ItemList",
      "name": "CTF Competitions",
      "numberOfItems": ctfData.length,
      "itemListElement": ctfData.map((ctf, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Event",
          "name": ctf.name,
          "description": ctf.description,
          "startDate": ctf.date,
          "organizer": {
            "@type": "Organization",
            "name": ctf.teamName
          },
          "location": {
            "@type": "VirtualLocation",
            "url": ctf.teamLink
          }
        }
      }))
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="w-full max-w-6xl mx-auto flex flex-col items-center pt-16 pb-16 animate-fadeInUp px-4">
        <article className="w-full glass-dark rounded-3xl shadow-2xl p-8 md:p-12">
          <header>
            <h1 className="text-4xl font-bold mb-8 text-center text-gradient">
              CTF Competitions
            </h1>
          </header>

          {/* What are CTFs? Section */}
          <section className="mb-10">
            <div className="glass-card rounded-xl p-6 md:p-8 mx-auto max-w-2xl text-center border-l-4 border-blue-500/30">
              <h2 className="text-2xl font-semibold text-blue-400 mb-2">What are CTFs?</h2>
              <p className="text-neutral-300 mb-2">
                <strong>CTFs</strong> (Capture The Flag) are cybersecurity competitions where you solve challenges to find hidden &quot;flags&quot; and earn points.
              </p>
              <p className="text-neutral-400">
                Here you can see my progress and achievements in major CTFs.
              </p>
            </div>
          </section>
          
          <p className="text-lg text-neutral-400 mb-10 text-center">
            My journey through Capture The Flag competitions - from my first experience to challenging solo competitions
          </p>

          <section className="space-y-12">
            {ctfData.map((ctf) => (
              <article key={ctf.id} className="glass-card rounded-xl p-8 hover:border-blue-500/20 transition-all duration-300">
                {/* Header */}
                <header className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-2xl font-bold text-blue-400">{ctf.name}</h2>
                      {ctf.solo && (
                        <span className="px-3 py-1 text-xs rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20">
                          Solo
                        </span>
                      )}
                    </div>
                    <time className="text-neutral-400 text-sm" dateTime={ctf.date}>{ctf.date}</time>
                  </div>
                  
                  <div className="mt-4 lg:mt-0 lg:text-right">
                    <div className="text-2xl font-bold text-green-400 mb-1">
                      {ctf.placement}
                    </div>
                    <div className="text-neutral-500 text-sm">
                      out of {ctf.totalTeams.toLocaleString()} teams
                    </div>
                  </div>
                </header>

                {/* Team Info */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-neutral-400">Team:</span>
                    <Link 
                      href={ctf.teamLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
                    >
                      {ctf.teamName}
                    </Link>
                    {ctf.solo && (
                      <span className="text-neutral-500 text-sm">(Solo Team)</span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <p className="text-neutral-300 leading-relaxed">
                    {ctf.description}
                  </p>
                </div>

                {/* Categories */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Categories Explored</h3>
                  <div className="flex flex-wrap gap-2">
                    {ctf.categories.map((category, catIndex) => (
                      <span 
                        key={catIndex}
                        className="px-3 py-1 text-sm rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Images */}
                {ctf.images.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white mb-3">Achievements & Statistics</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {ctf.images.map((image, imgIndex) => (
                        <figure key={imgIndex} className="relative group">
                          <div className="rounded-lg overflow-hidden border border-neutral-800/50 group-hover:border-blue-500/30 transition-colors">
                            <Image
                              src={image.src}
                              alt={image.alt}
                              width={image.width}
                              height={image.height}
                              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                              loading="lazy"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          </div>
                          <figcaption className="sr-only">{image.alt}</figcaption>
                        </figure>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            ))}
          </section>

          {/* Footer Stats */}
          <footer className="mt-12 pt-8 border-t border-neutral-800/50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="glass-card rounded-xl p-6">
                <div className="text-3xl font-bold text-blue-400 mb-2">{ctfData.length}</div>
                <div className="text-neutral-400">CTFs Completed</div>
              </div>
              <div className="glass-card rounded-xl p-6">
                <div className="text-3xl font-bold text-green-400 mb-2">3</div>
                <div className="text-neutral-400">Solo Competitions</div>
              </div>
              <div className="glass-card rounded-xl p-6">
                <div className="text-3xl font-bold text-purple-400 mb-2">15,137</div>
                <div className="text-neutral-400">Total Teams Competed Against</div>
              </div>
            </div>
          </footer>
        </article>
      </main>
    </>
  );
} 