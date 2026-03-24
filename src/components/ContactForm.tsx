'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      const res = await fetch('https://formspree.io/f/mbdzvnwo', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <form className="bg-white rounded-xl border border-gray-100 shadow-sm p-8 space-y-6" onSubmit={handleSubmit}>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="firstName" className="block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="John"
            className="w-full px-4 py-3 text-sm border border-gray-200 rounded-lg bg-white text-gray-900 focus:outline-none focus:border-[#E07038] focus:ring-1 focus:ring-[#E07038]/20 transition-colors placeholder:text-gray-300"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Doe"
            className="w-full px-4 py-3 text-sm border border-gray-200 rounded-lg bg-white text-gray-900 focus:outline-none focus:border-[#E07038] focus:ring-1 focus:ring-[#E07038]/20 transition-colors placeholder:text-gray-300"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="john@company.com"
          className="w-full px-4 py-3 text-sm border border-gray-200 rounded-lg bg-white text-gray-900 focus:outline-none focus:border-[#E07038] focus:ring-1 focus:ring-[#E07038]/20 transition-colors placeholder:text-gray-300"
        />
      </div>
      <div>
        <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          placeholder="Investment inquiry, virtual office, partnership, etc."
          className="w-full px-4 py-3 text-sm border border-gray-200 rounded-lg bg-white text-gray-900 focus:outline-none focus:border-[#E07038] focus:ring-1 focus:ring-[#E07038]/20 transition-colors placeholder:text-gray-300"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Tell us about your interest or inquiry..."
          className="w-full px-4 py-3 text-sm border border-gray-200 rounded-lg bg-white text-gray-900 focus:outline-none focus:border-[#E07038] focus:ring-1 focus:ring-[#E07038]/20 transition-colors placeholder:text-gray-300 resize-none"
        />
      </div>
      {status === 'success' && (
        <p className="text-sm text-emerald-700 bg-emerald-50 border border-emerald-200 px-4 py-3 rounded-lg">
          Thank you — your message has been sent. We&apos;ll be in touch shortly.
        </p>
      )}
      {status === 'error' && (
        <p className="text-sm text-red-700 bg-red-50 border border-red-200 px-4 py-3 rounded-lg">
          Something went wrong. Please try again or email us directly.
        </p>
      )}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex items-center gap-2 px-6 py-3 bg-[#E07038] text-white text-sm font-semibold rounded-lg hover:bg-[#c85f2a] transition-colors disabled:opacity-60"
      >
        {status === 'submitting' ? 'Sending...' : <>Send Message <ArrowRight size={16} /></>}
      </button>
    </form>
  )
}
