import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect } from "react";

export default function CursorGlow() {
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const sx = useSpring(x, { stiffness: 120, damping: 24 });
  const sy = useSpring(y, { stiffness: 120, damping: 24 });
  const left = useTransform(sx, (v) => v - 250);
  const top = useTransform(sy, (v) => v - 250);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-30 hidden size-[500px] rounded-full [@media(pointer:fine)]:block"
      style={{
        left,
        top,
        background: "radial-gradient(circle, rgba(255,183,3,0.07), transparent 65%)",
      }}
    />
  );
}
