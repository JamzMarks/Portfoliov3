export const SectionTitle = ({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className="md:text-left lg:text-center">
      <h2 className="text-xl md:text-2xl mb-2 font-medium">{title}</h2>
      {subtitle && <p className="mb-10 text-gray-300 max-w-lg lg:max-w-full">{subtitle}</p>}
      {children && <div>{children}</div>}
    </div>
  );
};
