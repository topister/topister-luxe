export default function WhatsAppFab() {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '254700000000'
  const msg = encodeURIComponent("Hi! I'm interested in your products at Topister's Luxe Closet 👜👠")
  return (
    <a href={`https://wa.me/${phone}?text=${msg}`} target="_blank" rel="noreferrer"
      className="whatsapp-fab" title="Chat on WhatsApp">
      <i className="bi bi-whatsapp"></i>
    </a>
  )
}
