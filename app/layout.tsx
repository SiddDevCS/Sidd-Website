import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sidd Sehgal | Portfolio",
  description: "High School Student passionate about Software Development and Cybersecurity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-neutral-200 relative overflow-x-hidden selection:bg-blue-900/30 selection:text-blue-200`}>
        {/* Animated Background Effects */}
        <div aria-hidden="true" className="fixed inset-0 -z-10">
          {/* Main gradient */}
          <div className="absolute inset-0 animate-gradient bg-gradient-to-br from-black via-neutral-900 to-neutral-950 opacity-90" />
          {/* Accent gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-950/20 to-transparent opacity-50 blur-3xl" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-900/30 to-transparent opacity-70 blur-2xl" />
        </div>

        {/* Navigation */}
        <nav className="w-full flex justify-center py-6 glass-dark sticky top-0 z-50">
          <ul className="flex gap-8 text-lg font-medium stagger-animation">
            <li>
              <a href="/" className="hover:text-blue-400 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-400 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="/experience" className="hover:text-blue-400 transition-colors">
                Experience
              </a>
            </li>
            <li>
              <a href="/portfolio" className="hover:text-blue-400 transition-colors">
                Portfolio
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-400 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Main Content */}
        <main className="flex flex-col items-center justify-center min-h-screen w-full px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
