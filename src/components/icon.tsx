import { memo } from "react";
import classNames from "classnames";
import { useTheme } from "@/hook/theme/useTheme";

export default memo(function Icon({
  name,
  className,
  style,
}: {
  name: string;
  className?: string;
  style?: React.CSSProperties;
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
    >
      <use href={`#icon-${name}`} />
    </svg>
  );
});
