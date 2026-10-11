import { education } from "../data/portfolio";
import SectionHeading from "./ui/SectionHeading";
import SpotlightCard from "./ui/SpotlightCard";
import { Timeline, TimelineItem } from "./ui/Timeline";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-24">
      <SectionHeading title="Education" />
      <Timeline>
        {education.map((e) => (
          <TimelineItem key={e.degree}>
            <SpotlightCard className="p-6">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                  {e.year}
                </span>
                {e.extra && (
                  <span className="rounded-full border border-line px-3 py-1 text-xs font-medium text-heading">
                    {e.extra}
                  </span>
                )}
              </div>
              <h3 className="mt-4 font-display text-2xl font-semibold text-heading">{e.degree}</h3>
              <p className="mt-1 italic">{e.college}</p>
              <p className="mt-3">{e.work}</p>
            </SpotlightCard>
          </TimelineItem>
        ))}
      </Timeline>
    </section>
  );
}
