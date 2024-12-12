import { AnchorHTMLAttributes } from "react";
interface ButtonProps extends AnchorHTMLAttributes<HTMLDivElement> {}
export default function Card({ className, children, ...props }: ButtonProps) {
  return (
    <div
      className={`group relative bg-[--card-color] rounded-2xl shadow-sm hover:shadow-xl dark:shadow-gray-900/30 hover:dark:shadow-gray-900/50 transition-all duration-300 border-2 border-[--border-color]  hover:border-gray-300 hover:dark:border-gray-500 active:scale-[0.98] hover:-translate-y-0.5 backdrop-blur-sm overflow-hidden ${className}`}
      {...props}
    >
      {/* 渐变遮罩 */}
      <div className="absolute inset-0  bg-[--card-color] opacity-45" />

      {/* 内容区域 */}
      {children}
    </div>
  );
}
