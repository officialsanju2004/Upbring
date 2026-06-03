import React from "react";

// Living room SVG illustration
function LivingRoomSVG() {
  return (
    <svg viewBox="0 0 500 380" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      {/* Sky / window view */}
      <rect width="500" height="380" fill="#c8b89a"/>
      {/* Ceiling */}
      <rect width="500" height="60" fill="#e8e0d0"/>
      {/* Recessed light */}
      <circle cx="250" cy="30" r="14" fill="#f8f0e0" stroke="#d0c8b8" strokeWidth="2"/>
      <circle cx="250" cy="30" r="8" fill="#fffde8" opacity="0.9"/>
      {/* Large windows - back wall */}
      <rect x="80" y="60" width="340" height="200" rx="4" fill="#b8d4e8"/>
      {/* Window frames */}
      <rect x="80" y="60" width="4" height="200" fill="#d8cfc0"/>
      <rect x="416" y="60" width="4" height="200" fill="#d8cfc0"/>
      <line x1="250" y1="60" x2="250" y2="260" stroke="#d8cfc0" strokeWidth="4"/>
      <line x1="80" y1="160" x2="420" y2="160" stroke="#d8cfc0" strokeWidth="3"/>
      {/* Sky in windows */}
      <rect x="84" y="64" width="162" height="92" fill="#a8c8e0"/>
      <rect x="254" y="64" width="160" height="92" fill="#a8c8e0"/>
      {/* Clouds */}
      <ellipse cx="130" cy="90" rx="30" ry="16" fill="white" opacity="0.8"/>
      <ellipse cx="155" cy="84" rx="22" ry="14" fill="white" opacity="0.8"/>
      <ellipse cx="330" cy="95" rx="28" ry="14" fill="white" opacity="0.8"/>
      {/* Trees in window */}
      <rect x="84" y="164" width="162" height="92" fill="#8aaa78"/>
      <rect x="254" y="164" width="160" height="92" fill="#8aaa78"/>
      {/* Window bottom sill */}
      <rect x="76" y="258" width="348" height="10" rx="2" fill="#d4cabb"/>
      {/* Left wall */}
      <rect x="0" y="60" width="80" height="320" fill="#ddd4c4"/>
      {/* Right wall */}
      <rect x="420" y="60" width="80" height="320" fill="#ddd4c4"/>
      {/* Floor */}
      <rect x="0" y="268" width="500" height="112" fill="#c8b890"/>
      {/* Floor lines */}
      {[0,1,2,3].map(i => (
        <line key={i} x1="0" y1={290 + i * 26} x2="500" y2={290 + i * 26} stroke="#b8a880" strokeWidth="1" opacity="0.5"/>
      ))}
      {/* Lamp left */}
      <rect x="52" y="200" width="6" height="80" fill="#a09070"/>
      <ellipse cx="55" cy="200" rx="24" ry="16" fill="#f0d890" stroke="#c8b060" strokeWidth="2"/>
      {/* Lamp base */}
      <ellipse cx="55" cy="280" rx="16" ry="6" fill="#a09070"/>
      {/* Teal/blue vase */}
      <ellipse cx="200" cy="276" rx="12" ry="6" fill="#5a8a7a"/>
      <rect x="188" y="220" width="24" height="56" rx="8" fill="#5a8a7a"/>
      <ellipse cx="200" cy="220" rx="12" ry="6" fill="#6a9a8a"/>
      {/* Left armchair */}
      <rect x="20" y="290" width="150" height="90" rx="10" fill="#7a6848"/>
      <rect x="20" y="290" width="150" height="38" rx="10" fill="#8a7858"/>
      <rect x="14" y="300" width="22" height="80" rx="8" fill="#7a6848"/>
      <rect x="158" y="300" width="22" height="80" rx="8" fill="#7a6848"/>
      {/* Teal cushion on left chair */}
      <rect x="40" y="294" width="60" height="34" rx="6" fill="#3a8090"/>
      {/* Center armchair */}
      <rect x="190" y="295" width="140" height="85" rx="10" fill="#7a6848"/>
      <rect x="190" y="295" width="140" height="36" rx="10" fill="#8a7858"/>
      <rect x="184" y="304" width="20" height="76" rx="7" fill="#7a6848"/>
      <rect x="326" y="304" width="20" height="76" rx="7" fill="#7a6848"/>
      {/* Teal cushion on center chair */}
      <rect x="208" y="298" width="55" height="32" rx="6" fill="#3a8090"/>
      {/* Side table between chairs */}
      <rect x="158" y="330" width="36" height="24" rx="4" fill="#5a4830"/>
      <ellipse cx="176" cy="330" rx="18" ry="6" fill="#6a5840"/>
      {/* Right fireplace area (distant) */}
      <rect x="370" y="265" width="130" height="115" fill="#c8c0b0"/>
      <rect x="390" y="275" width="90" height="70" rx="4" fill="#302820"/>
      {/* Fire */}
      <ellipse cx="435" cy="340" rx="25" ry="8" fill="#e87020" opacity="0.8"/>
      <ellipse cx="435" cy="328" rx="16" ry="14" fill="#f09030" opacity="0.9"/>
      <ellipse cx="435" cy="322" rx="10" ry="10" fill="#f8c040" opacity="0.8"/>
      {/* Plant right */}
      <rect x="452" y="310" width="14" height="40" rx="3" fill="#8B6914"/>
      <ellipse cx="459" cy="305" rx="20" ry="16" fill="#2d6a4f"/>
      <ellipse cx="448" cy="300" rx="13" ry="10" fill="#40916c"/>
    </svg>
  );
}

export default function OurValues() {
  return (
    <section className="bg-white py-10 px-4 max-w-lg mx-auto">

      {/* ── Notched image container ── */}
      <div className="relative mx-2 mb-10">

        {/* Dashed outer border with notch cutouts using clip-path */}
        <div
          className="absolute inset-0 border-2 border-dashed border-[#e8472d] opacity-40 rounded-2xl"
          style={{
            clipPath: `polygon(
              0% 8%,
              6% 8%, 6% 0%,
              38% 0%, 38% 8%,
              62% 8%, 62% 0%,
              94% 0%, 94% 8%,
              100% 8%,
              100% 85%,
              94% 85%, 94% 92%,
              62% 92%, 62% 85%,
              38% 85%, 38% 92%,
              6% 92%, 6% 85%,
              0% 85%
            )`
          }}
        />

        {/* Main image with notched clip-path */}
        <div
          className="overflow-hidden rounded-2xl"
          style={{
            clipPath: `polygon(
              0% 8%,
              6% 8%, 6% 0%,
              38% 0%, 38% 8%,
              62% 8%, 62% 0%,
              94% 0%, 94% 8%,
              100% 8%,
              100% 85%,
              94% 85%, 94% 92%,
              62% 92%, 62% 85%,
              38% 85%, 38% 92%,
              6% 92%, 6% 85%,
              0% 85%
            )`,
            height: 340
          }}
        >
          <LivingRoomSVG />
        </div>

        {/* ── Floating badge: 100% Customer Focused (top right) ── */}
        <div className="absolute top-12 right-0 translate-x-2 bg-[#fce8f0] rounded-xl px-3 py-2 flex items-center gap-2 shadow-sm">
          <span className="text-[#5046e5] text-[20px] font-extrabold leading-none">100%</span>
          <div className="leading-tight">
            <p className="text-[11px] font-bold text-[#5046e5]">Customer</p>
            <p className="text-[11px] font-bold text-[#5046e5]">Focused</p>
          </div>
        </div>

        {/* ── Floating badge: 10 Years of Experiences (left middle) ── */}
        <div className="absolute top-1/3 left-0 -translate-x-2 bg-[#e0f0f8] rounded-xl px-3 py-2 flex items-center gap-2 shadow-sm">
          <span className="text-[#e8472d] text-[26px] font-extrabold leading-none">10</span>
          <div className="leading-tight">
            <p className="text-[11px] font-bold text-[#e8472d]">Years of</p>
            <p className="text-[11px] font-bold text-[#e8472d]">Experiences</p>
          </div>
        </div>

        {/* ── Floating badge: 40 Location Served (right lower) ── */}
        <div className="absolute bottom-24 right-0 translate-x-2 bg-[#f5f0e8] rounded-xl px-3 py-2 flex items-center gap-2 shadow-sm">
          <span className="text-gray-900 text-[26px] font-extrabold leading-none">40</span>
          <div className="leading-tight">
            <p className="text-[11px] font-bold text-gray-700">Location</p>
            <p className="text-[11px] font-bold text-gray-700">Served</p>
          </div>
        </div>

        {/* ── Floating badge: 10k Projects Integrated (bottom center) ── */}
        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-[#eae8fc] rounded-xl px-4 py-2.5 flex items-center gap-2 shadow-sm whitespace-nowrap">
          <span className="text-[#5046e5] text-[22px] font-extrabold leading-none">10k</span>
          <div className="leading-tight">
            <p className="text-[11px] font-bold text-[#5046e5]">Projects</p>
            <p className="text-[11px] font-bold text-[#5046e5]">Integrated</p>
          </div>
        </div>

      </div>

      {/* ── Text content ── */}
      <div className="text-center px-2 mt-8">
        <p className="text-[#5046e5] text-[11px] font-bold tracking-[0.18em] uppercase mb-3">
          OUR VALUES
        </p>
        <h2 className="text-[26px] md:text-[28px] font-extrabold text-gray-900 leading-snug mb-4">
          We Help Customers Providing Living Supports
        </h2>
        <p className="text-[14px] text-gray-400 leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        </p>
      </div>

    </section>
  );
}
