import { MdEmail } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { SectionTitle } from "../ui/SectionTitle";
import { ContactLink } from "./contactItem";

export const Contact = () => {
  return (
    <section
      className="text-white text-center w-full  py-10"
      id="contact"
    >
      <SectionTitle title="Entre em Contato" />

      <div className="flex flex-col gap-6 mt-10 lg:flex-row lg:justify-center">
        <ContactLink
          Icon={IoLogoLinkedin}
          text="LinkedIn"
          path="@james-marques"
          link="https://www.linkedin.com/in/james-marques-48828422b/"
        />
        <ContactLink
          Icon={MdEmail}
          text="Email"
          link="mailto:jamzmarks@gmail.com"
          path="jamzmarks@gmail.com"
        />
        
        <ContactLink
          Icon={FaGithub}
          text="GitHub"
          path="JamzMarks"
          link="https://github.com/JamzMarks"
        />
      </div>
    </section>
  );
};


