import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { profile, socialLinks } from "../data/portfolio";
import { ease } from "../lib/motion";
import Magnetic from "./ui/Magnetic";
import Reveal from "./ui/Reveal";
import SpotlightCard from "./ui/SpotlightCard";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 py-24">
      <Reveal>
        <SpotlightCard className="px-6 py-16 text-center md:px-16 md:py-24">
          <h2 className="mx-auto max-w-3xl font-display text-[clamp(2.5rem,7vw,5rem)] font-bold leading-[1.02] tracking-tight text-heading">
            Let&apos;s build something together.
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-lg">
            Have a project, an opportunity or just want to say hi? My inbox is open.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Magnetic>
              <a
                href={`mailto:${profile.email}`}
                className="inline-block rounded-full bg-accent px-7 py-3.5 font-semibold text-page transition-transform hover:scale-105"
              >
                Send an email
              </a>
            </Magnetic>
            <Magnetic>
              <button
                type="button"
                onClick={copy}
                className="relative inline-flex min-w-40 items-center justify-center overflow-hidden rounded-full border border-line px-7 py-3.5 font-semibold text-heading transition-colors hover:border-accent"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={copied ? "done" : "idle"}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.2, ease }}
                    className={copied ? "text-accent" : ""}
                  >
                    {copied ? "Copied!" : "Copy email"}
                  </motion.span>
                </AnimatePresence>
              </button>
            </Magnetic>
          </div>

          <p className="mt-8 text-sm">{profile.email}</p>

          <div className="mt-8 flex items-center justify-center gap-5">
            {socialLinks.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noreferrer" aria-label={l.alt}>
                <img src={l.icon} alt="" className="icon-social size-6" />
              </a>
            ))}
          </div>
        </SpotlightCard>
      </Reveal>
    </section>
  );
}
