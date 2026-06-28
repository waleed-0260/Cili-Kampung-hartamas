"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, ShoppingBag } from "lucide-react";
import { LeafAccent } from "@/components/shared/LeafAccent";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ck-charcoal">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a3519] via-ck-charcoal to-[#2a1f18]" />
      <div className="absolute inset-0 bg-gradient-to-t from-ck-charcoal/80 via-transparent to-transparent" />

      {/* Leaf decorations */}
      <LeafAccent
        className="-top-8 -right-8 opacity-80"
        size={380}
        color="#3D6B35"
        opacity={0.18}
      />
      <LeafAccent
        className="bottom-24 -left-12 opacity-60"
        size={280}
        color="#7BA968"
        opacity={0.12}
      />
      <LeafAccent
        className="top-1/3 right-1/4 opacity-40"
        size={160}
        color="#3D6B35"
        opacity={0.08}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-ck-leaf-light text-xs font-semibold tracking-[0.22em] uppercase mb-6"
        >
          Kampung Spirit · Modern Table
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-heading text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-ck-cream leading-[1.05] mb-6"
        >
          Authentic Malay
          <br />
          <span className="text-ck-leaf-light">Cuisine</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-ck-cream/70 text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Served warm for families and friends — every moment worth sharing. Rooted in
          Langkawi kitchen traditions, seasoned with belacan, and cooked with patience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <Link
            href="/menu"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-ck-leaf text-ck-cream text-sm font-semibold hover:bg-ck-leaf/90 transition-all duration-200"
          >
            Explore the Menu
            <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            href="/reservation"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-ck-cream/30 text-ck-cream text-sm font-semibold hover:bg-ck-cream/10 hover:border-ck-cream/50 transition-all duration-200"
          >
            <CalendarDays className="size-4" />
            Reserve a Table
          </Link>
          <Link
            href="/takeaway"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-ck-cream/70 text-sm font-medium hover:text-ck-cream transition-colors"
          >
            <ShoppingBag className="size-4" />
            Order Takeaway
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-ck-cream/30 text-xs tracking-widest uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-ck-cream/30 to-transparent"
          />
        </motion.div>
      </div>

      {/* Bottom fade to cream */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-ck-cream to-transparent" />
    </section>
  );
}
