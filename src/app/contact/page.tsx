'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '254700000000'

  function handleWhatsApp(e: React.FormEvent) {
    e.preventDefault()
    const msg = encodeURIComponent(`Hi! My name is ${form.name}.\n\n${form.message}\n\nPhone: ${form.phone}`)
    window.open(`https://wa.me/${phone}?text=${msg}`, '_blank')
    setSent(true)
  }

  return (
    <div>
      {/* Header */}
      <section style={{ background: 'linear-gradient(135deg, #1a1200, #0a0a0a)', borderBottom: '1px solid var(--gold)', padding: '60px 0' }}>
        <div className="container text-center">
          <p className="section-title">✦ Get In Touch</p>
          <h1 className="section-heading">Contact Us</h1>
        </div>
      </section>

      <div className="container py-5">
        <div className="row g-5">
          {/* Contact Info */}
          <div className="col-md-5">
            <p className="section-title">✦ Find Us</p>
            <h3 style={{ color: 'var(--cream)' }}>We&apos;d Love to Hear From You</h3>
            <hr className="gold-divider" />

            {[
              { icon: 'bi-whatsapp', label: 'WhatsApp', value: '+254 7XX XXX XXX', href: `https://wa.me/${phone}` },
              { icon: 'bi-envelope', label: 'Email', value: 'topistersLuxecloset@gmail.com', href: 'mailto:topistersLuxecloset@gmail.com' },
              { icon: 'bi-instagram', label: 'Instagram', value: '@TopistersLuxeCloset', href: 'https://instagram.com/TopistersLuxeCloset' },
              { icon: 'bi-tiktok', label: 'TikTok', value: '@TopistersLuxeCloset', href: 'https://tiktok.com/@TopistersLuxeCloset' },
              { icon: 'bi-geo-alt', label: 'Location', value: 'Nairobi, Kenya', href: '#' },
            ].map(c => (
              <a key={c.label} href={c.href} target="_blank" rel="noreferrer"
                style={{ textDecoration: 'none' }} className="d-flex align-items-center gap-3 mb-3">
                <div style={{ width: 44, height: 44, background: '#1a1a1a', border: '1px solid var(--gold)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className={`bi ${c.icon}`} style={{ color: 'var(--gold)' }}></i>
                </div>
                <div>
                  <p className="mb-0" style={{ fontSize: '0.7rem', color: '#888', textTransform: 'uppercase', letterSpacing: 1 }}>{c.label}</p>
                  <p className="mb-0" style={{ color: 'var(--cream)', fontSize: '0.9rem' }}>{c.value}</p>
                </div>
              </a>
            ))}

            <div className="mt-4 p-3" style={{ background: '#1a1a1a', borderRadius: 8, border: '1px solid #2a2a2a' }}>
              <p className="mb-1" style={{ color: 'var(--gold)', fontSize: '0.8rem' }}>BUSINESS HOURS</p>
              <p className="mb-0" style={{ color: '#aaa', fontSize: '0.85rem' }}>Mon – Sat: 8:00 AM – 8:00 PM</p>
              <p className="mb-0" style={{ color: '#aaa', fontSize: '0.85rem' }}>Sunday: 10:00 AM – 5:00 PM</p>
            </div>
          </div>

          {/* Message form */}
          <div className="col-md-7">
            <div className="card p-4">
              <h5 style={{ color: 'var(--gold)' }}>Send Us a Message</h5>
              <p style={{ color: '#888', fontSize: '0.85rem' }}>We&apos;ll reply via WhatsApp within the hour!</p>

              {sent ? (
                <div className="text-center py-4">
                  <div style={{ fontSize: '3rem' }}>✅</div>
                  <h5 style={{ color: 'var(--gold)' }}>Message Sent!</h5>
                  <p style={{ color: '#aaa' }}>We&apos;ve opened WhatsApp for you. We&apos;ll reply shortly!</p>
                  <button className="btn btn-outline-gold" onClick={() => setSent(false)}>Send Another</button>
                </div>
              ) : (
                <form onSubmit={handleWhatsApp}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Full Name *</label>
                      <input className="form-control" required value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Phone (WhatsApp) *</label>
                      <input className="form-control" required value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+254 7XX XXX XXX" />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Email (optional)</label>
                      <input className="form-control" type="email" value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Message *</label>
                      <textarea className="form-control" rows={4} required value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        placeholder="Tell us what you're looking for, ask about sizes, delivery, or anything else!" />
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn w-100 btn-lg"
                        style={{ background: '#25D366', color: 'white', border: 'none' }}>
                        <i className="bi bi-whatsapp me-2"></i>Send via WhatsApp
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
