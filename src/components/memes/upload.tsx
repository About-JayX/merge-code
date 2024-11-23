import { message, Upload as AntdUpload } from "antd";

import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { useState } from "react";

export default function Upload({
  image,
  onChange,
}: {
  image?: string;
  onChange?: (image: string) => void;
}) {
  const [url, setUrl] = useState<string>();
  const [loading, setLoading] = useState(false);
  const handleLocalRead = (file: File) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const base64Url = event.target?.result as string;
      setUrl(base64Url); // 将 Base64 图片 URL 保存到状态中
      onChange && onChange(base64Url);
      setLoading(false); // 读取完成，停止加载状态
    };
    reader.readAsDataURL(file); // 将文件读取为 Base64 格式
  };

  const beforeUpload = (file: File) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
      return false; // 阻止上传
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
      return false; // 阻止上传
    }
    setLoading(true); // 开始加载
    handleLocalRead(file); // 本地读取文件
    return false; // 阻止上传到服务器
  };

  const uploadButton = (
    <div style={{ textAlign: "center" }}>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  return (
    <AntdUpload
      name="avatar"
      listType="picture-card"
      className="avatar-uploader overflow-hidden"
      showUploadList={false}
      beforeUpload={beforeUpload}
    >
      {url ? (
        <div style={{ textAlign: "center" }}>
          <img src={image || url} style={{ width: "100%" }} />
        </div>
      ) : (
        uploadButton
      )}
    </AntdUpload>
  );
}
