import { FaEnvelope } from "react-icons/fa";

export const HeroBtn = () => {
  return (
    <div className="flex flex-col items-center text-sm mt-5">
      {/* Botão de Contato */}
      <a
        href="#contact"
        className="flex items-center gap-2 bg-cyan-600 px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium text-sm hover:bg-cyan-700 transition"
      >
        <FaEnvelope size={16} /> Entre em Contato
      </a>

      {/* Scroll Down */}
      <a
        href="#footer"
        className="flex items-center gap-2 mt-4 cursor-pointer"
      >
        <span className="text-gray-400 text-xs sm:text-sm">Scroll down</span>
        <svg
          className="w-4 h-4 animate-bounce"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </a>
    </div>
  );
};
