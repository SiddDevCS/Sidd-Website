import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import SiteBackground from "@/app/components/layout/SiteBackground";
import ScrollProgress from "@/app/components/layout/ScrollProgress";
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
  title: "Siddharth Sehgal | Software Developer & Cybersecurity",
  description:
    "Portfolio of Siddharth Sehgal — software developer, cybersecurity enthusiast, and incoming HvA student. Mobile apps, CTF write-ups, and security research.",
  keywords: [
    "Siddharth Sehgal",
    "Software Development",
    "Cybersecurity",
    "Mobile Apps",
    "Web Development",
    "AI Integration",
    "TripCraft",
    "StudieBuddie",
    "Hack The Box",
    "CTF",
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
    apple: "/favicon.png",
  },
  manifest: "/manifest.json",
  metadataBase: new URL("https://siddharthsehgal.com"),
  openGraph: {
    title: "Siddharth Sehgal | Software Developer & Cybersecurity",
    description:
      "Portfolio of Siddharth Sehgal — software developer, cybersecurity enthusiast, and incoming HvA student.",
    url: "https://siddharthsehgal.com",
    siteName: "Siddharth Sehgal",
    images: [
      {
        url: "/images/Sidd1.webp",
        width: 1200,
        height: 630,
        alt: "Siddharth Sehgal — Software Developer and Cybersecurity Enthusiast",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Siddharth Sehgal | Software Developer & Cybersecurity",
    description:
      "Portfolio of Siddharth Sehgal — software developer, cybersecurity enthusiast, and incoming HvA student.",
    images: ["/images/Sidd1.webp"],
    creator: "@SiddDevTech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://siddharthsehgal.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Siddharth Sehgal",
    url: "https://siddharthsehgal.com",
    image: "https://siddharthsehgal.com/images/Sidd1.webp",
    sameAs: [
      "https://www.linkedin.com/in/siddsehgal/",
      "https://github.com/SiddDevCS",
      "https://www.youtube.com/@SiddDevTech",
      "https://medium.com/@siddnative",
    ],
    jobTitle: "Software Developer & Cybersecurity Enthusiast",
    description:
      "Software developer and cybersecurity enthusiast. Incoming HvA student. Builds AI-powered mobile apps and documents offensive security research.",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Siddharth Sehgal",
    url: "https://siddharthsehgal.com",
    author: {
      "@type": "Person",
      name: "Siddharth Sehgal",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://siddharthsehgal.com/writeups?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
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
        <ScrollProgress />
        <SiteBackground />
        <Navbar />
        <main className="flex-1 w-full" role="main">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
