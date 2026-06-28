"use client";

import { motion } from "framer-motion";
import { Leaf, Heart, ShieldCheck, Sprout } from "lucide-react";
import type { Pillar } from "@/types";

const iconMap = {
  Leaf,
  Heart,
  ShieldCheck,
  Sprout,
} as const;

interface PillarCardProps {
  pillar: Pillar;
  index: number;
}

export function PillarCard({ pillar, index }: PillarCardProps) {
  const Icon = iconMap[pillar.iconName];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="group flex flex-col gap-5 p-8 rounded-3xl bg-ck-cream border border-ck-leaf/10 hover:border-ck-leaf/30 hover:shadow-lg hover:shadow-ck-leaf/5 transition-all duration-300"
    >
      <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-ck-leaf/10 group-hover:bg-ck-leaf/15 transition-colors">
        <Icon className="size-6 text-ck-leaf" />
      </div>
      <div>
        <h3 className="font-heading text-xl font-semibold text-ck-charcoal mb-2">
          {pillar.title}
        </h3>
        <p className="text-sm text-ck-charcoal/60 leading-relaxed">
          {pillar.description}
        </p>
      </div>
    </motion.div>
  );
}
