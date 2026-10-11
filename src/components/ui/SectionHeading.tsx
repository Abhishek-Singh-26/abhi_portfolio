import { motion } from "motion/react";
import { ease } from "../../lib/motion";

export default function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-12">
      <h2 className="overflow-hidden pb-2 font-display text-4xl font-bold leading-[1.1] tracking-tight text-heading md:text-6xl">
        <motion.span
          className="inline-block"
          initial={{ y: "110%" }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
        >
          {title}
        </motion.span>
      </h2>
      <motion.div
        className="mt-3 h-1 w-16 origin-left rounded-full bg-accent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, delay: 0.3, ease }}
      />
      {subtitle && <p className="mt-5 max-w-xl text-lg">{subtitle}</p>}
    </div>
  );
}
