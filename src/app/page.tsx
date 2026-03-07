import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { mockProducts } from "@/lib/mockData";
import { heroBg, handbag1, heels1 } from "@/assets/images";

export default function HomePage() {
  const featured = mockProducts.filter((p) => p.featured);

  return (
    <>
      {/* ── HERO ── */}
      <section className="hero">
        <div className="container position-relative">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <p className="section-title mb-2">
                <i className="bi bi-diamond me-2"></i>New Arrivals 2025
              </p>
              <h1
                style={{
                  fontSize: "3.5rem",
                  lineHeight: 1.1,
                  color: "var(--cream)",
                }}
              >
                Where Style
                <br />
                <span style={{ color: "var(--gold)", fontStyle: "italic" }}>
                  Meets Elegance
                </span>
              </h1>
              <p className="mt-3 mb-4" style={{ color: "#aaa", maxWidth: 400 }}>
                Premium quality ladies handbags & high heels. Direct factory
                imports — no middleman, just the best prices in Nairobi.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <Link href="/shop" className="btn btn-gold btn-lg px-4">
                  Shop Now <i className="bi bi-arrow-right ms-2"></i>
                </Link>
                <Link
                  href="/shop?cat=handbag"
                  className="btn btn-outline-gold btn-lg px-4"
                >
                  👜 Handbags
                </Link>
                <Link
                  href="/shop?cat=heels"
                  className="btn btn-outline-gold btn-lg px-4"
                >
                  👠 Heels
                </Link>
              </div>
            </div>
            <div className="col-lg-6 text-center d-none d-lg-block">
              <div
                style={{
                  fontSize: "12rem",
                  opacity: 0.15,
                  position: "absolute",
                  right: 0,
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              >
                👜
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── USPs ── */}
      <section
        className="py-4"
        style={{
          background: "var(--black-soft)",
          borderBottom: "1px solid #2a2a2a",
        }}
      >
        <div className="container">
          <div className="row text-center g-3">
            {[
              ["bi-award", "Factory Direct", "No middleman pricing"],
              ["bi-truck", "Kenya Delivery", "Nairobi 1–2 days"],
              ["bi-shield-check", "Quality Guaranteed", "Or we replace it"],
              ["bi-phone", "Easy WhatsApp Order", "Chat to buy instantly"],
            ].map(([icon, title, sub]) => (
              <div key={title} className="col-6 col-md-3">
                <i
                  className={`bi ${icon}`}
                  style={{ fontSize: "1.5rem", color: "var(--gold)" }}
                ></i>
                <p
                  className="mb-0 mt-1"
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--cream)",
                    fontWeight: "bold",
                  }}
                >
                  {title}
                </p>
                <p
                  className="mb-0"
                  style={{ fontSize: "0.75rem", color: "#888" }}
                >
                  {sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-4">
            <p className="section-title">✦ Handpicked For You</p>
            <h2 className="section-heading">Featured Collection</h2>
          </div>
          <hr className="gold-divider" />
          <div className="row g-4">
            {featured.map((product) => (
              <div key={product.id} className="col-sm-6 col-md-4">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link href="/shop" className="btn btn-outline-gold px-5">
              View All Products <i className="bi bi-arrow-right ms-2"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section className="py-5" style={{ background: "var(--black-soft)" }}>
        <div className="container">
          <div className="text-center mb-4">
            <p className="section-title">✦ Browse By Category</p>
            <h2 className="section-heading">Shop Categories</h2>
          </div>
          <div className="row g-4">
            <div className="col-md-6">
              <Link href="/shop?cat=handbag" style={{ textDecoration: "none" }}>
                <div
                  className="card text-center py-5"
                  style={{
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden",
                    minHeight: 260,
                  }}
                >
                  <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
                    <Image
                      src={handbag1}
                      alt="Handbags"
                      fill
                      style={{ objectFit: "cover", opacity: 0.35 }}
                    />
                  </div>
                  <div style={{ position: "relative", zIndex: 1 }}>
                    <div style={{ fontSize: "3rem" }}>👜</div>
                    <h4 style={{ color: "var(--gold)", marginTop: 12 }}>
                      Handbags
                    </h4>
                    <p style={{ color: "#ccc", fontSize: "0.85rem" }}>
                      Totes · Shoulder Bags · Clutches
                    </p>
                    <span className="btn btn-gold btn-sm mt-2">
                      Shop Handbags
                    </span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-6">
              <Link href="/shop?cat=heels" style={{ textDecoration: "none" }}>
                <div
                  className="card text-center py-5"
                  style={{
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden",
                    minHeight: 260,
                  }}
                >
                  <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
                    <Image
                      src={heels1}
                      alt="Heels"
                      fill
                      style={{ objectFit: "cover", opacity: 0.35 }}
                    />
                  </div>
                  <div style={{ position: "relative", zIndex: 1 }}>
                    <div style={{ fontSize: "3rem" }}>👠</div>
                    <h4 style={{ color: "var(--gold)", marginTop: 12 }}>
                      High Heels
                    </h4>
                    <p style={{ color: "#ccc", fontSize: "0.85rem" }}>
                      Block Heels · Stilettos · Kitten Heels · Wedges
                    </p>
                    <span className="btn btn-gold btn-sm mt-2">Shop Heels</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-4">
            <p className="section-title">✦ Happy Customers</p>
            <h2 className="section-heading">What They Say</h2>
          </div>
          <div className="row g-4">
            {[
              {
                name: "Amina W.",
                text: "Best quality handbags I have found in Nairobi! Fast delivery and beautiful packaging. 100% recommend.",
                stars: 5,
              },
              {
                name: "Grace M.",
                text: "Ordered the block heels and they are incredibly comfortable. Wore them all day at work!",
                stars: 5,
              },
              {
                name: "Faith K.",
                text: "The prices are unbeatable. You can tell they import directly. My bag looks like it cost 3x more!",
                stars: 5,
              },
            ].map((t) => (
              <div key={t.name} className="col-md-4">
                <div className="card p-4">
                  <div className="mb-2">
                    {[...Array(t.stars)].map((_, i) => (
                      <i
                        key={i}
                        className="bi bi-star-fill star-filled me-1"
                      ></i>
                    ))}
                  </div>
                  <p
                    style={{
                      fontStyle: "italic",
                      color: "#ccc",
                      fontSize: "0.9rem",
                    }}
                  >
                    &quot;{t.text}&quot;
                  </p>
                  <p
                    className="mb-0"
                    style={{
                      color: "var(--gold)",
                      fontSize: "0.85rem",
                      fontWeight: "bold",
                    }}
                  >
                    — {t.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section
        className="py-5"
        style={{
          background: "linear-gradient(135deg, #1a1200, #0a0a0a)",
          borderTop: "1px solid var(--gold)",
          borderBottom: "1px solid var(--gold)",
        }}
      >
        <div className="container text-center">
          <h2 style={{ color: "var(--gold)" }}>Ready to Elevate Your Style?</h2>
          <p style={{ color: "#aaa" }}>
            Chat with us on WhatsApp to place your order instantly
          </p>
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "254700000000"}?text=${encodeURIComponent("Hi! I'd like to order from Topister's Luxe Closet 👜")}`}
            className="btn btn-gold btn-lg px-5 mt-2"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-whatsapp me-2"></i> Order on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
