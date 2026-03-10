import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'PakBizBranches – Pakistan Business Directory | Find Local Companies',
  description:
    'PakBizBranches is Pakistan\'s leading online business directory. Find local companies, restaurants, services, and more across 150+ cities. List your business free.',
  keywords: 'Pakistan business directory, local companies Pakistan, find businesses Pakistan, PakBizBranches',
  authors: [{ name: 'PakBizBranches', url: 'https://pakbizbranhces.online' }],
  metadataBase: new URL('https://pakbizbranhces.online'),
  openGraph: {
    title: 'PakBizBranches – Pakistan Business Directory',
    description:
      'Find local companies in Pakistan. Browse 50,000+ businesses across 200 categories and 150 cities.',
    url: 'https://pakbizbranhces.online',
    siteName: 'PakBizBranches',
    locale: 'en_PK',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PakBizBranches – Pakistan Business Directory',
    description: 'Find local companies in Pakistan. 50,000+ businesses listed.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'PakBizBranches',
              url: 'https://pakbizbranhces.online',
              description:
                "Pakistan's leading online business directory with 50,000+ listings.",
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://pakbizbranhces.online/categories?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
