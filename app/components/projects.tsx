import Image from "next/image";
import Link from "next/link";
import { SectionTitle } from "./ui/SectionTitle";

export const Projects = () => {
  return (
    <div
      id="projects"
      className="text-white text-center w-full h-full"
    >
      <SectionTitle title="Projetos" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <ProjectCard
          title="Projeto Exemplo"
          description="Este é um projeto de exemplo que demonstra minhas habilidades em desenvolvimento web."
          imageUrl="/a.png"
          link="#"
        />
        <ProjectCard
          title="Projeto Exemplo"
          description="Este é um projeto de exemplo que demonstra minhas habilidades em desenvolvimento web."
          imageUrl="/a.png"
          link="#"
        />
        <ProjectCard
          title="Projeto Exemplo"
          description="Este é um projeto de exemplo que demonstra minhas habilidades em desenvolvimento web."
          imageUrl="/a.png"
          link="#"
        />
      </div>
    </div>
  );
};

interface ProjectCardProps {
  title: string;
  imageUrl: string;
  description: string;
  link: string;
}

const ProjectCard = ({
  title,
  description,
  imageUrl,
  link,
}: ProjectCardProps) => {
  return (
    <Link
      href={link}
      className="flex flex-col overflow-hidden rounded-lg border border-gray-700 bg-gray-900 hover:bg-gray-800 transition-colors duration-200"
    >
      <Image
        className="object-cover w-full h-48"
        src={imageUrl}
        alt={title}
        width={640}
        height={320}
      />
      <div className="p-4 text-left">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </Link>
  );
};
