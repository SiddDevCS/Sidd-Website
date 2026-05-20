import type { Metadata } from "next";
import Section from "@/app/components/ui/Section";
import PageHeader from "@/app/components/ui/PageHeader";
import Badge from "@/app/components/ui/Badge";

export const metadata: Metadata = {
  title: "About | Siddharth Sehgal",
  description:
    "Siddharth Sehgal — incoming HvA student, software developer, and cybersecurity enthusiast building AI apps and documenting offensive security research.",
  alternates: { canonical: "https://siddharthsehgal.com/about" },
  openGraph: {
    title: "About | Siddharth Sehgal",
    description: "Developer, security researcher, and builder of AI-powered products.",
    url: "https://siddharthsehgal.com/about",
    siteName: "Siddharth Sehgal",
    images: [{ url: "/images/Sidd1.webp", width: 1200, height: 630, alt: "About Siddharth" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Siddharth Sehgal",
    description: "Developer, security researcher, and builder of AI-powered products.",
    images: ["/images/Sidd1.webp"],
    creator: "@SiddDevTech",
  },
};

const focusAreas = [
  {
    title: "Product engineering",
    body: "I ship iOS apps to the App Store — TripCraft and StudieBuddie — with real users, AI integration, and production infrastructure.",
  },
  {
    title: "Offensive security",
    body: "CTFs, Hack The Box seasons, and certifications (Security+, eJPT) drive how I think about systems: break, document, harden.",
  },
  {
    title: "Creative craft",
    body: "Photography and music production (Logic Pro) keep my problem-solving visual and iterative — the same mindset I bring to code.",
  },
];

const philosophy = [
  "Learn by building, not watching.",
  "Document everything worth breaking.",
  "Performance and clarity are features.",
  "Security is a design constraint, not an afterthought.",
];

export default function AboutPage() {
  return (
    <Section spacing="default" className="pt-24">
      <PageHeader
        label="About"
        title="Engineer at the intersection of products & security"
        description="Incoming Computer Science student at HvA, Amsterdam. Currently interning at BreachLock while shipping apps and publishing security research."
      />

      <div className="grid lg:grid-cols-3 gap-6 mb-16">
        {focusAreas.map((area) => (
          <div key={area.title} className="surface-interactive rounded-2xl p-6 md:p-8">
            <h2 className="text-lg font-semibold text-white mb-3">{area.title}</h2>
            <p className="text-sm text-neutral-500 leading-relaxed">{area.body}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="surface-elevated rounded-2xl p-8">
          <p className="text-label mb-4">Origin story</p>
          <div className="space-y-4 text-neutral-400 text-sm leading-relaxed">
            <p>
              I started with Python — interactive sites, Pong with Pygame — then moved into
              Unity and C# game development in 2024. That foundation in logic and systems
              design led me to mobile apps in 2025, and cybersecurity through picoCTF.
            </p>
            <p>
              Today I balance App Store products, a BreachLock internship, Hack The Box
              competition, and this site — a single place for my engineering identity.
            </p>
          </div>
        </div>

        <div className="surface-elevated rounded-2xl p-8">
          <p className="text-label mb-4">Operating principles</p>
          <ul className="space-y-4">
            {philosophy.map((line) => (
              <li key={line} className="flex gap-3 text-sm text-neutral-400">
                <span className="text-blue-400 font-mono shrink-0">01</span>
                {line}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 mt-8">
            <Badge>Swift / SwiftUI</Badge>
            <Badge>Next.js</Badge>
            <Badge>Python</Badge>
            <Badge>Penetration Testing</Badge>
            <Badge>AI / LLMs</Badge>
          </div>
        </div>
      </div>
    </Section>
  );
}
