import Link from "next/link";
import { FaLock } from "react-icons/fa";
import type { Metadata } from 'next';
import { getAllWriteUps } from '../data/writeups';

export const revalidate = 86400; // Revalidate daily

export const metadata: Metadata = {
  title: 'Write-ups | Sidd Sehgal',
  description: 'Security write-ups and CTF solutions from Hack The Box machines and bug bounty challenges.',
  openGraph: {
    title: 'Write-ups | Sidd Sehgal',
    description: 'Security write-ups and CTF solutions from Hack The Box machines and bug bounty challenges.',
  },
};

export default function WriteUps() {
  const writeups = getAllWriteUps();
  const protectedSlugs = ['nocturnal', 'code', 'outbound'];

  return (
    <section className="w-full max-w-4xl mx-auto flex flex-col items-center pt-16 pb-16 animate-fadeInUp px-4">
      <div className="w-full glass-dark rounded-3xl shadow-2xl p-8 md:p-12">
        <h1 className="text-4xl font-bold mb-8 text-center text-gradient-green">
          Security Write-ups
        </h1>

        <p className="text-lg text-neutral-400 mb-6 text-center">
          My journey through Hack The Box machines and bug bounty challenges
        </p>
        
        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mb-10">
          <div className="flex items-center gap-2 text-yellow-400 mb-2">
            <FaLock className="text-sm" />
            <span className="font-medium">Password Protected Write-ups</span>
          </div>
          <p className="text-neutral-400 text-sm">
            Some write-ups are password protected. You&apos;ll need the correct password to access them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {writeups.map((writeup, index) => (
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
                      {protectedSlugs.includes(writeup.slug) && (
                        <FaLock className="text-yellow-400 text-sm" title="Password Protected" />
                      )}
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

        <p className="text-neutral-400 text-sm text-center">
          More write-ups coming soon...
        </p>
      </div>
    </section>
  );
} 