import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { profile, rotatingWords, socialLinks } from "../data/portfolio";
import { ease } from "../lib/motion";
import Magnetic from "./ui/Magnetic";
import Tilt from "./ui/Tilt";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } } };
const letter = { hidden: { y: "115%" }, show: { y: 0, transition: { duration: 0.8, ease } } };

function SplitWord({ text }: { text: string }) {
  return (
    <span className="inline-block overflow-hidden whitespace-nowrap pb-[0.1em] align-bottom" aria-hidden>
      {text.split("").map((c, i) => (
        <motion.span key={i} variants={letter} className="inline-block">
          {c}
        </motion.span>
      ))}
    </span>
  );
}

function RotatingWord() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % rotatingWords.length), 2600);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="relative inline-flex h-[1.35em] overflow-hidden align-bottom text-accent">
      <AnimatePresence mode="wait">
        <motion.span
          key={rotatingWords[i]}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.4, ease }}
          className="inline-block"
        >
          {rotatingWords[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

const badges = [
  { label: "React", icon: "react", pos: "-left-4 top-10 md:-left-10" },
  { label: "TypeScript", icon: "typescript", pos: "-right-3 top-1/3 md:-right-10" },
  { label: "Redux", icon: "redux", pos: "-left-3 bottom-24 md:-left-12" },
  { label: "Tailwind", icon: "tailwindcss", pos: "-right-3 bottom-10 md:-right-8" },
];

export default function Hero({ ready }: { ready: boolean }) {
  const fade = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    transition: { duration: 0.7, delay, ease },
  });

  return (
    <section
      id="home"
      className="mx-auto flex min-h-screen max-w-6xl items-center overflow-x-clip px-5 pb-16 pt-32 md:px-8"
    >
      <div className="grid w-full items-center gap-16 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <motion.p
            {...fade(0.1)}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-panel px-4 py-1.5 text-sm"
          >
            <span className="size-2 rounded-full bg-accent" />
            {profile.location}
          </motion.p>

          <motion.h1
            variants={container}
            initial="hidden"
            animate={ready ? "show" : "hidden"}
            aria-label={profile.name}
            className="font-display text-[clamp(3rem,7.5vw,6.5rem)] font-bold leading-[0.95] tracking-tight text-heading"
          >
            <SplitWord text="Abhishek" />
            <br />
            <SplitWord text="Singh" />
          </motion.h1>

          <motion.p
            {...fade(0.7)}
            className="mt-8 font-display text-2xl font-medium text-heading md:text-3xl"
          >
            {profile.role} crafting <RotatingWord />
          </motion.p>

          <motion.p {...fade(0.85)} className="mt-5 max-w-xl text-lg">
            {profile.intro}
          </motion.p>

          <motion.div {...fade(1)} className="mt-10 flex flex-wrap items-center gap-4">
            <Magnetic>
              <a
                href="#portfolio"
                className="inline-block rounded-full bg-accent px-7 py-3.5 font-semibold text-page transition-transform hover:scale-105"
              >
                View projects
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#contact"
                className="inline-block rounded-full border border-line px-7 py-3.5 font-semibold text-heading transition-colors hover:border-accent hover:text-accent"
              >
                Contact me
              </a>
            </Magnetic>
            <div className="ml-2 flex items-center gap-3">
              {socialLinks.map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noreferrer" aria-label={l.alt}>
                  <img src={l.icon} alt="" className="icon-social size-6" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* photo */}
        <motion.div
          className="relative mx-auto w-full max-w-sm pr-4 md:pr-0"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={ready ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.92 }}
          transition={{ duration: 0.9, delay: 0.4, ease }}
        >
          <div aria-hidden className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl border border-accent/50" />
          <Tilt>
            <div className="relative overflow-hidden rounded-3xl border border-line bg-panel">
              <img src={profile.photo} alt={`${profile.name}'s photo`} className="aspect-[4/5] w-full object-cover" />
            </div>
          </Tilt>

          {badges.map((b, i) => (
            <motion.div
              key={b.label}
              className={`absolute ${b.pos}`}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.5 + i * 0.7, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-2 rounded-full border border-line bg-panel/80 px-3 py-2 text-sm font-medium text-heading backdrop-blur">
                <img
                  src={`https://simpleicons.org/icons/${b.icon}.svg`}
                  alt=""
                  className="size-4 [filter:brightness(0)_invert(0.9)]"
                />
                {b.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
