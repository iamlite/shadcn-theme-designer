import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://shadesigner.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1
    }
  ]
}
