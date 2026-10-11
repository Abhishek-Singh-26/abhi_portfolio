import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { navItems } from "../data/portfolio";
import { ease } from "../lib/motion";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { closeMenu, setActiveSection, toggleMenu } from "../store/portfolioSlice";
import type { SectionId } from "../store/portfolioSlice";

export default function Navbar() {
  const dispatch = useAppDispatch();
  const active = useAppSelector((s) => s.portfolio.activeSection);
  const menuOpen = useAppSelector((s) => s.portfolio.menuOpen);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > prev && y > 200 && !menuOpen);
  });

  const go = (id: SectionId) => {
    dispatch(setActiveSection(id));
    dispatch(closeMenu());
  };

  return (
    <motion.header
      className="fixed inset-x-0 top-4 z-40 flex justify-center px-4"
      animate={{ y: hidden ? -110 : 0 }}
      transition={{ duration: 0.35, ease }}
    >
      <div className="w-full max-w-3xl">
        <nav className="flex items-center justify-between rounded-full border border-line bg-panel/70 p-2 pl-5 backdrop-blur-xl">
          <a href="#home" onClick={() => go("home")} className="font-display text-lg font-bold text-heading">
            AS<span className="text-accent">.</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => go(id)}
                  className={`relative block rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active === id ? "text-heading" : "text-muted hover:text-heading"
                  }`}
                >
                  {active === id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-raised"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative">{label}</span>
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => dispatch(toggleMenu())}
            className="grid size-10 place-items-center rounded-full bg-raised md:hidden"
          >
            <span className="relative block h-3.5 w-5">
              <motion.span
                initial={false}
                className="absolute left-0 h-0.5 w-5 rounded bg-heading"
                animate={menuOpen ? { top: 6, rotate: 45 } : { top: 0, rotate: 0 }}
              />
              <motion.span
                initial={false}
                className="absolute left-0 h-0.5 w-5 rounded bg-heading"
                animate={menuOpen ? { top: 6, rotate: -45 } : { top: 12, rotate: 0 }}
              />
            </span>
          </button>
        </nav>

        <AnimatePresence>
          {menuOpen && (
            <motion.ul
              className="mt-2 overflow-hidden rounded-3xl border border-line bg-panel/90 p-2 backdrop-blur-xl md:hidden"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease }}
            >
              {navItems.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={() => go(id)}
                    className={`block rounded-2xl px-4 py-3 font-medium ${
                      active === id ? "bg-raised text-heading" : "text-muted"
                    }`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
