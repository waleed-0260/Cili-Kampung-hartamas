"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Dish } from "@/types";

interface DishCardProps {
  dish: Dish;
}

export function DishCard({ dish }: DishCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
      className="group flex flex-col rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-xl hover:shadow-ck-charcoal/8 transition-shadow duration-300 border border-ck-charcoal/5"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] bg-gradient-to-br from-ck-leaf/10 to-ck-gold/10 overflow-hidden">
        <Image
          src={dish.imageUrl}
          alt={dish.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {dish.isSignature && (
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-ck-chili text-ck-cream text-xs font-semibold">
              <Flame className="size-3" />
              Signature
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-2">
        <h3 className="font-heading text-lg font-semibold text-ck-charcoal leading-tight">
          {dish.name}
        </h3>
        <p className="text-sm text-ck-charcoal/60 leading-relaxed">
          {dish.description}
        </p>
      </div>
    </motion.div>
  );
}
