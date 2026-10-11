import { skillGroups, techSkills } from "../data/portfolio";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import SpotlightCard from "./ui/SpotlightCard";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-24">
      <SectionHeading title="Skills" subtitle="The tools and fundamentals I build with." />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {techSkills.map((s, i) => (
          <Reveal key={s.name} delay={(i % 5) * 0.06}>
            <SpotlightCard className="h-full p-5">
              <img src={s.icon} alt="" className="icon-light mb-4 size-9" />
              <h3 className="font-display text-lg font-semibold text-heading">{s.name}</h3>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>

      <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, gi) => (
          <Reveal key={g.title} delay={gi * 0.1}>
            <h3 className="mb-4 font-display text-xl font-semibold text-heading">{g.title}</h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-line bg-panel px-4 py-2 text-sm text-heading transition-colors hover:border-accent hover:text-accent"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
