import type { Metadata } from "next";
import Image from "next/image";
import Badge from "@/app/components/ui/Badge";
import Button from "@/app/components/ui/Button";
import Container from "@/app/components/ui/Container";

const title = "Top 5 at the UvA/HvA AI Chat Hackathon";
const description =
  "Siddharth Sehgal led a team to the top 5 of 15 at the UvA/HvA AI Chat Hackathon in October 2026. The brief was to design a game for studying with AI.";

export const metadata: Metadata = {
  title: `${title} | Siddharth Sehgal`,
  description,
  alternates: { canonical: "https://siddharthsehgal.com/hackathon" },
  openGraph: {
    title,
    description,
    url: "https://siddharthsehgal.com/hackathon",
    siteName: "Siddharth Sehgal",
    images: [
      {
        url: "/images/hackathon/welcome.jpg",
        width: 1024,
        height: 768,
        alt: "UvA/HvA AI Chat Hackathon",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/hackathon/welcome.jpg"],
    creator: "@SiddDevTech",
  },
};

export default function HackathonPage() {
  return (
    <section className="pt-28 pb-24">
      <Container>
        <div className="max-w-3xl">
          <Badge variant="accent" className="mb-6">
            Top 5 of 15 teams
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
            UvA/HvA AI Chat
            <br />
            <span className="text-gradient-accent">Hackathon</span>
          </h1>
          <p className="mt-5 text-neutral-500">October 2026 · NEMO Science Museum · Amsterdam</p>
          <p className="mt-4 text-lg text-neutral-400 leading-relaxed max-w-2xl">
            The brief was to design a game for studying with AI. I led a team of six, built the
            technical product and the demo, and presented the final app. We finished in the top 5,
            out of 15 teams and 60 people.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Button href="https://magical-tanuki-dbb1c1.netlify.app/" external>
              Demo
            </Button>
            <Button
              href="https://github.com/SiddDevCS/ai-hackathon-uva-hva"
              external
              variant="secondary"
            >
              Repository
            </Button>
            <Button
              href="https://www.youtube.com/watch?v=3oCLFMayG_8"
              external
              variant="secondary"
            >
              Pitch video
            </Button>
          </div>
        </div>

        <figure className="mt-14">
          <Image
            src="/images/hackathon/welcome.jpg"
            alt="Welcome slide for the UvA/HvA AI Chat Hackathon: design a game for studying with AI"
            width={1024}
            height={768}
            className="w-full h-auto rounded-2xl border border-white/10"
            priority
          />
          <figcaption className="mt-3 text-sm text-neutral-500">
            Opening at NEMO, with AISO, Amsterdam AI, the University of Amsterdam, and HvA.
          </figcaption>
        </figure>

        <div className="mt-6 grid lg:grid-cols-5 gap-4">
          <article className="surface-elevated rounded-2xl p-6 md:p-8 glow-accent lg:col-span-2 flex flex-col justify-center">
            <p className="text-label text-blue-400/80 mb-4">Team leader</p>
            <p className="text-neutral-300 leading-relaxed">
              I managed the team and owned the technical product and the demo. The pitch of the
              final app was mine.
            </p>
            <p className="text-sm text-neutral-500 mt-6 leading-relaxed">
              With Aditi, Salomé, Juliet, Nikita, and Aman.
            </p>
          </article>
          <figure className="lg:col-span-3">
            <Image
              src="/images/hackathon/team.jpg"
              alt="The six of us after being named in the top 5"
              width={1024}
              height={887}
              className="w-full h-auto rounded-2xl border border-white/10"
            />
            <figcaption className="mt-3 text-sm text-neutral-500">
              After the top 5 pitches.
            </figcaption>
          </figure>
        </div>

        <figure className="mt-6">
          <Image
            src="/images/hackathon/pitch.jpg"
            alt="Presenting the demo on stage at the UvA/HvA AI Chat Hackathon"
            width={1024}
            height={710}
            className="w-full h-auto rounded-2xl border border-white/10"
          />
          <figcaption className="mt-3 text-sm text-neutral-500">
            Presenting the demo.
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}
