"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { MobileNav } from "@/components/layout/MobileNav";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { LocationCard } from "@/components/sections/LocationCard";
import { locations } from "@/lib/data";
import type { LocationRegion } from "@/types";

const regions: { value: LocationRegion | "all"; label: string }[] = [
  { value: "all", label: "All Outlets" },
  { value: "klang-valley", label: "Klang Valley" },
  { value: "east-coast", label: "East Coast" },
  { value: "northern", label: "Northern" },
  { value: "langkawi", label: "Langkawi" },
];

export default function LocationsPage() {
  const [activeRegion, setActiveRegion] = useState<LocationRegion | "all">("all");

  const filtered = activeRegion === "all"
    ? locations
    : locations.filter((l) => l.region === activeRegion);

  return (
    <>
      <Navbar />
      <MobileNav />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-14 md:pt-40 md:pb-16 bg-ck-cream">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-ck-leaf text-xs font-semibold tracking-[0.2em] uppercase mb-4"
            >
              Eight Outlets
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl font-semibold text-ck-charcoal leading-tight mb-4"
            >
              Find Cili Kampung
              <br />Near You
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-ck-charcoal/60 text-base leading-relaxed max-w-xl mx-auto"
            >
              From our Langkawi roots to Klang Valley, East Coast, and beyond — eight
              locations, one kampung soul.
            </motion.p>
          </div>
        </section>

        {/* Filter tabs */}
        <div className="bg-ck-cream border-b border-ck-charcoal/8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-none">
              {regions.map((r) => (
                <button
                  key={r.value}
                  onClick={() => setActiveRegion(r.value)}
                  className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeRegion === r.value
                      ? "bg-ck-leaf text-ck-cream"
                      : "text-ck-charcoal/60 hover:text-ck-charcoal hover:bg-ck-charcoal/6"
                  }`}
                >
                  {r.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Location cards */}
        <section className="py-14 md:py-20 bg-white min-h-[60vh]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRegion}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
              >
                {filtered.map((location, i) => (
                  <motion.div
                    key={location.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: i * 0.06 }}
                  >
                    <LocationCard location={location} />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-ck-cream border-t border-ck-charcoal/6">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <p className="text-ck-leaf text-xs font-semibold tracking-widest uppercase mb-3">
                Book a Table
              </p>
              <h2 className="font-heading text-3xl font-semibold text-ck-charcoal mb-4">
                Ready to Visit?
              </h2>
              <p className="text-ck-charcoal/60 text-sm leading-relaxed mb-7 max-w-md mx-auto">
                Reserve your table at any Cili Kampung outlet and let us take care of the
                rest — warm food, warm service, every time.
              </p>
              <a
                href="/reservation"
                className="inline-flex items-center px-7 py-3.5 rounded-full bg-ck-leaf text-ck-cream text-sm font-semibold hover:bg-ck-leaf/90 transition-colors"
              >
                Reserve a Table
              </a>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
