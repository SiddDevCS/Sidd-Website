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
  title: "Siddharth Sehgal | HBO-ICT student at HvA",
  description:
    "Siddharth Sehgal is in the propedeuse year of the HBO-ICT bachelor at the Hogeschool van Amsterdam. He builds software and competes in hackathons and CTFs.",
  keywords: [
    "Siddharth Sehgal",
    "Software Development",
    "Cybersecurity",
    "Mobile Apps",
    "Web Development",
    "AI Integration",
    "TripCraft",
    "StudieBuddie",
    "HvA",
    "HBO-ICT",
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
    title: "Siddharth Sehgal | HBO-ICT student at HvA",
    description:
      "Propedeuse year of the HBO-ICT bachelor at the Hogeschool van Amsterdam.",
    url: "https://siddharthsehgal.com",
    siteName: "Siddharth Sehgal",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Siddharth Sehgal",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Siddharth Sehgal | HBO-ICT student at HvA",
    description:
      "Propedeuse year of the HBO-ICT bachelor at the Hogeschool van Amsterdam.",
    images: ["/og.png"],
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
    image: "https://siddharthsehgal.com/og.png",
    sameAs: [
      "https://www.linkedin.com/in/siddsehgal/",
      "https://github.com/SiddDevCS",
      "https://www.youtube.com/@SiddDevTech",
      "https://medium.com/@siddnative",
    ],
    jobTitle: "HBO-ICT Student",
    description:
      "HBO-ICT student at the Hogeschool van Amsterdam. Builds software and competes in hackathons and CTFs.",
    affiliation: {
      "@type": "CollegeOrUniversity",
      name: "Hogeschool van Amsterdam",
    },
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
