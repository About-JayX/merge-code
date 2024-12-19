import Icon from "../icon";
import { memesSize } from "./styles";

export const Card = ({
  className = "",
  style = {},
  name = "",
  ...props
}: {
  className?: string;
  style?: React.CSSProperties;
  name?: string;
  onClick?: () => void;
}) => {
  return (
    <div
      className={`${memesSize} bg-white/10 border border-white/10 rounded-full flex items-center justify-center ${className}`}
      style={style}
      {...props}
    >
      <Icon name={name} className="text-lg sm:text-xl" />
    </div>
  );
}; 