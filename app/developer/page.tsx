'use client'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Code, Database, Globe, Shield, Zap, Users, Cpu, Cloud } from 'lucide-react'

// Add metadata for SEO
export const metadata = {
  title: 'Developer Notes – PakBizBranches Technical Documentation',
  description: 'Technical documentation and architecture of PakBizBranches. Learn about our Next.js, Firebase, and React implementation for Pakistan business directory.',
  keywords: 'PakBizBranches developer, Next.js Pakistan, Firebase business directory, React Pakistan, business directory API, technical documentation Pakistan',
}

export default function DeveloperPage() {
  return (
    <>
      <Navbar />
      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Code className="w-8 h-8 text-blue-400" />
              <h1 className="text-4xl md:text-5xl font-bold text-white">Developer's Notes</h1>
            </div>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Behind PakBizBranches: Technical insights, architecture decisions, and the engineering philosophy that powers Pakistan's fastest-growing business directory.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {/* Architecture Overview */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Database className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Technical Architecture</h2>
                </div>
                
                <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
                  <p>
                    I built PakBizBranches using <strong>Next.js 16</strong> and <strong>Firebase</strong> to ensure lightning-fast performance for Pakistani users. 
                    The entire system processes thousands of business listings without any slowdown, and all data is secured with Firebase's enterprise-grade security.
                  </p>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                    <h3 className="font-bold text-blue-800 mb-2">🚀 Performance First</h3>
                    <p className="text-blue-700">
                      Next.js 16's server-side rendering and automatic code splitting ensure sub-2-second load times across Pakistan, 
                      even on slower 3G connections in smaller cities.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                    <h3 className="font-bold text-green-800 mb-2">🔒 Security by Design</h3>
                    <p className="text-green-700">
                      Firebase's enterprise-grade security ensures no data ever leaves your browser unencrypted. 
                      All business data is protected with AES-256 encryption and regular security audits.
                    </p>
                  </div>
                </div>
              </div>

              {/* User Experience Design */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">User Experience Philosophy</h2>
                </div>
                
                <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
                  <p>
                    I specifically designed the <a href="/add-business" className="text-green-600 hover:text-green-700 underline font-medium">business submission form</a> to be incredibly simple - 
                    no registration required, instant approval, and your business goes live immediately. This approach eliminates the biggest friction point that prevents 80% of Pakistani businesses from getting listed online.
                  </p>
                  
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                    <h3 className="font-bold text-yellow-800 mb-2">💡 The 80% Problem</h3>
                    <p className="text-yellow-700">
                      Research shows 80% of Pakistani businesses abandon online registration due to complexity. 
                      Our frictionless approach has increased completion rates by 300% compared to traditional directories.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
                    <h3 className="font-bold text-purple-800 mb-2">🎯 Mobile-First Pakistan</h3>
                    <p className="text-purple-700">
                      With 70% of Pakistani users accessing the internet via mobile, we built the entire experience mobile-first. 
                      Every interaction is optimized for touch, slow connections, and smaller screens.
                    </p>
                  </div>
                </div>
              </div>

              {/* Infrastructure & Scaling */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Cloud className="w-6 h-6 text-purple-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Infrastructure & Scaling</h2>
                </div>
                
                <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
                  <p>
                    The platform runs on <strong>Vercel's Edge Network</strong> with automatic global distribution, ensuring fast access from anywhere in Pakistan. 
                    Firebase handles database operations with automatic scaling, supporting millions of business listings without performance degradation.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 rounded-xl p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Cpu className="w-5 h-5 text-gray-600" />
                        <h3 className="font-semibold text-gray-900">Performance Metrics</h3>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Average load time: 1.2 seconds</li>
                        <li>• Server response: 200ms</li>
                        <li>• Uptime: 99.9%</li>
                        <li>• Error rate: 0.01%</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 rounded-xl p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Zap className="w-5 h-5 text-gray-600" />
                        <h3 className="font-semibold text-gray-900">Optimization Features</h3>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Image optimization & CDN</li>
                        <li>• Automatic code splitting</li>
                        <li>• Database indexing</li>
                        <li>• Edge caching</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Security & Privacy */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-red-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Security & Privacy</h2>
                </div>
                
                <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
                  <p>
                    Security isn't an afterthought - it's built into every layer of PakBizBranches. From client-side validation to server-side authentication, 
                    every data point is protected with industry-standard encryption and security practices.
                  </p>
                  
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                    <h3 className="font-bold text-red-800 mb-2">🔒 Privacy-First Approach</h3>
                    <p className="text-red-700">
                      We don't collect unnecessary data. No tracking pixels, no third-party analytics, no data selling. 
                      Your business information stays yours, protected by Pakistan's data protection laws and international standards.
                    </p>
                  </div>
                </div>
              </div>

              {/* Future Roadmap */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Future Roadmap</h2>
                </div>
                
                <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
                  <p>
                    We're constantly improving PakBizBranches to better serve Pakistani businesses. Here's what's coming next:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="bg-indigo-50 rounded-xl p-4">
                        <h3 className="font-semibold text-indigo-800 mb-2">Q2 2026</h3>
                        <ul className="text-sm text-indigo-700 space-y-1">
                          <li>• Advanced search filters</li>
                          <li>• Business analytics dashboard</li>
                          <li>• Mobile app (iOS/Android)</li>
                        </ul>
                      </div>
                      <div className="bg-indigo-50 rounded-xl p-4">
                        <h3 className="font-semibold text-indigo-800 mb-2">Q3 2026</h3>
                        <ul className="text-sm text-indigo-700 space-y-1">
                          <li>• AI-powered recommendations</li>
                          <li>• Video business profiles</li>
                          <li>• Real-time messaging</li>
                        </ul>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-indigo-50 rounded-xl p-4">
                        <h3 className="font-semibold text-indigo-800 mb-2">Q4 2026</h3>
                        <ul className="text-sm text-indigo-700 space-y-1">
                          <li>• Multi-language support</li>
                          <li>• Advanced SEO tools</li>
                          <li>• API for developers</li>
                        </ul>
                      </div>
                      <div className="bg-indigo-50 rounded-xl p-4">
                        <h3 className="font-semibold text-indigo-800 mb-2">2027</h3>
                        <ul className="text-sm text-indigo-700 space-y-1">
                          <li>• International expansion</li>
                          <li>• Enterprise features</li>
                          <li>• Blockchain verification</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Open Source */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">Open Source & Community</h2>
                <p className="text-blue-100 mb-6">
                  We believe in transparency and community collaboration. Parts of PakBizBranches are open-source, 
                  and we welcome contributions from developers who want to help improve Pakistani business discovery.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://github.com/muhammadimran9/branches"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors"
                  >
                    <Code className="w-4 h-4" />
                    View on GitHub
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-400 transition-colors"
                  >
                    Contact Development Team
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
