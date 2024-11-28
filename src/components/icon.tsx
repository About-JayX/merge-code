import { memo } from "react";

export default memo(function Icon({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  return (
    <svg
      className={`fill-[--title-color] align-middle w-[1em] h-[1em] inline-block ${className}`}
    >
      <use xlinkHref={`#icon-${name}`} />
    </svg>
  );
});
