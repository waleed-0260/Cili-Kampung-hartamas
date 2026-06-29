"use client";

import { motion } from "framer-motion";
import { ShoppingBag, MapPin, Phone, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { MobileNav } from "@/components/layout/MobileNav";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { locations } from "@/lib/data";

const platforms = [
  { name: "GrabFood", color: "#00b14f", description: "Available on GrabFood — search \"Cili Kampung\" and select your nearest outlet." },
  { name: "foodpanda", color: "#d70f64", description: "Order via foodpanda for delivery to your door from all Klang Valley outlets." },
  { name: "Shopee Food", color: "#ee4d2d", description: "Find us on Shopee Food for fast delivery across KL and Selangor." },
];

export default function TakeawayPage() {
  return (
    <>
      <Navbar />
      <MobileNav />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-ck-charcoal overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a3519] via-ck-charcoal to-ck-charcoal" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex items-center justify-center mb-6"
            >
              <div className="p-5 rounded-full bg-ck-cream/10">
                <ShoppingBag className="size-10 text-ck-cream" />
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="font-heading text-4xl md:text-5xl font-semibold text-ck-cream leading-tight mb-5"
            >
              Kampung Flavours,
              <br />
              <span className="text-ck-leaf-light">Delivered to Your Door</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-ck-cream/65 text-base md:text-lg max-w-xl mx-auto leading-relaxed"
            >
              Order our sambal, rice dishes, and signature favourites for delivery or
              self-collection from your nearest Cili Kampung outlet.
            </motion.p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-ck-cream to-transparent" />
        </section>

        {/* Delivery platforms */}
        <section className="py-20 md:py-28 bg-ck-cream">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <SectionHeading
                label="Order Online"
                title="Available on Delivery Platforms"
                subtitle="Find us on Malaysia's leading food delivery apps. Search \"Cili Kampung\" and select your nearest outlet."
                centered
                className="mb-12"
              />
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
              {platforms.map((p, i) => (
                <ScrollReveal key={p.name} delay={i * 0.1}>
                  <div className="flex flex-col gap-4 p-7 rounded-3xl bg-white border border-ck-charcoal/6 hover:shadow-md transition-all">
                    <div
                      className="w-12 h-3 rounded-full"
                      style={{ backgroundColor: p.color }}
                    />
                    <h3 className="font-heading text-lg font-semibold text-ck-charcoal">
                      {p.name}
                    </h3>
                    <p className="text-sm text-ck-charcoal/60 leading-relaxed">
                      {p.description}
                    </p>
                    <a
                      href="#"
                      className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-ck-leaf hover:text-ck-leaf/80 transition-colors"
                    >
                      Open App <ExternalLink className="size-3.5" />
                    </a>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Self-collection */}
            <ScrollReveal>
              <div className="p-8 rounded-3xl bg-ck-leaf/8 border border-ck-leaf/20">
                <p className="text-xs font-semibold tracking-widest uppercase text-ck-leaf mb-3">
                  Self-Collection Available
                </p>
                <h3 className="font-heading text-2xl font-semibold text-ck-charcoal mb-2">
                  Order Ahead, Pick Up Fresh
                </h3>
                <p className="text-sm text-ck-charcoal/60 leading-relaxed mb-4 max-w-xl">
                  Call your nearest outlet to place a takeaway order and collect it
                  fresh — no delivery wait, no compromise on temperature. Ideal for
                  large family orders.
                </p>
                <a
                  href="tel:+60320111234"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ck-leaf text-ck-cream text-sm font-semibold hover:bg-ck-leaf/90 transition-colors"
                >
                  <Phone className="size-3.5" />
                  Call Hartamas
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Outlet list */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <SectionHeading
                label="Collection Points"
                title="All Outlets"
                centered
                className="mb-10"
              />
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {locations.map((loc, i) => (
                <ScrollReveal key={loc.id} delay={i * 0.05}>
                  <div className="flex flex-col gap-3 p-5 rounded-2xl bg-ck-cream border border-ck-charcoal/6 hover:border-ck-leaf/25 transition-all">
                    <div>
                      <p className="font-semibold text-sm text-ck-charcoal">{loc.name}</p>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-ck-charcoal/55">
                      <MapPin className="size-3 mt-0.5 shrink-0 text-ck-leaf" />
                      {loc.address}
                    </div>
                    <a
                      href={`tel:${loc.phone}`}
                      className="flex items-center gap-2 text-xs text-ck-charcoal/55 hover:text-ck-leaf transition-colors"
                    >
                      <Phone className="size-3 text-ck-leaf" />
                      {loc.phone}
                    </a>
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
