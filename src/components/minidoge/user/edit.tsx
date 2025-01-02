import { memesTextSize, memesTitleSize } from "@/components/domain/styles";
import Icon from "@/components/icon";
import { Upload } from "@/components/upload";
import { Avatar, Button, Input, Modal } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import BindWallet from "./bindWallet";
export const UserUpload = () => {
  const { t } = useTranslation();
  const [url, setUrl] = useState<string | null>(null);
  return (
    <div className="flex flex-col gap-2 w-full">
      <span className={`${memesTitleSize} !text-base !font-bold`}>
        {t("memes.avatar")}
      </span>
      <div className="w-full border border-white/10 border-dotted rounded-md p-4">
        <div className="grid grid-cols-[auto_1fr] items-center gap-2 sm:gap-4">
          <Upload onSuccess={(urls) => setUrl(urls[0])}>
            <div className="w-24 h-24 sm:w-32 sm:h-32 cursor-pointer bg-white/10 aspect-square rounded-full flex items-center justify-center">
              {url ? (
                <Avatar
                  src={url}
                  className="w-full h-full aspect-square rounded-full"
                />
              ) : (
                <Icon
                  name="add"
                  className="text-2xl sm:text-3xl text-white/30"
                />
              )}
            </div>
          </Upload>

          <div className="flex flex-col gap-2">
            <div className="flex flex-col">
              <span
                className={`${memesTextSize} !text-xs sm:!text-sm opacity-50`}
              >
                {t("memes.limitText.image")}
              </span>
              <span
                className={`${memesTextSize} !text-xs sm:!text-sm opacity-50`}
              >
                {t("memes.limitText.gif")}
              </span>
            </div>
            <Upload onSuccess={(urls) => setUrl(urls[0])}>
              <Button
                type="default"
                className="!min-h-8 !max-w-28 !min-w-28 !text-xs sm:!text-sm"
              >
                {t("memes.selectFile")}
              </Button>
            </Upload>
          </div>
        </div>
      </div>
    </div>
  );
};

const ItemBox = ({
  children,
  title,
  text,
  className,
}: {
  children?: React.ReactNode;
  title: string;
  text: string;
  className?: string;
}) => {
  return (
    <div className={`flex flex-col gap-2 w-full ${className}`}>
      <span className={`${memesTitleSize} !text-sm sm:!text-base !font-bold`}>
        {title}
      </span>
      {children}
      <span
        className={`${memesTextSize} !text-xs sm:!text-sm opacity-50 -mt-1`}
      >
        {text}
      </span>
    </div>
  );
};

export default function UserEdit({
  open = false,
  onClose,
}: {
  open?: boolean;
  onClose: (value: boolean) => void;
}) {
  const { t } = useTranslation();
  const [verify, setVerify] = useState(false);
  const [loading, setLoading] = useState(false);
  const [bindWalletOpen, setBindWalletOpen] = useState(false);
  return (
    <>
      <BindWallet
        open={bindWalletOpen}
        onClose={setBindWalletOpen}
        onChange={() => {
          setVerify(false);
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            setVerify(true);
          }, 1000);
        }}
      />
      <Modal
        open={open}
        onCancel={() => onClose && onClose(!open)}
        footer={null}
        maskClosable={false}
        centered
      >
        <div className="flex flex-col items-center py-4 gap-3 sm:gap-5 mt-4">
          <UserUpload />
          <ItemBox title={t("memes.userName")} text={t("memes.userNameTip")}>
            <Input placeholder={t("memes.userNamePlaceholder")} size="large" />
          </ItemBox>
          <ItemBox title={t("memes.SOLWalletAddress")} text="">
            <div className="flex items-center gap-1">
              <Input
                placeholder={t("memes.SOLWalletAddressPlaceholder")}
                size="large"
              />
              &nbsp;
              <Button
                type="primary"
                size="large"
                loading={loading}
                className="aspect-square"
                onClick={() => {
                  setBindWalletOpen(true);
                }}
              >
                {loading ? "" : t("memes.verify")}
              </Button>
            </div>
          </ItemBox>
          <ItemBox title={t("memes.addLink")} text="">
            <div className="flex flex-col items-center gap-2">
              <Input
                addonBefore={<Icon name="telegram" />}
                placeholder={t("memes.telegramPlaceholder")}
                size="large"
              />
              <Input
                addonBefore={<Icon name="twitter" />}
                placeholder={t("memes.twitterPlaceholder")}
                size="large"
              />
            </div>
          </ItemBox>
          <Button
            type="primary"
            size="large"
            className="w-full"
            disabled={!verify}
          >
            {t("memes.submit")}
          </Button>
        </div>
      </Modal>
    </>
  );
}
