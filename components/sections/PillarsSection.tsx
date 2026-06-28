"use client";

import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PillarCard } from "@/components/sections/PillarCard";
import { pillars } from "@/lib/data";

export function PillarsSection() {
  return (
    <section className="py-20 md:py-28 bg-ck-cream relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(61,107,53,0.06),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            label="What We Stand For"
            title="The Cili Kampung Promise"
            subtitle="Four pillars that guide every dish we cook, every guest we welcome, and every ingredient we source."
            centered
            className="mb-14"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.id} pillar={pillar} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
