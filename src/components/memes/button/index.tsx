import { Fragment, type AnchorHTMLAttributes } from "react";
import "./index.scss";
import { LoadingOutlined } from "@ant-design/icons";
interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  type?: "default" | "primary" | "card";
  loading?: boolean;
}
export default function Button({
  loading = false,
  type = "default",
  className="",
  disabled = false,
  ...props
}: {
  disabled?: boolean;
} & ButtonProps) {
  return (
    <a
      id="memes-button-icon"
      className={`transition-all duration-200 hover:scale-110 relative text-current text-sm sm:text-base text-white font-medium ${
        type === "primary"
          ? "bg-gradient-to-r from-[#A440FD] to-[#0DC8EC] border-none"
          : ""
      }${
        type === "card"
          ? "!bg-[--card-color] !border-[--border-color] !border !text-[--title-color]"
          : ""
      }  ${
        disabled ? "cursor-not-allowed opacity-50 hover:opacity-50" : ""
      } ${className}`}
      rel="noopener noreferrer"
      {...props}
    >
      {type == "default" && (
        <Fragment>
          <div className="filterBorder" />
          <div className="filterBg" />
        </Fragment>
      )}
      {loading ? <LoadingOutlined /> : props.children}
    </a>
  );
}
