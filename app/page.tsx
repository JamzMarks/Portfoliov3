import { Contact } from "./components/contact/contact";
import { About } from "./components/about";
import { Projects } from "./components/projects/projects";
import { Skills } from "./components/skills/skills";
import { Experience } from "./components/experience/experience";
import { Hero } from "./components/hero/hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="overflow-x-hidden mb-20 lg:mb-10">
        <About />
      </div>
      <div className="flex flex-col gap-[80px] items-center sm:items-start">
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
