import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Phone, Mail, MapPin, MessageCircle, Building2, Clock, CreditCard, Globe, CheckCircle2 } from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const BANK_DATA = {
  name: 'Habib Bank Limited',
  branch: 'F-10 Markaz Branch',
  fullName: 'Habib Bank Limited F-10 Markaz Branch Islamabad',
  branchCode: '0052',
  swiftCode: 'HABORPKKA052',
  phone: '051-2102052',
  alternatePhone: '051-2102053',
  fax: '051-2102054',
  email: 'f10markaz@hbl.com',
  address: 'Plot No. 1, Markaz F-10, Islamabad',
  city: 'Islamabad',
  area: 'F-10 Markaz',
  postalCode: '44000',
  timings: {
    weekdays: '9:00 AM - 5:00 PM',
    saturday: '9:00 AM - 1:30 PM',
    sunday: 'Closed'
  },
  services: [
    'Current Accounts',
    'Savings Accounts',
    'Fixed Deposits',
    'Foreign Currency Accounts',
    'Home Loans',
    'Car Loans',
    'Personal Loans',
    'Credit Cards',
    'Debit Cards',
    'Online Banking',
    'Mobile Banking (HBL Mobile)',
    'ATM Services',
    'Locker Facilities',
    'Remittances',
    'Utility Bill Payments',
    'CNIC Updation',
    'Cheque Book Issuance',
    'Bank Statements',
  ],
  description: `Habib Bank Limited (HBL) F-10 Markaz Branch is one of the leading bank branches in Islamabad, strategically located in the commercial hub of F-10 Markaz. As Pakistan's largest private sector bank, HBL offers comprehensive banking services to individuals, businesses, and corporations. The F-10 Markaz branch serves the residents and business community of F-10, F-11, E-11, and surrounding areas with world-class banking facilities. With experienced staff and modern banking infrastructure, the branch provides personalized service for all your financial needs including account opening, loans, credit cards, and international banking services.`,
  nearbyLandmarks: [
    'F-10 Markaz Commercial Area',
    'F-10 Post Office',
    'Islamabad Club',
    'F-9 Park (Fatima Jinnah Park)',
    'Faisal Mosque (10 min drive)',
  ],
  atmAvailable: true,
  lockerAvailable: true,
  wheelchairAccessible: true,
}

export const metadata: Metadata = {
  title: 'Habib Bank F-10 Markaz Branch Islamabad - Phone Number, Branch Code & Timings | HBL',
  description: `Get Habib Bank Limited F-10 Markaz Branch Islamabad phone number (${BANK_DATA.phone}), branch code (${BANK_DATA.branchCode}), SWIFT code, address, and banking hours. Complete HBL F-10 branch details and services.`,
  keywords: [
    'habib bank markaz branch phone',
    'habib bank f-10 markaz branch',
    'hbl f10 markaz islamabad',
    'habib bank islamabad branch code',
    'hbl markaz branch contact number',
    'habib bank limited f-10 branch',
    'hbl f10 islamabad phone',
    'habib bank f10 markaz timings',
    'hbl branch code 0052',
    'habib bank islamabad branches',
    'hbl f-10 markaz address',
    'habib bank markaz islamabad',
  ].join(', '),
  alternates: {
    canonical: 'https://pakbizbranhces.online/habib-bank-limited-f-10-markaz-branch-islamabad',
  },
  openGraph: {
    title: 'Habib Bank F-10 Markaz Branch Islamabad - Phone, Branch Code & Address',
    description: `HBL F-10 Markaz Branch contact: ${BANK_DATA.phone}. Branch Code: ${BANK_DATA.branchCode}. Located at ${BANK_DATA.address}. Get complete branch details and services.`,
    url: 'https://pakbizbranhces.online/habib-bank-limited-f-10-markaz-branch-islamabad',
    siteName: 'PakBizBranches',
    locale: 'en_PK',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Habib Bank F-10 Markaz Branch Islamabad - Phone & Branch Code',
    description: `HBL F-10 Markaz Islamabad: Phone ${BANK_DATA.phone}, Branch Code ${BANK_DATA.branchCode}. Get address, timings & services.`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function HBLMarkzBranchPage() {
  const mapQuery = encodeURIComponent(`${BANK_DATA.address}, ${BANK_DATA.city}, Pakistan`)
  const mapSrc = `https://maps.google.com/maps?q=${mapQuery}&output=embed`
  const whatsappMessage = encodeURIComponent(`Hi, I need information about HBL F-10 Markaz Branch Islamabad services.`)

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'BankOrCreditUnion',
    '@id': 'https://pakbizbranhces.online/habib-bank-limited-f-10-markaz-branch-islamabad',
    name: BANK_DATA.fullName,
    description: BANK_DATA.description,
    url: 'https://pakbizbranhces.online/habib-bank-limited-f-10-markaz-branch-islamabad',
    telephone: BANK_DATA.phone,
    email: BANK_DATA.email,
    priceRange: '$$',
    image: 'https://pakbizbranhces.online/bizbranches.pk.png',
    address: {
      '@type': 'PostalAddress',
      streetAddress: BANK_DATA.address,
      addressLocality: BANK_DATA.city,
      postalCode: BANK_DATA.postalCode,
      addressRegion: 'Islamabad Capital Territory',
      addressCountry: 'PK',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '33.6989',
      longitude: '73.0169',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '13:30',
      },
    ],
    sameAs: ['https://www.hbl.com'],
    parentOrganization: {
      '@type': 'Organization',
      name: 'Habib Bank Limited',
      url: 'https://www.hbl.com',
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://pakbizbranhces.online' },
      { '@type': 'ListItem', position: 2, name: 'Finance & Banking', item: 'https://pakbizbranhces.online/categories/finance' },
      { '@type': 'ListItem', position: 3, name: 'HBL F-10 Markaz Branch Islamabad', item: 'https://pakbizbranhces.online/habib-bank-limited-f-10-markaz-branch-islamabad' },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Habib Bank F-10 Markaz Branch phone number?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `The phone number for Habib Bank Limited F-10 Markaz Branch Islamabad is ${BANK_DATA.phone}. You can also reach them at ${BANK_DATA.alternatePhone}.`,
        },
      },
      {
        '@type': 'Question',
        name: 'What is the branch code for HBL F-10 Markaz Islamabad?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `The branch code for Habib Bank Limited F-10 Markaz Branch Islamabad is ${BANK_DATA.branchCode}. The SWIFT code is ${BANK_DATA.swiftCode}.`,
        },
      },
      {
        '@type': 'Question',
        name: 'What are the banking hours for HBL F-10 Markaz Branch?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `HBL F-10 Markaz Branch is open Monday to Friday from ${BANK_DATA.timings.weekdays}, Saturday from ${BANK_DATA.timings.saturday}, and closed on Sunday.`,
        },
      },
      {
        '@type': 'Question',
        name: 'Where is HBL F-10 Markaz Branch located?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Habib Bank Limited F-10 Markaz Branch is located at ${BANK_DATA.address}, ${BANK_DATA.city}, Pakistan - ${BANK_DATA.postalCode}.`,
        },
      },
    ],
  }

  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="bg-[#f8fafc] min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#006838] to-[#004d2a] text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-green-100 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/categories/finance" className="hover:text-white transition-colors">Finance & Banking</Link>
              <span>/</span>
              <span className="text-white font-medium">HBL F-10 Markaz Branch</span>
            </nav>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Bank Logo */}
              <div className="shrink-0">
                <div className="w-28 h-28 rounded-2xl bg-white flex items-center justify-center shadow-lg">
                  <div className="text-center">
                    <div className="text-[#006838] font-bold text-2xl">HBL</div>
                    <div className="text-gray-500 text-xs mt-1">Since 1941</div>
                  </div>
                </div>
              </div>

              {/* Branch Info */}
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold mb-3">
                  Habib Bank Limited F-10 Markaz Branch Islamabad
                </h1>
                <p className="text-green-100 text-lg mb-4">
                  Official Branch Details, Phone Number & Contact Information
                </p>
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur rounded-full text-sm font-medium">
                    <CreditCard className="w-4 h-4" />
                    Branch Code: {BANK_DATA.branchCode}
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur rounded-full text-sm font-medium">
                    <MapPin className="w-4 h-4" />
                    {BANK_DATA.area}, {BANK_DATA.city}
                  </span>
                </div>

                {/* Quick Contact Buttons */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href={`tel:${BANK_DATA.phone}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#006838] rounded-xl font-semibold hover:bg-green-50 transition-colors shadow-md"
                  >
                    <Phone className="w-5 h-5" />
                    {BANK_DATA.phone}
                  </a>
                  <a
                    href={`mailto:${BANK_DATA.email}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur text-white border border-white/30 rounded-xl font-semibold hover:bg-white/20 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    Email Branch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Branch Code & SWIFT Info */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h2 className="text-xl font-bold text-[#0f2b3d] mb-4 flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-[#006838]" />
                    HBL F-10 Markaz Branch Code & SWIFT Code
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100">
                      <p className="text-sm text-gray-600 mb-1">Branch Code</p>
                      <p className="text-2xl font-bold text-[#006838]">{BANK_DATA.branchCode}</p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100">
                      <p className="text-sm text-gray-600 mb-1">SWIFT Code</p>
                      <p className="text-lg font-bold text-[#0f2b3d]">{BANK_DATA.swiftCode}</p>
                    </div>
                  </div>
                </div>

                {/* About */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h2 className="text-xl font-bold text-[#0f2b3d] mb-4">
                    About Habib Bank F-10 Markaz Branch
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {BANK_DATA.description}
                  </p>
                </div>

                {/* Services */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h2 className="text-xl font-bold text-[#0f2b3d] mb-4">
                    Banking Services Available
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {BANK_DATA.services.map((service, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#006838] shrink-0" />
                        <span className="text-gray-700 text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Map */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                  <div className="p-6 pb-0">
                    <h2 className="text-xl font-bold text-[#0f2b3d] mb-4 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-[#006838]" />
                      Branch Location
                    </h2>
                  </div>
                  <div className="mt-4">
                    <iframe
                      src={mapSrc}
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="HBL F-10 Markaz Branch Location Map"
                      className="w-full"
                    />
                  </div>
                  <div className="p-4 text-sm text-gray-600">
                    <strong>Address:</strong> {BANK_DATA.address}, {BANK_DATA.city}, Pakistan - {BANK_DATA.postalCode}
                  </div>
                </div>

                {/* FAQ Section */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h2 className="text-xl font-bold text-[#0f2b3d] mb-6">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-[#0f2b3d] mb-2">
                        What is Habib Bank F-10 Markaz Branch phone number?
                      </h3>
                      <p className="text-gray-600">
                        The phone number for Habib Bank Limited F-10 Markaz Branch Islamabad is <strong>{BANK_DATA.phone}</strong>. You can also reach them at <strong>{BANK_DATA.alternatePhone}</strong>.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0f2b3d] mb-2">
                        What is the branch code for HBL F-10 Markaz Islamabad?
                      </h3>
                      <p className="text-gray-600">
                        The branch code for HBL F-10 Markaz Branch is <strong>{BANK_DATA.branchCode}</strong>. The SWIFT code for international transfers is <strong>{BANK_DATA.swiftCode}</strong>.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0f2b3d] mb-2">
                        What are the banking hours for HBL F-10 Markaz Branch?
                      </h3>
                      <p className="text-gray-600">
                        Monday to Friday: {BANK_DATA.timings.weekdays}<br />
                        Saturday: {BANK_DATA.timings.saturday}<br />
                        Sunday: {BANK_DATA.timings.sunday}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0f2b3d] mb-2">
                        Does HBL F-10 Markaz have ATM and locker facilities?
                      </h3>
                      <p className="text-gray-600">
                        Yes, HBL F-10 Markaz Branch has 24/7 ATM services and safe deposit locker facilities available for customers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Sidebar */}
              <div className="space-y-6">
                {/* Contact Card */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-[#0f2b3d] mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-[#006838] mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">{BANK_DATA.phone}</p>
                        <p className="text-sm text-gray-500">Primary Phone</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-[#006838] mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">{BANK_DATA.alternatePhone}</p>
                        <p className="text-sm text-gray-500">Alternate Phone</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-[#006838] mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">{BANK_DATA.email}</p>
                        <p className="text-sm text-gray-500">Email</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#006838] mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">{BANK_DATA.address}</p>
                        <p className="text-sm text-gray-500">{BANK_DATA.city}, Pakistan - {BANK_DATA.postalCode}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Banking Hours */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-[#0f2b3d] mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#006838]" />
                    Banking Hours
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="font-medium text-gray-900">{BANK_DATA.timings.weekdays}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday</span>
                      <span className="font-medium text-gray-900">{BANK_DATA.timings.saturday}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday</span>
                      <span className="font-medium text-red-600">{BANK_DATA.timings.sunday}</span>
                    </div>
                  </div>
                </div>

                {/* Branch Details */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-[#0f2b3d] mb-4">Branch Details</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Bank</span>
                      <span className="font-medium text-gray-900">Habib Bank Limited</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Branch</span>
                      <span className="font-medium text-gray-900">{BANK_DATA.branch}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Branch Code</span>
                      <span className="font-medium text-[#006838]">{BANK_DATA.branchCode}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">City</span>
                      <span className="font-medium text-gray-900">{BANK_DATA.city}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">ATM Available</span>
                      <span className="font-medium text-green-600">Yes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Lockers</span>
                      <span className="font-medium text-green-600">Available</span>
                    </div>
                  </div>
                </div>

                {/* Nearby Landmarks */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-[#0f2b3d] mb-4">Nearby Landmarks</h3>
                  <ul className="space-y-2">
                    {BANK_DATA.nearbyLandmarks.map((landmark, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-700 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#006838]" />
                        {landmark}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-br from-[#006838] to-[#004d2a] rounded-2xl p-6 text-white">
                  <h3 className="text-lg font-semibold mb-2">Need Banking Assistance?</h3>
                  <p className="text-green-100 text-sm mb-4">
                    Contact HBL F-10 Markaz Branch for all your banking needs.
                  </p>
                  <a
                    href={`tel:${BANK_DATA.phone}`}
                    className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 bg-white text-[#006838] rounded-xl font-semibold hover:bg-green-50 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now: {BANK_DATA.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Banks Section */}
        <section className="py-12 bg-white border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#0f2b3d] mb-6">
              Other Bank Branches in Islamabad
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link
                href="/categories/finance"
                className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <Building2 className="w-8 h-8 text-[#006838]" />
                <div>
                  <p className="font-medium text-gray-900">View All Banks</p>
                  <p className="text-sm text-gray-500">Browse all banking branches</p>
                </div>
              </Link>
              <Link
                href="/cities/islamabad"
                className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <MapPin className="w-8 h-8 text-[#006838]" />
                <div>
                  <p className="font-medium text-gray-900">Islamabad Businesses</p>
                  <p className="text-sm text-gray-500">All businesses in Islamabad</p>
                </div>
              </Link>
              <Link
                href="/add-business"
                className="flex items-center gap-3 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors"
              >
                <Globe className="w-8 h-8 text-[#006838]" />
                <div>
                  <p className="font-medium text-gray-900">Add Your Business</p>
                  <p className="text-sm text-gray-500">List your bank branch free</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
