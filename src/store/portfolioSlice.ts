import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { experience } from "../data/portfolio";

export type SectionId =
  | "home"
  | "about"
  | "experience"
  | "skills"
  | "portfolio"
  | "education"
  | "contact";

interface PortfolioState {
  activeSection: SectionId;
  expandedExperience: string | null;
  menuOpen: boolean;
}

const initialState: PortfolioState = {
  activeSection: "home",
  expandedExperience:
    experience.find((e) => e.role === "Frontend Developer")?.company ?? null,
  menuOpen: false,
};

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    setActiveSection(state, action: PayloadAction<SectionId>) {
      state.activeSection = action.payload;
    },
    toggleExperience(state, action: PayloadAction<string>) {
      state.expandedExperience =
        state.expandedExperience === action.payload ? null : action.payload;
    },
    toggleMenu(state) {
      state.menuOpen = !state.menuOpen;
    },
    closeMenu(state) {
      state.menuOpen = false;
    },
  },
});

export const { setActiveSection, toggleExperience, toggleMenu, closeMenu } =
  portfolioSlice.actions;
export default portfolioSlice.reducer;
