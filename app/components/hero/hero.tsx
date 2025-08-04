"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { HeroBtn } from "./heroBtn";

export const Hero = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-center px-4 md:px-0 text-white py-10 lg:py-20"
      id="hero"
    >
      {/* Redes Sociais */}
      <div className="flex flex-col gap-6 absolute left-4 md:left-8 top-1/6 md:top-1/3">
        <Link href="https://www.linkedin.com/in/james-marques-48828422b//" target="_blank">
          <FaLinkedinIn size={20} className="hover:text-cyan-500 transition" />
        </Link>
        <Link href="https://www.instagram.com/jamzmarks" target="_blank">
          <FaInstagram size={20} className="hover:text-cyan-500 transition" />
        </Link>
        <Link href="https://github.com/JamzMarks" target="_blank">
          <FaGithub size={20} className="hover:text-cyan-500 transition" />
        </Link>
      </div>

      {/* Avatar */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-6"
      >
        <div className="relative w-40 h-40 rounded-full bg-cyan-700 flex items-center justify-center">
          <Image
            src="/me.jpg" // Substitua pelo seu arquivo Memoji
            alt="James Marques Avatar"
            fill
            className="rounded-full object-cover"
          />
        </div>
      </motion.div>

      {/* Texto */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-xl md:text-4xl font-semibold mb-2"
      >
        Olá, eu sou o James!
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg md:text-2xl text-gray-300 mb-4"
      >
        <Typewriter
          words={[
            "Desenvolvedor FullStack",
            "Software Engineer",
            "Software Architect",
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={30}
          deleteSpeed={20}
          delaySpeed={1500}
        />
      </motion.h2>

      {/* <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-md text-gray-400 mb-8 text-sm"
      >
        Transformando códigos em soluções, apaixonado por desafios e inovação.
      </motion.p> */}
      <HeroBtn />
    </section>
  );
};
