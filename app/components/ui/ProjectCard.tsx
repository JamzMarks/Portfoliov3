import Image from "next/image";
import Link from "next/link";
import { ProjectCardTechs } from "./ProjectCardTech";
import { FaGithub } from "react-icons/fa";
export interface ProjectCardProps {
  title: string;
  imageUrl: string;
  description: string;
  link: string;
  techs: string[];
}

export const ProjectCard = ({
  title,
  description,
  imageUrl,
  link,
  techs,
}: ProjectCardProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  justify-center min-h-60 gap-4">
      <div className="relative lg:w-full min-h-[200px] h-full">
        <Image
          className="object-cover w-full rounded-xl min-h-20"
          src={imageUrl}
          alt={title}
          fill
        />
      </div>

      <div className="flex flex-col gap-4 px-4 text-left">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-sm text-gray-400">{description}</p>
        <ProjectCardTechs techs={techs} />
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className=" w-fit px-4 py-2 rounded-md bg-black text-white text-sm font-medium hover:bg-cyan-900 transition-colors flex gap-2 items-center"
        >
          <FaGithub/> Ver no Github
        </Link>
      </div>
    </div>
  );
};

