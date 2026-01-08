import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Journey | Siddharth Sehgal',
  description: 'Follow Siddharth Sehgal\'s journey from game development to mobile apps, cybersecurity certifications, and professional experience.',
  openGraph: {
    title: 'Journey | Siddharth Sehgal',
    description: 'Follow Siddharth Sehgal\'s journey from game development to mobile apps, cybersecurity certifications, and professional experience.',
  },
};

export default function Journey() {
  return (
    <section className="w-full max-w-6xl mx-auto flex flex-col items-center pt-16 pb-16 animate-fadeInUp px-4">
      <div className="w-full glass-dark rounded-3xl shadow-2xl p-8 md:p-12">
        <h1 className="text-4xl font-bold mb-4 text-center text-gradient">My Journey</h1>
        <p className="text-neutral-400 text-center mb-12">
          From game development to cybersecurity - a timeline of my growth and achievements
        </p>
        
        {/* Journey Cards */}
        <div className="space-y-8">
          
          {/* 2024 - Game Development */}
          <div className="glass-card rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300 border-l-4 border-blue-500">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold text-blue-400 mb-2">2024</h2>
                <p className="text-lg text-neutral-400">Game Development Era</p>
              </div>
              <span className="text-sm text-neutral-500 mt-2 md:mt-0">The Beginning</span>
            </div>
            
            <div className="space-y-4 text-neutral-300 leading-relaxed">
              <p>
                I started my coding journey by building simple projects in <span className="text-blue-400 font-medium">Python</span>, 
                like making websites interactive or creating games like <span className="text-blue-400 font-medium">Pong with Pygame</span>. 
                These early projects taught me the fundamentals of programming and problem-solving.
              </p>
              
              <p>
                In <span className="text-blue-400 font-medium">mid-2024</span>, I transitioned to game development in 
                <span className="text-blue-400 font-medium"> C#</span>, which taught me a lot about logic in software 
                development and coding. Working with Unity and C# helped me understand object-oriented programming, game loops, 
                and event-driven architecture.
              </p>
              
              <p>
                I even wrote a comprehensive <span className="text-blue-400 font-medium">research paper on design principles 
                for developing engaging games</span>, which you can find on{' '}
                <Link href="https://github.com/SiddDevCS/GameDev-ResearchPaper" target="_blank" rel="noopener noreferrer" 
                      className="text-blue-400 hover:text-blue-300 underline font-medium">
                  GitHub
                </Link>. This research explored UI/UX design, player psychology, feedback loops, monetization strategies, 
                and marketing techniques for mobile games.
              </p>
              
              <p>
                All my games were uploaded to my{' '}
                <Link href="https://sidddev.itch.io/" target="_blank" rel="noopener noreferrer" 
                      className="text-blue-400 hover:text-blue-300 underline font-medium">
                  itch.io
                </Link> profile, where I learned about game distribution and community engagement.
              </p>
              
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mt-4">
                <p className="text-blue-300 font-medium mb-2">Best Game: Yūrei</p>
                <p className="text-neutral-300 text-sm">
                  My best game would be <span className="text-blue-400 font-medium">Yūrei</span>, a simple enemy bot 
                  (the yurei) which chases you and you need to win by finding an item. This game taught me about AI 
                  pathfinding, game mechanics, and creating engaging gameplay loops.
                </p>
              </div>
            </div>
            
            {/* Game Dev Media */}
            <div className="mt-8 space-y-4">
              <h3 className="text-lg font-semibold text-neutral-200 mb-4">Game Development Showcase</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative rounded-lg overflow-hidden border border-neutral-700">
                  <Image
                    src="/game-dev-24/gamedev1.png"
                    alt="Game Development Screenshot 1"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                <div className="relative rounded-lg overflow-hidden border border-neutral-700">
                  <Image
                    src="/game-dev-24/gamedev2.png"
                    alt="Game Development Screenshot 2"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              
              {/* Videos */}
              <div className="grid grid-cols-1 gap-4">
                <div className="rounded-lg overflow-hidden border border-neutral-700">
                  <video
                    controls
                    className="w-full"
                    preload="metadata"
                  >
                    <source src="/game-dev-24/Screen Recording 2024-08-03 at 23.55.24.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-lg overflow-hidden border border-neutral-700">
                    <video
                      controls
                      className="w-full"
                      preload="metadata"
                    >
                      <source src="/game-dev-24/Screen Recording 2024-08-05 at 23.05.39.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="rounded-lg overflow-hidden border border-neutral-700">
                    <video
                      controls
                      className="w-full"
                      preload="metadata"
                    >
                      <source src="/game-dev-24/Screen Recording 2024-08-06 at 21.52.15.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Beginning 2025 - Mobile App Development */}
          <div className="glass-card rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300 border-l-4 border-purple-500">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold text-purple-400 mb-2">Beginning 2025</h2>
                <p className="text-lg text-neutral-400">Mobile App Development & First CTF</p>
              </div>
              <span className="text-sm text-neutral-500 mt-2 md:mt-0">January - March 2025</span>
            </div>
            
            <div className="space-y-4 text-neutral-300 leading-relaxed">
              <p>
                I started by following a tutorial on how to develop a mobile app with authentication and making a 
                to-do list, which used <span className="text-purple-400 font-medium">Firebase as a database</span>. 
                This tutorial introduced me to mobile development, real-time databases, and user authentication systems.
              </p>
              
              <p>
                I was very interested, so a few months later I decided to make two apps from scratch:{' '}
                <Link href="/portfolio" className="text-purple-400 hover:text-purple-300 underline font-medium">
                  StudieBuddie
                </Link> and{' '}
                <Link href="/portfolio" className="text-purple-400 hover:text-purple-300 underline font-medium">
                  TripCraft
                </Link>.
              </p>
              
              <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                <p className="text-purple-300 font-medium mb-2">StudieBuddie</p>
                <p className="text-neutral-300 text-sm mb-2">
                  A student productivity app with task management, reminders, and study tracking. Integrated Firebase 
                  for real-time sync, authentication, and cloud storage. Also integrated Zermelo API for automatic 
                  class schedule syncing for European students.
                </p>
                <p className="text-neutral-400 text-xs">Live on the App Store</p>
              </div>
              
              <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                <p className="text-purple-300 font-medium mb-2">TripCraft</p>
                <p className="text-neutral-300 text-sm mb-2">
                  An AI-powered packing list generator using Hugging Face&apos;s Mistral-7B. Integrated travel 
                  journaling and essential travel tools including currency converter, unit converter, and time zone converter.
                </p>
                <p className="text-neutral-400 text-xs">Live on the App Store</p>
              </div>
              
              <p>
                This phase taught me how to <span className="text-purple-400 font-medium">market, create, and build 
                my own apps from scratch</span>. This is where I actually learned real-world app development, including 
                App Store submission, user feedback, and iterative improvement.
              </p>
              
              <p>
                Later, I developed more <span className="text-purple-400 font-medium">web apps</span> since mobile apps 
                are similar to web apps, expanding my skillset to full-stack development.
              </p>
              
              <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4 mt-4">
                <p className="text-purple-300 font-medium mb-2">First CTF: picoCTF</p>
                <p className="text-neutral-300 text-sm">
                  I participated in my first CTF: <span className="text-purple-400 font-medium">picoCTF</span>. 
                  I kept playing more and more CTFs (more details on{' '}
                  <Link href="/ctfs" className="text-purple-400 hover:text-purple-300 underline">
                    /ctfs
                  </Link>). This very first CTF introduced me to hacking and showed up more later in the year. 
                  It was my introduction to cybersecurity challenges, cryptography, web exploitation, and reverse engineering.
                </p>
              </div>
            </div>
          </div>

          {/* Mid 2025 - Certifications & Hack The Box */}
          <div className="glass-card rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300 border-l-4 border-cyan-500">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold text-cyan-400 mb-2">Mid 2025</h2>
                <p className="text-lg text-neutral-400">Cybersecurity Certifications & Hack The Box</p>
              </div>
              <span className="text-sm text-neutral-500 mt-2 md:mt-0">April - August 2025</span>
            </div>
            
            <div className="space-y-4 text-neutral-300 leading-relaxed">
              <p>
                I focused on creating projects, which are on{' '}
                <Link href="https://github.com/SiddDevCS" target="_blank" rel="noopener noreferrer" 
                      className="text-cyan-400 hover:text-cyan-300 underline font-medium">
                  GitHub
                </Link>, and making two certifications: <span className="text-cyan-400 font-medium">CompTIA Security+</span> 
                (passed in July 2025) and <span className="text-cyan-400 font-medium">eJPT</span> (passed in November 2025). 
                I successfully passed both of these certifications, validating my cybersecurity knowledge.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4">
                  <p className="text-cyan-300 font-medium mb-2">CompTIA Security+</p>
                  <p className="text-neutral-300 text-sm">
                    Passed in July 2025. This certification validated my foundational knowledge in cybersecurity concepts, 
                    risk management, and security operations.
                  </p>
                </div>
                <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4">
                  <p className="text-cyan-300 font-medium mb-2">eJPT (eLearnSecurity Junior Penetration Tester)</p>
                  <p className="text-neutral-300 text-sm">
                    Passed in November 2025. This certification focused on practical penetration testing skills and 
                    hands-on experience with real-world scenarios.
                  </p>
                </div>
              </div>
              
              <p>
                I also started playing a lot of <span className="text-cyan-400 font-medium">Hack The Box</span>. 
                I participated in <span className="text-cyan-400 font-medium">Season 8</span> (May-August 2025) and 
                <span className="text-cyan-400 font-medium"> Season 9</span> (September-December 2025).
              </p>
              
              <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4">
                <p className="text-cyan-300 font-medium mb-2">Hack The Box Season 9 Achievement</p>
                <p className="text-neutral-300 text-sm">
                  For Season 9, I was placed <span className="text-cyan-400 font-medium">17th in the Netherlands</span> 
                  and placed <span className="text-cyan-400 font-medium">1552nd worldwide</span> (out of 9850 competitors). 
                  I competed by playing Hack The Box machines varying in multiple difficulties, from Easy to Hard. 
                  This achievement demonstrated my growing skills in penetration testing, web exploitation, privilege 
                  escalation, and various attack vectors.
                </p>
              </div>
              
              <p>
                I made a lot of my write-ups on{' '}
                <Link href="https://medium.com/@siddnative" target="_blank" rel="noopener noreferrer" 
                      className="text-cyan-400 hover:text-cyan-300 underline font-medium">
                  Medium
                </Link> and also on my website (those are on the{' '}
                <Link href="/writeups" className="text-cyan-400 hover:text-cyan-300 underline font-medium">
                  /writeups
                </Link> page). These write-ups documented my learning process, exploitation techniques, and solutions 
                to various challenges.
              </p>
              
              <p>
                So I focused on getting these two first certifications and hacking a lot, which taught me a lot about 
                hacking, security research, and offensive security techniques.
              </p>
              
              <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4">
                <p className="text-cyan-300 font-medium mb-2">CTF Competitions</p>
                <ul className="text-neutral-300 text-sm space-y-2">
                  <li>
                    • <span className="text-cyan-400 font-medium">June 2025:</span> Participated in the{' '}
                    <span className="text-cyan-400 font-medium">Hack The Box Bug Bounty CTF</span>, which taught me 
                    more about web hacking, bug bounty methodologies, and finding vulnerabilities in web applications.
                  </li>
                  <li>
                    • <span className="text-cyan-400 font-medium">July 2025:</span> Participated in{' '}
                    <span className="text-cyan-400 font-medium">L3akCTF 2025</span> and{' '}
                    <span className="text-cyan-400 font-medium">DownUnderCTF 2025</span>, further expanding my 
                    experience in different types of cybersecurity challenges.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Late 2025 - Internship & Continued Growth */}
          <div className="glass-card rounded-2xl p-8 hover:border-green-500/30 transition-all duration-300 border-l-4 border-green-500">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold text-green-400 mb-2">Late 2025</h2>
                <p className="text-lg text-neutral-400">Professional Growth & Internship</p>
              </div>
              <span className="text-sm text-neutral-500 mt-2 md:mt-0">September - December 2025</span>
            </div>
            
            <div className="space-y-4 text-neutral-300 leading-relaxed">
              <p>
                I kept developing and hacking, continuously improving my skills in both software development and cybersecurity.
              </p>
              
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                <p className="text-green-300 font-medium mb-2">PicoMini 2025 - 2nd Place</p>
                <p className="text-neutral-300 text-sm">
                  I participated in <span className="text-green-400 font-medium">PicoMini 2025</span> and got placed 
                  <span className="text-green-400 font-medium"> second</span>. This was a significant achievement that 
                  demonstrated my problem-solving skills and cybersecurity knowledge in a competitive environment.
                </p>
              </div>
              
              <p>
                I also got an internship at <span className="text-green-400 font-medium">BreachLock</span>, starting in 
                December 2025. I&apos;m currently doing that internship (it&apos;s January 2026).
              </p>
              
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                <p className="text-green-300 font-medium mb-2">BreachLock Internship</p>
                <p className="text-neutral-300 text-sm mb-2">
                  Cybersecurity Intern at BreachLock Netherlands, contributing to development projects focused on building 
                  security-driven automation solutions. Working at the intersection of software development and cybersecurity, 
                  applying coding expertise and hands-on experience from hacking challenges to real-world environments.
                </p>
                <p className="text-neutral-300 text-sm">
                  Transitioning into penetration testing within the NL team after completing development assignments, with 
                  a focus on identifying and mitigating security vulnerabilities.
                </p>
              </div>
              
              <p>
                I plan to keep doing this internship and then later move onto more cool stuff! The experience has been 
                invaluable in bridging the gap between academic learning and real-world cybersecurity work.
              </p>
            </div>
          </div>

          {/* 2026 & Beyond - Future */}
          <div className="glass-card rounded-2xl p-8 hover:border-yellow-500/30 transition-all duration-300 border-l-4 border-yellow-500 bg-gradient-to-br from-yellow-500/5 to-transparent">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold text-yellow-400 mb-2">2026 & Beyond</h2>
                <p className="text-lg text-neutral-400">The Journey Continues...</p>
              </div>
              <span className="text-sm text-neutral-500 mt-2 md:mt-0">Ongoing</span>
            </div>
            
            <div className="space-y-4 text-neutral-300 leading-relaxed">
              <p>
                Continuing to grow, learn, and build. The journey is just getting started!
              </p>
              <p>
                I&apos;m currently continuing my internship at BreachLock, working on exciting projects that combine my 
                passion for software development and cybersecurity. I&apos;m always looking for new challenges, learning 
                opportunities, and ways to contribute to the security community.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}