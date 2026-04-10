// Server-side Firebase utilities
// Optimized queries with proper filtering at database level
// Reduces network payload and improves performance

import { db } from './firebase'
import {
  collection,
  query,
  where,
  orderBy,
  limit,
  getDocs,
  QueryConstraint,
} from 'firebase/firestore'

export interface Business {
  id: string
  businessName: string
  slug?: string
  city: string
  category: string
  categoryId?: string
  description: string
  phone: string
  logoUrl?: string
  status: string
  isFeatured?: boolean
  createdAt: any
  rating?: number
  reviewCount?: number
  websiteUrl?: string
  facebookPage?: string
}

const LIVE_STATUSES = new Set(['approved', 'active', 'live', ''])

// Fetch latest businesses - server-side optimized query
export async function fetchLatestBusinesses(count: number = 8): Promise<Business[]> {
  try {
    const constraints: QueryConstraint[] = [
      orderBy('createdAt', 'desc'),
      limit(count),
    ]

    const q = query(collection(db, 'businesses'), ...constraints)
    const snapshot = await getDocs(q)

    const businesses: Business[] = []
    snapshot.docs.forEach(doc => {
      const data = doc.data() as any
      const status = String(data.status ?? '').toLowerCase()

      if (!status || LIVE_STATUSES.has(status)) {
        businesses.push({
          id: doc.id,
          businessName: data.businessName,
          slug: data.slug,
          city: data.city,
          category: data.category,
          categoryId: data.categoryId,
          description: data.description,
          phone: data.phone,
          logoUrl: data.logoUrl,
          status: data.status,
          isFeatured: data.isFeatured,
          createdAt: data.createdAt,
          rating: data.rating,
          reviewCount: data.reviewCount,
          websiteUrl: data.websiteUrl,
          facebookPage: data.facebookPage,
        })
      }
    })

    return businesses
  } catch (error) {
    console.error('Error fetching latest businesses:', error)
    return []
  }
}

// Fetch featured businesses - server-side optimized query
export async function fetchFeaturedBusinesses(count: number = 4): Promise<Business[]> {
  try {
    const constraints: QueryConstraint[] = [
      where('isFeatured', '==', true),
      orderBy('createdAt', 'desc'),
      limit(count),
    ]

    const q = query(collection(db, 'businesses'), ...constraints)
    const snapshot = await getDocs(q)

    const businesses: Business[] = []
    snapshot.docs.forEach(doc => {
      const data = doc.data() as any
      const status = String(data.status ?? '').toLowerCase()

      if (!status || LIVE_STATUSES.has(status)) {
        businesses.push({
          id: doc.id,
          businessName: data.businessName,
          slug: data.slug,
          city: data.city,
          category: data.category,
          categoryId: data.categoryId,
          description: data.description,
          phone: data.phone,
          logoUrl: data.logoUrl,
          status: data.status,
          isFeatured: data.isFeatured,
          createdAt: data.createdAt,
          rating: data.rating,
          reviewCount: data.reviewCount,
          websiteUrl: data.websiteUrl,
          facebookPage: data.facebookPage,
        })
      }
    })

    return businesses
  } catch (error) {
    console.error('Error fetching featured businesses:', error)
    return []
  }
}

// Fetch businesses by category - server-side optimized query
export async function fetchCategoryBusinesses(
  categoryId: string,
  pageLimit: number = 20
): Promise<Business[]> {
  try {
    const constraints: QueryConstraint[] = [
      where('categoryId', '==', categoryId),
      orderBy('isFeatured', 'desc'),
      orderBy('createdAt', 'desc'),
      limit(pageLimit),
    ]

    const q = query(collection(db, 'businesses'), ...constraints)
    const snapshot = await getDocs(q)

    const businesses: Business[] = []
    snapshot.docs.forEach(doc => {
      const data = doc.data() as any
      const status = String(data.status ?? '').toLowerCase()

      if (!status || LIVE_STATUSES.has(status)) {
        businesses.push({
          id: doc.id,
          businessName: data.businessName,
          slug: data.slug,
          city: data.city,
          category: data.category,
          categoryId: data.categoryId,
          description: data.description,
          phone: data.phone,
          logoUrl: data.logoUrl,
          status: data.status,
          isFeatured: data.isFeatured,
          createdAt: data.createdAt,
          rating: data.rating,
          reviewCount: data.reviewCount,
          websiteUrl: data.websiteUrl,
          facebookPage: data.facebookPage,
        })
      }
    })

    return businesses
  } catch (error) {
    console.error('Error fetching category businesses:', error)
    return []
  }
}

// Fetch businesses by city - server-side optimized query
export async function fetchCityBusinesses(
  city: string,
  pageLimit: number = 20
): Promise<Business[]> {
  try {
    const constraints: QueryConstraint[] = [
      where('city', '==', city),
      orderBy('isFeatured', 'desc'),
      orderBy('createdAt', 'desc'),
      limit(pageLimit),
    ]

    const q = query(collection(db, 'businesses'), ...constraints)
    const snapshot = await getDocs(q)

    const businesses: Business[] = []
    snapshot.docs.forEach(doc => {
      const data = doc.data() as any
      const status = String(data.status ?? '').toLowerCase()

      if (!status || LIVE_STATUSES.has(status)) {
        businesses.push({
          id: doc.id,
          businessName: data.businessName,
          slug: data.slug,
          city: data.city,
          category: data.category,
          categoryId: data.categoryId,
          description: data.description,
          phone: data.phone,
          logoUrl: data.logoUrl,
          status: data.status,
          isFeatured: data.isFeatured,
          createdAt: data.createdAt,
          rating: data.rating,
          reviewCount: data.reviewCount,
          websiteUrl: data.websiteUrl,
          facebookPage: data.facebookPage,
        })
      }
    })

    return businesses
  } catch (error) {
    console.error('Error fetching city businesses:', error)
    return []
  }
}
