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
import { FaDatabase, FaCode, FaJava  } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { SkillCategory } from "./skillCategory";

export const Skills = () => {
  return (
    <section id="skills" className="text-white w-full">
      <SectionTitle
        subtitle="Algumas das minhas principais habilidades em desenvolvimento Full-Stack e arquitetura de software."
        title="Habilidades"
      />

      <div className="flex flex-col gap-10 mt-12">
        <SkillCategory
          title="Linguagens"
          skills={[
            { title: "JavaScript", icon: <SiJavascript /> },
            { title: "TypeScript", icon: <SiTypescript /> },
            { title: "Java", icon: <FaJava /> },
            { title: "C#", icon: <TbBrandCSharp /> },
            { title: "Python", icon: <SiPython /> },
            { title: "HTML", icon: <SiHtml5 /> },
          ]}
        />
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
        <SkillCategory
          title="Estilização"
          skills={[
            { title: "Tailwind CSS", icon: <SiTailwindcss /> },
            { title: "CSS", icon: <SiCss3 /> },
            { title: "Styled Components", icon: <SiStyledcomponents /> },
          ]}
        />
        <SkillCategory
          title="Banco de Dados"
          skills={[
            { title: "MySQL", icon: <SiMysql /> },
            { title: "PostgreSQL", icon: <SiPostgresql /> },
            { title: "MongoDB", icon: <SiMongodb /> },
            { title: "Redis", icon: <SiRedis /> },
          ]}
        />
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
        <SkillCategory
          title="DevOps & Mensageria"
          skills={[
            { title: "Docker", icon: <SiDocker /> },
            { title: "Kubernetes", icon: <SiKubernetes /> },
            { title: "RabbitMQ", icon: <SiRabbitmq /> },
            { title: "Kafka", icon: <SiApachekafka /> },
          ]}
        />
        <SkillCategory
          title="Ferramentas & Testes"
          skills={[
            { title: "Figma", icon: <SiFigma /> },
            { title: "Jest", icon: <SiJest /> },
          ]}
        />
      </div>
    </section>
  );
};


