"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

const highlights = [
  {
    label: "Homemade Chili Pastes",
    description: "Stone-pounded fresh every morning from whole dried chilies, lemongrass, and galangal.",
  },
  {
    label: "Fresh Local Herbs",
    description: "Ulam, pandan, kemangi — sourced weekly from kampung gardens and local farmers.",
  },
  {
    label: "Traditional Methods",
    description: "Lesung batu, open-flame toasting, and slow braising. The old ways produce the best flavours.",
  },
];

export function HeartOfVillageSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text — reversed on desktop */}
          <ScrollReveal delay={0.1} className="order-2 lg:order-1">
            <div className="flex flex-col gap-6">
              <SectionHeading
                label="Cooked with Heart"
                title="The Heart of the Village"
                subtitle="Our kitchen runs on tradition. Every dish starts not with a recipe card, but with a memory — of a mother stirring at dusk, of the warm smell of belacan in the morning air."
              />
              <div className="flex flex-col gap-5 pt-2">
                {highlights.map((item, i) => (
                  <ScrollReveal key={item.label} delay={0.15 + i * 0.1}>
                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-ck-cream/60">
                      <div className="size-2 rounded-full bg-ck-leaf mt-2 shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-ck-charcoal mb-1">
                          {item.label}
                        </p>
                        <p className="text-sm text-ck-charcoal/60 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Image */}
          <ScrollReveal delay={0.2} className="order-1 lg:order-2">
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-ck-gold/15 to-ck-leaf/10">
              <Image
                src="/images/story-ingredients.jpg"
                alt="Fresh local herbs, spices and belacan in a traditional Malay kitchen"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
