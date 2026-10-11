import { motion } from "motion/react";
import type { ReactNode } from "react";
import { ease } from "../../lib/motion";

interface Props {
  children: ReactNode;
  delay?: number;
  x?: number;
  y?: number;
  className?: string;
}

export default function Reveal({ children, delay = 0, x = 0, y = 24, className }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </motion.div>
  );
}
