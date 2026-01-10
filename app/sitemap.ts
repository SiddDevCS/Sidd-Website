import { MetadataRoute } from 'next'
import { getAllWriteUps } from './data/writeups'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://siddharthsehgal.com'
  
  // Get all writeups for dynamic routes
  const writeups = getAllWriteUps()
  
  // Static pages - ensure all URLs are absolute and properly formatted
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/writeups`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ctfs`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/certifications`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/journey`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  // Dynamic writeup pages - ensure all URLs are absolute
  const writeupPages: MetadataRoute.Sitemap = writeups.map((writeup) => ({
    url: `${baseUrl}/writeups/${writeup.slug}`,
    lastModified: new Date(writeup.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticPages, ...writeupPages]
} 