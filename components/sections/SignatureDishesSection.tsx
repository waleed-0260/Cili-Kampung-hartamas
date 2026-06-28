"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { DishCard } from "@/components/sections/DishCard";
import { signatureDishes } from "@/lib/data";

export function SignatureDishesSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <ScrollReveal>
            <SectionHeading
              label="Signature Dishes"
              title="The Dishes That Define Us"
              subtitle="Dishes that have become household names for regulars — made the way your grandmother would, every single time."
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="shrink-0">
            <Link
              href="/menu"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-ck-leaf hover:text-ck-leaf/80 transition-colors"
            >
              View Full Menu
              <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {signatureDishes.map((dish, i) => (
            <ScrollReveal key={dish.id} delay={i * 0.08}>
              <DishCard dish={dish} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
