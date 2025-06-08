import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
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
  description: "High School Student passionate about Software Development and Cybersecurity. Experienced in mobile app development, web applications, and AI integration.",
  keywords: [
    "Sidd Sehgal",
    "Software Development",
    "Cybersecurity",
    "Mobile Apps",
    "Web Development",
    "AI Integration",
    "TripCraft",
    "StudieBuddie",
    "iOS Development",
    "Next.js",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "Sidd Sehgal" }],
  creator: "Sidd Sehgal",
  publisher: "Sidd Sehgal",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png"
  },
  manifest: "/manifest.json",
  metadataBase: new URL('https://siddsehgal.com'),
  openGraph: {
    title: "Sidd Sehgal | Portfolio",
    description: "High School Student passionate about Software Development and Cybersecurity. Experienced in mobile app development, web applications, and AI integration.",
    url: 'https://siddsehgal.com',
    siteName: "Sidd Sehgal's Portfolio",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sidd Sehgal - Software Developer and Cybersecurity Enthusiast',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Sidd Sehgal | Portfolio",
    description: "High School Student passionate about Software Development and Cybersecurity. Experienced in mobile app development, web applications, and AI integration.",
    images: ['/og-image.jpg'],
    creator: '@SiddDevTech',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // You'll need to add your verification code here
  },
  alternates: {
    canonical: 'https://siddsehgal.com',
  },
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

        <Navbar />

        {/* Main Content */}
        <main className="flex flex-col items-center justify-center min-h-screen w-full px-4 py-8">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}
