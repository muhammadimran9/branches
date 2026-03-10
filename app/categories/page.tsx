'use client'

import { useState, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Search, MapPin, SlidersHorizontal, ArrowRight } from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { CATEGORIES, CITIES } from '@/lib/data'

export default function CategoriesPage() {
  const searchParams = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('q') || '')
  const [city, setCity] = useState(searchParams.get('city') || '')
  const [selectedCat, setSelectedCat] = useState(searchParams.get('cat') || '')

  const filtered = useMemo(() => {
    return CATEGORIES.filter((cat) => {
      if (selectedCat && cat.id !== selectedCat) return false
      if (query && !cat.name.toLowerCase().includes(query.toLowerCase())) return false
      return true
    })
  }, [query, selectedCat])

  return (
    <>
      <Navbar />
      <main>
        {/* Page Header */}
        <section className="bg-[#0f2b3d] py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white text-balance">
              Business Categories
            </h1>
            <p className="mt-2 text-white/60 text-lg">
              Browse all {CATEGORIES.length} categories across Pakistan
            </p>

            {/* Filter Bar */}
            <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-2xl p-4 flex flex-col sm:flex-row gap-3">
              <div className="flex items-center gap-2 flex-1 bg-white rounded-xl px-4 py-2.5">
                <Search className="w-4 h-4 text-gray-400 shrink-0" aria-hidden="true" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search categories..."
                  className="flex-1 text-sm text-gray-700 placeholder-gray-400 bg-transparent outline-none"
                  aria-label="Search categories"
                />
              </div>
              <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-2.5 sm:w-48">
                <MapPin className="w-4 h-4 text-gray-400 shrink-0" aria-hidden="true" />
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="flex-1 text-sm text-gray-600 bg-transparent outline-none cursor-pointer"
                  aria-label="Select city"
                >
                  <option value="">All Cities</option>
                  {CITIES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-2.5">
                <SlidersHorizontal className="w-4 h-4 text-gray-400" aria-hidden="true" />
                <select
                  value={selectedCat}
                  onChange={(e) => setSelectedCat(e.target.value)}
                  className="text-sm text-gray-600 bg-transparent outline-none cursor-pointer"
                  aria-label="Filter category"
                >
                  <option value="">All Categories</option>
                  {CATEGORIES.map((c) => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-14 bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filtered.length === 0 ? (
              <div className="text-center py-20 text-gray-400">
                <p className="text-xl font-semibold">No categories found</p>
                <p className="mt-2 text-sm">Try a different search term</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/categories?cat=${cat.id}${city ? `&city=${city}` : ''}`}
                    className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 card-hover flex items-center gap-5"
                    onClick={() => setSelectedCat(cat.id)}
                  >
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl shrink-0 transition-transform duration-200 group-hover:scale-110"
                      style={{ backgroundColor: cat.color + '1a' }}
                      aria-hidden="true"
                    >
                      {cat.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="font-semibold text-[#0f2b3d] text-base">{cat.name}</h2>
                      <p className="text-sm text-gray-400 mt-0.5">
                        {cat.count.toLocaleString()} listings
                        {city ? ` in ${city}` : ' across Pakistan'}
                      </p>
                      <div className="mt-2 flex items-center gap-1 text-[#60a5fa] text-xs font-medium">
                        Browse listings <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                    <div
                      className="w-1 self-stretch rounded-full shrink-0"
                      style={{ backgroundColor: cat.color }}
                      aria-hidden="true"
                    />
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white py-12 border-t border-gray-100">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-[#0f2b3d]">
              Can&apos;t find your business?
            </h2>
            <p className="mt-2 text-gray-500">List your company for free and reach thousands of customers.</p>
            <Link
              href="/add-business"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-[#60a5fa] text-white rounded-xl font-semibold text-sm hover:bg-blue-400 transition-colors duration-200"
            >
              Add Your Business Free
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
