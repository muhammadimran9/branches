import Link from 'next/link'
import { CATEGORIES } from '@/lib/data'

export default function CategoriesGrid() {
  return (
    <section className="py-16 bg-white" aria-labelledby="categories-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="categories-heading" className="text-3xl md:text-4xl font-bold text-[#0f2b3d] text-balance">
            Browse by Category
          </h2>
          <p className="mt-3 text-gray-500 text-lg">
            Explore thousands of businesses across popular categories
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/categories?cat=${cat.id}`}
              className="group bg-white border border-gray-100 rounded-2xl p-5 flex flex-col items-center text-center card-hover shadow-sm hover:border-[#60a5fa]/50 transition-colors"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-3 transition-transform duration-200 group-hover:scale-110"
                style={{ backgroundColor: cat.color + '18' }}
                aria-hidden="true"
              >
                {cat.icon}
              </div>
              <h3 className="font-semibold text-[#0f2b3d] text-sm leading-tight">{cat.name}</h3>
              <p className="text-xs text-gray-400 mt-1">{cat.count.toLocaleString()} listings</p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/categories"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0f2b3d] text-white rounded-xl font-semibold text-sm hover:bg-[#1a3f57] transition-colors duration-200"
          >
            View All Categories
          </Link>
        </div>
      </div>
    </section>
  )
}
