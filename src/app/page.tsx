import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Building2, BarChart2, Zap, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Prasad Ventures LLC | Houston, TX',
  description:
    'Prasad Ventures LLC is a Houston-based firm with 10+ years of experience in real estate, asset management, electricity brokerage, and strategic investments.',
  keywords: [
    'Prasad Ventures LLC',
    'Houston investment firm',
    'real estate investment Houston',
    'asset management Houston Texas',
    'electricity brokerage Houston',
    'strategic investments Texas',
    'Houston business firm',
  ],
  openGraph: {
    title: 'Prasad Ventures LLC | Houston, TX',
    description:
      'A Houston-based firm with 10+ years of experience in real estate, asset management, electricity brokerage, and strategic investments.',
    url: 'https://www.prasadventures.com',
    type: 'website',
  },
}

const services = [
  {
    Icon: Building2,
    title: 'Real Estate',
    body: 'We buy, develop, and manage residential and commercial properties across Texas — targeting high-growth areas with strong long-term potential.',
    color: '#E07038',
  },
  {
    Icon: BarChart2,
    title: 'Asset Management',
    body: 'We manage portfolios with a disciplined focus on stable, sustainable returns — combining market insight with rigorous risk analysis.',
    color: '#E8A828',
  },
  {
    Icon: Zap,
    title: 'Electricity Brokerage',
    body: 'We help businesses and property owners lock in better energy rates through our supplier relationships and deep market expertise.',
    color: '#9BBFC9',
  },
  {
    Icon: TrendingUp,
    title: 'Strategic Investments',
    body: 'We back recurring-revenue businesses and growth-oriented partnerships that create compelling long-term value.',
    color: '#8B7CB5',
  },
]

const stats = [
  { value: '10+ Years', label: 'In Business' },
  { value: 'Houston, TX', label: 'Home Base' },
  { value: 'Multi-sector', label: 'Portfolio' },
]

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Prasad Ventures LLC",
  "url": "https://www.prasadventures.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Houston",
    "addressRegion": "TX",
    "addressCountry": "US",
  },
  "description": "A Houston-based firm specializing in real estate, asset management, electricity brokerage, and strategic investments.",
  "foundingDate": "2014",
  "areaServed": "Texas",
  "serviceType": ["Real Estate", "Asset Management", "Electricity Brokerage", "Strategic Investments", "Virtual Office"],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      {/* Hero */}
      <section className="relative px-6 pt-20 pb-20 md:pt-36 md:pb-36 overflow-hidden">
        {/* Background image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1543273984-c84d0cc090a3?q=80&w=2752&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gray-900/65" />
        {/* Content */}
        <div className="relative z-10 max-w-[1100px] mx-auto">
          <p className="text-sm font-semibold text-[#E07038] mb-4 tracking-wide">
            Houston, Texas
          </p>
          <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-[1.1] tracking-tight text-white max-w-2xl">
            We build, invest,<br />and grow.
          </h1>
          <p className="mt-6 text-lg text-white/75 max-w-[520px] leading-relaxed">
            Prasad Ventures is a small, focused firm based in Houston. We invest in real estate, manage assets, help businesses cut energy costs, and back smart ventures.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#E07038] text-white font-semibold text-sm rounded-lg hover:bg-[#c85f2a] transition-colors"
            >
              Get in Touch <ArrowRight size={16} />
            </Link>
            <Link
              href="/virtual-space"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-semibold text-sm rounded-lg hover:border-white/60 transition-colors"
            >
              Virtual Office →
            </Link>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-gray-900 px-6 py-6">
        <div className="max-w-[1100px] mx-auto grid grid-cols-3 gap-6">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-lg font-extrabold text-white">{value}</p>
              <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="bg-white px-6 py-20 md:py-24">
        <div className="max-w-[720px] mx-auto text-center">
          <p className="text-sm font-semibold text-[#E07038] mb-3 tracking-wide">Who We Are</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Small team. Clear mission.
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed mb-4">
            We&apos;re a Houston-based firm that keeps things simple: find good opportunities, execute well, and create real value.
          </p>
          <p className="text-lg text-gray-500 leading-relaxed">
            From real estate to energy to strategic ventures, we stay focused on what matters: long-term relationships and results you can measure.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 px-6 py-20 md:py-24">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-sm font-semibold text-[#E07038] mb-2 tracking-wide">What We Do</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Four areas. One focus.
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map(({ Icon, title, body, color }) => (
              <div
                key={title}
                className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-5"
                  style={{ backgroundColor: color + '22' }}
                >
                  <Icon size={20} style={{ color }} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#E07038] px-6 py-20 md:py-24">
        <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-3">
              Ready to work together?
            </h2>
            <p className="text-white/80 text-lg">
              Whether you&apos;re looking to invest, cut energy costs, or set up a virtual office — we&apos;d love to talk.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-white text-[#E07038] font-bold text-sm rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap"
          >
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
