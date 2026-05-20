import type { Metadata } from "next";
import Section from "@/app/components/ui/Section";
import PageHeader from "@/app/components/ui/PageHeader";
import Button from "@/app/components/ui/Button";

export const metadata: Metadata = {
  title: "Contact | Siddharth Sehgal",
  description: "Get in touch with Siddharth Sehgal for collaborations, security research, or product conversations.",
  alternates: { canonical: "https://siddharthsehgal.com/contact" },
  openGraph: {
    title: "Contact | Siddharth Sehgal",
    description: "Reach out for collaboration or connect on social platforms.",
    url: "https://siddharthsehgal.com/contact",
    siteName: "Siddharth Sehgal",
    images: [{ url: "/images/Sidd1.webp", width: 1200, height: 630, alt: "Contact" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Siddharth Sehgal",
    description: "Reach out for collaboration or connect on social platforms.",
    images: ["/images/Sidd1.webp"],
    creator: "@SiddDevTech",
  },
};

const channels = [
  {
    label: "Email",
    value: "siddnative@gmail.com",
    href: "mailto:siddnative@gmail.com",
    mono: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/siddsehgal",
    href: "https://www.linkedin.com/in/siddsehgal/",
    mono: false,
  },
  {
    label: "GitHub",
    value: "github.com/SiddDevCS",
    href: "https://github.com/SiddDevCS",
    mono: false,
  },
  {
    label: "YouTube",
    value: "@SiddDevTech",
    href: "https://www.youtube.com/@SiddDevTech",
    mono: false,
  },
];

export default function ContactPage() {
  return (
    <Section spacing="default" className="pt-24" size="narrow">
      <PageHeader
        label="Contact"
        title="Start a conversation"
        description="Open to internships, security research, product collaborations, and ambitious student projects."
        align="center"
      />

      <div className="surface-elevated rounded-2xl divide-y divide-white/[0.06] overflow-hidden">
        {channels.map((ch) => (
          <a
            key={ch.label}
            href={ch.href}
            target={ch.href.startsWith("mailto") ? undefined : "_blank"}
            rel={ch.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-6 hover:bg-white/[0.02] transition-colors group"
          >
            <span className="text-label text-neutral-600">{ch.label}</span>
            <span
              className={
                ch.mono
                  ? "text-mono-accent text-white group-hover:text-blue-300 transition-colors"
                  : "text-white group-hover:text-blue-300 transition-colors"
              }
            >
              {ch.value}
            </span>
          </a>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Button href="https://www.linkedin.com/in/siddsehgal/" size="lg" external>
          Message on LinkedIn
        </Button>
      </div>
    </Section>
  );
}
