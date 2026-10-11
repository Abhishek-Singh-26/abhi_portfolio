import type { SectionId } from "../store/portfolioSlice";

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  points: string[];
  tags: string[];
}

export interface EducationItem {
  year: string;
  degree: string;
  college: string;
  work: string;
  extra?: string;
}

export interface Project {
  title: string;
  description: string;
  highlights: string[];
  tags: string[];
  preview: "portfolio" | "tasks" | "password";
  featured?: boolean;
  live?: string;
  repo?: string;
}

export interface SocialLink {
  href: string;
  icon: string;
  alt: string;
}

export const profile = {
  name: "Abhishek Singh",
  role: "Frontend Developer",
  photo: "/abhi.png",
  email: "abhitapu100@gmail.com",
  phone: { href: "tel:+916395274947", label: "+91 63952-74947" },
  location: "Delhi, India",
  intro:
    "I build responsive, user-friendly interfaces with React.js and TypeScript, turning UI designs into fast, polished web experiences.",
};

export const rotatingWords = [
  "React interfaces",
  "TypeScript apps",
  "responsive layouts",
];

export const socialLinks: SocialLink[] = [
  {
    href: "https://www.linkedin.com/in/abhishek-singh-51b223231/",
    icon: "https://www.svgrepo.com/show/204944/linkedin.svg",
    alt: "LinkedIn",
  },
  {
    href: "https://x.com/Draggo_Abhi",
    icon: "https://simpleicons.org/icons/x.svg",
    alt: "X",
  },
  {
    href: "https://github.com/Abhishek-Singh-26",
    icon: "https://simpleicons.org/icons/github.svg",
    alt: "GitHub",
  },
];

export const navItems: { id: SectionId; label: string }[] = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "portfolio", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const about = [
  "I'm a frontend developer with professional experience building responsive web interfaces using HTML, CSS, JavaScript and React.js. I translate UI designs into functional interfaces, build reusable components, implement responsive layouts and improve navigation and overall user experience.",
  "Beyond the frontend, I have a strong foundation in JavaScript, TypeScript, SQL, C++ and OOP, along with experience in CMS workflows, data research and technical support systems.",
];

export const experience: ExperienceItem[] = [
  {
    company: "Tech Mahindra Ltd.",
    role: "Trainee-Associate",
    period: "Mar 2026 - Sept 2026",
    location: "Remote",
    points: [
      "Worked with tech-enabled customer support systems, digital communication platforms and structured process workflows.",
      "Used CRM tools, workflow systems and performance dashboards to manage and monitor customer-related processes.",
      "Supported process improvement through data observation, issue pattern analysis and structured problem-solving.",
    ],
    tags: ["CRM tools", "Workflow systems", "Dashboards", "Problem-solving"],
  },
  {
    company: "TYCTO Infocom",
    role: "Frontend Developer",
    period: "Jan 2025 - Feb 2026",
    location: "Remote",
    points: [
      "Developed responsive and user-friendly web interfaces using HTML, CSS, JavaScript and React.js.",
      "Converted UI designs into functional web pages while maintaining responsive layouts and cross-browser compatibility.",
      "Improved website layouts, navigation and interface structure to deliver a clearer, more user-friendly experience.",
    ],
    tags: ["React.js", "JavaScript", "HTML", "CSS"],
  },
  {
    company: "CollegeDunia",
    role: "Data Research Intern",
    period: "Jan 2024 - May 2024",
    location: "Remote",
    points: [
      "Conducted structured research and validation of college and educational datasets while maintaining data accuracy.",
      "Managed researched information through a CMS-based backend workflow for publishing data to the web platform.",
      "Worked with HTML, CSS, data research and prompt engineering as part of web-content workflows.",
    ],
    tags: ["CMS", "Data research", "HTML", "CSS", "Prompt engineering"],
  },
];

const si = (name: string) => `https://simpleicons.org/icons/${name}.svg`;

export const techSkills: Skill[] = [
  { name: "React.js", icon: si("react") },
  { name: "TypeScript", icon: si("typescript") },
  { name: "JavaScript", icon: si("javascript") },
  { name: "Redux", icon: si("redux") },
  { name: "Tailwind CSS", icon: si("tailwindcss") },
  { name: "Vite", icon: si("vite") },
  { name: "HTML5", icon: si("html5") },
  { name: "CSS3", icon: si("css") },
  { name: "Git", icon: si("git") },
  { name: "GitHub", icon: si("github") },
];

export const skillGroups: SkillGroup[] = [
  { title: "Programming & CS", items: ["C++", "OOP", "SQL", "Computer Networks"] },
  { title: "Web Development", items: ["Responsive Web Design", "UI Development"] },
  {
    title: "Professional",
    items: ["Problem-Solving", "Analytical Thinking", "Team Collaboration", "Communication"],
  },
];

export const education: EducationItem[] = [
  {
    year: "Aug 2020 - Aug 2024",
    degree: "Bachelor of Engineering [CSE]",
    college: "Chandigarh University, Gharuan (Mohali, Punjab)",
    work: "Focused on FullStack, Data Structures & Algorithm",
    extra: "CGPA: 8.26 / 10",
  },
  {
    year: "2019 - 2020",
    degree: "Intermediate [CBSE]",
    college: "Simpkins School, Agra",
    work: "Completed my intermediate with PCM & CS",
  },
  {
    year: "2017 - 2018",
    degree: "Matriculation [CBSE]",
    college: "G.D Goenka Public School, Agra",
    work: "Completed my Matriculation",
  },
];

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "This very site: an animated, fully responsive developer portfolio, rebuilt from plain HTML/CSS into a modern React app.",
    highlights: [
      "Global UI state (active section, mobile menu, open experience card) managed with Redux Toolkit.",
      "Scroll-driven animations, page transitions and 3D hover effects built with Motion.",
      "Mobile-first responsive layout styled with Tailwind CSS and bundled with Vite.",
    ],
    tags: ["React.js", "TypeScript", "Redux", "Tailwind CSS", "Vite"],
    preview: "portfolio",
    featured: true,
  },
  {
    title: "Task Manager",
    description:
      "A responsive task management app built with a reusable, component-based React architecture.",
    highlights: [
      "CRUD operations with persistent browser storage using Local Storage and React state management.",
      "Applied React best practices to minimize unnecessary re-renders and improve performance.",
    ],
    tags: ["React.js", "HTML", "CSS", "Local Storage"],
    preview: "tasks",
  },
  {
    title: "Password Generator",
    description:
      "A configurable password generator with a dynamic, state-driven React interface.",
    highlights: [
      "Conditional logic based on the user-selected password length and generation parameters.",
    ],
    tags: ["React.js", "HTML", "CSS"],
    preview: "password",
  },
];
