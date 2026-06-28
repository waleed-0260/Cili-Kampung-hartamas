import Link from "next/link";
import { Leaf } from "lucide-react";

const footerLinks = [
  {
    heading: "Visit",
    links: [
      { label: "Our Story", href: "/our-story" },
      { label: "Menu", href: "/menu" },
      { label: "Locations", href: "/locations" },
      { label: "Halal Certification", href: "/halal" },
    ],
  },
  {
    heading: "Experience",
    links: [
      { label: "Reserve a Table", href: "/reservation" },
      { label: "Private Events", href: "/private-events" },
      { label: "Takeaway & Delivery", href: "/takeaway" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-ck-charcoal text-ck-cream">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="size-5 text-ck-leaf-light" />
              <span className="font-heading text-xl font-semibold">
                Cili Kampung
              </span>
            </div>
            <p className="text-xs text-ck-leaf-light tracking-[0.18em] uppercase mb-4">
              Kampung Spirit · Modern Table
            </p>
            <p className="text-sm text-ck-cream/60 leading-relaxed max-w-xs">
              Authentic Malay cuisine rooted in Langkawi kitchen traditions — homemade
              chili pastes, lesung batu techniques, and recipes passed through
              generations.
            </p>

            {/* Social */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                aria-label="Instagram"
                className="text-ck-cream/40 hover:text-ck-leaf-light transition-colors"
              >
                <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-ck-cream/40 hover:text-ck-leaf-light transition-colors"
              >
                <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              <a
                href="#"
                aria-label="TikTok"
                aria-hidden="false"
                className="text-ck-cream/40 hover:text-ck-leaf-light transition-colors"
              >
                {/* TikTok icon */}
                <svg
                  className="size-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="text-ck-cream/40 hover:text-ck-leaf-light transition-colors"
              >
                <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <h3 className="text-xs font-semibold tracking-[0.18em] uppercase text-ck-cream/40 mb-4">
                {col.heading}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-ck-cream/65 hover:text-ck-leaf-light transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Address & halal */}
        <div className="mt-12 pt-8 border-t border-ck-cream/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <p className="text-xs text-ck-cream/40 mb-1 tracking-wider uppercase">
              Hartamas HQ
            </p>
            <p className="text-sm text-ck-cream/60">
              Sri Hartamas, 50480 Kuala Lumpur, Malaysia
            </p>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-ck-gold/30 bg-ck-gold/5">
            <span className="size-2 rounded-full bg-ck-gold" />
            <span className="text-xs font-medium text-ck-gold tracking-wide">
              JAKIM Halal Certified
            </span>
          </div>
        </div>

        {/* Copyright */}
        <p className="mt-6 text-xs text-ck-cream/25 text-center md:text-left">
          © {new Date().getFullYear()} Cili Kampung Sdn Bhd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
