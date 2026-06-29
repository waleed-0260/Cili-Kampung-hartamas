"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { MobileNav } from "@/components/layout/MobileNav";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { LeafAccent } from "@/components/shared/LeafAccent";

const timeline = [
  {
    year: "The Beginning",
    title: "Born in Langkawi",
    body: "Cili Kampung started with a single kitchen in Langkawi — where the founder's mother cooked every dish from memory. No recipes. No shortcuts. Just belacan toasted over an open flame and sambal pounded in a lesung batu worn smooth by decades of use.",
  },
  {
    year: "The Journey",
    title: "Bringing It to the City",
    body: "When the family moved to Kuala Lumpur, they brought the kitchen with them — the same techniques, the same insistence on homemade chili paste, the same refusal to compromise on freshness. The first city outlet opened in Hartamas, and regulars arrived before the signboard was even up.",
  },
  {
    year: "Growing Family",
    title: "A Nation of Outlets",
    body: "Today Cili Kampung spans eight outlets from Langkawi to Penang to Putrajaya. Each one runs the same way: fresh ingredients from local farmers, sambal made from scratch every morning, and a dining room that feels like someone's home.",
  },
  {
    year: "The Promise",
    title: "Never Rushed, Never Compromised",
    body: "Every expansion came with the same condition: maintain the kampung way. No central commissary kitchen. No mass-produced pastes. Every outlet makes its own from scratch. That is not the efficient way — but it is the right way.",
  },
];

const values = [
  { stat: "8", label: "Outlets across Malaysia" },
  { stat: "100%", label: "Homemade chili pastes" },
  { stat: "JAKIM", label: "Certified halal" },
  { stat: "Local", label: "Malaysian farmers only" },
];

export default function OurStoryPage() {
  return (
    <>
      <Navbar />
      <MobileNav />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-ck-charcoal overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a3519] via-ck-charcoal to-ck-charcoal" />
          <LeafAccent className="-top-10 -right-10" size={320} color="#3D6B35" opacity={0.15} />
          <LeafAccent className="bottom-0 left-0" size={200} color="#7BA968" opacity={0.1} />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-ck-leaf-light text-xs font-semibold tracking-[0.2em] uppercase mb-5"
            >
              Our Heritage
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-heading text-4xl md:text-6xl font-semibold text-ck-cream leading-tight mb-6"
            >
              A Story of Kitchens,
              <br />
              <span className="text-ck-leaf-light">Memory, and Sambal</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-ck-cream/65 text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
            >
              Every recipe at Cili Kampung is a living memory — passed from one kitchen
              to the next, never written down, never forgotten.
            </motion.p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-ck-cream to-transparent" />
        </section>

        {/* Stats bar */}
        <section className="bg-ck-cream border-b border-ck-charcoal/8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-ck-charcoal/8">
              {values.map((v, i) => (
                <ScrollReveal key={v.label} delay={i * 0.08}>
                  <div className="py-8 px-6 text-center">
                    <p className="font-heading text-3xl font-semibold text-ck-leaf mb-1">{v.stat}</p>
                    <p className="text-xs text-ck-charcoal/50 tracking-wide">{v.label}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-20 md:py-28 bg-ck-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
              <ScrollReveal>
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-br from-ck-leaf/20 to-ck-charcoal/10">
                  <Image
                    src="/images/story-founder.jpg"
                    alt="Cili Kampung founder in the original Langkawi kitchen"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="flex flex-col gap-6">
                  <SectionHeading
                    label="The Philosophy"
                    title="Food as Living Memory"
                  />
                  <div className="flex flex-col gap-4 text-sm md:text-base text-ck-charcoal/65 leading-relaxed">
                    <p>
                      In Malaysia's kampung kitchens, recipes were never written down.
                      They lived in the hands of the cook — in the way she held the pestle,
                      the moment she knew the sambal was ready by its smell, the exact
                      amount of belacan she measured by feel alone.
                    </p>
                    <p>
                      At Cili Kampung, we inherited that tradition. Our chili pastes are
                      made fresh every morning. Our santan is pressed the same day. Our
                      lesung batu still sees real use — not as a prop, but as the tool
                      that produces a texture and flavour no machine can replicate.
                    </p>
                    <p>
                      This is not nostalgia. This is simply the best way to cook.
                    </p>
                  </div>
                  <blockquote className="border-l-2 border-ck-gold pl-4 py-1">
                    <p className="text-ck-charcoal/80 italic text-sm leading-relaxed">
                      "The moment we compromise on the sambal, we stop being Cili Kampung."
                    </p>
                  </blockquote>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <SectionHeading
                label="Our Journey"
                title="From Langkawi to the Nation"
                centered
                className="mb-16"
              />
            </ScrollReveal>
            <div className="relative flex flex-col gap-0">
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-ck-leaf/15" />
              {timeline.map((item, i) => (
                <ScrollReveal key={item.year} delay={i * 0.1}>
                  <div className={`relative flex gap-8 md:gap-0 pb-14 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className="absolute left-4 md:left-1/2 top-1 -translate-x-1/2 size-4 rounded-full border-2 border-ck-leaf bg-ck-cream z-10" />
                    <div className={`ml-14 md:ml-0 md:w-5/12 ${i % 2 === 0 ? "md:pr-14" : "md:pl-14"}`}>
                      <span className="text-xs font-semibold text-ck-leaf tracking-widest uppercase">
                        {item.year}
                      </span>
                      <h3 className="font-heading text-xl font-semibold text-ck-charcoal mt-1 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-sm text-ck-charcoal/60 leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Sourcing */}
        <section className="py-20 md:py-28 bg-ck-charcoal relative overflow-hidden">
          <LeafAccent className="-bottom-10 -right-10" size={300} color="#7BA968" opacity={0.1} />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <ScrollReveal>
                <SectionHeading
                  label="Locally Sourced"
                  title="From Malaysian Farmers, to Your Table"
                  subtitle="We source fresh herbs, vegetables, and produce directly from local Malaysian farmers — building relationships that sustain communities and guarantee freshness."
                  light
                />
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {["Fresh Herbs Weekly", "Local Coconuts", "Malaysian Belacan", "Kampung Eggs"].map((item) => (
                    <div key={item} className="flex items-center gap-2.5 p-4 rounded-2xl bg-ck-cream/5 border border-ck-cream/10">
                      <div className="size-1.5 rounded-full bg-ck-leaf-light shrink-0" />
                      <span className="text-sm text-ck-cream/75">{item}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-ck-leaf/30 to-ck-charcoal/50">
                  <Image
                    src="/images/story-local-produce.jpg"
                    alt="Fresh local herbs and produce from Malaysian farmers"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
