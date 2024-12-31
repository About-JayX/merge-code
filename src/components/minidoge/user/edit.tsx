import { memesTextSize, memesTitleSize } from "@/components/domain/styles";
import Icon from "@/components/icon";
import { Upload } from "@/components/upload";
import { Avatar, Button, Input, Modal } from "antd";
import { useState } from "react";

export const UserUpload = () => {
  const [url, setUrl] = useState<string | null>(null);
  return (
    <div className="flex flex-col gap-2 w-full">
      <span className={`${memesTitleSize} !text-base !font-bold`}>头像</span>
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
                图片：JPG/PNG，≤5MB
              </span>
              <span
                className={`${memesTextSize} !text-xs sm:!text-sm opacity-50`}
              >
                GIF：≤10MB
              </span>
              <span
                className={`${memesTextSize} !text-xs sm:!text-sm opacity-50`}
              >
                视频：MP4，≤50MB，≤30秒
              </span>
            </div>
            <Upload onSuccess={(urls) => setUrl(urls[0])}>
              <Button
                type="default"
                className="!min-h-8 !max-w-28 !min-w-28 !text-xs sm:!text-sm"
              >
                选择文件
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
  const [verify, setVerify] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <Modal
      open={open}
      onCancel={() => onClose && onClose(!open)}
      footer={null}
      maskClosable={false}
      centered
    >
      <div className="flex flex-col items-center py-4 gap-3 sm:gap-5">
        <UserUpload />
        <ItemBox
          title="用户名"
          text="4-60个字符,支持中英文、数字、下划线和减号"
        >
          <Input placeholder="请输入用户名" size="large" />
        </ItemBox>
        <ItemBox title="SOL钱包地址" text="">
          <div className="flex items-center gap-1">
            <Input placeholder="请输入SOL钱包地址" size="large" />
            &nbsp;
            <Button
              type="primary"
              size="large"
              loading={loading}
              className="aspect-square"
              onClick={() => {
                setVerify(false);
                setLoading(true);
                setTimeout(() => {
                  setLoading(false);
                  setVerify(true);
                }, 1000);
              }}
            >
              {loading ? "" : "验证"}
            </Button>
          </div>
        </ItemBox>
        <ItemBox title="增加链接" text="">
          <div className="flex flex-col items-center gap-2">
            <Input
              addonBefore={<Icon name="telegram" />}
              placeholder="请输入Telegram链接"
              size="large"
            />
            <Input
              addonBefore={<Icon name="twitter" />}
              placeholder="请输入Twitter链接"
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
          提交
        </Button>
      </div>
    </Modal>
  );
}
