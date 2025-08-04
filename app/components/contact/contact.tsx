import { MdEmail } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { SectionTitle } from "../ui/SectionTitle";
import { ContactLink } from "./contactItem";

export const Contact = () => {
  return (
    <section
      className="text-white text-center w-full scroll-mt-30 py-10"
      id="contact"
    >
      <SectionTitle title="Entre em Contato" />

      <div className="flex flex-col gap-6 mt-10 lg:flex-row lg:justify-center">
        <ContactLink
          Icon={MdEmail}
          text="Email"
          link="mailto:jamzmarks@gmail.com"
          path="jamzmarks@gmail.com"
        />
        <ContactLink
          Icon={IoLogoLinkedin}
          text="LinkedIn"
          path="@james-marques"
          link="https://www.linkedin.com/in/james-marques-48828422b/"
        />
        <ContactLink
          Icon={FaGithub}
          text="GitHub"
          path="JamzMarks"
          link="https://github.com/JamzMarks"
        />
        <ContactLink
          Icon={FaInstagram}
          text="Instagram"
          path="JamzMarks"
          link="https://www.instagram.com/jamzmarks/"
        />
      </div>
    </section>
  );
};


