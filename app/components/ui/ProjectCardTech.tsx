"use client";
import { FC } from "react";

interface ProjectCardTechsProps {
  techs: string[];
}

export const ProjectCardTechs: FC<ProjectCardTechsProps> = ({ techs }) => {
  return (
    <div className="space-y-2">
      <p className="block text-sm">Principais Tecnologias:</p>
      <div className="flex flex-wrap gap-2">
        {techs.map((item, index) => (
          <span
            key={item + index}
            className="border border-cyan-500 text-cyan-300 bg-neutral-900/60 hover:bg-neutral-800/80 transition-colors px-3 py-1 rounded-xl text-xs font-medium whitespace-nowrap shadow-sm shadow-cyan-500/20"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};
