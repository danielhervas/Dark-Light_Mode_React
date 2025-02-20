import type { Route } from "./+types/home";
import ThemeToggle from "~/components/ThemeToggle/ThemeToggle";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <ThemeToggle />
    </div>
  );
}
