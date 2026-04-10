// Main Pages Configuration
// This file defines the 10 core pages of PakBizBranches website
// Centralized configuration for page management and visibility

export interface PageConfig {
  slug: string
  title: string
  description: string
  requiresAuth: boolean
  enabled: boolean
  priority: number
  keywords?: string[]
}

export const MAIN_PAGES: PageConfig[] = [
  {
    slug: '/',
    title: 'Home',
    description: 'PakBizBranches - Pakistani Business Directory & Listings',
    requiresAuth: false,
    enabled: true,
    priority: 1,
    keywords: ['business directory pakistan', 'business listings', 'Pakistani businesses']
  },
  {
    slug: '/categories',
    title: 'Categories',
    description: 'Browse businesses by category - Restaurants, Real Estate, Services, and more',
    requiresAuth: false,
    enabled: true,
    priority: 2,
    keywords: ['business categories', 'browse businesses', 'business by category']
  },
  {
    slug: '/featured-businesses',
    title: 'Featured Businesses',
    description: 'Discover premium featured businesses on PakBizBranches',
    requiresAuth: false,
    enabled: true,
    priority: 3,
    keywords: ['featured businesses', 'premium businesses', 'top businesses pakistan']
  },
  {
    slug: '/add-business',
    title: 'Add Your Business',
    description: 'List your business on PakBizBranches for free',
    requiresAuth: false,
    enabled: true,
    priority: 4,
    keywords: ['add business', 'list your business', 'submit business listing']
  },
  {
    slug: '/blog',
    title: 'Blog',
    description: 'Business tips, guides, and strategies for Pakistani entrepreneurs',
    requiresAuth: false,
    enabled: true,
    priority: 5,
    keywords: ['business blog', 'business tips', 'business guides pakistan']
  },
  {
    slug: '/auth/login',
    title: 'Login',
    description: 'Sign in to your PakBizBranches account',
    requiresAuth: false,
    enabled: true,
    priority: 6,
    keywords: ['login', 'sign in', 'account login']
  },
  {
    slug: '/user/profile',
    title: 'My Profile',
    description: 'Manage your PakBizBranches profile and businesses',
    requiresAuth: true,
    enabled: true,
    priority: 7,
    keywords: ['user profile', 'my account', 'my businesses']
  },
  {
    slug: '/about',
    title: 'About',
    description: 'About PakBizBranches - Pakistani Business Directory',
    requiresAuth: false,
    enabled: true,
    priority: 8,
    keywords: ['about us', 'company info', 'business directory']
  },
  {
    slug: '/contact',
    title: 'Contact',
    description: 'Get in touch with PakBizBranches team',
    requiresAuth: false,
    enabled: true,
    priority: 9,
    keywords: ['contact us', 'support', 'get in touch']
  },
  {
    slug: '/admin',
    title: 'Admin',
    description: 'Admin dashboard - PakBizBranches',
    requiresAuth: true,
    enabled: true,
    priority: 10,
    keywords: ['admin', 'dashboard', 'management']
  }
]

// Helper functions for page management
export function getEnabledPages(): PageConfig[] {
  return MAIN_PAGES.filter(page => page.enabled)
}

export function getPageBySlug(slug: string): PageConfig | undefined {
  return MAIN_PAGES.find(page => page.slug === slug)
}

export function requiresAuth(slug: string): boolean {
  const page = getPageBySlug(slug)
  return page?.requiresAuth ?? false
}

export function getPagesSitemapUrls(): string[] {
  return MAIN_PAGES
    .filter(page => page.enabled && !page.requiresAuth) // Only public pages in sitemap
    .map(page => page.slug)
}
