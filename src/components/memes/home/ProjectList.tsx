/**
 * ProjectList 组件
 * 展示 Memes.ac 平台上的项目列表
 * 包括项目的基本信息和社交媒体链接
 */

import { Icon } from "@/components";
import { Image, Typography, Card } from "antd";
import Mbutton from "@/components/memes/button";
import { Ellipsis } from "antd-mobile";
import { useEffect, useState } from "react";
import { domain as domainAPI } from "@/api";
import { CopyOutlined } from "@ant-design/icons";

const { Paragraph, Text } = Typography;

// Token 数据接口定义
interface Token {
  domain: string;
  logo_url?: string;
  name?: string;
  contract_address?: string;
  telegram_url?: string;
  twitter_url?: string;
  dexscreener_url?: string;
  pump_url?: string;
}

// 项目列表组件
export default function ProjectList() {
  // 状态管理
  const [tokens, setTokens] = useState<{
    data: Token[];
    total: number;
  }>({
    data: [],
    total: 1,
  });

  // 获取项目列表数据
  useEffect(() => {
    const fetchTokens = async () => {
      try {
        const result: any = await domainAPI.getListAPI({
          current: 1,
          pageSize: 12,
        });
        setTokens(result.data);
      } catch (error) {
        console.error("Error fetching project list:", error);
      }
    };

    fetchTokens();
  }, []);

  return (
    <div className="flex flex-col mt-2 sm:mt-2 gap-3 sm:gap-5 min-h-screen">
      {/* 项目说明文案区域 */}
      <div className="relative px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent dark:from-transparent dark:via-purple-400/5 dark:to-transparent blur-2xl -z-10"></div>
        <p className="text-base sm:text-lg dark:text-white/80 text-black/80 py-3 leading-relaxed font-medium">
          Discover and explore <span className="text-purple-600 dark:text-purple-400">MEMES projects</span> built with our fast and modern website builder. 
          <span className="block mt-0.5">Join the community and showcase your project.</span>
        </p>
      </div>

      {/* 标题区域：使用渐变色和装饰条 */}
      <header className="uppercase text-xl sm:text-3xl font-bold px-4">
        <div className="flex items-center relative gap-3">
          {/* 左侧渐变装饰条 */}
          <div className="w-1 h-full">
            <div className="w-1 h-full bg-gradient-to-b from-[#A440FD] to-[#0DC8EC] rounded-lg absolute top-0 left-0" />
          </div>
          {/* 标题文本，包含渐变色效果 */}
          <span>
            Projects On&nbsp;
            <span className="font-extrabold bg-gradient-to-r from-[#9F44FC] to-[#10C5EC] bg-clip-text text-transparent">
              Memes.ac
            </span>
          </span>
        </div>
      </header>

      {/* 项目卡片网格布局 */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 px-3 sm:px-4">
        {tokens.data.map((item, index) => (
          <a
            key={index}
            href={`/${item.domain}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow transition-all duration-300 border border-gray-200 dark:border-gray-700"
          >
            <div className="p-3 sm:p-4">
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
                  <h3 className="font-medium text-gray-900 dark:text-gray-100 truncate text-sm sm:text-base">
                    {item.name || "Unknown"}
                  </h3>
                  <a
                    href={`https://memes.ac/${item.domain}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-block text-xs sm:text-sm text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 truncate transition-colors cursor-pointer"
                  >
                    memes.ac/{item.domain}
                  </a>
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
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(item.telegram_url, '_blank');
                    }}
                    className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg bg-gray-900 hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 border border-gray-900 dark:border-gray-700 transition-colors"
                  >
                    <Icon name="telegram" className="text-sm sm:text-base text-white dark:text-gray-300" />
                  </button>
                )}
                {item.twitter_url && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(item.twitter_url, '_blank');
                    }}
                    className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg bg-gray-900 hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 border border-gray-900 dark:border-gray-700 transition-colors"
                  >
                    <Icon name="twitter" className="text-sm sm:text-base text-white dark:text-gray-300" />
                  </button>
                )}
                {item.dexscreener_url && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(item.dexscreener_url, '_blank');
                    }}
                    className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg bg-gray-900 hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 border border-gray-900 dark:border-gray-700 transition-colors"
                  >
                    <Icon name="dexscreener" className="text-sm sm:text-base text-white dark:text-gray-300" />
                  </button>
                )}
                {item.pump_url && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(item.pump_url, '_blank');
                    }}
                    className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg bg-gray-900 hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 border border-gray-900 dark:border-gray-700 transition-colors"
                  >
                    <Icon name="pump" className="text-sm sm:text-base text-white dark:text-gray-300" />
                  </button>
                )}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
