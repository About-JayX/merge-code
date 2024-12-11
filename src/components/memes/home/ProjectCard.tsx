import { useEffect } from "react";
import { Typography, Image } from "antd";
import Icon from "@/components/icon";
import { TokenItem } from "@/types/domain";
import { Ellipsis } from "antd-mobile";

const { Paragraph } = Typography;

interface ProjectCardProps {
  item: TokenItem;
}

export default function ProjectCard({ item }: ProjectCardProps) {
  const handleSocialClick = (e: React.MouseEvent<HTMLButtonElement>, url: string) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(url, '_blank');
  };

  return (
    <div className="group relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/20 dark:to-gray-700/20 rounded-2xl shadow-sm hover:shadow-xl dark:shadow-gray-900/30 hover:dark:shadow-gray-900/50 transition-all duration-300 border-2 border-gray-200 dark:border-gray-600 hover:border-gray-300 hover:dark:border-gray-500 active:scale-[0.98] hover:-translate-y-0.5 backdrop-blur-sm overflow-hidden">
      {/* 背景图片容器 */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url("${item.logo_url || "/default-logo.png"}")`,
          backgroundSize: '180%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.9,
          filter: 'blur(8px) saturate(130%)',
        }}
      />

      {/* 渐变遮罩 */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/65 to-white/70 dark:from-gray-900/40 dark:via-gray-900/45 dark:to-gray-900/50" />

      {/* 内容区域 */}
      <a
        href={`/${item.domain}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative p-3 sm:p-4"
      >
        {/* 头像和名称部分 */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="relative flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10">
            <div className="w-full h-full rounded-full overflow-hidden bg-black dark:bg-gray-700">
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
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 truncate text-base sm:text-lg tracking-wide">
              {item.name || "Unknown"}
            </h3>
            <span className="inline-block text-xs sm:text-sm text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 truncate transition-colors cursor-pointer">
              memes.ac/{item.domain}
            </span>
          </div>
        </div>

        {/* 合约地址部分 */}
        <div className="mt-2 sm:mt-3 flex items-center gap-2 bg-gray-100 dark:bg-gray-700/50 rounded-lg py-1.5 sm:py-2 px-2 sm:px-3">
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
        <div className="mt-2 sm:mt-3 flex gap-1.5 sm:gap-2">
          {item.telegram_url && (
            <button
              onClick={(e) => handleSocialClick(e, item.telegram_url!)}
              className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg bg-white/80 hover:bg-white dark:bg-black/80 dark:hover:bg-black border border-gray-200 dark:border-gray-700 transition-all duration-200 hover:scale-110"
            >
              <Icon name="telegram" className="text-sm sm:text-base" />
            </button>
          )}
          {item.twitter_url && (
            <button
              onClick={(e) => handleSocialClick(e, item.twitter_url!)}
              className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg bg-white/80 hover:bg-white dark:bg-black/80 dark:hover:bg-black border border-gray-200 dark:border-gray-700 transition-all duration-200 hover:scale-110"
            >
              <Icon name="twitter" className="text-sm sm:text-base" />
            </button>
          )}
          {item.dexscreener_url && (
            <button
              onClick={(e) => handleSocialClick(e, item.dexscreener_url!)}
              className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg bg-white/80 hover:bg-white dark:bg-black/80 dark:hover:bg-black border border-gray-200 dark:border-gray-700 transition-all duration-200 hover:scale-110"
            >
              <Icon name="dexscreener" className="text-sm sm:text-base" />
            </button>
          )}
          {item.pump_url && (
            <button
              onClick={(e) => handleSocialClick(e, item.pump_url!)}
              className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg bg-white/80 hover:bg-white dark:bg-black/80 dark:hover:bg-black border border-gray-200 dark:border-gray-700 transition-all duration-200 hover:scale-110"
            >
              <Icon name="pump" className="text-sm sm:text-base" />
            </button>
          )}
        </div>
      </a>
    </div>
  );
}
