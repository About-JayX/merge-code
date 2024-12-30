import Icon from "../icon";
import { useState } from "react";

export const LikeIcon = ({
  liked,
  onClick,
  className,
}: {
  liked: boolean;
  onClick: () => void;
  className?: string;
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    onClick();
    setTimeout(() => setIsClicked(false), 300);
  };

  return (
    <div
      onClick={handleClick}
      className={`flex items-center justify-center cursor-pointer transition-transform duration-300 ${
        liked ? " text-[#FFAC03]" : "scale-100 opacity-50"
      } ${isClicked ? "scale-110" : "scale-100"} ${className}`}
    >
      <Icon name="praise" />
    </div>
  );
};
