"use client";

import Image from "next/image";
import { FaFileDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export const About = () => {
  return (
    <section
      className="text-white text-center w-full h-full md:grid md:grid-cols-2 md:items-center gap-6 scroll-mt-30"
      id="about"
    >
      <Image
        alt="computer animation"
        src="/prog-animated.gif"
        width={450}
        height={450}
        className="mx-auto"
      />

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="md:text-left"
      >
        <h2 className="text-3xl md:text-2xl font-medium mb-6">Sobre Mim</h2>

        <p className="mb-10 text-gray-300 text-sm">
          Sou um Desenvolvedor Full Stack apaixonado por criar produtos digitais
          escaláveis com foco em arquitetura de software robusta, cloud e boas
          práticas de engenharia. <br/> Meu objetivo é transformar ideias em soluções
          de alto impacto, seguras, performáticas e preparadas para crescer,
          combinando design limpo, integração contínua e uma mentalidade
          orientada à evolução constante.
        </p>
        <div className="flex items-center gap-4 text-sm">
          <p>Baixe o meu Curriculo:</p>
          <div className="flex flex-row justify-evenly gap-4">
            <CvButton title="PT" path="resumePT" />
            <CvButton title="EN" path="resumeEN" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

interface CvButtonProps {
  title: string;
  path: string;
}

const CvButton = ({ title, path }: CvButtonProps) => {
  return (
    <motion.a
      href={`/resume/${path}.pdf`}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-flex items-center gap-2 rounded-full border border-cyan-400 text-cyan-400 px-5 py-1 font-medium text-sm hover:bg-cyan-600 hover:text-white transition-colors duration-300 shadow-md hover:shadow-cyan-500/30"
    >
      <FaFileDownload className="transition-transform duration-300 group-hover:-rotate-12" />
      {title}
    </motion.a>
  );
};
