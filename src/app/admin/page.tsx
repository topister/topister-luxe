'use client'

import { useState } from 'react'
import { mockProducts } from '@/lib/mockData'
import type { Product } from '@/types'
import Link from 'next/link'

export default function AdminPage() {
  const [products, setProducts] = useState<Product[]>(mockProducts)
  const [showForm, setShowForm] = useState(false)
  const [editProduct, setEditProduct] = useState<Product | null>(null)
  const [tab, setTab] = useState<'products' | 'orders'>('products')

  const [form, setForm] = useState({
    name: '', description: '', price: '', category: 'handbag' as 'handbag' | 'heels',
    colors: '', sizes: '', stock: '', featured: false
  })

  function resetForm() {
    setForm({ name: '', description: '', price: '', category: 'handbag', colors: '', sizes: '', stock: '', featured: false })
    setEditProduct(null)
    setShowForm(false)
  }

  function handleEdit(p: Product) {
    setEditProduct(p)
    setForm({
      name: p.name, description: p.description, price: String(p.price),
      category: p.category, colors: p.colors.join(', '),
      sizes: p.sizes?.join(', ') || '', stock: String(p.stock), featured: p.featured
    })
    setShowForm(true)
  }

  function handleSave() {
    const updated: Product = {
      id: editProduct?.id || String(Date.now()),
      name: form.name, description: form.description, price: Number(form.price),
      category: form.category, colors: form.colors.split(',').map(c => c.trim()),
      sizes: form.sizes ? form.sizes.split(',').map(s => s.trim()) : undefined,
      stock: Number(form.stock), featured: form.featured, images: [],
      created_at: editProduct?.created_at || new Date().toISOString()
    }
    if (editProduct) {
      setProducts(products.map(p => p.id === editProduct.id ? updated : p))
    } else {
      setProducts([updated, ...products])
    }
    resetForm()
  }

  function handleDelete(id: string) {
    if (confirm('Delete this product?')) setProducts(products.filter(p => p.id !== id))
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar */}
      <div className="admin-sidebar" style={{ width: 220, padding: '24px 16px', flexShrink: 0 }}>
        <p style={{ color: 'var(--gold)', fontSize: '0.7rem', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 24 }}>
          Admin Panel
        </p>
        {[
          { key: 'products', icon: 'bi-bag', label: 'Products' },
          { key: 'orders', icon: 'bi-receipt', label: 'Orders' },
        ].map(item => (
          <button key={item.key}
            className={`d-flex align-items-center gap-2 w-100 btn btn-sm mb-2 text-start ${tab === item.key ? 'btn-gold' : 'btn-outline-gold'}`}
            onClick={() => setTab(item.key as typeof tab)}>
            <i className={`bi ${item.icon}`}></i> {item.label}
          </button>
        ))}
        <hr style={{ borderColor: '#2a2a2a' }} />
        <Link href="/" className="btn btn-sm btn-outline-gold w-100">
          <i className="bi bi-house me-1"></i> View Site
        </Link>
      </div>

      {/* Main */}
      <div style={{ flex: 1, padding: 32 }}>
        {tab === 'products' && (
          <>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h4 style={{ color: 'var(--gold)' }}>Products ({products.length})</h4>
              <button className="btn btn-gold" onClick={() => setShowForm(!showForm)}>
                <i className="bi bi-plus-lg me-1"></i> Add Product
              </button>
            </div>

            {/* Add/Edit Form */}
            {showForm && (
              <div className="card p-4 mb-4">
                <h5 style={{ color: 'var(--gold)' }}>{editProduct ? 'Edit Product' : 'Add New Product'}</h5>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Product Name *</label>
                    <input className="form-control" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div className="col-md-3">
                    <label className="form-label">Category *</label>
                    <select className="form-select" value={form.category}
                      onChange={e => setForm({ ...form, category: e.target.value as 'handbag' | 'heels' })}>
                      <option value="handbag">👜 Handbag</option>
                      <option value="heels">👠 Heels</option>
                    </select>
                  </div>
                  <div className="col-md-3">
                    <label className="form-label">Price (KES) *</label>
                    <input className="form-control" type="number" value={form.price} onChange={e => setForm({ ...form, price: e.target.value })} />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Description *</label>
                    <textarea className="form-control" rows={2} value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Colors (comma separated)</label>
                    <input className="form-control" value={form.colors} onChange={e => setForm({ ...form, colors: e.target.value })} placeholder="Black, Nude, Brown" />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Sizes EU (heels only)</label>
                    <input className="form-control" value={form.sizes} onChange={e => setForm({ ...form, sizes: e.target.value })} placeholder="36, 37, 38, 39, 40, 41, 42" />
                  </div>
                  <div className="col-md-2">
                    <label className="form-label">Stock</label>
                    <input className="form-control" type="number" value={form.stock} onChange={e => setForm({ ...form, stock: e.target.value })} />
                  </div>
                  <div className="col-md-2 d-flex align-items-end">
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" checked={form.featured}
                        onChange={e => setForm({ ...form, featured: e.target.checked })} id="featured" />
                      <label className="form-check-label" htmlFor="featured" style={{ color: 'var(--cream)' }}>Featured</label>
                    </div>
                  </div>
                  <div className="col-12 d-flex gap-2">
                    <button className="btn btn-gold" onClick={handleSave}>
                      <i className="bi bi-check-lg me-1"></i>{editProduct ? 'Update' : 'Save'} Product
                    </button>
                    <button className="btn btn-outline-gold" onClick={resetForm}>Cancel</button>
                  </div>
                </div>
              </div>
            )}

            {/* Products Table */}
            <div style={{ overflowX: 'auto' }}>
              <table className="table table-dark" style={{ borderColor: '#2a2a2a' }}>
                <thead>
                  <tr style={{ color: 'var(--gold)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: 1 }}>
                    <th>Product</th><th>Category</th><th>Price</th><th>Stock</th><th>Featured</th><th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map(p => (
                    <tr key={p.id} style={{ fontSize: '0.85rem' }}>
                      <td style={{ color: 'var(--cream)' }}>{p.name}</td>
                      <td><span className="badge badge-gold">{p.category}</span></td>
                      <td style={{ color: 'var(--gold)' }}>KES {p.price.toLocaleString()}</td>
                      <td style={{ color: p.stock < 5 ? '#f44' : '#aaa' }}>{p.stock}</td>
                      <td>{p.featured ? <i className="bi bi-check-circle-fill" style={{ color: 'var(--gold)' }}></i> : '—'}</td>
                      <td>
                        <button className="btn btn-sm btn-outline-gold me-1" onClick={() => handleEdit(p)}>
                          <i className="bi bi-pencil"></i>
                        </button>
                        <button className="btn btn-sm" style={{ color: '#f44', border: '1px solid #f44', background: 'transparent' }}
                          onClick={() => handleDelete(p.id)}>
                          <i className="bi bi-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {tab === 'orders' && (
          <div>
            <h4 style={{ color: 'var(--gold)' }} className="mb-4">Orders</h4>
            <div className="card p-5 text-center">
              <div style={{ fontSize: '3rem' }}>📦</div>
              <h5 style={{ color: 'var(--gold)' }}>Orders from WhatsApp</h5>
              <p style={{ color: '#888' }}>
                Orders are currently managed via WhatsApp. Once you connect Supabase,
                orders placed through the website will appear here.
              </p>
              <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '254700000000'}`}
                className="btn btn-gold mt-2" target="_blank" rel="noreferrer">
                <i className="bi bi-whatsapp me-2"></i>Open WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
