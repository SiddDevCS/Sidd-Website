import type { Metadata } from "next";
import Section from "@/app/components/ui/Section";
import PageHeader from "@/app/components/ui/PageHeader";
import Badge from "@/app/components/ui/Badge";
import Button from "@/app/components/ui/Button";
import { projects } from "@/app/data/projects";
import { cn } from "@/app/lib/cn";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Portfolio | Siddharth Sehgal",
  description:
    "Case studies: TripCraft, StudieBuddie, and engineered web products. Metrics, tech stacks, and architecture highlights.",
  alternates: {
    canonical: "https://siddharthsehgal.com/portfolio",
  },
  openGraph: {
    title: "Portfolio | Siddharth Sehgal",
    description: "Product case studies — AI mobile apps and full-stack engineering.",
    url: "https://siddharthsehgal.com/portfolio",
    siteName: "Siddharth Sehgal",
    images: [{ url: "/images/Sidd1.webp", width: 1200, height: 630, alt: "Portfolio" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Siddharth Sehgal",
    description: "Product case studies — AI mobile apps and full-stack engineering.",
    images: ["/images/Sidd1.webp"],
    creator: "@SiddDevTech",
  },
};

export default function PortfolioPage() {
  return (
    <>
      <Section spacing="default" className="pt-24">
        <PageHeader
          label="Work"
          title="Product case studies"
          description="How I design, ship, and iterate — from App Store launches to performance-engineered web systems."
        />

        <div className="space-y-8">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={cn(
                "surface-elevated rounded-2xl p-8 md:p-10 glow-accent",
                index % 2 === 1 && "md:flex-row-reverse"
              )}
            >
              <div className="flex flex-col lg:flex-row lg:gap-12">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <p className="text-mono-accent">{project.year}</p>
                    <Badge variant="accent">{project.role}</Badge>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-2">
                    {project.name}
                  </h2>
                  <p className="text-cyan-400/90 text-sm mb-4">{project.tagline}</p>
                  <p className="text-neutral-400 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <h3 className="text-label mb-3">Impact</h3>
                  <ul className="space-y-2 mb-8">
                    {project.impact.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm text-neutral-400"
                      >
                        <span className="text-blue-400 shrink-0">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-label mb-3">Architecture highlights</h3>
                  <ul className="space-y-2 mb-8">
                    {project.highlights.map((h) => (
                      <li key={h} className="text-sm text-neutral-500 font-mono">
                        {h}
                      </li>
                    ))}
                  </ul>

                  <Button
                    href={project.href}
                    variant={index === 0 ? "primary" : "secondary"}
                    external={project.external}
                  >
                    {project.external ? "Open project" : "View"} →
                  </Button>
                </div>

                <div className="lg:w-72 shrink-0 mt-8 lg:mt-0">
                  <div className="rounded-xl border border-white/[0.06] p-5 space-y-4 bg-neutral-950/50">
                    <div>
                      <p className="text-label mb-2">Metrics</p>
                      {project.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="flex justify-between py-2 border-b border-white/[0.04] last:border-0"
                        >
                          <span className="text-xs text-neutral-600">{m.label}</span>
                          <span className="text-sm text-white font-medium">{m.value}</span>
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="text-label mb-2">Stack</p>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <Badge key={tech} variant="muted">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section spacing="tight" size="wide">
        <PageHeader
          label="Resume"
          title="PDF portfolio"
          description="Downloadable overview of experience and projects."
          className="mb-8"
        />
        <div className="surface-elevated rounded-2xl overflow-hidden border border-white/[0.08]">
          <iframe
            src="/documents/Sidd Portfolio.pdf"
            className="w-full h-[70vh] min-h-[500px] border-0"
            title="Siddharth Sehgal Portfolio PDF"
          />
        </div>
      </Section>
    </>
  );
}
