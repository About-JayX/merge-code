import { memesTextSize, memesTitleSize } from "@/components/domain/styles";
import Icon from "@/components/icon";
import { Avatar } from "antd";
import { Ellipsis } from "antd-mobile";
import { IconWrapper } from "@/components/minidoge/miniDogeCard";
import { MiniDogeCardHeaderReward } from "./reward";
import { useState } from "react";
import { CopyModal } from "../../copyModal";
import { copy, isValidURL } from "@/util";
import { useTranslation } from "react-i18next";
import dayjs from "dayjs";
import { useNavigate } from "react-router";
export const MiniDogeCardHeader = ({
  address = "",
  ownerBy = "",
  createdAt = "",
  avatar = "",
}: {
  address?: string;
  ownerBy?: string;
  createdAt?: string;
  avatar?: string;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const { t } = useTranslation();
  const memes: any = t("memes", { returnObjects: true });
  const navigate = useNavigate();
  return (
    <>
      <MiniDogeCardHeaderReward
        title={memes.reward.title}
        text={memes.reward.text}
        address={address}
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <CopyModal
        open={shareModalOpen}
        onClose={(value) => setShareModalOpen(value)}
      />
      <div className="flex items-center  gap-2 xl:gap-4 xl:px-1 w-full">
        <div className="flex-1 grid grid-cols-[32px_1fr] xl:grid-cols-[48px_1fr] items-center gap-2">
          <Avatar
            src={
              avatar && (!avatar || isValidURL(avatar)) ? (
                avatar
              ) : (
                <Icon
                  name="avatar"
                  className="text-[32px] xl:text-[48px]"
                  onClick={() => navigate(`/memes/${ownerBy}`)}
                />
              )
            }
            className="w-8 h-8 xl:w-12 xl:h-12 border-1 bg-white aspect-square"
            onClick={() => navigate(`/memes/${ownerBy}`)}
          />

          <div className="flex flex-col gap-1 w-full">
            <span
              className={`${memesTitleSize} !text-xs !font-bold uppercase flex`}
            >
              <Ellipsis content={ownerBy} className="h-4 flex-1" />
              &nbsp;
              <Icon name="authenticate" className="text-base" />
            </span>
            <span className={`${memesTextSize} !text-xs opacity-50`}>
              {dayjs(createdAt).format("YYYY/MM/DD")}
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
