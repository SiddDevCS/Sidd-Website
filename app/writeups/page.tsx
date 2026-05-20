import type { Metadata } from "next";
import Section from "@/app/components/ui/Section";
import PageHeader from "@/app/components/ui/PageHeader";
import Button from "@/app/components/ui/Button";
import WriteUpExplorer from "@/app/components/writeups/WriteUpExplorer";
import { getAllWriteUps } from "@/app/data/writeups";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Write-ups | Hack The Box & Bug Bounty CTF Solutions",
  description:
    "Detailed write-ups and CTF solutions from Hack The Box machines and bug bounty challenges. Penetration testing, web exploitation, and cybersecurity techniques.",
  alternates: {
    canonical: "https://siddharthsehgal.com/writeups",
  },
  openGraph: {
    title: "Write-ups | Hack The Box & Bug Bounty CTF Solutions",
    description:
      "Detailed write-ups and CTF solutions from Hack The Box machines and bug bounty challenges.",
    url: "https://siddharthsehgal.com/writeups",
    siteName: "Siddharth Sehgal",
    images: [
      {
        url: "/images/Sidd1.webp",
        width: 1200,
        height: 630,
        alt: "Siddharth Sehgal CTF Write-ups",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Write-ups | Hack The Box & Bug Bounty CTF Solutions",
    description:
      "HTB machine and bug bounty CTF write-ups with structured metadata and search.",
    images: ["/images/Sidd1.webp"],
    creator: "@SiddDevTech",
  },
};

export default function WriteUpsPage() {
  const writeups = getAllWriteUps();

  return (
    <Section spacing="default" className="pt-24">
      <PageHeader
        label="Research"
        title="Security write-ups"
        description="Exploitation walkthroughs from Hack The Box Season 8 and bug bounty CTF challenges. Searchable, tagged, and statically generated."
      />

      <div className="surface-elevated rounded-xl p-4 mb-8 border-cyan-500/10">
        <p className="text-sm text-neutral-400 text-center">
          Season 8 active machines (May–August 2025). Additional walkthroughs on{" "}
          <a
            href="https://medium.com/@siddnative"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            Medium
          </a>
          .
        </p>
      </div>

      <WriteUpExplorer writeups={writeups} />

      <div className="mt-16 text-center">
        <Button href="https://medium.com/@siddnative" variant="secondary" external>
          More on Medium →
        </Button>
      </div>
    </Section>
  );
}
