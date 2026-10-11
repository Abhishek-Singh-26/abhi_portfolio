import { useEffect } from "react";
import { useAppDispatch } from "../store/hooks";
import { setActiveSection, type SectionId } from "../store/portfolioSlice";

export function useScrollSpy(ids: SectionId[]) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            dispatch(setActiveSection(entry.target.id as SectionId));
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [dispatch, ids]);
}
