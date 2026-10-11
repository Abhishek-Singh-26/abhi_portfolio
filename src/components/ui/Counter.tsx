import { animate, useInView } from "motion/react";
import { useEffect, useRef } from "react";

export default function Counter({
  to,
  suffix = "",
  decimals = 0,
}: {
  to: number;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    const node = ref.current;
    if (!inView || !node) return;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => {
        node.textContent = `${v.toFixed(decimals)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, to, suffix, decimals]);

  return <span ref={ref}>{(0).toFixed(decimals)}{suffix}</span>;
}
