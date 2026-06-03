import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Michael Johnson",
    company: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "Upside Housing made finding my new apartment incredibly simple. The listings were accurate, the process was smooth, and I moved into my dream place within two weeks.",
    bgColor: "#fdf0e0",
  },
  {
    id: 2,
    name: "Sophia Williams",
    company: "Marketing Manager",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "I explored several housing platforms, but Upside Housing stood out because of its modern interface and verified properties. I found exactly what I was looking for.",
    bgColor: "#e8eefb",
  },
  {
    id: 3,
    name: "Daniel Carter",
    company: "Business Owner",
    image: "https://randomuser.me/api/portraits/men/51.jpg",
    quote:
      "The team behind Upside Housing clearly understands what home seekers need. The recommendations matched my preferences perfectly and saved me a lot of time.",
    bgColor: "#fce8e4",
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    company: "Interior Designer",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    quote:
      "From browsing properties to scheduling visits, everything felt professional and effortless. I highly recommend Upside Housing to anyone searching for a new home.",
    bgColor: "#e0f5f5",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="bg-white py-20 px-6" style={{ maxWidth: "860px", margin: "0 auto" }}>
      
      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-[#5046e5] text-[12px] font-bold tracking-[0.2em] uppercase mb-4">
          CLIENTS TESTIMONIAL
        </p>
        <h2
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          className="text-[42px] md:text-[52px] leading-tight font-bold text-[#120b2d]"
        >
          What Are Our Clients <br /> Saying About Us
        </h2>
      </div>

      {/* Floating Avatar Cards — matching screenshot layout */}
      <div className="relative mb-24" style={{ height: "320px" }}>

        {/* Card 1 — Top Left (cream/peach) */}
        <div
          className="absolute flex items-center justify-center rounded-2xl"
          style={{
            background: "#fdf0e0",
            width: "220px",
            height: "140px",
            top: "0px",
            left: "0px",
            zIndex: 1,
          }}
        >
          <div className="rounded-full overflow-hidden" style={{ width: "72px", height: "72px" }}>
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Michael"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Card 2 — Center overlapping (pink/salmon) — z higher */}
        <div
          className="absolute flex items-center justify-center rounded-2xl"
          style={{
            background: "#fce8e4",
            width: "220px",
            height: "140px",
            top: "80px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 3,
          }}
        >
          <div className="rounded-full overflow-hidden" style={{ width: "72px", height: "72px" }}>
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Sophia"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Card 3 — Top Right (light blue) */}
        <div
          className="absolute flex items-center justify-center rounded-2xl"
          style={{
            background: "#e8eefb",
            width: "220px",
            height: "140px",
            top: "0px",
            right: "0px",
            zIndex: 2,
          }}
        >
          <div className="rounded-full overflow-hidden" style={{ width: "72px", height: "72px" }}>
            <img
              src="https://randomuser.me/api/portraits/men/51.jpg"
              alt="Daniel"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Card 4 — Bottom Right (light cyan/teal) */}
        <div
          className="absolute flex items-center justify-center rounded-2xl"
          style={{
            background: "#e0f5f5",
            width: "200px",
            height: "128px",
            top: "160px",
            right: "0px",
            zIndex: 2,
          }}
        >
          <div className="rounded-full overflow-hidden" style={{ width: "66px", height: "66px" }}>
            <img
              src="https://randomuser.me/api/portraits/women/68.jpg"
              alt="Emily"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      {/* Testimonial Card */}
      <div className="relative mt-12">
        {/* Orange shadow card behind */}
        <div
          className="absolute rounded-2xl bg-[#e8472d]"
          style={{
            bottom: "-12px",
            right: "-12px",
            width: "100%",
            height: "100%",
            zIndex: 0,
            borderRadius: "16px",
          }}
        />

        {/* Main indigo card */}
        <div
          className="relative rounded-2xl overflow-visible"
          style={{
            background: "#5046e5",
            padding: "70px 40px 40px 40px",
            zIndex: 1,
          }}
        >
          {/* Avatar — sits on top edge, fully visible, NOT clipped */}
          <div
            className="absolute left-1/2"
            style={{
              top: "-44px",
              transform: "translateX(-50%)",
              width: "88px",
              height: "88px",
              borderRadius: "50%",
              border: "4px solid white",
              overflow: "hidden",
              background: t.bgColor,
              zIndex: 10,
              flexShrink: 0,
            }}
          >
            <img
              src={t.image}
              alt={t.name}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>

          {/* Big quote mark */}
          <div
            style={{
              fontSize: "90px",
              lineHeight: "1",
              color: "rgba(255,255,255,0.18)",
              fontFamily: "Georgia, serif",
              marginBottom: "8px",
              userSelect: "none",
            }}
          >
            "
          </div>

          {/* Quote text with drop cap */}
          <p style={{ color: "white", fontSize: "16px", lineHeight: "1.75", marginBottom: "28px" }}>
            <span
              style={{
                fontSize: "38px",
                fontWeight: "bold",
                float: "left",
                lineHeight: "1",
                marginRight: "4px",
                marginTop: "4px",
              }}
            >
              {t.quote.charAt(0)}
            </span>
            {t.quote.slice(1)}
          </p>

          {/* Name & company */}
          <div style={{ position: "relative", zIndex: 2 }}>
            <h4
              style={{
                color: "white",
                fontSize: "24px",
                fontWeight: "bold",
                fontFamily: "Georgia, serif",
                marginBottom: "4px",
              }}
            >
              {t.name}
            </h4>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "14px" }}>{t.company}</p>
          </div>

          {/* Decorative blob bottom-right */}
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              right: "28px",
              width: "110px",
              height: "110px",
              background: "#3a30c0",
              borderRadius: "60% 40% 70% 30% / 50% 60% 40% 50%",
              opacity: 0.35,
              zIndex: 1,
            }}
          />
        </div>
      </div>

      {/* Arrow buttons */}
      <div className="flex gap-3 mt-10">
        <button
          onClick={prev}
          aria-label="Previous"
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "12px",
            background: "#5046e5",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background 0.15s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#3f36c4")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#5046e5")}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          onClick={next}
          aria-label="Next"
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "12px",
            background: "#5046e5",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background 0.15s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#3f36c4")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#5046e5")}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </section>
  );
}
