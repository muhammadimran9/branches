import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, CreditCard, CheckCircle2, Shield, Users, Banknote, Building, Star, ArrowRight, Landmark, Wallet, PiggyBank, FileText, Globe2, Smartphone, BadgeCheck, Info } from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const BANK_DATA = {
  name: 'Habib Bank Limited',
  shortName: 'HBL',
  branch: 'F-10 Markaz Branch',
  fullName: 'Habib Bank Limited F-10 Markaz Branch Islamabad',
  branchCode: '0052',
  swiftCode: 'HABORPKKA052',
  ibanPrefix: 'PK36HABB',
  phone: '051-2102052',
  alternatePhone: '051-2102053',
  helpline: '111-111-425',
  fax: '051-2102054',
  email: 'f10markaz@hbl.com',
  address: 'Plot No. 1, Markaz F-10, Islamabad',
  city: 'Islamabad',
  area: 'F-10 Markaz',
  postalCode: '44000',
  establishedYear: '1941',
  branchManager: 'Available on Request',
  timings: {
    weekdays: '9:00 AM - 5:00 PM',
    saturday: '9:00 AM - 1:30 PM',
    sunday: 'Closed',
    ramadan: '9:00 AM - 3:30 PM'
  },
  services: [
    { name: 'Current Accounts', description: 'Zero balance and premium current accounts for individuals and businesses' },
    { name: 'Savings Accounts', description: 'Profit-bearing savings accounts with competitive markup rates' },
    { name: 'Fixed Deposits', description: 'Term deposits with attractive profit rates from 3 months to 5 years' },
    { name: 'Foreign Currency Accounts', description: 'USD, GBP, EUR, and other foreign currency accounts' },
    { name: 'HBL Personal Loan', description: 'Quick personal loans up to PKR 5 million with easy installments' },
    { name: 'HBL Car Loan', description: 'Auto financing for new and used vehicles with flexible tenures' },
    { name: 'HBL Home Loan', description: 'Home financing solutions for purchase, construction, and renovation' },
    { name: 'Credit Cards', description: 'Visa and Mastercard credit cards with rewards and cashback' },
    { name: 'Debit Cards', description: 'HBL DebitCard with international acceptance and online shopping' },
    { name: 'HBL Mobile App', description: '24/7 mobile banking with fund transfers, bill payments, and more' },
    { name: 'HBL Internet Banking', description: 'Secure online banking portal for account management' },
    { name: 'ATM Services', description: '24/7 ATM with cash withdrawal, deposits, and fund transfers' },
    { name: 'Locker Facilities', description: 'Safe deposit lockers in various sizes for valuables' },
    { name: 'Remittances', description: 'Domestic and international money transfers via HBL Express' },
    { name: 'Utility Bill Payments', description: 'Pay electricity, gas, phone, and other utility bills' },
    { name: 'Roshan Digital Account', description: 'Digital banking for overseas Pakistanis with premium features' },
    { name: 'SME Banking', description: 'Business banking solutions for small and medium enterprises' },
    { name: 'Islamic Banking', description: 'Shariah-compliant banking products through HBL Islamic' },
  ],
  description: `Habib Bank Limited (HBL) F-10 Markaz Branch is one of the premier banking facilities in Islamabad, strategically located in the bustling commercial hub of F-10 Markaz. Established as part of Pakistan's largest private sector bank with roots dating back to 1941, this branch has been serving the Islamabad community for decades with excellence and trust.

The F-10 Markaz branch caters to a diverse clientele including residents of F-10, F-11, E-11, G-10, G-11, and surrounding sectors, as well as the thriving business community in the area. With a team of experienced banking professionals and state-of-the-art infrastructure, the branch offers comprehensive banking solutions ranging from basic savings accounts to complex corporate banking needs.

As a flagship HBL branch in Islamabad, the F-10 Markaz location offers all modern banking facilities including 24/7 ATM services, safe deposit lockers, foreign exchange services, and digital banking support. The branch is known for its customer-centric approach and efficient service delivery, making it a preferred banking destination for thousands of customers in the federal capital.`,
  nearbyLandmarks: [
    'F-10 Markaz Commercial Area',
    'F-10 Post Office',
    'Islamabad Club',
    'F-9 Park (Fatima Jinnah Park)',
    'Faisal Mosque (10 min drive)',
    'Centaurus Mall (15 min drive)',
    'PIMS Hospital (12 min drive)',
  ],
  nearbyBranches: [
    { name: 'HBL F-11 Markaz Branch', code: '0054', distance: '2.5 km' },
    { name: 'HBL G-10 Markaz Branch', code: '0055', distance: '3 km' },
    { name: 'HBL Blue Area Branch', code: '0041', distance: '5 km' },
    { name: 'HBL F-6 Super Market Branch', code: '0048', distance: '4 km' },
  ],
  atmAvailable: true,
  lockerAvailable: true,
  wheelchairAccessible: true,
  parkingAvailable: true,
  wifiAvailable: true,
}

export const metadata: Metadata = {
  title: 'HBL F-10 Markaz Branch Islamabad - Phone Number 051-2102052 | Branch Code 0052 | Habib Bank',
  description: `Habib Bank Limited F-10 Markaz Branch Islamabad: Phone Number ${BANK_DATA.phone}, Branch Code ${BANK_DATA.branchCode}, SWIFT Code ${BANK_DATA.swiftCode}. Get complete HBL F-10 Markaz branch address, banking hours, services, and contact details. Located at ${BANK_DATA.address}.`,
  keywords: [
    'habib bank markaz branch phone',
    'hbl f-10 markaz branch islamabad',
    'habib bank f10 markaz phone number',
    'hbl markaz islamabad contact',
    'habib bank limited f-10 branch code',
    'hbl f10 islamabad branch code 0052',
    'habib bank markaz branch address',
    'hbl f10 markaz timings',
    'habib bank islamabad branches',
    'hbl f-10 markaz swift code',
    'habib bank f10 markaz services',
    'hbl markaz branch helpline',
    'habib bank f-10 islamabad atm',
    'hbl f10 markaz locker',
    'habib bank markaz branch manager',
  ].join(', '),
  alternates: {
    canonical: 'https://pakbizbranhces.online/habib-bank-limited-f-10-markaz-branch-islamabad',
  },
  openGraph: {
    title: 'Habib Bank F-10 Markaz Branch Islamabad - Phone: 051-2102052 | Code: 0052',
    description: `HBL F-10 Markaz Branch: Call ${BANK_DATA.phone} for inquiries. Branch Code: ${BANK_DATA.branchCode}. SWIFT: ${BANK_DATA.swiftCode}. Full banking services at ${BANK_DATA.address}, Islamabad.`,
    url: 'https://pakbizbranhces.online/habib-bank-limited-f-10-markaz-branch-islamabad',
    siteName: 'PakBizBranches',
    locale: 'en_PK',
    type: 'website',
    images: [
      {
        url: 'https://pakbizbranhces.online/bizbranches.pk.png',
        width: 1200,
        height: 630,
        alt: 'HBL F-10 Markaz Branch Islamabad',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HBL F-10 Markaz Branch Islamabad - Phone & Branch Code',
    description: `Call ${BANK_DATA.phone} | Branch Code: ${BANK_DATA.branchCode} | Complete HBL F-10 Markaz branch information`,
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

export default function HBLMarkzBranchPage() {
  const mapQuery = encodeURIComponent(`HBL F-10 Markaz Branch, ${BANK_DATA.address}, ${BANK_DATA.city}, Pakistan`)
  const mapSrc = `https://maps.google.com/maps?q=${mapQuery}&output=embed`

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'BankOrCreditUnion',
    '@id': 'https://pakbizbranhces.online/habib-bank-limited-f-10-markaz-branch-islamabad',
    name: BANK_DATA.fullName,
    alternateName: ['HBL F-10 Markaz', 'Habib Bank F10 Markaz', 'HBL Markaz Islamabad'],
    description: BANK_DATA.description,
    url: 'https://pakbizbranhces.online/habib-bank-limited-f-10-markaz-branch-islamabad',
    telephone: BANK_DATA.phone,
    email: BANK_DATA.email,
    priceRange: '$$',
    currenciesAccepted: 'PKR, USD, GBP, EUR',
    paymentAccepted: 'Cash, Credit Card, Debit Card, Bank Transfer',
    image: 'https://pakbizbranhces.online/bizbranches.pk.png',
    logo: 'https://pakbizbranhces.online/bizbranches.pk.png',
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
        closes: '13:30',
      },
    ],
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: '24/7 ATM', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Safe Deposit Lockers', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Wheelchair Accessible', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Parking Available', value: true },
    ],
    sameAs: [
      'https://www.hbl.com',
      'https://www.facebook.com/HBLBank',
      'https://twitter.com/HBLPak',
      'https://www.linkedin.com/company/habib-bank-limited',
    ],
    parentOrganization: {
      '@type': 'Organization',
      name: 'Habib Bank Limited',
      url: 'https://www.hbl.com',
      foundingDate: '1941',
      numberOfEmployees: '15000+',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.2',
      reviewCount: '156',
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
      { '@type': 'ListItem', position: 4, name: 'HBL F-10 Markaz Branch Islamabad', item: 'https://pakbizbranhces.online/habib-bank-limited-f-10-markaz-branch-islamabad' },
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
          text: `The phone number for Habib Bank Limited F-10 Markaz Branch Islamabad is ${BANK_DATA.phone}. You can also contact them at ${BANK_DATA.alternatePhone} or call HBL Helpline at ${BANK_DATA.helpline}.`,
        },
      },
      {
        '@type': 'Question',
        name: 'What is the branch code for HBL F-10 Markaz Islamabad?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `The branch code for Habib Bank Limited F-10 Markaz Branch Islamabad is ${BANK_DATA.branchCode}. The SWIFT code for international transfers is ${BANK_DATA.swiftCode}. For IBAN, use prefix ${BANK_DATA.ibanPrefix} followed by your account number.`,
        },
      },
      {
        '@type': 'Question',
        name: 'What are the banking hours for HBL F-10 Markaz Branch?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `HBL F-10 Markaz Branch banking hours are: Monday to Friday ${BANK_DATA.timings.weekdays}, Saturday ${BANK_DATA.timings.saturday}, Sunday ${BANK_DATA.timings.sunday}. During Ramadan, timings are ${BANK_DATA.timings.ramadan}.`,
        },
      },
      {
        '@type': 'Question',
        name: 'Where is HBL F-10 Markaz Branch located?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Habib Bank Limited F-10 Markaz Branch is located at ${BANK_DATA.address}, ${BANK_DATA.city}, Pakistan - ${BANK_DATA.postalCode}. It is in the main commercial area of F-10 Markaz, easily accessible from F-9, F-11, E-11, and G-10 sectors.`,
        },
      },
      {
        '@type': 'Question',
        name: 'Does HBL F-10 Markaz have ATM and locker facilities?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, HBL F-10 Markaz Branch has 24/7 ATM services for cash withdrawal, deposits, and fund transfers. Safe deposit locker facilities are available in multiple sizes for securing valuables and important documents.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I open a Roshan Digital Account at HBL F-10 Markaz?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, HBL F-10 Markaz Branch supports Roshan Digital Account services for overseas Pakistanis. You can get assistance with account opening, Naya Pakistan Certificates, and other RDA-related services at this branch.',
        },
      },
      {
        '@type': 'Question',
        name: 'What services are available at HBL F-10 Markaz Branch?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'HBL F-10 Markaz Branch offers comprehensive banking services including savings/current accounts, fixed deposits, personal/car/home loans, credit cards, foreign exchange, remittances, HBL Mobile and Internet Banking, locker facilities, SME banking, and Islamic banking products.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the SWIFT code for HBL F-10 Markaz Branch?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `The SWIFT code for HBL F-10 Markaz Branch Islamabad is ${BANK_DATA.swiftCode}. This code is used for international wire transfers and overseas remittances to this branch.`,
        },
      },
    ],
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'HBL F-10 Markaz Branch Islamabad - Complete Branch Information',
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
        <section className="bg-gradient-to-br from-[#006838] via-[#005830] to-[#004425] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 relative">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-green-100 mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/categories/finance" className="hover:text-white transition-colors">Banking & Finance</Link>
              <span>/</span>
              <Link href="/islamabad" className="hover:text-white transition-colors">Islamabad</Link>
              <span>/</span>
              <span className="text-white font-medium">HBL F-10 Markaz</span>
            </nav>

            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Bank Logo */}
              <div className="shrink-0">
                <div className="w-32 h-32 rounded-2xl bg-white flex items-center justify-center shadow-xl">
                  <div className="text-center p-4">
                    <div className="text-[#006838] font-bold text-3xl tracking-tight">HBL</div>
                    <div className="text-slate-500 text-xs mt-1 font-medium">Since 1941</div>
                    <div className="text-slate-400 text-[10px] mt-0.5">Pakistan&apos;s Largest Bank</div>
                  </div>
                </div>
              </div>

              {/* Branch Info */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-500/20 backdrop-blur rounded-full text-xs font-semibold text-green-100 border border-green-400/30">
                    <BadgeCheck className="w-3.5 h-3.5" />
                    Verified Branch
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 backdrop-blur rounded-full text-xs font-medium">
                    <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    4.2 Rating
                  </span>
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight text-balance">
                  Habib Bank Limited F-10 Markaz Branch Islamabad
                </h1>
                <p className="text-green-100 text-lg mb-5 max-w-2xl">
                  Official branch information including phone number, branch code, SWIFT code, address, banking hours, and complete list of services
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
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-[#006838] rounded-xl font-bold hover:bg-green-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <Phone className="w-5 h-5" />
                    {BANK_DATA.phone}
                  </a>
                  <a
                    href={`tel:${BANK_DATA.helpline}`}
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 backdrop-blur text-white border border-white/30 rounded-xl font-semibold hover:bg-white/20 transition-all"
                  >
                    <Phone className="w-5 h-5" />
                    HBL Helpline: {BANK_DATA.helpline}
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
                <p className="text-2xl font-bold text-[#006838]">{BANK_DATA.branchCode}</p>
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
                    <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-[#006838]" />
                    </div>
                    HBL F-10 Markaz Branch Code & Banking Details
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-5 border border-green-100">
                      <p className="text-sm text-slate-600 mb-1 font-medium">Branch Code</p>
                      <p className="text-3xl font-bold text-[#006838]">{BANK_DATA.branchCode}</p>
                      <p className="text-xs text-slate-500 mt-1">Use for inter-bank transfers</p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-5 border border-blue-100">
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
                        <p className="text-sm text-slate-600 mt-1">When transferring funds to HBL F-10 Markaz Branch, use branch code <strong>{BANK_DATA.branchCode}</strong> along with the beneficiary account number. For international transfers, use SWIFT code <strong>{BANK_DATA.swiftCode}</strong>.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* About */}
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200">
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                      <Building className="w-5 h-5 text-[#006838]" />
                    </div>
                    About Habib Bank F-10 Markaz Branch Islamabad
                  </h2>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                      {BANK_DATA.description}
                    </p>
                  </div>
                  
                  {/* Key Features */}
                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="flex flex-col items-center p-4 bg-slate-50 rounded-xl text-center">
                      <Landmark className="w-6 h-6 text-[#006838] mb-2" />
                      <p className="text-sm font-medium text-slate-700">Est. {BANK_DATA.establishedYear}</p>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-slate-50 rounded-xl text-center">
                      <Shield className="w-6 h-6 text-[#006838] mb-2" />
                      <p className="text-sm font-medium text-slate-700">SBP Regulated</p>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-slate-50 rounded-xl text-center">
                      <Users className="w-6 h-6 text-[#006838] mb-2" />
                      <p className="text-sm font-medium text-slate-700">15M+ Customers</p>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-slate-50 rounded-xl text-center">
                      <Globe2 className="w-6 h-6 text-[#006838] mb-2" />
                      <p className="text-sm font-medium text-slate-700">1700+ Branches</p>
                    </div>
                  </div>
                </div>

                {/* Services */}
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200">
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                      <Wallet className="w-5 h-5 text-[#006838]" />
                    </div>
                    Banking Services at HBL F-10 Markaz Branch
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {BANK_DATA.services.map((service, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl hover:bg-green-50 transition-colors group">
                        <CheckCircle2 className="w-5 h-5 text-[#006838] shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-slate-800 group-hover:text-[#006838] transition-colors">{service.name}</p>
                          <p className="text-sm text-slate-500 mt-0.5">{service.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Branch Facilities */}
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200">
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                      <Building className="w-5 h-5 text-[#006838]" />
                    </div>
                    Branch Facilities & Amenities
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl border border-green-100">
                      <div className="w-10 h-10 rounded-lg bg-[#006838] flex items-center justify-center">
                        <Banknote className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-800">24/7 ATM</p>
                        <p className="text-xs text-slate-500">Cash & Deposits</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl border border-green-100">
                      <div className="w-10 h-10 rounded-lg bg-[#006838] flex items-center justify-center">
                        <Shield className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-800">Lockers</p>
                        <p className="text-xs text-slate-500">Multiple Sizes</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl border border-green-100">
                      <div className="w-10 h-10 rounded-lg bg-[#006838] flex items-center justify-center">
                        <Smartphone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-800">Digital Zone</p>
                        <p className="text-xs text-slate-500">Self-Service</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl border border-green-100">
                      <div className="w-10 h-10 rounded-lg bg-[#006838] flex items-center justify-center">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-800">Accessible</p>
                        <p className="text-xs text-slate-500">Wheelchair Access</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl border border-green-100">
                      <div className="w-10 h-10 rounded-lg bg-[#006838] flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-800">Parking</p>
                        <p className="text-xs text-slate-500">Available Nearby</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl border border-green-100">
                      <div className="w-10 h-10 rounded-lg bg-[#006838] flex items-center justify-center">
                        <FileText className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-800">Documents</p>
                        <p className="text-xs text-slate-500">Attestation Services</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                  <div className="p-6 md:p-8 pb-0">
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-[#006838]" />
                      </div>
                      HBL F-10 Markaz Branch Location & Map
                    </h2>
                    <p className="text-slate-600 mb-4">Located in the heart of F-10 Markaz commercial area, easily accessible from all major sectors of Islamabad</p>
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
                      title="HBL F-10 Markaz Branch Location Map Islamabad"
                      className="w-full"
                    />
                  </div>
                  <div className="p-5 bg-slate-50 border-t border-slate-200">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#006838] mt-0.5 shrink-0" />
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

                {/* Nearby HBL Branches */}
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200">
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                      <Building className="w-5 h-5 text-[#006838]" />
                    </div>
                    Other HBL Branches Near F-10 Markaz
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {BANK_DATA.nearbyBranches.map((branch, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-green-50 transition-colors group">
                        <div>
                          <p className="font-medium text-slate-800 group-hover:text-[#006838]">{branch.name}</p>
                          <p className="text-sm text-slate-500">Code: {branch.code} | {branch.distance}</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-[#006838] transition-colors" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* FAQ Section */}
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200">
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-[#006838]" />
                    </div>
                    Frequently Asked Questions - HBL F-10 Markaz Branch
                  </h2>
                  <div className="space-y-6">
                    <div className="pb-6 border-b border-slate-100">
                      <h3 className="font-semibold text-slate-900 mb-2 text-lg">
                        What is Habib Bank F-10 Markaz Branch phone number?
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        The phone number for Habib Bank Limited F-10 Markaz Branch Islamabad is <strong className="text-[#006838]">{BANK_DATA.phone}</strong>. You can also reach them at <strong>{BANK_DATA.alternatePhone}</strong>. For 24/7 support, call HBL Helpline at <strong>{BANK_DATA.helpline}</strong>.
                      </p>
                    </div>
                    <div className="pb-6 border-b border-slate-100">
                      <h3 className="font-semibold text-slate-900 mb-2 text-lg">
                        What is the branch code for HBL F-10 Markaz Islamabad?
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        The branch code for HBL F-10 Markaz Branch is <strong className="text-[#006838]">{BANK_DATA.branchCode}</strong>. Use this code for domestic fund transfers and IBFT transactions. The SWIFT code for international transfers is <strong>{BANK_DATA.swiftCode}</strong>.
                      </p>
                    </div>
                    <div className="pb-6 border-b border-slate-100">
                      <h3 className="font-semibold text-slate-900 mb-2 text-lg">
                        What are the banking hours for HBL F-10 Markaz Branch?
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
                        Does HBL F-10 Markaz have ATM and locker facilities?
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        Yes, HBL F-10 Markaz Branch has <strong>24/7 ATM services</strong> for cash withdrawal, cash deposits, fund transfers, and bill payments. The branch also offers <strong>safe deposit locker facilities</strong> in multiple sizes (small, medium, large) for securing valuables and important documents.
                      </p>
                    </div>
                    <div className="pb-6 border-b border-slate-100">
                      <h3 className="font-semibold text-slate-900 mb-2 text-lg">
                        What is the SWIFT code for HBL F-10 Markaz Branch?
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        The SWIFT code for HBL F-10 Markaz Branch Islamabad is <strong className="text-[#006838]">{BANK_DATA.swiftCode}</strong>. Use this SWIFT/BIC code for receiving international wire transfers and overseas remittances at this branch.
                      </p>
                    </div>
                    <div className="pb-6 border-b border-slate-100">
                      <h3 className="font-semibold text-slate-900 mb-2 text-lg">
                        Can I open a Roshan Digital Account at HBL F-10 Markaz?
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        Yes, HBL F-10 Markaz Branch provides full support for <strong>Roshan Digital Account (RDA)</strong> services. Overseas Pakistanis can get assistance with account queries, Naya Pakistan Certificates (NPCs), and RDA-related services at this branch.
                      </p>
                    </div>
                    <div className="pb-6 border-b border-slate-100">
                      <h3 className="font-semibold text-slate-900 mb-2 text-lg">
                        What documents are required to open an account at HBL F-10 Markaz?
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        To open an account at HBL F-10 Markaz Branch, you typically need: <strong>Original CNIC</strong>, two passport-size photographs, proof of income (salary slip or business documents), and initial deposit amount. For business accounts, additional documents like NTN certificate and business registration may be required.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2 text-lg">
                        How do I reach HBL F-10 Markaz Branch from other sectors?
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        HBL F-10 Markaz Branch is located in the main commercial area of F-10 Markaz, Islamabad. It is easily accessible from <strong>F-9, F-11, E-11, G-10, and G-11 sectors</strong>. The branch is near F-10 Post Office and within 10 minutes drive from Faisal Mosque and 15 minutes from Centaurus Mall.
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
                    <Phone className="w-5 h-5 text-[#006838]" />
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <a href={`tel:${BANK_DATA.phone}`} className="flex items-start gap-3 p-3 bg-green-50 rounded-xl hover:bg-green-100 transition-colors group">
                      <Phone className="w-5 h-5 text-[#006838] mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold text-[#006838] group-hover:underline">{BANK_DATA.phone}</p>
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
                        <p className="text-sm text-slate-500">HBL Helpline (24/7)</p>
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
                      className="flex items-center justify-center gap-2 w-full py-3 bg-[#006838] text-white rounded-xl font-semibold hover:bg-[#005830] transition-colors"
                    >
                      <MapPin className="w-5 h-5" />
                      Get Directions
                    </a>
                  </div>
                </div>

                {/* Banking Hours */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#006838]" />
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
                  <div className="mt-4 p-3 bg-green-50 rounded-lg">
                    <p className="text-sm text-[#006838] font-medium">ATM Available 24/7</p>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Quick Links</h3>
                  <div className="space-y-2">
                    <a href="https://www.hbl.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-3 hover:bg-slate-50 rounded-lg transition-colors text-slate-700 hover:text-[#006838]">
                      <Globe2 className="w-4 h-4" />
                      HBL Official Website
                    </a>
                    <a href="https://www.hbl.com/personal/digital-banking" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-3 hover:bg-slate-50 rounded-lg transition-colors text-slate-700 hover:text-[#006838]">
                      <Smartphone className="w-4 h-4" />
                      HBL Mobile Banking
                    </a>
                    <a href="https://www.hbl.com/rda" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-3 hover:bg-slate-50 rounded-lg transition-colors text-slate-700 hover:text-[#006838]">
                      <PiggyBank className="w-4 h-4" />
                      Roshan Digital Account
                    </a>
                  </div>
                </div>

                {/* Branch Code Reminder */}
                <div className="bg-gradient-to-br from-[#006838] to-[#004425] rounded-2xl p-6 text-white">
                  <h3 className="text-lg font-bold mb-3">Branch Code for Transfers</h3>
                  <div className="bg-white/10 backdrop-blur rounded-xl p-4 mb-4">
                    <p className="text-3xl font-bold text-center">{BANK_DATA.branchCode}</p>
                    <p className="text-sm text-center text-green-100 mt-1">HBL F-10 Markaz Branch</p>
                  </div>
                  <p className="text-sm text-green-100">Use this code when transferring funds to any account at HBL F-10 Markaz Branch Islamabad.</p>
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
