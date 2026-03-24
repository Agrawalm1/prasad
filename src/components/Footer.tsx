import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-[1100px] mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <p className="text-base font-bold text-white mb-1">Prasad Ventures LLC</p>
          <p className="text-sm text-gray-400">Houston, Texas</p>
          <div className="mt-4 flex gap-1.5">
            <span className="w-8 h-1 rounded-full bg-[#E07038]" />
            <span className="w-8 h-1 rounded-full bg-[#E8A828]" />
            <span className="w-8 h-1 rounded-full bg-[#9BBFC9]" />
          </div>
        </div>

        <nav className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">Navigation</p>
          {[
            { label: 'Home', href: '/' },
            { label: 'Virtual Space', href: '/virtual-space' },
            { label: 'Contact', href: '/contact' },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-gray-400 hover:text-white transition-colors w-fit"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://www.bestpwr.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-white transition-colors w-fit"
          >
            Electricity
          </a>
        </nav>

        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">Services</p>
          {[
            'Real Estate',
            'Asset Management',
            'Electricity Brokerage',
            'Strategic Investments',
            'Virtual Office',
          ].map((s) => (
            <span key={s} className="text-sm text-gray-400">{s}</span>
          ))}
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto px-6 py-5 border-t border-gray-800">
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Prasad Ventures LLC. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
