import { notFound } from 'next/navigation';
import { getWriteUpBySlug, getAllWriteUps } from '../../data/writeups';
import WriteUpTemplate from '../../components/WriteUpTemplate';
import ProtectedWriteUp from '../../components/ProtectedWriteUp';
import type { Metadata } from 'next';
import Script from 'next/script';

export const revalidate = 86400; // Revalidate daily

// Generate static params for all write-ups
export async function generateStaticParams() {
  const writeups = getAllWriteUps();
  return writeups.map((writeup) => ({
    slug: writeup.slug,
  }));
}

// Generate metadata for each write-up
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const writeup = getWriteUpBySlug(slug);
  
  if (!writeup) {
    return {
      title: 'Write-up Not Found | Sidd Sehgal',
    };
  }

  return {
    title: `${writeup.title} Write-up | Sidd Sehgal`,
    description: writeup.description,
    keywords: writeup.tags,
    openGraph: {
      title: `${writeup.title} Write-up | Sidd Sehgal`,
      description: writeup.description,
      type: 'article',
    },
  };
}

// Import write-up components
const EditorWriteUp = () => import('../../write-up-machine-editor/page').then(mod => mod.default);
const JinjaCareWriteUp = () => import('../../write-up-bugbountyctf-jinjacare/page').then(mod => mod.default);
const NeoVaultWriteUp = () => import('../../write-up-bugbountyctf-neovault/page').then(mod => mod.default);
const CodeWriteUp = () => import('../../write-up-machine-code/page').then(mod => mod.default);
const NocturnalWriteUp = () => import('../../write-up-machine-nocturnal/page').then(mod => mod.default);
const DogWriteUp = () => import('../../write-up-machine-dog/page').then(mod => mod.default);
const OutboundWriteUp = () => import('../../write-up-machine-outbound/page').then(mod => mod.default);
const EraWriteUp = () => import('../../write-up-era/page').then(mod => mod.default);

const writeupComponents: Record<string, () => Promise<React.ComponentType>> = {
  editor: EditorWriteUp,
  jinjacare: JinjaCareWriteUp,
  neovault: NeoVaultWriteUp,
  code: CodeWriteUp,
  nocturnal: NocturnalWriteUp,
  dog: DogWriteUp,
  outbound: OutboundWriteUp,
  era: EraWriteUp,
};

export default async function WriteUpPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const writeup = getWriteUpBySlug(slug);
  
  if (!writeup) {
    notFound();
  }

  const WriteUpComponent = writeupComponents[slug];
  
  if (!WriteUpComponent) {
    notFound();
  }

  const Component = await WriteUpComponent();

  // Generate structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": `${writeup.title} Write-up`,
    "description": writeup.description,
    "author": {
      "@type": "Person",
      "name": "Sidd Sehgal",
      "url": "https://siddsehgal.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Sidd Sehgal's Portfolio",
      "url": "https://siddsehgal.com"
    },
    "datePublished": writeup.date,
    "dateModified": writeup.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://siddsehgal.com/writeups/${writeup.slug}`
    },
    "keywords": writeup.tags.join(", "),
    "articleSection": writeup.category,
    "inLanguage": "en-US"
  };

  return (
    <>
      <Script
        id="writeup-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ProtectedWriteUp slug={slug} title={writeup.title}>
        <WriteUpTemplate
          title={writeup.title}
          category={writeup.category}
          difficulty={writeup.difficulty}
        >
          <Component />
        </WriteUpTemplate>
      </ProtectedWriteUp>
    </>
  );
} 