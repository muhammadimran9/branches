import { MetadataRoute } from 'next'
import { db } from '@/lib/firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { CITIES, CATEGORIES } from '@/lib/data'

const BASE_URL = 'https://pakbizbranhces.online'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: 'daily', priority: 1.0 },
    { url: `${BASE_URL}/categories`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/add-business`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
  ]

  // Programmatic city pages
  const cityPages: MetadataRoute.Sitemap = CITIES.map(city => ({
    url: `${BASE_URL}/cities/${encodeURIComponent(city.toLowerCase().replace(/ /g, '-'))}`,
    lastModified: now,
    changeFrequency: 'daily' as const,
    priority: 0.85,
  }))

  // Programmatic category pages
  const categoryPages: MetadataRoute.Sitemap = CATEGORIES.map(cat => ({
    url: `${BASE_URL}/category/${cat.id}`,
    lastModified: now,
    changeFrequency: 'daily' as const,
    priority: 0.85,
  }))

  // City + Category pages
  const cityCategoryPages: MetadataRoute.Sitemap = CITIES.flatMap(city =>
    CATEGORIES.map(cat => ({
      url: `${BASE_URL}/businesses/${encodeURIComponent(city.toLowerCase().replace(/ /g, '-'))}/${cat.id}`,
      lastModified: now,
      changeFrequency: 'daily' as const,
      priority: 0.8,
    }))
  )

  // Blog post pages
  let blogPages: MetadataRoute.Sitemap = []
  try {
    const { BLOG_POSTS } = await import('@/lib/blog-data')
    blogPages = BLOG_POSTS.map(post => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  } catch {}

  // Dynamic business pages
  let businessPages: MetadataRoute.Sitemap = []
  try {
    const q = query(collection(db, 'businesses'), where('status', '==', 'approved'))
    const snap = await getDocs(q)
    businessPages = snap.docs
      .map(doc => doc.data())
      .filter(data => data.slug)
      .map(data => ({
        url: `${BASE_URL}/${data.slug}`,
        lastModified: data.updatedAt ? new Date(data.updatedAt.toDate?.() ?? data.updatedAt) : now,
        changeFrequency: 'weekly' as const,
        priority: 0.75,
      }))
  } catch {}

  return [
    ...staticPages,
    ...cityPages,
    ...categoryPages,
    ...cityCategoryPages,
    ...blogPages,
    ...businessPages,
  ]
}
