import Image from "next/image";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { Contact } from "./components/contact/contact";
import { About } from "./components/about";
import { Projects } from "./components/projects/projects";
import { Skills } from "./components/skills/skills";
import { Experience } from "./components/experience/experience";
export default function Home() {
  return (
    <div className="flex flex-col gap-[80px] items-center sm:items-start">

      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

