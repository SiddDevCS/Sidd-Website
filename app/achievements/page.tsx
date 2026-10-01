import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/app/components/ui/Button";
import Container from "@/app/components/ui/Container";
import PageHeader from "@/app/components/ui/PageHeader";
import { achievements } from "@/app/data/achievements";
import { cn } from "@/app/lib/cn";

export const metadata: Metadata = {
  title: "Achievements | Siddharth Sehgal",
  description:
    "Timeline of Siddharth Sehgal's hackathon result, CTFs, certifications, and apps shipped to the App Store.",
  alternates: { canonical: "https://siddharthsehgal.com/achievements" },
  openGraph: {
    title: "Achievements | Siddharth Sehgal",
    description:
      "Top 5 at the UvA/HvA AI Chat Hackathon, CTF placements, Security+ and eJPT, and two App Store apps.",
    url: "https://siddharthsehgal.com/achievements",
    siteName: "Siddharth Sehgal",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Siddharth Sehgal" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Achievements | Siddharth Sehgal",
    description:
      "Top 5 at the UvA/HvA AI Chat Hackathon, CTF placements, certifications, and App Store apps.",
    images: ["/og.png"],
    creator: "@SiddDevTech",
  },
};

export default function AchievementsPage() {
  return (
    <section className="pt-28 pb-24">
      <Container size="narrow">
        <PageHeader
          label="Achievements"
          title="What I've done so far"
          description="Competitions, certifications, and apps, in order."
        />

        <ol className="relative ml-3 border-l border-blue-500/30">
          {achievements.map((item, index) => (
            <li key={item.id} className="relative pl-8 pb-8 last:pb-0">
              <span
                aria-hidden
                className="absolute -left-[7px] top-1.5 flex h-3.5 w-3.5"
              >
                {index === 0 && (
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-50" />
                )}
                <span
                  className={cn(
                    "relative inline-flex h-3.5 w-3.5 rounded-full ring-4 ring-[#030303]",
                    index === 0 ? "bg-blue-400" : "bg-blue-500/80"
                  )}
                />
              </span>

              <p className="text-mono-accent mb-3">{item.date}</p>
              <article
                className={cn(
                  "surface-elevated rounded-2xl p-6 md:p-8",
                  index === 0 && "glow-accent"
                )}
              >
                <h2 className="text-xl font-semibold text-white tracking-tight">{item.title}</h2>
                <p className="text-sm text-neutral-400 leading-relaxed mt-3">{item.detail}</p>
                {item.image && (
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    width={item.image.width}
                    height={item.image.height}
                    className="mt-5 w-full h-auto rounded-xl border border-white/10"
                  />
                )}
                {item.links && item.links.length > 0 && (
                  <div className="flex flex-wrap gap-3 mt-5">
                    {item.links.map((link, linkIndex) => (
                      <Button
                        key={link.href}
                        href={link.href}
                        external={link.href.startsWith("http")}
                        size="sm"
                        variant={linkIndex === 0 ? "primary" : "secondary"}
                      >
                        {link.label}
                      </Button>
                    ))}
                  </div>
                )}
              </article>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
