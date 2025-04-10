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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#030214] via-[#232526] to-[#414345] p-8">
      <div className="bg-[#1a1a1a] shadow-xl p-12 rounded-2xl max-w-xl w-full min-h-[450px] text-center border border-[#333] animate-fadeInUp">

        <div
          onClick={handleClick}
          key={animateKey}
          className={clsx(
            "w-[150px] h-[150px] mx-auto rounded-full border border-[#666] overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-110",
            "animate-shake"
          )}
        >
          <Image
            src="/Sidd.jpg"
            alt="Sidd Sehgal"
            width={150}
            height={150}
            className="object-cover w-full h-full"
          />
        </div>

        <h1 className="text-3xl font-bold mt-6 text-[#f0f0f0] animate-fadeInUp" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>Sidd Sehgal</h1>
        <p className="text-[#888] mt-4 text-sm leading-relaxed animate-fadeInUp" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
          High School Student passionate about Software Development and Cybersecurity. Creator of{" "}
          <span className="text-[#80d0c7]">
            <a 
              href="https://apps.apple.com/us/app/studiebuddie/id6742738406"
              target="_blank"
              rel="noopener noreferrer"
            >
              StudieBuddie
            </a>
          </span> and{" "}
          <span className="text-[#80d0c7]">
            <a 
              href="https://apps.apple.com/us/app/tripcraft/id6743006079"
              target="_blank"
              rel="noopener noreferrer"
            >
              TripCraft
            </a>
          </span>.
        </p>

        <div className="mt-8 animate-fadeInUp" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
          <a
            href="/Portfolio.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm font-medium text-[#80d0c7] py-2 px-6 border border-[#80d0c7] rounded-full hover:bg-[#80d0c7] hover:text-black transition-all"
          >
            View My Portfolio
          </a>
        </div>

        <div className="mt-8 flex justify-center space-x-4 animate-fadeInUp" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
          <a
            href="https://github.com/SiddDevCS"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm font-medium text-[#80d0c7] py-2 px-6 border border-[#80d0c7] rounded-full hover:bg-[#80d0c7] hover:text-black transition-all"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sidd-sehgal-7a365b217/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm font-medium text-[#80d0c7] py-2 px-6 border border-[#80d0c7] rounded-full hover:bg-[#80d0c7] hover:text-black transition-all"
          >
            LinkedIn
          </a>
          <a
            href="mailto:sidddevcc@gmail.com"
            className="inline-block text-sm font-medium text-[#80d0c7] py-2 px-6 border border-[#80d0c7] rounded-full hover:bg-[#80d0c7] hover:text-black transition-all"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  );
}
