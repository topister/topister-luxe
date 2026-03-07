import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// ─── Products ─────────────────────────────────────────────
export async function getProducts(category?: 'handbag' | 'heels') {
  let query = supabase.from('products').select('*').order('created_at', { ascending: false })
  if (category) query = query.eq('category', category)
  const { data, error } = await query
  if (error) throw error
  return data
}

export async function getFeaturedProducts() {
  const { data, error } = await supabase
    .from('products').select('*').eq('featured', true).limit(6)
  if (error) throw error
  return data
}

export async function getProductById(id: string) {
  const { data, error } = await supabase
    .from('products').select('*').eq('id', id).single()
  if (error) throw error
  return data
}

export async function createProduct(product: Omit<import('@/types').Product, 'id' | 'created_at'>) {
  const { data, error } = await supabase.from('products').insert([product]).select().single()
  if (error) throw error
  return data
}

export async function updateProduct(id: string, updates: Partial<import('@/types').Product>) {
  const { data, error } = await supabase.from('products').update(updates).eq('id', id).select().single()
  if (error) throw error
  return data
}

export async function deleteProduct(id: string) {
  const { error } = await supabase.from('products').delete().eq('id', id)
  if (error) throw error
}

// ─── Reviews ──────────────────────────────────────────────
export async function getReviews(productId: string) {
  const { data, error } = await supabase
    .from('reviews').select('*').eq('product_id', productId).order('created_at', { ascending: false })
  if (error) throw error
  return data
}

export async function addReview(review: Omit<import('@/types').Review, 'id' | 'created_at'>) {
  const { data, error } = await supabase.from('reviews').insert([review]).select().single()
  if (error) throw error
  return data
}

// ─── Orders ───────────────────────────────────────────────
export async function createOrder(order: Omit<import('@/types').Order, 'id' | 'created_at'>) {
  const { data, error } = await supabase.from('orders').insert([order]).select().single()
  if (error) throw error
  return data
}

export async function getOrders() {
  const { data, error } = await supabase
    .from('orders').select('*').order('created_at', { ascending: false })
  if (error) throw error
  return data
}

export async function updateOrderStatus(id: string, status: import('@/types').Order['status']) {
  const { data, error } = await supabase.from('orders').update({ status }).eq('id', id).select().single()
  if (error) throw error
  return data
}
