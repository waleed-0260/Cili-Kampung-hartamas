"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function KampungTraditionSection() {
  return (
    <section className="py-20 md:py-28 bg-ck-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <ScrollReveal delay={0.1}>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-ck-leaf/20 to-ck-charcoal/10">
              <Image
                src="/images/story-kampung-kitchen.jpg"
                alt="Traditional Malay kitchen with stone mortar and spices"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Accent badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-ck-charcoal/80 backdrop-blur-sm rounded-2xl px-5 py-4">
                  <p className="text-ck-cream text-sm font-medium leading-relaxed">
                    "Every recipe is a living memory — passed from one kitchen
                    to the next, never written, never forgotten."
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Text */}
          <ScrollReveal delay={0.25}>
            <div className="flex flex-col gap-6">
              <SectionHeading
                label="Our Heritage"
                title="Rooted in Kampung Tradition"
                subtitle="Born from a deep love of Malaysia's culinary heritage, Cili Kampung carries forward recipes drawn from smoky Langkawi kitchens — slow-cooked with patience, pounded in the lesung batu, and seasoned with time."
              />
              <div className="flex flex-col gap-4 text-sm text-ck-charcoal/65 leading-relaxed">
                <p>
                  Our chili pastes are homemade from scratch every morning —
                  never from a jar, never rushed. Belacan is toasted over an
                  open flame. Santan is pressed fresh from the coconut. These
                  are not just techniques; they are the living memory of our
                  grandmothers' kitchens.
                </p>
                <p>
                  We source our herbs and produce directly from local Malaysian
                  farmers, ensuring every dish on the table carries the honest
                  flavour of the land it came from.
                </p>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <div className="h-px flex-1 bg-ck-gold/30" />
                <span className="text-ck-gold text-xs font-semibold tracking-widest uppercase">
                  Never Rushed · Never Compromised
                </span>
                <div className="h-px flex-1 bg-ck-gold/30" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
