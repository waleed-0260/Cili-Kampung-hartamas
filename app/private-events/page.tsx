"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, CalendarDays, Utensils, CheckCircle2, MessageCircle } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { MobileNav } from "@/components/layout/MobileNav";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { LeafAccent } from "@/components/shared/LeafAccent";

const occasions = [
  { icon: Users, label: "Family Gatherings", description: "Multigenerational feasts served in a warm, spacious dining room that feels like home." },
  { icon: CalendarDays, label: "Birthday Celebrations", description: "Let us curate a set menu and personalise the experience for your milestone moment." },
  { icon: Utensils, label: "Corporate Lunches", description: "Impress clients and colleagues with a spread of authentic Malaysian flavours." },
  { icon: Users, label: "Group Dinners", description: "Up to 100 pax across our private dining areas — coordinated by our events team." },
];

interface InquiryForm {
  name: string; phone: string; email: string; occasion: string;
  date: string; guestCount: string; outlet: string; message: string;
}
const initial: InquiryForm = { name: "", phone: "", email: "", occasion: "", date: "", guestCount: "", outlet: "", message: "" };

export default function PrivateEventsPage() {
  const [form, setForm] = useState<InquiryForm>(initial);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const inputClass = "w-full px-4 py-3 rounded-xl border border-ck-charcoal/15 bg-white text-sm text-ck-charcoal placeholder:text-ck-charcoal/35 focus:outline-none focus:border-ck-leaf focus:ring-2 focus:ring-ck-leaf/15 transition-all";
  const labelClass = "block text-xs font-semibold text-ck-charcoal/55 tracking-wide uppercase mb-1.5";

  return (
    <>
      <Navbar />
      <MobileNav />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-ck-charcoal overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a3519] via-ck-charcoal to-ck-charcoal" />
          <LeafAccent className="-top-8 -right-8" size={300} color="#3D6B35" opacity={0.15} />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-ck-leaf-light text-xs font-semibold tracking-[0.2em] uppercase mb-5">
              Private Dining
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-ck-cream leading-tight mb-5">
              Celebrate Every
              <br /><span className="text-ck-leaf-light">Meaningful Moment</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-ck-cream/65 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              From intimate family gatherings to large group celebrations — our spacious,
              photogenic dining spaces and heartfelt hospitality make every occasion worth sharing.
            </motion.p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-ck-cream to-transparent" />
        </section>

        {/* Occasions */}
        <section className="py-20 md:py-28 bg-ck-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <SectionHeading label="We Host" title="What Kind of Event?" centered className="mb-12" />
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
              {occasions.map((item, i) => (
                <ScrollReveal key={item.label} delay={i * 0.1}>
                  <div className="flex flex-col gap-4 p-7 rounded-3xl bg-white border border-ck-charcoal/6 hover:border-ck-leaf/25 hover:shadow-md transition-all">
                    <div className="flex items-center justify-center size-12 rounded-2xl bg-ck-leaf/10">
                      <item.icon className="size-6 text-ck-leaf" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-ck-charcoal mb-1.5">{item.label}</h3>
                      <p className="text-sm text-ck-charcoal/60 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {[
                  { label: "Up to 100 Pax", desc: "Our private dining areas across outlets accommodate tables of 8 to full-venue events of 100." },
                  { label: "Curated Set Menus", desc: "Work with our team to design a menu that reflects your occasion — from sharing platters to multi-course spreads." },
                  { label: "Dedicated Events Team", desc: "Our events coordinator handles logistics, layout, dietary requirements, and service so you can enjoy the celebration." },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col gap-3 p-6 rounded-2xl bg-ck-leaf/6 border border-ck-leaf/15">
                    <CheckCircle2 className="size-5 text-ck-leaf" />
                    <div>
                      <p className="font-semibold text-ck-charcoal mb-1">{item.label}</p>
                      <p className="text-sm text-ck-charcoal/60 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Inquiry form */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <SectionHeading label="Get in Touch" title="Send an Inquiry" subtitle="Fill in the form and our events team will get back to you within one business day." centered className="mb-10" />
            </ScrollReveal>
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center text-center gap-5 py-16 px-8 bg-ck-cream rounded-3xl border border-ck-leaf/15">
                  <CheckCircle2 className="size-14 text-ck-leaf" />
                  <h3 className="font-heading text-2xl font-semibold text-ck-charcoal">Inquiry Received</h3>
                  <p className="text-sm text-ck-charcoal/60 max-w-xs leading-relaxed">Thank you, {form.name}. Our events team will contact you at {form.email} within one business day.</p>
                  <button onClick={() => { setSubmitted(false); setForm(initial); }} className="text-sm font-semibold text-ck-leaf underline underline-offset-2">Submit another inquiry</button>
                </motion.div>
              ) : (
                <motion.form key="form" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="flex flex-col gap-5 bg-ck-cream rounded-3xl border border-ck-charcoal/8 p-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div><label className={labelClass}>Full Name</label><input name="name" type="text" value={form.name} onChange={handleChange} required placeholder="Siti Aminah" className={inputClass} /></div>
                    <div><label className={labelClass}>Phone</label><input name="phone" type="tel" value={form.phone} onChange={handleChange} required placeholder="+60 12-345 6789" className={inputClass} /></div>
                  </div>
                  <div><label className={labelClass}>Email</label><input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="siti@email.com" className={inputClass} /></div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Occasion Type</label>
                      <select name="occasion" value={form.occasion} onChange={handleChange} required className={inputClass}>
                        <option value="">Select…</option>
                        {["Family Gathering", "Birthday Celebration", "Corporate Lunch/Dinner", "Group Dinner", "Wedding Reception", "Other"].map((o) => <option key={o} value={o}>{o}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Preferred Outlet</label>
                      <select name="outlet" value={form.outlet} onChange={handleChange} required className={inputClass}>
                        <option value="">Select…</option>
                        {["Hartamas", "Suria KLCC", "1 Utama", "Sunway Pyramid", "Kota Bharu", "Langkawi", "Penang", "Putrajaya"].map((o) => <option key={o} value={o}>{o}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div><label className={labelClass}>Preferred Date</label><input name="date" type="date" value={form.date} onChange={handleChange} required className={inputClass} /></div>
                    <div>
                      <label className={labelClass}>Estimated Guests</label>
                      <select name="guestCount" value={form.guestCount} onChange={handleChange} required className={inputClass}>
                        <option value="">Select…</option>
                        {["2–10 pax", "11–20 pax", "21–40 pax", "41–60 pax", "61–100 pax", "100+ pax"].map((o) => <option key={o} value={o}>{o}</option>)}
                      </select>
                    </div>
                  </div>
                  <div><label className={labelClass}>Tell Us More</label><textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Any special requests, dietary requirements, or specific occasion details…" className={`${inputClass} resize-none`} /></div>
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button type="submit" className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-ck-leaf text-ck-cream text-sm font-semibold hover:bg-ck-leaf/90 transition-colors">
                      <CalendarDays className="size-4" /> Submit Inquiry
                    </button>
                    <a href="https://wa.me/60320111234" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-ck-charcoal/15 text-sm font-medium text-ck-charcoal/70 hover:border-ck-leaf/40 hover:text-ck-leaf transition-all">
                      <MessageCircle className="size-4" /> WhatsApp
                    </a>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
