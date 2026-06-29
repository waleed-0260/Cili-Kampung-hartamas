"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, Plus, Check } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { MobileNav } from "@/components/layout/MobileNav";
import { CartSidebar } from "@/components/layout/CartSidebar";
import { Footer } from "@/components/layout/Footer";
import { menuItems, menuCategories } from "@/lib/data";
import { useCartStore } from "@/store/cart-store";
import type { MenuCategory, MenuItem } from "@/types";

function AddToOrderButton({ item }: { item: MenuItem }) {
  const { addItem, items } = useCartStore();
  const [justAdded, setJustAdded] = useState(false);
  const inCart = items.find((i) => i.id === item.id);
  const qty = inCart?.quantity ?? 0;

  const handleAdd = () => {
    addItem(item);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  return (
    <button
      onClick={handleAdd}
      className={`group flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 shrink-0 ${
        justAdded
          ? "bg-ck-leaf text-ck-cream"
          : qty > 0
          ? "bg-ck-leaf/15 text-ck-leaf hover:bg-ck-leaf hover:text-ck-cream"
          : "bg-ck-charcoal/8 text-ck-charcoal/70 hover:bg-ck-leaf hover:text-ck-cream"
      }`}
    >
      {justAdded ? (
        <>
          <Check className="size-3" />
          Added
        </>
      ) : (
        <>
          <Plus className="size-3" />
          {qty > 0 ? `Add (${qty})` : "Add"}
        </>
      )}
    </button>
  );
}

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("sambal-petai");
  const filtered = menuItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <Navbar />
      <MobileNav />
      <CartSidebar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-10 md:pt-40 md:pb-14 bg-ck-cream">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-ck-leaf text-xs font-semibold tracking-[0.2em] uppercase mb-4"
            >
              What We Cook
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl font-semibold text-ck-charcoal leading-tight mb-4"
            >
              The Cili Kampung Menu
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-ck-charcoal/60 text-base leading-relaxed max-w-xl mx-auto"
            >
              Homemade, unhurried, and made to share. Tap{" "}
              <span className="font-semibold text-ck-leaf">Add</span> to build your
              order, then checkout when you're ready.
            </motion.p>
          </div>
        </section>

        {/* Sticky category tabs */}
        <div className="sticky top-[64px] md:top-[80px] z-40 bg-ck-cream/95 backdrop-blur-sm border-b border-ck-charcoal/8 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-none">
              {menuCategories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat.value
                      ? "bg-ck-leaf text-ck-cream shadow-sm"
                      : "text-ck-charcoal/60 hover:text-ck-charcoal hover:bg-ck-charcoal/6"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Menu items */}
        <section className="py-10 md:py-14 bg-white min-h-[60vh]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-ck-charcoal">
                {menuCategories.find((c) => c.value === activeCategory)?.label}
              </h2>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
                className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ck-charcoal/6 rounded-2xl overflow-hidden border border-ck-charcoal/6"
              >
                {filtered.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.28, delay: i * 0.04 }}
                    className="flex items-start gap-4 p-5 bg-white hover:bg-ck-cream/40 transition-colors"
                  >
                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h3 className="font-heading text-base font-semibold text-ck-charcoal leading-snug">
                          {item.name}
                        </h3>
                        {item.isSignature && (
                          <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-ck-chili/10 text-ck-chili text-[10px] font-semibold">
                            <Flame className="size-2.5" /> Signature
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-ck-charcoal/50 leading-relaxed mb-2">
                        {item.description}
                      </p>
                      <span className="font-heading text-sm font-semibold text-ck-leaf">
                        {item.price}
                      </span>
                    </div>

                    {/* Add button */}
                    <div className="shrink-0 mt-1">
                      <AddToOrderButton item={item} />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Notes */}
            <div className="mt-8 flex flex-col gap-3">
              <div className="flex items-center gap-3 text-xs text-ck-charcoal/40">
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-ck-chili/10 text-ck-chili font-medium">
                  <Flame className="size-3" /> Signature
                </span>
                <span>— our most celebrated dishes, made to the original recipe every time.</span>
              </div>
              <div className="p-4 rounded-xl bg-ck-leaf/6 border border-ck-leaf/15 text-sm text-ck-charcoal/60">
                <strong className="text-ck-leaf font-semibold">Fully Halal</strong> — all dishes
                are prepared in our JAKIM-certified halal kitchen. No pork, no alcohol, no exceptions.
              </div>
              <p className="text-xs text-ck-charcoal/35">
                Prices in MYR · Subject to 10% service charge · Menu subject to seasonal availability.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
