import Link from "next/link";
import Container from "../ui/Container";

const links = [
  { name: "About", href: "/about" },
  { name: "Work", href: "/portfolio" },
  { name: "Achievements", href: "/achievements" },
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
              HBO-ICT student at HvA
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
        <div className="mt-10 pt-8 border-t border-white/[0.04]">
          <p className="text-xs text-neutral-600">
            © {new Date().getFullYear()} Siddharth Sehgal. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
