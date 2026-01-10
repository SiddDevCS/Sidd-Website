import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import dynamic from 'next/dynamic';
import Script from 'next/script';
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
  title: "Siddharth Sehgal | Software Developer & Cybersecurity",
  description: "Portfolio of Siddharth Sehgal - Software Developer and Cybersecurity Enthusiast. Mobile apps, web development, CTF competitions, and security certifications.",
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
  metadataBase: new URL('https://siddharthsehgal.com'),
  openGraph: {
    title: "Siddharth Sehgal | Software Developer & Cybersecurity",
    description: "Portfolio of Siddharth Sehgal - Software Developer and Cybersecurity Enthusiast. Mobile apps, web development, CTF competitions, and security certifications.",
    url: 'https://siddharthsehgal.com',
    siteName: "Siddharth Sehgal's Portfolio",
    images: [
      {
        url: '/images/Sidd1.webp',
        width: 1200,
        height: 630,
        alt: 'Siddharth Sehgal - Software Developer and Cybersecurity Enthusiast',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Siddharth Sehgal | Software Developer & Cybersecurity",
    description: "Portfolio of Siddharth Sehgal - Software Developer and Cybersecurity Enthusiast. Mobile apps, web development, CTF competitions, and security certifications.",
    images: ['/images/Sidd1.webp'],
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
    canonical: 'https://siddharthsehgal.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured data for Organization and Website
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Siddharth Sehgal",
    "url": "https://siddharthsehgal.com",
    "image": "https://siddharthsehgal.com/images/Sidd1.webp",
    "sameAs": [
      "https://www.linkedin.com/in/siddsehgal/",
      "https://github.com/SiddDevCS",
      "https://www.youtube.com/@SiddDevTech",
      "https://medium.com/@siddnative"
    ],
    "jobTitle": "Software Developer & Cybersecurity Enthusiast",
    "description": "Software Developer and Cybersecurity Enthusiast. Experienced in mobile app development, web applications, AI integration, and cybersecurity."
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Siddharth Sehgal's Portfolio",
    "url": "https://siddharthsehgal.com",
    "author": {
      "@type": "Person",
      "name": "Siddharth Sehgal"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://siddharthsehgal.com/writeups?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-neutral-200 relative overflow-x-hidden selection:bg-blue-900/30 selection:text-blue-200`}>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
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
