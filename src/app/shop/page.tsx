'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import ProductCard from '@/components/ProductCard'
import { mockProducts } from '@/lib/mockData'
import type { Product } from '@/types'

export default function ShopPage() {
  const searchParams = useSearchParams()
  const catParam = searchParams.get('cat') as 'handbag' | 'heels' | null

  const [category, setCategory] = useState<'all' | 'handbag' | 'heels'>(catParam || 'all')
  const [sort, setSort] = useState<'default' | 'price-asc' | 'price-desc'>('default')
  const [search, setSearch] = useState('')

  useEffect(() => { if (catParam) setCategory(catParam) }, [catParam])

  let products: Product[] = [...mockProducts]
  if (category !== 'all') products = products.filter(p => p.category === category)
  if (search) products = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.description.toLowerCase().includes(search.toLowerCase()))
  if (sort === 'price-asc') products.sort((a, b) => a.price - b.price)
  if (sort === 'price-desc') products.sort((a, b) => b.price - a.price)

  return (
    <div className="container py-5">
      {/* Header */}
      <div className="mb-4">
        <p className="section-title">✦ Our Collection</p>
        <h1 className="section-heading">Shop All Products</h1>
      </div>
      <hr className="gold-divider" />

      {/* Filters */}
      <div className="row g-3 mb-4 align-items-center">
        <div className="col-md-4">
          <input type="text" className="form-control" placeholder="🔍 Search products..."
            value={search} onChange={e => setSearch(e.target.value)} />
        </div>
        <div className="col-auto">
          {(['all', 'handbag', 'heels'] as const).map(cat => (
            <button key={cat}
              className={`btn btn-sm me-2 ${category === cat ? 'btn-gold' : 'btn-outline-gold'}`}
              onClick={() => setCategory(cat)}>
              {cat === 'all' ? 'All' : cat === 'handbag' ? '👜 Handbags' : '👠 Heels'}
            </button>
          ))}
        </div>
        <div className="col-md-2 ms-auto">
          <select className="form-select form-select-sm"
            value={sort} onChange={e => setSort(e.target.value as typeof sort)}>
            <option value="default">Sort: Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Count */}
      <p style={{ color: '#888', fontSize: '0.85rem' }}>{products.length} product{products.length !== 1 ? 's' : ''} found</p>

      {/* Grid */}
      {products.length === 0
        ? <div className="text-center py-5" style={{ color: '#888' }}>
            <div style={{ fontSize: '3rem' }}>🔍</div>
            <p>No products found. Try a different search.</p>
          </div>
        : <div className="row g-4">
            {products.map(product => (
              <div key={product.id} className="col-sm-6 col-md-4 col-lg-3">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
      }
    </div>
  )
}
