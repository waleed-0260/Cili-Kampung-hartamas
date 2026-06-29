"use client";

import { motion } from "framer-motion";
import { CalendarDays, MessageCircle } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { MobileNav } from "@/components/layout/MobileNav";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { ReservationForm } from "@/components/sections/ReservationForm";
import { LeafAccent } from "@/components/shared/LeafAccent";

export default function ReservationPage() {
  return (
    <>
      <Navbar />
      <MobileNav />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-14 md:pt-40 md:pb-20 bg-ck-charcoal overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a3519] via-ck-charcoal to-ck-charcoal" />
          <LeafAccent className="-top-8 -right-8" size={280} color="#3D6B35" opacity={0.15} />
          <LeafAccent className="bottom-0 left-0" size={200} color="#7BA968" opacity={0.1} />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex items-center justify-center mb-6"
            >
              <div className="p-4 rounded-full bg-ck-cream/10">
                <CalendarDays className="size-9 text-ck-cream" />
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="font-heading text-4xl md:text-5xl font-semibold text-ck-cream leading-tight mb-5"
            >
              Reserve a Table
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-ck-cream/65 text-base md:text-lg max-w-xl mx-auto leading-relaxed"
            >
              Every moment worth sharing deserves a table worth returning to. Book yours
              at any of our eight Cili Kampung outlets.
            </motion.p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-ck-cream to-transparent" />
        </section>

        {/* Form section */}
        <section className="py-16 md:py-24 bg-ck-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
              {/* Side info */}
              <ScrollReveal className="lg:col-span-2">
                <div className="flex flex-col gap-8">
                  <div>
                    <p className="text-xs font-semibold text-ck-leaf tracking-widest uppercase mb-3">
                      Before You Book
                    </p>
                    <div className="flex flex-col gap-4">
                      {[
                        { q: "Walk-ins welcome?", a: "Yes — walk-ins are always welcome. Reservations are recommended for groups of 5 or more and on weekends." },
                        { q: "How far in advance?", a: "You can book up to 30 days in advance. For private events of 20+, we recommend at least 1 week notice." },
                        { q: "Can I change my booking?", a: "Yes. Call or WhatsApp us at least 2 hours before your reservation time to reschedule." },
                      ].map((item) => (
                        <div key={item.q} className="p-4 rounded-2xl bg-white border border-ck-charcoal/6">
                          <p className="text-sm font-semibold text-ck-charcoal mb-1">{item.q}</p>
                          <p className="text-xs text-ck-charcoal/55 leading-relaxed">{item.a}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* WhatsApp CTA */}
                  <div className="p-5 rounded-2xl bg-ck-charcoal text-ck-cream flex flex-col gap-3">
                    <MessageCircle className="size-5 text-ck-leaf-light" />
                    <div>
                      <p className="font-semibold text-sm mb-1">Prefer to chat?</p>
                      <p className="text-xs text-ck-cream/60 leading-relaxed">
                        Send us a WhatsApp for special requests, large groups, or dietary
                        requirements.
                      </p>
                    </div>
                    <a
                      href="https://wa.me/60320111234"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-ck-leaf text-ck-cream text-xs font-semibold hover:bg-ck-leaf/90 transition-colors w-fit"
                    >
                      <MessageCircle className="size-3.5" />
                      WhatsApp Hartamas
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              {/* Form */}
              <ScrollReveal delay={0.15} className="lg:col-span-3">
                <ReservationForm />
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Opening hours */}
        <section className="py-12 bg-white border-t border-ck-charcoal/6">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <p className="text-xs font-semibold tracking-widest uppercase text-ck-charcoal/40 mb-5 text-center">
                Opening Hours — Hartamas
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { day: "Monday – Friday", hours: "11:00 AM – 10:30 PM" },
                  { day: "Saturday", hours: "10:30 AM – 11:00 PM" },
                  { day: "Sunday & PH", hours: "10:00 AM – 10:30 PM" },
                ].map((item) => (
                  <div key={item.day} className="text-center p-4 rounded-xl bg-ck-cream border border-ck-charcoal/6">
                    <p className="text-xs font-medium text-ck-charcoal/50 mb-1">{item.day}</p>
                    <p className="text-sm font-semibold text-ck-charcoal">{item.hours}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
