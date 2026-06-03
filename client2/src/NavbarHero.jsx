import { useState, useEffect, useRef } from "react";
import  building  from "../images/building.png";



const SEARCH_TABS   = ["Sell", "Buy", "Rent"];
const CATEGORIES    = ["Apartment", "Villa", "House", "Studio", "Penthouse"];

/* ─────────────────────────── ICONS ─────────────────────────── */
const PinIcon = ({ color = "currentColor", size = 11 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
const SearchSvg = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);
const GridSvg = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e8472d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
    <rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
  </svg>
);
const ChevronDown = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);
const PhoneIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

/* ─────────────────────────── TOP ENVATO BAR ─────────────────────────── */
function TopEnvatoBar() {
  return (
    <div
      style={{
        background: "#262626",
        height: 54,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          color: "#fff",
          fontSize: 18,
          fontWeight: 700,
        }}
      >
        ⚡ envatomarket
      </div>

      <button
        style={{
          background: "#82b440",
          color: "#fff",
          border: "none",
          padding: "10px 22px",
          borderRadius: 4,
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        Buy now
      </button>
    </div>
  );
}

/* ─────────────────────────── LOGO ─────────────────────────── */
function Logo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <div style={{ position: "relative", width: 44, height: 44 }}>
        {/* Orange square bottom-left */}
        <div style={{
          position: "absolute", bottom: 0, left: 0,
          width: 32, height: 32, background: "#e8472d", borderRadius: 6,
        }}/>
        {/* Blue square top-right with white inner square */}
        <div style={{
          position: "absolute", top: 0, right: 0,
          width: 32, height: 32, background: "#5046e5", borderRadius: 6,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <div style={{ width: 13, height: 13, background: "white", borderRadius: 3 }}/>
        </div>
      </div>
      <div style={{ lineHeight: 1.15 }}>
        <div style={{ fontSize: 16, fontWeight: 800, color: "#5046e5" }}>UPSide</div>
        <div style={{ fontSize: 16, fontWeight: 800, color: "#e8472d" }}>Housing</div>
      </div>
    </div>
  );
}

/* ─────────────────────────── AVATAR ─────────────────────────── */
function AvatarSVG() {
  return (
    <img
      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43f?w=200&q=80"
      alt="Agent"
      style={{
        width: 28,
        height: 28,
        borderRadius: "50%",
        objectFit: "cover",
      }}
    />
  );
}

/* ─────────────────────────── NAVBAR ─────────────────────────── */
function Navbar({ onMenuToggle }) {
  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 200,
      background: "#eaf0fb",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "12px 18px",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    }}>
      <Logo />
      <button
        onClick={onMenuToggle}
        style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}
        aria-label="Menu"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.2" strokeLinecap="round">
          <line x1="3" y1="6" x2="21" y2="6"/>
          <line x1="3" y1="12" x2="21" y2="12"/>
          <line x1="3" y1="18" x2="21" y2="18"/>
        </svg>
      </button>
    </nav>
  );
}

/* ─────────────────────────── MOBILE MENU ─────────────────────────── */
function MobileMenu({ open, onClose }) {
  if (!open) return null;
  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 300,
    }}>
      {/* Backdrop */}
      <div onClick={onClose} style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.1)" }}/>
      {/* Panel */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0,
        background: "#eaf0fb", padding: "14px 18px 24px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
      }}>
        {/* Header row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
          <Logo />
          <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Nav links */}
        {[
          { label: "Home", active: true },
          { label: "Properties" },
          { label: "Pages", hasDropdown: true },
          { label: "About" },
          { label: "Contact" },
        ].map(item => (
          <div key={item.label} style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "13px 0", borderBottom: "1px solid rgba(0,0,0,0.05)",
            cursor: "pointer",
          }}>
            <span style={{
              fontSize: 15, fontWeight: 500,
              color: item.active ? "#5046e5" : "#222",
            }}>{item.label}</span>
            {item.hasDropdown && (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2.5" strokeLinecap="round">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            )}
          </div>
        ))}

        {/* Phone button */}
        <div style={{ marginTop: 18 }}>
          <button style={{
            display: "flex", alignItems: "center", gap: 8,
            background: "#5046e5", color: "white", border: "none", borderRadius: 24,
            padding: "10px 20px", fontSize: 14, fontWeight: 600, cursor: "pointer",
          }}>
            <PhoneIcon />
            <span>126660</span>
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────── HERO ─────────────────────────── */
function Hero() {
  const [activeTab, setActiveTab] = useState("Sell");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [catOpen, setCatOpen] = useState(false);

  return (
    <div style={{ background: "#eaf0fb", paddingBottom: 0 }}>
      {/* Text content */}
      <div style={{ padding: "36px 20px 0", textAlign: "center" }}>
        <h1 style={{
          fontSize: "clamp(32px, 6vw, 68px)", fontWeight: 900, color: "#111",
          lineHeight: 1.25, margin: "0 0 16px",
        }}>
          Discover Your Dream<br />
          With{" "}
          <span style={{
            color: "#5046e5",
            textDecoration: "underline",
            textDecorationColor: "#5046e5",
            textUnderlineOffset: 5,
          }}>New Living</span>
          {" "}Place
        </h1>
        <p style={{
          fontSize: "clamp(14px, 2vw, 22px)", color: "#777", lineHeight: 1.7,
          maxWidth: 700, margin: "0 auto 28px",
        }}>
          Through our proprietary platform, Upside Housing is Helping you to finding best and modern living places.
        </p>
        <button style={{
          background: "#5046e5", color: "white",
          border: "2px solid #e8472d",
          borderRadius: 12, padding: "14px 40px",
          fontSize: 15, fontWeight: 700, cursor: "pointer",
          marginBottom: 32,
        }}>
          Get in Touch
        </button>
      </div>

      {/* Building image with orange circle */}
      <div style={{ position: "relative", maxWidth: 700, margin: "0 auto", padding: "0 16px" }}>
        {/* Orange circle */}
        <div style={{
          position: "absolute",
          top: "10%", right: "8%",
          width: "62%", paddingBottom: "62%",
          background: "#e8622a",
          borderRadius: "50%",
          zIndex: 0,
        }}/>
        {/* Building photo in card frame */}
        <div style={{
          position: "relative", zIndex: 1,
          border: "3px solid #e0e8f0",
          borderRadius: 12,
          overflow: "hidden",
     
          aspectRatio: "3/4",
          maxHeight: 560,
        }}>
          <img
            src={building}
            alt="Modern apartment building"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>
      </div>

      {/* Search panel */}
      <div style={{
        maxWidth: 1100,
        margin: "24px auto 0",
        background: "white",
        borderRadius: 18,
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        overflow: "visible",
        position: "relative", zIndex: 10,
      }}>
        {/* Tabs */}
        <div style={{ display: "flex", borderBottom: "1px solid #f0f0f0", padding: "0 16px" }}>
          {SEARCH_TABS.map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} style={{
              background: "none", border: "none", cursor: "pointer",
              padding: "14px 16px 12px",
              fontSize: 14, fontWeight: 600, marginRight: 4,
              borderBottom: activeTab === tab ? "2px solid #5046e5" : "2px solid transparent",
              color: activeTab === tab ? "#5046e5" : "#aaa",
              transition: "all 0.15s",
            }}>{tab}</button>
          ))}
          <div style={{ marginLeft: "auto", alignSelf: "stretch", width: 1, background: "#eee", margin: "6px 0" }}/>
        </div>

        {/* Fields */}
        <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "12px 12px" }}>
          {/* Location */}
          <div style={{
            flex: 1, display: "flex", alignItems: "center", gap: 8,
            background: "#fef3ef", borderRadius: 12, padding: "8px 10px",
          }}>
            <PinIcon color="#e8472d" size={20} />
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#222" }}>Location</div>
              <input
                value={location} onChange={e => setLocation(e.target.value)}
                placeholder="Enter Zip, Address Road No..."
                style={{
                  fontSize: 11, color: "#aaa", background: "transparent",
                  border: "none", outline: "none", width: "100%",
                }}
              />
            </div>
          </div>

          {/* Category */}
          <div
            onClick={() => setCatOpen(o => !o)}
            style={{
              flex: 1, display: "flex", alignItems: "center", gap: 6,
              background: "white", border: "1px solid #eee",
              borderRadius: 12, padding: "8px 10px", cursor: "pointer",
              position: "relative",
            }}>
            <GridSvg />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#222" }}>Category</div>
              <div style={{ fontSize: 11, color: "#aaa" }}>{category || "Select category"}</div>
            </div>
            <ChevronDown />
            {catOpen && (
              <div style={{
                position: "absolute", top: "calc(100% + 4px)", left: 0, right: 0,
                background: "white", border: "1px solid #eee",
                borderRadius: 12, boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                zIndex: 20, overflow: "hidden",
              }}>
                {CATEGORIES.map(c => (
                  <div key={c}
                    onClick={e => { e.stopPropagation(); setCategory(c); setCatOpen(false); }}
                    style={{ padding: "11px 14px", fontSize: 13, color: "#444", cursor: "pointer" }}
                    onMouseEnter={e => e.currentTarget.style.background = "#eaf0fb"}
                    onMouseLeave={e => e.currentTarget.style.background = "white"}
                  >{c}</div>
                ))}
              </div>
            )}
          </div>

          {/* Search btn */}
          <button style={{
            background: "#5046e5", border: "2px solid #e8472d",
            borderRadius: 12, padding: "10px 14px",
            display: "flex", alignItems: "center", gap: 6,
            color: "white", fontSize: 14, fontWeight: 700, cursor: "pointer",
            flexShrink: 0,
          }}>
            <SearchSvg />
            <span>Search</span>
          </button>
        </div>
      </div>
    </div>
  );
}



/* ─────────────────────────── APP ─────────────────────────── */
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div style={{ fontFamily: "sans-serif", background: "#fafafa", minHeight: "100vh" }}>
      <TopEnvatoBar />
      <Navbar onMenuToggle={() => setMenuOpen(o => !o)} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <Hero />
     
    </div>
  );
}