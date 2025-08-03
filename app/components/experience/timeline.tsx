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
  reverse,
  slug,
}) => {
  return (
    // <section className={`rounded-2xl p-6 ${reverse ? "bg-neutral-900 " : ""}`}>
    <section
      className={`lg:px-6 ${
        reverse ? "lg:border-r lg:border-neutral-800 " : ""
      }`}
    >
      <div className=" max-w-7xl mx-auto">
        <div className="grid gap-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <div className="text-center sm:text-left lg:mb-14 before:block before:w-24 before:h-1 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-cyan-500">
              <h3 className="text-2xl font-semibold">{title}</h3>
              <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-600">
                {slug ? slug : "Experiência"}
              </span>
            </div>
          </div>
          <div className="relative col-span-12 lg:px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-600">
              {items.toReversed().map((item, _) => {
                return (
                  <ExperienceItem
                    key={item.title}
                    title={item.title}
                    company={item.company}
                    duration={item.duration}
                    description={item.description}
                    image={item.image}
                  />
                );
              })}
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
    description: "Trabalhei com otimização de sites para motores de busca.",
  },
  {
    title: "Full Stack Developer Intern",
    company: "Compass UOL",
    duration: "out 2024 - mar 2025",
    description: "Desenvolvi aplicações web usando React e Node.js.",
  },
  {
    title: "Full Stack Developer",
    company: "Redefrete",
    duration: "mar 2025 - jul 2025",
    description:
      "Liderança de projetos e desenvolvimento de soluções completas.",
  },
];

const educationItems: ExperienceItemProps[] = [
  {
    title: "Informática",
    company: "FIEB - Técnico Integrado",
    duration: "2017 - 2019",
    description: "Ensino técnico integrado com médio.",
  },
  {
    title: "Ciência da Computação",
    company: "UNIP - Bacharelado",
    duration: "2022 - 2025",
    description: "Ensino técnico integrado com médio.",
  },
  {
    title: "Arquitetura de Software",
    company: "FIAP - Pós-graduação",
    duration: "2022 - 2025",
    description: "Ensino técnico integrado com médio.",
  },
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
