import { baseUrl } from 'app/sitemap'
import { getProjects } from 'lib/projects'

export async function GET() {
  let allProjects = await getProjects()

  const itemsXml = allProjects
    .sort((a, b) => {
      if (new Date(a.publishedAt || 0) > new Date(b.publishedAt || 0)) {
        return -1
      }
      return 1
    })
    .map(
      post =>
        `<item>
          <title>${post.title}</title>
          <link>${baseUrl}/blog/${post.slug}</link>
          <description>${post.summary || ''}</description>
          <pubDate>${new Date(
            post.publishedAt || ''
          ).toUTCString()}</pubDate>
        </item>`
    )
    .join('\n')

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
        <title>Nikolas Tolvanen Portfolio</title>
        <link>${baseUrl}</link>
        <description>This is my portfolio RSS feed</description>
        ${itemsXml}
    </channel>
  </rss>`

  return new Response(rssFeed, {
    headers: {
      'Content-Type': 'text/xml'
    }
  })
}
