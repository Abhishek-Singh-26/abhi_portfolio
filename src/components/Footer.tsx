import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-line py-8 text-center text-sm">
      <p>
        &copy; {new Date().getFullYear()} {profile.name}. Built with React, TypeScript, Redux, Tailwind &amp; Vite.
      </p>
    </footer>
  );
}
