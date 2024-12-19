import { memesSize, memesBntColor, memesHover } from "./styles";

export const Button = ({
  children,
  className = "",
  type = "primary",
  style = {},
  onClick,
  ...props
}: {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  type?: "default" | "primary";
  [key: string]: any;
  onClick?: () => void;
}) => {
  return (
    <button
      className={`${memesSize} rounded 
      px-3 font-bold text-xs sm:text-sm xl:text-xl sm:min-w-40 xl:min-w-48 ${
        type === "primary"
          ? memesBntColor
          : "border border-[#FFB004] text-[#FFB004]"
      } ${memesHover} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}; 