"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";
import { EASE_IN_OUT } from "@/lib/motion";

type Props = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in seconds */
  delay?: number;
  duration?: number;
  /** Vertical offset in px before animate */
  y?: number;
};

export function FadeUp({ children, className, delay = 0, duration = 0.5, y = 20 }: Props) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-48px 0px -24px 0px", amount: 0.2 }}
      transition={{
        duration,
        delay,
        ease: EASE_IN_OUT,
      }}
    >
      {children}
    </motion.div>
  );
}
