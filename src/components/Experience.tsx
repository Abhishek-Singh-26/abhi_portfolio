import { AnimatePresence, motion } from "motion/react";
import { experience } from "../data/portfolio";
import { ease } from "../lib/motion";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { toggleExperience } from "../store/portfolioSlice";
import SectionHeading from "./ui/SectionHeading";
import SpotlightCard from "./ui/SpotlightCard";
import { Timeline, TimelineItem } from "./ui/Timeline";

export default function Experience() {
  const dispatch = useAppDispatch();
  const open = useAppSelector((s) => s.portfolio.expandedExperience);

  return (
    <section id="experience" className="scroll-mt-24 py-24">
      <SectionHeading title="Experience" subtitle="Where I've worked and what I did there." />
      <Timeline>
        {experience.map((job) => {
          const isOpen = open === job.company;
          return (
            <TimelineItem key={job.company}>
              <SpotlightCard>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => dispatch(toggleExperience(job.company))}
                  className="flex w-full items-start justify-between gap-4 p-6 text-left"
                >
                  <div>
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                      {job.period}
                    </span>
                    <h3 className="mt-4 font-display text-2xl font-semibold text-heading">{job.role}</h3>
                    <p className="mt-1">
                      {job.company} &middot; {job.location}
                    </p>
                  </div>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease }}
                    className="mt-1 grid size-9 shrink-0 place-items-center rounded-full border border-line text-heading"
                  >
                    <svg viewBox="0 0 20 20" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 8l5 5 5-5" />
                    </svg>
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <ul className="space-y-3 border-t border-line pt-5">
                          {job.points.map((p) => (
                            <li key={p} className="flex gap-3">
                              <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" />
                              {p}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-5 flex flex-wrap gap-2">
                          {job.tags.map((t) => (
                            <span key={t} className="rounded-full border border-line px-3 py-1 text-xs font-medium text-heading">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </SpotlightCard>
            </TimelineItem>
          );
        })}
      </Timeline>
    </section>
  );
}
