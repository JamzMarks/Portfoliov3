interface ExperienceItemProps {
    children?: React.ReactNode;
    name: string;
 }
export const SkillsWrapper = ({ children, name}: ExperienceItemProps) => {
    return (
        <div className="grid grid-cols-1 gap-8" id={name}>
            {children}
        </div>
    );
 }