"use client";

import { FaGithub } from "react-icons/fa";

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
          <div className="glass-card rounded-xl p-6 transition-all duration-300 hover:border-green-500/20 group">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-green-400 group-hover:text-green-300 transition-colors">
                  Code
                </h3>
                <span className="px-3 py-1 text-sm rounded-full bg-green-500/10 text-green-400">
                  Easy
                </span>
              </div>
              <p className="text-neutral-400 text-sm">
                A Python-based web application with interesting vulnerabilities to explore.
              </p>
              <div className="flex items-center space-x-4">
                <a
                  href="https://github.com/SiddDevCS/Code-HTB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors"
                >
                  <FaGithub size={20} />
                  <span>View Write-up</span>
                </a>
              </div>
            </div>
          </div>

          {/* Nocturnal Machine Write-up */}
          <div className="glass-card rounded-xl p-6 transition-all duration-300 hover:border-green-500/20 group">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-green-400 group-hover:text-green-300 transition-colors">
                  Nocturnal
                </h3>
                <span className="px-3 py-1 text-sm rounded-full bg-green-500/10 text-green-400">
                  Easy
                </span>
              </div>
              <p className="text-neutral-400 text-sm">
                A challenging machine involving web exploitation and privilege escalation.
              </p>
              <div className="flex items-center space-x-4">
                <a
                  href="https://github.com/SiddDevCS/Nocturnal-HTB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors"
                >
                  <FaGithub size={20} />
                  <span>View Write-up</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="w-16 h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-10"></div>

        <p className="text-neutral-400 text-sm text-center">
          More write-ups coming soon...
        </p>
      </div>
    </section>
  );
} 