import { motion } from "framer-motion";

interface ExperienceItemProps {
  children?: React.ReactNode;
  name: string;
}
export const SkillsWrapper = ({ children, name }: ExperienceItemProps) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="grid grid-cols-1 gap-8"
      id={name}
    >
      {children}
    </motion.div>
  );
};
