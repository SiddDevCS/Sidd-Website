import type { Metadata } from "next";
import Button from "@/app/components/ui/Button";
import Container from "@/app/components/ui/Container";
import PageHeader from "@/app/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Contact | Siddharth Sehgal",
  description: "Get in touch with Siddharth Sehgal.",
  alternates: { canonical: "https://siddharthsehgal.com/contact" },
  openGraph: {
    title: "Contact | Siddharth Sehgal",
    description: "Email and social links for Siddharth Sehgal.",
    url: "https://siddharthsehgal.com/contact",
    siteName: "Siddharth Sehgal",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Contact" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Siddharth Sehgal",
    description: "Email and social links for Siddharth Sehgal.",
    images: ["/og.png"],
    creator: "@SiddDevTech",
  },
};

const channels = [
  {
    label: "Email",
    value: "siddnative@gmail.com",
    href: "mailto:siddnative@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/siddsehgal",
    href: "https://www.linkedin.com/in/siddsehgal/",
  },
  {
    label: "GitHub",
    value: "github.com/SiddDevCS",
    href: "https://github.com/SiddDevCS",
  },
  {
    label: "YouTube",
    value: "@SiddDevTech",
    href: "https://www.youtube.com/@SiddDevTech",
  },
];

export default function ContactPage() {
  return (
    <section className="pt-28 pb-24">
      <Container size="narrow">
        <PageHeader
          label="Contact"
          title="Get in touch"
          description="Email or a social link is enough."
        />

        <div className="surface-elevated rounded-2xl divide-y divide-white/[0.06] overflow-hidden">
          {channels.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              target={channel.href.startsWith("mailto") ? undefined : "_blank"}
              rel={channel.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-6 hover:bg-white/[0.03] transition-colors group"
            >
              <span className="text-label">{channel.label}</span>
              <span className="text-white group-hover:text-blue-300 transition-colors">
                {channel.value}
              </span>
            </a>
          ))}
        </div>

        <div className="mt-8">
          <Button href="mailto:siddnative@gmail.com" size="lg">
            Email me
          </Button>
        </div>
      </Container>
    </section>
  );
}
