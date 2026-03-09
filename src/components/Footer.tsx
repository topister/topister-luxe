import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer py-5 mt-5">
      <div className="container">
        <div className="row g-4">
          {/* Brand */}
          <div className="col-md-4">
            <h5 style={{ color: 'var(--gold)', letterSpacing: 2 }}>TOPISTER&apos;S LUXE CLOSET</h5>
            <p style={{ color: 'var(--cream)', fontSize: '0.9rem', fontStyle: 'italic' }}>
              Where Style Meets Elegance
            </p>
            <p style={{ fontSize: '0.85rem', color: '#aaa' }}>
              Premium ladies handbags & high heels. Direct factory imports for the best quality at the best price.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="https://instagram.com/TopistersLuxeCloset" target="_blank" rel="noreferrer"
                style={{ color: 'var(--gold)', fontSize: '1.4rem' }}>
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://tiktok.com/@TopistersLuxeCloset" target="_blank" rel="noreferrer"
                style={{ color: 'var(--gold)', fontSize: '1.4rem' }}>
                <i className="bi bi-tiktok"></i>
              </a>
              <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer"
                style={{ color: 'var(--gold)', fontSize: '1.4rem' }}>
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-2">
            <h6 style={{ color: 'var(--gold)', letterSpacing: 2, fontSize: '0.8rem' }}>QUICK LINKS</h6>
            <ul className="list-unstyled mt-3" style={{ fontSize: '0.85rem' }}>
              {[['/', 'Home'], ['/shop', 'Shop'], ['/shop?cat=handbag', 'Handbags'],
                ['/shop?cat=heels', 'Heels'], ['/about', 'About'], ['/contact', 'Contact']].map(([href, label]) => (
                <li key={href} className="mb-1">
                  <Link href={href} style={{ color: '#aaa', textDecoration: 'none' }}
                    className="footer-link">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-3">
            <h6 style={{ color: 'var(--gold)', letterSpacing: 2, fontSize: '0.8rem' }}>CONTACT</h6>
            <ul className="list-unstyled mt-3" style={{ fontSize: '0.85rem', color: '#aaa' }}>
              <li className="mb-2"><i className="bi bi-geo-alt" style={{ color: 'var(--gold)' }}></i> Nairobi, Kenya</li>
              <li className="mb-2"><i className="bi bi-whatsapp" style={{ color: 'var(--gold)' }}></i> +254 7XX XXX XXX</li>
              <li className="mb-2"><i className="bi bi-envelope" style={{ color: 'var(--gold)' }}></i> topistersLuxecloset@gmail.com</li>
              <li className="mb-2"><i className="bi bi-clock" style={{ color: 'var(--gold)' }}></i> Mon–Sat 8AM – 8PM</li>
            </ul>
          </div>

          {/* Delivery */}
          <div className="col-md-3">
            <h6 style={{ color: 'var(--gold)', letterSpacing: 2, fontSize: '0.8rem' }}>DELIVERY</h6>
            <ul className="list-unstyled mt-3" style={{ fontSize: '0.85rem', color: '#aaa' }}>
              <li className="mb-2"><i className="bi bi-check-circle" style={{ color: 'var(--gold)' }}></i> Nairobi: 1–2 days</li>
              <li className="mb-2"><i className="bi bi-check-circle" style={{ color: 'var(--gold)' }}></i> Upcountry: 2–4 days</li>
              <li className="mb-2"><i className="bi bi-check-circle" style={{ color: 'var(--gold)' }}></i> M-Pesa accepted</li>
              <li className="mb-2"><i className="bi bi-check-circle" style={{ color: 'var(--gold)' }}></i> Cash on delivery (Nairobi)</li>
            </ul>
          </div>
        </div>

        <hr className="gold-divider" />
        <p className="text-center mb-0" style={{ fontSize: '0.8rem', color: '#666' }}>
          © {new Date().getFullYear()} Topister&apos;s Luxe Closet. All rights reserved. | Nairobi, Kenya
        </p>
      </div>
    </footer>
  )
}
