import Link from 'next/link'
import { Building2, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0a1e2b] text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#60a5fa] flex items-center justify-center">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold text-xl">
                PakBiz<span className="text-[#60a5fa]">Branches</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Pakistan&apos;s most trusted online business directory. Connecting customers with local businesses across every city.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Twitter, label: 'Twitter' },
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Linkedin, label: 'LinkedIn' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#60a5fa] transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: '/', label: 'Home' },
                { href: '/categories', label: 'All Categories' },
                { href: '/add-business', label: 'Add Business' },
                { href: '/about', label: 'About Us' },
                { href: '/contact', label: 'Contact' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-white/60 hover:text-[#60a5fa] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Categories */}
          <div>
            <h3 className="font-semibold text-white mb-4">Top Categories</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                'Restaurants',
                'Real Estate',
                'Technology',
                'Healthcare',
                'Education',
                'Retail & Shopping',
              ].map((cat) => (
                <li key={cat}>
                  <Link href="/categories" className="text-white/60 hover:text-[#60a5fa] transition-colors">
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#60a5fa] mt-0.5 shrink-0" />
                <span>Office #12, Blue Area, Islamabad, Pakistan</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#60a5fa] shrink-0" />
                <a href="tel:+92300000000" className="hover:text-[#60a5fa] transition-colors">+92 300 000 0000</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#60a5fa] shrink-0" />
                <a href="mailto:info@pakbizbranhces.online" className="hover:text-[#60a5fa] transition-colors">info@pakbizbranhces.online</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/40">
          <p>&copy; {new Date().getFullYear()} PakBizBranches. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white/70 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/70 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
