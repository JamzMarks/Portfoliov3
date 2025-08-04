"use client";
import { SectionTitle } from "../ui/SectionTitle";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiHtml5,
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiNestjs,
  SiExpress,
  SiSpring,
  SiTailwindcss,
  SiCss3,
  SiStyledcomponents,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiGraphql,
  SiPrisma,
  SiWebpack,
  SiDocker,
  SiKubernetes,
  SiRabbitmq,
  SiApachekafka,
  SiFigma,
  SiJest,
} from "react-icons/si";
import { FaDatabase, FaCode, FaJava } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { SkillCategory } from "./skillCategory";
import { useState } from "react";
import { SkillsWrapper } from "./skillsWrapper";
import { IoCodeSlash } from "react-icons/io5";
import { motion } from "framer-motion";

export const Skills = () => {
  const [skills, setSkills] = useState<string>("lang");
  const tabs = [
    { id: "lang", label: "Linguagem" },
    { id: "frame", label: "Framework" },
    { id: "tool", label: "Ferramenta" },
    { id: "db", label: "Banco de Dados" },
    { id: "api", label: "API" },
    { id: "devops", label: "DevOps" },
    { id: "styles", label: "Estilização" },
  ];
  return (
    <motion.section
      id="skills"
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="text-white w-full scroll-mt-30 py-10"
    >
      <SectionTitle
        // subtitle="Algumas das minhas principais ferramentas e habilidades em desenvolvimento Full-Stack e arquitetura de software."
        title="Principais Habilidades"
        Icon={IoCodeSlash}
      />

      <div className="flex flex-col gap-8 mt-6">
        <div>
          <ul className="flex justify-around lg:justify-evenly sm:flex-row flex-wrap gap-2 sm:gap-4 text-sm ">
            {tabs.map((tab) => (
              <li key={tab.id}>
                <button
                  onClick={() => setSkills(tab.id)}
                  className={` cursor-pointer z-10
                relative px-4 py-2 text-left sm:text-center
                text-gray-400 transition-colors duration-200
                hover:text-white
                before:absolute before:left-0 before:bottom-0
                before:w-0 before:h-[2px] before:bg-cyan-500 before:transition-all
                sm:before:left-1/2 sm:before:transform sm:before:-translate-x-1/2 before:z-0
                

                ${
                  skills === tab.id
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
        <div>
          {skills === "lang" && (
            <SkillsWrapper name="lang">
              <SkillCategory
                title="Linguagens"
                skills={[
                  { title: "JavaScript", icon: <SiJavascript /> },
                  { title: "TypeScript", icon: <SiTypescript /> },
                  { title: "Java", icon: <FaJava /> },
                  { title: "Python", icon: <SiPython /> },
                  { title: "HTML", icon: <SiHtml5 /> },
                  { title: "C#", icon: <TbBrandCSharp /> },
                ]}
              />
            </SkillsWrapper>
          )}
          {skills === "frame" && (
            <SkillsWrapper name="frame">
              <SkillCategory
                title="Frameworks & Bibliotecas"
                skills={[
                  { title: "React", icon: <SiReact /> },
                  { title: "Next.js", icon: <SiNextdotjs /> },
                  { title: "Angular", icon: <SiAngular /> },
                  { title: "NestJS", icon: <SiNestjs /> },
                  { title: "Express", icon: <SiExpress /> },
                  { title: "Spring Boot", icon: <SiSpring /> },
                ]}
              />
            </SkillsWrapper>
          )}
          {skills === "tool" && (
            <SkillsWrapper name="tool">
              <SkillCategory
                title="Ferramentas & Testes"
                skills={[
                  { title: "Figma", icon: <SiFigma /> },
                  { title: "Jest", icon: <SiJest /> },
                ]}
              />
            </SkillsWrapper>
          )}
          {skills === "styles" && (
            <SkillsWrapper name="styles">
              <SkillCategory
                title="Estilização"
                skills={[
                  { title: "Tailwind CSS", icon: <SiTailwindcss /> },
                  { title: "Styled Components", icon: <SiStyledcomponents /> },
                  { title: "CSS", icon: <SiCss3 /> },
                ]}
              />
            </SkillsWrapper>
          )}
          {skills === "api" && (
            <SkillsWrapper name="api">
              <SkillCategory
                title="APIs & Orquestração"
                skills={[
                  { title: "REST", icon: <FaCode /> },
                  { title: "GraphQL", icon: <SiGraphql /> },
                  { title: "Prisma", icon: <SiPrisma /> },
                  { title: "TypeORM", icon: <FaDatabase /> },
                  { title: "Webpack", icon: <SiWebpack /> },
                ]}
              />
            </SkillsWrapper>
          )}
          {skills === "devops" && (
            <SkillsWrapper name="devops">
              <SkillCategory
                title="DevOps & Mensageria"
                skills={[
                  { title: "Docker", icon: <SiDocker /> },
                  { title: "Kubernetes", icon: <SiKubernetes /> },
                  { title: "RabbitMQ", icon: <SiRabbitmq /> },
                  { title: "Kafka", icon: <SiApachekafka /> },
                ]}
              />
            </SkillsWrapper>
          )}
          {skills === "db" && (
            <SkillsWrapper name="db">
              <SkillCategory
                title="Banco de Dados"
                skills={[
                  { title: "MySQL", icon: <SiMysql /> },
                  { title: "PostgreSQL", icon: <SiPostgresql /> },
                  { title: "MongoDB", icon: <SiMongodb /> },
                  { title: "Redis", icon: <SiRedis /> },
                ]}
              />
            </SkillsWrapper>
          )}
        </div>
      </div>
    </motion.section>
  );
};
