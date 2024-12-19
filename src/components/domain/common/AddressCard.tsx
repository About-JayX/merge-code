/**
 * AddressCard.tsx
 * 合约地址展示相关组件，包含地址显示、复制按钮和交互功能
 */

import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import { Card as IconCard } from "./Icon.tsx";
import { copy } from "@/util";
import { memesHover } from "../styles.ts";
import Tgs from "../../tgs";
import { useTranslation } from "react-i18next";

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
      <div className="w-full flex items-center">
        <span className="font-normal notranslate">
          {address.slice(0, 6)}...{address.slice(-6)}
        </span>
      </div>
    );
  }

  // PC端显示：前20后20，因为是 Solana 地址
  return (
    <div className="w-full flex items-center">
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
        flex items-center 
        h-[48px] sm:h-[56px]
        px-4 sm:px-5
        text-[#FFAC03] tracking-widest 
        bg-gradient-to-r from-[rgba(255,172,3,0.15)] to-[rgba(255,193,11,0.05)] 
        rounded-full border border-[rgba(255,173,3,0.3)] 
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
        className="shadow-[0px_0px_8px_4px_rgba(0,0,0,0.25)_inset] h-[48px] w-[48px] sm:h-[56px] sm:w-[56px]"
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
 * ContractAddress 组件
 * 完整的合约地址展示组件，包含地址显示和复制功能
 */
export const ContractAddress: React.FC<ContractAddressProps> = ({ 
  address, 
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
            {t("message.copy.success")}
          </span>
        </div>
      </Modal>

      <div className="flex w-full gap-3">
        <MinidogeCopy
          {...props}
          button={button}
          onClick={handleCopy}
        />
        <div className="flex-1 min-w-0">
          <MinidogeAddress onClick={handleCopy}>
            <div className="text-base sm:text-lg truncate">
              {formatAddress(address, isMobile)}
            </div>
          </MinidogeAddress>
        </div>
      </div>
    </>
  );
}; 