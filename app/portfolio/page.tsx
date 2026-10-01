import type { Metadata } from "next";
import Badge from "@/app/components/ui/Badge";
import Button from "@/app/components/ui/Button";
import Container from "@/app/components/ui/Container";
import PageHeader from "@/app/components/ui/PageHeader";
import { projects } from "@/app/data/projects";

export const metadata: Metadata = {
  title: "Work | Siddharth Sehgal",
  description: "TripCraft and StudieBuddie, iOS apps shipped to the App Store by Siddharth Sehgal.",
  alternates: { canonical: "https://siddharthsehgal.com/portfolio" },
  openGraph: {
    title: "Work | Siddharth Sehgal",
    description: "Two iOS apps on the App Store: TripCraft and StudieBuddie.",
    url: "https://siddharthsehgal.com/portfolio",
    siteName: "Siddharth Sehgal",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Work" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Work | Siddharth Sehgal",
    description: "Two iOS apps on the App Store: TripCraft and StudieBuddie.",
    images: ["/og.png"],
    creator: "@SiddDevTech",
  },
};

const apps = projects.filter((project) => project.id !== "portfolio-site");

export default function PortfolioPage() {
  return (
    <section className="pt-28 pb-24">
      <Container size="narrow">
        <PageHeader
          label="Work"
          title="Apps I've shipped"
          description="Two iOS apps, both on the App Store."
        />

        <div className="space-y-4">
          {apps.map((project) => (
            <article
              key={project.id}
              className="surface-elevated rounded-2xl p-6 md:p-8"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <p className="text-mono-accent">{project.year}</p>
                <Badge variant="success">Live</Badge>
              </div>
              <h2 className="text-2xl font-semibold text-white tracking-tight">{project.name}</h2>
              <p className="text-cyan-400/90 text-sm mt-1">{project.tagline}</p>
              <p className="text-sm text-neutral-400 leading-relaxed mt-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-5">
                {project.stack.map((tech) => (
                  <Badge key={tech} variant="muted">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="mt-6">
                <Button href={project.href} external>
                  App Store
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
