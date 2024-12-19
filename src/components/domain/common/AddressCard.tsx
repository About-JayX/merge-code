/**
 * AddressCard.tsx
 * 合约地址展示相关组件，包含地址显示、复制按钮和交互功能
 */

import React, { useState, useEffect, useRef } from "react";
import { Modal } from "antd";
import { Card as IconCard } from "./Icon.tsx";
import { copy } from "@/util";
import { memesHover, memesTextSize } from "../styles.ts";
import Tgs from "../../tgs";

/**
 * 处理地址显示的函数
 * @param address Solana 地址
 * @param isMobile 是否为移动端
 * @returns 处理后的地址显示组件
 */
const formatAddress = (address: string, isMobile: boolean) => {
  // 移动端保持原样：固定显示前6后6
  if (isMobile) {
    return (
      <div className="w-full flex items-start">
        <span className="font-normal notranslate">
          {address.slice(0, 6)}...{address.slice(-6)}
        </span>
      </div>
    );
  }

  // PC端显示：前20后20，因为是 Solana 地址
  return (
    <div className="w-full flex items-start">
      <span className="font-normal notranslate">
        {address.slice(0, 20)}...{address.slice(-20)}
      </span>
    </div>
  );
};

/**
 * MinidogeAddress 组件
 * 用于显示合约地址的容器组件
 */
export const MinidogeAddress = ({
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a
      {...props}
      className={`
        ${memesTextSize} 
        min-w-9 min-h-9 
        sm:min-w-12 sm:min-h-12 
        xl:min-w-14 xl:min-h-14 
        flex items-center 
        px-3 sm:px-5 py-2.5 
        text-[#FFAC03] tracking-widest 
        bg-gradient-to-r from-[rgba(255,172,3,0.15)] to-[rgba(255,193,11,0.05)] 
        rounded-xl border border-[rgba(255,173,3,0.3)] 
        text-base
        w-full
      `}
    >
      {props.children}
    </a>
  );
};

/**
 * MinidogeCopy 组件
 * 复制按钮组
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

interface ContractAddressProps {
  address: string;
  button?: {
    background?: string;
    text?: string;
  };
  onCopySuccess?: () => void;
}

/**
 * ContractAddress 组件
 * 完整的合约地址展示组件，包含地址显示和复制功能
 */
export const ContractAddress: React.FC<ContractAddressProps> = ({ 
  address, 
  button, 
  onCopySuccess,
  ...props 
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCopy = async () => {
    await copy(address, () => {
      setIsModalOpen(true);
      onCopySuccess?.();
    });
  };

  return (
    <>
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
            复制成功
          </span>
        </div>
      </Modal>

      <div className="flex w-full gap-3">
        <div className="flex-none">
          <MinidogeCopy
            {...props}
            button={button}
            onClick={handleCopy}
          />
        </div>
        <div className="flex-1 min-w-0 max-w-[80%]">
          <MinidogeAddress onClick={handleCopy}>
            <div className="!text-base md:text-2xl truncate">
              {formatAddress(address, isMobile)}
            </div>
          </MinidogeAddress>
        </div>
      </div>
    </>
  );
}; 