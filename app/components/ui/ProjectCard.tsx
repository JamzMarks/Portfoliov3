import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  imageUrl: string;
  description: string;
  link: string;
}

export const ProjectCard = ({
  title,
  description,
  imageUrl,
  link,
}: ProjectCardProps) => {
  return (
    <div className="grid grid-cols-2 max-w-3/4 justify-center">
      <div className="relative w-full h-full">
        <Image
          className="object-cover w-full h-48 rounded-xl"
          src={imageUrl}
          alt={title}
          fill
        />
      </div>

      <div className="flex flex-col gap-4 px-4 text-left">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="text-sm text-gray-400">{description}</p>

        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-fit px-4 py-2 rounded-full bg-cyan-600 text-white text-sm font-medium hover:bg-cyan-500 transition-colors"
        >
          Ver Projeto
        </Link>
      </div>
    </div>
  );
};
