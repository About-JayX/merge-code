import { AddressCard } from "@/components/domain/common/AddressCard";
import { memesSubTitleSize, memesTextSize } from "@/components/domain/styles";
import { CopyModal } from "@/components/minidoge/copyModal";
import { Modal, QRCode } from "antd";
import { useState } from "react";

export const MiniDogeCardHeaderReward = ({
  title = "",
  text = "",
  address = "",
  open = false,
  onClose,
}: {
  title?: string;
  text?: string;
  address?: string;
  open?: boolean;
  onClose?: () => void;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <CopyModal
        open={isModalOpen}
        onClose={(value) => setIsModalOpen(value)}
      />
      <Modal
        open={open}
        centered
        footer={null}
        width="auto"
        onCancel={() => onClose && onClose()}
      >
        <div className="flex flex-col gap-5 mt-6">
          <span className={`${memesSubTitleSize} !text-3xl !font-bold`}>
            {title}
          </span>
          <span
            className={`${memesTextSize} !text-sm font-medium text-[#B8B8B8] -mt-3`}
          >
            {text}
          </span>
          {address && (
            <div className="flex flex-col items-center gap-8 sm:border border-solid border-[#FFAC03] rounded-xl sm:p-7">
              <QRCode
                errorLevel="L"
                value={address}
                bordered={false}
                className="aspect-square !w-full !h-full hidden sm:block"
              />
              <AddressCard
                address={address}
                onCopySuccess={() => setIsModalOpen(true)}
              />
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};
