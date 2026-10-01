import type { Metadata } from "next";
import Badge from "@/app/components/ui/Badge";
import Button from "@/app/components/ui/Button";
import Container from "@/app/components/ui/Container";
import PageHeader from "@/app/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "About | Siddharth Sehgal",
  description:
    "Siddharth Sehgal is in the propedeuse year of the HBO-ICT bachelor at the Hogeschool van Amsterdam. He builds apps and competes in hackathons and CTFs.",
  alternates: { canonical: "https://siddharthsehgal.com/about" },
  openGraph: {
    title: "About | Siddharth Sehgal",
    description: "HBO-ICT student at HvA, building software and taking on competitions.",
    url: "https://siddharthsehgal.com/about",
    siteName: "Siddharth Sehgal",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "About Siddharth" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Siddharth Sehgal",
    description: "HBO-ICT student at HvA, building software and taking on competitions.",
    images: ["/og.png"],
    creator: "@SiddDevTech",
  },
};

export default function AboutPage() {
  return (
    <section className="pt-28 pb-24">
      <Container size="narrow">
        <PageHeader
          label="About"
          title="Siddharth Sehgal"
          description="Propedeuse year of the HBO-ICT bachelor at the Hogeschool van Amsterdam."
        />

        <div className="surface-elevated rounded-2xl p-8 glow-accent">
          <div className="space-y-4 text-neutral-400 leading-relaxed">
            <p>
              I try to build and take on as much as I can. So far that has meant two iOS apps
              on the App Store, CTFs, Security+ and eJPT, and a top 5 at the UvA/HvA AI Chat
              Hackathon.
            </p>
            <p>I mostly work in Swift, Next.js, and Python.</p>
          </div>
          <div className="flex flex-wrap gap-2 mt-6">
            <Badge variant="accent">Swift</Badge>
            <Badge variant="accent">Next.js</Badge>
            <Badge variant="accent">Python</Badge>
          </div>
          <div className="flex flex-wrap gap-3 mt-8">
            <Button href="/portfolio">Work</Button>
            <Button href="/achievements" variant="secondary">
              Achievements
            </Button>
            <Button href="/contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
