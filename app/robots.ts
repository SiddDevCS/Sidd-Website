import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/admin/', '/writeups', '/write-up-', '/journey'],
    },
    sitemap: 'https://siddharthsehgal.com/sitemap.xml',
  }
} 