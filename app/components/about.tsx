import Image from "next/image";
import { FaFileDownload } from "react-icons/fa";


export const About = () => {
  return (
    <div
      className="text-white text-center w-full h-full md:grid md:grid-cols-2 md:items-center"
      id="about"
    >
      <Image
        alt="computer animation"
        src="/prog-animated.gif"
        width={450}
        height={450}
        className="mx-auto"
      />
      <div className="md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre Mim</h2>
        <p className="mb-10 text-gray-300 lg:max-w-md text-justify ">
          Sou um Desenvolvedor Full Stack apaixonado por criar produtos digitais escaláveis com foco em arquitetura de software robusta, cloud e boas práticas de engenharia. Meu objetivo é transformar ideias em soluções de alto impacto, seguras, performáticas e preparadas para crescer, combinando design limpo, integração contínua e uma mentalidade orientada à evolução constante.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors">
          <a
            href="/resume/resumePT.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-items-center items-center gap-2 align-middle"
          >
            <FaFileDownload className="self-center"></FaFileDownload>
            Baixar CV
          </a>
        </button>
      </div>
    </div>
  );
};
