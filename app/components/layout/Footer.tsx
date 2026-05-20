import Link from "next/link";
import Container from "../ui/Container";

const links = [
  { name: "Write-ups", href: "/writeups" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Journey", href: "/journey" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] mt-auto" role="contentinfo">
      <Container className="py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="text-sm font-medium text-white mb-1">Siddharth Sehgal</p>
            <p className="text-sm text-neutral-500">
              Software developer · Cybersecurity · Incoming HvA
            </p>
          </div>
          <nav className="flex flex-wrap gap-6" aria-label="Footer">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-neutral-500 hover:text-white transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-10 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-xs text-neutral-600">
            © {new Date().getFullYear()} Siddharth Sehgal. All rights reserved.
          </p>
          <p className="text-mono-accent text-xs">
            Built with Next.js · Deployed on Vercel
          </p>
        </div>
      </Container>
    </footer>
  );
}
