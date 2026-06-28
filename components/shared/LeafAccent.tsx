"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LeafAccentProps {
  className?: string;
  color?: string;
  size?: number;
  opacity?: number;
}

export function LeafAccent({
  className,
  color = "#3D6B35",
  size = 200,
  opacity = 0.12,
}: LeafAccentProps) {
  return (
    <motion.div
      className={cn("absolute pointer-events-none select-none", className)}
      animate={{ y: [0, -10, 0], rotate: [0, 4, 0] }}
      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 15C55 15 15 55 15 100C15 155 70 188 100 188C130 188 185 155 185 100C185 55 145 15 100 15Z"
          fill={color}
          opacity={opacity}
        />
        <path
          d="M100 38C68 38 38 68 38 100C38 142 72 172 100 172C128 172 162 142 162 100C162 68 132 38 100 38Z"
          fill={color}
          opacity={opacity * 0.7}
        />
        <path
          d="M100 10C100 10 90 80 40 100C90 120 100 190 100 190C100 190 110 120 160 100C110 80 100 10 100 10Z"
          fill={color}
          opacity={opacity * 0.5}
        />
      </svg>
    </motion.div>
  );
}
