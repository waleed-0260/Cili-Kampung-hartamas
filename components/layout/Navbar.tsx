"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { useUIStore } from "@/store/ui-store";
import { useCartStore } from "@/store/cart-store";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/our-story", label: "Our Story" },
  { href: "/menu", label: "Menu" },
  { href: "/locations", label: "Locations" },
  { href: "/halal", label: "Halal" },
  { href: "/private-events", label: "Private Events" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { setMobileNavOpen } = useUIStore();
  const { setOpen: setCartOpen, totalItems } = useCartStore();
  const cartCount = totalItems();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const solid = !isHome || isScrolled;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        solid ? "bg-ck-cream/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="flex items-center gap-1.5">
              <span className={cn("font-heading text-xl font-semibold transition-colors", solid ? "text-ck-leaf" : "text-ck-cream")}>
                Cili Kampung
              </span>
              <span className={cn("hidden sm:inline text-xs font-medium tracking-widest uppercase transition-colors", solid ? "text-ck-charcoal/50" : "text-ck-cream/60")}>
                Hartamas
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-ck-leaf",
                  pathname === link.href ? "text-ck-leaf" : solid ? "text-ck-charcoal/75" : "text-ck-cream/85"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop right side */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Cart button */}
            <button
              onClick={() => setCartOpen(true)}
              className={cn(
                "relative p-2 rounded-lg transition-colors",
                solid ? "text-ck-charcoal/70 hover:bg-ck-charcoal/8 hover:text-ck-charcoal" : "text-ck-cream/80 hover:bg-ck-cream/10 hover:text-ck-cream"
              )}
              aria-label="Open cart"
            >
              <ShoppingBag className="size-5" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full bg-ck-chili text-ck-cream text-[10px] font-bold">
                  {cartCount}
                </span>
              )}
            </button>
            <Link
              href="/reservation"
              className="inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold bg-ck-leaf text-ck-cream hover:bg-ck-leaf/90 transition-colors"
            >
              Reserve a Table
            </Link>
          </div>

          {/* Mobile right side */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setCartOpen(true)}
              className={cn(
                "relative p-2 rounded-lg transition-colors",
                solid ? "text-ck-charcoal/70 hover:bg-ck-charcoal/8" : "text-ck-cream/80 hover:bg-ck-cream/10"
              )}
              aria-label="Open cart"
            >
              <ShoppingBag className="size-5" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full bg-ck-chili text-ck-cream text-[10px] font-bold">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileNavOpen(true)}
              className={cn(
                "p-2 rounded-lg transition-colors",
                solid ? "text-ck-charcoal hover:bg-ck-charcoal/8" : "text-ck-cream hover:bg-ck-cream/10"
              )}
              aria-label="Open menu"
            >
              <MenuIcon className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
