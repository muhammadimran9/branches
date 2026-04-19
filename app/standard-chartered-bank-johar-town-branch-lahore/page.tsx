import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, CreditCard, CheckCircle2, Shield, Users, Banknote, Building, Star, ArrowRight, Landmark, Wallet, PiggyBank, FileText, Globe2, Smartphone, BadgeCheck, Info, Award, TrendingUp } from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const BANK_DATA = {
  name: 'Standard Chartered Bank',
  shortName: 'SCB',
  branch: 'Johar Town Branch',
  fullName: 'Standard Chartered Bank Johar Town Branch Lahore',
  branchCode: '0086',
  swiftCode: 'SCBLPKKX086',
  ibanPrefix: 'PK06SCBL',
  phone: '042-35316086',
  alternatePhone: '042-35316087',
  helpline: '111-002-002',
  fax: '042-35316088',
  email: 'johartown.branch@sc.com',
  address: 'Plot No. 12, Block G3, Main Boulevard, Johar Town, Lahore',
  city: 'Lahore',
  area: 'Johar Town',
  postalCode: '54000',
  establishedYear: '1863',
  branchManager: 'Available on Request',
  timings: {
    weekdays: '9:00 AM - 5:00 PM',
    saturday: '9:00 AM - 1:00 PM',
    sunday: 'Closed',
    ramadan: '9:00 AM - 3:30 PM'
  },
  services: [
    { name: 'Current Accounts', description: 'Premium current accounts for individuals and corporate clients' },
    { name: 'Savings Accounts', description: 'High-yield savings accounts with competitive profit rates' },
    { name: 'Fixed Deposits', description: 'Term deposits with attractive returns from 1 month to 5 years' },
    { name: 'Foreign Currency Accounts', description: 'Multi-currency accounts in USD, GBP, EUR, AED, and more' },
    { name: 'Priority Banking', description: 'Exclusive banking services for high-net-worth individuals' },
    { name: 'Wealth Management', description: 'Investment advisory and portfolio management services' },
    { name: 'SC Personal Loan', description: 'Quick personal loans up to PKR 4 million with flexible terms' },
    { name: 'SC Auto Loan', description: 'Car financing for new and used vehicles with easy installments' },
    { name: 'SC Home Loan', description: 'Mortgage solutions for home purchase and construction' },
    { name: 'Credit Cards', description: 'Visa Infinite, Platinum, and Gold cards with global benefits' },
    { name: 'Debit Cards', description: 'Visa debit cards with international acceptance' },
    { name: 'SC Mobile App', description: '24/7 mobile banking with biometric login and instant transfers' },
    { name: 'SC Online Banking', description: 'Secure internet banking for account management' },
    { name: 'ATM Services', description: '24/7 ATM with cash withdrawal, deposits, and payments' },
    { name: 'Safe Deposit Lockers', description: 'Premium locker facilities for valuables' },
    { name: 'International Remittances', description: 'Global money transfers with competitive exchange rates' },
    { name: 'Trade Finance', description: 'Letters of credit, guarantees, and export financing' },
    { name: 'Business Banking', description: 'Corporate banking solutions for SMEs and large enterprises' },
    { name: 'Investment Services', description: 'Mutual funds, stocks, and investment products' },
    { name: 'Insurance Products', description: 'Bancassurance solutions for life and general insurance' },
  ],
  description: `Standard Chartered Bank Johar Town Branch is a flagship banking facility located on Main Boulevard, Johar Town - one of Lahore's most prestigious residential and commercial areas. As an international bank with over 160 years of heritage and presence in 59 markets globally, Standard Chartered brings world-class banking excellence to the people of Lahore.

The Johar Town branch serves a diverse clientele including residents of Johar Town (all blocks from A to S), WAPDA Town, Faisal Town, Model Town Extension, and surrounding areas. With a team of highly trained banking professionals and state-of-the-art infrastructure, the branch offers comprehensive financial solutions ranging from everyday banking to sophisticated wealth management services.

As a premium Standard Chartered location in Lahore, the Johar Town branch is known for its Priority Banking services, catering to high-net-worth individuals with dedicated relationship managers, exclusive banking lounges, and personalized financial advice. The branch also serves thousands of retail customers and businesses with efficient, customer-centric service delivery that Standard Chartered is globally renowned for.

The branch features modern amenities including 24/7 ATM services, safe deposit lockers, foreign exchange counter, and digital banking assistance. Whether you need basic banking services or complex international trade finance solutions, Standard Chartered Johar Town Branch delivers excellence in every interaction.`,
  nearbyLandmarks: [
    'Johar Town Main Boulevard',
    'Expo Centre Lahore',
    'Emporium Mall',
    'UCP (University of Central Punjab)',
    'WAPDA Town',
    'Canal Road',
    'Lahore Ring Road (LRR)',
    'Packages Mall',
  ],
  nearbyBranches: [
    { name: 'SCB Gulberg Branch', code: '0045', distance: '5 km' },
    { name: 'SCB DHA Phase 5 Branch', code: '0092', distance: '6 km' },
    { name: 'SCB Mall Road Branch', code: '0032', distance: '8 km' },
    { name: 'SCB Model Town Branch', code: '0078', distance: '4 km' },
  ],
  atmAvailable: true,
  lockerAvailable: true,
  priorityBanking: true,
  wheelchairAccessible: true,
  parkingAvailable: true,
  wifiAvailable: true,
}

export const metadata: Metadata = {
  title: 'Standard Chartered Johar Town Lahore Branch Code 0086 | Phone 042-35316086 | SCB',
  description: `Standard Chartered Bank Johar Town Branch Lahore: Branch Code ${BANK_DATA.branchCode}, Phone Number ${BANK_DATA.phone}, SWIFT Code ${BANK_DATA.swiftCode}. Get complete SCB Johar Town address, banking hours, Priority Banking services, and contact details. Located at ${BANK_DATA.address}.`,
  keywords: [
    'standard chartered johar town lahore branch code',
    'scb johar town branch code',
    'standard chartered bank johar town lahore',
    'scb johar town phone number',
    'standard chartered johar town contact',
    'scb branch code 0086',
    'standard chartered lahore branches',
    'scb johar town swift code',
    'standard chartered johar town address',
    'scb johar town timings',
    'standard chartered priority banking lahore',
    'scb johar town services',
    'standard chartered bank lahore branch code',
    'scb johar town helpline',
    'standard chartered johar town atm',
  ].join(', '),
  alternates: {
    canonical: 'https://pakbizbranhces.online/standard-chartered-bank-johar-town-branch-lahore',
  },
  openGraph: {
    title: 'Standard Chartered Johar Town Lahore - Branch Code: 0086 | Phone: 042-35316086',
    description: `SCB Johar Town Branch Code: ${BANK_DATA.branchCode}. Call ${BANK_DATA.phone} for inquiries. SWIFT: ${BANK_DATA.swiftCode}. Premium banking services at ${BANK_DATA.address}, Lahore.`,
    url: 'https://pakbizbranhces.online/standard-chartered-bank-johar-town-branch-lahore',
    siteName: 'PakBizBranches',
    locale: 'en_PK',
    type: 'website',
    images: [
      {
        url: 'https://pakbizbranhces.online/bizbranches.pk.png',
        width: 1200,
        height: 630,
        alt: 'Standard Chartered Johar Town Branch Lahore',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SCB Johar Town Lahore - Branch Code & Phone Number',
    description: `Branch Code: ${BANK_DATA.branchCode} | Call ${BANK_DATA.phone} | Complete Standard Chartered Johar Town branch information`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { 
      index: true, 
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function SCBJoharTownBranchPage() {
  const mapQuery = encodeURIComponent(`Standard Chartered Bank Johar Town, ${BANK_DATA.address}, ${BANK_DATA.city}, Pakistan`)
  const mapSrc = `https://maps.google.com/maps?q=${mapQuery}&output=embed`

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'BankOrCreditUnion',
    '@id': 'https://pakbizbranhces.online/standard-chartered-bank-johar-town-branch-lahore',
    name: BANK_DATA.fullName,
    alternateName: ['SCB Johar Town', 'Standard Chartered Johar Town Lahore', 'SCB Lahore Johar Town'],
    description: BANK_DATA.description,
    url: 'https://pakbizbranhces.online/standard-chartered-bank-johar-town-branch-lahore',
    telephone: BANK_DATA.phone,
    email: BANK_DATA.email,
    priceRange: '$$$',
    currenciesAccepted: 'PKR, USD, GBP, EUR, AED',
    paymentAccepted: 'Cash, Credit Card, Debit Card, Bank Transfer',
    image: 'https://pakbizbranhces.online/bizbranches.pk.png',
    logo: 'https://pakbizbranhces.online/bizbranches.pk.png',
    address: {
      '@type': 'PostalAddress',
      streetAddress: BANK_DATA.address,
      addressLocality: BANK_DATA.city,
      postalCode: BANK_DATA.postalCode,
      addressRegion: 'Punjab',
      addressCountry: 'PK',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '31.4697',
      longitude: '74.2728',
    },
    hasMap: `https://maps.google.com/maps?q=${mapQuery}`,
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
        closes: '13:00',
      },
    ],
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: '24/7 ATM', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Safe Deposit Lockers', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Priority Banking', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Wheelchair Accessible', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Parking Available', value: true },
    ],
    sameAs: [
      'https://www.sc.com/pk',
      'https://www.facebook.com/StandardCharteredPK',
      'https://twitter.com/StanChartPK',
      'https://www.linkedin.com/company/standard-chartered-bank',
    ],
    parentOrganization: {
      '@type': 'Organization',
      name: 'Standard Chartered Bank',
      url: 'https://www.sc.com',
      foundingDate: '1863',
      numberOfEmployees: '85000+',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.3',
      reviewCount: '189',
      bestRating: '5',
      worstRating: '1',
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://pakbizbranhces.online' },
      { '@type': 'ListItem', position: 2, name: 'Banking & Finance', item: 'https://pakbizbranhces.online/categories/finance' },
      { '@type': 'ListItem', position: 3, name: 'Banks', item: 'https://pakbizbranhces.online/categories/finance/banks' },
      { '@type': 'ListItem', position: 4, name: 'SCB Johar Town Branch Lahore', item: 'https://pakbizbranhces.online/standard-chartered-bank-johar-town-branch-lahore' },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Standard Chartered Johar Town Lahore branch code?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `The branch code for Standard Chartered Bank Johar Town Branch Lahore is ${BANK_DATA.branchCode}. Use this code for domestic fund transfers and IBFT transactions. The SWIFT code for international transfers is ${BANK_DATA.swiftCode}.`,
        },
      },
      {
        '@type': 'Question',
        name: 'What is Standard Chartered Johar Town Branch phone number?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `The phone number for Standard Chartered Bank Johar Town Branch Lahore is ${BANK_DATA.phone}. You can also contact them at ${BANK_DATA.alternatePhone} or call SC Helpline at ${BANK_DATA.helpline}.`,
        },
      },
      {
        '@type': 'Question',
        name: 'What are the banking hours for SCB Johar Town Branch?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Standard Chartered Johar Town Branch banking hours are: Monday to Friday ${BANK_DATA.timings.weekdays}, Saturday ${BANK_DATA.timings.saturday}, Sunday ${BANK_DATA.timings.sunday}. During Ramadan, timings are ${BANK_DATA.timings.ramadan}.`,
        },
      },
      {
        '@type': 'Question',
        name: 'Where is Standard Chartered Johar Town Branch located?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Standard Chartered Bank Johar Town Branch is located at ${BANK_DATA.address}, ${BANK_DATA.city}, Pakistan - ${BANK_DATA.postalCode}. It is on Main Boulevard, easily accessible from WAPDA Town, Faisal Town, and Model Town Extension.`,
        },
      },
      {
        '@type': 'Question',
        name: 'Does Standard Chartered Johar Town have Priority Banking?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Standard Chartered Johar Town Branch offers Priority Banking services for high-net-worth individuals including dedicated relationship managers, exclusive banking lounge, wealth management, and personalized financial advisory services.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the SWIFT code for SCB Johar Town Branch?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `The SWIFT code for Standard Chartered Bank Johar Town Branch Lahore is ${BANK_DATA.swiftCode}. Use this SWIFT/BIC code for receiving international wire transfers and overseas remittances at this branch.`,
        },
      },
      {
        '@type': 'Question',
        name: 'What services are available at SCB Johar Town Branch?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Standard Chartered Johar Town Branch offers comprehensive banking services including savings/current accounts, fixed deposits, Priority Banking, wealth management, personal/auto/home loans, premium credit cards, foreign exchange, international remittances, trade finance, business banking, and investment services.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does SCB Johar Town have ATM and locker facilities?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Standard Chartered Johar Town Branch has 24/7 ATM services for cash withdrawal, deposits, and fund transfers. Premium safe deposit locker facilities are available in multiple sizes for securing valuables and important documents.',
        },
      },
    ],
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Standard Chartered Johar Town Branch Lahore - Complete Branch Information',
    description: BANK_DATA.description,
    author: {
      '@type': 'Organization',
      name: 'PakBizBranches',
    },
    publisher: {
      '@type': 'Organization',
      name: 'PakBizBranches',
      logo: {
        '@type': 'ImageObject',
        url: 'https://pakbizbranhces.online/bizbranches.pk.png',
      },
    },
    datePublished: '2024-01-15',
    dateModified: new Date().toISOString().split('T')[0],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <main className="bg-slate-50 min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0066b2] via-[#0055a0] to-[#003d6b] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 relative">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-blue-100 mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/categories/finance" className="hover:text-white transition-colors">Banking & Finance</Link>
              <span>/</span>
              <Link href="/lahore" className="hover:text-white transition-colors">Lahore</Link>
              <span>/</span>
              <span className="text-white font-medium">SCB Johar Town</span>
            </nav>

            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Bank Logo */}
              <div className="shrink-0">
                <div className="w-32 h-32 rounded-2xl bg-white flex items-center justify-center shadow-xl">
                  <div className="text-center p-3">
                    <div className="text-[#0066b2] font-bold text-sm tracking-tight leading-tight">Standard</div>
                    <div className="text-[#0066b2] font-bold text-sm tracking-tight leading-tight">Chartered</div>
                    <div className="w-12 h-0.5 bg-[#0066b2] mx-auto mt-2" />
                    <div className="text-slate-400 text-[10px] mt-1 font-medium">Since 1863</div>
                  </div>
                </div>
              </div>

              {/* Branch Info */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-500/20 backdrop-blur rounded-full text-xs font-semibold text-blue-100 border border-blue-400/30">
                    <BadgeCheck className="w-3.5 h-3.5" />
                    Verified Branch
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 backdrop-blur rounded-full text-xs font-medium">
                    <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    4.3 Rating
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/20 backdrop-blur rounded-full text-xs font-semibold text-amber-100 border border-amber-400/30">
                    <Award className="w-3.5 h-3.5" />
                    Priority Banking
                  </span>
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight text-balance">
                  Standard Chartered Bank Johar Town Branch Lahore
                </h1>
                <p className="text-blue-100 text-lg mb-5 max-w-2xl">
                  Official branch code, phone number, SWIFT code, address, banking hours, and complete list of Priority Banking services
                </p>
                
                {/* Key Info Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  <span className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/15 backdrop-blur-sm rounded-xl text-sm font-semibold border border-white/20">
                    <CreditCard className="w-4 h-4" />
                    Branch Code: {BANK_DATA.branchCode}
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/15 backdrop-blur-sm rounded-xl text-sm font-semibold border border-white/20">
                    <Globe2 className="w-4 h-4" />
                    SWIFT: {BANK_DATA.swiftCode}
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/15 backdrop-blur-sm rounded-xl text-sm font-semibold border border-white/20">
                    <MapPin className="w-4 h-4" />
                    {BANK_DATA.area}, {BANK_DATA.city}
                  </span>
                </div>

                {/* Quick Contact Buttons */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href={`tel:${BANK_DATA.phone}`}
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-[#0066b2] rounded-xl font-bold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <Phone className="w-5 h-5" />
                    {BANK_DATA.phone}
                  </a>
                  <a
                    href={`tel:${BANK_DATA.helpline}`}
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 backdrop-blur text-white border border-white/30 rounded-xl font-semibold hover:bg-white/20 transition-all"
                  >
                    <Phone className="w-5 h-5" />
                    SC Helpline: {BANK_DATA.helpline}
                  </a>
                  <a
                    href={`mailto:${BANK_DATA.email}`}
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 backdrop-blur text-white border border-white/30 rounded-xl font-semibold hover:bg-white/20 transition-all"
                  >
                    <Mail className="w-5 h-5" />
                    Email Branch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Info Bar */}
        <section className="bg-white border-b border-slate-200 shadow-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-200">
              <div className="py-4 px-4 text-center">
                <p className="text-2xl font-bold text-[#0066b2]">{BANK_DATA.branchCode}</p>
                <p className="text-sm text-slate-600">Branch Code</p>
              </div>
              <div className="py-4 px-4 text-center">
                <p className="text-lg font-bold text-slate-800">{BANK_DATA.swiftCode}</p>
                <p className="text-sm text-slate-600">SWIFT Code</p>
              </div>
              <div className="py-4 px-4 text-center">
                <p className="text-lg font-bold text-slate-800">{BANK_DATA.timings.weekdays}</p>
                <p className="text-sm text-slate-600">Mon - Fri Hours</p>
              </div>
              <div className="py-4 px-4 text-center">
                <p className="text-lg font-bold text-slate-800">{BANK_DATA.timings.saturday}</p>
                <p className="text-sm text-slate-600">Saturday Hours</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-10 md:py-14">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Branch Code & SWIFT Info */}
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200">
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-[#0066b2]" />
                    </div>
                    SCB Johar Town Branch Code & Banking Details
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-5 border border-blue-100">
                      <p className="text-sm text-slate-600 mb-1 font-medium">Branch Code</p>
                      <p className="text-3xl font-bold text-[#0066b2]">{BANK_DATA.branchCode}</p>
                      <p className="text-xs text-slate-500 mt-1">Use for inter-bank transfers</p>
                    </div>
                    <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-5 border border-cyan-100">
                      <p className="text-sm text-slate-600 mb-1 font-medium">SWIFT Code</p>
                      <p className="text-xl font-bold text-slate-800">{BANK_DATA.swiftCode}</p>
                      <p className="text-xs text-slate-500 mt-1">For international transfers</p>
                    </div>
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-5 border border-amber-100">
                      <p className="text-sm text-slate-600 mb-1 font-medium">IBAN Prefix</p>
                      <p className="text-xl font-bold text-slate-800">{BANK_DATA.ibanPrefix}</p>
                      <p className="text-xs text-slate-500 mt-1">+ Your Account Number</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <div className="flex items-start gap-3">
                      <Info className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-slate-700">How to use Branch Code {BANK_DATA.branchCode}</p>
                        <p className="text-sm text-slate-600 mt-1">When transferring funds to Standard Chartered Johar Town Branch, use branch code <strong>{BANK_DATA.branchCode}</strong> along with the beneficiary account number. For international transfers, use SWIFT code <strong>{BANK_DATA.swiftCode}</strong>.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* About */}
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200">
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                      <Building className="w-5 h-5 text-[#0066b2]" />
                    </div>
                    About Standard Chartered Johar Town Branch Lahore
                  </h2>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                      {BANK_DATA.description}
                    </p>
                  </div>
                  
                  {/* Key Features */}
                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="flex flex-col items-center p-4 bg-slate-50 rounded-xl text-center">
                      <Landmark className="w-6 h-6 text-[#0066b2] mb-2" />
                      <p className="text-sm font-medium text-slate-700">Est. {BANK_DATA.establishedYear}</p>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-slate-50 rounded-xl text-center">
                      <Globe2 className="w-6 h-6 text-[#0066b2] mb-2" />
                      <p className="text-sm font-medium text-slate-700">59 Markets</p>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-slate-50 rounded-xl text-center">
                      <Users className="w-6 h-6 text-[#0066b2] mb-2" />
                      <p className="text-sm font-medium text-slate-700">85K+ Employees</p>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-slate-50 rounded-xl text-center">
                      <Award className="w-6 h-6 text-[#0066b2] mb-2" />
                      <p className="text-sm font-medium text-slate-700">160+ Years</p>
                    </div>
                  </div>
                </div>

                {/* Priority Banking */}
                <div className="bg-gradient-to-br from-[#0066b2] to-[#003d6b] rounded-2xl p-6 md:p-8 text-white">
                  <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                      <Award className="w-5 h-5" />
                    </div>
                    Priority Banking at SCB Johar Town
                  </h2>
                  <p className="text-blue-100 mb-6">
                    Standard Chartered Johar Town Branch offers exclusive Priority Banking services for high-net-worth individuals with dedicated relationship managers and premium benefits.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3 p-4 bg-white/10 rounded-xl">
                      <CheckCircle2 className="w-5 h-5 text-green-300 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Dedicated Relationship Manager</p>
                        <p className="text-sm text-blue-200">Personal banking advisor for all needs</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-white/10 rounded-xl">
                      <CheckCircle2 className="w-5 h-5 text-green-300 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Exclusive Banking Lounge</p>
                        <p className="text-sm text-blue-200">Premium waiting area with refreshments</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-white/10 rounded-xl">
                      <CheckCircle2 className="w-5 h-5 text-green-300 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Wealth Management</p>
                        <p className="text-sm text-blue-200">Expert investment advisory services</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-white/10 rounded-xl">
                      <CheckCircle2 className="w-5 h-5 text-green-300 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Priority Service</p>
                        <p className="text-sm text-blue-200">Skip the queue with express services</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Services */}
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200">
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                      <Wallet className="w-5 h-5 text-[#0066b2]" />
                    </div>
                    Banking Services at SCB Johar Town Branch
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {BANK_DATA.services.map((service, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors group">
                        <CheckCircle2 className="w-5 h-5 text-[#0066b2] shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-slate-800 group-hover:text-[#0066b2] transition-colors">{service.name}</p>
                          <p className="text-sm text-slate-500 mt-0.5">{service.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Branch Facilities */}
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200">
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                      <Building className="w-5 h-5 text-[#0066b2]" />
                    </div>
                    Branch Facilities & Amenities
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
                      <div className="w-10 h-10 rounded-lg bg-[#0066b2] flex items-center justify-center">
                        <Banknote className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-800">24/7 ATM</p>
                        <p className="text-xs text-slate-500">Cash & Deposits</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
                      <div className="w-10 h-10 rounded-lg bg-[#0066b2] flex items-center justify-center">
                        <Shield className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-800">Lockers</p>
                        <p className="text-xs text-slate-500">Premium Sizes</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
                      <div className="w-10 h-10 rounded-lg bg-[#0066b2] flex items-center justify-center">
                        <Award className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-800">Priority Lounge</p>
                        <p className="text-xs text-slate-500">Exclusive Access</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
                      <div className="w-10 h-10 rounded-lg bg-[#0066b2] flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-800">Forex Counter</p>
                        <p className="text-xs text-slate-500">Currency Exchange</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
                      <div className="w-10 h-10 rounded-lg bg-[#0066b2] flex items-center justify-center">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-800">Accessible</p>
                        <p className="text-xs text-slate-500">Wheelchair Access</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
                      <div className="w-10 h-10 rounded-lg bg-[#0066b2] flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-800">Parking</p>
                        <p className="text-xs text-slate-500">Available Nearby</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                  <div className="p-6 md:p-8 pb-0">
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-[#0066b2]" />
                      </div>
                      SCB Johar Town Branch Location & Map
                    </h2>
                    <p className="text-slate-600 mb-4">Located on Main Boulevard Johar Town, easily accessible from all major areas of Lahore including WAPDA Town, Faisal Town, and Model Town</p>
                  </div>
                  <div className="mt-4">
                    <iframe
                      src={mapSrc}
                      width="100%"
                      height="350"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Standard Chartered Johar Town Branch Location Map Lahore"
                      className="w-full"
                    />
                  </div>
                  <div className="p-5 bg-slate-50 border-t border-slate-200">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#0066b2] mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium text-slate-800">{BANK_DATA.address}</p>
                        <p className="text-sm text-slate-600">{BANK_DATA.city}, Pakistan - {BANK_DATA.postalCode}</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm font-medium text-slate-700 mb-2">Nearby Landmarks:</p>
                      <div className="flex flex-wrap gap-2">
                        {BANK_DATA.nearbyLandmarks.map((landmark, index) => (
                          <span key={index} className="px-3 py-1 bg-white rounded-full text-sm text-slate-600 border border-slate-200">
                            {landmark}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Nearby SCB Branches */}
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200">
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                      <Building className="w-5 h-5 text-[#0066b2]" />
                    </div>
                    Other SCB Branches Near Johar Town
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {BANK_DATA.nearbyBranches.map((branch, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors group">
                        <div>
                          <p className="font-medium text-slate-800 group-hover:text-[#0066b2]">{branch.name}</p>
                          <p className="text-sm text-slate-500">Code: {branch.code} | {branch.distance}</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-[#0066b2] transition-colors" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* FAQ Section */}
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200">
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-[#0066b2]" />
                    </div>
                    Frequently Asked Questions - SCB Johar Town Branch
                  </h2>
                  <div className="space-y-6">
                    <div className="pb-6 border-b border-slate-100">
                      <h3 className="font-semibold text-slate-900 mb-2 text-lg">
                        What is Standard Chartered Johar Town Lahore branch code?
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        The branch code for Standard Chartered Bank Johar Town Branch Lahore is <strong className="text-[#0066b2]">{BANK_DATA.branchCode}</strong>. Use this code for domestic fund transfers and IBFT transactions. The SWIFT code for international transfers is <strong>{BANK_DATA.swiftCode}</strong>.
                      </p>
                    </div>
                    <div className="pb-6 border-b border-slate-100">
                      <h3 className="font-semibold text-slate-900 mb-2 text-lg">
                        What is Standard Chartered Johar Town Branch phone number?
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        The phone number for Standard Chartered Johar Town Branch is <strong className="text-[#0066b2]">{BANK_DATA.phone}</strong>. You can also reach them at <strong>{BANK_DATA.alternatePhone}</strong>. For 24/7 support, call SC Helpline at <strong>{BANK_DATA.helpline}</strong>.
                      </p>
                    </div>
                    <div className="pb-6 border-b border-slate-100">
                      <h3 className="font-semibold text-slate-900 mb-2 text-lg">
                        What are the banking hours for SCB Johar Town Branch?
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        <strong>Monday to Friday:</strong> {BANK_DATA.timings.weekdays}<br />
                        <strong>Saturday:</strong> {BANK_DATA.timings.saturday}<br />
                        <strong>Sunday:</strong> {BANK_DATA.timings.sunday}<br />
                        <strong>Ramadan Timings:</strong> {BANK_DATA.timings.ramadan}
                      </p>
                    </div>
                    <div className="pb-6 border-b border-slate-100">
                      <h3 className="font-semibold text-slate-900 mb-2 text-lg">
                        Does Standard Chartered Johar Town have Priority Banking?
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        Yes, Standard Chartered Johar Town Branch offers <strong>Priority Banking services</strong> for high-net-worth individuals. This includes dedicated relationship managers, exclusive banking lounge, wealth management services, investment advisory, and priority service counters.
                      </p>
                    </div>
                    <div className="pb-6 border-b border-slate-100">
                      <h3 className="font-semibold text-slate-900 mb-2 text-lg">
                        What is the SWIFT code for SCB Johar Town Branch?
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        The SWIFT code for Standard Chartered Bank Johar Town Branch Lahore is <strong className="text-[#0066b2]">{BANK_DATA.swiftCode}</strong>. Use this SWIFT/BIC code for receiving international wire transfers and overseas remittances at this branch.
                      </p>
                    </div>
                    <div className="pb-6 border-b border-slate-100">
                      <h3 className="font-semibold text-slate-900 mb-2 text-lg">
                        Does SCB Johar Town have ATM and locker facilities?
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        Yes, Standard Chartered Johar Town Branch has <strong>24/7 ATM services</strong> for cash withdrawal, cash deposits, fund transfers, and bill payments. The branch also offers <strong>premium safe deposit locker facilities</strong> in multiple sizes for securing valuables and important documents.
                      </p>
                    </div>
                    <div className="pb-6 border-b border-slate-100">
                      <h3 className="font-semibold text-slate-900 mb-2 text-lg">
                        What documents are required to open an account at SCB Johar Town?
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        To open an account at Standard Chartered Johar Town Branch, you typically need: <strong>Original CNIC</strong>, two passport-size photographs, proof of income (salary slip or business documents), utility bill for address verification, and initial deposit amount. For Priority Banking, additional eligibility criteria may apply.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2 text-lg">
                        How do I reach SCB Johar Town Branch from other areas?
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        Standard Chartered Johar Town Branch is located on <strong>Main Boulevard, Block G3, Johar Town, Lahore</strong>. It is easily accessible from <strong>WAPDA Town, Faisal Town, Model Town Extension, and Canal Road</strong>. The branch is near Expo Centre Lahore and Emporium Mall. From Lahore Ring Road, take the Johar Town exit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Sidebar */}
              <div className="space-y-6">
                {/* Contact Card */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 sticky top-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Phone className="w-5 h-5 text-[#0066b2]" />
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <a href={`tel:${BANK_DATA.phone}`} className="flex items-start gap-3 p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors group">
                      <Phone className="w-5 h-5 text-[#0066b2] mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold text-[#0066b2] group-hover:underline">{BANK_DATA.phone}</p>
                        <p className="text-sm text-slate-500">Primary Phone</p>
                      </div>
                    </a>
                    <a href={`tel:${BANK_DATA.alternatePhone}`} className="flex items-start gap-3 p-3 hover:bg-slate-50 rounded-xl transition-colors">
                      <Phone className="w-5 h-5 text-slate-400 mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium text-slate-800">{BANK_DATA.alternatePhone}</p>
                        <p className="text-sm text-slate-500">Alternate Phone</p>
                      </div>
                    </a>
                    <a href={`tel:${BANK_DATA.helpline}`} className="flex items-start gap-3 p-3 hover:bg-slate-50 rounded-xl transition-colors">
                      <Phone className="w-5 h-5 text-slate-400 mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium text-slate-800">{BANK_DATA.helpline}</p>
                        <p className="text-sm text-slate-500">SC Helpline (24/7)</p>
                      </div>
                    </a>
                    <div className="flex items-start gap-3 p-3">
                      <Mail className="w-5 h-5 text-slate-400 mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium text-slate-800 break-all">{BANK_DATA.email}</p>
                        <p className="text-sm text-slate-500">Email</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
                      <MapPin className="w-5 h-5 text-slate-400 mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium text-slate-800">{BANK_DATA.address}</p>
                        <p className="text-sm text-slate-500">{BANK_DATA.city}, Pakistan - {BANK_DATA.postalCode}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-slate-200">
                    <a
                      href={`https://maps.google.com/maps?q=${mapQuery}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 bg-[#0066b2] text-white rounded-xl font-semibold hover:bg-[#0055a0] transition-colors"
                    >
                      <MapPin className="w-5 h-5" />
                      Get Directions
                    </a>
                  </div>
                </div>

                {/* Banking Hours */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#0066b2]" />
                    Banking Hours
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-slate-100">
                      <span className="text-slate-600">Monday - Friday</span>
                      <span className="font-semibold text-slate-800">{BANK_DATA.timings.weekdays}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-100">
                      <span className="text-slate-600">Saturday</span>
                      <span className="font-semibold text-slate-800">{BANK_DATA.timings.saturday}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-100">
                      <span className="text-slate-600">Sunday</span>
                      <span className="font-semibold text-red-600">{BANK_DATA.timings.sunday}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-slate-600">Ramadan</span>
                      <span className="font-semibold text-amber-600">{BANK_DATA.timings.ramadan}</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-[#0066b2] font-medium">ATM Available 24/7</p>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Quick Links</h3>
                  <div className="space-y-2">
                    <a href="https://www.sc.com/pk" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-3 hover:bg-slate-50 rounded-lg transition-colors text-slate-700 hover:text-[#0066b2]">
                      <Globe2 className="w-4 h-4" />
                      SC Official Website
                    </a>
                    <a href="https://www.sc.com/pk/bank-with-us/online-banking/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-3 hover:bg-slate-50 rounded-lg transition-colors text-slate-700 hover:text-[#0066b2]">
                      <Smartphone className="w-4 h-4" />
                      SC Mobile Banking
                    </a>
                    <a href="https://www.sc.com/pk/priority-banking/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-3 hover:bg-slate-50 rounded-lg transition-colors text-slate-700 hover:text-[#0066b2]">
                      <Award className="w-4 h-4" />
                      Priority Banking
                    </a>
                  </div>
                </div>

                {/* Branch Code Reminder */}
                <div className="bg-gradient-to-br from-[#0066b2] to-[#003d6b] rounded-2xl p-6 text-white">
                  <h3 className="text-lg font-bold mb-3">Branch Code for Transfers</h3>
                  <div className="bg-white/10 backdrop-blur rounded-xl p-4 mb-4">
                    <p className="text-3xl font-bold text-center">{BANK_DATA.branchCode}</p>
                    <p className="text-sm text-center text-blue-100 mt-1">SCB Johar Town Branch</p>
                  </div>
                  <p className="text-sm text-blue-100">Use this code when transferring funds to any account at Standard Chartered Johar Town Branch Lahore.</p>
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
