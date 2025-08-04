'use client';
import { useState } from "react";
import Link from "next/link";
import {
  FaUser,
  FaCode,
  FaBriefcase,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { IoHomeSharp } from "react-icons/io5";

const Links = [
  { href: "#hero", label: "Home", icon: <IoHomeSharp /> },
  { href: "#about", label: "Sobre", icon: <FaUser /> },
  { href: "#skills", label: "Skills", icon: <FaCode /> },
  { href: "#experience", label: "Experiência", icon: <FaBriefcase /> },
  { href: "#projects", label: "Projetos", icon: <FaProjectDiagram /> },
  { href: "#contact", label: "Contato", icon: <FaEnvelope /> },
];
import { RiCodeSSlashFill } from "react-icons/ri";
import { RiCodeFill } from "react-icons/ri";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className="w-full h-full max-w-7xl mx-auto flex bg-neutral-950 lg:bg-transparent justify-between items-center px-4 py-3 z-50  fixed top-0 left-0 right-0 shadow-md">
      <a href="/" className="text-lg font-medium text-white flex items-center gap-2">
       <RiCodeFill className="text-cyan-500"/> James Marques <RiCodeSSlashFill className="text-cyan-500"/>
      </a>

      {/* Menu desktop */}
      <ul className="hidden md:flex space-x-6">
        {Links.map(({ href, label }) => (
          <LinkItem key={href} href={href}>
            {label}
          </LinkItem>
        ))}
      </ul>

      {/* Botão hamburger mobile */}
      <button
        type="button"
        onClick={toggleMenu}
        className="md:hidden text-white focus:outline-none cursor-pointer "
        aria-label="Toggle menu"
      >
        {menuOpen ? <MdClose size={24} /> : <RxHamburgerMenu size={24} />}
      </button>

      {/* Menu mobile */}
      {menuOpen && (
        <ul className="absolute top-full left-0 w-full bg-neutral-950 flex flex-col items-start px-4 py-4 md:hidden shadow-lg z-[1000]">
          {Links.map(({ href, label, icon }) => (
            <li key={href} className="w-full mb-3 last:mb-0">
              <Link
                href={href}
                className="flex items-center gap-3 text-gray-300 hover:text-cyan-500"
                onClick={() => setMenuOpen(false)} // fecha menu ao clicar
              >
                <span className="text-cyan-500">{icon}</span> {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};


export default Navbar;

const LinkItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link href={href} className="text-gray-400 hover:text-cyan-500 text-sm">
      {children}
    </Link>
  </li>
);
