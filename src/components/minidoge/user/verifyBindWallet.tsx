import { memesTextSize, memesTitleSize } from "@/components/domain/styles";
import { Button, Modal } from "antd";
import { Ellipsis } from "antd-mobile";
import { useTranslation } from "react-i18next";

export default function VerifyBindWallet({ open, onClose, onChange }: { open: boolean, onClose: (value: boolean) => void, onChange: () => void }) {
  const { t } = useTranslation();
  return (
    <Modal open={open} onCancel={() => onClose(false)} footer={null} centered>
      <div className="flex flex-col items-center py-4 gap-4 sm:gap-7 mt-4">
        <div className="flex flex-col items-center gap-1">
          <span className={`${memesTitleSize} !text-3xl !font-bold`}>
            {t('memes.bindWallet.title')}
          </span>
          <span
            className={`${memesTextSize} !text-xs !font-medium text-[#B8B8B8]`}
          >
            {t('memes.bindWallet.text')}
          </span>
        </div>
        <span
          className={`${memesTextSize} w-3/4 !text-sm !font-medium text-[#B8B8B8] flex items-center`}
        >
          {t('memes.bindWallet.solWalletAddress')}:&nbsp;
          <Ellipsis
            content="3M6uE2dMFzLTPgKZ1bpVgQTfgmYTQ6hMWojk4KMHMWtq"
            direction="middle"
            className="text-white"
          />
        </span>
        <div className="w-full flex gap-2">
          <Button type="default" size="large" className="w-full" onClick={() => onClose(false)}>
            {t('memes.cancel')}
          </Button>
          <Button type="primary" size="large" className="w-full" onClick={onChange}>
            {t('memes.confirm')}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
