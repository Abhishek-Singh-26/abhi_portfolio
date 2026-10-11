import { motion, useScroll, useSpring } from "motion/react";
import { useRef, type ReactNode } from "react";
import { ease } from "../../lib/motion";
import Reveal from "./Reveal";

export function Timeline({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div ref={ref} className="relative pl-10 md:pl-14">
      <div className="absolute bottom-2 left-[7px] top-2 w-0.5 bg-line" />
      <motion.div
        style={{ scaleY }}
        className="absolute bottom-2 left-[7px] top-2 w-0.5 origin-top bg-accent"
      />
      {children}
    </div>
  );
}

export function TimelineItem({ children }: { children: ReactNode }) {
  return (
    <div className="relative mb-8 last:mb-0">
      <motion.div
        className="absolute -left-10 top-7 size-4 rounded-full border-[3px] border-accent bg-page md:-left-14"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4, ease }}
      />
      <Reveal x={-30} y={0}>
        {children}
      </Reveal>
    </div>
  );
}
