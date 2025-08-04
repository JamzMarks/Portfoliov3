import Link from "next/link";
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <div id="footer">
      <div className="max-w-7xl text-white text-center w-full h-full md:grid md:grid-cols-2 md:gap-8 p-6 mx-auto">
        <div className="space-y-2 lg:text-left">
          <h2 className="text-2xl font-bold">James Marques</h2>
          <p className="text-gray-300 max-w-md mx-auto md:mx-0">
            Software Engineer | Full Stack Developer
          </p>
        </div>
        <div >
          <ul className="flex justify-center space-x-4 mt-4 md:mt-0">
            <li><Link href={"https://www.linkedin.com/in/james-marques-48828422b/#"}><IoLogoLinkedin className="w-8 h-8 hover:text-cyan-500"/></Link></li>
            <li><Link href={"https://github.com/JamzMarks"}><FaGithub className="w-8 h-8 hover:text-cyan-500"/></Link></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-gray-500 py-4 text-sm">
        <p>Made by JamzMarks</p>
      </div>
    </div>
  );
};

export default Footer;
