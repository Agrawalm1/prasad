import type { Metadata } from 'next'
import { ArrowRight, Calendar, MapPin, Users, DollarSign } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Virtual Office Space in Houston, TX | Prasad Ventures LLC',
  description:
    "Get a professional business address inside Houston's 610 loop — near Rice University and the Texas Medical Center. Month-to-month virtual office plans with no long-term lease. Powered by SphereMail.",
  keywords:
    'virtual office Houston, Houston virtual office address, business address Houston Texas, virtual office 610 loop, professional mailing address Houston, SphereMail Houston, virtual office near Medical Center Houston',
  openGraph: {
    title: 'Virtual Office Space in Houston, TX | Prasad Ventures LLC',
    description:
      "Professional business address inside Houston's 610 loop. No lease, no commute — flexible month-to-month virtual office plans near Rice University and the Texas Medical Center.",
    type: 'website',
  },
}

const benefits = [
  {
    Icon: Calendar,
    title: 'Flexible Terms',
    body: 'Month-to-month — no 5-year lease, no long-term commitment. Full flexibility at a fraction of traditional office costs.',
    color: '#E07038',
  },
  {
    Icon: MapPin,
    title: 'Professional Address',
    body: "A real commercial address inside Houston's 610 loop — near Rice University and the Medical Center. Display it on your website, cards, and marketing.",
    color: '#9BBFC9',
  },
  {
    Icon: Users,
    title: 'Work-Life Balance',
    body: "Let your team work from wherever they're most productive. Reduce commute stress and support sustainable growth at every stage.",
    color: '#E8A828',
  },
  {
    Icon: DollarSign,
    title: 'Lower Overhead',
    body: 'No lease, no commute, no tech overhead. On-demand meeting space when you need it. Pay only for what you use.',
    color: '#8B7CB5',
  },
]

export default function VirtualSpacePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white px-6 pt-20 pb-20 md:pt-28 md:pb-28">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-sm font-semibold text-[#E07038] mb-4 tracking-wide">
            Virtual Office — Houston, Texas
          </p>
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-[1.1] tracking-tight text-gray-900 max-w-3xl">
            A real address.<br />No lease needed.
          </h1>
          <p className="mt-6 text-lg text-gray-500 max-w-[520px] leading-relaxed">
            Prasad Ventures partners with SphereMail to offer virtual office space inside Houston&apos;s 610 loop — near Rice University and the Medical Center.
          </p>
          <div className="mt-10">
            <a
              href="https://prasad-ventures.spheremail.co/customers/get_voffice"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#E07038] text-white font-semibold text-sm rounded-lg hover:bg-[#c85f2a] transition-colors"
            >
              Sign Up via SphereMail <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-gray-50 px-6 py-16 md:py-20">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-sm font-semibold text-[#E07038] mb-2 tracking-wide">What is it?</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              A smarter way to look established.
            </h2>
          </div>
          <div className="space-y-4">
            <p className="text-gray-500 leading-relaxed">
              A virtual office is a business mailing address with professional services attached. Unlike a P.O. box, it gives you a real commercial location — an immediate image upgrade for any growing business.
            </p>
            <p className="text-gray-500 leading-relaxed">
              If you work from home, a virtual office fills the most visible gap: your business address. Present professionally on every channel and meet clients in a real setting — on demand.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white px-6 py-16 md:py-20">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-sm font-semibold text-[#E07038] mb-2 tracking-wide">Benefits</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">
            Everything you need. Nothing you don&apos;t.
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map(({ Icon, title, body, color }) => (
              <div key={title} className="bg-gray-50 rounded-xl p-8 border border-gray-100">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-5"
                  style={{ backgroundColor: color + '22' }}
                >
                  <Icon size={20} style={{ color }} />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-gray-50 px-6 py-16 md:py-20">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-sm font-semibold text-[#E07038] mb-2 tracking-wide">Pricing</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">
            Simple, transparent plans.
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">

            {/* Virtual Office */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8 flex flex-col">
              <p className="text-sm font-semibold text-gray-500 mb-1">Virtual Office</p>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-4xl font-extrabold text-gray-900">$24.99</span>
                <span className="text-sm text-gray-400 mb-1.5">/month</span>
              </div>
              <p className="text-xs text-gray-400 mb-6">$299.88 billed yearly</p>
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {['50 mail items/month', '5 letter scans/month', '20 letter shreds/month', '+$20/month per extra recipient'].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E07038] shrink-0 mt-1.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://prasad-ventures.spheremail.co/customers/get_voffice"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center px-5 py-2.5 border border-gray-200 text-gray-700 text-sm font-semibold rounded-lg hover:border-gray-400 transition-colors"
              >
                Get Started
              </a>
            </div>

            {/* Virtual Office Plus — highlighted */}
            <div className="bg-[#E07038] rounded-xl p-8 flex flex-col shadow-md">
              <div className="flex items-center justify-between mb-1">
                <p className="text-sm font-semibold text-white/80">Virtual Office Plus</p>
                <span className="text-[11px] font-bold uppercase tracking-widest bg-white/20 text-white px-2 py-0.5 rounded-full">Popular</span>
              </div>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-4xl font-extrabold text-white">$59.99</span>
                <span className="text-sm text-white/70 mb-1.5">/month</span>
              </div>
              <p className="text-xs text-white/60 mb-6">$719.88 billed yearly</p>
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {['100 mail items/month', '20 letter scans/month', '40 letter shreds/month', '+$15/month per extra recipient'].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-white/90">
                    <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 mt-1.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://prasad-ventures.spheremail.co/customers/get_voffice"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center px-5 py-2.5 bg-white text-[#E07038] text-sm font-bold rounded-lg hover:bg-gray-50 transition-colors"
              >
                Get Started
              </a>
            </div>

            {/* Virtual Office Premium */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8 flex flex-col">
              <p className="text-sm font-semibold text-gray-500 mb-1">Virtual Office Premium</p>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-4xl font-extrabold text-gray-900">$119.99</span>
                <span className="text-sm text-gray-400 mb-1.5">/month</span>
              </div>
              <p className="text-xs text-gray-400 mb-6">$1,439.88 billed yearly</p>
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {['500 mail items/month', '75 letter scans/month', '100 letter shreds/month', '+$15/month per extra recipient'].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E07038] shrink-0 mt-1.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://prasad-ventures.spheremail.co/customers/get_voffice"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center px-5 py-2.5 border border-gray-200 text-gray-700 text-sm font-semibold rounded-lg hover:border-gray-400 transition-colors"
              >
                Get Started
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#E07038] px-6 py-20 md:py-24">
        <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-3">
              Ready to establish your address?
            </h2>
            <p className="text-white/80 text-lg">
              Powered by SphereMail. Quick setup, no long-term commitment.
            </p>
          </div>
          <a
            href="https://prasad-ventures.spheremail.co/customers/get_voffice"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-white text-[#E07038] font-bold text-sm rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap"
          >
            Sign Up Now <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </>
  )
}
