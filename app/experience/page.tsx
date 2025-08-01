import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';

import { FaGithub } from "react-icons/fa";

export const metadata: Metadata = {
  title: 'Experience | Sidd Sehgal',
  description: 'Explore my professional experience including internships at Boulevard Legacy LLC and personal projects. View my work in mobile app development, UI/UX design, and software engineering.',
  openGraph: {
    title: 'Experience | Sidd Sehgal',
    description: 'Explore my professional experience including internships at Boulevard Legacy LLC and personal projects. View my work in mobile app development, UI/UX design, and software engineering.',
  },
};

export default function Experience() {
  return (
    <section className="w-full max-w-3xl mx-auto flex flex-col items-center pt-16 pb-16 animate-fadeInUp">
      <div className="w-full glass-dark rounded-3xl shadow-2xl p-8 md:p-12">
        <h1 className="text-4xl font-bold mb-10 text-center text-gradient">Experience</h1>
        
        {/* Personal Projects */}
        <div className="glass-card rounded-xl p-6 mb-8 hover:border-blue-500/20 transition-colors">
          <h2 className="text-2xl font-semibold mb-4 text-gradient-blue">Personal Projects</h2>
          <div className="text-center py-8">
            <p className="text-neutral-400 text-lg">I have developed several projects
              
              most of them can be found on my GitHub page:</p>
            <br></br>
            <div className="flex justify-center space-x-6 mb-10 delay-200">
              <a
                href="https://github.com/SiddDevCS"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-blue-400 transition-colors duration-300"
                aria-label="GitHub Profile"
              >
                <FaGithub size={40}/>
              </a>
            </div>
          </div>
        </div>

        {/* Internships */}
        <div className="glass-card rounded-xl p-6 hover:border-blue-500/20 transition-colors">
          <h2 className="text-2xl font-semibold mb-6 text-gradient-blue">Internships</h2>
          
          {/* Boulevard Legacy LLC */}
          <div className="space-y-6">
            <div className="border-l-2 border-blue-500/30 pl-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">Mobile App Developer</h3>
                <span className="text-blue-400 text-sm mt-1 md:mt-0">April 2025 - May 2025</span>
              </div>
              <p className="text-blue-400/90 font-medium mb-4">Boulevard Legacy LLC</p>
              
              <p className="text-neutral-400 leading-relaxed mb-4">
                Developed 2 consumer-focused mobile applications during my internship at Boulevard Legacy LLC, 
                a mobile app agency. I focused on creating the best possible user experience, working on 
                onboarding processes, main app functionality, and UI/UX design throughout the development cycle.
              </p>

              {/* Recommendation Letter */}
              <div className="mb-6">
                <a 
                  href="/documents/Recommendation_Letter_Sidd.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-400 rounded-lg border border-blue-500/20 hover:bg-blue-500/20 hover:border-blue-500/30 transition-all duration-300 group"
                >
                  <svg className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  View Recommendation Letter
                </a>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-lg font-medium text-white mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {['Expo (React Native)', 'Firebase', 'JavaScript', 'Git'].map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm border border-blue-500/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Apps Developed */}
              <div className="space-y-6">
                <h4 className="text-lg font-medium text-white mb-4">Apps Developed</h4>
                
                {/* Elevenstoic */}
                <div className="bg-neutral-900/50 rounded-lg p-5 border border-neutral-800/50">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-white/10 flex items-center justify-center p-1">
                        <Image 
                          src="/images/logos/logo-elevenstoic.webp" 
                          alt="Elevenstoic Logo" 
                          width={48}
                          height={48}
                          className="w-full h-full object-contain rounded-md"
                          loading="lazy"
                        />
                      </div>
                      <h5 className="text-lg font-semibold text-white">Elevenstoic</h5>
                    </div>
                    <a 
                      href="https://apps.apple.com/nl/app/elevenstoic-clarity-growth/id6745706705?l=en-GB" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 text-sm underline transition-colors"
                    >
                      View on App Store
                    </a>
                  </div>
                  <p className="text-neutral-400 leading-relaxed mb-3">
                    A productivity and mindfulness app designed to help users become more focused and productive. 
                    I worked extensively on the onboarding process and main app functionality, with a strong 
                    emphasis on creating an intuitive UI/UX that provides the best possible experience for users.
                  </p>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-400 text-sm">●</span>
                    <span className="text-neutral-500 text-sm">Available on App Store</span>
                  </div>
                </div>

                {/* TarotPal */}
                <div className="bg-neutral-900/50 rounded-lg p-5 border border-neutral-800/50">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-white/10 flex items-center justify-center p-1">
                        <Image 
                          src="/images/tarotpal-1.webp" 
                          alt="TarotPal Logo" 
                          width={48}
                          height={48}
                          className="w-full h-full object-contain rounded-md"
                          loading="lazy"
                        />
                      </div>
                      <h5 className="text-lg font-semibold text-white">TarotPal</h5>
                    </div>
                    <span className="text-orange-400 text-sm">Coming Soon</span>
                  </div>
                  <p className="text-neutral-400 leading-relaxed mb-3">
                    An interactive tarot card application where users can ask questions and receive insights 
                    based on traditional tarot card meanings. I particularly enjoyed working on the UI design 
                    for this project, developing the onboarding flow, main functionality, and overall user experience.
                  </p>
                  <div className="flex items-center space-x-2">
                    <span className="text-orange-400 text-sm">●</span>
                    <span className="text-neutral-500 text-sm">Coming Soon to App Store & Play Store</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 