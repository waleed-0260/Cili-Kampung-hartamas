"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Plus, Minus, Trash2, X, Flame, ArrowRight } from "lucide-react";
import { useCartStore } from "@/store/cart-store";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export function CartSidebar() {
  const { items, isOpen, setOpen, increment, decrement, removeItem, totalItems, totalPrice } =
    useCartStore();

  const total = totalPrice();
  const count = totalItems();

  return (
    <Sheet open={isOpen} onOpenChange={setOpen}>
      <SheetContent
        side="right"
        showCloseButton={false}
        className="w-full sm:w-[420px] bg-ck-cream border-ck-charcoal/10 p-0 flex flex-col"
      >
        {/* Header */}
        <SheetHeader className="px-5 pt-5 pb-4 border-b border-ck-charcoal/8 shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="size-5 text-ck-leaf" />
              <SheetTitle className="font-heading text-lg font-semibold text-ck-charcoal">
                Your Order
              </SheetTitle>
              {count > 0 && (
                <span className="flex items-center justify-center size-5 rounded-full bg-ck-leaf text-ck-cream text-xs font-bold">
                  {count}
                </span>
              )}
            </div>
            <button
              onClick={() => setOpen(false)}
              className="p-1.5 rounded-lg text-ck-charcoal/40 hover:text-ck-charcoal hover:bg-ck-charcoal/8 transition-colors"
              aria-label="Close cart"
            >
              <X className="size-4" />
            </button>
          </div>
          <p className="text-xs text-ck-charcoal/45 mt-0.5">
            Hartamas outlet · JAKIM Halal Certified
          </p>
        </SheetHeader>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          <AnimatePresence initial={false}>
            {items.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center gap-4 py-20 text-center"
              >
                <div className="flex items-center justify-center size-16 rounded-full bg-ck-charcoal/6">
                  <ShoppingBag className="size-7 text-ck-charcoal/30" />
                </div>
                <div>
                  <p className="font-heading text-base font-semibold text-ck-charcoal/60 mb-1">
                    Your order is empty
                  </p>
                  <p className="text-xs text-ck-charcoal/40 leading-relaxed">
                    Browse the menu and add dishes to get started.
                  </p>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="text-sm font-semibold text-ck-leaf hover:text-ck-leaf/80 underline underline-offset-2 transition-colors"
                >
                  Browse Menu
                </button>
              </motion.div>
            ) : (
              <div className="flex flex-col gap-2">
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 24, height: 0, marginBottom: 0 }}
                    transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                    className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-ck-charcoal/6"
                  >
                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 mb-0.5 flex-wrap">
                        <p className="text-sm font-semibold text-ck-charcoal leading-snug">
                          {item.name}
                        </p>
                        {item.isSignature && (
                          <span className="inline-flex items-center gap-0.5 text-[10px] font-semibold text-ck-chili">
                            <Flame className="size-2.5" /> Signature
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-ck-charcoal/50">{item.price} each</p>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        onClick={() => decrement(item.id)}
                        className="flex items-center justify-center size-7 rounded-lg bg-ck-charcoal/8 text-ck-charcoal hover:bg-ck-charcoal/15 transition-colors"
                        aria-label={`Decrease ${item.name}`}
                      >
                        <Minus className="size-3" />
                      </button>
                      <span className="w-6 text-center text-sm font-semibold text-ck-charcoal">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => increment(item.id)}
                        className="flex items-center justify-center size-7 rounded-lg bg-ck-leaf/15 text-ck-leaf hover:bg-ck-leaf/25 transition-colors"
                        aria-label={`Increase ${item.name}`}
                      >
                        <Plus className="size-3" />
                      </button>
                    </div>

                    {/* Line total + remove */}
                    <div className="flex flex-col items-end gap-1 shrink-0">
                      <span className="text-sm font-semibold text-ck-leaf">
                        RM {(item.priceValue * item.quantity).toFixed(2)}
                      </span>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-ck-charcoal/30 hover:text-ck-chili transition-colors"
                        aria-label={`Remove ${item.name}`}
                      >
                        <Trash2 className="size-3.5" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer — total + checkout */}
        <AnimatePresence>
          {items.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              className="shrink-0 px-5 pb-6 pt-4 border-t border-ck-charcoal/8 bg-ck-cream flex flex-col gap-3"
            >
              {/* Subtotal rows */}
              <div className="flex flex-col gap-1.5 text-sm">
                <div className="flex justify-between text-ck-charcoal/60">
                  <span>Subtotal ({count} {count === 1 ? "item" : "items"})</span>
                  <span>RM {total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-ck-charcoal/60">
                  <span>Service charge (10%)</span>
                  <span>RM {(total * 0.1).toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-semibold text-ck-charcoal pt-1.5 border-t border-ck-charcoal/8">
                  <span>Total</span>
                  <span className="text-ck-leaf">RM {(total * 1.1).toFixed(2)}</span>
                </div>
              </div>

              <Link
                href="/checkout"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-ck-leaf text-ck-cream text-sm font-semibold hover:bg-ck-leaf/90 transition-colors"
              >
                Proceed to Checkout
                <ArrowRight className="size-4" />
              </Link>
              <p className="text-center text-xs text-ck-charcoal/35">
                Prices in MYR · Subject to 10% service charge
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </SheetContent>
    </Sheet>
  );
}
