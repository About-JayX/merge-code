import { memesHover } from "./styles";

export const Card = ({
  className = "",
  children,
}: {
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}) => {
  return (
    <div className={`rounded-2xl bg-[#0F0F0F] p-6 ${memesHover} ${className}`}>
      {children}
    </div>
  );
}; 