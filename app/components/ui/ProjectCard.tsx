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
  onGoing?: boolean;
}

export const ProjectCard = ({
  title,
  description,
  imageUrl,
  link,
  techs,
  onGoing
}: ProjectCardProps) => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
      {/* imagem: parent com position relative + aspect ratio */}
      <div className="relative w-full aspect-[16/9] md:aspect-[4/3] rounded-xl overflow-hidden group">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover w-full h-full transform transition-all duration-500 ease-out group-hover:scale-105 group-hover:brightness-110 brightness-75"
          style={{ objectPosition: "center" }}
        />

        <div className="pointer-events-none absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />

        <div className="pointer-events-none absolute inset-0 mix-blend-screen opacity-0 group-hover:opacity-70 transition-opacity duration-500">
          <div
            className="w-full h-full"
            style={{
              background:
                "radial-gradient(400px 200px at 40% 30%, rgba(255,255,255,0.08), transparent 40%)",
            }}
          />
        </div>
      </div>

      <div className="flex flex-col justify-between gap-4 px-2 py-1 text-left">
        <div className="space-y-4">
          <div className="space-y-1">
            <h3 className="text-xl font-semibold text-white">{title} </h3>
            {onGoing && <span className="text-xs text-cyan-500 underline">Em andamento</span>}
          </div>
          <p className="text-sm text-gray-400">{description}</p>

        </div>
        <div>
          <ProjectCardTechs techs={techs} />
        </div>
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit px-4 py-2 rounded-md bg-black text-white text-sm font-medium hover:bg-cyan-900 transition-colors flex gap-2 items-center"
        >
          <FaGithub /> Ver no Github
        </Link>
      </div>
    </div>
  );
};
