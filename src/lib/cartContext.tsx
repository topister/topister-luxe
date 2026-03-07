'use client'

import { createContext, useContext, useReducer, ReactNode } from 'react'
import type { CartItem, Product } from '@/types'

interface CartState { items: CartItem[] }

type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: { productId: string; size?: string; color: string } }
  | { type: 'UPDATE_QTY'; payload: { productId: string; size?: string; color: string; quantity: number } }
  | { type: 'CLEAR' }

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const key = (i: CartItem) => `${i.product.id}-${i.size}-${i.color}`
      const exists = state.items.findIndex(i => key(i) === key(action.payload))
      if (exists >= 0) {
        const items = [...state.items]
        items[exists] = { ...items[exists], quantity: items[exists].quantity + action.payload.quantity }
        return { items }
      }
      return { items: [...state.items, action.payload] }
    }
    case 'REMOVE_ITEM':
      return {
        items: state.items.filter(i =>
          !(i.product.id === action.payload.productId &&
            i.size === action.payload.size &&
            i.color === action.payload.color))
      }
    case 'UPDATE_QTY':
      return {
        items: state.items.map(i =>
          i.product.id === action.payload.productId &&
          i.size === action.payload.size &&
          i.color === action.payload.color
            ? { ...i, quantity: action.payload.quantity }
            : i)
      }
    case 'CLEAR':
      return { items: [] }
    default:
      return state
  }
}

interface CartContextType {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (productId: string, size?: string, color?: string) => void
  updateQty: (productId: string, quantity: number, size?: string, color?: string) => void
  clearCart: () => void
  total: number
  count: number
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] })

  const total = state.items.reduce((sum, i) => sum + i.product.price * i.quantity, 0)
  const count = state.items.reduce((sum, i) => sum + i.quantity, 0)

  return (
    <CartContext.Provider value={{
      items: state.items,
      addItem: (item) => dispatch({ type: 'ADD_ITEM', payload: item }),
      removeItem: (productId, size, color = '') =>
        dispatch({ type: 'REMOVE_ITEM', payload: { productId, size, color } }),
      updateQty: (productId, quantity, size, color = '') =>
        dispatch({ type: 'UPDATE_QTY', payload: { productId, size, color, quantity } }),
      clearCart: () => dispatch({ type: 'CLEAR' }),
      total,
      count,
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
