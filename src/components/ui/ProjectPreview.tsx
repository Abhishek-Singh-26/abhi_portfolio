import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import type { Project } from "../../data/portfolio";

const tasks = ["Design the landing page", "Fix responsive layout", "Review pull request", "Write unit tests"];

function TaskPreview() {
  const [step, setStep] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setStep((s) => (s + 1) % (tasks.length + 2)), 1500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="grid h-52 place-items-center bg-raised p-5">
      <div className="w-full max-w-xs rounded-xl border border-line bg-page p-4">
        <div className="mb-3 flex items-center justify-between">
          <span className="font-display text-sm font-semibold text-heading">My Tasks</span>
          <span className="text-xs text-accent">
            {Math.min(step, tasks.length)}/{tasks.length}
          </span>
        </div>
        <ul className="space-y-2">
          {tasks.map((t, i) => {
            const done = i < step;
            return (
              <li key={t} className="flex items-center gap-2.5 text-xs">
                <motion.span
                  animate={{
                    backgroundColor: done ? "#ffb703" : "rgba(0,0,0,0)",
                    borderColor: done ? "#ffb703" : "#3a342d",
                  }}
                  className="grid size-4 shrink-0 place-items-center rounded border"
                >
                  {done && (
                    <svg viewBox="0 0 12 12" className="size-3 text-page">
                      <path
                        d="M2.5 6.5l2.5 2.5 4.5-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </motion.span>
                <span className={done ? "text-muted line-through" : "text-heading"}>{t}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789!@#$%&*";
const generate = (n: number) =>
  Array.from({ length: n }, () => chars[Math.floor(Math.random() * chars.length)]).join("");

function PasswordPreview() {
  const [pw, setPw] = useState(() => generate(12));
  useEffect(() => {
    const t = setInterval(() => setPw(generate(12)), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="grid h-52 place-items-center bg-raised p-5">
      <div className="w-full max-w-xs rounded-xl border border-line bg-page p-4">
        <div className="flex h-10 items-center overflow-hidden rounded-lg border border-line px-3">
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={pw}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="font-mono text-sm text-heading"
            >
              {pw}
            </motion.span>
          </AnimatePresence>
        </div>
        <div className="mt-4 flex items-center justify-between text-xs">
          <span>Length</span>
          <span className="text-accent">12</span>
        </div>
        <div className="mt-1.5 h-1.5 rounded-full bg-line">
          <div className="h-full w-3/5 rounded-full bg-accent" />
        </div>
        <div className="mt-4 flex gap-2 text-[11px]">
          {["Uppercase", "Numbers", "Symbols"].map((o) => (
            <span key={o} className="rounded-full bg-accent/10 px-2.5 py-1 text-accent">
              {o}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function PortfolioPreview() {
  return (
    <div className="grid h-full min-h-60 place-items-center bg-raised p-5">
      <div className="w-full max-w-md overflow-hidden rounded-xl border border-line bg-page">
        <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
          <span className="size-2 rounded-full bg-line" />
          <span className="size-2 rounded-full bg-line" />
          <span className="size-2 rounded-full bg-line" />
          <span className="ml-3 h-3.5 flex-1 rounded-full bg-panel" />
        </div>
        <div className="h-48 overflow-hidden">
          <motion.div
            className="space-y-4 p-4"
            animate={{ y: [0, -110, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="mx-auto flex h-5 w-3/4 items-center justify-between rounded-full bg-panel px-3">
              <span className="size-1.5 rounded-full bg-accent" />
              <span className="h-1 w-16 rounded-full bg-line" />
            </div>
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="font-display text-xl font-bold leading-none text-heading">Abhishek</div>
                <div className="font-display text-xl font-bold leading-tight text-heading">Singh</div>
                <div className="mt-1.5 text-[10px] text-accent">Frontend Developer</div>
                <div className="mt-2.5 flex gap-1.5">
                  <span className="h-4 w-14 rounded-full bg-accent" />
                  <span className="h-4 w-12 rounded-full border border-line" />
                </div>
              </div>
              <img src="/abhi.png" alt="" className="h-20 w-16 rounded-lg border border-line object-cover" />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {Array.from({ length: 8 }, (_, i) => (
                <div key={i} className="h-9 rounded-lg border border-line bg-panel" />
              ))}
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="h-16 rounded-lg border border-line bg-panel" />
              <div className="h-16 rounded-lg border border-line bg-panel" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectPreview({ kind }: { kind: Project["preview"] }) {
  return (
    <div aria-hidden className="h-full overflow-hidden">
      {kind === "portfolio" && <PortfolioPreview />}
      {kind === "tasks" && <TaskPreview />}
      {kind === "password" && <PasswordPreview />}
    </div>
  );
}
