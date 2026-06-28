"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { XIcon, Leaf } from "lucide-react";
import { useUIStore } from "@/store/ui-store";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/our-story", label: "Our Story" },
  { href: "/menu", label: "Menu" },
  { href: "/locations", label: "Locations" },
  { href: "/halal", label: "Halal" },
  { href: "/private-events", label: "Private Events" },
  { href: "/takeaway", label: "Takeaway" },
];

export function MobileNav() {
  const pathname = usePathname();
  const { isMobileNavOpen, setMobileNavOpen } = useUIStore();

  return (
    <Sheet open={isMobileNavOpen} onOpenChange={setMobileNavOpen}>
      <SheetContent
        side="right"
        showCloseButton={false}
        className="w-[300px] bg-ck-charcoal border-ck-charcoal p-0"
      >
        <SheetHeader className="px-6 pt-6 pb-4 border-b border-ck-cream/10">
          <div className="flex items-center justify-between">
            <SheetTitle className="font-heading text-ck-cream text-lg">
              Cili Kampung
            </SheetTitle>
            <button
              onClick={() => setMobileNavOpen(false)}
              className="p-1.5 rounded-lg text-ck-cream/60 hover:text-ck-cream hover:bg-ck-cream/10 transition-colors"
              aria-label="Close menu"
            >
              <XIcon className="size-4" />
            </button>
          </div>
          <p className="text-xs text-ck-leaf-light tracking-widest uppercase">
            Hartamas, KL
          </p>
        </SheetHeader>

        <nav className="flex flex-col px-6 py-4 gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileNavOpen(false)}
              className={`px-3 py-3 rounded-xl text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "bg-ck-leaf/20 text-ck-leaf-light"
                  : "text-ck-cream/75 hover:text-ck-cream hover:bg-ck-cream/8"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="px-6 pb-8 mt-4">
          <Link
            href="/reservation"
            onClick={() => setMobileNavOpen(false)}
            className="flex items-center justify-center w-full py-3 rounded-full bg-ck-leaf text-ck-cream text-sm font-semibold hover:bg-ck-leaf/90 transition-colors"
          >
            Reserve a Table
          </Link>
          <div className="flex items-center gap-2 mt-8 text-ck-cream/30">
            <Leaf className="size-3" />
            <span className="text-xs tracking-wider">Fully JAKIM Halal Certified</span>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
