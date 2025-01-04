import { uploadFileAPI, formatFileIndex } from "@/api";
import { memesTextSize, memesTitleSize } from "@/components/domain/styles";
import { Upload } from "@/components/upload";
import { useSession } from "@clerk/clerk-react";
import { Button, Modal } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { message } from "antd";
export const Publish = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: (value: boolean) => void;
}) => {
  const { t } = useTranslation();
  const [url, setUrl] = useState<string[] | null>(null);
  const [files, setFiles] = useState<File[]>([]);
  const { session } = useSession();
  const [messageApi, messageContextHolder] = message.useMessage();
  const publishFile = async () => {
    const formData = new FormData();
    files.forEach((file, index) => {
      formData.append(`file-${formatFileIndex(index)}`, file);
    });
    const token = (await session?.getToken()) || "";
    const result = await uploadFileAPI(formData, token);
    if (result.success) {
      messageApi.success("上传文件成功");
      onClose(false);
      setUrl([]);
      setFiles([]);
    } else {
      messageApi.error("上传文件失败");
    }
  };
  return (
    <>
      {messageContextHolder}
      <Modal
        open={open}
        onCancel={() => onClose && onClose(!open)}
        footer={null}
        maskClosable={false}
        centered
      >
        <div className="flex flex-col items-center py-4 gap-3 sm:gap-5 mt-4">
          <div className="flex flex-col gap-2 w-full">
            <span className={`${memesTitleSize} !text-base !font-bold`}>
              {t("memes.publish")}
            </span>
            <Upload
              multiple
              onSuccess={(urls) => setUrl([...(url || []), ...urls])}
              disabled={Boolean(url && url.length >= 10)}
              setFiles={(file) => setFiles([...(files || []), ...file])}
              files={files}
            >
              <div className="w-full border border-white/10 border-dotted rounded-md p-5">
                <div className="grid grid-cols-[auto_1fr] items-center gap-2 sm:gap-4">
                  <div className="flex flex-col gap-3">
                    {url && url.length > 0 && (
                      <div className="flex flex-wrap items-center gap-2">
                        {url.map((url, index) => {
                          const isImage =
                            /\.(jpg|jpeg|png|gif)$/i.test(url) ||
                            url.startsWith("data:image/"); // 检查是否为图片类型或 Base64
                          const isVideo =
                            /\.(mp4)$/i.test(url) ||
                            url.startsWith("data:video/mp4"); // 检查是否为视频类型或 Base64
                          return (
                            <div
                              key={index}
                              className={`border border-white/10 rounded-md w-16 h-16 aspect-square  ${
                                isImage ? "p-2" : "p-0"
                              } overflow-hidden`}
                            >
                              {isImage ? (
                                <img src={url} alt="Uploaded" />
                              ) : isVideo ? (
                                <video
                                  controls
                                  autoPlay
                                  loop
                                  muted
                                  className="w-full h-full object-cover"
                                >
                                  <source src={url} type="video/mp4" />
                                  {/* 显示视频 您的浏览器不支持视频标签。 */}
                                </video>
                              ) : (
                                <span>{url}</span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}

                    <Button
                      type="default"
                      className="!min-h-8 !max-w-28 !min-w-28 !text-xs sm:!text-sm"
                      disabled={Boolean(url && url.length >= 10)}
                    >
                      {t("memes.selectFile")}
                    </Button>
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
                      <span
                        className={`${memesTextSize} !text-xs sm:!text-sm opacity-50`}
                      >
                        {t("memes.limitText.video")}
                      </span>
                      <span
                        className={`${memesTextSize} !text-xs sm:!text-sm opacity-50`}
                      >
                        {t("memes.limitText.batchUpload")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Upload>
          </div>
          <Button
            type="primary"
            className="w-full"
            size="large"
            disabled={!url}
            onClick={publishFile}
          >
            {t("memes.publish")}
          </Button>
        </div>
      </Modal>
    </>
  );
};
