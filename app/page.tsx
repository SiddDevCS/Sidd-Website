"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";

export default function Home() {
  const [animateKey, setAnimateKey] = useState(0);

  const handleClick = () => {
    setAnimateKey(prev => prev + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] p-4 md:p-8">
      <div className="bg-[#1a1a1a]/90 backdrop-blur-sm shadow-2xl p-8 md:p-12 rounded-2xl max-w-xl w-full min-h-[450px] text-center border border-[#3b82f6]/20 animate-fadeInUp">

        <div
          onClick={handleClick}
          key={animateKey}
          className={clsx(
            "w-[160px] h-[160px] mx-auto rounded-full border-4 border-[#3b82f6]/40 overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:border-[#80d0c7]",
            "animate-shake shadow-lg shadow-[#3b82f6]/20"
          )}
        >
          <Image
            src="/Sidd1.jpg"
            alt="Sidd Sehgal"
            width={160}
            height={160}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        <h1 className="text-4xl font-bold mt-8 text-white animate-fadeInUp bg-gradient-to-r from-[#3b82f6] to-[#80d0c7] bg-clip-text text-transparent" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>Sidd Sehgal</h1>
        <p className="text-[#d1d5db] mt-4 text-base leading-relaxed animate-fadeInUp" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
          High School Student passionate about Software Development and Cybersecurity. Creator of{" "}
          <span className="text-[#80d0c7] font-medium hover:text-[#3b82f6] transition-colors">
            <a 
              href="https://apps.apple.com/us/app/studiebuddie/id6742738406"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-dotted underline-offset-4"
            >
              StudieBuddie
            </a>
          </span> and{" "}
          <span className="text-[#80d0c7] font-medium hover:text-[#3b82f6] transition-colors">
            <a 
              href="https://apps.apple.com/us/app/tripcraft/id6743006079"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-dotted underline-offset-4"
            >
              TripCraft
            </a>
          </span>.
        </p>

        <div className="mt-10 animate-fadeInUp" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
          <a
            href="/Portfolio1.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm font-medium text-[#80d0c7] py-3 px-8 rounded-full border border-[#80d0c7] transition-all hover:bg-[#80d0c7]/10 hover:shadow-sm"
          >
            View My Portfolio
          </a>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4 animate-fadeInUp" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
          <a
            href="https://github.com/SiddDevCS"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm font-medium text-white py-2 px-6 border border-[#3b82f6]/50 rounded-full bg-[#1a1a1a]/80 hover:bg-[#3b82f6] hover:border-transparent transition-all hover:shadow-md"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sidd-sehgal-7a365b217/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm font-medium text-white py-2 px-6 border border-[#80d0c7]/50 rounded-full bg-[#1a1a1a]/80 hover:bg-[#80d0c7] hover:border-transparent transition-all hover:shadow-md"
          >
            LinkedIn
          </a>
          <a
            href="mailto:sidddevcc@gmail.com"
            className="inline-block text-sm font-medium text-white py-2 px-6 border border-[#3b82f6]/50 rounded-full bg-[#1a1a1a]/80 hover:bg-gradient-to-r from-[#3b82f6] to-[#80d0c7] hover:border-transparent transition-all hover:shadow-md"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  );
}
