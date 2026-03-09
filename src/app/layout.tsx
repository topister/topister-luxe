import type { Metadata } from 'next'
import './globals.css'
import { CartProvider } from '@/lib/cartContext'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppFab from '@/components/WhatsAppFab'

export const metadata: Metadata = {
  title: "Topister's Luxe Closet | Ladies Handbags & Heels – Nairobi, Kenya",
  description: 'Premium quality ladies handbags and high heels at affordable factory prices. Delivery across Kenya.',
  keywords: 'handbags kenya, ladies heels nairobi, luxury handbags kenya, topister luxe closet',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppFab />
        </CartProvider>
      </body>
    </html>
  )
}
