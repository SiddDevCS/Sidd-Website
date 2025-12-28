import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Write-ups | Sidd Sehgal',
  description: 'Explore my Hack The Box write-ups and cybersecurity journey. Detailed walkthroughs of machines and challenges.',
  openGraph: {
    title: 'Write-ups | Sidd Sehgal',
    description: 'Explore my Hack The Box write-ups and cybersecurity journey. Detailed walkthroughs of machines and challenges.',
  },
};

export default function WriteUpsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 