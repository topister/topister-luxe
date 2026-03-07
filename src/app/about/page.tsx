import Link from "next/link";
import Image from "next/image";
import { aboutBag } from "@/assets/images";

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #1a1200, #0a0a0a)",
          borderBottom: "1px solid var(--gold)",
          padding: "80px 0",
        }}
      >
        <div className="container text-center">
          <p className="section-title">✦ Our Story</p>
          <h1 className="section-heading">About Topister&apos;s Luxe Closet</h1>
          <p
            style={{
              color: "#aaa",
              maxWidth: 500,
              margin: "0 auto",
              fontStyle: "italic",
            }}
          >
            &quot;Where Style Meets Elegance&quot;
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-md-6">
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: 420,
                  borderRadius: 12,
                  overflow: "hidden",
                  border: "1px solid var(--gold)",
                }}
              >
                <Image
                  src={aboutBag}
                  alt="Topister's Luxe Closet handbag collection"
                  fill
                  style={{ objectFit: "cover" }}
                  placeholder="blur"
                  priority
                />
              </div>
            </div>
            <div className="col-md-6">
              <p className="section-title">✦ Who We Are</p>
              <h2 style={{ color: "var(--cream)" }}>
                Direct From Factory to Your Doorstep
              </h2>
              <hr className="gold-divider" />
              <p style={{ color: "#aaa", lineHeight: 1.8 }}>
                Topister&apos;s Luxe Closet was founded with one mission: to
                bring premium quality ladies handbags and high heels to every
                woman in Kenya at prices that don&apos;t break the bank.
              </p>
              <p style={{ color: "#aaa", lineHeight: 1.8 }}>
                We import directly from factories in China, cutting out the
                middleman entirely. This means you get the same quality
                you&apos;d find in high-end Nairobi boutiques — at factory
                prices.
              </p>
              <p style={{ color: "#aaa", lineHeight: 1.8 }}>
                Based in Nairobi, we deliver across Kenya with fast, reliable
                courier services. Every piece is carefully selected for quality,
                style and durability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-5" style={{ background: "var(--black-soft)" }}>
        <div className="container">
          <div className="text-center mb-4">
            <p className="section-title">✦ What We Stand For</p>
            <h2 className="section-heading">Our Values</h2>
          </div>
          <div className="row g-4">
            {[
              {
                icon: "bi-award",
                title: "Quality First",
                desc: "Every product is handpicked and quality-checked before delivery.",
              },
              {
                icon: "bi-currency-dollar",
                title: "Factory Prices",
                desc: "No middleman. You pay factory direct pricing — always.",
              },
              {
                icon: "bi-heart",
                title: "Customer Love",
                desc: "Your satisfaction is guaranteed or we replace your order.",
              },
              {
                icon: "bi-truck",
                title: "Fast Delivery",
                desc: "Nairobi 1–2 days. Upcountry 2–4 days via reliable courier.",
              },
            ].map((v) => (
              <div key={v.title} className="col-sm-6 col-md-3">
                <div className="card p-4 text-center h-100">
                  <i
                    className={`bi ${v.icon}`}
                    style={{ fontSize: "2rem", color: "var(--gold)" }}
                  ></i>
                  <h6 style={{ color: "var(--cream)", marginTop: 12 }}>
                    {v.title}
                  </h6>
                  <p style={{ fontSize: "0.85rem", color: "#888" }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5 text-center">
        <div className="container">
          <h3 style={{ color: "var(--gold)" }}>Ready to Shop?</h3>
          <p style={{ color: "#aaa" }}>
            Browse our latest collection of handbags and heels
          </p>
          <Link href="/shop" className="btn btn-gold btn-lg px-5">
            Shop Now <i className="bi bi-arrow-right ms-2"></i>
          </Link>
        </div>
      </section>
    </div>
  );
}
