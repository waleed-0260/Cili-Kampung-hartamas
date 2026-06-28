import Link from "next/link";
import { Leaf, Instagram, Facebook, Youtube } from "lucide-react";

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
                <Instagram className="size-5" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-ck-cream/40 hover:text-ck-leaf-light transition-colors"
              >
                <Facebook className="size-5" />
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
                <Youtube className="size-5" />
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
