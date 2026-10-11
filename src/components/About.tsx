import { about, experience, projects } from "../data/portfolio";
import Counter from "./ui/Counter";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import SpotlightCard from "./ui/SpotlightCard";

const stats = [
  { to: experience.length, decimals: 0, label: "Professional roles" },
  { to: projects.length, decimals: 0, label: "Projects built" },
  { to: 8.26, decimals: 2, label: "CGPA in B.E. Computer Science" },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24">
      <SectionHeading title="About me" />
      <div className="grid items-center gap-12 md:grid-cols-[1.3fr_1fr]">
        <div className="space-y-5 text-lg">
          {about.map((p, i) => (
            <Reveal key={i} delay={i * 0.12}>
              <p>{p}</p>
            </Reveal>
          ))}
        </div>

        <div className="grid gap-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1} x={30} y={0}>
              <SpotlightCard className="p-6">
                <div className="font-display text-5xl font-bold text-heading">
                  <Counter to={s.to} decimals={s.decimals} />
                </div>
                <div className="mt-1 text-sm">{s.label}</div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
