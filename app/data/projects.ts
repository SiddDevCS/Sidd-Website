export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  role: string;
  impact: string[];
  metrics: { label: string; value: string }[];
  stack: string[];
  highlights: string[];
  href: string;
  external?: boolean;
  featured: boolean;
  year: string;
  accent: "blue" | "cyan" | "neutral";
}

export const projects: Project[] = [
  {
    id: "tripcraft",
    name: "TripCraft",
    tagline: "AI-powered travel preparation",
    description:
      "End-to-end iOS product that generates intelligent packing lists, travel journals, and utility tools for global travelers.",
    role: "Founder & Lead Developer",
    impact: [
      "Shipped to the App Store with production AI integration",
      "Built Mistral-7B inference pipeline via Hugging Face",
      "Designed UX for real-world travel workflows",
    ],
    metrics: [
      { label: "Platform", value: "iOS" },
      { label: "AI Model", value: "Mistral-7B" },
      { label: "Status", value: "Live" },
    ],
    stack: ["Swift", "SwiftUI", "Firebase", "Hugging Face", "Core ML APIs"],
    highlights: [
      "Custom packing intelligence engine",
      "Currency, timezone, and unit converters",
      "Travel journaling with persistent storage",
    ],
    href: "https://apps.apple.com/us/app/tripcraft/id6743006079",
    external: true,
    featured: true,
    year: "2025",
    accent: "blue",
  },
  {
    id: "studiebuddie",
    name: "StudieBuddie",
    tagline: "Student productivity reimagined",
    description:
      "A study companion app with task management, reminders, and Zermelo API integration for automatic class schedule sync across Europe.",
    role: "Founder & Lead Developer",
    impact: [
      "Real-time sync architecture with Firebase",
      "Authentication and cloud data modeling",
      "European school schedule automation",
    ],
    metrics: [
      { label: "Platform", value: "iOS" },
      { label: "Sync", value: "Real-time" },
      { label: "Status", value: "Live" },
    ],
    stack: ["Swift", "SwiftUI", "Firebase", "Zermelo API", "Cloud Functions"],
    highlights: [
      "Task and reminder system with notifications",
      "Zermelo schedule ingestion pipeline",
      "Student-first information architecture",
    ],
    href: "https://apps.apple.com/us/app/studiebuddie/id6742738406",
    external: true,
    featured: true,
    year: "2025",
    accent: "cyan",
  },
  {
    id: "portfolio-site",
    name: "siddharthsehgal.com",
    tagline: "Engineered personal brand",
    description:
      "This site — a performance-first portfolio with SSG write-ups, structured data, OG generation, and a custom design system.",
    role: "Designer & Developer",
    impact: [
      "Sub-100KB shared JS budget on key routes",
      "Full SEO + JSON-LD coverage",
      "Static generation for all write-up content",
    ],
    metrics: [
      { label: "Framework", value: "Next.js 15" },
      { label: "Deploy", value: "Vercel" },
      { label: "Stack", value: "React 19" },
    ],
    stack: ["Next.js", "TypeScript", "Tailwind v4", "Vercel OG", "Sharp"],
    highlights: [
      "App Router with ISR on write-ups",
      "Dynamic OG image API",
      "Domain redirects and canonical SEO",
    ],
    href: "https://github.com/SiddDevCS",
    external: true,
    featured: true,
    year: "2025",
    accent: "neutral",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
