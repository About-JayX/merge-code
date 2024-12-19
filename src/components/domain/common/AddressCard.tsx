import React from "react";
import { Card as IconCard } from "./Icon.tsx";
import {
  memesHover,
  memesTextSize,
} from "../styles.ts";

export const MinidogeAddress = ({
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a
      {...props}
      className={`${memesTextSize} min-w-9 min-h-9 sm:min-w-12 sm:min-h-12 xl:min-w-14 xl:min-h-14 break-all flex items-center  px-3 sm:px-5 py-2.5 text-[#FFAC03] tracking-widest bg-gradient-to-r from-[rgba(255,172,3,0.15)] to-[rgba(255,193,11,0.05)] rounded-xl border border-[rgba(255,173,3,0.3)] text-base`}
    >
      {props.children}
    </a>
  );
};

export const MinidogeCopy = ({
  onClick,
  className = "",
  button,
  ...props
}: {
  [key: string]: any;
  className?: string;
  onClick?: () => void;
  button?: {
    background?: string;
    text?: string;
  };
}) => {
  return (
    <div
      className={`p-[6px] relative rounded-full cursor-pointer ${memesHover} ${className}`}
      onClick={() => onClick && onClick()}
    >
      <div
        className="absolute top-0 left-0 w-full h-full rounded-full -z-10 opacity-15"
        style={{
          background: button?.background,
        }}
      />
      <IconCard
        name="copy"
        className="shadow-[0px_0px_8px_4px_rgba(0,0,0,0.25)_inset] min-w-[calc(48px-6px)] min-h-[calc(48px-6px)] sm:min-w-[calc(56px-6px)] sm:min-h-[calc(56px-6px)]"
        style={{
          background: button?.background,
          color: button?.text,
        }}
      />
    </div>
  );
}; 