import { motion } from "motion/react";

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[60] grid place-items-center bg-page"
      exit={{ y: "-100%", transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
    >
      <div className="text-center">
        <motion.div
          className="font-display text-7xl font-bold text-heading"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          AS<span className="text-accent">.</span>
        </motion.div>
        <div className="mx-auto mt-6 h-[3px] w-40 overflow-hidden rounded-full bg-line">
          <motion.div
            className="h-full bg-accent"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
}
