import { techSkills } from "../data/portfolio";

export default function Marquee() {
  const items = [...techSkills, ...techSkills];
  return (
    <div
      aria-hidden
      className="marquee overflow-hidden border-y border-line py-6 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]"
    >
      <div className="marquee-track flex w-max">
        {items.map((s, i) => (
          <div key={i} className="flex items-center gap-3 px-8 font-display text-2xl font-medium text-muted">
            <img src={s.icon} alt="" className="size-6 [filter:brightness(0)_invert(0.7)]" />
            {s.name}
          </div>
        ))}
      </div>
    </div>
  );
}
