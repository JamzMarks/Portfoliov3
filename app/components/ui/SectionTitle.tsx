export const SectionTitle = ({
  title,
  subtitle,
  children,
  Icon,
}: {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  Icon?: React.ElementType;
}) => {
  return (
    <div className="text-center">
      <div>
        {Icon && <Icon className="text-3xl text-cyan-500 mb-2 mx-auto" />}
      </div>
      <h2 className="text-xl md:text-2xl mb-2 font-medium">{title}</h2>
      {subtitle && <p className="mb-10 text-gray-300 max-w-lg lg:max-w-full">{subtitle}</p>}
      {children && <div>{children}</div>}
    </div>
  );
};
