import { useState } from "react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=80",
    label: "Living Room",
  },
  {
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&q=80",
    label: "Popular Areas",
  },
  {
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=900&q=80",
    label: "Kitchen Space",
  },
];

export default function FacilitiesSection() {
  const [current, setCurrent] = useState(1);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  const total = slides.length;
  const displayNum = current + 1;

  return (
    <section
      style={{
        background: "#eaf4fb",
        padding: "40px 24px 56px",
        maxWidth: "780px",
        margin: "0 auto",
        borderRadius: "24px",
      }}
    >
      {/* Progress bar */}
      <div style={{ display: "flex", gap: "8px", marginBottom: "20px" }}>
        {slides.map((_, i) => (
          <div
            key={i}
            style={{
              height: "3px",
              flex: 1,
              borderRadius: "9999px",
              background: i <= current ? "#5046e5" : "#d1d5db",
              transition: "background 0.3s",
            }}
          />
        ))}
      </div>

      {/* Image slider — NO overflow hidden so nothing clips */}
      <div
        style={{
          position: "relative",
          borderRadius: "20px",
          overflow: "hidden",
          height: "clamp(260px, 45vw, 460px)",
        }}
      >
        {/* Real photo */}
        <img
          src={slides[current].image}
          alt={slides[current].label}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />

        {/* Orange label bar — bottom left, inside image */}
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            left: "0",
            background: "#e8622a",
            padding: "12px 28px 12px 22px",
            borderRadius: "0 12px 12px 0",
            display: "flex",
            alignItems: "center",
            gap: "48px",
          }}
        >
          <span style={{ color: "white", fontSize: "15px", fontWeight: "700" }}>
            {slides[current].label}
          </span>
          <span
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "22px",
              fontWeight: "700",
              letterSpacing: "2px",
            }}
          >
            {displayNum} / {total}
          </span>
        </div>
      </div>

      {/* Arrow buttons — OUTSIDE image, bottom right, below image */}
      <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "16px" }}>
        <button
          onClick={prev}
          aria-label="Previous"
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "12px",
            background: "#5046e5",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          onClick={next}
          aria-label="Next"
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "12px",
            background: "#5046e5",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* Text content */}
      <div style={{ textAlign: "center", marginTop: "36px", padding: "0 8px" }}>
        <p
          style={{
            color: "#5046e5",
            fontSize: "12px",
            fontWeight: "700",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            marginBottom: "14px",
          }}
        >
          OUR FACILITIES
        </p>
        <h2
          style={{
            fontSize: "clamp(26px, 4vw, 40px)",
            fontWeight: "800",
            color: "#111827",
            lineHeight: "1.25",
            marginBottom: "16px",
            fontFamily: "Georgia, 'Times New Roman', serif",
          }}
        >
          We Ensure Any Property For Our <br /> Customer Needs
        </h2>
        <p
          style={{
            fontSize: "15px",
            color: "#9ca3af",
            lineHeight: "1.75",
            marginBottom: "32px",
            maxWidth: "520px",
            margin: "0 auto 32px",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        </p>
        <button
          style={{
            background: "#5046e5",
            color: "white",
            fontSize: "15px",
            fontWeight: "600",
            padding: "14px 48px",
            borderRadius: "12px",
            border: "2px solid #e8622a",
            cursor: "pointer",
          }}
        >
          Contact Us
        </button>
      </div>
    </section>
  );
}
