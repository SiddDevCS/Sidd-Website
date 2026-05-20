import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CTF Competitions | Siddharth Sehgal',
  description: 'My journey through Capture The Flag competitions including picoCTF 2026 (CyLab), PicoCTF Mini, PicoCTF 2025, Hack The System Bug Bounty CTF, L3akCTF 2025, and DownUnderCTF 2025.',
  keywords: [
    'CTF',
    'Capture The Flag',
    'picoCTF 2026',
    'CyLab Security Academy',
    'PicoCTF Mini',
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
  authors: [{ name: 'Siddharth Sehgal' }],
  creator: 'Siddharth Sehgal',
  publisher: 'Siddharth Sehgal',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://siddharthsehgal.com'),
  openGraph: {
    title: 'CTF Competitions | Siddharth Sehgal',
    description: 'My journey through Capture The Flag competitions including picoCTF 2026 (CyLab), PicoCTF Mini, and more.',
    url: 'https://siddharthsehgal.com/ctfs',
    siteName: "Siddharth Sehgal's Portfolio",
    images: [
      {
        url: '/pico-2026-imgs/pico-26-1.png',
        width: 600,
        height: 400,
        alt: 'Siddharth Sehgal CTF Statistics and Achievements',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CTF Competitions | Siddharth Sehgal',
    description: 'My journey through Capture The Flag competitions including picoCTF 2026 (CyLab), PicoCTF Mini, and more.',
    images: ['/pico-2026-imgs/pico-26-1.png'],
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
    canonical: 'https://siddharthsehgal.com/ctfs',
  },
};

interface CategoryProgress {
  name: string;
  solved: number;
  total: number;
}

interface CTFEntry {
  id: number;
  name: string;
  subtitle?: string;
  date: string;
  teamName: string;
  teamLink: string;
  placement: string;
  totalTeams: number;
  competitorUnit?: 'teams' | 'players';
  score?: string;
  solves?: number;
  description: string;
  images: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }[];
  categories: string[];
  categoryProgress?: CategoryProgress[];
  solo: boolean;
}

const ctfData: CTFEntry[] = [
  {
    id: 6,
    name: 'picoCTF 2026',
    subtitle: 'CyLab Security Academy',
    date: 'March 2026',
    teamName: 'Solo',
    teamLink: 'https://learn.cylabacademy.org/events/79/scoreboards?page=10',
    placement: '495th',
    totalTeams: 8747,
    competitorUnit: 'players',
    score: '11,800 / 14,500',
    solves: 63,
    description:
      'Solo run in picoCTF 2026 on the CyLab Security Academy platform (the evolution of Carnegie Mellon\'s PicoCTF). Over ten competition days I earned 11,800 points from 63 solves, placing 495th globally out of 8,747 players. Strongest categories were General Skills (17/17) and Forensics (8/8); I also cleared all Blockchain challenges (4/4) and nearly completed Binary Exploitation (7/8) and Cryptography (11/12).',
    images: [
      {
        src: '/pico-2026-imgs/pico-26-1.png',
        alt: 'picoCTF 2026 final rank and category progress on CyLab Security Academy',
        width: 1200,
        height: 800,
      },
      {
        src: '/pico-2026-imgs/pico-26-2.png',
        alt: 'picoCTF 2026 score progression and solved challenges',
        width: 1200,
        height: 800,
      },
    ],
    categories: [
      'Binary Exploitation',
      'Blockchain',
      'Cryptography',
      'Forensics',
      'General Skills',
      'Reverse Engineering',
      'Web Exploitation',
    ],
    categoryProgress: [
      { name: 'Binary Exploitation', solved: 7, total: 8 },
      { name: 'Blockchain', solved: 4, total: 4 },
      { name: 'Cryptography', solved: 11, total: 12 },
      { name: 'Forensics', solved: 8, total: 8 },
      { name: 'General Skills', solved: 17, total: 17 },
      { name: 'Reverse Engineering', solved: 8, total: 11 },
      { name: 'Web Exploitation', solved: 8, total: 10 },
    ],
    solo: true,
  },
  {
    id: 5,
    name: 'PicoCTF Mini',
    date: 'December 2025',
    teamName: 'S1DD3CATED',
    teamLink: 'https://ctftime.org/team/392378',
    placement: '2nd',
    totalTeams: 2942,
    description: 'I completed this CTF in just 2 hours on my own, solving challenges across multiple categories. The reverse engineering challenges were particularly harder but fun, pushing me to think creatively and apply advanced techniques. I successfully completed all challenges in Binary Exploitation (2/2), Cryptography (1/1), Forensics (4/4), General Skills (1/1), and Reverse Engineering (2/2), along with Web Exploitation challenges.',
    images: [
      {
        src: '/images/pico-miini/image-pico-mini-1.png',
        alt: 'PicoCTF Mini placement and statistics image 1',
        width: 800,
        height: 400
      },
      {
        src: '/images/pico-miini/image-pico-mini-2.png',
        alt: 'PicoCTF Mini placement and statistics image 2',
        width: 800,
        height: 400
      }
    ],
    categories: ['Binary Exploitation', 'Cryptography', 'Forensics', 'General Skills', 'Reverse Engineering', 'Web Exploitation'],
    solo: true
  },
  {
    id: 4,
    name: 'DownUnderCTF 2025',
    date: 'July 2025',
    teamName: 'S1DD3CATED',
    teamLink: 'https://ctftime.org/team/392378',
    placement: '622nd',
    totalTeams: 1667,
    description: 'I solved various challenges in specifically: AI (prompt injection), web exploitation and other complex categories, such as reverse engineering. This was a great CTF, I enjoyed playing this a lot. What motivated me the most was the community and the funny memes in the challenges itself. It was a mix of learning hacking and entertainment.',
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
    categories: ['AI/Prompt Injection', 'Web Exploitation', 'Burp Suite (Community Edition)', 'Reverse Engineering', 'Binary Exploitation', 'Complex Challenges',],
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
    description: 'I solved various challenges in categories like: OSINT, web exploitation, cryptography and more. This was a very fun but hard CTF since there were 60+ challenges and I was solo. Although I was on my own, I made as many challenges as I possibly could and ended up completing 10/60 challenges. This was a very fun CTF, and gave me a new perspective on things like OSINT and complex challenges.',
    images: [
      {
        src: '/images/ctf-images/image-scoreboard-l3ak.png',
        alt: 'L3akCTF 2025 Scoreboard showing S1DD3CATED team name',
        width: 800,
        height: 400
      }
    ],
    categories: ['OSINT', 'Web Exploitation', 'Cryptography', 'Reverse Engineering/Ghidra', 'Complex Challenges', 'Burp Suite (Community Edition)'],
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
    description: 'This CTF was a very interesting CTF for me. This was my first solo, and Hack The Box CTF. Out of the 5 complex challenges which were given 2 days for, I solved 1 very hard challenge, it was a Flask-based web application which generated certificates based off of input fields, and were vulnerable to SSTI.',
    images: [
      {
        src: '/images/ctf-images/certificate-bugbountyctf.png',
        alt: 'Bug Bounty CTF Certificate for S1DD3CATED',
        width: 600,
        height: 400
      }
    ],
    categories: ['Bug Bounty', 'Web Exploitation', 'Burp Suite (Community Edition)', 'SSTI', 'Injection Techniques', 'Flask-based (Python)'],
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
    description: 'This was my very first CTF, which was luckily beginner-based. I completed several challenges in the following categories: binary exploitation, cryptography, general skills and web exploitation. This first CTF was a great learning for me and was very fun to play and taught me fundamental concepts which could help me in other CTFs.',
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
  const soloCount = ctfData.filter((c) => c.solo).length;
  const totalCompetitors = ctfData.reduce((sum, c) => sum + c.totalTeams, 0);

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "CTF Competitions | Siddharth Sehgal",
    "description": "My journey through Capture The Flag competitions including picoCTF 2026, PicoCTF Mini, PicoCTF 2025, and more.",
    "author": {
      "@type": "Person",
      "name": "Siddharth Sehgal",
      "url": "https://siddharthsehgal.com"
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
      <Script
        id="ctf-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="w-full max-w-6xl mx-auto flex flex-col items-center pt-28 pb-20 px-4 sm:px-6">
        <header className="w-full mb-12 max-w-3xl">
          <p className="text-label mb-3 text-cyan-400/80">Competition record</p>
          <h1 className="text-headline text-gradient mb-4">CTF competitions</h1>
          <p className="text-subhead text-neutral-500">Rankings, teams, and challenge categories across major events.</p>
        </header>
        <article className="w-full space-y-8">
          <section className="mb-10">
            <div className="surface-interactive rounded-2xl p-6 md:p-8 mx-auto max-w-2xl text-center border-l-2 border-blue-500/40">
              <h2 className="text-2xl font-semibold text-blue-400 mb-2">What are CTFs?</h2>
              <p className="text-neutral-300 mb-2">
                <strong>CTFs</strong> (Capture The Flag) are hacking competitions where you solve challenges to find hidden &quot;flags&quot; and earn points while competing with others.
              </p>
              <p className="text-neutral-400">
                Here are some of the CTFs I participated in: 
              </p>
            </div>
          </section>
          
          <section className="space-y-8">
            {ctfData.map((ctf) => (
              <article key={ctf.id} className="surface-interactive rounded-2xl p-8 md:p-10">
                {/* Header */}
                <header className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h2 className="text-2xl font-bold text-blue-400">{ctf.name}</h2>
                      {ctf.solo && (
                        <span className="px-3 py-1 text-xs rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20">
                          Solo
                        </span>
                      )}
                    </div>
                    {ctf.subtitle && (
                      <p className="text-sm text-cyan-400/80 mb-1">{ctf.subtitle}</p>
                    )}
                    <time className="text-neutral-400 text-sm" dateTime={ctf.date}>{ctf.date}</time>
                  </div>
                  
                  <div className="mt-4 lg:mt-0 lg:text-right">
                    <div className="text-2xl font-bold text-green-400 mb-1">
                      {ctf.placement}
                    </div>
                    <div className="text-neutral-500 text-sm">
                      out of {ctf.totalTeams.toLocaleString()}{' '}
                      {ctf.competitorUnit === 'players' ? 'players' : 'teams'}
                    </div>
                    {ctf.score && (
                      <div className="text-neutral-400 text-sm mt-1 font-mono">
                        {ctf.score} pts
                      </div>
                    )}
                    {ctf.solves !== undefined && (
                      <div className="text-neutral-500 text-xs mt-1">
                        {ctf.solves} solves
                      </div>
                    )}
                  </div>
                </header>

                {/* Team / scoreboard */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="text-neutral-400">
                      {ctf.teamName === 'Solo' && ctf.competitorUnit === 'players'
                        ? 'Scoreboard:'
                        : 'Team:'}
                    </span>
                    <Link 
                      href={ctf.teamLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
                    >
                      {ctf.teamName === 'Solo' && ctf.competitorUnit === 'players'
                        ? 'CyLab scoreboard'
                        : ctf.teamName}
                    </Link>
                    {ctf.solo && ctf.teamName !== 'Solo' && (
                      <span className="text-neutral-500 text-sm">(Solo)</span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <p className="text-neutral-300 leading-relaxed">
                    {ctf.description}
                  </p>
                </div>

                {/* Category progress */}
                {ctf.categoryProgress && ctf.categoryProgress.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white mb-3">Category breakdown</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {ctf.categoryProgress.map((cat) => {
                        const pct = Math.round((cat.solved / cat.total) * 100);
                        const complete = cat.solved === cat.total;
                        return (
                          <div
                            key={cat.name}
                            className="rounded-xl border border-white/[0.06] bg-neutral-950/50 p-4"
                          >
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm text-neutral-300">{cat.name}</span>
                              <span
                                className={`text-xs font-mono ${
                                  complete ? 'text-emerald-400' : 'text-neutral-500'
                                }`}
                              >
                                {cat.solved}/{cat.total}
                              </span>
                            </div>
                            <div className="h-1.5 rounded-full bg-neutral-800 overflow-hidden">
                              <div
                                className={`h-full rounded-full transition-all ${
                                  complete ? 'bg-emerald-500/80' : 'bg-blue-500/70'
                                }`}
                                style={{ width: `${pct}%` }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Categories */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Categories explored</h3>
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
              <div className="surface-elevated rounded-xl p-6">
                <div className="text-3xl font-bold text-blue-400 mb-2">{ctfData.length}</div>
                <div className="text-neutral-400">CTFs completed</div>
              </div>
              <div className="surface-elevated rounded-xl p-6">
                <div className="text-3xl font-bold text-green-400 mb-2">{soloCount}</div>
                <div className="text-neutral-400">Solo competitions</div>
              </div>
              <div className="surface-elevated rounded-xl p-6">
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  {totalCompetitors.toLocaleString()}
                </div>
                <div className="text-neutral-400">Total competitors faced</div>
              </div>
            </div>
          </footer>
        </article>
      </main>
    </>
  );
} 