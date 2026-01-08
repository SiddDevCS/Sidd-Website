import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import dynamic from 'next/dynamic';
import "./globals.css";

const Navbar = dynamic(() => import("./components/Navbar"), {
  loading: () => <div className="h-16 bg-black/80 backdrop-blur-sm" />,
  ssr: true
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Siddharth Sehgal | Portfolio",
  description: "High School Student passionate about Software Development and Cybersecurity. Experienced in mobile app development, web applications, and AI integration.",
  keywords: [
    "Siddharth Sehgal",
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
  authors: [{ name: "Siddharth Sehgal" }],
  creator: "Siddharth Sehgal",
  publisher: "Siddharth Sehgal",
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
    title: "Siddharth Sehgal | Portfolio",
    description: "High School Student passionate about Software Development and Cybersecurity. Experienced in mobile app development, web applications, and AI integration.",
    url: 'https://siddsehgal.com',
    siteName: "Siddharth Sehgal's Portfolio",
    images: [
      {
        url: '/images/Sidd1.webp', // Updated to use existing optimized image
        width: 128,
        height: 128,
        alt: 'Siddharth Sehgal - Software Developer and Cybersecurity Enthusiast',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Siddharth Sehgal | Portfolio",
    description: "High School Student passionate about Software Development and Cybersecurity. Experienced in mobile app development, web applications, and AI integration.",
    images: ['/images/Sidd1.webp'], // Updated to use existing optimized image
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
        {/* Optimized Static Background */}
        <div aria-hidden="true" className="fixed inset-0 -z-10">
          {/* Single static gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 to-neutral-950" />
          {/* Subtle accent without heavy animations */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-950/10 to-transparent opacity-60" />
        </div>

        <Navbar />

        {/* Main Content */}
        <main className="flex flex-col items-center justify-center min-h-screen w-full px-4 py-8" role="main">
          {children}
        </main>
        
        {/* Footer */}
        <footer className="text-center py-8 text-neutral-500 text-sm" role="contentinfo">
          <p>&copy; {new Date().getFullYear()} Siddharth Sehgal. All rights reserved.</p>
        </footer>
        
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
