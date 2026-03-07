import type { Product, Review } from '@/types'

export const mockProducts: Product[] = [
  {
    id: '1', name: 'Classic Black Tote', category: 'handbag',
    description: 'Elegant black PU leather tote bag with gold hardware. Spacious interior with zip pocket. Perfect for office and everyday use.',
    price: 3200, images: [], colors: ['Black', 'Brown'], stock: 10, featured: true,
    created_at: new Date().toISOString()
  },
  {
    id: '2', name: 'Nude Shoulder Bag', category: 'handbag',
    description: 'Versatile nude PU leather shoulder bag. Adjustable strap, gold clasp. Ideal for work or evening events.',
    price: 2800, images: [], colors: ['Nude', 'Black'], stock: 8, featured: true,
    created_at: new Date().toISOString()
  },
  {
    id: '3', name: 'Gold Evening Clutch', category: 'handbag',
    description: 'Glamorous gold clutch bag with chain strap. Perfect for weddings, parties and events.',
    price: 2200, images: [], colors: ['Gold', 'Silver'], stock: 15, featured: true,
    created_at: new Date().toISOString()
  },
  {
    id: '4', name: 'Block Heel Pump', category: 'heels',
    description: 'Comfortable block heel pump in classic black. 6cm heel height, PU upper. Available EU 36–42.',
    price: 2800, images: [], sizes: ['36','37','38','39','40','41','42'],
    colors: ['Black', 'Nude'], stock: 25, featured: true,
    created_at: new Date().toISOString()
  },
  {
    id: '5', name: 'Stiletto Party Heel', category: 'heels',
    description: 'Sleek 9cm stiletto heel in patent finish. Pointed toe, cushioned insole. Turn heads at any event.',
    price: 3000, images: [], sizes: ['36','37','38','39','40','41','42'],
    colors: ['Black', 'Red', 'Gold'], stock: 20, featured: false,
    created_at: new Date().toISOString()
  },
  {
    id: '6', name: 'Kitten Heel Mule', category: 'heels',
    description: 'Elegant 4cm kitten heel mule. Open back, almond toe. Great for office and casual wear.',
    price: 2500, images: [], sizes: ['36','37','38','39','40','41','42'],
    colors: ['Nude', 'Black', 'Brown'], stock: 18, featured: false,
    created_at: new Date().toISOString()
  },
]

export const mockReviews: Review[] = [
  { id: 'r1', product_id: '1', customer_name: 'Amina W.', rating: 5,
    comment: 'Absolutely love this bag! Quality is amazing for the price. Fast delivery too!', created_at: new Date().toISOString() },
  { id: 'r2', product_id: '1', customer_name: 'Grace M.', rating: 4,
    comment: 'Beautiful bag, exactly as described. The gold hardware is stunning.', created_at: new Date().toISOString() },
  { id: 'r3', product_id: '4', customer_name: 'Faith K.', rating: 5,
    comment: 'These heels are so comfortable! I wore them all day at work.', created_at: new Date().toISOString() },
]
