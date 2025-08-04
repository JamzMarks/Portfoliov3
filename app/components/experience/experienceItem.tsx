export interface ExperienceItemProps {
  title: string;
  company: string;
  duration: string;
  description?: string;
  image?: string;
}
export const ExperienceItem = ({
  title,
  company,
  duration,
  description,
  image,
}: ExperienceItemProps) => {
  return (
    <div className="flex flex-col 
    sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-cyan-500
    ">
      <h3 className="text-lg font-semibold tracking-wide">{title} </h3>
      <div className="flex justify-between items-center mt-1 text-sm">
        <p className=" tracking-wide uppercase dark:text-gray-500">
          {company}
        </p>
        <time className="tracking-wide uppercase dark:text-gray-500">
          {duration}
        </time>
      </div>
      {description && <p className="mt-3 text-gray-400 text-sm">{description}</p>}
    </div>
  );
};
