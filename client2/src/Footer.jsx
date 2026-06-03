// Footer.jsx

import { useState } from "react";

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
    <circle cx="17.5" cy="6.5" r="1.5" />
  </svg>
);

const BuildingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
  </svg>
);

const SectionHeading = ({ title }) => (
  <div className="mb-5">
    <h3 className="text-white text-base md:text-lg font-bold tracking-widest uppercase mb-3">
      {title}
    </h3>
    <div className="w-10 h-[3px] bg-[#e8472d]" />
  </div>
);

const socialLinks = [
  { icon: <FacebookIcon />, label: "Facebook" },
  { icon: <TwitterIcon />, label: "Twitter" },
  { icon: <LinkedInIcon />, label: "LinkedIn" },
  { icon: <InstagramIcon />, label: "Instagram" },
];

const properties = [
  { name: "Amazing Furnished Apartment's", price: "$15000.00" },
  { name: "Amazing Furnished Apartment's", price: "$15000.00" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white w-full font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-10 md:pt-14 pb-6">

        {/* ABOUT US */}
        <div className="mb-10">
          <SectionHeading title="ABOUT US" />

          <p className="text-[15px] md:text-[17px] text-[#b0b0c0] leading-relaxed mb-6 max-w-3xl">
            UPSIde is committed to delivering a high level of expertise, customer service, and
            attention to detail to the marketing and sales of luxury real estate, and rental
            properties.
          </p>

          <div className="flex gap-3">
            {socialLinks.map(({ icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-10 h-10 rounded-full bg-[#2a2a40] flex items-center justify-center text-[#b0b0c0] hover:text-white hover:bg-[#3a3a55] transition-colors duration-200"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* CONTACT */}
        <div className="mb-10">
          <SectionHeading title="CONTACT" />

          <div className="flex flex-col gap-3">
            {[
              "10845 Griffith Peak Dr, Las Vegas, NV 89135",
              "+1800-555-0000",
              "+1800-555-0000",
              "office@realestate.com",
            ].map((item) => (
              <p
                key={item}
                className="text-[15px] md:text-[17px] text-[#b0b0c0]"
              >
                {item}
              </p>
            ))}
          </div>
        </div>

        {/* POPULAR PROPERTIES */}
        <div className="mb-8">
          <SectionHeading title="POPULAR PROPERTIES" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {properties.map((p, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-16 h-14 flex-shrink-0 bg-[#2a2a40] rounded flex items-center justify-center text-[#666680]">
                  <img src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200" className="w-full h-full object-cover"/>
                </div>

                <div>
                  <p className="text-[14px] md:text-[16px] text-[#c0c0d0] leading-snug mb-1">
                    {p.name}
                  </p>

                  <p className="text-[14px] md:text-[16px] font-semibold text-white">
                    {p.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 px-6 md:px-10 lg:px-16 py-5 text-center">
        <p className="text-[13px] md:text-[15px] text-[#808090]">
          Copyright UPSide Real-Estate. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}