
"use client";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export const ProjectCardTechs = ({ techs }: { techs: string[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-2">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 transition-colors cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="text-sm font-medium text-white">Main Stack</span>
        <IoIosArrowDown
          className={`text-white text-lg transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`grid grid-cols-2 sm:flex flex-wrap gap-2 text-xs transition-all duration-300 overflow-hidden ${
          isOpen ? "opacity-100 max-h-40" : "opacity-0 max-h-40"
        }`}
      >
        {techs.map((item, index) => (
          <div
            key={item + index}
            className="border border-cyan-500 text-cyan-300  px-3 py-1 rounded-xl whitespace-nowrap"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
