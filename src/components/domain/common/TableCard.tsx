export const TableCard = ({
  className = "",
  children,
}: {
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}) => {
  return (
    <div className={`rounded-2xl ${className}`}>
      {children}
    </div>
  );
}; 