/**
 * AddressCard.tsx
 * 合约地址展示相关组件，包含地址显示、复制按钮和交互功能
 */

import React, { useState, useEffect, useRef } from "react";
import { Card as IconCard } from "./Icon.tsx";
import { copy } from "@/util";
import { memesHover } from "../styles.ts";
import { useTranslation } from "react-i18next";
import { CopyModal } from "@/components/minidoge/copyModal/index.tsx";

/**
 * 计算字符宽度的工具函数
 */
const getCharWidth = (fontSize: number) => {
  return fontSize * 0.7;
};

/**
 * 地址显示组件的配置接口
 */
interface AddressConfig {
  fontSize: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
  padding: {
    mobile: number;
    desktop: number;
  };
  minChars: number;
}

/**
 * 地址显示组件的属性接口
 */
interface AddressDisplayProps {
  address?: string;
  isMobile: boolean;
  containerWidth: number;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  href?: string;
  target?: string;
  config?: AddressConfig;
}

/**
 * 地址显示内部组件
 */
const AddressDisplayInner: React.FC<AddressDisplayProps> = ({
  address = "",
  isMobile,
  containerWidth,
  config,
}) => {
  if (!address || !containerWidth) {
    return <span className="font-normal notranslate">-</span>;
  }

  // 根据屏幕宽度确定字体大小
  let fontSize = config
    ? isMobile
      ? config.fontSize.mobile
      : config.fontSize.mobile
    : 0;
  if (window.innerWidth >= 1280) {
    fontSize = config ? config.fontSize.desktop : 0;
  } else if (window.innerWidth >= 640) {
    fontSize = config ? config.fontSize.tablet : 0;
  }

  // 计算实际可用宽度
  const charWidth = getCharWidth(fontSize);
  const padding = config
    ? isMobile
      ? config.padding.mobile
      : config.padding.desktop
    : 0;
  const ellipsisWidth = fontSize * 1.5;
  const availableWidth = Math.max(containerWidth - padding - ellipsisWidth, 0);

  // 计算可显示的总字符数
  const totalChars = Math.floor(availableWidth / charWidth);

  if (totalChars >= address.length) {
    return <span className="font-normal notranslate">{address}</span>;
  }

  const maxSideChars = Math.floor((totalChars - 3) / 2);

  for (
    let chars = maxSideChars;
    chars >= (config ? config.minChars : 0);
    chars--
  ) {
    const totalWidth = (chars * 2 + 3) * charWidth;
    if (totalWidth <= availableWidth) {
      const displayText = `${address.slice(0, chars)}...${address.slice(
        -chars
      )}`;
      return <span className="font-normal notranslate">{displayText}</span>;
    }
  }

  const displayText = `${address.slice(
    0,
    config ? config.minChars : 0
  )}...${address.slice(-(config ? config.minChars : 0))}`;
  return <span className="font-normal notranslate">{displayText}</span>;
};

/**
 * 地址显示容器组件
 */
export const AddressDisplay: React.FC<
  Omit<AddressDisplayProps, "containerWidth">
> = ({
  address = "",
  isMobile,
  onClick,
  className = "",
  style = {},
  href,
  target,
  config = {
    fontSize: {
      mobile: 12,
      tablet: 14,
      desktop: 20,
    },
    padding: {
      mobile: 32,
      desktop: 40,
    },
    minChars: 6,
  },
  ...props
}) => {
  const containerRef = useRef<HTMLElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();

    const resizeObserver = new ResizeObserver(updateWidth);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    window.addEventListener("resize", updateWidth);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  const baseClassName = `
    flex items-center justify-center
    h-[40px] sm:h-[56px]
    px-4 sm:px-5
    text-[#FFAC03] tracking-widest 
    bg-gradient-to-r from-[rgba(255,172,3,0.15)] to-[rgba(255,193,11,0.05)] 
    rounded-full border border-[rgba(255,173,3,0.3)] 
    text-xs sm:text-sm xl:text-xl
    w-full
    overflow-hidden
    transition-all duration-300 ease-in-out
    hover:bg-gradient-to-r hover:from-[rgba(255,172,3,0.25)] hover:to-[rgba(255,193,11,0.15)]
    hover:border-[rgba(255,173,3,0.5)]
    hover:shadow-[0_6px_16px_rgba(255,172,3,0.2)]
    active:shadow-[0_2px_8px_rgba(255,172,3,0.1)]
    active:transform active:translateY(0)
    ${className}
  `;

  const baseStyle = {
    fontFamily: "'Roboto Mono', monospace",
    letterSpacing: "1px",
    boxShadow: "0 4px 12px rgba(255, 172, 3, 0.1)",
    backdropFilter: "blur(4px)",
    ...style,
  };

  const content = (
    <div className="w-full text-center whitespace-nowrap overflow-hidden">
      <AddressDisplayInner
        address={address}
        isMobile={isMobile}
        containerWidth={containerWidth}
        config={config}
      />
    </div>
  );

  if (href) {
    return (
      <a
        ref={containerRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={target}
        onClick={onClick}
        className={baseClassName}
        style={baseStyle}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <div
      ref={containerRef as React.RefObject<HTMLDivElement>}
      onClick={onClick}
      className={baseClassName}
      style={baseStyle}
      {...props}
    >
      {content}
    </div>
  );
};

/**
 * 复制按钮组件
 */
interface CopyButtonProps {
  [key: string]: any;
  className?: string;
  onClick?: () => void;
  button?: {
    background?: string;
    text?: string;
  };
}

export const CopyButton = ({
  onClick,
  className = "",
  button,
  ...props
}: CopyButtonProps) => {
  return (
    <div
      className={`relative rounded-full cursor-pointer ${memesHover} ${className}`}
      onClick={() => onClick && onClick()}
    >
      <div
        className="absolute top-0 left-0 w-full h-full rounded-full -z-10 opacity-15"
        style={{
          background:
            button?.background ||
            "linear-gradient(to bottom, #FFAC03, #FFC10B)",
        }}
      />
      <IconCard
        name="copy"
        className="shadow-[0px_0px_8px_4px_rgba(0,0,0,0.25)_inset] h-[40px] w-[40px] sm:h-[56px] sm:w-[56px]"
        style={{
          background:
            button?.background ||
            "linear-gradient(to bottom, #FFAC03, #FFC10B)",
          color: button?.text || "#000",
        }}
      />
    </div>
  );
};

/**
 * 地址卡片组件的属性接口
 */
interface AddressCardProps {
  address: string;
  button?: {
    background?: string;
    text?: string;
  };
  onCopySuccess?: () => void;
}

/**
 * 地址卡片组件
 */
export const AddressCard: React.FC<AddressCardProps> = ({
  address = "",
  button,
  onCopySuccess,
  ...props
}) => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCopy = async () => {
    if (!address) return;

    await copy(address, () => {
      setIsModalOpen(true);
      onCopySuccess?.();
    });
  };

  return (
    <>
      <CopyModal open={isModalOpen} onClose={setIsModalOpen} />
      <div className="flex w-full gap-3 items-center">
        <CopyButton {...props} button={button} onClick={handleCopy} />
        <div className="flex-1 min-w-0 items-center">
          <AddressDisplay
            address={address}
            isMobile={isMobile}
            onClick={handleCopy}
          />
        </div>
      </div>
    </>
  );
};
