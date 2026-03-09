'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { useCart } from '@/lib/cartContext'
import { mockProducts, mockReviews } from '@/lib/mockData'
import StarRating from '@/components/StarRating'

export default function ProductPage() {
  const { id } = useParams()
  const { addItem } = useCart()

  const product = mockProducts.find(p => p.id === id)
  const reviews = mockReviews.filter(r => r.product_id === id)

  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)

  // Review form
  const [reviewName, setReviewName] = useState('')
  const [reviewRating, setReviewRating] = useState(5)
  const [reviewComment, setReviewComment] = useState('')

  if (!product) return (
    <div className="container py-5 text-center">
      <h3 style={{ color: 'var(--gold)' }}>Product not found</h3>
      <Link href="/shop" className="btn btn-gold mt-3">Back to Shop</Link>
    </div>
  )

  const avgRating = reviews.length
    ? Math.round(reviews.reduce((s, r) => s + r.rating, 0) / reviews.length)
    : 0

  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '254700000000'
  const waMsg = encodeURIComponent(
    `Hi! I'd like to order:\n*${product.name}*\nSize: ${selectedSize || 'N/A'}\nColor: ${selectedColor}\nQty: ${qty}\nPrice: KES ${product.price.toLocaleString()}\n\nPlease confirm availability 🙏`)

  function handleAddToCart() {
    if (product.category === 'heels' && !selectedSize) return alert('Please select a size')
    if (!selectedColor) return alert('Please select a color')
    addItem({ product, quantity: qty, size: selectedSize, color: selectedColor })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="container py-5">
      {/* Breadcrumb */}
      <nav style={{ fontSize: '0.85rem', color: '#888' }}>
        <Link href="/" style={{ color: 'var(--gold)' }}>Home</Link> ›{' '}
        <Link href="/shop" style={{ color: 'var(--gold)' }}>Shop</Link> › {product.name}
      </nav>

      <div className="row g-5 mt-2">
        {/* Image */}
        <div className="col-md-5">
          <div style={{
            background: '#111', borderRadius: 8, border: '1px solid #2a2a2a',
            height: 400, display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '8rem'
          }}>
            {product.images?.[0]
              ? <img src={product.images[0]} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 8 }} />
              : <span>{product.category === 'handbag' ? '👜' : '👠'}</span>
            }
          </div>
        </div>

        {/* Details */}
        <div className="col-md-7">
          <span className="badge badge-gold text-uppercase mb-2">
            {product.category === 'handbag' ? 'Handbag' : 'Heels'}
          </span>
          <h1 style={{ color: 'var(--cream)' }}>{product.name}</h1>

          {/* Rating */}
          {reviews.length > 0 && (
            <div className="d-flex align-items-center gap-2 mb-2">
              <StarRating rating={avgRating} />
              <span style={{ color: '#888', fontSize: '0.85rem' }}>({reviews.length} reviews)</span>
            </div>
          )}

          <h2 className="price-tag mb-3">KES {product.price.toLocaleString()}</h2>
          <p style={{ color: '#aaa' }}>{product.description}</p>

          {/* Size selector (heels only) */}
          {product.category === 'heels' && product.sizes && (
            <div className="mb-3">
              <label className="form-label">EU Size</label>
              <div className="d-flex gap-2 flex-wrap">
                {product.sizes.map(s => (
                  <button key={s}
                    className={`btn btn-sm ${selectedSize === s ? 'btn-gold' : 'btn-outline-gold'}`}
                    onClick={() => setSelectedSize(s)}>{s}</button>
                ))}
              </div>
            </div>
          )}

          {/* Color selector */}
          <div className="mb-3">
            <label className="form-label">Color</label>
            <div className="d-flex gap-2 flex-wrap">
              {product.colors.map(c => (
                <button key={c}
                  className={`btn btn-sm ${selectedColor === c ? 'btn-gold' : 'btn-outline-gold'}`}
                  onClick={() => setSelectedColor(c)}>{c}</button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-4 d-flex align-items-center gap-3">
            <label className="form-label mb-0">Qty:</label>
            <div className="d-flex align-items-center gap-2">
              <button className="btn btn-outline-gold btn-sm" onClick={() => setQty(q => Math.max(1, q - 1))}>−</button>
              <span style={{ minWidth: 30, textAlign: 'center' }}>{qty}</span>
              <button className="btn btn-outline-gold btn-sm" onClick={() => setQty(q => q + 1)}>+</button>
            </div>
          </div>

          {/* Action buttons */}
          <div className="d-flex gap-3 flex-wrap">
            <button className="btn btn-gold btn-lg flex-grow-1" onClick={handleAddToCart}>
              {added ? <><i className="bi bi-check-lg me-2"></i>Added!</> : <><i className="bi bi-bag-plus me-2"></i>Add to Cart</>}
            </button>
            <a href={`https://wa.me/${phone}?text=${waMsg}`} target="_blank" rel="noreferrer"
              className="btn btn-lg flex-grow-1"
              style={{ background: '#25D366', color: 'white', border: 'none' }}>
              <i className="bi bi-whatsapp me-2"></i>Order on WhatsApp
            </a>
          </div>

          {/* Delivery info */}
          <div className="mt-4 p-3" style={{ background: '#1a1a1a', borderRadius: 8, border: '1px solid #2a2a2a' }}>
            <p className="mb-1" style={{ fontSize: '0.8rem', color: '#888' }}>
              <i className="bi bi-truck" style={{ color: 'var(--gold)' }}></i>&nbsp; Nairobi delivery 1–2 days · Upcountry 2–4 days
            </p>
            <p className="mb-0" style={{ fontSize: '0.8rem', color: '#888' }}>
              <i className="bi bi-shield-check" style={{ color: 'var(--gold)' }}></i>&nbsp; Quality guaranteed or replaced
            </p>
          </div>
        </div>
      </div>

      {/* Reviews section */}
      <hr className="gold-divider mt-5" />
      <h3 style={{ color: 'var(--gold)' }}>Customer Reviews</h3>

      {reviews.length === 0
        ? <p style={{ color: '#888' }}>No reviews yet. Be the first to review!</p>
        : <div className="row g-3 mt-2">
            {reviews.map(r => (
              <div key={r.id} className="col-md-6">
                <div className="card p-3">
                  <div className="d-flex justify-content-between">
                    <strong style={{ color: 'var(--gold)' }}>{r.customer_name}</strong>
                    <StarRating rating={r.rating} />
                  </div>
                  <p className="mt-2 mb-0" style={{ fontSize: '0.9rem', color: '#ccc', fontStyle: 'italic' }}>
                    &quot;{r.comment}&quot;
                  </p>
                </div>
              </div>
            ))}
          </div>
      }

      {/* Add Review form */}
      <div className="mt-4 p-4" style={{ background: '#1a1a1a', borderRadius: 8, border: '1px solid #2a2a2a', maxWidth: 500 }}>
        <h5 style={{ color: 'var(--gold)' }}>Leave a Review</h5>
        <div className="mb-3">
          <label className="form-label">Your Name</label>
          <input className="form-control" value={reviewName} onChange={e => setReviewName(e.target.value)} placeholder="e.g. Amina W." />
        </div>
        <div className="mb-3">
          <label className="form-label">Rating</label>
          <div className="d-flex gap-2">
            {[1,2,3,4,5].map(n => (
              <button key={n} className={`btn btn-sm ${reviewRating >= n ? 'btn-gold' : 'btn-outline-gold'}`}
                onClick={() => setReviewRating(n)}>★</button>
            ))}
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Comment</label>
          <textarea className="form-control" rows={3} value={reviewComment}
            onChange={e => setReviewComment(e.target.value)} placeholder="Tell us about the product..." />
        </div>
        <button className="btn btn-gold">Submit Review</button>
      </div>
    </div>
  )
}
