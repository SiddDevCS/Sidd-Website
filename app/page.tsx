import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Badge from "@/app/components/ui/Badge";
import Button from "@/app/components/ui/Button";
import Container from "@/app/components/ui/Container";

export const metadata: Metadata = {
  title: "Siddharth Sehgal | HBO-ICT student at HvA",
  description:
    "Siddharth Sehgal is in the propedeuse year of the HBO-ICT bachelor at the Hogeschool van Amsterdam. He builds software and placed top 5 at the UvA/HvA AI Chat Hackathon.",
  alternates: {
    canonical: "https://siddharthsehgal.com",
  },
  openGraph: {
    title: "Siddharth Sehgal | HBO-ICT student at HvA",
    description:
      "Propedeuse year of HBO-ICT at HvA. Building software, and top 5 at the UvA/HvA AI Chat Hackathon.",
    url: "https://siddharthsehgal.com",
    siteName: "Siddharth Sehgal",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Siddharth Sehgal",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Siddharth Sehgal | HBO-ICT student at HvA",
    description:
      "Propedeuse year of HBO-ICT at HvA. Building software, and top 5 at the UvA/HvA AI Chat Hackathon.",
    images: ["/og.png"],
    creator: "@SiddDevTech",
  },
};

const pages = [
  { label: "About", href: "/about", note: "A short intro" },
  { label: "Work", href: "/portfolio", note: "Apps on the App Store" },
  { label: "Achievements", href: "/achievements", note: "Timeline" },
  { label: "Contact", href: "/contact", note: "Email and socials" },
];

const elsewhere = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/siddsehgal/" },
  { label: "YouTube", href: "https://www.youtube.com/@SiddDevTech" },
];

export default function Home() {
  return (
    <section className="relative pt-32 pb-24">
      <Container>
        <div className="flex flex-col items-center text-center">
          <Badge variant="accent" className="mb-8">
            HBO-ICT · HvA
          </Badge>

          <div className="relative mb-8">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500/30 to-cyan-500/20 blur-xl" />
            <div className="relative h-28 w-28 sm:h-32 sm:w-32 rounded-full overflow-hidden ring-1 ring-white/10">
              <Image
                src="/images/pfp-sidd/IMG_0411.jpeg"
                alt="Siddharth Sehgal"
                width={128}
                height={128}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>

          <p className="text-mono-accent mb-4">Siddharth Sehgal</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white max-w-3xl mb-6">
            Building as much
            <br />
            <span className="text-gradient-accent">as I can.</span>
          </h1>
          <p className="text-lg text-neutral-400 leading-relaxed max-w-xl mb-10">
            I&apos;m in the propedeuse year of the HBO-ICT bachelor at the Hogeschool van
            Amsterdam.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button href="/portfolio" size="lg">
              View work
            </Button>
            <Button href="/achievements" variant="secondary" size="lg">
              Achievements
            </Button>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          <div className="surface-elevated rounded-2xl p-6 md:p-8 text-left">
            <p className="text-label text-blue-400/80 mb-3">Now</p>
            <p className="text-lg font-medium text-white">Propedeuse year, HBO-ICT</p>
            <p className="text-sm text-neutral-500 mt-2">
              Bachelor at the Hogeschool van Amsterdam.
            </p>
          </div>

          <div className="surface-elevated rounded-2xl p-6 md:p-8 text-left glow-accent">
            <p className="text-label text-cyan-400/80 mb-3">Latest</p>
            <p className="text-lg font-medium text-white">
              Top 5 of 15 teams
            </p>
            <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
              UvA/HvA AI Chat Hackathon, October 2026. I led the team, built the product
              and demo, and presented the final app.
            </p>
            <div className="flex flex-wrap gap-3 mt-5">
              <Button href="/hackathon" size="sm">
                The story
              </Button>
              <Button href="https://magical-tanuki-dbb1c1.netlify.app/" external variant="secondary" size="sm">
                Demo
              </Button>
              <Button
                href="https://github.com/SiddDevCS/ai-hackathon-uva-hva"
                external
                variant="secondary"
                size="sm"
              >
                Repository
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
          {pages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="surface-interactive rounded-2xl px-5 py-4 text-left"
            >
              <p className="text-white font-medium">{page.label}</p>
              <p className="text-sm text-neutral-500 mt-1">{page.note}</p>
            </Link>
          ))}
        </div>

        <div className="flex justify-center gap-6 mt-10 text-sm">
          {elsewhere.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-white link-underline"
            >
              {link.label}
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
