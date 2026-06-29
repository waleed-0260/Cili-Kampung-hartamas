"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Flame,
  Plus,
  Minus,
  Trash2,
  CheckCircle2,
  ShoppingBag,
  MessageCircle,
  CalendarDays,
  Utensils,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { MobileNav } from "@/components/layout/MobileNav";
import { CartSidebar } from "@/components/layout/CartSidebar";
import { Footer } from "@/components/layout/Footer";
import { useCartStore } from "@/store/cart-store";
import { locations } from "@/lib/data";

interface CheckoutForm {
  name: string;
  phone: string;
  email: string;
  outlet: string;
  diningType: "dine-in" | "takeaway";
  date: string;
  time: string;
  notes: string;
}

const initial: CheckoutForm = {
  name: "",
  phone: "",
  email: "",
  outlet: "",
  diningType: "dine-in",
  date: "",
  time: "",
  notes: "",
};

export default function CheckoutPage() {
  const { items, increment, decrement, removeItem, totalPrice, clearCart } =
    useCartStore();
  const [form, setForm] = useState<CheckoutForm>(initial);
  const [submitted, setSubmitted] = useState(false);

  const subtotal = totalPrice();
  const serviceCharge = subtotal * 0.1;
  const total = subtotal + serviceCharge;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    clearCart();
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-ck-charcoal/15 bg-white text-sm text-ck-charcoal placeholder:text-ck-charcoal/35 focus:outline-none focus:border-ck-leaf focus:ring-2 focus:ring-ck-leaf/15 transition-all";
  const labelClass =
    "block text-xs font-semibold text-ck-charcoal/55 tracking-wide uppercase mb-1.5";

  if (submitted) {
    return (
      <>
        <Navbar />
        <MobileNav />
        <CartSidebar />
        <main className="min-h-screen bg-ck-cream flex items-center justify-center px-4 py-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md flex flex-col items-center text-center gap-5 bg-white rounded-3xl border border-ck-leaf/15 p-10 shadow-sm"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
            >
              <CheckCircle2 className="size-16 text-ck-leaf" />
            </motion.div>
            <div>
              <h1 className="font-heading text-2xl font-semibold text-ck-charcoal mb-2">
                Order Confirmed!
              </h1>
              <p className="text-sm text-ck-charcoal/60 leading-relaxed">
                Thank you, {form.name || "valued guest"}. We've received your order
                and will confirm via WhatsApp or call shortly.
              </p>
            </div>
            <div className="w-full p-4 rounded-xl bg-ck-cream text-left flex flex-col gap-1.5 text-sm">
              <div className="flex justify-between">
                <span className="text-ck-charcoal/50">Outlet</span>
                <span className="font-medium text-ck-charcoal">{form.outlet || "Hartamas"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-ck-charcoal/50">Type</span>
                <span className="font-medium text-ck-charcoal capitalize">{form.diningType === "dine-in" ? "Dine In" : "Takeaway"}</span>
              </div>
              {form.date && (
                <div className="flex justify-between">
                  <span className="text-ck-charcoal/50">Date & Time</span>
                  <span className="font-medium text-ck-charcoal">{form.date} · {form.time}</span>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-3 w-full">
              <a
                href="https://wa.me/60320111234"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-ck-leaf text-ck-cream text-sm font-semibold hover:bg-ck-leaf/90 transition-colors"
              >
                <MessageCircle className="size-4" /> Confirm via WhatsApp
              </a>
              <Link
                href="/menu"
                className="flex items-center justify-center gap-2 py-3 rounded-xl border border-ck-charcoal/15 text-sm font-medium text-ck-charcoal/70 hover:border-ck-leaf/30 hover:text-ck-leaf transition-all"
              >
                <ShoppingBag className="size-4" /> Back to Menu
              </Link>
            </div>
          </motion.div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <MobileNav />
      <CartSidebar />
      <main className="min-h-screen bg-ck-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-36 pb-20">
          {/* Back link */}
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 text-sm font-medium text-ck-charcoal/60 hover:text-ck-leaf transition-colors mb-8"
          >
            <ArrowLeft className="size-4" /> Back to Menu
          </Link>

          <h1 className="font-heading text-3xl md:text-4xl font-semibold text-ck-charcoal mb-10">
            Checkout
          </h1>

          {items.length === 0 ? (
            <div className="flex flex-col items-center gap-5 py-20 text-center">
              <div className="flex items-center justify-center size-16 rounded-full bg-ck-charcoal/6">
                <ShoppingBag className="size-7 text-ck-charcoal/30" />
              </div>
              <div>
                <p className="font-heading text-xl font-semibold text-ck-charcoal/60 mb-2">
                  Your cart is empty
                </p>
                <p className="text-sm text-ck-charcoal/40">Add dishes from the menu to get started.</p>
              </div>
              <Link
                href="/menu"
                className="px-6 py-3 rounded-full bg-ck-leaf text-ck-cream text-sm font-semibold hover:bg-ck-leaf/90 transition-colors"
              >
                Browse Menu
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
              {/* Order summary */}
              <div className="lg:col-span-2 order-2 lg:order-1">
                <div className="bg-white rounded-3xl border border-ck-charcoal/8 overflow-hidden sticky top-28">
                  <div className="px-6 pt-6 pb-4 border-b border-ck-charcoal/6">
                    <h2 className="font-heading text-lg font-semibold text-ck-charcoal">
                      Order Summary
                    </h2>
                    <p className="text-xs text-ck-charcoal/40 mt-0.5">
                      {items.reduce((s, i) => s + i.quantity, 0)} items
                    </p>
                  </div>

                  {/* Items */}
                  <div className="divide-y divide-ck-charcoal/5">
                    <AnimatePresence initial={false}>
                      {items.map((item) => (
                        <motion.div
                          key={item.id}
                          layout
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="flex items-start gap-3 px-6 py-4"
                        >
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5 mb-0.5">
                              <p className="text-sm font-semibold text-ck-charcoal leading-snug">
                                {item.name}
                              </p>
                              {item.isSignature && (
                                <Flame className="size-3 text-ck-chili shrink-0" />
                              )}
                            </div>
                            <p className="text-xs text-ck-charcoal/45">{item.price} each</p>
                          </div>
                          <div className="flex items-center gap-1.5 shrink-0">
                            <button
                              onClick={() => decrement(item.id)}
                              className="flex items-center justify-center size-6 rounded-md bg-ck-charcoal/8 text-ck-charcoal hover:bg-ck-charcoal/15 transition-colors"
                            >
                              <Minus className="size-3" />
                            </button>
                            <span className="w-5 text-center text-sm font-semibold text-ck-charcoal">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => increment(item.id)}
                              className="flex items-center justify-center size-6 rounded-md bg-ck-leaf/15 text-ck-leaf hover:bg-ck-leaf/25 transition-colors"
                            >
                              <Plus className="size-3" />
                            </button>
                          </div>
                          <div className="flex flex-col items-end gap-1 shrink-0 ml-1">
                            <span className="text-sm font-semibold text-ck-leaf">
                              RM {(item.priceValue * item.quantity).toFixed(2)}
                            </span>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-ck-charcoal/25 hover:text-ck-chili transition-colors"
                            >
                              <Trash2 className="size-3" />
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>

                  {/* Totals */}
                  <div className="px-6 py-5 bg-ck-cream/50 border-t border-ck-charcoal/6 flex flex-col gap-2 text-sm">
                    <div className="flex justify-between text-ck-charcoal/60">
                      <span>Subtotal</span>
                      <span>RM {subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-ck-charcoal/60">
                      <span>Service charge (10%)</span>
                      <span>RM {serviceCharge.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-semibold text-ck-charcoal border-t border-ck-charcoal/8 pt-2 mt-1">
                      <span>Total</span>
                      <span className="text-ck-leaf text-base">RM {total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Customer details form */}
              <form
                onSubmit={handleSubmit}
                className="lg:col-span-3 order-1 lg:order-2 flex flex-col gap-5"
              >
                <div className="bg-white rounded-3xl border border-ck-charcoal/8 p-6 flex flex-col gap-5">
                  <h2 className="font-heading text-lg font-semibold text-ck-charcoal">
                    Your Details
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Full Name</label>
                      <input name="name" type="text" value={form.name} onChange={handleChange} required placeholder="Ahmad Razif" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Phone</label>
                      <input name="phone" type="tel" value={form.phone} onChange={handleChange} required placeholder="+60 12-345 6789" className={inputClass} />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Email</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="ahmad@email.com" className={inputClass} />
                  </div>

                  <div>
                    <label className={labelClass}>Outlet</label>
                    <select name="outlet" value={form.outlet} onChange={handleChange} required className={inputClass}>
                      <option value="">Select your outlet…</option>
                      {locations.map((loc) => (
                        <option key={loc.id} value={loc.name}>{loc.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Dining preference */}
                <div className="bg-white rounded-3xl border border-ck-charcoal/8 p-6 flex flex-col gap-5">
                  <h2 className="font-heading text-lg font-semibold text-ck-charcoal">
                    Dining Preference
                  </h2>

                  <div className="grid grid-cols-2 gap-3">
                    {(["dine-in", "takeaway"] as const).map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setForm((p) => ({ ...p, diningType: type }))}
                        className={`flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all ${
                          form.diningType === type
                            ? "border-ck-leaf bg-ck-leaf/6 text-ck-leaf"
                            : "border-ck-charcoal/12 text-ck-charcoal/50 hover:border-ck-charcoal/25"
                        }`}
                      >
                        {type === "dine-in" ? (
                          <Utensils className="size-5" />
                        ) : (
                          <ShoppingBag className="size-5" />
                        )}
                        <span className="text-sm font-semibold capitalize">
                          {type === "dine-in" ? "Dine In" : "Takeaway"}
                        </span>
                      </button>
                    ))}
                  </div>

                  {form.diningType === "dine-in" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Date</label>
                        <input name="date" type="date" value={form.date} onChange={handleChange} className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass}>Time</label>
                        <select name="time" value={form.time} onChange={handleChange} className={inputClass}>
                          <option value="">Select time…</option>
                          {["11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM"].map((t) => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  )}

                  <div>
                    <label className={labelClass}>Special Instructions</label>
                    <textarea
                      name="notes"
                      value={form.notes}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Allergies, dietary requirements, table preferences, spice level…"
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                </div>

                {/* Place order */}
                <div className="bg-white rounded-3xl border border-ck-charcoal/8 p-6 flex flex-col gap-3">
                  <div className="flex justify-between items-center text-sm font-semibold text-ck-charcoal mb-1">
                    <span>Order Total</span>
                    <span className="text-ck-leaf text-lg">RM {total.toFixed(2)}</span>
                  </div>
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-ck-leaf text-ck-cream text-sm font-semibold hover:bg-ck-leaf/90 transition-colors"
                  >
                    <CalendarDays className="size-4" />
                    Place Order
                  </button>
                  <a
                    href="https://wa.me/60320111234"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl border border-ck-charcoal/12 text-sm font-medium text-ck-charcoal/65 hover:border-ck-leaf/35 hover:text-ck-leaf transition-all"
                  >
                    <MessageCircle className="size-4" /> Order via WhatsApp instead
                  </a>
                  <p className="text-center text-xs text-ck-charcoal/35">
                    Prices in MYR · Inclusive of 10% service charge · JAKIM Halal Certified
                  </p>
                </div>
              </form>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
