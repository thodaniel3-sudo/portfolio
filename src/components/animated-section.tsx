"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function AnimatedSection({
  children,
  className,
  id,
}: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
