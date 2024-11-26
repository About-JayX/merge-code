import { ImageProps, Image as Images } from "antd";
import { useState } from "react";
export default function DomainImage({ ...props }: ImageProps) {
  const [url, setUrl] = useState<string>("");
  const image = new Image();
  image.src = props?.src || "";
  image.addEventListener("load", () =>
    setTimeout(() => {
      setUrl(image.src);
    }, 500)
  );
  return url ? (
    <Images
      src={url}
      width="100%"
      height="100%"
      preview={false}
      className={`object-cover rounded-3xl bg-white/10 ${props?.className}`}
      {...props}
    />
  ) : (
    <div className={`rounded-3xl bg-white/10 w-full h-full ${props?.className}`} />
  );
}
