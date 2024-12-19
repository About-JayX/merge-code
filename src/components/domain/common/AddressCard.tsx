import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import { Ellipsis } from "antd-mobile";
import { Card as IconCard } from "./Icon.tsx";
import { copy } from "@/util";
import { memesHover, memesTextSize } from "../styles.ts";
import Tgs from "../../tgs";

export const MinidogeAddress = ({
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a
      {...props}
      className={`${memesTextSize} min-w-9 min-h-9 sm:min-w-12 sm:min-h-12 xl:min-w-14 xl:min-h-14 break-all flex items-center px-3 sm:px-5 py-2.5 text-[#FFAC03] tracking-widest bg-gradient-to-r from-[rgba(255,172,3,0.15)] to-[rgba(255,193,11,0.05)] rounded-xl border border-[rgba(255,173,3,0.3)] text-base`}
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

interface ContractAddressProps {
  address: string;
  button?: {
    background?: string;
    text?: string;
  };
}

export const ContractAddress: React.FC<ContractAddressProps> = ({ address, button, ...props }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleCopy = async () => {
    await copy(address, () => setIsModalOpen(true));
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderAddress = () => {
    if (isMobile) {
      return (
        <span className="!text-base font-normal notranslate">
          {`${address.slice(0, 6)}...${address.slice(-4)}`}
        </span>
      );
    }
    return (
      <Ellipsis
        className="!text-base md:text-2xl font-normal notranslate"
        direction="middle"
        content={address}
      />
    );
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

      <div className="grid grid-cols-[auto,1fr] gap-3 items-center w-full">
        <MinidogeCopy
          {...props}
          button={button}
          onClick={handleCopy}
        />
        <div className="flex flex-col break-all">
          <MinidogeAddress
            className="w-full"
            onClick={handleCopy}
          >
            {renderAddress()}
          </MinidogeAddress>
        </div>
      </div>
    </>
  );
}; 