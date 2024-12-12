import { memo } from "react";
import classNames from 'classnames';
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
  const { isDark } = useTheme();
  const isPump = name === "pump";
  
  // 如果是 pump 图标，使用原始名称，否则根据主题添加后缀
  const iconName = isPump ? name : `${name}-${isDark ? 'dark' : 'light'}`;

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
