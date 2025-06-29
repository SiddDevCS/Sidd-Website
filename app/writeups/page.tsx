"use client";

import Link from "next/link";

export default function WriteUps() {
  return (
    <section className="w-full max-w-xl mx-auto flex flex-col items-center pt-16 pb-16 animate-fadeInUp">
      <div className="w-full glass-dark rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-8 text-center text-gradient-green animate-fadeInUp">
          Hack The Box Write-ups
        </h1>

        <p className="text-lg text-neutral-400 mb-10 text-center animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
          My journey through Hack The Box machines and challenges
        </p>

        <div className="w-full space-y-6">
          {/* Code Machine Write-up */}
          <Link href="/write-up-machine-code" className="block">
            <div className="glass-card rounded-xl p-6 transition-all duration-300 hover:border-green-500/20 group">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-green-400 group-hover:text-green-300 transition-colors">
                    Code
                  </h3>
                  <span className="px-3 py-1 text-sm rounded-full bg-green-500/10 text-green-400">
                    Machine
                  </span>
                </div>
                <p className="text-neutral-400 text-sm">
                  A Python-based web application with interesting vulnerabilities to explore.
                </p>
              </div>
            </div>
          </Link>

          {/* Nocturnal Machine Write-up */}
          <Link href="/write-up-machine-nocturnal" className="block">
            <div className="glass-card rounded-xl p-6 transition-all duration-300 hover:border-green-500/20 group">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-green-400 group-hover:text-green-300 transition-colors">
                    Nocturnal
                  </h3>
                  <span className="px-3 py-1 text-sm rounded-full bg-green-500/10 text-green-400">
                    Machine
                  </span>
                </div>
                <p className="text-neutral-400 text-sm">
                  A challenging machine involving web exploitation and privilege escalation.
                </p>
              </div>
            </div>
          </Link>

          {/* NeoVault Bug Bounty CTF Write-up */}
          <Link href="/write-up-bugbountyctf-neovault" className="block">
            <div className="glass-card rounded-xl p-6 transition-all duration-300 hover:border-green-500/20 group">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-green-400 group-hover:text-green-300 transition-colors">
                    NeoVault
                  </h3>
                  <span className="px-3 py-1 text-sm rounded-full bg-green-500/10 text-green-400">
                    Bug Bounty CTF
                  </span>
                </div>
                <p className="text-neutral-400 text-sm">
                  A bug bounty CTF challenge focused on finding and exploiting vulnerabilities.
                </p>
              </div>
            </div>
          </Link>

          {/* JinjaCare Bug Bounty CTF Write-up */}
          <Link href="/write-up-bugbountyctf-jinjacare" className="block">
            <div className="glass-card rounded-xl p-6 transition-all duration-300 hover:border-green-500/20 group">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-green-400 group-hover:text-green-300 transition-colors">
                    JinjaCare
                  </h3>
                  <span className="px-3 py-1 text-sm rounded-full bg-green-500/10 text-green-400">
                    Bug Bounty CTF
                  </span>
                </div>
                <p className="text-neutral-400 text-sm">
                  A bug bounty CTF challenge testing web application security skills.
                </p>
              </div>
            </div>
          </Link>
        </div>

        <div className="w-16 h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-10"></div>

        <p className="text-neutral-400 text-sm text-center">
          More write-ups coming soon...
        </p>
      </div>
    </section>
  );
} 