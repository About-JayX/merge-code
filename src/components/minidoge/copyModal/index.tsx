import Tgs from "@/components/tgs";
import { Modal } from "antd";
import { useTranslation } from "react-i18next";

export const CopyModal = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: (value: boolean) => void;
}) => {
  const { t } = useTranslation();

  return (
    <Modal open={open} centered footer={null} closable={false} width="auto">
      <div className="flex flex-col items-center px-8 py-4">
        {open && (
          <Tgs
            name="success"
            className="!w-24 !h-24 sm:!w-32 sm:!h-32 md:!w-40 md:!h-40"
            onChange={(value) => open && onClose?.(!value)}
          />
        )}
        <span className="text-lg sm:text-xl md:text-2xl font-bold mt-2">
          {t("message.copy.success")}
        </span>
      </div>
    </Modal>
  );
};
