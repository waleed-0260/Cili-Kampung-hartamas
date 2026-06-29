"use client";

import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle2, Leaf } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { MobileNav } from "@/components/layout/MobileNav";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

const standards = [
  { title: "JAKIM Certified", description: "All Cili Kampung outlets hold valid JAKIM halal certification — Malaysia's most rigorous halal authority. Our certification is renewed regularly and displayed at every outlet." },
  { title: "Ingredient Integrity", description: "Every ingredient — from our belacan to our cooking oil to our condiments — is sourced from halal-certified suppliers. We do not compromise at any step of the supply chain." },
  { title: "Dedicated Preparation", description: "Our kitchens are fully halal-dedicated. No cross-contamination risk. All utensils, cookware, and preparation surfaces are maintained under halal guidelines." },
  { title: "Staff Training", description: "All kitchen and front-of-house staff receive regular halal awareness training. Proper slaughter, preparation, and handling protocols are strictly followed across every outlet." },
  { title: "No Alcohol, No Lard", description: "Our dishes contain no alcohol and no pork or pork-derived ingredients. Our sambal, gravies, and sauces are made entirely with halal-certified components." },
  { title: "Regular Audits", description: "We welcome and undergo regular audits by JAKIM representatives to ensure continuous compliance. Transparency is not a marketing position — it is our operating standard." },
];

const faqs = [
  { q: "Are all Cili Kampung outlets halal?", a: "Yes. All eight Cili Kampung outlets — from Hartamas to Langkawi to Penang — are JAKIM-certified halal. Certification certificates are displayed at each location." },
  { q: "Is the food prepared separately from non-halal items?", a: "Absolutely. Our kitchens are fully halal-dedicated. There are no non-halal ingredients on our premises." },
  { q: "Are your cooking oils and condiments halal?", a: "Yes. We source only halal-certified cooking oils, soy sauces, and all other condiments. Every ingredient passes through our halal supply chain verification." },
  { q: "What about your belacan and shrimp paste?", a: "Our belacan is sourced from JAKIM-certified halal producers. It is a core ingredient in our cooking and we take its sourcing very seriously." },
];

export default function HalalPage() {
  return (
    <>
      <Navbar />
      <MobileNav />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-ck-leaf overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-ck-leaf via-ck-leaf to-[#2a4a22]" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center mb-6"
            >
              <div className="p-5 rounded-full bg-ck-cream/15">
                <ShieldCheck className="size-10 text-ck-cream" />
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-heading text-4xl md:text-5xl font-semibold text-ck-cream leading-tight mb-5"
            >
              Fully Halal,
              <br />JAKIM Certified
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-ck-cream/75 text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
            >
              Our commitment to halal is not a certification box — it is part of who we
              are. Every ingredient, every kitchen, every outlet, every time.
            </motion.p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-ck-cream to-transparent" />
        </section>

        {/* Certification badge */}
        <section className="py-14 bg-ck-cream">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="flex flex-col sm:flex-row items-center gap-6 p-8 rounded-3xl border-2 border-ck-gold/40 bg-ck-gold/5 text-center sm:text-left">
                <div className="flex items-center justify-center size-20 rounded-2xl bg-ck-gold/15 shrink-0">
                  <ShieldCheck className="size-10 text-ck-gold" />
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-ck-gold mb-1">Official Certification</p>
                  <h2 className="font-heading text-2xl font-semibold text-ck-charcoal mb-2">JAKIM Halal Malaysia</h2>
                  <p className="text-sm text-ck-charcoal/60 leading-relaxed">
                    Jabatan Kemajuan Islam Malaysia (JAKIM) is Malaysia's premier halal
                    certification authority. Our certification covers all eight outlets
                    and is maintained with annual renewals and ongoing compliance audits.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Standards grid */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <SectionHeading
                label="Our Standards"
                title="What Halal Means to Us"
                subtitle="Six pillars that define how we approach halal — not as a minimum compliance bar, but as the foundation of every decision we make."
                centered
                className="mb-12"
              />
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {standards.map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 0.07}>
                  <div className="flex flex-col gap-4 p-6 rounded-2xl bg-ck-cream border border-ck-charcoal/6">
                    <CheckCircle2 className="size-6 text-ck-leaf" />
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-ck-charcoal mb-2">{item.title}</h3>
                      <p className="text-sm text-ck-charcoal/60 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 md:py-24 bg-ck-cream">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <SectionHeading label="Common Questions" title="Halal FAQs" centered className="mb-10" />
            </ScrollReveal>
            <div className="flex flex-col gap-4">
              {faqs.map((faq, i) => (
                <ScrollReveal key={faq.q} delay={i * 0.08}>
                  <div className="p-6 rounded-2xl bg-white border border-ck-charcoal/8">
                    <div className="flex items-start gap-3">
                      <Leaf className="size-4 text-ck-leaf mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-ck-charcoal mb-2">{faq.q}</p>
                        <p className="text-sm text-ck-charcoal/60 leading-relaxed">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
