'use client'

import Link from 'next/link'
import { useCart } from '@/lib/cartContext'

export default function Navbar() {
  const { count } = useCart()

  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand" href="/">
          <span style={{ fontStyle: 'italic', color: 'var(--cream)' }}>Topister&apos;s</span>{' '}
          <span style={{ color: 'var(--gold)', letterSpacing: 3 }}>LUXE CLOSET</span>
        </Link>

        {/* Toggle */}
        <button className="navbar-toggler border-0" type="button"
          data-bs-toggle="collapse" data-bs-target="#navMenu"
          style={{ color: 'var(--gold)' }}>
          <i className="bi bi-list" style={{ fontSize: '1.5rem', color: 'var(--gold)' }}></i>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav mx-auto gap-2">
            <li className="nav-item"><Link className="nav-link" href="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/shop">Shop</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/contact">Contact</Link></li>
          </ul>

          {/* Cart */}
          <Link href="/cart" className="btn btn-outline-gold btn-sm position-relative">
            <i className="bi bi-bag"></i> Cart
            {count > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill badge-gold">
                {count}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  )
}
