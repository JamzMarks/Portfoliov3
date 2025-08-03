import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { SectionTitle } from "./ui/SectionTitle";

export const Contact = () => {
  return (
    <div className="text-white text-center w-full h-full" id="contact">
      <SectionTitle
        // subtitle="Se tiver alguma pergunta ou proposta, sinta-se à vontade para entrar em contato!"
        title="Entre em Contato"
      ></SectionTitle>
      <div className="space-y-4">
        <ContactLink
          Icon={MdEmail}
          text="Email"
          link="mailto:jamzmarks@gmail.com"
          path="jamzmarks@gmail.com"
        />
        <ContactLink
          Icon={IoLogoLinkedin}
          text="LinkedIn"
          path="@james-marques-48828422b"
          link="https://www.linkedin.com/in/james-marques-48828422b/"
        />
        <ContactLink
          Icon={FaGithub}
          text="GitHub"
          path="JamzMarks"
          link="https://github.com/JamzMarks"
        />
      </div>
    </div>
  );
};

interface ContactProps {
  Icon: React.ElementType;
  text: string;
  link: string;
  path: string;
}

const ContactLink = ({ Icon, text, link, path }: ContactProps) => {
  return (
    <div className="flex items-center gap-4 transition-colors py-4 rounded-lg">
      <Icon className="text-3xl text-cyan-500" />
      <Link
        className="text-left"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="font-semibold">{text}</div>
        <div className="text-gray-300 text-sm">{path}</div>
      </Link>
    </div>
  );
};
