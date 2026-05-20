import type { Metadata } from "next";
import Hero from "@/app/components/home/Hero";
import NowBuilding from "@/app/components/home/NowBuilding";
import ProjectsShowcase from "@/app/components/home/ProjectsShowcase";
import SecuritySection from "@/app/components/home/SecuritySection";
import CTABand from "@/app/components/home/CTABand";

export const metadata: Metadata = {
  title: "Siddharth Sehgal | Software Developer & Cybersecurity",
  description:
    "Portfolio of Siddharth Sehgal — incoming HvA student building AI-powered apps, engineering web products, and competing in offensive security.",
  alternates: {
    canonical: "https://siddharthsehgal.com",
  },
  openGraph: {
    title: "Siddharth Sehgal | Software Developer & Cybersecurity",
    description:
      "Incoming HvA student — AI mobile apps, performant web engineering, Hack The Box write-ups, and CTF achievements.",
    url: "https://siddharthsehgal.com",
    siteName: "Siddharth Sehgal",
    images: [
      {
        url: "/images/Sidd1.webp",
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
    title: "Siddharth Sehgal | Software Developer & Cybersecurity",
    description:
      "Incoming HvA student — AI mobile apps, web engineering, and offensive security research.",
    images: ["/images/Sidd1.webp"],
    creator: "@SiddDevTech",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <NowBuilding />
      <ProjectsShowcase />
      <SecuritySection />
      <CTABand />
    </>
  );
}
