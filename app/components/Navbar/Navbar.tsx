import Link from "next/link";
const Links = [
  { href: "#about", label: "Sobre" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experiência" },
  { href: "#projects", label: "Projetos" },
  { href: "#contact", label: "Contato" },
]
export const Navbar = () => {
  return (
    <nav className="w-full h-full max-w-7xl mx-auto flex justify-between items-center px-4 z-[100] ">
      <a href="/" className="text-lg font-bold">
        James Marques
      </a>
      <ul className="flex space-x-4">
        {
            Links.map((link) => (
              <LinkItem key={link.href} href={link.href}>
                {link.label}
              </LinkItem>
            ))
            
          }
      </ul>
    </nav>
  );
};

export default Navbar;

const LinkItem = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <li>
      <Link href={href} className="text-gray-400 hover:text-cyan-500">
        {children}
      </Link>
    </li>
  );
}

