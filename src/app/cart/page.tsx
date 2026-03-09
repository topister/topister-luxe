'use client'

import Link from 'next/link'
import { useCart } from '@/lib/cartContext'
import { useState } from 'react'

export default function CartPage() {
  const { items, removeItem, updateQty, total, clearCart } = useCart()
  const [orderName, setOrderName] = useState('')
  const [orderPhone, setOrderPhone] = useState('')

  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '254700000000'

  function buildWhatsAppOrder() {
    const lines = items.map(i =>
      `• ${i.product.name} | ${i.color}${i.size ? ' | EU ' + i.size : ''} | Qty: ${i.quantity} | KES ${(i.product.price * i.quantity).toLocaleString()}`)
    const msg = `Hi! I'd like to place an order 🛍️\n\n*Customer:* ${orderName}\n*Phone:* ${orderPhone}\n\n*Order:*\n${lines.join('\n')}\n\n*Total: KES ${total.toLocaleString()}*\n\nPlease confirm! 🙏`
    return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`
  }

  if (items.length === 0) return (
    <div className="container py-5 text-center">
      <div style={{ fontSize: '5rem' }}>🛍️</div>
      <h3 style={{ color: 'var(--gold)' }}>Your cart is empty</h3>
      <p style={{ color: '#888' }}>Add some beautiful items to your cart!</p>
      <Link href="/shop" className="btn btn-gold mt-3 px-5">Shop Now</Link>
    </div>
  )

  return (
    <div className="container py-5">
      <p className="section-title">✦ Review Your Order</p>
      <h1 className="section-heading mb-4">Shopping Cart</h1>
      <hr className="gold-divider" />

      <div className="row g-4">
        {/* Items */}
        <div className="col-lg-8">
          {items.map((item, idx) => (
            <div key={idx} className="card mb-3 p-3">
              <div className="d-flex gap-3 align-items-start">
                <div style={{
                  width: 80, height: 80, background: '#111', borderRadius: 6,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', flexShrink: 0
                }}>
                  {item.product.category === 'handbag' ? '👜' : '👠'}
                </div>
                <div className="flex-grow-1">
                  <h6 style={{ color: 'var(--gold)' }}>{item.product.name}</h6>
                  <p className="mb-1" style={{ fontSize: '0.8rem', color: '#aaa' }}>
                    Color: {item.color} {item.size && `| Size: EU ${item.size}`}
                  </p>
                  <p className="mb-2 price-tag" style={{ fontSize: '1rem' }}>KES {item.product.price.toLocaleString()}</p>
                  <div className="d-flex align-items-center gap-2">
                    <button className="btn btn-outline-gold btn-sm"
                      onClick={() => updateQty(item.product.id, Math.max(1, item.quantity - 1), item.size, item.color)}>−</button>
                    <span>{item.quantity}</span>
                    <button className="btn btn-outline-gold btn-sm"
                      onClick={() => updateQty(item.product.id, item.quantity + 1, item.size, item.color)}>+</button>
                    <button className="btn btn-sm ms-3" style={{ color: '#f44', background: 'transparent', border: 'none' }}
                      onClick={() => removeItem(item.product.id, item.size, item.color)}>
                      <i className="bi bi-trash"></i>
                    </button>
                  </div>
                </div>
                <div style={{ color: 'var(--gold)', fontWeight: 'bold', whiteSpace: 'nowrap' }}>
                  KES {(item.product.price * item.quantity).toLocaleString()}
                </div>
              </div>
            </div>
          ))}
          <button className="btn btn-sm" style={{ color: '#888', background: 'transparent', border: '1px solid #444' }}
            onClick={clearCart}>
            <i className="bi bi-trash me-1"></i>Clear Cart
          </button>
        </div>

        {/* Order summary */}
        <div className="col-lg-4">
          <div className="card p-4">
            <h5 style={{ color: 'var(--gold)' }}>Order Summary</h5>
            <hr style={{ borderColor: '#2a2a2a' }} />
            {items.map((item, i) => (
              <div key={i} className="d-flex justify-content-between mb-1" style={{ fontSize: '0.85rem', color: '#aaa' }}>
                <span>{item.product.name} x{item.quantity}</span>
                <span>KES {(item.product.price * item.quantity).toLocaleString()}</span>
              </div>
            ))}
            <hr style={{ borderColor: '#2a2a2a' }} />
            <div className="d-flex justify-content-between mb-3">
              <strong style={{ color: 'var(--cream)' }}>Total</strong>
              <strong className="price-tag">KES {total.toLocaleString()}</strong>
            </div>

            {/* Customer info for WhatsApp order */}
            <h6 style={{ color: 'var(--gold)' }} className="mt-3">Your Details</h6>
            <div className="mb-2">
              <input className="form-control form-control-sm mb-2" placeholder="Your name"
                value={orderName} onChange={e => setOrderName(e.target.value)} />
              <input className="form-control form-control-sm" placeholder="Your phone (M-Pesa)"
                value={orderPhone} onChange={e => setOrderPhone(e.target.value)} />
            </div>

            <a href={orderName && orderPhone ? buildWhatsAppOrder() : '#'}
              className="btn w-100 mt-3"
              style={{ background: '#25D366', color: 'white', border: 'none' }}
              target="_blank" rel="noreferrer"
              onClick={e => { if (!orderName || !orderPhone) { e.preventDefault(); alert('Please enter your name and phone number') } }}>
              <i className="bi bi-whatsapp me-2"></i>Complete Order on WhatsApp
            </a>
            <p className="text-center mt-2 mb-0" style={{ fontSize: '0.75rem', color: '#888' }}>
              You'll confirm payment via M-Pesa on WhatsApp
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
