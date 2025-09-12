import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Certifications | Sidd Sehgal',
  description: 'View Sidd Sehgal\'s professional certifications including CompTIA Security+ and upcoming eJPT certification.',
  openGraph: {
    title: 'Certifications | Sidd Sehgal',
    description: 'View Sidd Sehgal\'s professional certifications including CompTIA Security+ and upcoming eJPT certification.',
  },
};

export default function Certifications() {
  return (
    <section className="w-full max-w-4xl mx-auto flex flex-col items-center pt-16 pb-16 animate-fadeInUp">
      <div className="w-full glass-dark rounded-3xl shadow-2xl p-8 md:p-12">
        <h1 className="text-4xl font-bold mb-10 text-center text-gradient">Certifications</h1>
        
        {/* CompTIA Security+ Certificate */}
        <div className="glass-card rounded-xl p-6 mb-8 hover:border-blue-500/20 transition-colors">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="relative w-64 h-40 rounded-lg overflow-hidden border border-neutral-700/50">
                <Image
                  src="/documents/CompTIA Security+ ce certificate-1.png"
                  alt="CompTIA Security+ ce Certificate"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-3 text-gradient-blue">CompTIA Security+ ce</h2>
              <p className="text-neutral-400 mb-4 leading-relaxed">
                Successfully obtained the CompTIA Security+ ce certification, demonstrating foundational knowledge 
                in cybersecurity concepts, risk management, and security operations. This certification validates 
                my understanding of core security principles and best practices.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                  ✓ Obtained
                </span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                  Cybersecurity
                </span>
                <span className="px-3 py-1 bg-neutral-500/20 text-neutral-400 rounded-full text-sm font-medium">
                  2025
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* eJPT Certification in Progress */}
        <div className="glass-card rounded-xl p-6 mb-8 hover:border-orange-500/20 transition-colors">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-64 h-40 rounded-lg bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-orange-500/20 flex items-center justify-center">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <p className="text-orange-400 font-medium">eJPT</p>
                  <p className="text-orange-300/70 text-sm">In Progress</p>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-3 text-gradient">eLearnSecurity Junior Penetration Tester (eJPT)</h2>
              <p className="text-neutral-400 mb-4 leading-relaxed">
                Currently working towards the eJPT certification, which focuses on practical penetration testing 
                skills and hands-on experience with real-world scenarios. This certification will enhance my 
                practical cybersecurity knowledge and ethical hacking capabilities.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium">
                  In Progress
                </span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                  Penetration Testing
                </span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">
                  Ethical Hacking
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Future Certifications Section */}
        <div className="glass-card rounded-xl p-6 hover:border-neutral-500/20 transition-colors">
          <h2 className="text-xl font-semibold mb-4 text-gradient-blue">Future Goals</h2>
          <p className="text-neutral-400 leading-relaxed">
            I&apos;m continuously expanding my cybersecurity knowledge and plan to pursue additional certifications 
            including OSCP (Offensive Security Certified Professional) and other advanced security certifications 
            to further enhance my expertise in the field.
          </p>
        </div>
      </div>
    </section>
  );
}
