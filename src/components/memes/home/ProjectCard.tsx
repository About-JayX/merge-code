import { Typography, Image } from "antd";
import Icon from "@/components/icon";
import { Ellipsis } from "antd-mobile";
import Card from "../card";
import Button from "../button";

const { Paragraph } = Typography;

interface ProjectCardProps {
  item: any;
}

export default function ProjectCard({ item }: ProjectCardProps) {
  const handleSocialClick = (
    // e: React.MouseEvent<HTMLButtonElement>,
    url: string
  ) => {
    // e.preventDefault();
    // e.stopPropagation();
    window.open(url, "_blank");
  };

  return (
    <Card>
      {/* 背景图片容器 */}
      {/* <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url("${item.logo_url || "/default-logo.png"}")`,
          backgroundSize: "180%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.9,
          filter: "blur(8px) saturate(130%)",
        }}
      /> */}

      <a
        href={`/${item.domain.toLowerCase()}`}
        target="_blank"
        rel="noopener noreferrer"
        className=" relative p-3 sm:p-4 text-current flex flex-col gap-2 sm:gap-3"
      >
        {/* 头像和名称部分 */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="relative flex-shrink-0 w-10 h-10 sm:w-16 sm:h-16">
            <div className="w-full h-full rounded-full border !border-[--border-color] overflow-hidden">
              <Image
                loading="lazy"
                className="w-full h-full object-cover"
                src={item.logo_url || "/default-logo.png"}
                alt={item.name || "Project Logo"}
                fallback="/default-logo.png"
                preview={false}
              />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 truncate text-base sm:text-2xl tracking-wide">
              {item.name || "Unknown"}
            </h3>
            <Ellipsis
              direction="end"
              className="block text-xs sm:text-sm text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 truncate transition-colors cursor-pointer"
              content={`memes.ac/${item.domain}`}
            />
          </div>
        </div>

        {/* 合约地址部分 */}
        <div className=" flex items-center  gap-2 !bg-black/5 dark:!bg-white/5  border border-[--border-color] rounded-lg py-1.5 sm:py-2 px-2 sm:px-3">
          <Paragraph
            className="flex-1 mb-0 flex items-center [&_.ant-typography-copy]:order-last [&_.ant-typography-copy]:ml-2"
            copyable={{
              text: item?.contract_address || "",
            }}
          >
            <Ellipsis
              className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 flex-1"
              direction="middle"
              content={item?.contract_address || "No Address"}
            />
          </Paragraph>
        </div>

        {/* 社交媒体按钮部分 */}
        <div className="flex gap-1.5 sm:gap-2">
          {item.telegram_url && (
            <Button
              type="card"
              onClick={() => handleSocialClick(item.telegram_url!)}
              className="!min-w-7 !min-h-7 sm:!min-w-10 sm:!min-h-10"
            >
              <Icon name="telegram" className="text-sm sm:text-base" />
            </Button>
          )}
          {item.twitter_url && (
            <Button
              type="card"
              onClick={() => handleSocialClick(item.twitter_url!)}
              className="!min-w-7 !min-h-7 sm:!min-w-10 sm:!min-h-10"
            >
              <Icon name="twitter" className="text-sm sm:text-base" />
            </Button>
          )}
          {item.dexscreener_url && (
            <Button
              type="card"
              onClick={() => handleSocialClick(item.dexscreener_url!)}
              className="!min-w-7 !min-h-7 sm:!min-w-10 sm:!min-h-10"
            >
              <Icon name="dexscreener" className="text-sm sm:text-base" />
            </Button>
          )}
          {item.pump_url && (
            <Button
              type="card"
              onClick={() => handleSocialClick(item.pump_url!)}
              className="!min-w-7 !min-h-7 sm:!min-w-10 sm:!min-h-10"
            >
              <Icon name="pump" className="text-sm sm:text-base" />
            </Button>
          )}
        </div>
      </a>
    </Card>
  );
}
