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
const AddressDisplay = ({ 
  address = '', 
  isMobile, 
  containerWidth 
}: { 
  address?: string; 
  isMobile: boolean; 
  containerWidth: number;
}) => {
  if (!address || !containerWidth) {
    return <span className="font-normal notranslate">-</span>;
  }

  // 根据屏幕宽度确定字体大小
  // 移动端默认12px(xs)，平板14px(sm)，桌面端20px(xl)
  let fontSize = isMobile ? 12 : 12;
  if (window.innerWidth >= 1280) {
    fontSize = 20;
  } else if (window.innerWidth >= 640) {
    fontSize = 14;
  }

  // 计算实际可用宽度
  const charWidth = getCharWidth(fontSize);
  const padding = isMobile ? 32 : 40; // 移动端使用更小的内边距
  const ellipsisWidth = fontSize * 1.5; // 省略号宽度
  const availableWidth = Math.max(containerWidth - padding - ellipsisWidth, 0);
  
  // 计算可显示的总字符数
  const totalChars = Math.floor(availableWidth / charWidth);
  
  // 如果空间足够显示完整地址
  if (totalChars >= address.length) {
    return (
      <span className="font-normal notranslate">
        {address}
      </span>
    );
  }

  // 计算每侧最多可显示的字符数
  const minChars = 6; // 最少显示6个字符
  const maxSideChars = Math.floor((totalChars - 3) / 2); // 减去省略号占用的3个字符宽度
  
  // 从最大可能的字符数开始尝试，直到找到合适的显示长度
  for (let chars = maxSideChars; chars >= minChars; chars--) {
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

  // 使用最小显示长度（前后各6个字符）
  const displayText = `${address.slice(0, minChars)}...${address.slice(-minChars)}`;
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
export const MinidogeAddress = ({
  address = '',
  isMobile,
  onClick,
  ...props
}: {
  address?: string;
  isMobile: boolean;
  onClick?: () => void;
}) => {
  const containerRef = useRef<HTMLAnchorElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    // 更新容器宽度的函数
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    // 初始化时更新一次宽度
    updateWidth();
    
    // 使用 ResizeObserver 监听容器大小变化
    const resizeObserver = new ResizeObserver(updateWidth);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // 监听窗口大小变化
    window.addEventListener('resize', updateWidth);
    
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  return (
    <a
      ref={containerRef}
      onClick={onClick}
      className={`
        flex items-center justify-center
        h-[40px] sm:h-[56px]
        px-4 sm:px-5
        text-[#FFAC03] tracking-widest 
        bg-gradient-to-r from-[rgba(255,172,3,0.15)] to-[rgba(255,193,11,0.05)] 
        rounded-full border border-[rgba(255,173,3,0.3)] 
        text-xs sm:text-sm xl:text-xl
        w-full
        overflow-hidden
      `}
    >
      <div className="w-full text-center whitespace-nowrap overflow-hidden">
        <AddressDisplay
          address={address}
          isMobile={isMobile}
          containerWidth={containerWidth}
        />
      </div>
    </a>
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