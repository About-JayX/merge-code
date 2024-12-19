import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import { Ellipsis } from "antd-mobile";
import { copy } from "@/util";
import { MinidogeAddress, MinidogeCopy } from "./AddressCard";
import Tgs from "../../tgs";

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