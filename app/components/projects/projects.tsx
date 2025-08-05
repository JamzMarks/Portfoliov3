"use client";
import { SectionTitle } from "../ui/SectionTitle";
import { GrProjects } from "react-icons/gr";
import { ProjectCard, ProjectCardProps } from "../ui/ProjectCard";
import { useState } from "react";

const tabs = [
  { id: "acad", label: "Academicos" },
  { id: "personal", label: "Pessoais" },
  { id: "professional", label: "Profissionais" },
];

const academicProjects: ProjectCardProps[] = [
  {
    title: "Smart Traffic Light",
    description:
      "Meu portfolio pessoal. Meu portfolio pessoal. Meu portfolio pessoal. Meu portfolio pessoal. Meu portfolio pessoal.Meu portfolio pessoal. Meu portfolio pessoal.",
    imageUrl: "/projects/a.png",
    link: "https://github.com/JamzMarks/Portfoliov3",
    techs: ["Next.js", "Nest.js", "TypeScript", "React", "Express", "Node"],
  },
  {
    title: "Trash Killer 2",
    description: "Meu portfolio pessoal.",
    imageUrl: "/projects/a.png",
    link: "https://github.com/JamzMarks/Portfoliov3",
    techs: ["Next.js", "Nest.js", "TypeScript", "React", "Express", "Node"],
  },
  {
    title: "Arduino Line Follower",
    description: "Meu portfolio pessoal.",
    imageUrl: "/projects/a.png",
    link: "https://github.com/JamzMarks/Portfoliov3",
    techs: ["Next.js", "Nest.js", "TypeScript", "React", "Express", "Node"],
  },
];
const professionalProjects: ProjectCardProps[] = [
  {
    title: "Portfolio v3",
    description:
      "Meu portfolio pessoal. Meu portfolio pessoal. Meu portfolio pessoal. Meu portfolio pessoal. Meu portfolio pessoal.Meu portfolio pessoal. Meu portfolio pessoal.",
    imageUrl: "/projects/a.png",
    link: "https://github.com/JamzMarks/Portfoliov3",
    techs: ["Next.js", "Nest.js", "TypeScript", "React", "Express", "Node"],
  },
  {
    title: "Medusa Pole Studio",
    description: "Meu portfolio pessoal.",
    imageUrl: "/projects/a.png",
    link: "https://github.com/JamzMarks/Portfoliov3",
    techs: ["Next.js", "Nest.js", "TypeScript", "React", "Express", "Node"],
  },
  {
    title: "Avanti",
    description: "Meu portfolio pessoal.",
    imageUrl: "/projects/a.png",
    link: "https://github.com/JamzMarks/Portfoliov3",
    techs: ["Next.js", "Nest.js", "TypeScript", "React", "Express", "Node"],
  },
  {
    title: "eCatalogos - Backend",
    description: "Meu portfolio pessoal.",
    imageUrl: "/projects/a.png",
    link: "https://github.com/JamzMarks/Portfoliov3",
    techs: ["Next.js", "Nest.js", "TypeScript", "React", "Express", "Node"],
  },
  {
    title: "Shop.co",
    description:
      "Meu portfolio pessoal. Meu portfolio pessoal. Meu portfolio pessoal. Meu portfolio pessoal. Meu portfolio pessoal.Meu portfolio pessoal. Meu portfolio pessoal.",
    imageUrl: "/projects/a.png",
    link: "https://github.com/JamzMarks/Portfoliov3",
    techs: ["Next.js", "Nest.js", "TypeScript", "React", "Express", "Node"],
  },
];
const personalProjects: ProjectCardProps[] = [
  {
    title: "Papirus Front-end and Docs",
    description:
      "Meu portfolio pessoal. Meu portfolio pessoal. Meu portfolio pessoal. Meu portfolio pessoal. Meu portfolio pessoal.Meu portfolio pessoal. Meu portfolio pessoal.",
    imageUrl: "/projects/a.png",
    link: "https://github.com/JamzMarks/Portfoliov3",
    techs: ["Next.js", "Nest.js", "TypeScript", "React", "Express", "Node"],
  },
  {
    title: "Papirus API",
    description: "Meu portfolio pessoal.",
    imageUrl: "/projects/a.png",
    link: "https://github.com/JamzMarks/Portfoliov3",
    techs: ["Next.js", "Nest.js", "TypeScript", "React", "Express", "Node"],
  },
  {
    title: "eClose",
    description: "Meu portfolio pessoal.",
    imageUrl: "/projects/a.png",
    link: "https://github.com/JamzMarks/Portfoliov3",
    techs: ["Next.js", "Nest.js", "TypeScript", "React", "Express", "Node"],
  },
  {
    title: "Portfolio v3",
    description: "Meu portfolio pessoal.",
    imageUrl: "/projects/a.png",
    link: "https://github.com/JamzMarks/Portfoliov3",
    techs: ["Next.js", "Nest.js", "TypeScript", "React", "Express", "Node"],
  },
  
];
export const Projects = () => {
  const [projects, setProjects] = useState<string>("acad");
  return (
    <section
      id="projects"
      className="w-full py-10 text-white text-center scroll-mt-30 overflow-x-hidden"
    >
      <SectionTitle title="Projetos" Icon={GrProjects} />

      {/* <ProjectsSwiper /> */}
      <div className="w-full flex flex-col gap-8 mt-6">
        <div>
          <ul className="flex justify-around lg:justify-evenly sm:flex-row flex-wrap gap-2 sm:gap-4 text-sm ">
            {tabs.map((tab) => (
              <li key={tab.id}>
                <button
                  onClick={() => setProjects(tab.id)}
                  className={` cursor-pointer z-10
                relative px-4 py-2 text-left sm:text-center
                text-gray-400 transition-colors duration-200
                hover:text-white
                before:absolute before:left-0 before:bottom-0
                before:w-0 before:h-[2px] before:bg-cyan-500 before:transition-all
                sm:before:left-1/2 sm:before:transform sm:before:-translate-x-1/2 before:z-0
                

                ${
                  projects === tab.id
                    ? "text-white font-semibold before:w-full"
                    : "before:w-0"
                }
              `}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-6 justify-center justify-items-center">
          {projects === "acad" &&
            academicProjects.map((item) => (
              <div className="w-3/4 self-center">
                <ProjectCard
                  key={item.link}
                  title={item.title}
                  description={item.description}
                  imageUrl={item.imageUrl}
                  link={item.link}
                  techs={item.techs}
                />
              </div>
            ))}
            {projects === "professional" &&
            professionalProjects.map((item) => (
              <div className="w-3/4 self-center">
                <ProjectCard
                  key={item.link}
                  title={item.title}
                  description={item.description}
                  imageUrl={item.imageUrl}
                  link={item.link}
                  techs={item.techs}
                />
              </div>
            ))}
            {projects === "personal" &&
            personalProjects.map((item) => (
              <div className="w-3/4 self-center">
                <ProjectCard
                  key={item.link}
                  title={item.title}
                  description={item.description}
                  imageUrl={item.imageUrl}
                  link={item.link}
                  techs={item.techs}
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
