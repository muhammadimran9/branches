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
    { url: `${BASE_URL}/developer`, lastModified: now, changeFrequency: 'monthly', priority: 0.4 },
  ]

  // Bank branch pages (SEO optimized for specific keywords)
  const bankBranchPages: MetadataRoute.Sitemap = [
    { 
      url: `${BASE_URL}/habib-bank-limited-f-10-markaz-branch-islamabad`, 
      lastModified: now, 
      changeFrequency: 'weekly', 
      priority: 0.9 
    },
    { 
      url: `${BASE_URL}/standard-chartered-bank-johar-town-branch-lahore`, 
      lastModified: now, 
      changeFrequency: 'weekly', 
      priority: 0.9 
    },
  ]


  // Blog post pages - Limited to 15 posts max (uncomment as needed daily)
  let blogPages: MetadataRoute.Sitemap = []
  try {
    // Try to get blog posts from Firebase first
    const blogSnap = await getDocs(collection(db, 'blogPosts'))
    blogPages = blogSnap.docs
      .slice(0, 15) // Limit to first 15 posts
      .map(doc => {
        const blog = doc.data()
        return {
          url: `${BASE_URL}/blog/${doc.id}`,
          lastModified: blog.updatedAt ? new Date(blog.updatedAt.toDate?.() ?? blog.updatedAt) : new Date(blog.date || now),
          changeFrequency: 'weekly' as const,
          priority: 0.7,
        }
      })
  } catch (error) {
    console.log('Firebase blog posts not available, trying static data')
    try {
      // Fallback to static blog data - Limited to 15 posts
      const { BLOG_POSTS } = await import('@/lib/blog-data')
      
      // Filter out hidden posts and limit to 15
      const activePosts = BLOG_POSTS.filter(post => !post.hidden).slice(0, 15)
      
      blogPages = activePosts.map(post => ({
        url: `${BASE_URL}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      }))
    } catch (staticError) {
      console.log('Static blog data not available')
    }
  }

  // Dynamic business pages
  let businessPages: MetadataRoute.Sitemap = []
  const activeCities = new Set<string>()
  const activeCategories = new Set<string>()
  const activeCityCategoryPairs = new Set<string>()

  try {
    const q = query(collection(db, 'businesses'), where('status', '==', 'approved'))
    const snap = await getDocs(q)
    businessPages = snap.docs
      .map(doc => {
        const data = doc.data()
        const citySlug = data.city?.toLowerCase().replace(/ /g, '-')
        const categorySlug = data.category
        
        if (citySlug) activeCities.add(citySlug)
        if (categorySlug) activeCategories.add(categorySlug)
        if (citySlug && categorySlug) activeCityCategoryPairs.add(`${citySlug}|${categorySlug}`)

        return {
          url: data.slug ? `${BASE_URL}/${data.slug}` : `${BASE_URL}/business/${doc.id}`,
          lastModified: data.updatedAt ? new Date(data.updatedAt.toDate?.() ?? data.updatedAt) : (data.createdAt ? new Date(data.createdAt.toDate?.() ?? data.createdAt) : now),
          changeFrequency: 'weekly' as const,
          priority: 0.75,
        }
      })
  } catch (error) {
    console.error('Error fetching businesses for sitemap:', error)
  }

  // Filtered programmatic city pages
  const cityPages: MetadataRoute.Sitemap = Array.from(activeCities).map(citySlug => ({
    url: `${BASE_URL}/cities/${citySlug}`,
    lastModified: now,
    changeFrequency: 'daily' as const,
    priority: 0.85,
  }))

  // Filtered programmatic category pages
  const categoryPages: MetadataRoute.Sitemap = Array.from(activeCategories).map(catSlug => ({
    url: `${BASE_URL}/categories/${catSlug}`,
    lastModified: now,
    changeFrequency: 'daily' as const,
    priority: 0.85,
  }))

  // Filtered City + Category pages
  const cityCategoryPages: MetadataRoute.Sitemap = Array.from(activeCityCategoryPairs).map(pair => {
    const [citySlug, catSlug] = pair.split('|')
    return {
      url: `${BASE_URL}/locations/${citySlug}/${catSlug}`,
      lastModified: now,
      changeFrequency: 'daily' as const,
      priority: 0.8,
    }
  })

  return [
    ...staticPages,
    ...bankBranchPages,
    ...cityPages,
    ...categoryPages,
    ...cityCategoryPages,
    ...blogPages,
    ...businessPages,
  ]
}
