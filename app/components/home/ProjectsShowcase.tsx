import Link from "next/link";
import Section from "@/app/components/ui/Section";
import Badge from "@/app/components/ui/Badge";
import Button from "@/app/components/ui/Button";
import { featuredProjects } from "@/app/data/projects";
import { cn } from "@/app/lib/cn";

const accentBorder = {
  blue: "hover:border-blue-500/30",
  cyan: "hover:border-cyan-500/30",
  neutral: "hover:border-white/20",
};

export default function ProjectsShowcase() {
  return (
    <Section id="work">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <div>
          <p className="text-label mb-3">Selected work</p>
          <h2 className="text-headline text-gradient">Products & systems</h2>
          <p className="text-subhead mt-3 max-w-xl text-neutral-500">
            Case studies from apps shipped to production and infrastructure I engineer.
          </p>
        </div>
        <Button href="/portfolio" variant="secondary">
          Full portfolio
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {featuredProjects.map((project, i) => (
          <article
            key={project.id}
            className={cn(
              "group surface-interactive rounded-2xl p-6 md:p-8 flex flex-col animate-in-view",
              i === 0 ? "lg:col-span-7" : "lg:col-span-5",
              accentBorder[project.accent],
              i === 1 && "delay-2",
              i === 2 && "delay-3"
            )}
          >
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <p className="text-mono-accent mb-2">{project.year}</p>
                <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
                  {project.name}
                </h3>
                <p className="text-sm text-neutral-500 mt-1">{project.tagline}</p>
              </div>
              <Badge variant="accent">{project.role.split("&")[0].trim()}</Badge>
            </div>

            <p className="text-neutral-400 text-sm leading-relaxed flex-1 mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.stack.slice(0, 4).map((tech) => (
                <Badge key={tech} variant="muted">
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-3 mb-6 pt-6 border-t border-white/[0.06]">
              {project.metrics.map((m) => (
                <div key={m.label}>
                  <p className="text-xs text-neutral-600 mb-1">{m.label}</p>
                  <p className="text-sm font-medium text-white">{m.value}</p>
                </div>
              ))}
            </div>

            <Link
              href={project.href}
              target={project.external ? "_blank" : undefined}
              rel={project.external ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors mt-auto"
            >
              View project <span aria-hidden>→</span>
            </Link>
          </article>
        ))}
      </div>
    </Section>
  );
}
