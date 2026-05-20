import Image from "next/image";
import Button from "@/app/components/ui/Button";
import Badge from "@/app/components/ui/Badge";
import { heroStats } from "@/app/data/stats";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/siddsehgal/" },
  { label: "GitHub", href: "https://github.com/SiddDevCS" },
  { label: "YouTube", href: "https://www.youtube.com/@SiddDevTech" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-28 pb-20 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center animate-in-view">
          <Badge variant="accent" className="mb-8 delay-1">
            Incoming HvA · Software & Security
          </Badge>

          <div className="relative mb-10 delay-2">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-xl" />
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden ring-1 ring-white/10">
              <Image
                src="/images/pfp-sidd/IMG_0411.jpeg"
                alt="Siddharth Sehgal"
                width={128}
                height={128}
                className="object-cover w-full h-full"
                priority
                sizes="128px"
              />
            </div>
          </div>

          <p className="text-mono-accent mb-4 delay-2">Sidd Sehgal</p>

          <h1 className="text-display max-w-4xl mb-6 delay-3">
            Building products.
            <br />
            <span className="text-gradient-accent">Breaking systems.</span>
          </h1>

          <p className="text-subhead max-w-2xl mb-10 text-neutral-500 delay-3">
          Passionate about software engineering and cybersecurity. building products, solving problems, and breaking things responsibly.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-12 delay-4">
            <Button href="/portfolio" size="lg">
              View work
            </Button>
            <Button href="/writeups" variant="secondary" size="lg">
              Read write-ups
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm delay-5">
            {socials.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-white transition-colors link-underline"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.06] animate-in-view delay-3">
          {heroStats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#030303]/90 backdrop-blur-sm p-6 md:p-8 text-center hover:bg-neutral-900/50 transition-colors duration-500"
            >
              <p className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-neutral-400">{stat.label}</p>
              {stat.detail && (
                <p className="text-xs text-neutral-600 mt-2 hidden md:block">{stat.detail}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
