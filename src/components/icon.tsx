import { memo } from "react";
import classNames from "classnames";
import { useTheme } from "@/hook/theme/useTheme";

export default memo(function Icon({
  name,
  className,
  style,
  onClick,
}: {
  name: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}) {
  useTheme();

  return (
    <svg
      className={classNames(
        "align-middle w-[1em] h-[1em] inline-block",
        className
      )}
      style={style}
      aria-hidden="true"
      onClick={onClick}
    >
      <use href={`#icon-${name}`} />
    </svg>
  );
});
