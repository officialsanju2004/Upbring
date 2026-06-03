import { useState, useEffect, useRef } from "react";

const ALL_PROPERTIES = [
  { id: 1, badge: "For Sell", category: "Sell", location: "Belmont garden, Chicago", photos: "12/12", title: "Villa with Amazing View", price: "$12000.90", description: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood ...", beds: 4, baths: 3, sqft: 1890, agent: "Havan", img: "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=600&q=80" },
  { id: 2, badge: "For Sell", category: "Sell", location: "Belmont garden, Chicago", photos: "12/12", title: "Villa with Amazing View", price: "$12000.90", description: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood ...", beds: 4, baths: 3, sqft: 1890, agent: "Havan", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80" },
  { id: 3, badge: "For Buy",  category: "Buy",  location: "Belmont garden, Chicago", photos: "12/12", title: "Luxury Penthouse Suite",  price: "$18500.00", description: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood ...", beds: 5, baths: 4, sqft: 2400, agent: "Havan", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80" },
  { id: 4, badge: "For Buy",  category: "Buy",  location: "Belmont garden, Chicago", photos: "12/12", title: "Modern Studio Flat",      price: "$8200.50",  description: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood ...", beds: 1, baths: 1, sqft: 620,  agent: "Havan", img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80" },
  { id: 5, badge: "For Rent", category: "Rent", location: "Belmont garden, Chicago", photos: "12/12", title: "Cozy Family Home",        price: "$3500.00",  description: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood ...", beds: 3, baths: 2, sqft: 1400, agent: "Havan", img: "https://images.unsplash.com/photo-1598228723793-52759bba239c?w=600&q=80" },
  { id: 6, badge: "For Rent", category: "Rent", location: "Belmont garden, Chicago", photos: "12/12", title: "Downtown Apartment",      price: "$2800.00",  description: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood ...", beds: 2, baths: 1, sqft: 950,  agent: "Havan", img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&q=80" },
];

const TABS = ["All List", "Buy", "Sell", "Rent"];



function AvatarSVG() {
  return (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ width: 28, height: 28, borderRadius: "50%" }}>
      <circle cx="16" cy="16" r="16" fill="#c4956a"/>
      <circle cx="16" cy="13" r="6" fill="#a0704a"/>
      <ellipse cx="16" cy="28" rx="10" ry="7" fill="#a0704a"/>
    </svg>
  );
}

/* ── Navbar ── */
// function Navbar() {
//   return (
//     <nav style={{
//       display: "flex", alignItems: "center", justifyContent: "space-between",
//       padding: "12px 20px", background: "#fff",
//       borderBottom: "1px solid #eee", position: "sticky", top: 0, zIndex: 100,
//     }}>
//       {/* Logo */}
//       <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
//         <div style={{
//           width: 36, height: 36, borderRadius: 8, overflow: "hidden",
//           display: "flex", alignItems: "center", justifyContent: "center",
//           background: "linear-gradient(135deg, #ff6b35 50%, #5046e5 50%)",
//         }}>
//           <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
//             <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" fill="white" opacity="0.9"/>
//             <rect x="9" y="13" width="6" height="8" fill="white" opacity="0.7"/>
//           </svg>
//         </div>
//         <div style={{ lineHeight: 1.1 }}>
//           <div style={{ fontSize: 13, fontWeight: 800, color: "#e8472d", letterSpacing: 0.5 }}>UPSide</div>
//           <div style={{ fontSize: 13, fontWeight: 800, color: "#5046e5", letterSpacing: 0.5 }}>Housing</div>
//         </div>
//       </div>
//       {/* Hamburger */}
//       <button style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}>
//         <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.2" strokeLinecap="round">
//           <line x1="3" y1="6" x2="21" y2="6"/>
//           <line x1="3" y1="12" x2="21" y2="12"/>
//           <line x1="3" y1="18" x2="21" y2="18"/>
//         </svg>
//       </button>
//     </nav>
//   );
// }

/* ── Icons ── */
const PinIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);
const PhotoIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
  </svg>
);
const ShareIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
  </svg>
);
const HeartIcon = ({ filled }) => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill={filled ? "#e8472d" : "none"} stroke={filled ? "#e8472d" : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);
const CompareIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/>
    <polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>
  </svg>
);
const DiamondIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="#5046e5"><polygon points="12 2 22 12 12 22 2 12"/></svg>
);

/* ── Card ── */
function PropertyCard({ property }) {
  const [liked, setLiked] = useState(false);
  return (
    <div style={{
      background: "#fff", borderRadius: 14, overflow: "hidden",
      border: "1px solid #f0f0f0", boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
      display: "flex", flexDirection: "column",
      transition: "box-shadow 0.25s",
    }}
      onMouseEnter={e => e.currentTarget.style.boxShadow = "0 6px 24px rgba(0,0,0,0.13)"}
      onMouseLeave={e => e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.07)"}
    >
      {/* Image */}
      <div style={{ position: "relative", height: 176, overflow: "hidden" }}>
        <img
          src={property.img}
          alt={property.title}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        <span style={{
          position: "absolute", top: 10, right: 10,
          background: "#e8472d", color: "#fff", fontSize: 11,
          fontWeight: 700, padding: "4px 12px", borderRadius: 20,
        }}>{property.badge}</span>
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          padding: "8px 12px", display: "flex", alignItems: "center", justifyContent: "space-between",
          background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
        }}>
          <span style={{ display: "flex", alignItems: "center", gap: 4, color: "#fff", fontSize: 11 }}>
            <PinIcon />{property.location}
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: 4, color: "#fff", fontSize: 11 }}>
            <PhotoIcon />{property.photos}
          </span>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: "12px 14px", display: "flex", flexDirection: "column", flex: 1 }}>
        <h3 style={{ fontSize: 15, fontWeight: 700, color: "#111", margin: "0 0 6px" }}>{property.title}</h3>
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
          <DiamondIcon />
          <span style={{ color: "#5046e5", fontSize: 14, fontWeight: 700 }}>{property.price}</span>
        </div>
        <p style={{ fontSize: 12, color: "#aaa", lineHeight: 1.6, marginBottom: 12, flex: 1 }}>{property.description}</p>

        {/* Stats */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          fontSize: 11, color: "#888",
          borderTop: "1px solid #f2f2f2", borderBottom: "1px solid #f2f2f2",
          padding: "8px 0", marginBottom: 12,
        }}>
          <span>{property.beds} Beds</span>
          <span>{property.baths} Baths</span>
          <span>{property.sqft} sft</span>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
            <AvatarSVG />
            <span style={{ fontSize: 13, fontWeight: 600, color: "#222" }}>{property.agent}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 14, color: "#bbb" }}>
            <button style={{ background: "none", border: "none", cursor: "pointer", color: "inherit", padding: 0, display: "flex" }}
              onMouseEnter={e => e.currentTarget.style.color = "#555"} onMouseLeave={e => e.currentTarget.style.color = "#bbb"}
              aria-label="Share"><ShareIcon /></button>
            <button style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", color: liked ? "#e8472d" : "#bbb" }}
              onClick={() => setLiked(l => !l)} aria-label="Like"><HeartIcon filled={liked} /></button>
            <button style={{ background: "none", border: "none", cursor: "pointer", color: "inherit", padding: 0, display: "flex" }}
              onMouseEnter={e => e.currentTarget.style.color = "#555"} onMouseLeave={e => e.currentTarget.style.color = "#bbb"}
              aria-label="Compare"><CompareIcon /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Main ── */
export default function ExploreProperties() {
  const [activeTab, setActiveTab] = useState("All List");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const intervalRef = useRef(null);

  const filtered = activeTab === "All List" ? ALL_PROPERTIES : ALL_PROPERTIES.filter(p => p.category === activeTab);

  useEffect(() => { setCurrentIndex(0); }, [activeTab]);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (!isMobile || filtered.length <= 1) return;
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % filtered.length);
    }, 3500);
    return () => clearInterval(intervalRef.current);
  }, [isMobile, filtered.length, activeTab]);

  return (
    <div style={{ fontFamily: "sans-serif", background: "#fafafa", minHeight: "100vh" }}>
     

      <section style={{ padding: "32px 16px", maxWidth: 900, margin: "0 auto" }}>
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <p style={{ color: "#5046e5", fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 6 }}>
            RECENT PROPERTIES
          </p>
          <h2 style={{ fontSize: 28, fontWeight: 900, color: "#111", margin: 0 }}>Explore Properties</h2>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 24, overflowX: "auto", paddingBottom: 4 }}>
          {TABS.map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} style={{
              padding: "8px 20px", borderRadius: 6, fontSize: 13, fontWeight: 600,
              whiteSpace: "nowrap", cursor: "pointer", transition: "all 0.15s",
              border: activeTab === tab ? "1px solid #5046e5" : "1px solid #e0e0e0",
              background: activeTab === tab ? "#5046e5" : "#fff",
              color: activeTab === tab ? "#fff" : "#555",
            }}>
              {tab}
            </button>
          ))}
        </div>

        {/* Desktop grid */}
        <div style={{ display: isMobile ? "none" : "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          {filtered.length === 0
            ? <p style={{ gridColumn: "1/-1", textAlign: "center", color: "#aaa", padding: "40px 0" }}>No properties found.</p>
            : filtered.map(p => <PropertyCard key={p.id} property={p} />)
          }
        </div>

        {/* Mobile carousel */}
        {isMobile && (
          filtered.length === 0 ? (
            <p style={{ textAlign: "center", color: "#aaa", padding: "40px 0" }}>No properties found.</p>
          ) : (
            <>
              <div style={{ overflow: "hidden", borderRadius: 14 }}>
                <div style={{
                  display: "flex",
                  transform: `translateX(-${currentIndex * 100}%)`,
                  transition: "transform 0.5s ease-in-out",
                }}>
                  {filtered.map(p => (
                    <div key={p.id} style={{ minWidth: "100%" }}><PropertyCard property={p} /></div>
                  ))}
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 16 }}>
                {filtered.map((_, i) => (
                  <button key={i} onClick={() => setCurrentIndex(i)} aria-label={`Slide ${i + 1}`} style={{
                    borderRadius: 9999, border: "none", cursor: "pointer", padding: 0,
                    width: i === currentIndex ? 20 : 8, height: 8,
                    background: i === currentIndex ? "#5046e5" : "#d0d0d0",
                    transition: "all 0.2s",
                  }}/>
                ))}
              </div>
            </>
          )
        )}
      </section>
    </div>
  );
}
