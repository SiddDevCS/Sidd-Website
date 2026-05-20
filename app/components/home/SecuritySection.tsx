import Link from "next/link";
import Section from "@/app/components/ui/Section";
import Badge from "@/app/components/ui/Badge";
import Button from "@/app/components/ui/Button";
import { getAllWriteUps } from "@/app/data/writeups";

export default function SecuritySection() {
  const recent = getAllWriteUps().slice(0, 4);

  return (
    <Section id="security" className="border-t border-white/[0.04]">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div>
          <p className="text-label mb-3 text-cyan-400/80">Offensive security</p>
          <h2 className="text-headline mb-4">
            CTF & <span className="text-gradient-accent">penetration testing</span>
          </h2>
          <p className="text-subhead text-neutral-500 mb-8">
            Documented exploitation paths for Hack The Box machines and bug bounty
            challenges. Structured write-ups with tags, difficulty, and static
            generation for performance.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            <Badge>HTB Season 8 & 9</Badge>
            <Badge variant="accent">Security+</Badge>
            <Badge variant="accent">eJPT</Badge>
            <Badge variant="success">picoCTF 2026 #495</Badge>
            <Badge variant="success">PicoMini 2nd</Badge>
          </div>
          <div className="flex gap-4">
            <Button href="/writeups">All write-ups</Button>
            <Button href="/ctfs" variant="ghost">
              CTF track record
            </Button>
          </div>
        </div>

        <div className="surface-elevated rounded-2xl overflow-hidden divide-y divide-white/[0.06]">
          {recent.map((w) => (
            <Link
              key={w.slug}
              href={`/writeups/${w.slug}`}
              className="block p-5 md:p-6 hover:bg-white/[0.02] transition-colors group"
            >
              <div className="flex items-center justify-between gap-4 mb-2">
                <h3 className="font-medium text-white group-hover:text-cyan-300 transition-colors">
                  {w.title}
                </h3>
                <span className="text-mono-accent shrink-0">{w.date}</span>
              </div>
              <p className="text-sm text-neutral-500 line-clamp-2">{w.description}</p>
              <div className="flex gap-2 mt-3">
                <Badge variant="muted">{w.category}</Badge>
                {w.difficulty && <Badge variant="accent">{w.difficulty}</Badge>}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}
