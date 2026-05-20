import Section from "@/app/components/ui/Section";
import Button from "@/app/components/ui/Button";

export default function CTABand() {
  return (
    <Section spacing="tight">
      <div className="relative rounded-3xl overflow-hidden border border-white/[0.08] px-8 py-16 md:px-16 md:py-20 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/5" />
        <div className="relative">
          <p className="text-label mb-4">Let&apos;s connect</p>
          <h2 className="text-headline mb-4 max-w-2xl mx-auto">
            Open to collaborations, security research, and ambitious builds.
          </h2>
          <p className="text-neutral-500 mb-8 max-w-lg mx-auto">
            Whether it&apos;s a product idea, CTF team, or internship conversation —
            I&apos;d like to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" size="lg">
              Get in touch
            </Button>
            <Button
              href="https://www.linkedin.com/in/siddsehgal/"
              variant="secondary"
              size="lg"
              external
            >
              LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
