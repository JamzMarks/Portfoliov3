import { ExperienceItem, ExperienceItemProps } from "./experienceItem";

interface TimelineProps {
  items: ExperienceItemProps[];
  title: string;
  slug: string;
  reverse?: boolean;
}

export const Timeline: React.FC<TimelineProps> = ({
  items,
  title,
  slug,
  reverse,
}) => {
  return (
    <section
      className={`lg:px-6 ${reverse ? "lg:border-r lg:border-neutral-800" : ""}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-12 gap-4">
          {/* Título */}
          <div className="sm:col-span-3">
            <div
              className="text-center sm:text-left lg:mb-14 
              before:block before:w-24 before:h-1 before:mb-5 
              before:rounded-md before:mx-auto sm:before:mx-0 before:bg-cyan-500"
            >
              <h3 className="text-2xl font-semibold">{title}</h3>
              <span className="text-sm font-bold tracking-wider uppercase text-gray-600">
                {slug || "Experiência"}
              </span>
            </div>
          </div>

          {/* Linha do tempo */}
          <div className="sm:col-span-9">
            <div className="
            relative px-4 lg:px-4 space-y-12 
            sm:space-y-8 sm:before:absolute sm:before:inset-y-2 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-600
            ">
              {items
                .toReversed()
                .map((item) => (
                  <ExperienceItem
                    key={item.title}
                    {...item}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const careerItems: ExperienceItemProps[] = [
  {
    title: "Estágio SEO",
    company: "Yooper",
    duration: "jan 2023 - out 2024",
    description:
      "Otimização de conteúdo, análise de métricas, SEO técnico, estratégias de palavras-chave e aumento de tráfego orgânico usando Google Analytics e SEMRush.",
  },
  {
    title: "Full Stack Developer Intern",
    company: "Compass UOL",
    duration: "out 2024 - mar 2025",
    description:
      "Atuação em projetos Full Stack, criação de ferramentas web, otimização de processos, capacitação técnica e certificações em tecnologias AWS, React e Node.js.",
  },
  {
    title: "Full Stack Developer",
    company: "Redefrete",
    duration: "mar 2025 - jul 2025",
    description:
      "Desenvolvimento Full Stack com Node.js, Express, Prisma, Next.js, TypeScript e Tailwind CSS, atuando em requisitos, modelagem, testes e manutenção de sistemas.",
  },
];

const educationItems: ExperienceItemProps[] = [
  {
    title: "Informática",
    company: "FIEB - Técnico Integrado",
    duration: "2017 - 2019",
    description:
      "Formação técnica integrada ao ensino médio, com ênfase em lógica de programação, manutenção de computadores, redes de computadores, desenvolvimento web básico e fundamentos de sistemas.",
  },
  {
    title: "Ciência da Computação",
    company: "UNIP - Bacharelado",
    duration: "2022 - 2025",
    description:
      "Graduação com foco em algoritmos, estruturas de dados, programação orientada a objetos, bancos de dados, redes, sistemas operacionais e engenharia de software, desenvolvendo projetos práticos e soluções de TI escaláveis.",
  },
  // {
  //   title: "Arquitetura de Software",
  //   company: "FIAP - Pós-graduação",
  //   duration: "2022 - 2025",
  //   description: "Ensino técnico integrado com médio.",
  // },
];

export const CareerTimeline = () => (
  <Timeline
    title="Carreira"
    items={careerItems}
    reverse={true}
    slug="Experiência profissional"
  />
);

export const EducationTimeline = () => (
  <Timeline
    title="Estudos"
    items={educationItems}
    slug="Experiência acadêmica"
  />
);
