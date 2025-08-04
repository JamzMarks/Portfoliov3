
import { SectionTitle } from "../ui/SectionTitle";
import { GrProjects } from "react-icons/gr";
import { ProjectsSwiper } from "./ProjectsSwiper";

export const Projects = () => {
  return (
    <section id="projects" className="w-full py-10 text-white text-center scroll-mt-30">
      <SectionTitle title="Projetos" Icon={GrProjects} />

      {/* <ProjectsSwiper /> */}
    </section>
  );
};
