import { AnimatePresence, MotionConfig } from "motion/react";
import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import CursorGlow from "./components/CursorGlow";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Loader from "./components/Loader";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import ScrollProgress from "./components/ScrollProgress";
import Skills from "./components/Skills";
import { navItems } from "./data/portfolio";
import { useScrollSpy } from "./hooks/useScrollSpy";
import type { SectionId } from "./store/portfolioSlice";

const sectionIds: SectionId[] = ["home", ...navItems.map((i) => i.id)];

export default function App() {
  const [ready, setReady] = useState(false);
  useScrollSpy(sectionIds);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 1500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    document.body.style.overflow = ready ? "" : "hidden";
  }, [ready]);

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence>{!ready && <Loader key="loader" />}</AnimatePresence>
      <ScrollProgress />
      <CursorGlow />
      <Navbar />

      <Hero ready={ready} />
      <Marquee />

      <main className="mx-auto max-w-6xl overflow-x-clip px-5 md:px-8">
        <About />
        <Experience />
        <Skills />
        <Portfolio />
        <Education />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
