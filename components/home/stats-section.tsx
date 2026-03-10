const stats = [
  { value: '50,000+', label: 'Businesses Listed', icon: '🏢' },
  { value: '200+', label: 'Categories', icon: '📂' },
  { value: '150+', label: 'Cities Covered', icon: '🏙️' },
  { value: '1M+', label: 'Monthly Visitors', icon: '👥' },
]

export default function StatsSection() {
  return (
    <section className="bg-[#f8fafc] py-14" aria-label="Directory statistics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 card-hover"
            >
              <div className="text-3xl mb-2" aria-hidden="true">{stat.icon}</div>
              <div className="text-3xl font-bold text-[#0f2b3d]">{stat.value}</div>
              <div className="text-sm text-gray-500 mt-1 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
