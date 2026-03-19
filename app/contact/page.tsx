'use client'

import { useState } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react'

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // In production this would POST to an API route or Firebase
    setSent(true)
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="bg-[#0f2b3d] py-16" aria-labelledby="contact-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 id="contact-heading" className="text-4xl font-bold text-white text-balance">
              Frustrated with Business Directory Support?
            </h1>
            <p className="mt-4 text-white/60 text-lg">
              We know how annoying it is when you can't get help. That's why we respond to every message - usually within hours, not days.
            </p>
          </div>
        </section>

        <section className="py-16 bg-[#f8fafc]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Info */}
              <aside className="space-y-5">
                {[
                  {
                    Icon: MapPin,
                    label: 'Our Office',
                    value: 'Office #12, Blue Area, Islamabad, Pakistan',
                    color: '#60a5fa',
                  },
                  {
                    Icon: Phone,
                    label: 'Phone',
                    value: '+92 300 000 0000',
                    href: 'tel:+92300000000',
                    color: '#10b981',
                  },
                  {
                    Icon: Mail,
                    label: 'Email',
                    value: 'info@pakbizbranhces.online',
                    href: 'mailto:info@pakbizbranhces.online',
                    color: '#f59e0b',
                  },
                ].map(({ Icon, label, value, href, color }) => (
                  <div key={label} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: color + '1a' }}
                    >
                      <Icon className="w-5 h-5" style={{ color }} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">{label}</p>
                      {href ? (
                        <a href={href} className="text-sm text-[#0f2b3d] font-medium hover:text-[#60a5fa] transition-colors mt-0.5 block">
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm text-[#0f2b3d] font-medium mt-0.5">{value}</p>
                      )}
                    </div>
                  </div>
                ))}

                <div className="bg-[#0f2b3d] rounded-2xl p-6 text-white">
                  <h3 className="font-semibold text-base mb-2">Business Hours</h3>
                  <div className="space-y-1 text-sm text-white/70">
                    <p>Monday – Friday: 9:00 AM – 6:00 PM</p>
                    <p>Saturday: 10:00 AM – 3:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </aside>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                {sent ? (
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 text-center h-full flex flex-col items-center justify-center">
                    <CheckCircle2 className="w-14 h-14 text-emerald-500 mx-auto mb-4" />
                    <h2 className="text-xl font-bold text-[#0f2b3d]">Message Sent!</h2>
                    <p className="mt-2 text-gray-500 text-sm">We&apos;ll get back to you within 24 hours.</p>
                    <button
                      onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                      className="mt-6 px-5 py-2.5 bg-[#0f2b3d] text-white rounded-xl text-sm font-semibold hover:bg-[#1a3f57] transition-colors"
                    >
                      Send Another
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 space-y-5"
                    aria-label="Contact form"
                  >
                    <h2 className="text-xl font-bold text-[#0f2b3d]">Send a Message</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">Your Name</label>
                        <input
                          id="name" name="name" type="text" required
                          value={form.name} onChange={handleChange}
                          placeholder="Full name"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-[#60a5fa] focus:ring-2 focus:ring-[#60a5fa]/20 transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                        <input
                          id="contact-email" name="email" type="email" required
                          value={form.email} onChange={handleChange}
                          placeholder="email@example.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-[#60a5fa] focus:ring-2 focus:ring-[#60a5fa]/20 transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1.5">Subject</label>
                      <input
                        id="subject" name="subject" type="text" required
                        value={form.subject} onChange={handleChange}
                        placeholder="How can we help?"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-[#60a5fa] focus:ring-2 focus:ring-[#60a5fa]/20 transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
                      <textarea
                        id="message" name="message" rows={5} required
                        value={form.message} onChange={handleChange}
                        placeholder="Your message..."
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-[#60a5fa] focus:ring-2 focus:ring-[#60a5fa]/20 transition-all resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-[#0f2b3d] hover:bg-[#1a3f57] text-white font-bold rounded-xl transition-colors text-sm flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" aria-hidden="true" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
