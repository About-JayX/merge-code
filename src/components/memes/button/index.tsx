import { Fragment, type AnchorHTMLAttributes } from "react";
import "./index.scss";
import { LoadingOutlined } from "@ant-design/icons";
interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  type?: "default" | "primary";
  loading?: boolean;
}
export default function Button({
  loading = false,
  type = "default",
  ...props
}: ButtonProps) {
  return (
    <a
      id="memes-button-icon"
      className={`relative text-current text-base !text-white font-medium ${
        type === "default"
          ? ""
          : "bg-gradient-to-r from-[#A440FD] to-[#0DC8EC] border-none"
      }`}
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
