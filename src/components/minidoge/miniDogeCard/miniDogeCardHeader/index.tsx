import { memesTextSize, memesTitleSize } from "@/components/domain/styles";
import Icon from "@/components/icon";
import { Avatar } from "antd";
import { Ellipsis } from "antd-mobile";
import { IconWrapper } from "@/components/minidoge/miniDogeCard";
import { MiniDogeCardHeaderReward } from "./reward";
import { useState } from "react";
import { CopyModal } from "../../copyModal";
import { copy } from "@/util";

export const MiniDogeCardHeader = ({
  address="",
}: {
  address?: string;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);
  return (
    <>
      <MiniDogeCardHeaderReward
        text={address}
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <CopyModal
        open={shareModalOpen}
        onClose={(value) => setShareModalOpen(value)}
      />
      <div className="flex items-center justify-between gap-4 px-2">
        <div className="grid grid-cols-[48px_1fr] items-center gap-2">
          <Avatar
            src="/logo.png"
            className="w-12 h-12 bg-white aspect-square"
          />
          <div className="flex flex-col gap-1">
            <span
              className={`${memesTitleSize} !text-xs !font-bold uppercase flex`}
            >
              <Ellipsis content="Owned by" />
              &nbsp;
              <Icon name="authenticate" className="text-base" />
            </span>
            <span className={`${memesTextSize} !text-xs opacity-50`}>
              2024/12/27
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <IconWrapper onClick={() => setIsModalOpen(true)}>
            <img src="/logo.png" alt="share" className="w-5 h-5" />
          </IconWrapper>
          <IconWrapper
            onClick={async () => {
              await copy(address);
              setShareModalOpen(true); 
            }}
          >
            <Icon name="share" />
          </IconWrapper>
        </div>
      </div>
    </>
  );
};
