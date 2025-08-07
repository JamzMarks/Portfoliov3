"use client";
import { SectionTitle } from "../ui/SectionTitle";
import { GrProjects } from "react-icons/gr";
import { ProjectCard, ProjectCardProps } from "../ui/ProjectCard";
import { useState } from "react";
import { ProjectsSwiper } from "./ProjectsSwiper";

const tabs = [
  { id: "acad", label: "Acadêmicos" },
  { id: "personal", label: "Pessoais" },
  { id: "professional", label: "Profissionais" },
];
const academicProjects: ProjectCardProps[] = [
  {
    title: "Smart Traffic Light",
    description:
      "Sistema inteligente de semáforos desenvolvido com YOLO para detecção de veículos e ajuste dinâmico dos tempos de sinalização. Integração com serviços em nuvem AWS e dispositivos IoT para coleta de dados e otimização em tempo real.",
    imageUrl: "/projects/a.png",
    link: "https://github.com/JamzMarks/YOLOPresentation",
    techs: ["Python", "AWS", "IoT", "Arduino", "YOLO", "Unity", "C#"],
    onGoing: true,
  },
  {
    title: "Trash Killer 2",
    description:
      "Jogo multiplayer e multiplataforma desenvolvido em Unity com integração Photon para comunicação em tempo real. Foco em mecânicas cooperativas e competitivas para coleta e descarte correto de resíduos virtuais.",
    imageUrl: "/projects/trashkiller.png",
    link: "https://github.com/JamzMarks/TrashKiller2",
    techs: ["C#", "Unity", "Photon"],
  },
  {
    title: "Arduino Line Follower",
    description:
      "Robô seguidor de linha programado em C++ para Arduino, equipado com sensores ópticos para detecção de trajetos, sensor de proximidade para parada e sistema de sinalização com LEDs para indicar estados de operação.",
    imageUrl: "/projects/arduino.jpg",
    link: "https://github.com/JamzMarks/Arduino-Line-Follower",
    techs: ["Arduino", "C++"],
  },
  {
    title: "Zucco Motori - APS1",
    description:
      "Landing page institucional desenvolvida como projeto acadêmico, utilizando HTML, CSS e JavaScript para apresentar informações da marca de forma responsiva, com foco em usabilidade e identidade visual consistente.",
    imageUrl: "/projects/zucco.png",
    link: "https://github.com/JamzMarks/APS---S1",
    techs: ["HTML", "CSS", "JavaScript"],
  },
];
const professionalProjects: ProjectCardProps[] = [
  {
    title: "Portfolio v3",
    description:
      "Terceira versão do meu portfólio pessoal, desenvolvido com Next.js, React e Tailwind CSS. Layout responsivo, design moderno e animações suaves para apresentar projetos e habilidades de forma interativa.",
    imageUrl: "/projects/port2.png",
    link: "https://github.com/JamzMarks/Portfoliov3",
    techs: ["Next.js", "TypeScript", "React", "Tailwind", "CSS"],
  },
  {
    title: "Medusa Pole Studio",
    description:
      "Website institucional desenvolvido para o Medusa Pole Studio, com foco na apresentação dos serviços oferecidos pelo estúdio e comunicação clara com clientes. Implementação com Next.js garantindo performance e SEO.",
    imageUrl: "/projects/a.png",
    link: "https://github.com/JamzMarks/Portfoliov3",
    techs: ["Next.js", "Nest.js", "TypeScript", "React", "Express", "Node"],
    onGoing: true,
  },
  {
    title: "Avanti",
    description:
      "Projeto de teste técnico para a empresa Avanti, com foco em boas práticas de design responsivo e princípios de UI/UX. Implementação de páginas web utilizando HTML, CSS e JavaScript, priorizando performance e acessibilidade.",
    imageUrl: "/projects/avanti.png",
    link: "https://github.com/JamzMarks/Avanti",
    techs: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "eCatalogos - Backend",
    description:
      "Backend desenvolvido para gerenciamento e consumo de catálogos de produtos, incluindo endpoints para criação, atualização e listagem. Construído com Express, TypeScript e Prisma, documentado com Swagger para integração com outros sistemas.",
    imageUrl: "/projects/a.png",
    link: "https://github.com/JamzMarks/Portfoliov3",
    techs: ["Swagger", "Express", "Node", "TypeScript", "Prisma"],
  },
  {
    title: "Shop.co",
    description:
      "Interface web de e-commerce baseada no design do Shop.co, criada com React e TypeScript. Layout responsivo com estilização em CSS/SCSS, priorizando fidelidade ao design original e experiência de navegação fluida.",
    imageUrl: "/projects/shop.co.png",
    link: "https://github.com/JamzMarks/Portfoliov3",
    techs: ["React", "HTML", "CSS", "SCSS", "TypeScript"],
  },
];
const personalProjects: ProjectCardProps[] = [
  {
    title: "Papirus Front-end and Open Docs",
    description:
      "Interface web e documentação interativa do Papirus, desenvolvidas com Next.js, React e MDX. Estrutura monorepo com Turborepo para otimizar builds e facilitar manutenção entre múltiplos pacotes e aplicações.",
    imageUrl: "/projects/a.png",
    link: "https://github.com/JamzMarks/papirus",
    techs: ["Next.js", "TypeScript", "Turborepo", "React", "MDX"],
    onGoing: true,
  },
  {
    title: "Papirus API",
    description:
      "API robusta para o sistema Papirus, construída com Nest.js e Prisma, documentada via Swagger e integrada à AWS. Suporte a eventos assíncronos com Kafka, testes automatizados com Jest e arquitetura modular escalável.",
    imageUrl: "/projects/programming.png",
    link: "https://github.com/JamzMarks/instruct",
    techs: [
      "Nest.js",
      "TypeScript",
      "Node",
      "Swagger",
      "AWS",
      "Jest",
      "Kafka",
      "Prisma",
    ],
    onGoing: true,
  },
  {
    title: "eClose Front-end and Docs",
    description:
      "Aplicação web de rede social focada na criação e participação em eventos, desde jogos até festas. Desenvolvida com Next.js e React, utilizando Turborepo para organização do monorepo e otimização de performance.",
    imageUrl: "/projects/a.png",
    link: "https://github.com/JamzMarks/eClose-frontend",
    techs: ["Next.js", "TypeScript", "Turborepo", "React"],
    onGoing: true,
  },
  {
    title: "eClose API",
    description:
      "Backend completo do eClose, oferecendo autenticação, gerenciamento de eventos e armazenamento de documentos. Construído com Nest.js e TypeORM, integração AWS, mensageria via Kafka e documentação com Swagger.",
    imageUrl: "/projects/a.png",
    link: "https://github.com/JamzMarks/eclose/tree/main/apps",
    techs: [
      "Nest.js",
      "TypeScript",
      "Node",
      "Swagger",
      "AWS",
      "Jest",
      "Kafka",
      "TypeORM",
    ],
    onGoing: true,
  },
  {
    title: "GitSearch",
    description:
      "Aplicação para pesquisa de usuários no GitHub utilizando a API pública da plataforma. Desenvolvida com Next.js e Tailwind CSS, exibe perfis e estatísticas de forma rápida e responsiva.",
    imageUrl: "/projects/gitsearch.png",
    link: "https://github.com/JamzMarks/GitSearch",
    techs: ["Next.js", "TypeScript", "React", "JavaScript", "CSS", "Tailwind"],
  },
];

export const Projects = () => {
  const [projects, setProjects] = useState<string>("acad");
  return (
    <section
      id="projects"
      className="w-full py-10 text-white text-center scroll-mt-30"
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
          {projects === "acad" && (
            <ProjectsSwiper projects={academicProjects} />
          )}
          {projects === "professional" && (
            <ProjectsSwiper projects={professionalProjects} />
          )}
          {projects === "personal" && (
            <ProjectsSwiper projects={personalProjects} />
          )}
        </div>
      </div>
    </section>
  );
};
