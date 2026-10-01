export interface AchievementLink {
  label: string;
  href: string;
}

export interface AchievementImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Achievement {
  id: string;
  date: string;
  /** ISO date used only for ordering, newest first. */
  sort: string;
  title: string;
  detail: string;
  image?: AchievementImage;
  links?: AchievementLink[];
}

export const achievements: Achievement[] = [
  {
    id: "ai-chat-hackathon",
    date: "October 2026",
    sort: "2026-10-01",
    title: "UvA/HvA AI Chat Hackathon",
    detail:
      "Top 5 of 15 teams (60 people) at NEMO Science Museum. I led the team — Aditi, Salomé, Juliet, Nikita, and Aman — managed the work, built the technical product and demo, and presented the final app.",
    image: {
      src: "/images/hackathon/team.jpg",
      alt: "The team after the top 5 pitches",
      width: 1024,
      height: 887,
    },
    links: [
      { label: "Story", href: "/hackathon" },
      { label: "Demo", href: "https://magical-tanuki-dbb1c1.netlify.app/" },
      { label: "Repository", href: "https://github.com/SiddDevCS/ai-hackathon-uva-hva" },
      { label: "Pitch video", href: "https://www.youtube.com/watch?v=3oCLFMayG_8" },
    ],
  },
  {
    id: "picoctf-2026",
    date: "March 2026",
    sort: "2026-03-09",
    title: "picoCTF 2026",
    detail: "495th of 8,747 players, solo.",
    image: {
      src: "/pico-2026-imgs/pico-26-1.png",
      alt: "picoCTF 2026 scoreboard with SiddDev in 495th place",
      width: 3412,
      height: 1876,
    },
  },
  {
    id: "picoctf-mini",
    date: "December 2025",
    sort: "2025-12-01",
    title: "PicoCTF Mini",
    detail: "2nd of 2,942 teams, solo.",
    image: {
      src: "/images/pico-miini/image-pico-mini-1.png",
      alt: "PicoCTF Mini scoreboard with SiddDev in 2nd place",
      width: 2230,
      height: 1618,
    },
  },
  {
    id: "ejpt",
    date: "November 2025",
    sort: "2025-11-01",
    title: "eJPT",
    detail: "eLearnSecurity Junior Penetration Tester.",
    image: {
      src: "/documents/Certified-eJPT-Sidd-Blur.png",
      alt: "eJPT certificate",
      width: 985,
      height: 762,
    },
  },
  {
    id: "security-plus",
    date: "July 2025",
    sort: "2025-07-01",
    title: "CompTIA Security+",
    detail: "Passed the Security+ ce exam.",
    image: {
      src: "/documents/CompTIA Security+ ce certificate-1.png",
      alt: "CompTIA Security+ ce certificate",
      width: 2200,
      height: 1700,
    },
  },
  {
    id: "downunderctf",
    date: "July 2025",
    sort: "2025-07-20",
    title: "DownUnderCTF 2025",
    detail: "622nd of 1,667 teams.",
    image: {
      src: "/images/ctf-images/image-scoreboard-ductf.png",
      alt: "DownUnderCTF 2025 scoreboard",
      width: 3164,
      height: 1888,
    },
  },
  {
    id: "l3akctf",
    date: "July 2025",
    sort: "2025-07-18",
    title: "L3akCTF 2025",
    detail: "509th of 1,587 teams.",
    image: {
      src: "/images/ctf-images/image-scoreboard-l3ak.png",
      alt: "L3akCTF 2025 scoreboard",
      width: 3398,
      height: 1910,
    },
  },
  {
    id: "hack-the-system",
    date: "June 2025",
    sort: "2025-06-01",
    title: "Hack The System",
    detail: "242nd of 1,323 teams in the bug bounty CTF.",
    image: {
      src: "/images/ctf-images/certificate-bugbountyctf.png",
      alt: "Hack The System bug bounty CTF certificate",
      width: 3078,
      height: 1926,
    },
  },
  {
    id: "picoctf-2025",
    date: "March 2025",
    sort: "2025-03-15",
    title: "picoCTF 2025",
    detail: "355th of 10,460 teams.",
    image: {
      src: "/images/ctf-images/stats-sidddev-pico.png",
      alt: "picoCTF 2025 personal statistics",
      width: 2024,
      height: 1644,
    },
  },
  {
    id: "tripcraft",
    date: "Early 2025",
    sort: "2025-03-01",
    title: "TripCraft",
    detail: "AI travel app shipped to the App Store. Packing lists, a travel journal, and utility tools.",
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/tripcraft/id6743006079",
      },
    ],
  },
  {
    id: "studiebuddie",
    date: "Early 2025",
    sort: "2025-02-01",
    title: "StudieBuddie",
    detail:
      "Study app shipped to the App Store. Tasks, reminders, and class schedules through the Zermelo API.",
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/studiebuddie/id6742738406",
      },
    ],
  },
].sort((a, b) => (a.sort < b.sort ? 1 : -1));
