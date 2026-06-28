"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { LocationCard } from "@/components/sections/LocationCard";
import { locations } from "@/lib/data";

export function LocationsPreviewSection() {
  // Show Hartamas + 3 others as preview
  const preview = [
    locations.find((l) => l.isHartamas)!,
    ...locations.filter((l) => !l.isHartamas).slice(0, 3),
  ];

  return (
    <section className="py-20 md:py-28 bg-ck-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <ScrollReveal>
            <SectionHeading
              label="Our Locations"
              title="Find Us Across Malaysia"
              subtitle="From Langkawi to KL to Penang — eight outlets, one kitchen soul."
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="shrink-0">
            <Link
              href="/locations"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-ck-leaf hover:text-ck-leaf/80 transition-colors"
            >
              All Locations
              <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {preview.map((location, i) => (
            <ScrollReveal key={location.id} delay={i * 0.08}>
              <LocationCard location={location} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
