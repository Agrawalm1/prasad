import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact | Prasad Ventures LLC',
  description:
    'Get in touch with Prasad Ventures LLC for investment opportunities, virtual office inquiries, or energy brokerage services in Houston, Texas.',
  keywords: [
    'contact Prasad Ventures',
    'Houston investment inquiry',
    'real estate contact Houston',
    'virtual office inquiry Houston',
    'energy brokerage contact Texas',
  ],
  openGraph: {
    title: 'Contact Prasad Ventures LLC',
    description:
      'Get in touch for investment opportunities, virtual office inquiries, or energy brokerage services in Houston, Texas.',
    url: 'https://www.prasadventures.com/contact',
    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white px-6 pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-sm font-semibold text-[#E07038] mb-4 tracking-wide">Get in Touch</p>
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[1.1] tracking-tight text-gray-900 max-w-2xl">
            Let&apos;s talk.
          </h1>
          <p className="mt-5 text-lg text-gray-500 max-w-[480px] leading-relaxed">
            Whether you&apos;re interested in investing, partnering, setting up a virtual office, or cutting your energy bill — we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="bg-gray-50 px-6 py-16 md:py-20">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-12 gap-12">

          {/* Sidebar */}
          <div className="md:col-span-4 space-y-6">
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#E07038] mb-3">Company</p>
              <p className="text-base font-bold text-gray-900">Prasad Ventures LLC</p>
              <p className="text-sm text-gray-400 mt-1">Houston, Texas</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">Services</p>
              <ul className="flex flex-col gap-2.5">
                {[
                  'Real Estate',
                  'Asset Management',
                  'Electricity Brokerage',
                  'Strategic Investments',
                  'Virtual Office',
                ].map((s) => (
                  <li key={s} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E07038] shrink-0" />
                    <span className="text-sm text-gray-600">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
