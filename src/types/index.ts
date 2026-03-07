export interface Product {
  id: string
  name: string
  description: string
  price: number
  category: 'handbag' | 'heels'
  images: string[]
  sizes?: string[]        // for heels: EU sizes
  colors: string[]
  stock: number
  featured: boolean
  created_at: string
}

export interface CartItem {
  product: Product
  quantity: number
  size?: string
  color: string
}

export interface Review {
  id: string
  product_id: string
  customer_name: string
  rating: number          // 1-5
  comment: string
  created_at: string
}

export interface Order {
  id: string
  customer_name: string
  customer_phone: string
  customer_email?: string
  items: CartItem[]
  total: number
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered'
  created_at: string
}
