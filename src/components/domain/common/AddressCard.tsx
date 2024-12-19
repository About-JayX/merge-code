/**
 * AddressCard.tsx
 * 合约地址展示相关组件，包含地址显示、复制按钮和交互功能
 * 主要功能：
 * 1. 动态计算并显示合约地址，根据容器宽度自适应显示长度
 * 2. 提供复制功能，复制成功后显示动画反馈
 * 3. 响应式设计，适配移动端和PC端不同显示效果
 */

import React, { useState, useEffect, useRef } from "react";
import { Modal } from "antd";
import { Card as IconCard } from "./Icon.tsx";
import { copy } from "@/util";
import { memesHover } from "../styles.ts";
import Tgs from "../../tgs";
import { useTranslation } from "react-i18next";

/**
 * 计算字符宽度的工具函数
 * @param fontSize - 当前字体大小（像素）
 * @returns 单个字符的估算宽度
 * 说明：由于使用等宽字体，每个字符宽度约为字体大小的0.7倍
 */
const getCharWidth = (fontSize: number) => {
  return fontSize * 0.7;
};

/**
 * 地址显示组件
 * 根据容器宽度动态计算并显示合约地址
 * 显示规则：
 * 1. 如果空间足够，显示完整地址
 * 2. 如果空间不足，在保证最少显示前后各6个字符的情况下，尽可能多显示
 * 3. 使用省略号(...)表示中间省略的部分
 */
interface AddressDisplayProps {
  address?: string;
  isMobile: boolean;
  containerWidth: number;
  config?: {
    fontSize?: {
      mobile: number;
      tablet: number;
      desktop: number;
    };
    padding?: {
      mobile: number;
      desktop: number;
    };
    minChars?: number;
  };
}

const AddressDisplay = ({ 
  address = '', 
  isMobile, 
  containerWidth,
  config = {
    fontSize: {
      mobile: 12,
      tablet: 14,
      desktop: 20
    },
    padding: {
      mobile: 32,
      desktop: 40
    },
    minChars: 6
  }
}: AddressDisplayProps) => {
  if (!address || !containerWidth) {
    return <span className="font-normal notranslate">-</span>;
  }

  // 根据屏幕宽度确定字体大小
  let fontSize = isMobile ? config.fontSize.mobile : config.fontSize.mobile;
  if (window.innerWidth >= 1280) {
    fontSize = config.fontSize.desktop;
  } else if (window.innerWidth >= 640) {
    fontSize = config.fontSize.tablet;
  }

  // 计算实际可用宽度
  const charWidth = getCharWidth(fontSize);
  const padding = isMobile ? config.padding.mobile : config.padding.desktop;
  const ellipsisWidth = fontSize * 1.5;
  const availableWidth = Math.max(containerWidth - padding - ellipsisWidth, 0);
  
  // 计算可显示的总字符数
  const totalChars = Math.floor(availableWidth / charWidth);
  
  if (totalChars >= address.length) {
    return (
      <span className="font-normal notranslate">
        {address}
      </span>
    );
  }

  const maxSideChars = Math.floor((totalChars - 3) / 2);
  
  for (let chars = maxSideChars; chars >= (config.minChars || 6); chars--) {
    const totalWidth = (chars * 2 + 3) * charWidth;
    if (totalWidth <= availableWidth) {
      const displayText = `${address.slice(0, chars)}...${address.slice(-chars)}`;
      return (
        <span className="font-normal notranslate">
          {displayText}
        </span>
      );
    }
  }

  const displayText = `${address.slice(0, config.minChars || 6)}...${address.slice(-(config.minChars || 6))}`;
  return (
    <span className="font-normal notranslate">
      {displayText}
    </span>
  );
};

/**
 * 地址显示容器组件
 * 负责：
 * 1. 监听容器尺寸变化
 * 2. 提供点击交互
 * 3. 设置基础样式（高度、内边距、边框等）
 */
interface MinidogeAddressProps {
  address?: string;
  isMobile: boolean;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  href?: string;
  target?: string;
  config?: {
    fontSize?: {
      mobile: number;
      tablet: number;
      desktop: number;
    };
    padding?: {
      mobile: number;
      desktop: number;
    };
    minChars?: number;
  };
}

export const MinidogeAddress = ({
  address = '',
  isMobile,
  onClick,
  className = '',
  style = {},
  href,
  target,
  config = {
    fontSize: {
      mobile: 12,
      tablet: 14,
      desktop: 20
    },
    padding: {
      mobile: 32,
      desktop: 40
    },
    minChars: 6
  },
  ...props
}: MinidogeAddressProps) => {
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

    window.addEventListener('resize', updateWidth);
    
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateWidth);
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
    letterSpacing: '1px',
    boxShadow: '0 4px 12px rgba(255, 172, 3, 0.1)',
    backdropFilter: 'blur(4px)',
    ...style
  };

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
        <div className="w-full text-center whitespace-nowrap overflow-hidden">
          <AddressDisplay
            address={address}
            isMobile={isMobile}
            containerWidth={containerWidth}
            config={config}
          />
        </div>
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
      <div className="w-full text-center whitespace-nowrap overflow-hidden">
        <AddressDisplay
          address={address}
          isMobile={isMobile}
          containerWidth={containerWidth}
          config={config}
        />
      </div>
    </div>
  );
};

/**
 * 复制按钮组件
 * 特点：
 * 1. 支持自定义背景色和文字颜色
 * 2. 内置悬停效果
 * 3. 响应式尺寸
 */
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
      className={`relative rounded-full cursor-pointer ${memesHover} ${className}`}
      onClick={() => onClick && onClick()}
    >
      <div
        className="absolute top-0 left-0 w-full h-full rounded-full -z-10 opacity-15"
        style={{
          background: button?.background || "linear-gradient(to bottom, #FFAC03, #FFC10B)",
        }}
      />
      <IconCard
        name="copy"
        className="shadow-[0px_0px_8px_4px_rgba(0,0,0,0.25)_inset] h-[40px] w-[40px] sm:h-[56px] sm:w-[56px]"
        style={{
          background: button?.background || "linear-gradient(to bottom, #FFAC03, #FFC10B)",
          color: button?.text || "#000",
        }}
      />
    </div>
  );
};

interface ContractAddressProps {
  address: string;
  button?: {
    background?: string;
    text?: string;
  };
  onCopySuccess?: () => void;
}

/**
 * 合约地址完整组件
 * 包含：
 * 1. 地址显示区域
 * 2. 复制按钮
 * 3. 复制成功的模态框动画
 * 4. 响应式布局适配
 */
export const ContractAddress: React.FC<ContractAddressProps> = ({ 
  address = '', 
  button, 
  onCopySuccess,
  ...props 
}) => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // 监听窗口大小变化，更新移动端状态
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 处理复制操作
  const handleCopy = async () => {
    if (!address) return;
    
    await copy(address, () => {
      setIsModalOpen(true);
      onCopySuccess?.();
    });
  };

  return (
    <>
      {/* 复制成功提示模态框 */}
      <Modal
        open={isModalOpen}
        centered
        footer={null}
        closable={false}
        width="auto"
      >
        <div className="flex flex-col items-center px-8 py-4">
          {isModalOpen && (
            <Tgs
              name="success"
              className="!w-24 !h-24 sm:!w-32 sm:!h-32 md:!w-40 md:!h-40"
              onChange={(value) => isModalOpen && setIsModalOpen(!value)}
            />
          )}
          <span className="text-lg sm:text-xl md:text-2xl font-bold mt-2">
            {t("message.copy.success")}
          </span>
        </div>
      </Modal>

      {/* 主体内容 */}
      <div className="flex w-full gap-3">
        <MinidogeCopy
          {...props}
          button={button}
          onClick={handleCopy}
        />
        <div className="flex-1 min-w-0">
          <MinidogeAddress
            address={address}
            isMobile={isMobile}
            onClick={handleCopy}
          />
        </div>
      </div>
    </>
  );
}; 