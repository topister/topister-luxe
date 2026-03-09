'use client'

import Link from 'next/link'
import type { Product } from '@/types'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="card h-100">
      <Link href={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
        <div className="product-img" style={{
          background: '#111', height: 240,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '4rem', overflow: 'hidden'
        }}>
          {product.images?.[0]
            ? <img src={product.images[0]} alt={product.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            : <span>{product.category === 'handbag' ? '👜' : '👠'}</span>
          }
        </div>
      </Link>
      <div className="card-body d-flex flex-column">
        <span className="badge badge-gold mb-2 align-self-start text-uppercase" style={{ fontSize: '0.65rem' }}>
          {product.category === 'handbag' ? 'Handbag' : 'Heels'}
        </span>
        <h6 className="card-title mb-1">{product.name}</h6>
        <p style={{ fontSize: '0.8rem', color: '#aaa', flexGrow: 1 }}>
          {product.description?.slice(0, 80)}...
        </p>

        {/* Colors */}
        <div className="d-flex gap-1 mb-2">
          {product.colors?.slice(0, 4).map(c => (
            <span key={c} style={{
              fontSize: '0.65rem', background: '#2a2a2a',
              color: 'var(--cream)', padding: '2px 6px', borderRadius: 3
            }}>{c}</span>
          ))}
        </div>

        <div className="d-flex justify-content-between align-items-center mt-auto">
          <span className="price-tag">KES {product.price.toLocaleString()}</span>
          <Link href={`/product/${product.id}`} className="btn btn-gold btn-sm">
            View <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}
