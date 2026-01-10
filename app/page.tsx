import Image from "next/image";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Siddharth Sehgal | Software Developer & Cybersecurity",
  description: "Portfolio of Siddharth Sehgal - Software Developer and Cybersecurity Enthusiast. Mobile apps, web development, CTF competitions, and security certifications.",
  alternates: {
    canonical: 'https://siddharthsehgal.com',
  },
  openGraph: {
    title: "Siddharth Sehgal | Software Developer & Cybersecurity",
    description: "Portfolio of Siddharth Sehgal - Software Developer and Cybersecurity Enthusiast. Mobile apps, web development, CTF competitions, and security certifications.",
    url: 'https://siddharthsehgal.com',
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
    title: "Siddharth Sehgal | Software Developer & Cybersecurity",
    description: "Portfolio of Siddharth Sehgal - Software Developer and Cybersecurity Enthusiast. Mobile apps, web development, CTF competitions, and security certifications.",
    images: ['/images/Sidd1.webp'],
    creator: '@SiddDevTech',
  },
};

export default function Home() {
  return (
    <>
      
      <section className="w-full max-w-xl mx-auto flex flex-col items-center pt-16 pb-16 animate-fadeInUp">
        {/* Main Content Card */}
        <div className="w-full glass-dark rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col items-center">
          {/* Profile Photo */}
          <div className="relative">
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 opacity-75 blur"></div>
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-neutral-800">
              <Image
                src="/images/pfp-sidd/IMG_0411.jpeg"
                alt="Siddharth Sehgal - Software Developer and Cybersecurity Enthusiast"
                width={128}
                height={128}
                className="object-cover w-full h-full"
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                sizes="128px"
              />
            </div>
          </div>

          {/* Name and Tagline */}
          <h1 className="text-4xl font-bold mt-8 mb-2 text-center text-gradient animate-fadeInUp">
            Siddharth Sehgal
          </h1>

          <p className="text-lg text-neutral-400 mb-6 text-center animate-fadeInUp delay-100">
            Hi! I&apos;m Siddharth. I love developing mobile apps and web-based applications, and I&apos;m passionate about cybersecurity.
          </p>

          {/* Social Media Links */}
          <div className="flex space-x-6 mb-10 animate-fadeInUp delay-200">
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


          {/* Projects Section */}
          <div className="w-full stagger-animation">
            <h2 className="text-xl font-semibold mb-3 text-center text-gradient-blue">Featured Projects</h2>
            <p className="text-neutral-400 text-sm text-center mb-6">
              Here are some of my recent projects, focusing on AI integration and practical applications
            </p>
            <div className="flex flex-col gap-4 w-full mb-10">
              <a
                href="https://apps.apple.com/us/app/tripcraft/id6743006079"
                target="_blank"
                rel="noopener noreferrer"
                className="group glass-card rounded-xl p-6 transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-blue-400 group-hover:text-blue-300 transition-colors">TripCraft</h3>
                    <p className="text-neutral-400 text-sm mt-1">AI-powered packing list generator</p>
                  </div>
                  <span className="text-neutral-600 group-hover:text-blue-400 transition-colors">→</span>
                </div>
              </a>

              <a
                href="https://apps.apple.com/us/app/studiebuddie/id6742738406"
                target="_blank"
                rel="noopener noreferrer"
                className="group glass-card rounded-xl p-6 transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-blue-400 group-hover:text-blue-300 transition-colors">StudieBuddie</h3>
                    <p className="text-neutral-400 text-sm mt-1">AI-powered study assistant</p>
                  </div>
                  <span className="text-neutral-600 group-hover:text-blue-400 transition-colors">→</span>
                </div>
              </a>

              <a
                href="https://github.com/SiddDevCS"
                target="_blank"
                rel="noopener noreferrer"
                className="group glass-card rounded-xl p-6 transition-all duration-300 text-center"
              >
                <span className="font-bold text-blue-400 group-hover:text-blue-300 transition-colors">More projects on GitHub</span>
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
