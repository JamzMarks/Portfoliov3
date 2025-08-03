interface SkillsProps {
  title: string;
  icon?: React.ReactNode;
}

interface SkillCategoryProps {
  title: string;
  skills: SkillsProps[];
}

export const SkillCategory = ({ title, skills }: SkillCategoryProps) => {
  return (
    <div>
      {/* <h3 className="text-sm uppercase font-medium text-cyan-500 mb-2 tracking-wide">
        {title}
      </h3> */}
      <ul className="flex flex-wrap gap-2 justify-evenly">
        {skills.map(({ title, icon }) => (
          <li
            key={title}
            className="flex items-center gap-2 text-2xl text-gray-200  px-3 py-1 rounded-full hover:text-cyan-500 transition-colors"
          >
            <span className="text-2xl">{icon}</span>
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
};