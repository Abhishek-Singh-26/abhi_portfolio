import { motion, useMotionValue, useSpring } from "motion/react";
import type { MouseEvent, ReactNode } from "react";

export default function Magnetic({
  children,
  strength = 0.3,
}: {
  children: ReactNode;
  strength?: number;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 18 });
  const sy = useSpring(y, { stiffness: 250, damping: 18 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}
