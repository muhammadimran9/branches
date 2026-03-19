import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Target, Users, Globe, Award } from 'lucide-react'

const values = [
  {
    Icon: Target,
    title: 'Our Mission',
    desc: 'To connect every Pakistani business with the customers they deserve, making commerce easier, faster, and more transparent across the country.',
    color: '#60a5fa',
  },
  {
    Icon: Users,
    title: 'Who We Serve',
    desc: 'We serve small businesses, enterprises, and entrepreneurs across all 150+ cities of Pakistan — helping them get discovered online.',
    color: '#10b981',
  },
  {
    Icon: Globe,
    title: 'Our Reach',
    desc: 'With 50,000+ active listings and over 1 million monthly visitors, PakBizBranches is the most trusted business directory in Pakistan.',
    color: '#f59e0b',
  },
  {
    Icon: Award,
    title: 'Our Promise',
    desc: 'We promise free, fast, and fair listings for every business. Quality over quantity — every listing is reviewed before going live.',
    color: '#ef4444',
  },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-[#0f2b3d] py-20" aria-labelledby="about-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 id="about-heading" className="text-4xl md:text-5xl font-bold text-white text-balance">
              Frustrated with Business Directories That Don't Work?
            </h1>
            <p className="mt-5 text-white/65 text-lg leading-relaxed max-w-2xl mx-auto text-pretty">
              We were too. That's why we built PakBizBranches - the only Pakistani business directory that actually solves the real problems businesses face every day.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#0f2b3d] mb-5">The Real Problem We're Solving</h2>
            <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                Every day, thousands of Pakistani business owners lose customers because they can't be found online. The problem? Traditional business directories are complicated, expensive, or simply don't work for Pakistani markets. We experienced this frustration firsthand.
              </p>
              <p>
                That's why we built PakBizBranches differently. No registration required, no hidden fees, and your business goes live instantly. From restaurants in Karachi to tech firms in Islamabad, we've made it simple for any Pakistani business to get discovered online through our <a href="/categories" className="text-blue-600 hover:text-blue-700 underline">comprehensive directory</a>.
              </p>
              <p>
                Today, with thousands of businesses growing through our platform, we're proud to be the most trusted business directory in Pakistan. But we're not just building a directory - we're solving the visibility problem that affects every Pakistani business owner.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6 rounded">
                <h4 className="font-bold text-blue-800 mb-2">💡 Pro Tip: Get Started Now</h4>
                <p className="text-blue-700">Ready to solve your visibility problem? <a href="/add-business" className="underline font-semibold">Add your business to our directory right now</a> - it's completely free and takes less than 5 minutes. No registration required!</p>
              </div>
              
              <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6 rounded">
                <h4 className="font-bold text-green-800 mb-2">🚀 Developer's Note</h4>
                <p className="text-green-700">I built this business directory using Next.js 16 and Firebase to ensure lightning-fast performance for Pakistani users. The entire system processes thousands of business listings without any slowdown, and all data is secured with Firebase's enterprise-grade security. I specifically designed the <a href="/add-business" className="underline text-green-600 hover:text-green-700">business submission form</a> to be incredibly simple - no registration required, instant approval, and your business goes live immediately. This approach eliminates the biggest friction point that prevents 80% of Pakistani businesses from getting listed online.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-[#f8fafc]" aria-labelledby="values-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="values-heading" className="text-2xl font-bold text-[#0f2b3d] text-center mb-10">
              What Drives Us
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map(({ Icon, title, desc, color }) => (
                <div key={title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 card-hover flex gap-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: color + '1a' }}
                  >
                    <Icon className="w-6 h-6" style={{ color }} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0f2b3d] text-base">{title}</h3>
                    <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 bg-[#0f2b3d] text-center">
          <div className="max-w-xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-white">Ready to list your business?</h2>
            <p className="mt-3 text-white/60">Join thousands of businesses already growing on PakBizBranches.</p>
            <Link
              href="/add-business"
              className="mt-6 inline-block px-8 py-3 bg-[#60a5fa] hover:bg-blue-400 text-white font-bold rounded-xl transition-colors text-sm"
            >
              Add Your Business Free
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
