'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Virtual Space', href: '/virtual-space' },
  { label: 'Electricity', href: 'https://www.bestpwr.com', external: true },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[68px] bg-white border-b border-gray-100 flex items-center">
      <div className="w-full max-w-[1100px] mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/logo.jpg"
            alt="Prasad Ventures LLC"
            width={44}
            height={44}
            className="object-contain rounded-lg"
          />
          <span className="text-sm font-medium text-gray-800 uppercase tracking-wide">
            Prasad Ventures
          </span>
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm transition-colors ${
                  pathname === link.href
                    ? 'text-gray-900 font-semibold'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/contact"
            className="ml-2 px-4 py-2 bg-[#E07038] text-white text-sm font-semibold rounded-lg hover:bg-[#c85f2a] transition-colors"
          >
            Get in Touch
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-1 text-gray-700"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-[68px] left-0 right-0 bg-white border-b border-gray-100 md:hidden px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 text-sm text-gray-600 hover:text-gray-900"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="py-2.5 text-sm text-gray-600 hover:text-gray-900"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/contact"
            className="mt-3 px-4 py-2.5 bg-[#E07038] text-white text-sm font-semibold rounded-lg text-center hover:bg-[#c85f2a] transition-colors"
            onClick={() => setOpen(false)}
          >
            Get in Touch
          </Link>
        </div>
      )}
    </header>
  )
}
