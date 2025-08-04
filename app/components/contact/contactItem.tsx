import Link from "next/link";

interface ContactProps {
  Icon: React.ElementType;
  text: string;
  link: string;
  path: string;
}

export const ContactLink = ({ Icon, text, link, path }: ContactProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 px-4 py-3 rounded-md
        hover:bg-white/5 transition-colors duration-200"
    >
      <Icon className="text-2xl text-cyan-500 group-hover:scale-105 transition-transform duration-200" />
      <div className="text-left">
        <div className="font-medium">{text}</div>
        <div className="text-gray-400 text-sm">{path}</div>
      </div>
    </Link>
  );
};
