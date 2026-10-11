import { projects } from "../data/portfolio";
import ProjectPreview from "./ui/ProjectPreview";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import SpotlightCard from "./ui/SpotlightCard";
import Tilt from "./ui/Tilt";

export default function Portfolio() {
    return (
        <section id="portfolio" className="scroll-mt-24 py-24">
            <SectionHeading
                title="Projects"
                subtitle="Things I've built with React."
            />
            <div className="grid gap-6 md:grid-cols-2">
                {projects.map((p, i) => (
                    <Reveal
                        key={p.title}
                        delay={(i % 2) * 0.12}
                        className={`h-full ${p.featured ? "md:col-span-2" : ""}`}
                    >
                        <Tilt max={p.featured ? 3 : 5} className="h-full">
                            <SpotlightCard className="h-full">
                                <div
                                    className={
                                        p.featured
                                            ? "grid h-full md:grid-cols-2"
                                            : ""
                                    }
                                >
                                    <ProjectPreview kind={p.preview} />
                                    <div
                                        className={
                                            p.featured ? "p-6 md:p-10" : "p-6"
                                        }
                                    >
                                        <h3 className="font-display text-2xl font-semibold text-heading">
                                            {p.title}
                                        </h3>
                                        <p className="mt-2">{p.description}</p>
                                        <ul className="mt-4 space-y-2 text-sm">
                                            {p.highlights.map((h) => (
                                                <li
                                                    key={h}
                                                    className="flex gap-3"
                                                >
                                                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                                                    {h}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="mt-5 flex flex-wrap gap-2">
                                            {p.tags.map((t) => (
                                                <span
                                                    key={t}
                                                    className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                        {(p.live || p.repo) && (
                                            <div className="mt-5 flex gap-4 text-sm font-semibold">
                                                {p.live && (
                                                    <a
                                                        href={p.live}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="text-heading hover:text-accent"
                                                    >
                                                        Live demo
                                                    </a>
                                                )}
                                                {p.repo && (
                                                    <a
                                                        href={p.repo}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="text-heading hover:text-accent"
                                                    >
                                                        Source code
                                                    </a>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </SpotlightCard>
                        </Tilt>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}
