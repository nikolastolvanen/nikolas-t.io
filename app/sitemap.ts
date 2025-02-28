import type { MetadataRoute } from 'next'

export const baseUrl = 'https://nikolas-t.io'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: '${baseUrl}',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1
    },
    {
      url: '${baseUrl}/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: '${baseUrl}/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: '${baseUrl}/projects',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8
    },
    {
      url: '${baseUrl}/projects/tasks-android-app',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5
    }
  ]
}
