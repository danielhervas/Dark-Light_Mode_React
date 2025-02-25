import type { Route } from "./+types/home";
import "../app.css"; // O donde tengas la configuración de Tailwind

import ThemeToggle from "~/components/ThemeToggle/ThemeToggle";
import UseCard from "~/components/UseCard";
import Bio from "~/components/Bio";
import Personality from "~/components/Personality";
import PainPoints from "~/components/PainPoints";
import Goals from "~/components/Goals";
import UserPersona from "~/components/UserPersona";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="pt-3 pb-3 ps-5 pe-5">

      {/* Ajusta el contenedor del tema y el usuario para que sea responsive */}
      <div className="flex flex-wrap justify-between items-center">
        <UserPersona />
        <ThemeToggle />
      </div>

      {/* Ajuste de la grid para que sea responsiva */}
      <div className="flex justify-center mt-10">
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
          style={{ gridTemplateRows: 'repeat(2, 1fr)', minHeight: '600px', minWidth: '500px', maxWidth: '1200px' }}
        >
          {/* UseCard ocupa toda una columna en dispositivos pequeños */}
          <div className="col-span-1 row-span-2 h-full">
            <UseCard />
          </div>

          {/* Estos elementos también deben ser responsivos */}
          <Bio />
          <Personality />
          <PainPoints />
          <Goals />
        </div>
      </div>
    
    </div>
  );
}
